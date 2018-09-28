<template>
  <footer class="Footer">
    <div class="Footer__Sponsors">
      <h3>{{ $store.state.lang.sponsors.title }}</h3>
      <a class="Footer__Sponsors__Link" href="https://t.co/sUZfRy6ZxS" target="_blank" rel="noopener">
        <img src="https://user-images.githubusercontent.com/1016365/34124854-48fafa06-e3e9-11e7-8c04-251055feebee.png" alt="Tipe.io" />
      </a>
      <a class="Footer__Sponsors__Link" href="https://www.storyblok.com/?ref=nuxt" target="_blank" rel="noopener">
        <img src="https://a.storyblok.com/f/39898/x/aa0dc897ff/storyblok-logo.svg" alt="Storyblok.com">
      </a>
      <br/>
      <a class="Footer__Sponsors__Link" href="https://www.shuttleworthfoundation.org">
        <img src="/shuttleworth-funded.png" alt="shuttleworth funded"/>
      </a>
    </div>
    <p class="Footer__Sponsors__Become">
      {{ $store.state.lang.sponsors.become }}
      <a href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">{{ $store.state.lang.sponsors.become_partner }}</a>.
    </p>
    <div class="Footer__Author container">
      {{ $store.state.lang.footer.authors }}:
      <a href="https://github.com/Atinux" target="_blank">@Atinux</a>
      &amp;
      <a href="https://github.com/alexchopin" target="_blank">@alexchopin</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.Footer
{
  text-align: center;
  background: #f6f6f6;
  padding-top: 50px;
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
        &:hover {
          filter: none;
          opacity: 1;
        }
      }
    }
    &__Become {
      padding-bottom: 40px;
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
