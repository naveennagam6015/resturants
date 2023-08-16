import { legacy_createStore as createStore  } from "redux";
import { applyMiddleware } from "redux";
import reducer from "./Reducer/TableReducer";

import thunk from "redux-thunk";

const middleware = [thunk];


const Store = createStore(reducer, applyMiddleware(...middleware))

export default Store;