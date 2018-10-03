<template>
  <section class="nWelcome">
    <div class="container">
      <div class="row">
        <div class="nWelcome_Content">
          <h1 class="nWelcome_Content_Title">
            The Vue.js Developpers Framework
          </h1>
          <h2 class="nWelcome_Content_Subtitle">
            Your developpment will become enjoyable!
          </h2>
          <p class="nWelcome_Content_Description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iusto temporibus possimus, est eius natus eos voluptate fuga quae nam, deserunt praesentium, earum ratione laudantium explicabo ea! Ea, suscipit similique.
          </p>
        </div>
        <figure class="nWelcome_Figure">
          <iframe src="https://www.youtube.com/embed/RIXOzJWFfc8" frameborder="0" allowfullscreen></iframe>
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* ---- Breakpoints ----*/
$--xs:     576px !default;
$--sm:     768px !default;
$--md:     992px !default;
$--lg:     1200px !default;
$--xl:     1920px !default;

$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`
$font-size-xl:                ($font-size-base * 1.5);
$font-size-lg:                ($font-size-base * 1.25);
$font-size-sm:                ($font-size-base * .875);
$font-size-xs:                ($font-size-base * .75);

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 $font-size-xs;
  margin: 0 auto;
  @media (min-width: $--xs) {
    padding: 0 $font-size-sm;
    max-width: $--xs;
  }
  @media (min-width: $--sm) {
    padding: 0 $font-size-base;
    max-width: $--sm;
  }
  @media (min-width: $--md) {
    padding: 0 $font-size-lg;
    max-width: $--md;
  }
  @media (min-width: $--lg) {
    padding: 0 $font-size-xl;
    max-width: $--lg;
  }
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
}

.nWelcome {
  margin-top: 80px;
  padding: 5rem 0;
  &_Content {
    width: 50%;
  }
  &_Figure {
    width: 50%;
    margin: 0;
  }
}
</style>
