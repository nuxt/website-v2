<template>
  <nui-container class="pb-12 bg-gray-100 lg:bg-transparent rounded">
    <section class="lg:bg-gray-100 rounded py-6 sm:p-6">
      <h1 class="text-3xl uppercase text-center pt-10">
        NUXT<span class="text-nuxt-lightgreen">JS</span> rendering
      </h1>
      <div class="p-4 lg:p-8">
        <h4 class="uppercase text-2xl py-8">
          {{ $store.state.homepage.modes_server_side_rendering.attrs.content_title }}
        </h4>
        <p class="leading-loose text-justify" v-html="$store.state.homepage.modes_server_side_rendering.body" />
      </div>
      <div class="p-4 lg:p-8">
        <h4 class="uppercase text-2xl py-8">
          {{ $store.state.homepage.modes_statically_generated.attrs.content_title }}
        </h4>
        <p class="leading-loose text-justify" v-html="$store.state.homepage.modes_statically_generated.body" />
      </div>
      <div class="px-4 lg:p-8">
        <h4 class="uppercase text-2xl py-8">
          {{ $store.state.homepage.modes_single_page_app.attrs.content_title }}
        </h4>
        <p class="leading-loose text-justify" v-html="$store.state.homepage.modes_statically_generated.body" />
      </div>
    </section>
  </nui-container>
</template>

<script>
export default {
}
</script>
