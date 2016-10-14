<template>

    <h1>Wishlist</h1>

    <div v-for="item in items">
        <h5>{{ item.header }}</h5>
        <singlelist :elements="item.items" v-if="item.type == 'singlelist'"></singlelist>
        <linklist :elements="item.items" v-if="item.type == 'linklist'"></linklist>
    </div>

</template>

<script>
    import WishlistService from './../services/wishlist';
    import Linklist from './wishlist/Linklist.vue';
    import Singlelist from './wishlist/Singlelist.vue';

    export default {
        name: "Wishlist",
        data () {
            return {
                items: []
            }
        },

        created () {
            WishlistService.getWishes(this.$http)
                .then(function(response) {
                    this.$set('items', response.data)
                })
            ;
        },

        methods: {
            isSinglelist (item) {
                return item.type == 'singlelist';
            },

            isLinklist (item) {
                return item.type == 'linklist';
            }
        },

        components: [
            Linklist,
            Singlelist
        ]
    }
</script>
