<script lang="ts" setup>
interface Photo {
  id: number
  title: string,
  url: string
}
interface IProps {
  photo: Photo
}

const props = defineProps<IProps>()

function getImage (url?: string): string {
  return import.meta.env.VITE_API_URL + 'src/assets/images/' + url
}
</script>

<template>
  <div v-if="props.photo" class="card">
    <div class="card-image">
      <div class="overlay"></div>
      <img v-if="!props.photo.url"
           class="no-image"
           :src="getImage('error/no-image.png')"
           alt="No image">
      <img v-else :src="getImage(props.photo.url)"
           :alt="props.photo.title">
    </div>
    <span class="card-title">{{ props.photo.title || "Untitled" }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    .overlay {
      display: block;
      animation: showOverlay 0.15s ease-in-out forwards;
    }
  }
  &-image {
    width: 100%;
    aspect-ratio: 3/2;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img.no-image {
      object-fit: contain;
    }
  }
  &-title {
    font-weight: bold;
    margin: 4px;
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
.overlay {
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;
  inset: 0;
  display: none;
}
@keyframes showOverlay {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100%;
    opacity: 0.6;
  }
}
</style>