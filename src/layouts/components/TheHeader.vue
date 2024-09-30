<script lang="ts" setup>
import TheNavigationBar from "@/layouts/components/TheNavigationBar.vue";
</script>

<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <router-link to="/" class="branding">
          <img src="@/assets/images/logo.png" alt="Stove" class="logo">
          <span class="brandName">Hieu Tran</span>
        </router-link>
        <the-navigation-bar></the-navigation-bar>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
$height: 60px;
$color-text: var(--vt-c-white);
$color-background: var(--vt-c-green);

header {
  width: 100%;
  height: $height;
  position: fixed;
  top: 0;
  color: $color-text;
  background-color: $color-background;
  z-index: 98;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.branding {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo {
  margin-right: 8px;
}
.brandName {
  font-size: var(--font-size-large);
  font-weight: bold;
}
</style>