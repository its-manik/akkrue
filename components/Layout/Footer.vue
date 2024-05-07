<template>
  <footer
    class="bg-gradient-to-b from-secondary-900 to-secondary-800 text-white relative overflow-hidden"
  >
    <div class="container pt-16 pb-4 relative z-1">
      <div class="flex flex-col lg:flex-row justify-between gap-24">
        <div>
          <div class="logo lg:w-[300px] mb-12 text-white">
            <NuxtLink to="/"><SvgLogo class="w-[156px]" :colored="false" /></NuxtLink>
          </div>
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
        </div>

        <div>
          <!-- <h3 class="mt-2 text-base uppercase text-white">Folgen Sie uns:</h3> -->
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
      </div>

      <div class="mt-8 pt-4 pb-2 border-t border-white/10">
        <p class="text-xs text-center py-4">
          Copyright © {{ new Date().getFullYear() }} Akkrue
        </p>
      </div>
    </div>
  </footer>
</template>
