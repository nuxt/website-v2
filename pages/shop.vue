<template>
  <nui-container class="py-16">
    <div class="flex justify-between mb-16">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          The NUXT<span class="text-nuxt-lightgreen">JS</span> Shop<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni cum, nisi animi quae sit in, corporis explicabo architecto natus vero voluptate maiores beatae, et quo possimus. Rerum, consequatur aperiam!
        </h3>
      </div>
      <i-shop class="hidden lg:inline-block" />
    </div>
    <section class="flex flex-wrap items-stretch -mx-4">
      <div v-for="product in products" :key="product.name" class="w-full lg:w-1/2 p-4">
        <div class="block sm:flex w-full bg-gray-100 hover:bg-gray-200 p-6 rounded">
          <img :src="'/shop/' + product.img + '.png'" :srcset="'/shop/' + product.img + '-2x.png 2x'" :alt="product.name" class="w-full sm:w-auto rounded border border-gray-300">
          <div class="w-full px-6 py-2">
            <h4 class="block w-full font-medium text-xl pb-4">
              {{ product.name }}
              <!-- <span class="float-right text-nuxt-lightgreen">{{ theme.price }}</span> -->
            </h4>
            <p class="mb-4 text-gray-600 leading-relaxed" v-html="product.description"></p>
            <nui-button :href="product.url" rel="noopener" target="_blank" class="sm:mr-4 p-3 mt-3 text-sm text-left">
              GET IT for {{ product.price }}€
            </nui-button>
          </div>
        </div>
      </div>
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
      products: [
        {
          name: 'Classic T-shirt White',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'tshirt_white',
          url: '',
          price: 29
        },
        {
          name: 'Classic T-shirt Blue',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'tshirt_blue',
          url: '',
          price: 29
        },
        {
          name: 'NuxtJS Sweatshirt White',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'sweat_white',
          url: '',
          price: 49
        },
        {
          name: 'NuxtJS Sweatshirt Blue',
          description: 'Ce superbe t-shirt en coton bio, eleve en plein air sans pesticide, ogm, nourriture, eau.. Bref sans rien du tout vous avez bien compris!',
          img: 'sweat_blue',
          url: '',
          price: 49
        },
        {
          name: 'New Stickers',
          description: '8 New Design stickers: <br> - 4 Mountains Logo Stickers <br> - 4 NuxtJS Logo Stickers',
          img: 'new_stickers',
          url: '',
          price: 5
        },
        {
          name: 'Vintage Stickers',
          description: '8 Vintage design stickers: <br> - 4 Mountains Logo Stickers <br> - 4 Are You Nuxt? Stickers',
          img: 'vintage_stickers',
          url: '',
          price: 5
        }
      ]
    }
  }
}
</script>

<style>

</style>
