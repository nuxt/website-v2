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
export default {
  name: 'contributor-list',
  props: {
    docPath: {
      type: String,
      required: true
    }
  },
  computed: {
    contributors() {
      return this.$store.state.contributors[this.docPath] || []
    },
    sortedContributors() {
      return this.contributors.sort((a, b) => a.commits < b.commits)
    }
  },
  methods: {
    fetchContributors() {
      if (!this.$store.state.contributors[this.docPath]) {
        this.$store.dispatch('fetchContributors', {
          docPath: this.docPath
        })
      }
    }
  },
  watch: {
    docPath() {
      this.fetchContributors()
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
