<template>
  <article>
    <header-component>Wishlist</header-component>
    <div
      v-for="item in items"
      :key="item.header"
    >
      <h5>{{ item.header }}</h5>
    </div>
  </article>
</template>

<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue'

const items = ref([])

onMounted(async () => {
  await fetch('/api/wishlist')
    .then(res => items.value = res.json())
})
</script>
