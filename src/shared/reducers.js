import userReducer from './user'
import plantReducer from '../components/app/plant/plant-reducers'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    userReducer,
    plantReducer
})

export default reducers
