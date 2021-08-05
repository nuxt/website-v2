<template>
  <div v-if="lastRelease">
    <NuxtLink
      v-if="$route.path.startsWith(localePath('/docs'))"
      :to="localePath('/releases')"
      class="flex items-center group nuxt-text-highlight-hover mt-4"
    >
      <IconNuxt class="w-5 h-5 mr-2" />
      <span>Version: {{ lastRelease }}</span>
    </NuxtLink>
  </div>
</template>

<script>
import {
  defineComponent,
  useContext,
  useFetch,
  ref,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const { $docus } = useContext();
    const lastRelease = ref(null);

    useFetch(async () => {
      const { body } = await $docus.data("github-releases");

      if (body?.releases && body.releases.length > 0)
        lastRelease.value = body.releases[0].name;
    });

    return { lastRelease };
  },
});
</script>
