
import {default as reduxSaga} from "./reducers/reducerFetch"
import {combineReducers} from "redux";

const reducers = combineReducers({
    reduxSaga,
});

export default reducers;