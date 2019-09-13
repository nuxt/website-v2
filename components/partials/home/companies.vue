<template>
  <nui-container class="py-12">
    <section>
      <h1 class="text-3xl uppercase text-center pb-8">
        Who's using nuxt<span class="text-nuxt-lightgreen">JS</span>
      </h1>
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div v-for="(company, i) in companies[$i18n.locale]" :key="i" class="p-8 text-center">
          <a :href="company.url" target="_blank" rel="noopener nofollow" class="company">
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
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ],
        fr: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ],
        zh: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ],
        ja: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ],
        ko: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ],
        ru: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ],
        id: [
          { name: 'Ubisoft', img: 'ubisoft-logo.png', url: 'https://assassinscreed.ubisoft.com/story-creator-mode', class: 'h-16' },
          { name: 'Maison du monde', img: 'maison-du-monde.png', url: 'https://www.maisonsdumonde.com/', class: 'h-16' },
          { name: 'BackMarket', img: 'backmarket.png', url: 'https://www.backmarket.fr', class: 'h-10' },
          { name: 'Faire', img: 'faire.png', url: 'https://www.faire.fr', class: 'h-16' },
          { name: 'Roland Garros', img: 'roland-garros.png', url: 'https://www.rolandgarros.com', class: 'h-16' }
        ]
      }
    }
  }
}
</script>

<style>
.company {
  & img {
    opacity: 0.75;
    filter: grayscale(100%);
    transition: all 0.5s;
  }
  &:hover {
    & img {
      opacity: 1;
      filter: grayscale(0%);
    }
  }
}
</style>
