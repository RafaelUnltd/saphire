import { all } from 'redux-saga/effects'

import loadMovies from './load-movies'

const rootSaga = function * () {
  yield all([
    loadMovies()
  ])
}

export default rootSaga
