---
template: guide
title: NGINX
description: リバースプロキシとして NGINX の使い方
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Nginx.svg"
  dark: "/img/companies/square/dark/Nginx.svg"
---
# リバースプロキシとして NGINX を使う

リバースプロキシとして NGINX の使い方

---

```nginx
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen          80;             # nginxがリッスンしているポート
    server_name     your-domain;    # ここにドメインをセットアップ

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
        proxy_pass                          http://127.0.0.1:3000; # ここに Node.js インスタンスのアドレスを設定
    }
}
```

## 生成されたページとフォールバックとしてキャッシングプロキシを使用した nginx

コンテンツが定期的に変更される大容量のウェブサイトをお持ちの場合、Nuxt の生成機能と[nginx caching](https://www.nginx.com/blog/nginx-caching-guide)の恩恵を受けることができるでしょう。

以下に設定例を示します。覚えてください：

- ルートフォルダは、[generate.dir の設定](/docs/configuration-glossary/configuration-generate#dir)で設定したものと同じである必要があります。
- Nuxt で設定された期限切れのヘッダーは削除されます（キャッシュがあるため）。
- Nuxt と nginx の両方で追加のヘッダーを設定できますが、どちらかを選択することをお勧めします（迷ったら nginx を選択してください）。
- サイトのほとんどが静的なものであれば、`proxy_cache_path inactive` と `proxy_cache_valid` の値を増やしてください。

ルートを生成しなくても、nginx のキャッシュの恩恵を受けたい場合：

- `root` エントリを削除
- `location @proxy {` を `location / {` に変更
- 他 2 `location` エントリを削除

```nginx
proxy_cache_path  /data/nginx/cache levels=1:2 keys_zone=nuxt-cache:25m max_size=1g inactive=60m use_temp_path=off;

map $sent_http_content_type $expires {
    "text/html"                 1h; # これが必要なら設定
    "text/html; charset=utf-8"  1h; # これが必要なら設定
    default                     7d; # これが必要なら設定
}

server {
    listen          80;             # nginx がリッスンするポート
    server_name     your-domain;    # ここにドメインをセットアップ

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

        try_files $uri $uri/index.html @proxy; # generate.subFolders: true 向け
        # try_files $uri $uri.html @proxy; # generate.subFolders: false 向け
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
        proxy_pass                  http://127.0.0.1:3000; # ここに Node.js インスタンスのアドレスを設定
        proxy_cache                 nuxt-cache;
        proxy_cache_bypass          $arg_nocache; # これは変更した方がよいでしょう
        proxy_cache_valid           200 302  60m; # これが必要なら設定
        proxy_cache_valid           404      1m;  # これが必要なら設定
        proxy_cache_lock            on;
        proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
        proxy_cache_key             $uri$is_args$args;
    }
}
```

## #Laravel Forge 向けの nginx 設定:

`YOUR_WEBSITE_FOLDER` をウェブサイトのフォルダに、`YOUR_WEBSITE_DOMAIN` をウェブサイトのURLに変更してください。Laravel Forge がこれらの値を入力してくれていますが、必ず再確認してください。

```nginx
# FORGE 設定 (削除しないでください！)
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

    # FORGE 設定 (削除しないでください！)
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
        proxy_pass                          http://127.0.0.1:3000; # ここに Node.js インスタンスのアドレスを設定
    }

    access_log off;
    error_log  /var/log/nginx/YOUR_WEBSITE_FOLDER-error.log error;

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

# FORGE 設定 (削除しないでください！)
include forge-conf/YOUR_WEBSITE_FOLDER/after/*;
```

## TLS で Laravel Forgeをセキュアにする

Laravel Forge に `nginx.conf` の編集を任せるのが一番良いでしょう、Sitesをクリックして → YOUR_WEBSITE_DOMAIN（SERVER_NAME）をクリックし、SSL をクリックして、いずれかのプロバイダーの証明書をインストールします。証明書を有効にすることを忘れないでください。これであなたの `nginx.conf` は以下のようになるはずです：

```nginx
# FORGE 設定 (削除しないでください！)
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

    # FORGE 設定 (削除しないでください！)
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

    # FORGE 設定 (削除しないでください！)
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
        proxy_pass                          http://127.0.0.1:3000; # ここに Node.js インスタンスのアドレスを設定
    }

    access_log off;
    error_log  /var/log/nginx/YOUR_WEBSITE_FOLDER-error.log error;

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

# FORGE 設定 (削除しないでください！)
include forge-conf/YOUR_WEBSITE_FOLDER/after/*;
```
