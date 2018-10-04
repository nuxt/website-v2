<template>
  <footer class="nFooter">
    <div class="container">
      <div class="row">
        <div class="nFooter_Group">
          <h4 class="nFooter_Group_Title">Translations</h4>
          <ul class="nFooter_Group_Content">
            <li class="nFooter_Group_Content_Line" v-for="(t, i) in translations" :key="i">
              <a class="nFooter_Group_Content_Line_Link" :href="t.path" target="_blank" rel="noopener">
                {{ t.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="nFooter_Group">
          <h4 class="nFooter_Group_Title">Ecosystem</h4>
          <ul class="nFooter_Group_Content">
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://github.com/nuxt" target="_blank" rel="noopener">
                GitHub
              </a>
            </li>
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://github.com/nuxt-community" target="_blank" rel="noopener">
                Resources
              </a>
            </li>
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://cmty.app/nuxt" target="_blank" rel="noopener">
                Community
              </a>
            </li>
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://twitter.com/nuxt_js" target="_blank" rel="noopener">
                Twitter
              </a>
            </li>
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://discordapp.com/invite/VApZF5W" target="_blank" rel="noopener">
                Chat
              </a>
            </li>
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://medium.com/@nuxt_js" target="_blank" rel="noopener">
                Blog
              </a>
            </li>
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://nuxt.threadless.com" target="_blank" rel="noopener">
                The Nuxt Shop
              </a>
            </li>
          </ul>          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    translations() {
      return [
        { name: 'English', path: 'https://nuxtjs.org' + this.$route.path },
        { name: 'Français', path: 'https://fr.nuxtjs.org' + this.$route.path },
        { name: '简体中文', path: 'https://zh.nuxtjs.org' + this.$route.path },
        { name: '日本語', path: 'https://ja.nuxtjs.org' + this.$route.path },
        { name: '한국어', path: 'https://ko.nuxtjs.org' + this.$route.path },
        { name: 'Русский', path: 'https://ru.nuxtjs.org' + this.$route.path },
        { name: 'Indonesian', path: 'https://id.nuxtjs.org' + this.$route.path }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.nFooter {
  padding: 3rem 0;
  background-color: $color-vue-grey;
  &_Group {
    width: 45%;
    &_Title {
      color: #fff;
      font-size: $h5-font-size;
      font-weight: $font-weight-regular;
    }
    &_Content {
      margin: 0;
      padding: 0;
      list-style: none;
      &_Line {
        width: 50%;
        float: left;
        padding: 8px 0;
        &_Link {
          color: $color-text-placeholder;
          &:hover {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
