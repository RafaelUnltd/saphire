import { take, all, call, put } from 'redux-saga/effects'

import { ActionTypes, fetchMoviesSuccess, fetchMoviesError } from '../actions/home-actions'
import MoviesResources from '../resources/movies-resources'

const loadMovies = function * () {
  while (true) {
    yield take(ActionTypes.FETCH_MOVIES)

    try {
      const [popularResponse, recentResponse, trendingResponse] = yield all([
        call(MoviesResources.getPopularMovies),
        call(MoviesResources.getRecentMovies),
        call(MoviesResources.getTrendingMovies)
      ])

      const poster = popularResponse.data.results[0]
      const recent = recentResponse.data.results
      const popular = popularResponse.data.results
      const trending = trendingResponse.data.results

      yield put(
        fetchMoviesSuccess(
          poster,
          recent,
          popular,
          trending
        )
      )
    } catch (e) {
      yield put(fetchMoviesError(e.response))
    }
  }
}

export default loadMovies
