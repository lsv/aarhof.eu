export default {
    getWishes (http) {
        return http.get('https://cdn.rawgit.com/lsv/aarhof.eu/master/wishes.json');
    }
}
