---
template: guide
title: Platform.sh
description: Como desdobrar o Nuxt no Platforn.sh?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Platformsh.svg"
  dark: "/img/companies/square/dark/Platformsh.svg"
---
# Desdobrar o Nuxt no Platform.sh

Como desdobrar o Nuxt no Platforn.sh?

---

[Platform.sh](https://platform.sh/) é um sistema de desdobramento de hospedagem em nuvem contínuo de funcionalidade completa de fim à fim para ambos ambientes de qualidade e produção.

Platform.sh inclui as seguintes funcionalidades:

- Construir, desdobrar, gerir e escalar as aplicações.
- Qualquer ramo pode ser um ambiente de qualidade; criar e eliminar ambientes com facilidade.
- Suporte para quase qualquer aplicação Node.js, PHP, Python, Ruby, Go, or Java, dentro da sua escolha de versões, ou misturar e combinar.
- Certificados TLS automáticos.
- Cano de construção integrado para personalizar o processo de construção da sua aplicação de qualquer mode que você precisar.
- Infraestrutura como código: define três ficheiros YAML e o seu grupo inteiro é criado sobre demanda. Adiciona e remove serviços com facilidade.
- Desdobrar o código diretamente a partir dos seus repositórios no GitHub e GitLab.

## Configurar

A Platform.sh tem disponível um modelo pré-feito para o Nuxt. A ligação abaixo criará um novo projeto no Platform.sh e pré-popular ele com um exemplo de aplicação Nuxt que pode ser depois personalizado.

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/nuxtjs/.platform.template.yaml&utm_content=nuxtjs&utm_source=nuxtjs_orgb&utm_medium=button&utm_campaign=deploy_on_platform" target="_blank">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" height="40px" width="180px" />
</a>
</p>

O ficheiro `README.md` inclui detalhes da configuração padrão fornecida. As novas contas Platform.sh são gratuitas pelos primeiros 30 dias.
