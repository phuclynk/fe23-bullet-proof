import { notification } from 'antd';
import { ROUTER_URL } from 'constants/index';
import {
    put,
    takeEvery
} from 'redux-saga/effects'
import { AuthAPI } from '../../api';
import history from '../../utils/history';
import {
    FAILURE,
    REQUEST,
    SUCCESS,
    USER_ACTION,
} from '../constants';

function* login(action) {
    try {
        const {
            data
        } = action.payload
        const response = yield AuthAPI.login(data);
        yield put({
            type: SUCCESS(USER_ACTION.LOGIN),
            payload: response,
        });
        yield notification.success({
            description: "Login success!"
        });

        if (response.data.user.role === "admin") {
            yield history.push(ROUTER_URL.ADMIN)
        }
        else {
            yield history.push(ROUTER_URL.HOME)
        }
    } catch (e) {
        yield put({
            type: FAILURE(USER_ACTION.LOGIN),
            payload: e.message
        });
        yield notification.error({
            description: "Incorrect account password!"
        });

    }
}

function* logout(action) {
    try {
        yield put({
            type: SUCCESS(USER_ACTION.LOGOUT),
            payload: action.payload
        });
    } catch (e) {
        yield put({
            type: FAILURE(USER_ACTION.LOGOUT),
            message: e.message
        });
    }
}

function* register(action) {
    try {
        const {
            data
        } = action.payload;
        const response = yield AuthAPI.register(data);
        yield put({
            type: SUCCESS(USER_ACTION.REGISTER),
            payload: response.data
        });

        yield notification.success({
            description: "Register success!"
        });
        yield history.push(ROUTER_URL.LOGIN)
    } catch (e) {

        yield put({
            type: FAILURE(USER_ACTION.REGISTER),
            payload: e.response.data
        });
        yield notification.error({
            description: e.response.data
        });
    }
}


function* userSaga() {
    yield takeEvery(REQUEST(USER_ACTION.LOGIN), login);
    yield takeEvery(REQUEST(USER_ACTION.REGISTER), register);
    yield takeEvery(REQUEST(USER_ACTION.LOGOUT), logout);
}
export default userSaga;