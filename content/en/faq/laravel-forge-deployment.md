---
title: Laravel Forge deployment
description: How to deploy Nuxt.js app with Laravel Forge?
---

## 1- Pre-requisits

Before starting to describe the process of deploying a Nuxt app with Laravel Forge, I will assume that you have already:

* Deployed a server with Forge using your cloud service provider of choice. This server must be running Node v8 or later (see below for upgrade)
* You rgithub account is linked with Forge
* Created a Nuxt app and linked it to a github repository under a master branch. We will call this repository `nuxt-forge-client` 
* Setup a domain that we will call `nuxt-forge.com`. Please make sure to replace any reference to this domain by your own domain. Please make sure your domain is pointing to your server IP provisioned with Forge.

To update your Node version with Forge:
* connect to your server via terminal with ssh
* edit the `/etc/apt/sources.list.d/nodesource.list` file by just replacing the right version number. From me, I just replaced 6 to 8
* `sudo apt-get update && sudo apt-get upgrade` for the changes to take effect. You will find your sudo password with the email you received from Forge when provisioning your server.

## 2- Setup a new site in Forge

* Domain: `nuxt-forge.com`
* Aliases: ` `(Leave it  blank)
* Project type: `Static HTML`
* Web Directory: `/`
* Leave the `Allow Wildcard Sub-Domains` checkbox unchecked

**Note:** The Project type in Forge is not linked to the project type with Nuxt. Using this setting will still enable you to use SPA and Universal apps with Nuxt.js . 

## 3- Github repository

Under your server, select the site you have just created and under Apps in the menu, link your Github repository to your new site:
* Provider: `Github`
* Repository: `sbkl/nuxt-forge-client` (sbkl is my Github username. nuxt-forge-client the Github repository)
* Branch: `master`
* Uncheck the `Install Composer dependencies` as we are not using PHP for this app
* Click `Install Repository`

## 4- SSL

Once your new site is available, select SSL in the menu and add your SSL certificates. I'm using Let's Encrypt. You need to wait for Forge to install the certificates and activate them before to go further.

## 5- Apps: Deployment

Select Apps in the menu and click on `Enable Quick Deploy` under the Deployment section.

Quick deploy is a functionality that Forge is providing. Each time you push new commits to your project under the master branch, Forge will automatically deploy the changes to production using the script under the Deploy Script section below.

## 6- Apps: Deploy Script

In the Deploy Script section, replace the initial script with the script below:

```
cd /home/forge/nuxt-forge.com

git checkout .

git pull origin master

npm install --production

npm run build

pm2 start npm --name "nuxt-forge.com" --watch -- start
```
Once done, click on `Save Script`.

## 7- Nginx configuration file

Go at the bottom of the page where you should find a button `Files`. Click on this button and select `Edit Nginx configuration`.

The Nginx config below is largely inspired by the existing one under the [Using nginx as a proxy](https://nuxtjs.org/faq/nginx-proxy) section of the Nuxt.js faq but got some differences. It also assumes that you already have created your SSL certificates as described above.

```
# FORGE CONFIG (DO NOT REMOVE!)
include forge-conf/nuxt-forge.com/before/*;

map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}
        
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name .nuxt-forge.com;
    root /home/forge/nuxt-forge.com/;

    # FORGE SSL (DO NOT REMOVE!)
    ssl_certificate /etc/nginx/ssl/nuxt-forge.com/123456/server.crt;
    ssl_certificate_key /etc/nginx/ssl/nuxt-forge.com/123456/server.key;

    ssl_protocols TLSv1.2;
    ssl_ciphers ECDHE-*********************************************************************;
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    charset utf-8;

    # FORGE CONFIG (DO NOT REMOVE!)
    include forge-conf/nuxt-forge.com/server/*;

    location / {
        expires $expires;

        proxy_redirect off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # set the address of the Node.js
    }

    access_log off;
    error_log  /var/log/nginx/nuxt-forge.com-error.log error;

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
# FORGE CONFIG (DO NOT REMOVE!)
include forge-conf/nuxt-forge.com/after/*;
```
Once done, click the `Save` button.

Once complete, you should see the following message:

nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

Click `OK`.

## 8- Time to deploy

The configuration is now ready to deploy your app for the first time.

Select Apps in the menu and click the `Deploy` button under the Deployment section and wait for it to finish. Once done, you can visit your domain and should be able to see your app live!

## 9- Last step

Before to make changes to your master branch and enjoy the quick deploy functionality, you need to modify the script section as follow:

* Replace:

`pm2 start npm --name "nuxt-forge.com" --watch -- start`

* With:

`pm2 restart nuxt-forge.com`

This way, each time you push new changes to your master branch, the deployment process will also restart your node.js server instance with pm2 to take into account the changes.

Don't forget to click on `Save Script`.

