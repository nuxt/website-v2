<template>
  <div>
    <nui-hero>
      <nui-container>
        <h1>
          Ecosystem: Twitter, Discord, GitHub icons
        </h1>
      </nui-container>
    </nui-hero>
    <nui-container class="py-8">
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
  </div>
</template>

<script>
import nuiHero from '@/components/nui/commons/Hero'
import nuiContainer from '@/components/nui/commons/Container'

export default {
  components: {
    nuiHero,
    nuiContainer
  }
}
</script>
