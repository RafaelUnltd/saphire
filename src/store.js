import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

/**
 * Importing and setting action reducers
 * to map into a store state and sagas
 */
import ApplicationReducer from './@saphire/cdk/reducers/application-reducer'
import HomeReducer from './@saphire/cdk/reducers/home-reducer'
import rootSaga from './@saphire/cdk/sagas'

const Reducers = combineReducers({
  applicationState: ApplicationReducer,
  homeState: HomeReducer
})

/**
 * Creating store and persisting application
 * state
 */
const sagaMiddleware = createSagaMiddleware()
let middlewares = applyMiddleware(sagaMiddleware)

const Store = createStore(Reducers, compose(middlewares))
const Persistor = persistStore(Store)

sagaMiddleware.run(rootSaga)

export {
  Store,
  Persistor
}
