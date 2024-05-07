<script setup lang="ts">
const route = useRoute();
const { getMemberBySlug } = useTeam();
const member = await getMemberBySlug(route.params.slug);
</script>

<template>
  <main>
    <section>
      <div class="container py-26 max-w-screen-lg">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-24">
          <div class="col-span-2">
            <div
              class="clip-hexagon aspect-9/10 m-auto rounded-xl bg-gray-50 transform transition duration-500 delay-150 group-hover:bg-primary group-hover:-translate-y-4"
            >
              <div>
                <img
                  :src="'/team/' + member.image + '-square.jpg'"
                  :alt="member.name"
                  class="col-span-2"
                />
              </div>
            </div>
          </div>

          <div class="prose col-span-3">
            <h3>{{ member.name }}</h3>
            <p class="position italic !mt-4">{{ member.position }}</p>
            <div>
              <p v-for="(p, pindex) in member.description">{{ p }}</p>
              <p v-if="member.linkedin">
                <a :href="member.linkedin" target="_blank" class="block">
                  <SvgLinkedin class="w-8" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
