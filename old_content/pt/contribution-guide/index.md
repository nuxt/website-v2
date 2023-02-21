---
template: post
title: Guia de Contribuição
description: Qualquer contribuição ao Nuxt é mais do que bem-vinda!
back: false
---

# Guia de Contribuição

> Qualquer contribuição à Nuxt é mais do que bem-vinda!

## Reportando Problemas

Um maneira genial de contribuir com o projeto é enviar um relatório detalhado quando você encontrar um problema: [Relatório de Bug](https://github.com/nuxt/nuxt/issues/new?assignees=&labels=pending+triage%2C2.x&template=z-bug-report-2.yml)

Faça o favor de certificar-se de incluir um repositório de reprodução ou [CodeSandBox](https://template.nuxtjs.org/) assim aqueles bugs podem ser reproduzidos sem grandes esforços. Quanto melhor um bug poder ser reproduzido, mais rápido nós podemos começar a resolver ele.

## Pull Requests

Nós amaríamos ver as suas pull requests, mesmo se forem apenas para corrigir um erro de digitação!

Contudo, qualquer melhoria significativa deve ser associada a uma [requisição de funcionalidade](https://feature.nuxtjs.org/) ou [reporte de bug](https://bug.nuxtjs.org/) existente.

### Começando

1. [Copie](https://help.github.com/articles/fork-a-repo/) o [repositório do Nuxt](https://github.com/nuxt/nuxt) para sua própria conta no GitHub e depois [clone](https://help.github.com/articles/cloning-a-repository/) ele para o seu dispositivo local.
2. Execute o comando `npm install` ou `yarn install` para instalar as dependências.

> _Note que ambos **npm** e **yarn** têm sido vistos a perderem a instalação de dependências. Para remediar isso, você pode tanto eliminar a pasta `node_modules` dentro da sua aplicação de exemplo e instalar novamente ou fazer uma instalação das dependências em falta._

> Se você estiver adicionando uma dependência, use o `yarn add`. O ficheiro `yarn.lock` é a fonte de verdade para todas dependências de Nuxt.

### Configuração

Antes da execução de quaisquer testes, certifique-se de que todas dependências estão contempladas e construa todos os pacotes:

```sh
yarn
yarn build
```

### Estrutura de teste

Uma ótima PR, quer ela inclua um correção de bug ou uma nova funcionalidade, sempre incluirá testes. Para escrever bons testes, deixe-nos explicar nossa estrutura de teste:

#### Fixtures

As fixtures (encontradas sob `tests/fixtures`) contêm várias aplicações Nuxt. Para manter o tempo de construção o mais curto possível, nós não construimos uma aplicação Nuxt por teste. Ao invés disso, as fixtures são construidas (`yarn test:fixtures`) antes da execução dos testes unitários atuais.

Certifique-se de **alterar** ou **adicionar uma nova fixture** quando estiver submetendo uma PR para refletir as mudanças apropriadamente (se aplicável).

Também, não esqueça de **reconstruir** uma fixture depois de mudar ela pela execução do teste correspondente com o `jest test/fixtures/my-fixture/my-fixture.test.js`!

#### Testes unitários

Os testes unitários podem ser encontrados dentro de `tests/unit` e serão executados depois da construção das fixtures. Um novo servidor Nuxt será usado por teste para que nenhum estado partilhado (exceto o estado inicial da etapa de construção) esteja presente.

Depois de adicionar seus testes unitários, você pode executar eles diretamente:

```sh
jest test/unit/test.js
```

Ou você pode executar todo conjunto de teste unitário:

```sh
yarn test:unit
```

Novamente, esteja ciente de que você pode precisar reconstruir suas fixtures antes!

### Testando suas mudanças

Enquanto estiver trabalhando em sua PR você possivelmente desejará verificar se sua fixture está configurada corretamente ou depurar suas mudanças atuais.

Para fazer isso você pode usar o próprio roteiro do Nuxt para lançar por exemplo sua fixture ou uma aplicação de exemplo:

```sh
yarn nuxt examples/your-app
yarn nuxt test/fixtures/your-fixture-app
```

> O comando `npm link` poderia também (e pode, até certo ponto) trabalhar para isto, mas ele tem de ser conhecido para exibir alguns problemas. É por isso que nós recomendados chamar `yarn nuxt` diretamente para executar os exemplos.

### Exemplos

Se você estiver trabalhando em uma funcionalidade muito grande, configure um aplicação de exemplo dentro de `examples/`. Isto ajudará grandemente no entendimento das mudanças e também ajudará os usuários da Nuxt a entender em profundidade a funcionalidade que você construiu.

### Linting

Como você já pode ter notado, nós estamos usando o ESLint para forçar um padrão de código. Execute o comando `yarn lint` antes de consolidar suas mudanças para verificar que o estilo de código está correto. Caso não, você pode usar o comando `yarn lint --fix` ou o `npm run lint -- --fix` (sem erro de digitação!) para corrigir a maior parte das mudanças de estilo. Se houverem erros sobrando, você deve corrigir eles manualmente.

### Documentação

Se você estiver adicionando uma nova funcionalidade, ou refazendo ou mudando o comportamento do Nuxt de alguma maneira, você possivelmente desejará documentar as mudanças. Faça isso com uma PR para o repositório de [documentação](https://github.com/nuxt/docs/pulls). Você não tem de escrever a documentação imediatamente (mas faça isso o mais cedo possível quando sua pull request estiver madura o suficiente).

### Lista de verificação final

Quando estiver submetendo a sua PR, existe um modelo simples que você tem de preencher. Marque todas as "respostas" apropriadas nas listas de verificação.

### Solucionando problemas

#### Depurando testes no macOS

A procura por `getPort()` revelará que é usada para usada para iniciar um novos processos de Nuxt durante os testes. Ele tem sido visto a parar funcionar no macOs às vezes e pode exigir que você defina manualmente uma porta para testes.

Um outro problema comum são os processos de Nuxt que podem segurar a memória quando estiver executando os testes da fixture. Um processo fantasma muitas vezes impedirá testes subsequentes de executarem.
