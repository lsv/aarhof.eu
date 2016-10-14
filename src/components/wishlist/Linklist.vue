<template>

    <ul>
        <li v-for="item in elements">
            <a href="{{ item.link }}">{{ item.title }}</a>
        </li>
    </ul>

</template>
<script>
    export default {
        name: "Linklist",
        props: ['elements'],
    }
</script>
