<template>
  <AppContainer class="py-12">
    <section>
      <h1 class="text-3xl uppercase text-center pb-8">
        Nuxt<span class="text-nuxt-lightgreen">JS</span> targets
      </h1>
      <div class="flex items-end lg:items-center justify-between">
        <div class="Home__Modes__Section">
          <h4 class="Home__Modes__Section__Title">
            Server
          </h4>
          <p class="Home__Modes__Section__Description">
            Heroku, Digital Ocean, OVH...
          </p>
        </div>
      </div>
      <div>
        <div class="Home__Modes__Section">
          <h4 class="Home__Modes__Section__Title">
            Serverless
          </h4>
          <p class="Home__Modes__Section__Description">
            Zeit, Amazon Lambda, Google Cloud Function, Azure...
          </p>
        </div>
      </div>
      <div>
        <div class="Home__Modes__Section">
          <h4 class="Home__Modes__Section__Title">
            Static (JAM Stack ready)
          </h4>
          <p class="Home__Modes__Section__Description">
            Netlify, GitHub Pages, Surge...
          </p>
        </div>
      </div>
    </section>
  </AppContainer>
</template>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;

.Home__Modes {
  color: $grey_blue;
  text-align: center;
  padding: 5rem 0;
  &__Section {
    width: 80%;
    text-align: left;
    padding-bottom: 4rem;
    &__Title {
      font-size: 1.35rem;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
      padding: 0;
      padding-bottom: 2rem;
    }
    &__Description {
      color: $grey;
      font-weight: 500;
      margin: 0;
      line-height: 1.7rem;
      font-size: 1rem;
    }
  }
}
</style>
