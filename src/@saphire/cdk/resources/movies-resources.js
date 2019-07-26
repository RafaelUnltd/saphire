import api from './api'

class MoviesResources {
  static getLatestMovie () {
    return api.get('/movie/latest')
  }

  static getPopularMovies () {
    return api.get('/movie/popular')
  }

  static getRecentMovies () {
    return api.get('/movie/now_playing')
  }

  static getTrendingMovies () {
    return api.get('/movie/top_rated')
  }
}

export default MoviesResources
