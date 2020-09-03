<template>
  <div class="mx-auto px-4 pb-12">
    <div class="w-full">
      <div v-if="integration.image">
        <a :href="integration.docs" target="_blank" class="flex flex-col">
          <img :src="integration.image" :alt="integration.title" />
        </a>
      </div>
    </div>

    <div class="container lg:flex">
      <div class="w-3/4">
        <div>
          <h3 :class="sectionClasses">
            <span class="text-green-500">Nuxt</span> + <span class="text-blue-600">{{ integration.name }}</span>
          </h3>
          <p>{{ description }}</p>
        </div>

        <div v-if="integration.features">
          <h3 :class="sectionClasses">
            Features
          </h3>
          <base-list v-if="integration.features" :items="integration.features" />
        </div>

        <div>
          <h3 :class="sectionClasses">
            Links
          </h3>
          <this-docs-button v-if="integration.github" :href="integration.github">
            Github
          </this-docs-button>
          <this-docs-button v-if="integration.website && integration.website !== integration.github" :href="integration.website">
            Documentation
          </this-docs-button>
        </div>
      </div>

      <div class="w-1/4">
        <div class="mt-8">
          <!-- Categories -->
          <h3 :class="sectionClasses">
            Categories
          </h3>
          <NuxtLink
            v-for="category in integration.categories"
            :key="category"
            :to="`/integrations/cat/${category}`"
            class="text-sm bg-gray-600 text-white py-1 mr-1 px-1 rounded align-middle mb-1 inline-block"
          >
            {{ category }}
          </NuxtLink>

          <!-- Stats -->
          <h3 :class="sectionClasses">
            Stats
          </h3>
          <template v-if="integration.repo">
            <a
              v-for="type in ['stars', 'last-commit', 'contributors', 'dependents-repo']"
              :key="type"
              :href="`https://github.com/${integration.repo}`"
              target="_blank"
            >
              <img
                :src="`https://flat.badgen.net/github/${type}/${integration.repo}`"
                :alt="'github ' + type"
                class="mb-2"
              />
            </a>
          </template>
          <template v-if="integration.npm">
            <a
              v-for="type in ['v', 'dm', 'types']"
              :key="type"
              :href="`https://npmjs.com/package/${integration.npm}`"
              target="_blank"
            >
              <img
                :src="`https://flat.badgen.net/npm/${type}/${integration.npm}`"
                :alt="'npm ' + type"
                class="mb-2"
              />
            </a>
          </template>
          <!-- Maintainers -->
          <template v-if="integration.maintainers && integration.maintainers.length">
            <h3 :class="sectionClasses">
              Maintainers
            </h3>
            <div class="flex">
              <div v-for="(maintainer, index) in integration.maintainers" :key="index">
              <a
                target="_blank"
                :href="maintainer.github ? `https://github.com/${maintainer.github}` : ''"
              >
                <img
                  v-if="maintainer.avatar"
                  :src="maintainer.avatar"
                  :alt="maintainer.name"
                  class="rounded mr-1 mb-1"
                  width="48px"
                  height="48px"
                />
              </a>
            </div>
            </div>
          </template>
          <!-- Keywords -->
          <h3 :class="sectionClasses">
            Keywords
          </h3>

          <span
            v-for="keyword in integration.keywords"
            :key="keyword"
            class="text-sm bg-gray-600 text-white py-1 mr-1 px-1 rounded align-middle mb-1 inline-block"
          >
            {{ keyword }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'resources',

  async asyncData({ params, $content }) {
    const integration = await $content('integrations', params.name).fetch()

    return { integration }
  },

  computed: {
    description() {
      return this.integration.long_description || this.integration.description
    },
    sectionClasses: () =>
      'mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear'
  }
}
</script>
