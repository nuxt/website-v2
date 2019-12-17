<template>
  <nui-container class="pt-16">
    <div ref="shop" class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          The NUXT<span class="text-nuxt-lightgreen">JS</span> Shop<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          You want to support the NuxtJS project and show your love to the rest of the community?<br/> Here our products with the best quality ever!
        </h3>
      </div>
      <i-shop class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <section class="flex flex-wrap items-stretch -mx-4">
      <div v-for="(product, i) in products" :key="i" class="w-full lg:w-1/2 p-4">
        <div class="block sm:flex w-full bg-gray-100 hover:bg-gray-200 p-6 rounded">
          <img :src="'/shop/' + product.img + '.png'" :srcset="'/shop/' + product.img + '-2x.png 2x'" :alt="product.name" class="w-full sm:w-auto rounded border border-gray-300">
          <div class="w-full px-6 py-2">
            <h4 class="block w-full font-medium text-xl pb-4">
              {{ product.name }}
            </h4>
            <p class="mb-4 text-gray-600 leading-relaxed">{{ product.description }}</p>
            <button class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md sm:mr-4 p-3 mt-3 text-sm text-left">
              Coming soon
            </button>
            <!-- <button class="snipcart-add-item inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md sm:mr-4 p-3 mt-3 text-sm text-left" :data-item-id="i + 1" :data-item-name="product.name" :data-item-description="product.description" :data-item-image="'/shop/' + product.img + '.png'" :data-item-price="product.price" :data-item-url="{ name: 'shop' }">
            </button> -->
          </div>
        </div>
      </div>
    </section>
  </nui-container>
</template>

<script>
import iShop from '@/components/svg/fogg/shop'

export default {
  components: {
    iShop
  },
  data () {
    return {
      products: [
        {
          name: 'Classic T-shirt White',
          description: 'Unisex White T-shirt with Nuxt Mountains Logo embroidered.',
          img: 'tshirt_white',
          price: 999
        },
        {
          name: 'Classic T-shirt Black Heather Blue',
          description: 'Unisex Black Heather Blue T-shirt with Nuxt Mountains Logo embroidered.',
          img: 'tshirt_blue',
          url: '',
          price: 999
        },
        {
          name: 'NuxtJS Sweatshirt White',
          description: 'Unisex White Sweatshirt with The NuxtJS Logo embroidered.',
          img: 'sweat_white',
          url: '',
          price: 999
        },
        {
          name: 'NuxtJS Sweatshirt Black Heather Blue',
          description: 'Unisex Black Heather Blue Sweatshirt with The NuxtJS Logo embroidered.',
          img: 'sweat_blue',
          url: '',
          price: 999
        },
        {
          name: 'New Stickers Pack',
          description: '8 New Design stickers: 4 Mountains Logo Stickers and- 4 NuxtJS Logo Stickers.',
          img: 'new_stickers',
          url: '',
          price: 999
        },
        {
          name: 'Vintage Stickers Pack',
          description: '8 Vintage Design stickers: 4 Mountains Logo Stickers and 4 Are You Nuxt? Stickers.',
          img: 'vintage_stickers',
          url: '',
          price: 999
        }
      ]
    }
  // },
  // mounted () {
  //   const jquery = document.createElement('script')
  //   jquery.setAttribute('type', 'text/javascript')
  //   jquery.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js')
  //   const script = document.createElement('script')
  //   script.setAttribute('type', 'text/javascript')
  //   script.setAttribute('src', '//cdn.snipcart.com/scripts/2.0/snipcart.js')
  //   script.setAttribute('id', 'snipcart')
  //   script.setAttribute('data-api-key', 'YzRlMjRiNmItNWJjNC00OWMxLWE1ODgtZmIyNzAwYmIyMmI5NjM3MDM3MTc0OTkxOTU5OTA0')
  //   this.$refs.shop.appendChild(jquery)
  //   this.$refs.shop.appendChild(script)
  },
  head: {
    title: 'The NuxtJS Shop',
    meta: [
      { hid: 'description', name: 'description', content: '' },
      { }
    ]
  }
}
</script>

<style>
/* @import url('https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'); */
</style>
