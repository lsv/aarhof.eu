<template>

    <ul>
        <li v-for="item in elements">
            {{ item }}
        </li>
    </ul>

</template>
<script>
    export default {
        name: "Singlelist",
        props: ["elements"]
    }
</script>
