<script setup lang="ts">
defineProps({
  links: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <aside class="toc">
    <h3>On this page</h3>
    <nav>
      <NuxtLink v-for="link in links" :key="link.id" :to="`#${link.id}`">
        <Icon name="heroicons:hashtag" class="icon-sm" />
        <span>{{ link.text }}</span>
      </NuxtLink>
    </nav>
    <h3>Contribute</h3>
    <nav>
      <a href="#title-a">
        <Icon name="edit" />
        <span>Edit this page</span>
      </a>
      <a href="#title-a">
        <Icon name="translate" />
        <span>Translate this page</span>
      </a>
    </nav>
    <h3>Community</h3>
    <nav>
      <a href="https://github.com/nuxt/nuxt" target="_blank" rel="noopener">
        <Icon name="star" />
        <span>Star us on GitHub</span>
      </a>
      <a href="https://chat.nuxt.dev" target="_blank" rel="noopener">
        <Icon name="chat" />
        <span>Join us on Discord</span>
      </a>
      <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener">
        <Icon name="follow" />
        <span>Follow us on Twitter</span>
      </a>
      <a href="https://nuxtlabs.com" target="_blank" rel="noopener">
        <Icon name="trophy" />
        <span>Enterprise Support</span>
      </a>
      <NuxtLink to="/sponsors">
        <Icon name="sponsor" />
        <span>Become a Sponsor</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<style lang="ts" scoped>
css({
  '.toc': {
    position: 'sticky',
    top: '{space.20}',
    paddingTop: '{space.1}',
    'h3': {
      uiText: 'base',
      fontSize: '{font.size.md}',
      paddingBottom: '10px',
      fontWeight: 500,
      margin: 0
    },
    'nav': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      paddingBottom: '{space.5}',
      'a': {
        uiFlexCenter: true,
        justifyContent: 'flex-start',
        uiText: 'info',
        fontSize: '{font.size.sm}',
        gap: '10px',
        textDecoration: 'none',
        '&:hover': {
          uiText: 'base',
          '.icon': {
            uiTextPrimary: 500
          }
        },
        '.icon': {
          width: '{space.4}',
          height: '{space.4}'
        },
        '.icon-sm': {
          width: '{space.3}',
          height: '{space.3}',
          marginRight: '{space.1}'
        }
      }
    },
  },
})
</style>
