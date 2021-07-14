const axios = require('axios')

const url = "http://localhost:8000/api/movies";

exports.getAllMovies = function () {
    return axios.get(url)
}
exports.getMovie = function (id) {
    return axios.get(url + '/' + id)
}