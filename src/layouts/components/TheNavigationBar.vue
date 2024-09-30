<script setup lang="ts">
import TheNavigationItem from "@/layouts/components/TheNavigationItem.vue";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const navigations = [
  {
    title: "indie game",
    path: "/indie-game"
  },
  {
    title: "entry game",
    path: "/entry-game"
  },
  {
    title: "community",
    path: "/community"
  }
]

const showMobileMenu = ref<boolean>(false)
const router = useRoute()


watch(() => router.path, (val) => {
  if (!val) return
  showMobileMenu.value = false
}, {deep: true})
</script>

<template>
  <span class="ionicon ionicon-menu-outline menu-icon"
        @click="showMobileMenu = true">
  </span>
  <nav :class="{'isShowMobileMenu': showMobileMenu}">
    <div class="mobile-menu-header" v-if="showMobileMenu">
      <router-link to="/" @click="showMobileMenu = false">
        <img src="@/assets/images/logo.png" alt="Stove" class="logo">
      </router-link>
      <span class="ionicon ionicon-close-outline close-icon"
            @click="showMobileMenu = false"
      ></span>
    </div>
    <the-navigation-item
        v-for="(nav, i) in navigations"
        :key="i"
        :path="nav.path"
        :title="nav.title">
    </the-navigation-item>
  </nav>
</template>

<style scoped lang="scss">
.menu-icon {
  display: none;
}
@media screen and (max-width: 768px) {
  .menu-icon {
    display: block;
    font-size: var(--font-size-extra);
  }
  nav {
    display: none;
    right: -100%;
    flex-direction: column;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--vt-c-green);
    opacity: 0;
    &.isShowMobileMenu {
      display: flex;
      animation: showMobileMenu 0.25s ease-in-out forwards;
      a {
        margin-left: 0;
        border: none;
        padding: 10px 20px;
        &:hover {
          background-color: unset;
          color: var(--color-text-light);
        }
      }
      .mobile-menu-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        a {
          padding: 0;
        }
      }
      .close-icon {
        font-size: var(--font-size-extra);
      }
    }
  }
}

@keyframes showMobileMenu  {
  from {
    right: -100%;
    opacity: 0;
  } to {
    right: 0;
    opacity: 1;
  }
}
</style>