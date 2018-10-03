<template>
  <section class="nModes">
    <div class="container">
      <h2 class="nModes_Title"><span>Production modes</span></h2>
      <div class="row">
        <ul class="nModes_Tabs">
          <li class="nModes_Tabs_Option" @click="mode = 0">Single Page</li>
          <li class="nModes_Tabs_Option" @click="mode = 1">Static Generated</li>
          <li class="nModes_Tabs_Option" @click="mode = 2">Server Rendered</li>
        </ul>
        <div class="nModes_Content">
          <template v-show="mode === 0">
            <h3 class="nModes_Content_Title">Single Page Application (SPA)</h3>
            <p class="nModes_Content_Description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est harum id vero nulla unde voluptatum quae sit aperiam alias similique facere assumenda debitis rerum, hic obcaecati, maiores iste aliquam?
            </p>
          </template>
          <template v-show="mode === 1">
            <h3 class="nModes_Content_Title">Static Generated (Pre Rendering)</h3>
            <p class="nModes_Content_Description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est harum id vero nulla unde voluptatum quae sit aperiam alias similique facere assumenda debitis rerum, hic obcaecati, maiores iste aliquam?
            </p>
          </template>
          <template v-show="mode === 2">
            <h3 class="nModes_Content_Title">Server Rendered (Universal SSR)</h3>
            <p class="nModes_Content_Description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est harum id vero nulla unde voluptatum quae sit aperiam alias similique facere assumenda debitis rerum, hic obcaecati, maiores iste aliquam?
            </p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      mode: 0
    }
  }
}
</script>

<style lang="scss">
.nModes {
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
  &_Tabs {
    width: 30%;
    &_Option {

    }
  }
  &_Content {
    width: 60%;
    &_Title {

    }
    &_Description {

    }
  }
}
</style>
