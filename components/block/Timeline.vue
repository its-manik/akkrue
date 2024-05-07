<template>
  <div class="timeline mt-24 relative">
    <div class="line"></div>
    <div class="grid md:grid-cols-3 gap-16 px-12">
      <div
        v-for="(item, index) in timeline"
        :key="'timeline-' + index"
        class="col-span-1"
      >
        <div
          class="relative flex flex-col items-start justify-center"
          :class="{ 'opacity-50': !item.active }"
        >
          <div
            class="circle inline-block w-4 h-4 bg-primary rounded-full -translate-y-1/2"
          >
            <div v-if="item.current" class="current" />
          </div>
          <div class="date mt-4">{{ item.date }}</div>
          <h4 class="font-display text-xl text-secondary-700">{{ item.title }}</h4>
          <p class="md:text-sm mt-4">{{ item.copy }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const timeline = [
  {
    date: "August 2023",
    title: "Launch of Akkrue Technology Stack",
    active: true,
    copy:
      "Akkrue unveiled its state-of-the-art technology stack, marking a pivotal moment in the democratization of access to advanced investment strategies. The technology stack was designed to foster innovation and growth in the digital asset space, ensuring security and transparency with on-chain, non-custodial solutions.",
  },
  {
    date: "August 2023",
    title: "Beta Release of Akkrue OBEX",
    active: true,
    current: true,
    copy:
      "The Order Balancer/Executioner (OBEX) was released in beta, a significant enhancement to the Akkrue platform. OBEX is designed to automatically and instantly find the lowest cost path through the decentralized finance landscape, marking a milestone in efficiency and strategic asset management.",
  },
  {
    date: "Q1 2024",
    title: "Cross-Chain & Bridgeless Integration",
    copy:
      "Akkrue achieved a significant technological advancement with the integration of cross-chain and bridgeless order routing. This development underscored Akkrue’s commitment to innovation, offering institutional investors enhanced flexibility and access to a broader decentralized finance ecosystem.",
  },
];
</script>

<style lang="postcss" scroped>
.line {
  @apply absolute w-full h-1 bg-secondary rounded;

  &::after {
    @apply absolute w-1/3 h-1 bg-primary rounded;
    width: calc(66% + 2rem);
    content: "";
    display: block;
  }
}
.circle {
  @apply relative;

  &::before {
    @apply bg-primary opacity-50 absolute inset-0 rounded-full scale-150;
    content: "";
    display: block;
  }

  &::after {
    @apply bg-primary opacity-20 absolute inset-0 rounded-full scale-200;
    content: "";
    display: block;
  }

  .current {
    @apply absolute inset-0 rounded-full w-4 h-4 border border-primary rounded-full z-2;
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  25% {
    opacity: 0.35;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
}
</style>
