// Redux
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
})

const initialState = {
};

const middleware = [thunk];

const store = createStore(state => state)

export default store