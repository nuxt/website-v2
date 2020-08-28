<template>
  <div class="mx-auto px-4 pb-12">
    <div class="w-full">
      <div v-if="resource.image">
        <a :href="resource.docs" target="_blank" class="flex flex-col">
          <img :src="resource.image" :alt="resource.title" />
        </a>
      </div>
    </div>

    <div class="container lg:flex">
      <div class="w-3/4">
        <div>
          <h3 :class="sectionClasses">
            What is {{ resource.name }}?
          </h3>
          <p>{{ description }}</p>
        </div>

        <div v-if="resource.features">
          <h3 :class="sectionClasses">
            Features
          </h3>
          <base-list v-if="resource.features" :items="resource.features" />
        </div>

        <div>
          <h3 :class="sectionClasses">
            Links
          </h3>
          <docs-button v-if="resource.github" :href="resource.github">
            Github
          </docs-button>
          <docs-button v-if="resource.website && resource.website !== resource.github" :href="resource.website">
            Documentation
          </docs-button>
        </div>
      </div>

      <div class="w-1/4">
        <div class="mt-8">
          <h3 :class="sectionClasses">
            Tags
          </h3>

          <NuxtLink
            v-for="tag in resource.labels"
            :key="tag"
            :to="`/resources/${tag}`"
            class="text-sm bg-gray-600 text-white py-1 mr-1 px-1 rounded align-middle"
          >
            {{ tag }}
          </NuxtLink>

          <h3 :class="sectionClasses">
            Stats
          </h3>
          <template v-if="resource.repo">
            <a
              v-for="type in ['stars', 'last-commit', 'contributors', 'dependents-repo']"
              :key="type"
              :href="`https://github.com/${resource.repo}`"
              target="_blank"
            >
              <img
                :src="`https://flat.badgen.net/github/${type}/${resource.repo}`"
                :alt="'github ' + type"
                class="mb-2"
              />
            </a>
          </template>
          <template v-if="resource.npm">
            <a
              v-for="type in ['v', 'dm', 'types']"
              :key="type"
              :href="`https://npmjs.com/package/${resource.npm.name}`"
              target="_blank"
            >
              <img
                :src="`https://flat.badgen.net/npm/${type}/${resource.npm.name}`"
                :alt="'npm ' + type"
                class="mb-2"
              />
            </a>
          </template>
          <template v-if="resource.maintainers && resource.maintainers.length">
            <h3 :class="sectionClasses">
              Maintainers
            </h3>
            <div
              v-for="(maintainer, index) in resource.maintainers"
              :key="index"
            >
              <img
                v-if="maintainer.avatar"
                :src="maintainer.avatar"
                :alt="maintainer.name"
                class="rounded inline mb-2"
                width="64px"
                height="64px"
              />
              <br>
              {{ maintainer.name }}
              <br>
              <a
                v-if="maintainer.github"
                target="_blank"
                class="inline"
                :href="'https://github.com/' + maintainer.github"
              >
                gh:@{{ maintainer.github }}
              </a>
              <a
                v-if="maintainer.twitter"
                target="_blank"
                class="inline"
                :href="'https://twitter.com/' + maintainer.twitter"
              >
                twitter:@{{ maintainer.twitter }}
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'resources',

  async asyncData({ params }) {
    const modules = (await import('@nuxt/modules/dist/resources.json')).default
    const resource = modules.find(r => r.name === params.name)
    return { resource }
  },

  computed: {
    description() {
      return this.resource.long_description || this.resource.short_description
    },
    sectionClasses: () =>
      'mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linea'
  }
}
</script>
