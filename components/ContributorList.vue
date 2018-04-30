<template>
  <div class="ContributorList">
    <h2>
      Contributors to this page
    </h2>

    <ul>
      <li class="Contributor" v-for="contributor in sortedContributors" :key="contributor.userName">
        <a :href="`https://github.com/${contributor.userName}`" target="_blank" rel="noopener">
          <img class="Contributor__Image" :src="`https://github.com/${contributor.userName}.png`" />
          <p class="Contributor__UserName">
            {{ contributor.userName }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  name: 'contributor-list',
  props: {
    docPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      contributors: {}
    }
  },
  computed: {
    contributorsByDocPath() {
      return this.contributors[this.docPath] || []
    },
    sortedContributors() {
      return this.contributorsByDocPath.sort((a, b) => a.commits < b.commits)
    }
  },
  methods: {
    async fetchContributors() {
      const perPage = 100
      const githubClient = axios.create({ baseURL: 'https://api.github.com' })

      let commitDataArray = []
      for (let page = 0; page < 10; page++) {
        let res = await githubClient.get(`/repos/nuxt/docs/commits?path=${this.docPath}&per_page=${String(perPage)}&page=${String(page)}`)
        commitDataArray = commitDataArray.concat(res.data)
        if (!res.headers.link || !res.headers.link.match(/rel="next"/)) {
          break
        }
      }

      const committers = commitDataArray.map((commitData) => {
        if (commitData.committer) {
          return commitData.committer.login
        } else {
          return null
        }
      }).filter(committer => committer)

      const contributors = committers.reduce((accumulator, committer) => {
        if (accumulator.filter(item => item.userName === committer).length === 0) {
          const commits = committers.filter((_committer) => _committer === committer).length
          accumulator.push({ userName: committer, commits: commits })
        }
        return accumulator
      }, [])

      Vue.set(this.contributors, this.docPath, contributors)
    }
  },
  watch: {
    docPath() {
      if (!this.contributors[this.docPath]) {
        this.fetchContributors()
      }
    }
  },
  mounted() {
    this.fetchContributors()
  }
}
</script>

<style lang="scss" scoped>
.Contributor {
  display: inline-block;
  margin: 10px 15px;
  text-align: center;
  list-style: none;

  &__Image {
    width: 64px;
    height: 64px;
    border-radius: 64px;
  }

  &__UserName {
    margin: 0;
  }
}
</style>
