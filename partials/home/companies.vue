<template>
  <nui-container class="py-12">
    <section>
      <h1 class="text-3xl uppercase text-center pb-8">
          Who's using nuxt<span class="text-nuxt-lightgreen">JS</span>
      </h1>
      <div class="flex items-center justify-between">
        <div v-for="(company, i) in companies[$i18n.locale]" :key="i" class="p-8 text-center">
          <a :href="company.url" target="_blank" rel="noopener">
            <img :src="'/img/companies/' + $i18n.locale + '/' + company.img" :alt="company.name" :class="company.class">
          </a>
        </div>
      </div>
    </section>
  </nui-container>
</template>

<script>
export default {
  data () {
    return {
      companies: {
        en: [

        ],
        fr: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-20' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-20' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-12' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-20' },
        ],
        zh: [

        ],
        ja: [

        ],
        ko: [

        ],
        ru: [

        ],
        id: [

        ]
      }
    }
  }
}
</script>
