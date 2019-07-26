export const ActionTypes = {
  FETCH_MOVIES: '@HomeActions:FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS: '@HomeActions:FETCH_SUCCESS',
  FETCH_MOVIES_ERROR: '@HomeActions:FETCH_MOVIES'
}

export const fetchMovies = (id) => ({
  type: ActionTypes.FETCH_MOVIES,
  isFetching: true
})

export const fetchMoviesSuccess = (poster, recent, popular, trending) => ({
  type: ActionTypes.FETCH_MOVIES_SUCCESS,
  isFetching: false,
  poster,
  recent,
  popular,
  trending
})

export const fetchMoviesError = (error) => ({
  type: ActionTypes.FETCH_MOVIES_ERROR,
  isFetching: false,
  error
})
