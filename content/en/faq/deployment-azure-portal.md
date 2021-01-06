---
title: How to deploy on Azure Portal?
description: How to deploy a Nuxt.js application on Azure Portal?
menu: Deploy on Azure Portal
category: deployment
position: 202
---

## Requirements

- It is required that you select a backend when setting up the project. Even if you don't need it, or else the site won't start up.
- The server is running Node 8 or greater

## What if I already have a project without an backend?

No worries. It is easy to add an express server to an existing project.

Create a new folder called `server` in the root of the project. Then create an `index.js` file inside the `server` folder and paste the following inside the `index.js`:

```
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
```

Then edit your nuxt.config.js:

Before:

```
import pkg from './package'

export default {
... config
}
```

After:

```
module.exports = {
... config
}

```

**Remember to remove the references to the pkg object inside the config.**

That's it!

For an Azure App Service deployment, make sure you set the following two environment variables (application settings) in App Service &rsaquo; Settings &rsaquo; Configuration &rsaquo; Application settings.

```
HOST: '0.0.0.0'
NODE_ENV: 'production'
```

## How to set Node version on Web App in DevOps

You can set the Node version on the server, via the App setting inside the "Deploy Azure Web Service" task in the release pipeline

Add this to the App settings field under "Application and Configuration Settings"

```
-WEBSITE_NODE_DEFAULT_VERSION 10.16.3
```

It's recommended to use the LTS version.

## Artifacts

If you are using Azure DevOps and let the build pipeline do its work you and want to store artifacts. Files which are prefixed with a `.` must be moved to the artifact folder explicitly. Then you can create an Artifact Archive and download it afterwards in your Release Deployment.

## Running the webserver

For Azure Portal you will need a `web.config` file. If not supplied, it will create one itself. This one **won't work for Nuxt** though. Add a web.config file to your repository. For the latest version of `Nuxt` the server file is located at `server/index.js`. In the web.config you don't specify the exact path `server/index.js` but just `server`. See the example web.config below. If you don't do this the logs will tell you that Vue cannot find any routes.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
     This configuration file is required if iisnode is used to run node processes behind
     IIS or IIS Express.  For more information, visit:

     https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config
-->

<configuration>
  <system.webServer>
    <!-- Visit https://azure.microsoft.com/en-us/blog/introduction-to-websockets-on-windows-azure-web-sites/ for more information on WebSocket support -->
    <webSocket enabled="false" />
    <handlers>
      <!-- Indicates that the server.js file is a Node.js site to be handled by the iisnode module -->
      <add name="iisnode" path="server" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <!-- Do not interfere with requests for node-inspector debugging -->
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server\/debug[\/]?" />
        </rule>

        <!-- First we consider whether the incoming URL matches a physical file in the /public folder -->
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>

        <!-- All other URLs are mapped to the Node.js site entry point -->
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server"/>
        </rule>
      </rules>
    </rewrite>

    <!-- 'bin' directory has no special meaning in Node.js and apps can be placed in it -->
    <security>
      <requestFiltering>
        <hiddenSegments>
          <remove segment="bin"/>
        </hiddenSegments>
      </requestFiltering>
    </security>

    <!-- Make sure error responses are left untouched -->
    <httpErrors existingResponse="PassThrough" />

    <!--
      You can control how Node is hosted within IIS using the following options:
        * watchedFiles: semi-colon separated list of files that will be watched for changes to restart the server
        * node_env: will be propagated to node as NODE_ENV environment variable
        * debuggingEnabled - controls whether the built-in debugger is enabled

      See https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config for a full list of options
    -->
    <!--<iisnode watchedFiles="web.config;*.js"/>-->
  </system.webServer>
</configuration>
```
