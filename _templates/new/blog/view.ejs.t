---
to: "content/en/blog/<%= h.inflection.dasherize(title) %>.md"
---
---
title: <%= title %>
description: <%= description %>
imgUrl: blog/<%= h.inflection.dasherize(title) %>/main.png
date: <%= date %>
authors:
  - name: <%= authorName %>
    avatarUrl: <%= authorAvatar %>
    link: <%= authorLink %>
tags:
  - <%= tags %>
---

