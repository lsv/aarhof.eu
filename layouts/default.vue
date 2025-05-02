<template>
  <div>
    <header class="container container-md mx-auto">
      <Menubar :model="items">
        <template #item="{ item }">
          <nuxt-link
            :to="item.route"
            prefetch-on="interaction"
          >
            <Button
              :icon="item.icon"
              :label="item.label"
              variant="text"
            />
          </nuxt-link>
        </template>
      </Menubar>
    </header>
    <main class="container container-md mx-auto mt-5">
      <Card>
        <template #content>
          <slot />
        </template>
      </Card>
    </main>
    <footer class="container container-md mx-auto mt-5">
      <Card>
        <template #content>
          <article class="italic text-xs text-right text-gray-500">
            &copy; Martin Aarhof
          </article>
        </template>
      </Card>
    </footer>
  </div>
</template>

<script setup lang="ts">
type MenuItem = {
  label: string
  icon: string
  route: string
}
const items = ref<MenuItem[]>([
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
  // {
  //   label: 'Blog',
  //   icon: 'pi pi-align-left',
  //   route: '/blog',
  // },
])
</script>
