import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from "./actionTypes"
import {auth} from "../firebase"

const registerStart = () => ({
    type: REGISTER_START,
});

const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
});

const registerFail = (error) => ({
    type: REGISTER_FAIL,
    payload: error
})

const loginStart = () => ({
    type: LOGIN_START,
});

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error
})

const logoutStart = () => ({
    type: LOGOUT_START,
});

const logoutSuccess = (user) => ({
    type: LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
    type: LOGOUT_FAIL,
    payload: error
})

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart)
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error) => dispatch(registerFail(error.message)))
    }
}

export const loginInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(loginStart)
        auth.signInWithEmailAndPassword(email, password).then(({user}) => {
            dispatch(loginSuccess(user))
        }).catch((error) => dispatch(loginFail(error.message)))
    }
}

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart)
        auth.signOut()
        .then((res) => dispatch(logoutSuccess()))
        .catch((error) => dispatch(logoutFail(error.message)))
    }
}