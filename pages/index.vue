<template>
<main>
  <LayoutHeroLarge>
    <div class="container relative z-1 max-w-screen-2xl">
      <div class="text-center max-w-screen-lg mx-auto">
        <h1 class="mt-4 text-h1 leading-none font-bold font-display text-secondary-700">Seamless <span class="text-primary">Asset Management</span></h1>
        <p class="text-2xl md:text-4xl mt-4 text-secondary-500">for Institutional Investors and UHNW Individuals</p>
        <p class="mt-12 text-lg">The premier non-custodial platform designed to revolutionize the way institutional investors and ultra-high-net-worth (UHNW) individuals manage their assets. Our cutting-edge technology enables you to create and execute automated investment strategies across any market, ensuring unparalleled efficiency, security, and innovation.</p>
        <div class="mt-12 text-center relative">
          <img class="mx-auto shadow-2xl max-w-full md:max-w-3/4 mouse-follow" src="/app.png" alt="Akkrue" />
        </div>
        <p class="mt-16"><div @click="toggleDemoModal()" class="btn btn-large btn-primary cursor-pointer inline-block">Request a Demo</div></p>
      </div>
      
    </div>
  </LayoutHeroLarge>

  <section id="features" class="bg-white">
    <div class="container relative z-1 max-w-screen-2xl">
      <div class="text-center max-w-screen-lg mx-auto">
        <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">Key features</h2>
        <p class="text-lg mt-12 text-secondary-500">Akkrue's platform is designed to cater to the specific needs of institutional investors and UHNW individuals, making it easier than ever to navigate the ever-evolving landscape of decentralized finance. By offering a comprehensive suite of tools, we empower you to make informed decisions and maximize your investment potential.</p>
      </div>
    </div>

    <div class="container mt-20 max-w-screen-lg">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, findex) in features" :key="findex" class="p-8 shadow-2xl rounded-xl" :class="'bg-' + feature.color + '-50'">
          <div class="hexagon-bg relative" :class="'text-' + feature.color">
            <Icon :name="feature.icon" size="2rem" class="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 class="mt-12 text-h4 leading-none font-display min-h-12 text-secondary-500">{{ feature.title }}</h3>
          <p class="mt-4">{{ feature.copy }}</p>
        </div>
      </div>
      <p class="mt-20 text-center"><div @click="toggleDemoModal()" class="btn btn-large btn-primary cursor-pointer inline-block">Request a Demo</div></p>
    </div>
  </section>


  <section id="solutions">
    <div class="container relative z-1 max-w-screen-xl">
      <div class="text-center max-w-screen-lg mx-auto">
        <p><span class="text-primary uppercase font-bold">Solutions</span></p>
        <h2 class="mt-6 text-h2 leading-none font-bold font-display text-secondary-700">Tailored Asset Management<br />for Institutional Investors & UHNW Individuals</h2>
        <p class="text-lg mt-12">Akkrue's platform is designed to cater to the unique needs of institutional investors and UHNW individuals, offering a wide range of solutions for creating and managing automated investment strategies. Discover how our platform can help you achieve your investment objectives in the rapidly evolving world of finance.</p>
      </div>
    </div>

    <div class="container mt-16">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-32 items-center">
        <div class="prose">
          <h3 class="text-h2">Institutional Investors</h3>
          <p>Our solutions are specifically tailored for financial institutions, hedge funds, and asset managers seeking to efficiently and securely manage assets. With Akkrue's platform, you can:</p>
          <ul>
            <li>Develop customized portfolio allocation strategies for yield-generating protocols and stable or pegged assets.</li>
            <li>Seamlessly move assets across protocols and chains while determining the most cost-efficient route.</li>
            <li>Integrate real-world data and AI/ML technologies to enhance your investment strategies and drive growth.</li>
          </ul>
        </div>
        <div>
          <div class="text-center relative p-8 max-w-3xl mx-auto">
            <SvgImageBg class="absolute w-full h-full top-0 left-0 text-secondary-100/50" />
            <img class="mx-auto shadow-2xl relative mouse-follow" src="/app-institutional.png" alt="Akkrue" />
          </div>
          
        </div>
      </div>
      
    </div>

    <div class="container mt-16">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-32 items-center">
        <div class="text-center relative p-8 max-w-3xl mx-auto hidden lg:block">
          <SvgImageBg class="absolute w-full h-full top-0 left-0 text-secondary-100/50" />
          <img class="mx-auto shadow-2xl relative mouse-follow" src="/app-uhnw.png" alt="Akkrue" />
        </div>
        <div class="prose">
          <h3 class="text-h2">UHNW Individuals</h3>
          <p>Akkrue's platform is the perfect solution for UHNW individuals looking to optimize their investments. Our platform enables you to:</p>
          <ul>
            <li>Access a user-friendly, non-custodial, and audited platform for managing your assets with confidence.</li>
            <li>Create bespoke investment strategies tailored to your risk tolerance and financial objectives.</li>
            <li>Benefit from our commitment to honesty, integrity, and transparency, ensuring a trusted and reliable investment experience.</li>
          </ul>
        </div>
      </div>
      
    </div>

    <p class="mt-20 mb-12 text-center">
      <NuxtLink to="/solutions" class="btn btn-primary cursor-pointer inline-block">More about our Solutions</NuxtLink>
    </p>
  </section>

  <!-- <section class="bg-white">
    <div class="container relative max-w-screen-2xl">
      <p class="text-center">Todo: List of Partners</p>
    </div>
  </section> -->

  <section id="about-us" class="bg-white">
    <div class="container relative max-w-screen-2xl">
      <div class="text-center max-w-screen-lg mx-auto">
        <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">About us</h2>
        <p class="text-lg mt-12">Akkrue was founded by a group of experienced professionals from the finance and technology sectors who shared a common vision: to create a platform that empowers institutional investors and UHNW individuals to navigate the rapidly evolving world of finance. Through our unique combination of expertise and passion for innovation, we have developed a platform that addresses the unique challenges and opportunities of asset management.</p>
      </div>
    </div>

    <div class="container mt-28 max-w-screen-lg">
      <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-30">
        <div v-for="(member, tindex) in team.management" :key="tindex" class="cursor-pointer px-8 pt-20 pb-0 shadow-lg rounded-xl relative bg-white group transform transition duration-500 hover:bg-white hover:-translate-y-2" @click="toggleModal(member)">
          <div class="clip-hexagon absolute -top-16 left-8 w-36 h-40 m-auto rounded-xl bg-gray-50 transform transition duration-500 delay-150 group-hover:bg-primary group-hover:-translate-y-4">
            <div>
              <img :src="'/team/' + member.image + '-square.jpg'" :alt="member.name" />
            </div>
            
          </div>
          <div class="transform transition duration-500 group-hover:-translate-y-6">
            <h3 class="mt-12 text-h4 leading-none font-display text-secondary-700">{{ member.name }}</h3>
            <p class="mt-2">{{ member.position }}</p>
            <p class="mt-2 text-sm text-primary opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">→ read more</p>
          </div>
        </div>
      </div>

      <p class="mt-20 text-center"><NuxtLink to="/about-us" class="btn btn-primary cursor-pointer inline-block">Meet the Team</NuxtLink></p>
    </div>

    
  </section>

  <section id="partnerships">
    <div class="container relative max-w-screen-2xl">
      <div class="text-center max-w-screen-lg mx-auto">
        <p><span class="text-primary uppercase font-bold">Partnerships</span></p>
        <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">Collaborate with Akkrue </h2>
        <p class="text-lg mt-12 text-secondary-700">At Akkrue, we believe that collaboration is key to driving innovation and success in the world of finance. We are committed to forging strategic partnerships with like-minded organizations, technology providers, and financial institutions to enhance our platform, expand our reach, and deliver the most advanced asset management solutions.</p>
      </div>
    </div>

    <div class="container mt-16 max-w-screen-lg prose">
      <p>By partnering with Akkrue, you join forces with a leading provider of innovative asset management solutions for institutional investors and UHNW individuals. Our cutting-edge platform offers a wide range of benefits and opportunities for our partners, including:</p>
      <ul class="grid lg:grid-cols-2 gap-x-20">
        <li v-for="(adv, aindex) in partnerAdvantages" :key="aindex" class="">
          {{ adv }}
        </li>
      </ul>
    </div>

    <p class="mt-20 mb-12 text-center"><p class="mt-20 text-center"><NuxtLink to="/partnerships" class="btn btn-primary cursor-pointer inline-block">More about our partnerships</NuxtLink></p></p>
  </section>


  

  <dialog
      :open="modalOpen"
      @click="closeModal()"
      class="flex z-50 fixed inset-0 items-center justify-center min-w-full min-h-full bg-black/90 filter backdrop-blur-lg"
    >
      <article
        class="team-modal max-h-75vh md:max-h-90vh max-w-3xl overflow-auto bg-white p-8 md:p-16 grid md:grid-cols-4 gap-12"
        @click.stop=""
      >
        <div v-if="modalOpen" class="col-span-1">
          <img
            :src="'/team/' + selectedTeam.image + '-square.jpg'"
            :alt="selectedTeam.name"
          />
        </div>

        <div class="col-span-3 prose">
          <header>
            <span
              aria-label="Close"
              class="close cursor-pointer block absolute w-6 h-6 top-4 right-4 text-white hover:text-primary"
              @click="closeModal()"
            ></span>
            <h3 class="heading-3 text-h3 !my-0">{{ selectedTeam.name }}</h3>
            <p class="position italic !mt-4">{{ selectedTeam.position }}</p>
          </header>

          <div class="modal-content text-flow">
            <p v-for="(p, pindex) in selectedTeam.description">{{ p }}</p>
            <p v-if="selectedTeam.linkedin">
              <a :href="selectedTeam.linkedin" target="_blank" class="block">
                <SvgLinkedin class="w-8" />
              </a>
            </p>
          </div>
        </div>
      </article>
    </dialog>

  

  


</main>

</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const layout = route.meta.layout || config.public.defaultLayout || "default";

useHead({
  title: "Akkrue - Seamless Asset Management",
  meta: [
    {
      name: "description",
      content:
        "The premier non-custodial platform designed to revolutionize the way institutional investors and ultra-high-net-worth (UHNW) individuals manage their assets.",
    },
  ],
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
        "Oliver von Wolff, a seasoned financial leader with over 15 years of management experience, has played pivotal roles in reshaping the financial landscape. His dynamic leadership as a CFO and Co-Founder of various start-ups and management buyouts is evident in his proven track record of orchestrating transformations across diverse industries.",
        "Specializing in the fintech sector, Oliver has successfully turned around and strategically restructured growth companies, establishing a notable presence in the finance industry. Noteworthy roles include co-founding Crypto Oasis, serving as Managing Director for CV Labs and CVVC Switzerland, and acting as Group CFO & Equity Partner for a global crypto asset management and blockchain-focused venture capital group.",
        "Currently, as the Founder and CEO of Helion Capital, Oliver leads a venture builder and equity firm dedicated to developing regulated products for GCC markets and engaging in M&A endeavors, collaborating with the strategic Luxembourg hedge fund DHF. His outstanding leadership extends beyond business ventures, actively participating in committees like the 'Transformational Business Leaders' at the Capital Club and serving on the advisory board for the IFN Investors Forum.",
        "Oliver's educational background includes an MBA in international management, degrees in economics and business, and studies at New York University, showcasing his extensive global experience and deep understanding of diverse markets, particularly in Europe and the Middle East.",
      ],
      linkedin: "https://www.linkedin.com/in/oliver-von-wolff-63146639/",
    },
    {
      name: "Amin El Gazzar",
      position: "Chief Innovation Officer",
      image: "amin",
      description: [
        "Amin is a serial entrepreneur and technologist. He has founded several startups in the United States and around the globe. He is fluent in English and German and has proven that he is always thinking outside the box. He holds several patents in technologies from databases to messaging.",
      ],
      linkedin: "https://www.linkedin.com/in/amin-el-gazzar-7299b2100/",
    },
    {
      name: "Deepak Gopalakrishnan",
      position: "Founder & Architect",
      image: "deepak",
      description: [
        "Deepak possesses extensive expertise at the crossroads of technology and finance, dedicated to pioneering cutting-edge solutions in decentralized finance and digital asset management. His outstanding achievements in AI and Machine Learning, combined with successful startup exits, underscore his exceptional capabilities. Serving as an accomplished Engineering Leader, Deepak has consistently demonstrated a track record of constructing scalable AI architectures, further solidifying our commitment to innovation.",
      ],
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
        "Eshana Lutawan, a dynamic marketing professional with a background in multinational financial corporations, startups, and consultancies. Leveraging a distinctive mix of creative flair and analytical acumen, she creates compelling marketing campaigns that yield significant ROI and resonate with target audiences. Acknowledged for her strategic mindset and inventive approach to problem-solving. Eshana has played a key role in high-performing teams, primarily focusing on the MENA and African regions at a global level. Her effective communication skills are key in building and nurturing relationships with clients, stakeholders, and partners, solidifying her reputation as a marketing professional."
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