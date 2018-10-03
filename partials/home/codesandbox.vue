<template>
  <section class="nCodesandbox">
    <div class="container">
      <h2 class="nCodesandbox_Title"><span>{{ $store.state.lang.homepage.codesandbox_title }}</span></h2>
      <iframe src="https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?autoresize=1&hidenavigation=1&view=preview" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
      <p>
        <a class="nCodesandbox_Link" href="https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?autoresize=1&hidenavigation=1&view=preview" target="_blank" rel="noopener">
          <svg class="nCodesandbox_Link_Icon" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 1024 1024"><g id="Layer_1"><polyline class="fill" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline>
          <polyline class="fill" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline class="fill" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g id="Layer_2"><polyline fill="none" class="stroke" stroke-width="80" stroke-miterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" class="stroke" stroke-width="80" stroke-miterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" class="stroke" stroke-width="80" stroke-miterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g>
          </svg> {{ $store.state.lang.homepage.codesandbox_open }}
        </a>
        <br>
        <nuxt-link class="nCodesandbox_Examples" to="/examples">{{ $store.state.lang.homepage.codesandbox_examples }}</nuxt-link>
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.nCodesandbox {
  position: relative;
  background-color: $background-color-light;
  padding: 6rem 0;
  text-align: center;
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
  &_Link {
    border: 1px solid #41B883;
    padding: 10px 20px;
    font-size: 20px;
    position: relative;
    right: 0;
    margin: 10px 0;
    text-decoration: none;
    display: inline-flex;
    align-self: center;
    &:hover {
      background: #41B883;
      color: #141618;
      .fill {
        fill: #141618;
      }
      .stroke {
        stroke: #141618;
      }
    }
    &_Icon {
      margin-right: 8px;
      .fill {
        fill: #41B883;
      }
      .stroke {
        stroke:#41B883;
      }
    }
  }
  &_Examples {
    color: #999;
    text-decoration: underline;
    display: inline-block;
    margin-bottom: 10px;
  }
  iframe {
    width:100%;
    max-width: 1400px;
    height:700px;
    border:0;
    border-radius: 4px;
    overflow:hidden;
    margin: 0 auto;
  }
}
@media (max-width: 991px) {
  .nCodesandbox iframe {
    display: none;
  }
}
</style>
