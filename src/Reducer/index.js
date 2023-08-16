import {combainReducers} from "redux";
import tablereducer from "./TableReducer";  
const reducer = combainReducers({
    tablereducer : tablereducer
})
export default reducer