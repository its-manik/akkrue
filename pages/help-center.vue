<template>
  <main>
    <LayoutHeroLarge>
      <div class="container relative z-1 max-w-screen-2xl text-center">
        <h1 class="mt-4 text-h1 leading-none font-bold font-display text-secondary-700">
          Help Center
        </h1>
        <p class="text-xl mt-8 text-secondary-500">
          Welcome to Akkrue's Help Center, your reliable resource as you navigate the
          nuanced world of decentralized finance. Here, a wealth of knowledge and support
          awaits, ensuring a smooth journey through innovative financial landscapes.
        </p>

        <div
          class="bg-white text-left mt-16 shadow-2xl rounded-xl p-8 max-w-screen-lg mx-auto"
        >
          <div class="grid md:grid-cols-2 gap-8 md:gap-36">
            <div class="prose">
              <h4>
                Need Assistance?<br />
                We’re Here to Help.
              </h4>
              <p>
                If you can't find what you're looking for or need personalized assistance,
                don’t hesitate to reach out. Simply fill out the form below, and our
                dedicated support team will get back to you promptly.
              </p>
              <p>
                At Akkrue, your concerns are our priority, and we are always ready to
                support you on your journey through the world of decentralized finance.
              </p>
            </div>
            <FormSupport class="mt-8" />
          </div>
        </div>
      </div>
    </LayoutHeroLarge>

    <section class="bg-white -mt-64 pt-54">
      <div class="container relative z-1 max-w-screen-xl">
        <div class="grid md:grid-cols-2 gap-24 prose max-w-screen-lg mx-auto">
          <p>
            Navigating the world of decentralized finance with Akkrue is a journey of
            empowerment, innovation, and strategic advantage. We understand that every
            journey, no matter how intuitive and well-engineered, is accompanied by
            questions, curiosities, and the need for support. Our Help Center & FAQ
            section is meticulously designed to be your companion in this journey,
            offering instant answers, insightful solutions, and unwavering support every
            step of the way.
          </p>
          <p>
            Our Help Center is a repository of knowledge, insights, and solutions, each
            meticulously curated to address the diverse, dynamic, and specific needs of
            our institutional investors. It is not just a support center but a learning
            hub, an empowerment platform, and a partner in your journey through the
            intricate landscape of decentralized finance with Akkrue.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="text-center max-w-screen-lg mx-auto">
          <h2 class="text-h2 leading-none font-bold font-display text-secondary-700">
            FAQ
          </h2>
        </div>

        <div class="faq prose max-w-5xl mx-auto mt-16">
          <div v-for="(faq, index) in faqs" :key="index" class="mt-12">
            <div class="faq-question">
              <div class="faq-question-text">
                <h3 class="text-2xl font-bold text-secondary-700">
                  {{ faq.title }}
                </h3>
              </div>
              <!-- <div class="faq-question-icon">
                <Icon class="w-6 h-6 text-primary" size="1.5em" name="mdi:chevron-down" />
              </div> -->
            </div>
            <div class="faq-answer">
              <div v-html="faq.copy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { getFaq } = useFaq();
const faqs = await getFaq();

useHead({
  title: "Help Center",
  meta: [
    {
      name: "description",
      content:
        "Welcome to Akkrue's Help Center, your reliable resource as you navigate the nuanced world of decentralized finance.",
    },
  ],
});
</script>
