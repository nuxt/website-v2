<template>
  <header class="py-8">
    <nui-container>
      <div class="flex justify-between">
        <a class="block py-1" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo/>
        </a>
        <nav>
          <ul class="flex">
            <li v-for="link in links" :key="link" class="px-4">
              <nuxt-link class="block p-2 font-medium text-nuxt-gray uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="'/' + link">
                {{ $store.state.lang.links[link] || 'modules' }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nui-search/>
      </div>
    </nui-container>
  </header>
</template>

<script>
import nuiContainer from '@/components/nui/commons/Container'
import nuiLogo from '@/components/nui/svg/Nuxtjs'
import nuiSearch from '@/components/nui/partials/Search'

export default {
  data () {
    return {
      links: ['guide', 'api', 'examples', 'faq', 'modules']
    }
  },
  components: {
    nuiContainer,
    nuiLogo,
    nuiSearch
  }
}
</script>

