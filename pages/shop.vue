<template>
  <nui-container class="py-16">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          The NUXT<span class="text-nuxt-lightgreen">JS</span> Shop<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni cum, nisi animi quae sit in, corporis explicabo architecto natus vero voluptate maiores beatae, et quo possimus. Rerum, consequatur aperiam!
        </h3>
      </div>
      <i-shop class="hidden lg:inline-block my-8" />
    </div>
    <section class="flex bg-gray-100 p-8 rounded my-12">
    </section>
    <section class="text-center">
    </section>
  </nui-container>
</template>

<script>
import iShop from '@/components/svg/streamline/shop.vue'

export default {
  components: {
    iShop
  },
  head: {
    title: 'The NuxtJS Shop',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data () {
    return {
      products: {
        tshirt: [
          { name: 'Storyblok', img: 'storyblok-logo.svg', url: 'https://www.storyblok.com/?ref=nuxt', class: 'h-24' }
        ],
        sweatshirt: [
          { name: 'Blokt', img: 'blokt-logo.png', url: 'https://blokt.com/?ref=nuxt', class: 'h-10' }
        ],
        stickers: [
          { name: 'Icons8', img: 'icons8.png', url: 'https://icons8.com/?ref=nuxt', class: 'h-10' }
        ]
      }
    }
  }
}
</script>

<style>

</style>
