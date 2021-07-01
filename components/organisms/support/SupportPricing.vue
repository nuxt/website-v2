<template>
  <div class="mt-8 mb-8 b-16 sm:mt-12 sm:pb-20 lg:pb-28">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div class="flex-1 px-6 py-8 lg:p-12 light:bg-white dark:bg-secondary-darkest">
          <h3 class="text-2xl font-extrabold text-secondary-darker dark:text-white sm:text-3xl">
            <Markdown use="title" unwrap="p" />
          </h3>

          <p class="mt-6 text-base text-gray-500 dark:text-white">
            <Markdown use="description" unwrap="p" />
          </p>
        </div>

        <div
          class="
            py-8
            px-6
            text-center
            bg-gray-100
            dark:bg-secondary-darker
            lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12
          "
        >
          <a
            href="mailto:support@nuxtjs.org"
            size="md"
            class="inline-flex font-medium rounded-md bg-primary text-gray-800 hover:bg-green-300 focus:bg-green-300 px-4 py-2.5 text-sm 2xl:text-md "
            aria-label="test"
          >Contact us</a>
        </div>
      </div>
    </div>
  </div>
</template>
