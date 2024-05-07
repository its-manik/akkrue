<script setup lang="ts">
useHead({
  title: "About Us",
  meta: [
    {
      name: "description",
      content:
        "Akkrue is a specialized entity operating at the intersection of technology and finance, dedicated to providing advanced solutions in the field of decentralized finance and digital asset management.",
    },
  ],
});
const mission = ref([
  {
    title: "Innovation",
    icon: "tdesign:upscale",
    color: "primary",
    copy:
      "Our mission is to continuously evolve our offerings, integrating the latest technological advancements through rigorous research and development, to provide solutions that are empirically validated for their performance and reliability.",
  },
  {
    title: "Security",
    icon: "tdesign:upscale",
    color: "secondary",
    copy:
      "Security is integral to our operations. We are committed to integrating advanced security protocols, ensuring the integrity and safety of assets and data at all times.",
  },
  {
    title: "Efficiency",
    icon: "tdesign:upscale",
    color: "gray",
    copy:
      "Our objective is to optimize the user experience, offering a suite of tools that are characterized by their functionality, performance, and user-centric design, ensuring that users can navigate the complex landscape of decentralized finance with confidence and ease.",
  },
]);

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
        "Eshana Lutawan, a dynamic marketing professional with a background in multinational financial corporations, startups, and consultancies. Leveraging a distinctive mix of creative flair and analytical acumen, she creates compelling marketing campaigns that yield significant ROI and resonate with target audiences. Acknowledged for her strategic mindset and inventive approach to problem-solving. Eshana has played a key role in high-performing teams, primarily focusing on the MENA and African regions at a global level. Her effective communication skills are key in building and nurturing relationships with clients, stakeholders, and partners, solidifying her reputation as a marketing professional.",
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
      linkedin: "https://www.linkedin.com/in/ali-jaffari-cfa-52791731/",
    },
    {
      name: "Bas Kooijman",
      // position: 'Founder',
      image: "bas-kooijman",
      description: [
        "Bas is a successful entrepreneur and professional trader with a core background in finance and technology. Having successfully founded and sold a technology firm in 2015, Bas has focused his efforts on creating tools and building wealth for institutional investors and as a result co-founded DHF Capital. Bas is a published author, an active member of the Society of Technical Analysis and is a Certified Financial Technician at IFTA.",
      ],
      linkedin: "https://www.linkedin.com/in/baskooijman/",
    },
    {
      name: "Ralph Musgrove",
      // position: "Founder",
      image: "ralph",
      description: [
        "Ralph Musgrove is a solutions-focused Senior Executive, Entrepreneur, Advisor, and Board Member with more than 25 years of success across the computer software, information services, and technology, private equity & venture capital industries. His broad areas of expertise include product management, strategic partnerships, startups, business development, cloud computing, venture funding, AI, and strategic planning.",
      ],
      linkedin: "https://www.linkedin.com/in/ralph-musgrove-29b97/",
    },
    {
      name: "Thomas Wawra",
      // position: 'Founder',
      image: "tom",
      description: [
        "Thomas is a mechanical engineer based in Germany. He has over 25 years of experience in the data center field and consulting with the financial industry. He has been heavily involved in consulting and training with the IBM Data Center team and the German government for many years. He has also worked heavily with hyperledger blockchain architecture.",
      ],
      linkedin: "https://www.linkedin.com/in/thomas-wawra-a780425/",
    },
    {
      name: "William Aweida",
      // position: "Founder",
      image: "william-aweida",
      description: [
        "William is a devoted professional, known for his commitment to perfectionism. With a charismatic demeanor, he takes pride in being an ideal candidate for various roles. Drawing from his extensive experience, he seamlessly integrates into corporate environments and leverages his past skills to enhance revenue. Currently serving as the Chief Strategy Officer at Jura Investments, William brings a wealth of strategic expertise to the table.",
      ],
      linkedin: "https://www.linkedin.com/in/williamaweida28/",
    },
  ],
};

const modalOpen = useModalOpen();

function closeModal() {
  selectedTeam.value = {};
  modalOpen.value = false;
  modalDemoOpen.value = false;
  modalPartnerOpen.value = false;
}

const selectedTeam = ref({});

function toggleModal(member) {
  // console.log(member)
  // this.modalKey = 'member-' + member.id
  selectedTeam.value = member;
  modalOpen.value = !modalOpen.value;
}
</script>

<template>
  <main>
    <LayoutHeroLarge>
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h1 class="mt-4 text-h1 leading-none font-bold font-display text-primary">
            About Us
          </h1>
          <p class="text-xl md:text-2xl mt-8 text-secondary-500">
            Akkrue is a specialized entity operating at the intersection of technology and
            finance, dedicated to providing advanced solutions in the field of
            decentralized finance and digital asset management.
          </p>
        </div>
      </div>
    </LayoutHeroLarge>

    <section class="bg-white">
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Company Overview
          </h2>
          <p class="text-lg mt-8 text-secondary-500">
            Akkrue was founded by a group of experienced professionals from the finance
            and technology sectors who shared a common vision: to create a platform that
            empowers institutional investors and UHNW individuals to navigate the rapidly
            evolving world of finance.
          </p>
        </div>
      </div>

      <div class="container mt-12 pb-16 max-w-screen-2xl">
        <div class="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <img class="mx-auto max-w-full" src="/content/about-us.jpg" alt="Akkrue" />
          </div>
          <div class="prose">
            <h4>Innovation, Security, Efficiency</h4>
            <p>
              We are characterized by our rigorous approach to innovation, security, and
              efficiency, ensuring that our platform not only meets but exceeds the
              stringent demands of institutional investors.
            </p>
            <p>
              Our foundation is rooted in empirical research, technological prowess, and
              strategic innovation. Each feature of the Akkrue platform is the result of
              meticulous engineering, designed to offer functionality, security, and
              performance that is both measurable and reliable.
            </p>
            <h4>Our Commitment</h4>
            <p>
              In the volatile and complex environment of decentralized finance, Akkrue
              stands as a reliable partner, committed to offering solutions that are
              validated, tested, and proven to deliver optimal performance.
            </p>
          </div>
        </div>

        <div class="mt-16">
          <figure class="quote max-w-7xl mx-auto relative">
            <Icon
              name="ri:double-quotes-r"
              size="6rem"
              class="absolute top-0 left-0 text-gray-200"
            />
            <blockquote
              class="text-2xl md:text-4xl pt-24 pl-8 md:pl-16 text-secondary-700"
            >
              We want to be the global leader in the field of decentralized finance,
              distinguished by our commitment to empirical innovation, operational
              excellence, and unwavering security protocols.
            </blockquote>
            <figcaption class="mt-6 pl-16">
              &mdash; Oliver von Wolff, CEO Akkrue
            </figcaption>
          </figure>
        </div>

        <div class="mt-16">
          <div class="grid md:grid-cols-3 gap-12 max-w-none">
            <div
              v-for="(feature, findex) in mission"
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
              <h3 class="mt-12 text-h4 leading-none font-display text-secondary-500">
                {{ feature.title }}
              </h3>
              <p class="mt-4">{{ feature.copy }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us">
      <div class="container relative max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            The Team
          </h2>
          <p class="text-lg mt-12">
            The Akkrue team is a distinguished collective of professionals, each marked by
            significant expertise and a pragmatic approach to innovation in decentralized
            finance. We are more than a group; we are a dynamic synergy of specialized
            skills and knowledge, ensuring Akkrue's position at the pinnacle of
            technological and service.
          </p>
        </div>
      </div>

      <div class="container mt-28 max-w-screen-lg">
        <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-30">
          <div
            v-for="(member, tindex) in team.management"
            :key="tindex"
            class="cursor-pointer px-8 pt-20 pb-0 shadow-lg rounded-xl relative bg-white group transform transition duration-500 hover:bg-white hover:-translate-y-2"
            @click="toggleModal(member)"
          >
            <div
              class="clip-hexagon absolute -top-16 left-8 w-36 h-40 m-auto rounded-xl bg-gray-50 transform transition duration-500 delay-150 group-hover:bg-primary group-hover:-translate-y-4"
            >
              <div>
                <img :src="'/team/' + member.image + '-square.jpg'" :alt="member.name" />
              </div>
            </div>
            <div class="transform transition duration-500 group-hover:-translate-y-6">
              <h3 class="mt-12 text-h4 leading-none font-display text-secondary-700">
                {{ member.name }}
              </h3>
              <p class="mt-2">{{ member.position }}</p>
              <p
                class="mt-2 text-sm text-primary opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100"
              >
                → read more
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-28 max-w-screen-lg">
        <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-30">
          <div
            v-for="(member, tindex) in team.team"
            :key="tindex"
            class="cursor-pointer px-8 pt-20 pb-0 shadow-lg rounded-xl relative bg-white group transform transition duration-500 hover:bg-white hover:-translate-y-2"
            @click="toggleModal(member)"
          >
            <div
              class="clip-hexagon absolute -top-16 left-8 w-36 h-40 m-auto rounded-xl bg-gray-50 transform transition duration-500 delay-150 group-hover:bg-primary group-hover:-translate-y-4"
            >
              <div>
                <img :src="'/team/' + member.image + '-square.jpg'" :alt="member.name" />
              </div>
            </div>
            <div class="transform transition duration-500 group-hover:-translate-y-6">
              <h3 class="mt-12 text-h4 leading-none font-display text-secondary-700">
                {{ member.name }}
              </h3>
              <p class="mt-2">{{ member.position }}</p>
              <p
                class="mt-2 text-sm text-primary opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100"
              >
                → read more
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-28 max-w-screen-lg">
        <h2
          class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700 text-center mb-28"
        >
          Advisory Board
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-30">
          <div
            v-for="(member, tindex) in team.board"
            :key="tindex"
            class="cursor-pointer px-8 pt-20 pb-0 shadow-lg rounded-xl relative bg-white group transform transition duration-500 hover:bg-white hover:-translate-y-2"
            @click="toggleModal(member)"
          >
            <div
              class="clip-hexagon absolute -top-16 left-8 w-36 h-40 m-auto rounded-xl bg-gray-50 transform transition duration-500 delay-150 group-hover:bg-primary group-hover:-translate-y-4"
            >
              <div>
                <img :src="'/team/' + member.image + '-square.jpg'" :alt="member.name" />
              </div>
            </div>
            <div class="transform transition duration-500 group-hover:-translate-y-6">
              <h3 class="mt-12 text-h4 leading-none font-display text-secondary-700">
                {{ member.name }}
              </h3>
              <!-- <p class="mt-2">{{ member.position }}</p> -->
              <p
                class="mt-2 text-sm text-primary opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100"
              >
                → read more
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container relative max-w-screen-2xl mt-16">
        <div class="max-w-screen-lg mx-auto">
          <p class="text-lg mt-12">
            We are committed to a culture of continuous improvement and adaptation,
            ensuring our offerings are not only relevant but also anticipatory of future
            market trends and challenges.
          </p>
          <p class="text-lg mt-6">
            Collaboration is at the core of our operations, fostering an environment where
            intellectual rigor and technical expertise converge. Each team member
            contributes to a collective intelligence capable of transforming complex
            challenges into strategic opportunities.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container relative z-1 max-w-screen-2xl pb-12">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="mt-4 text-h2 leading-none font-bold font-display text-secondary-700">
            Our Journey
          </h2>
          <p class="text-lg mt-8 text-secondary-500">
            Akkrue's journey is marked by significant milestones that underscore our
            commitment to innovation, excellence, and the transformation of decentralized
            finance for institutional investors. Here is a timeline of Akkrue’s
            milestones, each a testament to our unwavering commitment to pushing the
            boundaries of technological and service excellence.
          </p>
        </div>

        <BlockTimeline />
      </div>
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
