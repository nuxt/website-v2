<template>
  <nav class="Affix" :class="{'Affix--hidden': !visible}">
    <div class="Affix__Toggler" :class="{'Affix__Toggler--hidden': visible}" @click="toggle">
      <div class="icon more-vertical"></div>
    </div>
    <h2 class="Affix__Version">
      Version {{ $store.state.version }}
      <div class="Affix__Version__Toggler" @click="toggle">
        <div class="icon close"></div>
      </div>
    </h2>
<<<<<<< HEAD
    <template v-for="group in list">
      <h3 class="Affix__Title">{{ group.title }}</h3>
      <ul class="Affix__List">
<<<<<<< HEAD
        <li class="Affix__List__Item" v-for="link in links">
          <nuxt-link class="Affix__List__Item__Link" :to="menu + link.to" exact>
=======
    <div class="Affix__Toggler" :class="{'Affix__Toggler--hidden': visible}" @click="toggle">
      <div class="icon more-vertical"></div>
    </div>
    <a class="Affix__Tidelift" href="https://tidelift.com/subscription/pkg/npm-nuxt?utm_source=nuxt&utm_medium=referral" target="_blank">
      <Tidelift alt="tidelift"/>
      <span>{{ $store.state.lang.links.tidelift_short }}</span>
    </a>
    <h3 class="Affix__Title" style="margin-bottom: 20px;">{{ $store.state.lang.sponsors.title }}</h3>
    <ul class="Affix__List">
      <li class="Affix__List__Item">
        <a class="Affix__List__Item__Sponsor" href="https://t.co/sUZfRy6ZxS" target="_blank" rel="noopener">
          <img src="/tipe-io-cms.png" srcset="/tipe-io-cms-2x.png 2x" alt="Tipe.io" />
        </a>
      </li>
      <li class="Affix__List__Item">
        <a class="Affix__List__Item__Sponsor" href="https://www.storyblok.com/?ref=nuxt" target="_blank" rel="noopener">
          <img src="/storyblok-logo.svg" alt="Storyblok.com">
        </a>
      </li>
      <li class="Affix__List__Item">
        <a class="Affix__List__Item__Sponsor" href="https://www.vuemastery.com/?ref=nuxt" target="_blank" rel="noopener">
          <img src="/vueMastery-brand.svg" alt="VueMastery.com" style="height: 40px;">
        </a>
      </li>
      <li class="Affix__List__Item">
        {{ $store.state.lang.sponsors.become }}
        <a href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">{{ $store.state.lang.sponsors.become_partner }}</a>.
      </li>
    </ul>
    <template v-for="(group, index) in list">
      <h3 class="Affix__Title" :key="`title-${index}`">{{ group.title }}</h3>
      <ul class="Affix__List" :key="`list-${index}`">
        <li class="Affix__List__Item" v-for="(link, index) in group.links" :key="index">
          <nuxt-link class="Affix__List__Item__Link" :class="{'nuxt-link-active': path === menu + link.to}" :to="menu + link.to" exact>
>>>>>>> 808215d6 (add VueMastery Sponsor Logo)
            {{ link.name }}
          </nuxt-link>
=======
        <li class="Affix__List__Item" v-for="link in group.links">
          <nuxt-link class="Affix__List__Item__Link"
                     :class="{'nuxt-link-active': $route.path === menu + link.to}"
                     :to="menu + link.to" exact>
            {{ link.name }}
          </nuxt-link>
          <ul v-if="$route.path === menu + link.to" class="Affix__List__Item__Contents">
            <li v-for="(content, index) in link.contents" class="Affix__List__Item__Contents__Item">
              <a :href="menu + link.to + content.to"
                  @click.prevent="scrollTo(content.to)"
                  class="Affix__List__Item__Contents__Item__Link"
                  :class="{'Affix__List__Item__Contents__Item__Link--active': current === index}">
                {{ content.name }}
              </a>
            </li>
          </ul>
>>>>>>> 0bbc4fd8 (scrollTo update)
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  components: {
    Tidelift: () => import('~/assets/images/tidelift.svg')
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  mounted () {
    let self = this
    this.$nextTick(function () {
      window.addEventListener('scroll', self.scrolled)
    })
  },
  data () {
    return { current: 0, setInter: null }
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    menu () { return '/' + (this.$route.params.category || 'examples') },
    contents () {
      var c = []
      this.list.forEach((group) => {
        if (group.links && !c.length) {
          var l = group.links.find((link) => {
            return this.$route.path === this.menu + link.to
          })
          if (l) {
            l.contents.forEach((content) => {
              var el = document.getElementById(content.to.slice(1))
              c.push(el.offsetTop)
            })
          }
        }
      })
      return c
    }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleAffix') },
    scrolled () {
      var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      var el = this.contents.find((pos) => {
        return pos > top + (h / 2)
      })
      this.current = (el ? this.contents.indexOf(el) : this.contents.length) - 1
    },
    scrollTo (id) {
      this.toggle()
      this.$nextTick(() => {
        var to = document.getElementById(id.slice(1)).offsetTop - 25
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        var diff = (to > top ? to - top : top - to) / 25
        var i = 0
        window.clearInterval(this.setInter)
        this.setInter = window.setInterval(() => {
          top = (to > top) ? top + diff : top - diff
          window.scrollTo(0, top)
          i++
          if (i === 25) {
            window.clearInterval(this.setInter)
          }
        }, 10)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Affix
{
  width: 100%;
  top: 60px;
  left: 0;
  bottom: 0;
  position: fixed;
  padding: 15px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 990;
  @media (min-width: 992px)
  {
    top: 80px;
    width: 300px;
    padding: 20px 30px;
    border-right: 1px solid #dbdfe1;
  }
  &--hidden
  {
    left: -100%;
    @media (min-width: 992px)
    {
      left: 0;
    }
  }
  &__Toggler
  {
    background-color: rgba(53, 73, 94, 0.70);
    width: 18px;
    height: 30px;
    position: fixed;
    top: 75px;
    right: 20px;
    z-index: 980;
    cursor: pointer;
    .icon
    {
      color: #fff;
      margin-left: 7px;
      margin-top: 13px;
    }
    &:before, &:after
    {
      content: " ";
      width: 0;
      height: 0;
      top: 0;
      position: absolute;
    }
    &:before
    {
      border-right: 10px solid;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      left: -10px;
      border-right-color: rgba(53, 73, 94, 0.70);
    }
    &:after
    {
      border-left: 10px solid;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      right: -10px;
      border-left-color: rgba(53, 73, 94, 0.70);
    }
    &--hidden
    {
      display: none;
    }
    @media (min-width: 992px)
    {
      display: none;
    }
  }
<<<<<<< HEAD
  &__Version
  {
=======
  &__Tidelift {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    display: inline-block;
    padding: 7px 12px;
    margin: 10px 0;
    background-color:#35495e;
    border-radius: 4px;
    &:hover {
      text-decoration: none;
    }
    svg {
      float: left;
      height: 24px;
      margin-right: 5px;
    }
    span {
      line-height: 24px;
    }
  }
  &__Version {
>>>>>>> 88a68bf7 (add tidelift on guide section)
    position: relative;
    font-size: 15px;
    font-weight: 400;
    color: #35495e;
    margin: 0;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    &__Toggler
    {
      width: 25px;
      height: 22px;
      cursor: pointer;
      display: block;
      float: right;
      @media (min-width: 992px)
      {
        display: none;
      }
    }
  }
  &__Title
  {
    margin: 10px 0;
    // margin-top: 30px;
    text-transform: uppercase;
    color: #9aabb1;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 1px;
  }
  &__List
  {
    list-style: none;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    &__Item
    {
      padding: 1px 0;
      &__Link
      {
        display: block;
        font-size: 15px;
        text-decoration: none;
        color: #35495e;
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 0.25px;
        &:hover
        {
          color: #111;
          background-color: #eee;
        }
      }
<<<<<<< HEAD
      .nuxt-link-active
      {
=======
      &__Sponsor {
        display: inline-block;
        height: 54px;
        img {
          height: 100%;
          max-width: 100%;
          transition: all 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.66;
          &:hover {
            filter: none;
            opacity: 1;
          }
        }
      }
      .nuxt-link-active {
>>>>>>> 808215d6 (add VueMastery Sponsor Logo)
        color: #fff;
        background-color: #41b883;
      }
<<<<<<< HEAD
=======
      &__Contents
      {
        margin: 0;
        padding: 0;
        padding-top: 3px;
        padding-left: 20px;
        list-style: none;
        &__Item
        {
          position: relative;
          padding: 2px 0;
          &:before
          {
            content: " ";
            width: 0;
            height: 0;
            top: 8px;
            left: -13px;
            position: absolute;
            border-left: 5px solid #DBDFE1;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
          &__Link
          {
            display: block;
            font-size: 14px;
            color: lighten(#35495e, 5%);
            text-decoration: none;
            letter-spacing: 0.25px;
            &:hover, &--active
            {
              color: #41b883;
            }
          }
        }
      }
>>>>>>> 0bbc4fd8 (scrollTo update)
    }
  }
}
</style>
