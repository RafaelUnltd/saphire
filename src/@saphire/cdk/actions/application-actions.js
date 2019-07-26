export const ActionTypes = {
  SUBSCRIBE_USER: '@ApplicationActions:SUBSCRIBE_USER',
  ADD_MOVIE: '@ApplicationActions: ADD_MOVIE'
}

export const subscribeUser = (name, email, language) => ({
  type: ActionTypes.SUBSCRIBE_USER,
  name,
  email,
  language
})

export const addMovieToUserList = (movie) => ({
  type: ActionTypes.ADD_MOVIE,
  movie
})
