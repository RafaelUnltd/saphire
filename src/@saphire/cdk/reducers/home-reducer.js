import { ActionTypes } from '../actions/home-actions'

const initialState = {
  isFetching: false,
  error: null,
  poster: null,
  recent: [],
  popular: [],
  trending: []
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        poster: action.poster,
        recent: action.recent,
        popular: action.popular,
        trending: action.trending,
        error: null
      }
    case ActionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        poster: null,
        recent: [],
        popular: [],
        trending: [],
        error: null
      }
    default:
      return state
  }
}

export default HomeReducer
