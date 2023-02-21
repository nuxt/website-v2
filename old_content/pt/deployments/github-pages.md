---
template: guide
title: GitHub Pages
description: Como desdobrar uma aplicação Nuxt no GitHub Pages?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Github_Pages.svg"
  dark: "/img/companies/square/dark/Github_Pages.svg"
---
# Desdobrar o Nuxt no GitHub Pages

Como desdobrar uma aplicação Nuxt no GitHub Pages?

---

O Nuxt dá para você a possibilidade de hospedar a sua aplicação web em qualquer hospedagem estática como [GitHub Pages](https://pages.github.com/) por exemplo.

Para desdobrar no GitHub Pages, você precisa gerar a sua aplicação web estática:

::code-group
```bash [Yarn]
yarn generate
```
```bash [NPM]
npm run generate
```
::

Isto criará uma pasta `dist` com tudo dentro pronto para ser desdobrado na hospedagem do GitHub Pages. O ramo `gh-pages` para repositório do projeto ou o ramo `master` para o usuário ou organização do sítio.

::alert{type="info"}
**Informação:** Se você usar um domínio personalizado para o seu GitHub Pages e colocar o ficheiro `CNAME`, é recomendado que o ficheiro seja colocado dentro do diretório `static`. [Mais informações](/docs/directory-structure/static) sobre ele.
::

## Desdobrando para o GitHub Pages para armazenamento

Antes de tudo, você precisa certificar-se que está a usar o [alvo estático](/docs/features/deployment-targets) visto que estamos hospedando no GitHub Pages:

```js[nuxt.config.js]
export default {
  target: 'static'
}
```

Se você estiver criando GitHub Pages para um repositório específico, e não tem nenhum domínio personalizado, a URL da página estará neste formato: `http://<username(nome do usuário)>.github.io/<repository-name (nome do repositório)>`.

Se você desdobrar a pasta `dist` sem adicionar a [base do router](/docs/configuration-glossary/configuration-router), quando você visitar o sítio desdobrado você achará que o sítio não está funcionando devido aos recursos em falta. Isto é porque nós assumimos que a raiz do website será `/`, mas neste caso ele é `/<repository-name (nome do repositório)>`.

Para concertar o problema nós precisamos adicionar a configuração da [base do router](/docs/configuration-glossary/configuration-router#base) dentro do `nuxt.config.js`:

```js[nuxt.config.js]
export default {
  target: 'static',
  router: {
    base: '/<repository-name>/'
  }
}
```

Desta maneira, todos caminhos de recurso gerados serão prefixados com `/<repository-name (nome do repositório)>/`, e da próxima vez que você desdobrar o código para as GitHub Pages, o sítio deve estar funcionando propriamente.

## Desdobramento de linha de comando

Você pode também usar o [pacote push-dir](https://github.com/L33T-KR3W/push-dir):

Primeiro instale ele:

::code-group
```bash [Yarn]
yarn add --dev push-dir
```
```bash [NPM]
npm install push-dir --save-dev
```
::

Adicione o comando `deploy` ao seu `package.json` com o ramo como `gh-pages` para o repositório do projeto ou `master` para o usuário ou organização do sítio.

```js
"scripts": {
  "dev": "nuxt",
  "generate": "nuxt generate",
  "start": "nuxt start",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},
```

Depois gere e desdobre a sua aplicação estática:

::code-group
```bash [Yarn]
yarn generate
yarn deploy
```
```bash [NPM]
npm run generate
npm run deploy
```
::

## Construir servidor de desdobramento

Você pode levar o desdobramento um passo além e ao invés de ter que manualmente compilar e desdobrar os ficheiros a partir da sua instalação local, você pode fazer uso de um servidor de construção para monitorar o seu repositório para novas consolidações e depois, verificar, compilar e desdobrar tudo por você automaticamente.

### GitHub Actions (Ações do GitHub)

Para desdobrar via [Ações do GitHub](https://github.com/features/actions), a ferramenta oficial para automação de software com o GitHub, se você não tiver um fluxo de trabalho você pode criar um novo ou acrescentar um novo passo ao seu fluxo de trabalho existente.

Ele usa o [GitHub Pages Action (Ação das GitHub Pages)](https://github.com/marketplace/actions/github-pages-action) a qual empurra os ficheiros gerados da pasta `dist` para o seu ramo padrão de GitHub Pages `gh-pages`.

Com um fluxo de trabalho existente, adicione o seguinte passo:

```yaml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

Com um novo fluxo de trabalho, cole o seguinte conteúdo dentro de um novo ficheiro chamado `cd.yml` dentro do diretório `.github/workflows`:

```yaml
name: cd

on: [push, pull_request]

jobs:
  cd:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest]
        node: [14]

    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Setup node env
        uses: actions/setup-node@v2.1.2
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        run: yarn

      - name: Generate
        run: yarn generate

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Depois envie isto para o seu repositório:

```bash
git add .github/workflows/cd.yml
git commit -m "Adding github pages deploy workflow"
git push origin
```

Ao terminar, você verá o seu ramo `gh-pages` atualizado bem como o seu sítio.

### Travis CI

Para desdobrar com o [Travis CI](https://travis-ci.org/), um servidor de construção gratuito para projetos de código-aberto, inicie a sessão através do GitHub, garantindo ao Travis acesso para visualizar os seus repositórios, e depois ative o servidor de construção para o seu repositório ao alternar o interruptor próximo aos nomes dos seus repositórios dentro da lista exibida.

![Ativação do servidor de construção do Travis](/img/docs/github_pages_travis_01.png)

A seguir, clique no ícone de engrenagem ao lado do nome do seu repositório para configurar as definições gerais do servidor de construção e ativar a funcionalidade `Construa somente se .travis.yaml estiver present` ao alternar o interruptor.

![Definições do servidor de construção do Travis](/img/docs/github_pages_travis_02.png)

Na mesma tela, role para baixo atá a secção de Variáveis de Ambientes e crie uma nova variável com nome `GITHUB_ACCESS_TOKEN` e dentro campo de valor colar uma cópia do código (token) de acesso pessoal do GitHub que você criou recentemente e depois clique no botão `Add (Adicionar)`.

![As variáveis de ambiente do servidor de construção do Travis](/img/docs/github_pages_travis_03.png)

Finalmente, crie um ficheiro de configuração `.travis.yml` dentro da raiz do seu repositório com os seguintes conteúdos

```yaml
language: node_js
node_js:
  - '12'

cache:
  directories:
    - 'node_modules'

branches:
  only:
    - master

install:
  - npm install
  - npm run generate

script:
  - echo "Skipping tests"

deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_ACCESS_TOKEN # Defina dentro painel de controlo do travis-ci.org, marcado como seguro https://docs.travis-ci.com/user/deployment/pages/#Setting-the-GitHub-token
  target-branch: gh-pages
  local-dir: dist
  on:
    branch: master
```

E depois envie isto para o seu repositório

```bash
git add .travis.yml
git commit -m "Adding travis deploy configuration"
git push origin
```

Agora, sempre que você enviar qualquer mudança para o seu repositório, a partir de dentro do Travis, você verá uma nova construção começar

![A saída do servidor de construção do Travis](/img/docs/github_pages_travis_04.png)

E ao terminar, você verá o seu sítio da GitHub Pages atualizada automaticamente.

### Appveyor

Para desdobrar através do [Appveyor](https://www.appveyor.com), uma outra ferramenta gratuita para servidor de construção para projetos de código-aberto, registe uma nova conta escolhendo a opção de autenticação com GitHub para iniciar a sessão usando a sua conta do GitHub.

Uma vez com a sessão iniciada, clique na ligação 'New project (Novo projeto)' e depois clique no botão 'Add (Adicionar)' ao lado do nome do seu repositório dentro lista exibida para ativar o servidor de construção sobre o seu repositório.

![A ativação do servidor de construção do Appveyor](/img/docs/github_pages_appveyor_01.png)

A seguir, dentro da raiz do seu repositório, crie um ficheiro de configuração `appveyor.yml` com os seguintes conteúdos

```yaml
environment:
  # O Nuxt exige no mínimo o node na versão 12
  nodejs_version: '12'
  # Encripta dados sensíveis (https://ci.appveyor.com/tools/encrypt)
  github_access_token:
    secure: ENCRYPTED_GITHUB_ACCESS_TOKEN
  github_email:
    secure: ENCRYPTED_GITHUB_EMAIL

# Apenas executa sobre o ramo master
branches:
  only:
    - master

# Instala os scripts. (executa depois da clonagem do repositório)
install:
  # muda a versão do nodejs
  - ps: Install-Product node $env:nodejs_version
  # instala os módulos
  - npm install
  # gera os ficheiros estáticos
  - npm run generate
  # configura a memória global das credenciais do git
  - git config --global credential.helper store
  - ps: Add-Content "$env:USERPROFILE\.git-credentials" "https://$($env:github_access_token):x-oauth-basic@github.com`n"
  - git config --global user.email $env:github_email
  # desdobre para as GitHub Pages
  - npm run deploy

# Sem testes para executar
test: off

# Na realidade não é uma construção
build: off
```

**_NB_** esta configuração assume que você configurou o seu ficheiro `package.json` conforme as instruções do [Desdobramento de Linha de Comando](#command-line-deployment)

Antes no entanto de você consolidar este ficheiro, você precisará mudar as variáveis `ENCRYPTED_GITHUB_ACCESS_TOKEN` e `ENCRYPTED_GITHUB_EMAIL` com o código de acesso pessoal do GitHub e o seu endereço de email do GitHub, encriptados usando o [ferramenta de encriptação do Appveyor](https://ci.appveyor.com/tools/encrypt).

Uma vez atualizado, envie o ficheiro para o seu repositório

```bash
git add appveyor.yml
git commit -m "Adding appveyor deploy configuration"
git push origin
```

Agora, sempre que você enviar alguma mudança para o seu repositório, a partir de dentro Appveyor, você verá uma nova construção iniciar.

![A saída do servidor de construção do Appveyor](/img/docs/github_pages_appveyor_02.png)

E ao terminar, você verá do seu sítio do GitHub Pages atualizado automaticamente.
