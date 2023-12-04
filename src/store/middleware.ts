import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
