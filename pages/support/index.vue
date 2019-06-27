<template>
  <div>
    <nui-hero>
      <nui-container>
        <h1>
          Support
        </h1>
      </nui-container>
    </nui-hero>
    <nui-container class="py-8">
      <ul>
        <li>
          <nuxt-link :to="localePath('support-donations')">Donations</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('support-consulting')">Consulting</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('support-workshops')">Workshops</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('support-shop')">Shop</nuxt-link>
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
