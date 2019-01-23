<template>
<<<<<<< HEAD
  <footer class="Footer">
    <div class="Footer__Sponsors">
      <h3>Sponsors</h3>
      <a class="Footer__Sponsors__Link" href="https://t.co/sUZfRy6ZxS" target="_blank" rel="noopener">
        <img src="https://user-images.githubusercontent.com/1016365/34124854-48fafa06-e3e9-11e7-8c04-251055feebee.png" alt="Tipe.io" />
      </a>
      <a class="Footer__Sponsors__Link" href="https://www.storyblok.com/?ref=nuxt" target="_blank" rel="noopener">
        <img src="https://a.storyblok.com/f/39898/x/aa0dc897ff/storyblok-logo.svg" alt="Storyblok.com">
      </a>
      <a class="Footer__Sponsors__Link" href="https://www.vuemastery.com/?ref=nuxt" target="_blank" rel="noopener">
        <img src="/vueMastery-brand.svg" alt="VueMastery.com" style="height: 40px;">
      </a>
      <br/>
      <a class="Footer__Sponsors__Link" href="https://www.shuttleworthfoundation.org">
        <img src="/shuttleworth-funded.png" width="200" alt="shuttleworth funded"/>
      </a>
    </div>
    <p class="Footer__Sponsors__Become">
      Support us and
      <a href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">become a partner</a>.
    </p>
    <div class="Footer__Author container">
      {{ $store.state.lang.footer.authors }}:
      <a href="https://github.com/Atinux" target="_blank">@Atinux</a>
      &
      <a href="https://github.com/alexchopin" target="_blank">@alexchopin</a>
=======
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
            <li class="nFooter_Group_Content_Line">
              <a class="nFooter_Group_Content_Line_Link" href="https://otechie.com/nuxt" target="_blank" rel="noopener">
                Nuxt Consulting
              </a>
            </li>
          </ul>
        </div>
      </div>
>>>>>>> b4c06c90 (Merge branch 'master' of https://github.com/nuxt/nuxtjs.org)
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.Footer
{
  text-align: center;
  background: #f6f6f6;
  padding-top: 30px;
  &__Sponsors {
    max-width: 700px;
    padding-bottom: 10px;
    margin: 0px auto;
    h3 {
      color: #999;
      font-weight: 600;
      margin: 0 0 10px;
    }
    &__Link {
      display: inline-block;
      position: relative;
      margin: 20px 15px 0;
      height: 60px;
      img {
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        transition: all 0.3s ease;
        filter: grayscale(100%);
        opacity: 0.66;
        &:hover, :focus {
          filter: none;
          opacity: 1;
        }
      }
    }
    &__Become {
      padding-bottom: 10px;
    }
  }
  &__Links
  {
    text-align: center;
    background-color: #35495E;
    color: #eee;
    padding: 15px;
    letter-spacing: 0.5px;
  }
  &__Author
  {
    width: 100%;
    background-color: darken(#35495E, 10%);
    margin: 0;
    font-size: 14px;
    text-align: center;
    padding: 15px;
    color: #9aabb1;
    letter-spacing: 0.5px;
    font-weight: 400;
    a
    {
      color: #9aabb1;
      &:hover
      {
        color: #41b883;
      }
    }
  }
}
</style>
