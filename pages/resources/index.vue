<template>
  <div>
    <nui-hero>
      <nui-container>
        <h1>
          Resources
        </h1>
      </nui-container>
    </nui-hero>
    <nui-container class="py-8">
      <ul>
        <li>
          <nuxt-link :to="localePath('resources-modules')">Modules</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('resources-templates')">Templates</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('resources-examples')">Examples</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('resources-design')">Design</nuxt-link>
        </li>
      </ul>
    </nui-container>
  </div>
</template>
