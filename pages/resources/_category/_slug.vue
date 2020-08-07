<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
    >
      <a :href="resource.docs" target="_blank" class="flex flex-col">
        <img :src="resource.image" :alt="resource.title" />
      </a>
      <p>{{ resource.description }}</p>
      <h3
        class="mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
      >
        Features
      </h3>
      <ul>
        <li v-for="(feature, i) in resource.features" :key="i">
          {{ feature }}
        </li>
      </ul>
      <h3
        class="mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
      >
        Installation
      </h3>
      <code-group>
        <code-block label="Yarn" active>
          yarn add {{ resource.install }}
        </code-block>

        <code-block label="NPM">
          npm install {{ resource.install }}
        </code-block>
      </code-group>
      <div class="nuxt-content-highlight">
        <span class="filename">nuxt.config.js</span>
        <pre
          class="line-numbers language-js"
        ><code><span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token punctuation">{</span>
  buildModules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@nuxtjs/tailwindcss'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
      </div>
      <div class="flex align-middle mt-4">
        <a :href="resource.link" target="_blank" class="mr-8">
          Docs
        </a>

        <div class="mr-2">
          <a
            v-if="resource.author.link"
            :href="resource.author.link"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
          >
            <img
              class="inline-block h-6 w-6 rounded-full"
              :src="resource.author.avatarUrl"
              :alt="resource.author.name"
            />
            <span class="mx-2 last:mr-0">{{ resource.author.name }}</span>
          </a>
        </div>
        <img
          class="mr-2"
          src="https://camo.githubusercontent.com/9f31c446e7bb41e006ece39a68147458f1be84f4/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578742f636f6e74656e742f6c61746573742e737667"
          alt="npm version"
          data-canonical-src="https://img.shields.io/npm/v/@nuxt/content/latest.svg"
          style="max-width: 100%;"
        />
        <img
          src="https://camo.githubusercontent.com/8fec2493a695ca926a8a9a0d72c946a196c68971/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578742f636f6e74656e742e737667"
          alt="npm downloads"
          data-canonical-src="https://img.shields.io/npm/dt/@nuxt/content.svg"
          style="max-width: 100%;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const document = await $content(
      app.i18n.locale + '/resources/' + params.category
    ).fetch()
    const resource = document.categories.find(
      category => category.slug === params.slug
    )

    return { resource }
  }
}
</script>

<style scoped></style>
