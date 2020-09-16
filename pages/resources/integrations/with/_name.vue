<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <!-- <ResourceHero :integration="integration" /> -->
          <div>
            <img
              v-if="integration.icon"
              :src="iconUrl(integration.icon)"
              :alt="integration.name"
              class="inline-block h-16 my-2"
            />
            <img
              v-else
              :src="`/img/resources/${$route.params.category}.svg`"
              class="inline-block h-20"
            />
            <span class="text-green-500 text-3xl"> Nuxt +</span>
            <h1 class="inline-block text-blue-500 text-4xl capitalize">
              {{ integration.name }}
              <span
                v-for="label in integration.labels"
                :key="label"
                class="text-xs bg-gray-600 text-white py-1 mr-1 px-1 rounded align-middle mb-1 inline-block"
              >
                {{ label }} {{ integration.type }}
              </span>
            </h1>
            <h2 :class="sectionClasses" class="capitalize">Description</h2>
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
              class="sm:mr-4 mb-2 py-2 px-2 text-base"
            >
              <GithubIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              Github
            </AppButton>
            <AppButton
              v-if="
                integration.website &&
                integration.website !== integration.github
              "
              :href="integration.website"
              class="sm:mr-4 mb-2 py-2 px-2 text-base"
            >
              <BooksIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              Docs
            </AppButton>
            <AppButton
              v-if="integration.demo"
              :href="integration.demo"
              class="sm:mr-4 mb-2 py-2 px-2 text-base"
            >
              <DemoIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              Demo
            </AppButton>
            <AppButton
              v-if="integration.learn_more"
              :href="integration.learn_more"
              class="mb-2 py-2 px-2 text-base"
            >
              <ExternalLinkIcon
                slot="icon"
                class="inline-block h-6 -mt-1 mr-1"
              />
              Learn More
            </AppButton>
          </div>
          <div v-if="integration.video">
            <h3 :class="sectionClasses">Video</h3>
            <video loop="loop" plays-inline="true" controls="controls">
              <source :src="integration.video" type="video/mp4" />
            </video>
          </div>
          <div v-if="integration.articles">
            <h3 :class="sectionClasses">Articles</h3>
            <ul v-for="(article, i) in integration.articles" :key="i">
              <li>
                <NuxtLink :to="article.link">{{ article.title }}</NuxtLink>
                <ul>
                  <li
                    v-for="(author, index) in article.authors"
                    :key="`author-${index}`"
                  >
                    <template>
                      <a
                        v-if="author.twitter"
                        :href="`http://twitter.com/${author.twitter}`"
                        target="_blank"
                        rel="noopener"
                        class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
                      >
                        <img
                          class="inline-block h-6 w-6 rounded-full"
                          :src="author.avatar"
                          :alt="author.name"
                        />
                        <span class="mx-2 last:mr-0">{{ author.name }}</span>
                      </a>
                      <span
                        v-else
                        class="inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"
                      >
                        <img
                          class="inline-block h-6 w-6 rounded-full"
                          :src="author.avatar"
                          :alt="author.name"
                        />
                        <span class="mx-2 last:mr-0">{{ author.name }}</span>
                      </span>
                    </template>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mb-8">
            <h3 :class="sectionClasses">
              Sites Built with {{ integration.name }}
            </h3>
            <!-- TODO add link to integrations if we decide to add this -->
            <AppButton
              href="https://vuetelemetry.com/explore?framework.slug=nuxtjs&modules.slug=nuxt-content"
              class="sm:mr-4 py-2 px-2 text-base"
            >
              <ExternalLinkIcon
                slot="icon"
                class="inline-block h-6 -mt-1 mr-1"
              />
              ShowCase
            </AppButton>
          </div>
        </div>

        <div class="lg:w-1/4 lg:ml-2">
          <div class="mt-8">
            <!-- Categories -->
            <h3 :class="sectionClasses">Categories</h3>
            <NuxtLink
              v-for="category in integration.categories"
              :key="category"
              :to="`/integrations/${category}`"
              class="text-sm bg-green-600 text-white py-1 mr-1 px-1 rounded align-middle mb-1 inline-block"
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
            <div v-if="integration.keywords.length">
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
    </div>
  </div>
</template>

<script>
import GithubIcon from '~/assets/icons/github.svg?inline'
import BooksIcon from '~/assets/icons/books.svg?inline'
import ExternalLinkIcon from '~/assets/icons/external-link.svg?inline'
import DemoIcon from '~/assets/icons/desktop-computer.svg?inline'

export default {
  transition: 'resources',
  components: {
    GithubIcon,
    BooksIcon,
    ExternalLinkIcon,
    DemoIcon
  },

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
  },
  methods: {
    iconUrl(icon) {
      if (/^https?:\/\//.test(icon)) {
        return icon
      }
      return `https://cdn.jsdelivr.net/gh/nuxt/integrations@master/icons/${icon}`
    }
  }
}
</script>
