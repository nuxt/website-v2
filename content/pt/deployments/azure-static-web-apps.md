---
template: guide
title: Azure Static Web Apps
description: Como desdobrar uma aplicação Nuxt no Azure Static Web Apps?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Azure.svg"
  dark: "/img/companies/square/dark/Azure.svg"
---
# Desdobrar no Azure Static Web Apps

Como desdobrar uma aplicação Nuxt no Azure Static Web Apps?

---

Você podo agora desdobrar os seus sítios estáticos no Azure usando Aplicações Web Estáticas do Azure. Você precisará ter a sua aplicação dentro do GitHub visto que o Aplicações Web Estáticas do Azure influencia o GitHub Actions o qual permite você reconstruir seu sítio estático em todo `git push`.

Existem duas coisas que você precisa configurar no sentido de desdobrar a sua aplicação no Aplicações Web Estáticas do Azure. A primeira é modificar o comando de construção visto que o Azure lê o comando de construção do seu package.json e para os sítios estáticos precisamos usar o comando de geração.

`package.json`

```json
build: "nuxt generate"
```

A segunda é adicionar um ficheiro routes.json o qual é importante para captura de páginas 404 personalizadas e páginas de retornos das aplicações de páginas única.

`static/routes.json`

```jsx
{
 "routes": [],
 "platformErrorOverrides": [
   {
    "errorType": "NotFound",
    "serve": "/200.html",
    "statusCode": 200
   }
 ]
}
```

Se você quiser testar desdobrando para as Aplicações Web Estáticas do Azure, nós temos criado uma pequena aplicação de demonstração que está toda organizada e configurada. Você apenas precisará clonar ela e adicionar ela ao seu repositório do GitHub. Você pode depois seguir os passos adiante - Desdobrando a sua aplicação com as Aplicações Web Estáticas do Azure.

[Clonar a aplicação de demonstração](https://github.com/debs-obrien/nuxtjs-azure-static-app)

## Desdobrando a sua aplicação com as Aplicações Web Estáticas do Azure

### Passo 1: **Create Azure static web apps (Criar Aplicações Web Estáticas do Azure)**

1. Navegue até o [Azure Portal](https://portal.azure.com/).
2. Clique **Create a Resource (Criar um Recurso)** depois procure por **Aplicação Estática (Static App)** e selecione ela.
3. Selecione uma subscrição a partir da lista suspensa *Subscription (Subscrição)* ou use a padrão.
4. Clique na ligação **New (Novo)** por baixo do *Resource Group (Grupo de Recurso)* suspenso. No *New resource group name (Novo nome de grupo de recurso)*, digite **nuxt** e clique em **OK**
5. Forneça nome globalmente único para a sua aplicação dentro da caixa de texto **Name (Nome)**. Caracteres válidos incluem `a-z`, `A-Z`, `0-9`, e `-`. O nome da aplicação é usado para identificar a aplicação dentro da sua lista de recursos logo é uma boa ideia nomear a sua aplicação usando o nome do seu repositório.
6. Dentro da lista suspensa **Region (Região)**, escolha a região mais próxima de você.

![O recurso do Azure Portal e a configuração da aplicação](https://user-images.githubusercontent.com/13063165/82118135-71891b00-9775-11ea-8284-aa94d17a3bc3.png)

### Passo 2: **Adicionar um repositório do GitHub**

A Aplicação de Serviço Estático da Aplicação do Azure precisa de acesso ao repositório onde a sua aplicação Nuxt mora, assim ele pode desdobrar consolidações automaticamente: 

1. Clique no **Botão Iniciar Sessão com o GitHub (Sign in with GitHub)**
2. Selecione a **Organização (Organization)** sob a qual você criou o repositório para o seu projeto Nuxt. Também pode ser o nome de usuário do seu GitHub.
3. Encontre o nome do repositório qye você criou mais cedo e selecione ele.
4. Escolha o **master** como o ramo a partir da sua lista suspensa *Ramo (Branch)*.

![Como adicionar o GitHub](https://user-images.githubusercontent.com/13063165/82118359-38ea4100-9777-11ea-9c5e-7ba5c4da708e.png)

### Passo 3: **Configurar o processo de construção**

Há poucas coisas que a Aplicação de Serviço Estático da Aplicação do Azure pode assumir - coisas como instalar automaticamente os módulos do npm e executar o comando `npm run build`. Há também poucas coisas sobre as quais você tem de ser explícito, como para qual pasta a aplicação estática será copiada depois da construção para que o sítio estático possa ser servido a partir de lá.

1. Clique na aba **Construção (Build)** para configurar a pasta de saída do estático.
2. Digite **dist** dentro da caixa de texto *Localização do Artefacto da Aplicação (App artifact location)*.

![A configuração da construção do Azure Portal](https://user-images.githubusercontent.com/13063165/82118277-71d5e600-9776-11ea-88ad-48cf0793905d.png)

### Passo 4: **Revisar e criar**

1. Clique no botão **Revisar + Criar (Review + Create)** para verificar se os detalhes estão todos corretos.
2. Clique em **Criar (Create)** para iniciar a criação do recurso e também provisionar uma GitHub Action para desdobramento.
3. Uma vez que o desdobramento estiver completado, clique em **Ir para o recurso (Go to resource)**

![A mensagem completa do desdobramento do Azure Portal](https://user-images.githubusercontent.com/13063165/82118390-67681c00-9777-11ea-9778-671dc768393e.png)

4. Na tela do recurso, clique na ligação da *URL* para abrir a sua aplicação desdobrada.

![A tela do recurso com a URL para a sua aplicação desdobrada](https://user-images.githubusercontent.com/13063165/82118042-d001c980-9774-11ea-94f5-57d995aa5391.png)

Parabéns, seu sítio estático está agora hospedado nas Aplicações Web Estáticas do Azure.

## Reconstruir a sua aplicação estática e monitorar o desdobramento

Agora tudo o que você tem de fazer é modificar o seu código e empurrar suas mudanças. Empurrar suas mudanças ativará uma GitHub Action e o seu novo sítio será automaticamente reconstruido. Você pode monitorar o fluxo de trabalho clicando na aba de ações dentro do seu repositório do GitHub e você pode inspecionar mais além selecionando a última consolidação que você fez. Você pode depois observar para ver quando o desdobrar é terminado ou inspecionar o registo se você tiver alguns erros de desdobramento. 

![A tela das ações do GitHub](https://user-images.githubusercontent.com/13063165/82118249-34715880-9776-11ea-92e2-dbd21bbf7cb6.png)

## Você sabia?

### **Como manipular rotas dinâmicas**

Se você estiver trabalhando com páginas dinâmicas tais como `_id.vue` então você precisará adicionar essas rotas na propriedade `generate` dentro da configuração do Nuxt.

[Consulte a documentação em como manipular rotas dinâmicas.](/docs/configuration-glossary/configuration-generate#routes)

<div class="Alert">
Se você estiver usando o Nuxt 2.13+ então você não terá que preocupar-se com isso visto que existe um rastreador embutido que rastreará todas dinâmicas ao rastrear as ligações dentro do seu sítio.
</div>

### Como adicionar uma página de erro

No sentido de não ter a página 404 padrão você pode criar um ficheiro `error.vue` dentro da sua pasta layouts.

### Como adicionar retorno de Aplicação de Página Única

Se você gostaria que algumas páginas não sejam geradas mas que comportem-se como uma aplicação de página única você pode isso usando a propriedade `generate.excludes` dentro do seu ficheiro `nuxt.config.js`.

[Consulte a documentação em retorno de aplicação de página única](/docs/configuration-glossary/configuration-generate#exclude)
