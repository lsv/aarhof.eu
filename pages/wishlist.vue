<template>
  <article>
    <h1>Wishlist</h1>

    <div
      v-for="item in items"
      :key="item.header"
    >
      <h5>{{ item.header }}</h5>
    </div>
  </article>
</template>

<script setup lang="ts">
const items = ref([])

onMounted(async () => {
  await fetch('/api/wishlist')
    .then(res => items.value = res.json())
})
</script>
