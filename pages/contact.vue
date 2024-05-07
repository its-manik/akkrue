<template>
  <main>
    <LayoutHeroLarge>
      <div class="container relative z-1 max-w-screen-lg text-center">
        <h1
          class="mt-4 text-h1 leading-none font-bold font-display text-secondary-700 text-center"
        >
          Get in Touch with Us
        </h1>

        <p class="mt-16">
          At Akkrue, we believe in fostering a strong line of communication with our
          valued users. Whether you have questions, feedback, or require personalized
          assistance, we're here to help. Your insights and experiences drive our
          continual innovation, and we're always eager to hear from you. Use the form
          below to reach out, and a member of our team will respond promptly. Together,
          let’s explore the endless possibilities in the realm of decentralized finance.
        </p>

        <div class="bg-white text-left mt-16 shadow-2xl rounded-xl px-20 py-12">
          <div class="grid md:grid-cols-2 gap-8 md:gap-36">
            <div class="prose mt-4">
              <div class="logo lg:w-[300px] mb-12">
                <NuxtLink to="/"><SvgLogo class="w-[156px]" /></NuxtLink>
              </div>
              <p class="mt-4"><strong>Akkrue Capital - FZCO</strong></p>
              <div class="flex gap-3 mt-4">
                <Icon name="ic:baseline-location-on" size="1.125em" class="mt-1" />
                <span>Burj Daman Tower, Dubai, UAE<br />Office 1102C</span>
              </div>
              <a href="tel:+97145480355" class="flex gap-3 items-center mt-4">
                <Icon name="ic:baseline-phone" size="1.125em" />
                <span>+971 (0)4 548 0355</span>
              </a>
              <a href="mailto:info@akkrue.com" class="flex gap-3 items-center mt-4">
                <Icon name="ic:baseline-email" size="1.125em" />
                <span>info@akkrue.com</span>
              </a>

              <div class="md:mt-12 flex gap-8">
                <NuxtLink
                  to="https://www.linkedin.com/company/akkrue-finance/about/"
                  target="_blank"
                >
                  <Icon name="akar-icons:linkedin-box-fill" size="2rem" />
                </NuxtLink>
                <NuxtLink to="https://twitter.com/Akkruefinance" target="_blank">
                  <Icon name="ri:twitter-x-fill" size="2rem" />
                </NuxtLink>
              </div>
            </div>
            <FormSupport />
          </div>
        </div>
      </div>
    </LayoutHeroLarge>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content:
        "Whether you have questions, feedback, or require personalized assistance, we're here to help.",
    },
  ],
});
</script>

<style></style>
