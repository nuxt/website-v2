<template>
  <nav class="Affix" :class="{'Affix--hidden': !visible}">
    <div class="Affix__Toggler" :class="{'Affix__Toggler--hidden': visible}" @click="toggle">
      <div class="icon more-vertical"></div>
    </div>
    <h2 class="Affix__Version">
      {{ $store.state.lang.text.version }} {{ $store.state.version }}
      <div class="Affix__Version__Toggler" @click="toggle">
        <div class="icon close"></div>
      </div>
    </h2>
    <template v-for="group in list">
      <h3 class="Affix__Title">{{ group.title }}</h3>
      <ul class="Affix__List">
        <li class="Affix__List__Item" v-for="link in group.links">
          <nuxt-link class="Affix__List__Item__Link"
                     :class="{'nuxt-link-active': path === menu + link.to}"
                     :to="menu + link.to" exact>
            {{ link.name }}
          </nuxt-link>
          <ul v-if="path === menu + link.to" class="Affix__List__Item__Contents">
            <li v-for="(content, index) in link.contents" class="Affix__List__Item__Contents__Item">
              <a :href="menu + link.to + content.to"
                  @click.prevent="scrollTo(content.to)"
                  class="Affix__List__Item__Contents__Item__Link"
                  :class="{'Affix__List__Item__Contents__Item__Link--active': current === index}">
                {{ content.name }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  mounted () {
    let self = this
    this.$nextTick(function () {
      window.addEventListener('scroll', self.scrolled)
      if (self.$route.hash.length) {
        self.scrollTo(self.$route.hash)
      }
    })
  },
  data () {
    return { current: 0, setInter: null }
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    path () { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    menu () { return '/' + this.category },
    contents () {
      var c = []
      this.list.forEach((group) => {
        if (group.links && !c.length) {
          var l = group.links.find((link) => {
            return this.path === this.menu + link.to
          })
          if (l && l.contents) {
            l.contents.forEach((content) => {
              var el = document.getElementById(content.to.slice(1))
              if (el) {
                c.push(el.offsetTop)
              }
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
      var doc = document.documentElement
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      var el = this.contents.find((pos) => {
        return pos > top + (h / 2)
      })
      this.current = (el ? this.contents.indexOf(el) : this.contents.length) - 1
    },
    scrollTo (id) {
      this.toggle()
      this.$nextTick(() => {
        var el = document.getElementById(id.slice(1))
        if (!el) return
        var to = el.offsetTop - 25
        var doc = document.documentElement
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
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
    overflow-y: visible;
    @media (min-width: 992px)
    {
      overflow-y: auto;
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
  &__Version
  {
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
      padding: 2px 0;
      &__Link
      {
        display: block;
        font-size: 16px;
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
      .nuxt-link-active
      {
        color: #fff;
        background-color: #41b883;
      }
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
    }
  }
}
</style>
