<template>
  <section>
    <nui-container>
      <h1>
        Support
      </h1>
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
