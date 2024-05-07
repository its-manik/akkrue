<template>
  <main>
    <LayoutHeroLarge>
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h1 class="mt-4 text-h1 leading-none font-bold font-display text-secondary-700">
            Partnerships & Collaborations
          </h1>
          <p class="text-lg md:text-lg mt-8 text-secondary-500">
            In the intricate ecosystem of decentralized finance, collaboration and
            strategic partnerships are the linchpins that drive innovation, expansion, and
            optimized service delivery. At Akkrue, we are privileged to be in alliance
            with a cadre of esteemed partners, each bringing a unique blend of expertise,
            technology, and innovation to our platform. These collaborations are not just
            partnerships but synergies that enhance our capacity to deliver bespoke,
            cutting-edge solutions to our esteemed institutional investors.
          </p>
        </div>
      </div>
    </LayoutHeroLarge>

    <section class="bg-white">
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Our Partners
          </h2>
          <p class="text-lg mt-8 text-secondary-500">
            Our partners, showcased below, are testament to our commitment to diversity,
            innovation, and excellence. Each logo represents a unique contribution, a
            distinct value, and a shared commitment to redefining the landscape of
            decentralized finance. Together, we are weaving a tapestry of technology,
            service, and innovation, meticulously crafted to empower our clients to
            navigate the complex world of DeFi with confidence, agility, and strategic
            advantage.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 justify-center max-w-screen-lg mx-auto">
          <a
            v-for="(partner, index) in partners"
            :key="index"
            class="bg-gray-50 border border-gray-50 aspect-video flex justify-center items-center p-4 hover:bg-gray-50/50 transition-colors"
            :href="partner.link"
            target="_blank"
          >
            <img
              :src="partner.logo"
              :alt="partner.title"
              class="w-full h-full max-w-[60%] max-h-[60%]"
            />
          </a>
        </div>

        <div class="text-center max-w-screen-lg mx-auto mt-12 prose">
          <p class="text-lg">
            Every partnership is a step towards a future where technology, innovation, and
            strategy converge to offer institutional investors a world of unparalleled
            financial empowerment and security.
          </p>
          <p class="text-lg">
            Join us in this journey of collaboration, innovation, and strategic
            advancement.
          </p>
          <p class="mt-12 mb-12 text-center"><div @click="togglePartnerModal()" class="btn btn-primary">Send Partnership Request</div></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>

useHead({
  title: "Partnerships",
  meta: [
    {
      name: "description",
      content:
        "Our partners are testament to our commitment to diversity, innovation, and excellence.",
    },
  ],
});

const partners = [
  {
    title: "Helion Capital",
    logo: "/partners/helion-capital.svg",
    link: "https://www.helion-capital.com",
  },
  {
    title: "DHF Capital",
    logo: "/partners/dhf-capital.svg",
    link: "https://dhf-capital.com",
  },
  // {
  //   title: "Sheesha Finance",
  //   logo: "/partners/sheesha-finance.svg",
  //   link: "https://sheeshafinance.io",
  // },
];

const modalPartnerOpen = usePartnerModalOpen();

function togglePartnerModal() {
  modalPartnerOpen.value = !modalPartnerOpen.value;
}

function closeModal() {
  selectedTeam.value = {};
  modalOpen.value = false;
  modalDemoOpen.value = false;
  modalPartnerOpen.value = false;
}
</script>

<style></style>
