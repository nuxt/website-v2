<template>
  <section class="nBackers">
    <div class="container">
      <h2 class="nBackers_Title"><span>Support the Team</span></h2>
      <p class="nBackers_Description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit necessitatibus corrupti vero ratione, ex voluptas dicta accusamus, ipsam corporis assumenda error, quis unde hic perferendis doloremque architecto eveniet cumque?
      </p>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Partners</h3>
        <p class="nBackers_Group_Title"></p>
        <div class="nBackers_Group_Content"></div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button" href="https://opencollective.com/nuxtjs" target="_blank">
            Become a partner
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Sponsors</h3>
        <p class="nBackers_Group_Title"></p>
        <div class="nBackers_Group_Content"></div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button" href="https://opencollective.com/nuxtjs" target="_blank">
            Become a sponsor
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Backers</h3>
        <p class="nBackers_Group_Title"></p>
        <div class="nBackers_Group_Content"></div>
        <div class="nBackers_Group_Action">
          <a class="nBackers_Group_Action_Button" href="https://opencollective.com/nuxtjs" target="_blank">
            Become a backer
          </a>
        </div>
      </div>
      <div class="nBackers_Group">
        <h3 class="nBackers_Group_Title">Funds</h3>
        <p class="nBackers_Group_Title">Shuttleworth fundation</p>
        <div class="nBackers_Group_Content"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.nBackers {
  z-index: 100;
  position: relative;
  box-shadow: $--box-shadow-1;
  padding: 6rem 0;
  &_Title {
    text-align: center;
    margin-top: 0;
    color: $color-text-primary;
    font-size: $h2-font-size;
    font-weight: $font-weight-regular;
    line-height: normal;
    margin-bottom: 6rem;
    span {
      padding-bottom: 10px;
      border-bottom: 4px solid $color-vue-green;
      border-radius: 4px;
    }
  }
  &_Description {

  }
  &_Group {
    &_Title {

    }
    &_Description {

    }
    &_Content {

    }
    &_Action {

    }
  }
}
</style>
