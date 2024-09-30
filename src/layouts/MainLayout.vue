<script lang="ts" setup>
import TheHeader from '@/layouts/components/TheHeader.vue'

</script>

<template>
  <the-header></the-header>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped lang="scss">
$height-header: 60px;

.container {
  padding-top: $height-header;
}
</style>