<template>
  <div>
    <header class="container container-md mx-auto">
      <Menubar :model="items">
        <template #item="{ item }">
          <nuxt-link :to="item.route">
            <Button
              :icon="item.icon"
              :label="item.label"
              variant="text"
            />
          </nuxt-link>
        </template>
      </Menubar>
    </header>
    <main class="container container-md mx-auto">
      <slot />
    </main>
    <footer class="container container-md mx-auto">
      Footer
    </footer>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'About',
    icon: 'pi pi-user',
    route: '/about',
  },
  {
    label: 'Wishlist',
    icon: 'pi pi-asterisk',
    route: '/wishlist',
  },
  {
    label: 'Blog',
    icon: 'pi pi-align-left',
    route: '/blog',
  },
])
</script>
