export default {
    getWishes (http) {
        return http.get('https://raw.githubusercontent.com/lsv/aarhof.eu/master/wishes.json');
    }
}
