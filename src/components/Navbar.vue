<script>
    export default {
        name: "Navbar"
    }
</script>

<template>
    <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">aarhof.eu</a>
        <ul class="nav navbar-nav">
            <li class="nav-item"><a class="nav-link" v-link="{name: 'home'}">Home</a></li>
            <li class="nav-item"><a class="nav-link" v-link="{name: 'wishlist'}">Wishlist</a></li>
            <li class="nav-item"><a class="nav-link" v-link="{name: 'about'}">About</a></li>
        </ul>
    </nav>
</template>
