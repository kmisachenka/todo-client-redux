import { createStore, applyMiddleware  } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore() {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
