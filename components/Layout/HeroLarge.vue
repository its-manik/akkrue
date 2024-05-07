<template>
  <header
    class="hero pt-28 pb-20 md:py-40 lg:py-32 xl:pt-36 xl:pb-28 relative overflow-clip"
  >
    <!-- <SvgBgPattern class="text-white min-h-[48rem]" /> -->
    <!-- <img
      class="absolute w-[800px] h-auto top-0 right-0 translate-x-1/4"
      :src="bgImage"
      alt="Akkrue"
    /> -->

    <div class="container relative z-1 max-w-screen-2xl">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  bgImage: {
    type: String,
    default: "/bg-pattern.jpg",
  },
});
</script>
