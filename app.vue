<template>
  <div id="top" class="nuxt-app max-w-full overflow-x-clip text-gray-400">
    <!-- <SeoKit /> -->
    <LayoutNavbar />

    <NuxtPage />

    <!-- <section id="contact" class="bg-secondary-700 text-white">
      <div class="container relative max-w-screen-lg">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display">Contact us</h2>
        </div>
        <div class="mt-12 lg:mt-26 grid lg:grid-cols-2 gap-24 lg:gap-12">
          <div>
            <p class="text-h4">E-Mail</p>
            <p class="mt-2">info@akkrue.com</p>
            <p class="text-h4 mt-8">Address</p>
            <p class="mt-2">Akkrue<br />Burj Daman Tower, Dubai, UAE<br />Office 1102C</p>

            <p class="text-h4 mt-8">Social Media</p>

            <div class="flex text-white mt-4">
              <a
                href="https://www.linkedin.com/company/akkrue-finance/about/"
                target="_blank"
                class="mr-4"
              >
                <SvgLinkedin class="w-8" />
              </a>
              <a href="https://twitter.com/Akkruefinance" target="_blank" class="mr-4">
                <SvgTwitter class="w-8" />
              </a>
            </div>
          </div>
          <div>
            <FormContact />
          </div>
        </div>
      </div>
    </section> -->
    <LayoutFooter />
    <div class="bg-primary-50"></div>
    <div class="bg-secondary-50 text-secondary"></div>
    <div class="bg-gray-50 text-gray"></div>

    <dialog
      :open="modalDemoOpen"
      @click="closeModal()"
      class="flex z-50 fixed inset-0 items-center justify-center min-w-full min-h-full bg-black/90 filter backdrop-blur-lg"
    >
      <article
        class="demo-modal max-h-90vh max-w-3xl overflow-auto bg-white p-4 md:p-16 prose"
        @click.stop=""
      >
        <header>
          <span
            aria-label="Close"
            class="close cursor-pointer block absolute w-6 h-6 top-4 right-4 text-white hover:text-primary"
            @click="closeModal()"
          ></span>
          <h3 class="heading-3 text-h3 !my-0">Request a demo</h3>
          <!-- <p class="position italic !mt-4">{{ selectedTeam.position }}</p> -->
        </header>

        <div class="modal-content mt-8">
          <FormDemo />
        </div>
      </article>
    </dialog>

    <dialog
      :open="modalPartnerOpen"
      @click="closeModal()"
      class="flex z-50 fixed inset-0 items-center justify-center min-w-full min-h-full bg-black/90 filter backdrop-blur-lg"
    >
      <article
        class="demo-modal max-h-90vh max-w-3xl overflow-auto bg-white p-16 prose"
        @click.stop=""
      >
        <header>
          <span
            aria-label="Close"
            class="close cursor-pointer block absolute w-6 h-6 top-4 right-4 text-white hover:text-primary"
            @click="closeModal()"
          ></span>
          <h3 class="heading-3 text-h3 !my-0">Partnership request</h3>
          <!-- <p class="position italic !mt-4">{{ selectedTeam.position }}</p> -->
        </header>

        <div class="modal-content mt-8">
          <FormPartner />
        </div>
      </article>
    </dialog>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const layout = route.meta.layout || config.public.defaultLayout || "default";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Akkrue` : "Akkrue - Seamless Asset Management";
  },
  link: [
    { rel: "apple-touch-icon", size: "180x180", href: "/favicon/apple-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      size: "192x192",
      href: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      size: "512x512",
      href: "/favicon/android-chrome-512x512.png",
    },
    { rel: "icon", type: "image/png", size: "32x32", href: "/favicon/favicon-32x32.png" },
    { rel: "icon", type: "image/png", size: "16x16", href: "/favicon/favicon-16x16.png" },
    { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
    { rel: "manifest", href: "/favicon/site.webmanifest" },
    { name: "msapplication-TileImage", content: "/favicon/mstile-150x150.png" },
  ],
  // as a string,
  // where `%s` is replaced with the title
  // titleTemplate: '%s - ' + config.public.siteTitle
  // ... or as a function
  // titleTemplate: (productCategory) => {
  //   return productCategory
  //     ? `${productCategory} - Site Title`
  //     : 'Site Title'
  // }
});

const features = [
  {
    title: "Non-Custodial & Audited",
    copy:
      "Experience peace of mind with our fully audited and secure platform that prioritizes your asset safety.",
    icon: "mdi:school-outline",
    color: "primary",
  },
  {
    title: "Drag & Drop Interface",
    copy:
      "Effortlessly create vaults and derivative assets using our intuitive no-code/low-code interface.",
    icon: "ri:drag-drop-fill",
    color: "secondary",
  },
  {
    title: "Powerful SDK & API",
    copy:
      "Seamlessly implement automated investment strategies and efficiently move assets with our robust API.",
    icon: "carbon:api",
    color: "gray",
  },
];

const team = {
  management: [
    {
      name: "Oliver von Wolff",
      position: "Founder & CEO",
      image: "oliver",
      description: [
        "Oliver von Wolff is a Venture Capitalist and Venture Builder with experience in architecture and establishing regulated and unregulated investment products. Oliver is Co-founder and CEO of Helion Ventures a Dubai DIFC regulated investment company for early-stage tokens and fintech-blockchain companies.",
        "Prior, Co-Founder & Managing Director of Crypto Oasis, Managing Director MENA for CV Labs and CVVC Switzerland, an early-stage venture capital investor and blockchain ecosystem builder, headquartered in Dubai. Also, a Group CFO & Equity Partner of a global crypto asset management and blockchain-focused venture capital group and Managing Director of a joint venture with a stock listed equity company on the Xetra Frankfurt.",
        "Oliver has over 15 years of management experience, as CFO and Co-Founder responsible for different start-up’s and management buy outs. He has a proven track record in company transformations in different industries and is well connected in Dubai and the GCC region.",
        "Oliver holds an MBA in international management, degrees in economics and business and attended New York University to study international corporate finance.",
        "With an abundance of global experience, Oliver has a strong understanding of various markets and industries, particularly throughout Europe and Middle East.",
      ],
      linkedin: "https://www.linkedin.com/in/oliver-von-wolff-63146639/",
    },
    {
      name: "Amin El Gazzar",
      position: "Founder & Chief Innovation Officer",
      image: "amin",
      description: [
        "Amin is a serial entrepreneur and technologist. He has founded several startups in the United States and around the globe. He is fluent in English and German and has proven that he is always thinking outside the box. He holds several patents in technologies from databases to messaging.",
      ],
      linkedin: "https://www.linkedin.com/in/amin-el-gazzar-7299b2100/",
    },
    // {
    //   name: 'Thomas Wawra',
    //   position: 'Founder',
    //   image: 'tom',
    //   description: ['Thomas is a mechanical engineer based in Germany. He has over 25 years of experience in the data center field and consulting with the financial industry. He has been heavily involved in consulting and training with the IBM Data Center team and the German government for many years. He has also worked heavily with hyperledger blockchain architecture.'],
    //   linkedin: 'https://www.linkedin.com/in/thomas-wawra-a780425/'
    // },
    {
      name: "Deepak Gopalakrishnan",
      position: "Founder & Architect",
      image: "deepak",
      description: [],
      linkedin: "https://www.linkedin.com/in/deepak-krishnan-data-science/",
    },
  ],
  team: [
    {
      name: "Sebastian Galleitner",
      position: "Creative Director",
      image: "sebastian",
      description: [
        "Sebastian has over 20 years experience in designing and developing websites of each size. He worked at various companies, agencies and startups across functions like growth marketing, UX design, frontend development and project management. He’s passionate about using his breadth of knowledge and experience to develop beautiful and effective websites and applications.",
      ],
      linkedin: "https://www.linkedin.com/in/sebastian-galleitner-43780b8a/",
    },
    {
      name: "Andreas Segieth",
      position: "Business Development Manager",
      image: "andreas",
      description: [
        "Andreas Segieth has been a crypto trader and crypto investor since 2015, analyzing financial and crypto markets using technical analysis and researching new disruptive and undervalued technologies to identify current and potential trends, as well as developing appropriate value management strategies for specific cryptocurrencies which have proven to be effective over the years.",
      ],
      linkedin: "https://www.linkedin.com/in/andreas-segieth/",
    },
    {
      name: "Eshana Lutawan",
      position: "Marketing Manager",
      image: "eshana",
      description: [
        "Eshana Lutawan is a dynamic marketing professional who has honed her skills through diverse roles in multinational corporations, startups, and consultancy firms. With a keen eye for emerging market trends and consumer behavior, she has consistently demonstrated an ability to adapt and thrive in rapidly changing  -evolving digital landscape that has allowed her to consistently deliver groundbreaking marketing solutions.",
      ],
      linkedin: "https://www.linkedin.com/in/eshana-lutawan-abb272149/",
    },
  ],
  board: [
    {
      name: "Ali Jaffari",
      // position: 'Founder',
      image: "ali-jaffari",
      description: [
        "Ali is a seasoned finance professional with over a decade of experience spanning across capital markets, corporate finance, treasury and financial risk management. His career has taken him through a diverse range of financial institutions, private capital ventures and large corporates. Notably, Ali has been involved in large financing transactions, innovative shareholder return strategies, creation of tailored alternative finance solutions and oversight of a high-volume trading desk with annual execution activity exceeding $100 billion. Currently, Ali is the Chief Financial Officer at a leading asset management firm, DHF Capital S.A., and plays a vital role in shaping the financial direction and long-term growth strategy of the organization. Ali holds a degree from the University of Toronto and is a CFA Charterholder.",
      ],
      // linkedin: 'https://www.linkedin.com/in/ralph-musgrove-29b97/'
    },
    {
      name: "Bas Kooijman",
      // position: 'Founder',
      image: "bas-kooijman",
      description: [
        "Bas is a successful entrepreneur and professional trader with a core background in finance and technology. Having successfully founded and sold a technology firm in 2015, Bas has focused his efforts on creating tools and building wealth for institutional investors and as a result co-founded DHF Capital. Bas is a published author, an active member of the Society of Technical Analysis and is a Certified Financial Technician at IFTA.",
      ],
      // linkedin: 'https://www.linkedin.com/in/ralph-musgrove-29b97/'
    },
    {
      name: "Ralph Musgrove",
      position: "Founder",
      image: "ralph",
      description: [
        "Ralph Musgrove is a solutions-focused Senior Executive, Entrepreneur, Advisor, and Board Member with more than 25 years of success across the computer software, information services, and technology, private equity & venture capital industries. His broad areas of expertise include product management, strategic partnerships, startups, business development, cloud computing, venture funding, AI, and strategic planning.",
      ],
      linkedin: "https://www.linkedin.com/in/ralph-musgrove-29b97/",
    },
  ],
};

const partnerAdvantages = [
  "Access to a growing user base of institutional investors and UHNW individuals seeking advanced asset management solutions.",
  "Collaboration with a team of experienced professionals from the finance and technology sectors, committed to driving growth and innovation.",
  "Enhanced brand visibility and reputation through association with a trusted and reliable platform.",
  "Opportunities to co-develop new features, integrations, and solutions that cater to the evolving needs of the market.",
];

const modalOpen = useModalOpen();
const modalDemoOpen = useDemoModalOpen();
const modalPartnerOpen = usePartnerModalOpen();

const selectedTeam = ref({});

function toggleModal(member) {
  // console.log(member)
  // this.modalKey = 'member-' + member.id
  selectedTeam.value = member;
  modalOpen.value = !modalOpen.value;
}

function toggleDemoModal() {
  modalDemoOpen.value = !modalDemoOpen.value;
}

function togglePartnerModal() {
  modalPartnerOpen.value = !modalPartnerOpen.value;
}

function closeModal() {
  selectedTeam.value = {};
  modalOpen.value = false;
  modalDemoOpen.value = false;
  modalPartnerOpen.value = false;
}

onMounted(() => {
  const moving = document.querySelectorAll(".mouse-follow");

  moving.forEach((p) => {
    document.addEventListener("mousemove", (e) => {
      rotateElement(e, p);
    });
  });

  // document.addEventListener("mousemove", (e) => {
  //   rotateElement(e, moving);
  // });

  function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y)

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    // console.log(middleX, middleY)

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 10;
    const offsetY = ((y - middleY) / middleY) * 10;
    // console.log(offsetX, offsetY);

    // set rotation
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }
});
</script>

<style lang="postcss">
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;

  .hero-background {
    @media (min-width: 1025px) {
      transition: all 0.2s ease-out;
    }
  }
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
  filter: grayscale(100%);
  /* filter: blur(1rem); */

  .hero-background {
    @media (min-width: 1025px) {
      opacity: 0;
      transform: translateY(2rem);
    }
  }

  /* .hero-background {
    opacity: 0;
    transform: translateY(2rem)
  } */
}

body {
  background: #f7fafd;
}
</style>
