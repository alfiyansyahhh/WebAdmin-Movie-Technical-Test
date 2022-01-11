import { createStore, combineReducers, applyMiddleware } from 'redux'
import genreReducer from './reducer/ListGenre'
import listMovieReducer from './reducer/ListMovie'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    Genre: genreReducer,
    ListMovie: listMovieReducer,
})
const middleware = applyMiddleware(thunk,logger)
const store = createStore(reducers, middleware)

export default store