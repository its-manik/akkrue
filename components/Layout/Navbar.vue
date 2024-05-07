<template>
  <div
    class="navbar w-full z-50 transition-all duration-500 flex gap-8 justify-between items-center"
    :class="[
      isScrolled
        ? 'fixed py-2 px-4 md:px-8 top-0 shadow bg-white'
        : 'absolute top-0 p-4 lg:p-8 bg-white xl:bg-transparent',
    ]"
  >
    <div class="navbar-logo w-48">
      <NuxtLink to="/">
        <SvgLogo class="logo is-colored" :class="[isScrolled ? 'w-40' : 'w-48']" />
      </NuxtLink>
    </div>
    <nav class="flex gap-8">
      <ul
        class="navbar-desktop items-center text-sm uppercase font-display tracking-wider hidden xl:flex"
      >
        <li
          v-for="(item, index) in menu"
          :key="`navbar-desktop-${index}`"
          @mouseover="isHovering = index"
          @mouseout="isHovering = 999"
          :class="isHovering == index ? 'is-active' : ''"
          class="relative"
        >
          <NuxtLink
            :href="item.link"
            :target="item.target"
            class="block px-8 py-4 text-secondary-700 hover:text-primary transition-colors transform translate-y-1"
          >
            {{ item.title
            }}<Icon
              v-if="item.list && item.list.length > 0"
              class="ml-1"
              size="1.5em"
              name="mdi:menu-down"
            />
          </NuxtLink>

          <ul class="absolute bg-secondary">
            <li
              v-for="(subitem, subindex) in item.list"
              :key="`navbar-desktop-${subindex}`"
            >
              <NuxtLink
                :to="subitem.link"
                :target="subitem.target"
                class="py-2 px-8 block whitespace-nowrap hover:bg-primary"
              >
                {{ subitem.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="hidden xl:block w-48 text-right">
      <div @click="toggleDemoModal()" class="btn btn-primary cursor-pointer">
        Request a Demo
      </div>
    </div>

    <div
      class="navbar-burger cursor-pointer text-secondary-700 flex flex-col gap-1 py-4 px-2 z-[52] xl:hidden"
      :class="{ 'is-active': menuOpen }"
      @click="menuOpen = !menuOpen"
    >
      <span
        v-for="line in 3"
        class="block bg-current h-0.5 w-6 origin-center transition-all ease-out"
        aria-hidden="true"
      />
      <!-- <span aria-hidden="true"></span>
      <span aria-hidden="true"></span> -->
    </div>

    <div v-if="slots.right" class="hidden xl:block">
      <slot name="right" />
    </div>

    <div
      class="nav-backdrop fixed top-0 left-0 w-screen h-screen bg-black transition-opacity z-20 backdrop-filter backdrop-blur-lg xl:hidden"
      :class="[menuOpen ? 'opacity-100 visible' : 'opacity-0 hidden']"
      @click="menuOpen = !menuOpen"
    ></div>

    <aside
      class="nav-mobile block fixed w-11/12 max-w-xl min-h-screen max-h-screen overflow-y-auto top-0 right-0 py-12 px-8 bg-gray-800 z-30 transition-transform transform xl:hidden"
      :class="[menuOpen ? 'translate-x-0' : 'translate-x-full']"
    >
      <span
        aria-label="Close"
        class="close cursor-pointer block absolute w-6 h-6 top-4 right-4 text-white hover:text-primary"
        @click="menuOpen = !menuOpen"
      ></span>
      <ul class="text-white font-display uppercase">
        <li
          v-for="(item, index) in menu"
          :key="`navbar-desktop-${index}`"
          @mouseover="isHovering = index"
          @mouseout="isHovering = 999"
          :class="isHovering == index ? 'is-active' : ''"
          class="relative border-b border-gray-500"
        >
          <a
            :href="item.link"
            @click.native="menuOpen = !menuOpen"
            class="block relative px-8 py-4 hover:text-primary transition-colors"
          >
            {{ item.title }}
            <Icon
              v-if="item.list && item.list.length > 0"
              class="absolute right-0"
              size="1.5em"
              name="mdi:menu-down"
            />
          </a>

          <ul class="font-body ml-6 normal-case">
            <li
              v-for="(subitem, subindex) in item.list"
              :key="`navbar-desktop-${subindex}`"
            >
              <NuxtLink
                :to="subitem.link"
                @click.native="menuOpen = !menuOpen"
                class="py-2 px-6 block whitespace-nowrap hover:bg-gray-400"
              >
                {{ subitem.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <div v-if="slots.right" class="mt-6">
        <slot name="right" />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
interface MenuSubList {
  title: string;
  link: string;
}

interface MenuList {
  title: string;
  link?: string;
  icon?: string;
  open?: boolean;
  sublist?: Array<MenuSubList>;
}

interface Menu {
  label?: string;
  list: Array<MenuList>;
}

const props = defineProps({
  width: { tpye: String, default: "" },
  compact: { tpye: Boolean, default: false },
});

const menu = ref([
  {
    title: "Solutions",
    link: "/solutions",
  },
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "Partnerships",
    link: "/partnerships",
  },
  {
    title: "Help Center",
    link: "/help-center",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]);

const modalDemoOpen = useDemoModalOpen();
function toggleDemoModal() {
  modalDemoOpen.value = !modalDemoOpen.value;
}

const menuOpen = ref(false);

const slots = useSlots();

const isScrolled = ref(false);

const isHovering = ref(999);

function handleSCroll() {
  if (window.scrollY > 150) {
    isScrolled.value = true;
  } else if (window.scrollY < 150) {
    isScrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleSCroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleSCroll);
});
</script>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-primary;
}

.navbar-desktop {
  > li {
    ul {
      display: none;
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }
}

.navbar-burger.is-active span {
  &:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}

.nav-backdrop {
  --tw-bg-opacity: 0.9;
}
</style>
