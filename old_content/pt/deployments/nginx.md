---
template: guide
title: NGINX
description: Como usar o nginx como um proxy reverso?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Nginx.svg"
  dark: "/img/companies/square/dark/Nginx.svg"
---
# Usando NGINX como um proxy (buscador) reverso

Como usar o nginx como um proxy reverso?

---

```nginx
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen          80;             # a porta do nginx está ouvindo na
    server_name     your-domain;    # configure o seu domínio aqui

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    location / {
        expires $expires;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # define o endereça da instância do Node.js aqui
    }
}
```

## Usando nginx com páginas geradas e um cacheamento de proxy como fallback:

Se você tem um website de volume alto com mudanças regular de conteúdo, você pode querer tirar vantagem das capacidades de gerar do Nuxt e [cacheamento do nginx](https://www.nginx.com/blog/nginx-caching-guide).

Abaixo está um exemplo de configuração. Mantenha em mente que:

- a pasta raíz deve ser a mesma que a definida pela [configuração do generate.dir](/docs/configuration-glossary/configuration-generate#dir)
- os cabeçalhos expire definido pelo Nuxt são divididos (devido ao cache)
- ambos Nuxt e nginx podem definir cabeçalhos adicionais, é aconselhado escolher um (se em dúvida, escolha nginx)
- se seu site é maioritariamente estático, aumente os números do `proxy_cache_path_inactive` e `proxy_cache_valid`

Se você não gerar suas rotas mas ainda deseja tirar vantagem do cache do nginx:

- remova a entrada `root`
- mude `location @proxy {` para `location / {`
- remova as outras duas entradas de `location`

```nginx
proxy_cache_path  /data/nginx/cache levels=1:2 keys_zone=nuxt-cache:25m max_size=1g inactive=60m use_temp_path=off;

map $sent_http_content_type $expires {
    "text/html"                 1h; defina isto para suas necessidades
    "text/html; charset=utf-8"  1h; defina isto para suas necessidades
    default                     7d; defina isto para suas necessidades
}

server {
    listen          80;             # a porta do nginx está ouvindo na
    server_name     your-domain;    # configure o seu domínio aqui

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    charset utf-8;

    root /var/www/NUXT_PROJECT_PATH/dist;

    location ~* \.(?:ico|gif|jpe?g|png|woff2?|eot|otf|ttf|svg|js|css)$ {
        expires $expires;
        add_header Pragma public;
        add_header Cache-Control "public";

        try_files $uri $uri/ @proxy;
    }

    location / {
        expires $expires;
        add_header Content-Security-Policy "default-src 'self' 'unsafe-inline';";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
        add_header X-Frame-Options "SAMEORIGIN";

        try_files $uri $uri/index.html @proxy; # para generate.subFolders: true
        # try_files $uri $uri.html @proxy; # para generate.subFolders: false
    }

    location @proxy {
        expires $expires;
        add_header Content-Security-Policy "default-src 'self' 'unsafe-inline';";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-Cache-Status $upstream_cache_status;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_ignore_headers        Cache-Control;
        proxy_http_version          1.1;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                  http://127.0.0.1:3000; # define o endereça da instância do Node.js aqui
        proxy_cache                 nuxt-cache;
        proxy_cache_bypass          $arg_nocache; # probably better to change this
        proxy_cache_valid           200 302  60m; # set this to your needs
        proxy_cache_valid           404      1m;  # set this to your needs
        proxy_cache_lock            on;
        proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
        proxy_cache_key             $uri$is_args$args;
    }
}
```

## configuração do nginx para o Laravel Forge:

Mude `YOUR_WEBSITE_FOLDER` para a pasta do seu website e `YOUR_WEBSITE_DOMAIN` para a URL do seu website. O Laravel Forge terá preenchido esses valores por você mas certifique-se de consultar duas vezes.

```nginx
# CONFIGURAÇÃO DO FORGE (NÃO REMOVA!)
include forge-conf/YOUR_WEBSITE_FOLDER/before/*;

map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen 80;
    listen [::]:80;
    server_name YOUR_WEBSITE_DOMAIN;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    charset utf-8;

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    # CONFIGURAÇÃO DO FORGE (NÃO REMOVA!)
    include forge-conf/YOUR_WEBSITE_FOLDER/server/*;

    location / {
        expires $expires;

        proxy_redirect off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # define o endereço do Node.js
    }

    access_log off;
    error_log  /var/log/nginx/YOUR_WEBSITE_FOLDER-error.log error;

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

# CONFIGURAÇÃO DO FORGE (NÃO REMOVA!)
include forge-conf/YOUR_WEBSITE_FOLDER/after/*;
```

## Segurar o Laravel Forge com TLS:

É melhor deixar o Laravel Forge fazer a edição do `nginx.config` por você, ao clicar em Sites -> YOUR_WEBSITE_DOMAIN (SERVER_NAME) e depois clicar no SSL e instalar um certificado a partir de um dos provedores. Lembre de ativar o certificado. Seu `nginx.conf` deve agora parecer com algo como isto:

```nginx
# CONFIGURAÇÃO DO FORGE (NÃO REMOVA!)
include forge-conf/YOUR_WEBSITE_FOLDER/before/*;

map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name YOUR_WEBSITE_DOMAIN;

    # SSL DO FORGE (NÃO REMOVA!)
    ssl_certificate /etc/nginx/ssl/YOUR_WEBSITE_FOLDER/258880/server.crt;
    ssl_certificate_key /etc/nginx/ssl/YOUR_WEBSITE_FOLDER/258880/server.key;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA:!3DES';
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    charset utf-8;

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    # FORGE CONFIG (DOT NOT REMOVE!)
    # CONFIGURAÇÃO DO FORGE (NÃO REMOVA!)
    include forge-conf/YOUR_WEBSITE_FOLDER/server/*;

    location / {
        expires $expires;

        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_redirect              off;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # define o endereço do Node.js
    }

    access_log off;
    error_log  /var/log/nginx/YOUR_WEBSITE_FOLDER-error.log error;

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

# CONFIGURAÇÃO DO FORGE (NÃO REMOVA!)
include forge-conf/YOUR_WEBSITE_FOLDER/after/*;
```
