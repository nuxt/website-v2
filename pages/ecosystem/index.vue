<template>
  <section>
    <nui-container>
      <h1>
        Ecosystem: Twitter, Discord, GitHub
      </h1>
      <ul>
        <li>
          <nuxt-link :to="localePath('ecosystem-team')">Team</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('ecosystem-events')">Events</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('ecosystem-oss')">OSS</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('ecosystem-blog')">Blog</nuxt-link>
        </li>
      </ul>
    </nui-container>
  </section>
</template>

<script>
import nuiContainer from '@/components/nui/commons/Container'

export default {
  components: {
    nuiContainer
  }
}
</script>
