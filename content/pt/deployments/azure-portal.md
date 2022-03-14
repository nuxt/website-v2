---
template: guide
title: Azure Portal
description: Como desdobrar uma aplicação Nuxt no Azure Portal?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Azure.svg"
  dark: "/img/companies/square/dark/Azure.svg"
---
# Desdobrar o Nuxt no Azure Portal

Como desdobrar uma aplicação Nuxt no Azure Portal?

---

## Requisitos

- É obrigatório que você selecione um backend quando estiver configurando o projeto. Mesmo se você não precisar dele, ou senão o sítio não será iniciado.
- O servidor esteja executando no Node 8 ou superior

## O que acontece se Eu já tiver um projeto sem um backend?

Não se preocupe. É fácil adicionar um servidor express à um projeto existente.

Crie uma nova pasta chamada `server` dentro da raiz do projeto. Depois crie um ficheiro `index.js` dentro da pasta `server` e cole o seguinte dentro do `index.js`:

```js
const express = require('express')
const consola = require('consola')
const { loadNuxt } = require('nuxt-start')
const app = express()

async function start () {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  await nuxt.listen(process.env.PORT, process.env.HOST)
}

start()

```

Depois edite o seu ficheiro `nuxt.config.js`:

Antes:

```js
import pkg from './package'

export default {
... config
}
```

Depois:

```js
module.exports = {
... config
}

```

**Lembre de remover as referências ao objeto pkg dentro do config.**

E é isso!

Para um desdobramento no Azure App Service, certifique-se de configurar as duas seguintes varáveis de ambiente (application settings, configurações da aplicação) em App Service (Serviço da Aplicação) > Settings (Definições) > Configuration (Configurações) > Application settings (configurações da aplicação).

```
HOST: '0.0.0.0'
NODE_ENV: 'production'
```

## Como definir a versão do Node na Aplicação Web no DevOps

Você pode definir a versão do Node no servidor, através da configuração da aplicação dentro da tarefa "Deploy Azure Web Service (Desdobrar Serviço da Web da Azure)" dentro do lançamento do encadeamento (pipeline)

Adicione isto ao campo App settings (configurações da aplicação) de baixo de "Application and Configuration Settings (Aplicação e Configuração das Definições)"

```
-WEBSITE_NODE_DEFAULT_VERSION 10.16.3
```

É recomendado usar a versão LTS.

## Artefactos

Se você estiver usando o Azure DevOps e deixa o encadeamento de construção fazer o seu trabalho por você e deseja armazenar os artefactos. Os ficheiros que são prefixados com um `.` devem ser movidos explicitamente para a pasta de artefacto. Assim você pode criar um Artifact Archive (Arquivo de Artefacto) e descarregar ele mais tarde dentro do Release Deployment (Desdobramento de Lançamento).

## Executando o servidor web

Para o Azure Portal você precisará de um ficheiro `web.config`. Se for não fornecido, ele mesmo criará um. Embora que este **não funcionará para o Nuxt**. Adicione um ficheiro ficheiro `web.config` ao seu repositório. Para a versão mais recente do `Nuxt` o ficheiro do servidor está localizado em `server/index.js`. Dentro do `web.config` você não específica o caminho exato de `server/index.js ` mas apenas `server`. Consulte o exemplo abaixo. Se você não fazer isso os registos dirão para você que o Vue não consegue achar nenhuma rota.

```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
     Este ficheiro de configuração é obrigatório se o iisnode estiver sendo usado para executar os processos do node por trás.
     IIS ou IIS Express. Para mais informações, visite:

     https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config
-->

<configuration>
  <system.webServer>
    <!-- Visite https://azure.microsoft.com/en-us/blog/introduction-to-websockets-on-windows-azure-web-sites/ para mais informações sobre o suporte do WebSocket -->
    <webSocket enabled="false" />
    <handlers>
      <!-- Indica que o ficheiro server.js é um sítio Node.js para ser manipulado pelo módulo iisnode -->
      <add name="iisnode" path="server" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <!-- Não interferir com as requisições para o inspetor de depuração do node (node-inspector debugging)  -->
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server\/debug[\/]?" />
        </rule>

        <!-- Primeiro nós consideramos se a URL vindo corresponde a um ficheiro físico dentro da pasta /public -->
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>

        <!-- Todas outras URL são mapeadas para o ponto de entrada do sítio Node.js -->
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server"/>
        </rule>
      </rules>
    </rewrite>

    <!-- O diretório 'bin' não tem nenhum significado especial dentro do Node.js e as aplicações podem ser colocadas dentro dele -->
    <security>
      <requestFiltering>
        <hiddenSegments>
          <remove segment="bin"/>
        </hiddenSegments>
      </requestFiltering>
    </security>

    <!-- Certifique-se as respostas de erro sejam deixadas intocadas -->
    <httpErrors existingResponse="PassThrough" />

    <!--
      Você pode controlar como o Node é hospedado dentro do IIS usando as seguintes opções:
        * watchedFiles: lista de ficheiros separados por ponto e vírgula que será ouvida por mudanças para reiniciar o servidor
        * node_env: será propagado para o node como uma variável de ambiente NODE_ENV
        * debuggingEnabled - controla se o depurador embutido está ativado

      Consulte https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config para uma lista cheia de opções
    -->
    <!--<iisnode watchedFiles="web.config;*.js"/>-->
  </system.webServer>
</configuration>
```
