<template>
  <div>
    <nui-hero>
      <nui-container>
        <h1>
          Community: Twitter, Discord, GitHub icons + News (blog)
        </h1>
      </nui-container>
    </nui-hero>
    <nui-container class="py-8">
      <ul>
        <li>
          <nuxt-link :to="localePath('community-team')">Team</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('community-roadmap')">Raodmap</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('community-oss')">OSS</nuxt-link>
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
