<template>
  <section>
    <nui-container>
      <h1>
        Learn :
      </h1>
      <ul>
        <li>
          <nuxt-link :to="localePath({ name: 'learn-section-slug', params: { section: 'guide' }})">Guide</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath({ name: 'learn-section-slug', params: { section: 'api' }})">API</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath({ name: 'learn-section-slug', params: { section: 'faq' }})">FAQ</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('learn-release-notes')">Release Notes</nuxt-link>
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
