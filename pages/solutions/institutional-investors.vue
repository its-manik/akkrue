<script setup lang="ts">
useHead({
  title: "Solutions for Institutional Investors",
  meta: [
    {
      name: "description",
      content:
        "Transform Your Portfolio Management with Akkrue's Institutional-Grade, On-Chain Digital Asset Solutions.",
    },
  ],
});

const modalDemoOpen = useDemoModalOpen();
function toggleDemoModal() {
  modalDemoOpen.value = !modalDemoOpen.value;
}

const solutions = ref([
  {
    title: "Innovative and Scalable Technology:",
    icon: "tdesign:upscale",
    color: "primary",
    copy:
      "Employing cutting-edge technology, Akkrue provides advanced solutions in the dynamic realm of digital asset management, adapting to evolving financial trends to ensure a competitive edge. The platform is designed to be scalable, accommodating the growing needs of institutional investors, ensuring seamless adaptation and performance optimization as market dynamics shift and portfolios expand.",
  },
  {
    title: "Customizable and Automated Solutions:",
    icon: "carbon:ibm-cloud-pak-manta-automated-data-lineage",
    color: "secondary",
    copy:
      "Akkrue offers tailored solutions for diverse asset portfolios, enabling institutional investors to customize features to align with their investment strategies. This personalized approach is coupled with integrated automation to enhance efficiency and accuracy in asset management, allowing for quick execution of complex tasks, reducing manual effort and errors.",
  },
  {
    title: "Sustainable Innovation:",
    icon: "carbon:development",
    color: "gray",
    copy:
      "With a commitment to continuous improvement, Akkrue offers a dynamic environment where innovations are routinely integrated. Institutional investors benefit from enhanced features, navigating the evolving digital asset landscape effectively and leveraging a platform where sustainability and innovation are at the forefront.",
  },
  {
    title: "Advanced Security Protocols:",
    icon: "carbon:gateway-security",
    color: "primary",
    copy:
      "Security is paramount at Akkrue. Advanced security protocols are integrated to safeguard the assets and data of institutional investors. Real-time monitoring, alongside state-of-the-art encryption, assures investors of the utmost security in every transaction and operation, fostering a safe and reliable investment environment.",
  },
]);
// const solutions = ref([
//   {
//     title: "Innovative Technology:",
//     icon: "mdi:school-outline",
//     color: "primary",
//     copy:
//       "Akkrue employs cutting-edge technology to offer advanced solutions in the dynamic world of digital asset management. Akkrue adapts to evolving financial trends, ensuring users always have a competitive edge.",
//   },
//   {
//     title: "Customizable Solutions:",
//     icon: "mdi:school-outline",
//     color: "secondary",
//     copy:
//       "Akkrue offers tailored solutions for diverse asset portfolios, allowing institutional investors to customize features to fit their investment strategies. This personalized approach enhances the effectiveness of asset management.",
//   },
//   {
//     title: "Automated Processes:",
//     icon: "mdi:school-outline",
//     color: "gray",
//     copy:
//       "Automation is integrated into Akkrue to enhance efficiency and accuracy in asset management for institutional investors. Complex tasks can be executed quickly, reducing manual effort and errors.",
//   },
//   {
//     title: "Sustainable Innovation:",
//     icon: "mdi:school-outline",
//     color: "primary",
//     copy:
//       "Akkrue is committed to continuous improvement, offering a dynamic environment where innovations are routinely integrated. Institutional investors benefit from enhanced features to navigate the evolving digital asset landscape effectively.",
//   },
//   {
//     title: "Advanced Security Protocols:",
//     icon: "mdi:school-outline",
//     color: "secondary",
//     copy:
//       "Akkrue integrates advanced security protocols to safeguard the assets and data of institutional investors. With real-time monitoring and state-of-the-art encryption, investors are assured of the utmost security in every transaction and operation.",
//   },
//   {
//     title: "Scalable Solutions:",
//     icon: "mdi:school-outline",
//     color: "gray",
//     copy:
//       "Akkrue’s platform is designed to be scalable, accommodating the growing needs of institutional investors. As portfolios expand and market dynamics shift, the platform’s flexible architecture ensures seamless adaptation and performance optimization.",
//   },
// ]);

const keypoints = ref([
  {
    title: "No-Code, Low-Code Structured Products Development",
    icon: "ri:drag-drop-fill",
    color: "primary",
    copy:
      "Akkrue’s technology stack enables the easy development, deployment, and operation of structured and managed products without the need for extensive coding knowledge. It drastically reduces the barrier of entry for strategists and investors.",
  },
  {
    title: "Automated Vaults",
    icon: "carbon:workflow-automation",
    color: "secondary",
    copy:
      "Institutional investors can benefit from automated vaults for easy and fast deployment, ensuring efficient management of digital assets. The vaults are audited and secure, integrating any protocol using the SDK.",
  },
  {
    title: "Intuitive APIs and SDKs",
    icon: "carbon:api",
    color: "gray",
    copy:
      "The platform provides intuitive and easy-to-use APIs and SDKs, enabling the rapid development of structured products and facilitating seamless frontend and mobile dApp development.",
  },
  {
    title: "Order Balancer/Executioner (OBEX)",
    icon: "carbon:virtual-private-cloud-alt",
    color: "primary",
    copy:
      "OBEX ensures minimal slippage, especially for larger order sizes, and uses AI/ML for determining the most profitable route for any swap or protocol, ready for cross-chain and bridgeless order routing.",
  },
]);
</script>

<template>
  <main>
    <LayoutHeroLarge>
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h1 class="mt-4 text-h1 leading-none font-bold font-display text-secondary-700">
            Revolutionizing Institutional Investment
            <span class="text-primary">with Automated Digital Asset Management</span>
          </h1>
          <p class="text-2xl md:text-3xl mt-8 text-secondary-500">
            Transform Your Portfolio Management with Akkrue's Institutional-Grade,
            On-Chain Digital Asset Solutions
          </p>
          <p class="mt-8 md:mt-16">
            <span
              @click="toggleDemoModal()"
              class="btn btn-large btn-primary cursor-pointer inline-block"
              >Request a Demo</span
            >
          </p>
          <div class="mt-12 md:mt-24 text-center relative">
            <img
              class="mx-auto max-w-full"
              src="/content/akkrue-explore-vaults-laptop.png"
              alt="Akkrue"
            />
          </div>
        </div>
      </div>
    </LayoutHeroLarge>

    <section class="bg-white -mt-64 pt-48">
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="md:text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Explore Our Proven Solutions<br /><span class="font-normal"
              >Redefining Institutional Investment</span
            >
          </h2>
          <p class="text-lg mt-8 text-secondary-500">
            In a rapidly evolving financial landscape, institutional investors face a
            myriad of challenges that can impede their ability to effectively manage
            assets and achieve desired outcomes. Akkrue's cutting-edge platform is
            tailored to address these hurdles head-on, offering a sophisticated yet
            user-friendly solution for modern asset management.
          </p>
        </div>
      </div>

      <div class="container mt-20">
        <div class="md:grid md:grid-cols-5 gap-24">
          <div class="md:col-span-2 prose">
            <h4>Navigating Financial Complexities:</h4>
            <p>
              In an environment where financial landscapes are constantly shifting,
              institutional investors are confronted with challenges that can limit their
              asset management effectiveness. Akkrue presents an advanced platform,
              meticulously crafted to navigate these complexities. It’s a blend of
              innovation and simplicity, designed to transform hurdles into pathways for
              enhanced asset management and optimal outcomes.
            </p>
            <h4>Technological and Process Challenges:</h4>
            <p>
              The use of Outdated Technology is a significant barrier. Legacy systems
              limit adaptability and responsiveness, essential for optimizing asset
              performance in real-time.
            </p>
            <p>
              Inflexible Solutions exacerbate the issue. One-size-fits-all approaches are
              inadequate in a diverse and complex landscape, leading to suboptimal
              performance and unrealized potential. The reliance on Manual Processes
              introduces errors and delays, hindering swift decision-making critical in a
              market where timing impacts investment outcomes.
            </p>
            <p>
              Limited Analytics leave investors in the dark, with insufficient insights to
              inform decisions, leading to missed opportunities and unmitigated risks.
              Basic Security Protocols expose investors to potential breaches and data
              theft, undermining confidence and jeopardizing the integrity of the
              investment process.
            </p>
            <h4>Transforming Challenges into Opportunities:</h4>
            <p>
              To effectively navigate modern finance, overcoming these challenges is
              essential. Institutional investors require innovative, flexible, automated,
              and secure platforms to transform these obstacles into opportunities for
              optimized asset performance and growth.
            </p>
          </div>
          <div class="col-span-3">
            <div class="grid md:grid-cols-2 gap-8">
              <div
                v-for="(feature, findex) in solutions"
                :key="findex"
                class="p-8 shadow-2xl rounded-xl"
                :class="'bg-' + feature.color + '-50'"
              >
                <div class="hexagon-bg relative" :class="'text-' + feature.color">
                  <Icon
                    :name="feature.icon"
                    size="2rem"
                    class="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <h3
                  class="mt-8 text-h4 leading-none font-display min-h-12 text-secondary-500"
                >
                  {{ feature.title }}
                </h3>
                <p class="">{{ feature.copy }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="md:text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Elevating Investment Outcomes
          </h2>
          <p class="text-lg mt-8 text-secondary-500">
            Akkrue’s platform, a blend of sophistication and simplicity, is tailored for
            institutional investors navigating decentralized finance. It offers enhanced
            decision-making tools and analytics, ensuring portfolio optimization and
            increased returns. Each feature is designed for ease and mastery in this
            complex landscape, boosting confidence and growth.
          </p>
        </div>
      </div>

      <div class="container mt-8 md:mt-16">
        <div class="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div class="prose">
            <p>
              Akkrue offers a suite of features tailored for institutional investors
              navigating the decentralized finance landscape. The platform facilitates
              easy development and deployment of structured products with no-code,
              low-code solutions. Automated, audited vaults ensure efficient and secure
              asset management.
            </p>
            <p>
              The self-custodial, permissionless, and composable nature of the platform
              provides investors with control and flexibility. Intuitive APIs and SDKs
              enable rapid development and integration of structured products and dApps.
              OBEX optimizes order execution, minimizing slippage and maximizing
              profitability through AI/ML-based routing.
            </p>
            <p>
              Akkrue stands out for its institutional-grade, on-chain, non-custodial, and
              automated digital asset management, ensuring security and efficiency for
              institutional investors in the complex world of decentralized finance.
            </p>
          </div>
          <div class="text-center">
            <img
              src="/content/akkrue-vault-dashboard-laptop.png"
              alt="Elevating Investment Outcomes"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
          <div v-for="(feature, index) in keypoints" :key="'keypoints-' + index">
            <div class="hexagon-bg relative" :class="'text-' + feature.color">
              <Icon
                :name="feature.icon"
                size="2rem"
                class="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h3
              class="mt-8 text-h4 leading-none font-display md:min-h-12 text-secondary-500"
            >
              {{ feature.title }}
            </h3>
            <p class="mt-4">{{ feature.copy }}</p>
          </div>
        </div>
      </div>

      <!-- <div class="container relative z-1 max-w-screen-2xl mt-20">
        <div class="max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Why Choose Akkrue?
          </h2>
          <p class="text-lg mt-8 text-secondary-500">
            Aufzählung der Vorteile von Akkrue, wie z.B. maßgeschneiderte
            Anlagestrategien, Bewegung von Vermögenswerten über Protokolle und Blockchains
            hinweg, Integration von Echtzeitdaten und AI/ML-Technologien
          </p>
        </div>
      </div> -->
    </section>

    <!-- <section class="bg-white">
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Success Stories
          </h2>
          <p class="text-lg mt-12 text-secondary-500">
            TBD: Kurze Fallstudien oder Testimonials von bestehenden institutionellen
            Investoren, die von den Lösungen von Akkrue profitiert haben
          </p>
        </div>
      </div>
    </section> -->

    <section class="bg-white">
      <div class="container relative z-1 max-w-screen-2xl pb-8">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Step into the Future of Finance with Akkrue
          </h2>
          <p class="text-lg mt-12 text-secondary-500">
            Step into the realm of Akkrue, where innovation and efficiency converge,
            offering institutional investors a tailored experience in decentralized
            finance.
          </p>
        </div>

        <!-- <div class="grid md:grid-cols-2 gap-24">
          <div class="prose">
            <h3>How the Demo Works:</h3>
            <p>
              An insightful session, facilitated by a seasoned expert, meticulously
              unveils the sophisticated facets of Akkrue. Attendees are granted an
              immersive experience, engaging directly with the platform’s innovative
              features in real-time. The adaptability and precision embedded within Akkrue
              become palpable, offering a tangible sense of its capabilities.
            </p>
            <p>
              Each inquiry is addressed with comprehensive clarity, underscoring the
              distinct strategic edge that Akkrue confers upon its esteemed users.
            </p>
          </div>

          <div class="prose">
            <h3>What to Expect:</h3>
            <p>
              The demo unveils a sophisticated user interface, a testament to Akkrue’s
              commitment to combining innovation with user-centric design. Institutional
              investors will navigate through advanced security measures, adaptable
              solutions, and automated processes.
            </p>
            <p>
              Every interaction within the demo is an opportunity to visualize the
              transformation Akkrue brings to decentralized finance.
            </p>
            <p>
              Elegance, technology, and expertise converge in Akkrue, offering an asset
              management experience.
            </p>
          </div>
        </div> -->

        <div class="text-center mt-12">
          <span class="btn btn-primary" @click="toggleDemoModal()"
            >Schedule Your Personalized Demo Now!</span
          >
        </div>
      </div>
    </section>
  </main>
</template>
