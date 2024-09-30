<script lang="ts" setup>
interface IProps {
  title: string;
  path: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <router-link :to="props.path">{{ props.title }}</router-link>
</template>

<style lang="scss" scoped>
nav a {
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 4px;
  display: inline-block;
  text-transform: capitalize;
  border: 1px solid var(--color-border);
  &:hover {
    color: var(--vt-c-green);
    transition: all 0.15s ease-in-out;
    background-color: var(--color-border);
  }
  & + a {
    margin-left: 14px;
  }
}
</style>