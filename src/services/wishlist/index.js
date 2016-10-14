export default {
    getWishes (http) {
        return http.get('https://cdn.rawgit.com/lsv/wishlist/master/wishes.json');
    }
}
