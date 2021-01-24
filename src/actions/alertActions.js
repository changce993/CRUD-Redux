import {
    SHOW_ALERT,
    HIDE_ALERT,
} from '../types';

export const showAlertAction = alert => {
    return dispatch => {
        dispatch(createAlert(alert));
    }
};

const createAlert = alert => ({
    type:SHOW_ALERT,
    payload: alert
});

export const hiddeAlertAction = () => {
    return dispatch => {
        dispatch(hiddeAlert());
    }
};

const hiddeAlert = () => ({
    type:HIDE_ALERT
});