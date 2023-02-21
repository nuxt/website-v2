---
template: guide
title: Cloudflare
description: O que precisa ser considerado quando estiver usando o Nuxt com o Cloudflare
category: deployment
logo:
  light: "/img/companies/square/light/Cloudflare.svg"
  dark: "/img/companies/square/dark/Cloudflare.svg"
---
# Desdobrar o Nuxt no Cloudflare

O que precisa ser considerado quando estiver usando o Nuxt com o Cloudflare

---

Na maioria dos casos, o Nuxt pode funcionar com conteúdo tercerizado que é gerado ou criado pelo próprio Nuxt. Porém algumas vezes tal conteúdo pode causar problemas, especialmente "Minification and Security Options, (opções de segurança e minificação)" da Cloudflare.

Por conseguinte, você deve certificar-se que as opções seguintes estão desmarcadas ou desativadas dentro do Cloudflare. Caso contrário, a re-renderização desnecessária ou erros de hidratação poderiam impactar a sua aplicação em produção.

1. Speed (Velocidade) > Optimization (Otimização) > Auto Minify (Minificação Automática): **Uncheck (desmarcada)** JavaScript, CSS and HTML
2. Speed (Velocidade) > Optimization (Otimização) > **Disable (desativada)** "Rocket Loader™ (Carregador de Foguete)"
3. Speed (Velocidade) > Optimization (Otimização) > **Disable (desativada)** "Mirage (Miragem)"
4. Scrape Shield (Escudo de Raspagem) > **Disable (desativada)** "Email Address Obfuscation (Ofuscação de Endereço de Correio Eletrónico)"
5. Scrape Shield (Escudo de Raspagem) > **Disable (desativada)** "Server-side Excludes (Exclusão do Lado do Servidor)"

Com essas definições, você pode ter a certeza de que a Cloudflare não irá injetar scripts dentro da sua aplicação Nuxt que podem causar efeitos colaterais indesejados.
