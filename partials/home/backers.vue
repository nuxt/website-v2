<template>
  <section class="nBackers">
    <div class="container">
      <h2 class="nBackers_Title"><span>Support the Team</span></h2>
      <p class="nBackers_Description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit necessitatibus corrupti vero ratione, ex voluptas dicta accusamus, ipsam corporis assumenda error, quis unde hic perferendis doloremque architecto eveniet cumque?
      </p>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Partners</h3>
        <div class="nBackers_Group_Content">
          <a class="nBackers_Group_Content_Link" href="https://t.co/sUZfRy6ZxS" target="_blank" rel="noopener">
            <img class="nBackers_Group_Content_Link_Image" src="https://user-images.githubusercontent.com/1016365/34124854-48fafa06-e3e9-11e7-8c04-251055feebee.png" alt="Tipe.io" />
          </a>
          <a class="nBackers_Group_Content_Link" href="https://www.storyblok.com/?ref=nuxt" target="_blank" rel="noopener">
            <img class="nBackers_Group_Content_Link_Image" src="https://a.storyblok.com/f/39898/x/aa0dc897ff/storyblok-logo.svg" alt="Storyblok.com">
          </a>
        </div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button nBackers_Group_Action_Button--green" href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">
            Become a partner
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Sponsors</h3>
        <div class="nBackers_Group_Content">
          <img src="https://opencollective.com/nuxtjs/tiers/sponsors.svg?avatarHeight=64&width=1155&button=false"/>
        </div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button nBackers_Group_Action_Button--green" href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">
            Become a sponsor
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Backers</h3>
        <div class="nBackers_Group_Content">
          <img src="https://opencollective.com/nuxtjs/tiers/backers.svg?width=1155&button=false" />
        </div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button nBackers_Group_Action_Button--green" href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">
            Become a backer
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Fundations</h3>
        <div class="nBackers_Group_Content">
          <a class="nBackers_Group_Content_Link" href="https://www.shuttleworthfoundation.org" target="_blank" rel="noopener">
            <img class="nBackers_Group_Content_Link_Image" src="/shuttleworth-funded.png" alt="shuttleworth funded"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.nBackers {
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  padding-top: 8rem;
  padding-bottom: 4rem;
  text-align: center;
  &_Title {
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h2-font-size;
    font-weight: $font-weight-regular;
    line-height: normal;
    span {
      padding-bottom: 10px;
      border-bottom: 4px solid $color-vue-green;
      border-radius: 4px;
    }
  }
  &_Description {
    padding: 3rem 0;
  }
  &_Group {
    padding-bottom: 6rem;
    &_Title {
      margin: 0;
      color: $color-text-regular;
      font-size: $h3-font-size;
      font-weight: $font-weight-regular;
    }
    &_Content {
      padding: 3rem 0;
      &_Link {
        display: inline-block;
        margin-right: 30px;
        &_Image {
          height: 80px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &_Action {
      &_Button {
        color: $color-text-regular;
        display: inline-block;
        padding: 1rem 2rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: $font-weight-bold;
        box-shadow: $--box-shadow-1;
        border-radius: 4px;
        margin-right: 30px;
        background-color: $background-color-lighter;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          text-decoration: none;
          color: $color-text-primary;
          box-shadow: $--box-shadow-2;
        }
        &--green {
          color: $background-color-lighter;
          background-color: $color-vue-green;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
