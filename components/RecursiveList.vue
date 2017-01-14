<template>
  <ul class="RecursiveList">
    <li class="RecursiveList__Item" v-for="file in files">
      <div :class="linkClass(file)" @click="changeFile(file)">
        <div class="Icon">
          <div class="icon" :class="{'folder': file.type === 'dir', 'file': file.type === 'file'}"></div>
        </div>
        {{ file.name }}
      </div>
      <recursive-list v-on:changeFile="changeFile" v-if="file.type === 'dir'" :path="file.path">
      </recursive-list>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'recursive-list',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  beforeCreate () {
    // https://vuejs.org/v2/guide/components.html#Circular-References-Between-Components
    this.$options.components.RecursiveList = require('./RecursiveList.vue')
  },
  mounted () {
    return axios({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/' + this.path,
      headers: {
        'Authorization': `token ${process.env.githubToken}`
      }
    })
    .then((res) => {
      res.data.sort((f1, f2) => {
        // Same type, order by name
        if (f1.type === f2.type) {
          let n1 = f1.name.toUpperCase()
          var n2 = f2.name.toUpperCase()
          if (n1 < n2) return -1
          if (n1 > n2) return 1
          return 0
        }
        if (f1.type === 'dir') return -1
        return 1
      })
      if (!this.currentFile) {
        let f = res.data.find((file) => {
          return file.name === 'package.json'
        })
        if (f) this.changeFile(f)
      }
      this.files = res.data.filter((f) => f.name.toLowerCase() !== 'readme.md')
    })
  },
  data () {
    return {
      files: []
    }
  },
  computed: {
    currentFile () {
      return this.$parent.currentFile
    }
  },
  methods: {
    linkClass (f) {
      let c = 'RecursiveList__Item__Link '
      c += (this.currentFile && this.currentFile.path === f.path) ? 'RecursiveList__Item__Link--active' : 'RecursiveList__Item__Link--' + f.type
      return c
    },
    changeFile (f) {
      if (f.type === 'file' && (!this.currentFile || this.currentFile.path !== f.path)) {
        this.$emit('changeFile', f)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.RecursiveList
{
  padding: 0;
  padding-left: 10px;
  list-style: none;
  margin: 0;
  &__Item
  {
    padding: 1px 0;
    &:last-child
    {
      padding-bottom: 0;
    }
    &:first-child
    {
      padding-top: 2px;
    }
    &__Link
    {
      color: #ddd;
      font-size: 0.9em;
      font-weight: 400;
      line-height: 1em;
      letter-spacing: 0.5px;
      border-radius: 5px;
      padding: 10px 5px;
      &--dir
      {
        text-transform: uppercase;
      }
      &--file
      {
        cursor: default;
        &:hover
        {
          background-color: #222;
          color: #fff;
        }
      }
      &--active
      {
        background-color: #3b8070;
        color: #fff;
      }
      .Icon
      {
        float: left;
        padding: 0 5px;
        margin-right: 10px;
        .file
        {
          margin-left: 0;
          margin-top: 0;
        }
        .folder
        {
          margin-left: 0;
          margin-top: 3px;
        }
        .icon, .icon:before, .icon:after
        {
          border-color: #fff;
        }
      }
    }
  }
}
</style>
