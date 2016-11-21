<template>
  <nav class="Affix">
    <h3 class="Affix__Title">Prologue</h3>
    <ul class="Affix__List">
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide">
          What's Nuxt.js ?
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/contribution-guide">
          Contribution Guide
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/release-notes">
          Release Notes
        </router-link>
      </li>
    </ul>
    <h3 class="Affix__Title">Getting started</h3>
    <ul class="Affix__List">
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/installation">
          Installation
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/directory-structure">
          Directory Structure
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/configuration">
          Configuration
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.Affix
{
  width: 100%;
  padding-bottom: 30px;
  height: 100%;
  overflow-y: auto;
  float: left;
  font-size: 1.05em;
  background-color: #fff;
  @media (min-width: 992px)
  {
    width: 240px;
    border-right: 1px solid #dbdfe1;
  }
  &__Title
  {
    margin: 0;
    margin-top: 30px;
    text-transform: uppercase;
    color: #9aabb1;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 1px;
  }
  &__List
  {
    margin-top: 15px;
    &__Item
    {
      padding: 7px;
      &__Link
      {
        text-decoration: none;
        color: #505153;
        &:hover
        {
          color: #2e2f30;
        }
      }
      .router-link-active
      {
        color: #00BCD4;
      }
    }
  }
}
</style>
