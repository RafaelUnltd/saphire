import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { ActionTypes } from '../actions/application-actions'

const initialState = {
  name: null,
  email: null,
  language: null,
  movieSelection: []
}

const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SUBSCRIBE_USER:
      return {
        ...state,
        name: action.name,
        email: action.email,
        language: action.language
      }
    case ActionTypes.ADD_MOVIE:
      return {
        ...state,
        movieSelection: [action.movie, ...state.movieSelection]
      }
    default:
      return state
  }
}

export default persistReducer({ key: 'root', storage }, ApplicationReducer)
