import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import {
    SHOW_ALERT,
    HIDE_ALERT,
    IalertState,
} from '../types';

export const showAlertAction = (alert: IalertState): ThunkAction<void, RootState, unknown, Action<string>> => {
    return dispatch => {
        dispatch(createAlert(alert));
    }
};

const createAlert = (alert: IalertState) => ({
    type:SHOW_ALERT,
    payload: alert
});

export const hiddeAlertAction = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return dispatch => {
        dispatch(hiddeAlert());
    }
};

const hiddeAlert = () => ({
    type:HIDE_ALERT
});