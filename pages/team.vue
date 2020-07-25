<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4 transition-colors duration-300 ease-linear"
          >
            <AppTitle />
            Team
            <br />
          </h1>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            The development of NuxtJS and its ecosystem is guided by an
            international team. We have a very active and engaged team that is
            constantly striving to push Nuxt forward.
          </h3>
        </div>
        <TeamIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />

        <TeamMembers :team="framework.team" :title="framework.title" />
        <LazyTeamMembers id="nuxtTeam" :team="nuxt.team" :title="nuxt.title" />
        <LazyTeamMembers :team="maintainers.team" :title="maintainers.title" />
        <LazyTeamMembers
          id="ambassadors"
          :team="ambassadors.team"
          :title="ambassadors.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TeamIllustration from '~/assets/illustrations/team.svg?inline'

export default {
  components: {
    TeamIllustration
  },
  data() {
    return {
      nuxt: {
        title: 'NuxtJS Team',
        team: [
          {
            name: 'Alexandre Chopin',
            city: 'Bordeaux, France',
            github: 'alexchopin',
            twitter: 'iamnuxt',
            website: 'https://alexchopin.com',
            work: {
              role: 'CEO',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Sébastien Chopin',
            city: 'Bordeaux, France',
            github: 'Atinux',
            twitter: 'Atinux',
            website: 'https://atinux.com',
            work: {
              role: 'CTO',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },

          {
            name: 'Pooya Parsa',
            alias: 'پویا پارسا',
            city: 'Amsterdam, Netherlands',
            github: 'pi0',
            twitter: '_pi0_',
            work: {
              role: 'Head of Framework',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: "Debbie O'Brien",
            city: 'Palma de Mallorca, Spain',
            github: 'debs-obrien',
            twitter: 'debs_obrien',
            website: 'https://debbie.codes',
            work: {
              role: 'Head of Learning',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Florent Delerue',
            city: 'Bordeaux, France',
            github: 'Flosciante',
            twitter: 'flosciante',
            work: {
              role: 'Chief Process Officer',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Sergey Bedritsky',
            city: 'Kiev, Ukraine',
            github: 'bdrtsky',
            twitter: 'sergeybedritsky',
            website: 'https://sergeybedritsky.me/',
            work: {
              role: 'Lead Developer',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Vincent Rodriguez',
            city: 'Bordeaux, France',
            github: 'R-mooon',
            twitter: 'RodrigodelaNoch',
            work: {
              role: 'Creative Developer',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Sarah Moriceau',
            city: 'Bordeaux, France',
            github: 'sarahnuxtjs',
            twitter: 'moriceau_sarah',
            work: {
              role: 'Web Designer',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Benjamin Canac',
            city: 'Bordeaux, France',
            github: 'benjamincanac',
            twitter: 'benjamincanac',
            work: {
              role: 'Back-end developer',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          },
          {
            name: 'Ahad Birang',
            city: 'Tehran, Iran',
            github: 'farnabaz',
            twitter: 'a_birang',
            website: 'https://farnabaz.ir',
            work: {
              role: 'Lead developer',
              org: 'NuxtJS',
              orgUrl: 'https://nuxtjs.org'
            }
          }
        ]
      },
      framework: {
        title: 'Framework Team',
        team: [
          {
            name: 'Sébastien Chopin',
            city: 'Bordeaux, France',
            github: 'Atinux',
            twitter: 'Atinux',
            website: 'https://atinux.com'
          },
          {
            name: 'Alexandre Chopin',
            city: 'Bordeaux, France',
            github: 'alexchopin',
            twitter: 'iamnuxt',
            website: 'https://alexchopin.com'
          },
          {
            name: 'Pooya Parsa',
            alias: 'پویا پارسا',
            city: 'Amsterdam, Netherlands',
            github: 'pi0',
            twitter: '_pi0_'
          },
          {
            name: 'Clark Du',
            alias: '杜欣',
            city: 'Dublin, Ireland',
            github: 'clarkdo',
            twitter: 'ClarkDu_',
            website: 'https://clark.js.org/'
          }
        ]
      },
      maintainers: {
        title: 'Maintainers',
        team: [
          {
            name: 'Jonas Galvez',
            city: 'Barretos, Brazil',
            github: 'galvez',
            twitter: 'anothergalvez',
            website: 'https://hire.jonasgalvez.com.br'
          },
          {
            name: 'Dmitry Molotkov',
            alias: 'Дзмітрый Малаткоў',
            city: 'Gomel, Belarus',
            github: 'aldarund',
            twitter: 'aldarund'
          },
          {
            name: 'Kevin Marrec',
            city: 'Rennes, France',
            github: 'kevinmarrec',
            twitter: 'K_Marrec',
            website: 'https://marrec.io'
          },
          {
            name: 'Pim',
            city: 'The Netherlands',
            github: 'pimlie'
          }
        ]
      },
      ambassadors: {
        title: 'Ambassadors',
        team: [
          {
            name: 'Alexander Lichter',
            city: 'Dresden, Germany',
            github: 'manniL',
            twitter: 'TheAlexLichter',
            website: 'https://blog.lichter.io'
          },
          {
            name: 'Krutie Patel',
            city: 'Brisbane, Australia',
            github: 'Krutie',
            twitter: 'KrutiePatel',
            website: 'https://krutiepatel.com'
          },
          {
            name: 'Josh Deltener',
            city: 'North Dakota, USA',
            github: 'hecktarzuli',
            twitter: 'JoshDeltener',
            website: 'https://deltener.com/'
          },
          {
            name: 'Maya Shavin',
            city: 'Israel',
            github: 'mayashavin',
            twitter: 'MayaShavin',
            website: 'https://mayashavin.com'
          },
          {
            name: 'Giraud Florent',
            city: 'Montreal, Canada',
            github: 'f3ltron',
            twitter: 'giraud_florent',
            website: 'https://florent.dev/'
          },
          {
            name: 'Alba Silvente',
            city: 'Amsterdam, Holland',
            github: 'Dawntraoz',
            twitter: 'dawntraoz',
            website: 'https://www.dawntraoz.com/'
          }
        ]
      }
    }
  },
  head() {
    const title = 'The NuxtJS Team'
    const description =
      'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>
