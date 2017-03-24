<template>
  <div class="FilesTree clearfix">
    <div class="FilesTree__Left" :class="{'FilesTree__Left--hidden': hidden}">
      <div class="FilesTree__Left__Header">
        <div class="Icon" @click="hidden = true">
          <div class="icon remove"></div>
        </div>
        {{ $store.state.lang.text.example_file }}
      </div>
      <div class="FilesTree__Left__Body">
        <recursive-list v-on:changeFile="changeFile" :path="'examples/'+example"></recursive-list>
      </div>
    </div>
    <div class="FilesTree__Right" :class="{'FilesTree__Right--hidden': hidden}" v-if="currentFile">
      <div class="FilesTree__Right__Header">
        <div class="Icon" @click="hidden = false" v-if="hidden">
          <div class="icon menu"></div>
        </div>
        {{ breadcrumb }}
      </div>
      <div class="FilesTree__Right__Body">
        <template v-if="parseContent">
          <img v-if="isImage" :src="parseContent" alt="Image" class="FilesTree__Right__Body__Image"/>
          <pre v-else class="FilesTree__Right__Body__File"><code v-html="parseContent"></code></pre>
        </template>
        <div v-else class="FilesTree__Right__Body__Wait">{{ $store.state.lang.text.please_wait }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import hljs from 'highlight.js'

import RecursiveList from './RecursiveList.vue'

let cacheFiles = {}

export default {
  props: {
    example: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      hidden: false,
      currentFile: null,
      content: ''
    }
  },
  computed: {
    parseContent () {
      if (!this.content) {
        return ''
      }
      if (this.isImage) {
        return 'https://github.com/nuxt/nuxt.js/blob/master/' + this.currentFile.path + '?raw=true'
      }
      return this.content
    },
    breadcrumb () {
      return this.currentFile.path.replace('examples/' + this.example, '')
    },
    isImage () {
      if (this.currentFile && /[^\s]+\.(jpe?g|png|gif|bmp)$/i.test(this.currentFile.path)) {
        return true
      }
      return false
    },
    isMobile () {
      return window.innerWidth < 576
    }
  },
  methods: {
    changeFile (file) {
      this.currentFile = file
      this.content = cacheFiles[file.path]
      if (this.isMobile) {
        this.hidden = true
      }
      if (!this.content) {
        axios({
          url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/' + file.path,
          headers: {
            'Authorization': `token ${process.env.githubToken}`
          }
        })
        .then((res) => {
          let content = window.atob(res.data.content)
          content = hljs.highlightAuto(content).value
          cacheFiles[file.path] = content
          this.content = cacheFiles[file.path]
        })
      }
    }
  },
  components: {
    RecursiveList
  }
}
</script>

<style lang="scss" scoped>
.FilesTree
{
  position: relative;
  margin: 30px 0;
  position: relative;
  overflow: hidden;
  background-color: #fcfcfc;
  &__Left
  {
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
    background-color: lighten(#dbdfe1, 7%);
    transition: all 0.3s;
    @media (min-width: 576px)
    {
      width: 200px;
    }
    &--hidden
    {
      left: -100%;
      @media (min-width: 576px)
      {
        left: -200px;
      }
    }
    &__Header
    {
      display: block;
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      background-color: #dbdfe1;
      color: #35495e;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .Icon
      {
        float: right;
        margin-top: 15px;
        cursor: pointer;
        margin-left: 15px;
        .icon, .icon:before, .icon:after
        {
          color: #35495e;
        }
      }
    }
    &__Body
    {
      display: block;
      position: absolute;
      top: 50px;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: auto;
      padding: 8px 10px 14px 0;
    }
  }
  &__Right
  {
    background-color: #fcfcfc;
    padding-left: 100%;
    transition: all 0.3s;
    @media (min-width: 576px)
    {
      padding-left: 200px;
    }
    &--hidden
    {
      padding-left: 0;
    }
    &__Header
    {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      letter-spacing: 1px;
      background-color: lighten(#dbdfe1, 7%);
      color: #35495e;
      text-align: right;
      font-size: 0.9em;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .Icon
      {
        float: left;
        margin-top: 15px;
        cursor: pointer;
        margin-right: 15px;
        .icon, .icon:before, .icon:after
        {
          color: #35495e;
        }
      }
    }
    &__Body
    {
      min-height: 400px;
      &__Image
      {
        margin: 20px;
        width: auto;
        max-width: 80%;
      }
      &__File
      {
        position: relative;
        display: block;
        width: 100%;
        background-color: transparent;
        margin: 0;
        padding: 30px 15px;
        padding-top: 10px;
        overflow: auto;
        code
        {
          padding: 0;
          margin: 0;
          display: block;
          background-color: transparent;
          border: none;
        }
      }
      &__Wait
      {
        padding: 20px;
        color: #35495e;
        font-weight: 400;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
