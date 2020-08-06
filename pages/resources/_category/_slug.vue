<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
    >
      <a :href="resource.docs" class="flex flex-col">
        <img :src="resource.image" :alt="resource.title" />
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
          <h3
            class="mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
          >
            Docs
          </h3>
          <p>check out the docs for more info</p>
        </div>
      </a>
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
