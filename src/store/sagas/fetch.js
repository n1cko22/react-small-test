import { put, takeEvery} from 'redux-saga/effects'
import { LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} from "../actions/fetchAction";


function* fetchUser() {
        const json = yield fetch("https://randomuser.me/api/?results=50")
            .then(res => res.json());
        yield put({type: LOAD_USERS_SUCCESS, data: json});

}

export function* usersSaga() {
    yield takeEvery(LOAD_USERS_LOADING, fetchUser);
}

export default usersSaga;