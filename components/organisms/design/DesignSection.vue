<template>
  <li class="flex flex-col light:text-secondary-dark dark:text-white py-8">
    <h2 class="font-semibold text-xl">
      <Markdown use="title" unwrap="p" />
    </h2>
    <hr class="mt-2 mb-4" />
    <Markdown use="description" class="text-lg" />
    <Markdown use="sectionComponent" />
  </li>
</template>
