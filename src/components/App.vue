<script>
    import Navbar from './Navbar.vue'

    export default {
        name: "App",
        components: {
            Navbar
        }
    }
</script>

<template>

    <navbar></navbar>
    <div class="container-fluid">
        <router-view></router-view>
    </div>

</template>
