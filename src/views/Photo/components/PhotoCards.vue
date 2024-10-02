<script setup lang="ts">
import PhotoCard from "@/views/Photo/components/PhotoCard.vue";
const titles = [
  "Zoom Zone for Hidden Object Game | Stone Watering Hole | Marharyta Ortemir",
  "Telegram tap game",
];

const urls = [
  "/landscape.jpg",
  "/portrait.png"
];

const photos = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  title: titles[index % 2],
  url: urls[index % 2]
}));
</script>

<template>
  <div class="photo-grid">
    <photo-card
        v-for="photo in photos"
        :photo="photo"
        :key="photo.id">
    </photo-card>
  </div>
</template>

<style lang="scss" scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
  padding-bottom: 70px;
}

@media (min-width: 1440px) {
  .photo-grid {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr))
  }
}
</style>
