<template>
  <div class="mx-auto px-4 pb-12">
    <div class="container lg:flex">
      <div class="lg:w-3/4 lg:mr-2">
        <ResourceHero :integration="integration" />
        <div>
          <h2 :class="sectionClasses" class="capitalize">
            {{ integration.name }}
          </h2>
          <p>
            {{ description }}
          </p>
        </div>

        <div v-if="integration.features">
          <h3 :class="sectionClasses">Features</h3>
          <base-list
            v-if="integration.features"
            :items="integration.features"
          />
        </div>

        <div>
          <!-- Links -->
          <h3 :class="sectionClasses">Links</h3>
          <AppButton
            v-if="integration.github"
            :href="integration.github"
            class="sm:mr-4 py-2 px-2 text-base"
          >
            <GithubIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
            Github
          </AppButton>
          <AppButton
            v-if="
              integration.website && integration.website !== integration.github
            "
            :href="integration.website"
            class="sm:mr-4 py-2 px-2 text-base"
          >
            <BooksIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
            Documentation
          </AppButton>
          <AppButton
            v-if="integration.external_link"
            :href="integration.external_link"
            class="sm:mr-4 py-2 px-2 text-base"
          >
            <ExternalLinkIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
            Learn More
          </AppButton>
        </div>
        <div>
          <NuxtLink
            v-if="prev"
            :to="{ name: 'integrations-slug', params: { slug: prev.slug } }"
          >
            {{ prev.title }}
          </NuxtLink>

          <NuxtLink
            v-if="next"
            :to="{ name: 'integrations-slug', params: { slug: next.slug } }"
          >
            {{ next.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="lg:w-1/4 lg:ml-2">
        <div class="mt-8">
          <!-- Categories -->
          <h3 :class="sectionClasses">Categories</h3>
          <NuxtLink
            v-for="category in integration.categories"
            :key="category"
            :to="`/integrations/cat/${category}`"
            class="text-sm bg-gray-600 text-white py-1 mr-1 px-1 rounded align-middle mb-1 inline-block"
          >
            {{ category }}
          </NuxtLink>

          <!-- Stats -->
          <h3 :class="sectionClasses">Stats</h3>
          <template v-if="integration.repo">
            <a
              v-for="type in [
                'stars',
                'last-commit',
                'contributors',
                'dependents-repo'
              ]"
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
          <template
            v-if="integration.maintainers && integration.maintainers.length"
          >
            <h3 :class="sectionClasses">Maintainers</h3>
            <div class="flex">
              <div
                v-for="(maintainer, index) in integration.maintainers"
                :key="index"
              >
                <a
                  target="_blank"
                  :href="
                    maintainer.github
                      ? `https://github.com/${maintainer.github}`
                      : ''
                  "
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
          <h3 :class="sectionClasses">Keywords</h3>

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
import GithubIcon from '~/assets/icons/github.svg?inline'
import BooksIcon from '~/assets/icons/books.svg?inline'
import ExternalLinkIcon from '~/assets/icons/external-link.svg?inline'

export default {
  transition: 'resources',
  components: {
    GithubIcon,
    BooksIcon,
    ExternalLinkIcon
  },

  async asyncData({ params, $content }) {
    const integration = await $content('integrations', params.name).fetch()

    const [prev, next] = await $content('integrations')
      .only(['name', 'slug'])
      .surround(params.slug)
      .fetch()
    return { integration, prev, next }
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
