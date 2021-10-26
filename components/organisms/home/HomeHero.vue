<template>
  <div class="overflow-hidden relative bg-sky-black text-white -mt-14 pt-14 md:-mt-18 md:pt-18">
    <HeroParallax />
    <!-- Stars -->
    <div class="absolute left-0 w-full h-full overflow-hidden -top-24 z-0">
      <Star v-for="star in 80" :key="star" />
    </div>
    <div class="flex flex-wrap justify-center py-0 section">
      <section class="flex flex-col justify-start w-full px-4 pt-36 pb-48 md:pt-44 lg:pb-56 lg:pt-36 text-center z-20">
        <h1 class="font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 mb-6">
          <Markdown use="title" unwrap="p" />
        </h1>
        <h2
          class="
            font-normal
            text-body-base
            xs:text-body-lg
            md:text-body-xl
            2xl:text-body-2xl
            mb-8
            px-8
            sm:px-0
            text-cloud-lighter
          "
        >
          <Markdown use="description" unwrap="p" />
        </h2>
        <div
          class="
            flex flex-col
            sm:flex-row
            flex-wrap
            items-center
            justify-center
            space-y-3
            sm:space-y-0 sm:space-x-3
            xl:space-x-4
          "
        >
          <Markdown use="primary-button" unwrap="p" />
          <Markdown use="secondary-button" unwrap="p" />
        </div>
      </section>
    </div>
  </div>
</template>
