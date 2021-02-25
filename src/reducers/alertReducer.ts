import {
    SHOW_ALERT,
    HIDE_ALERT,
    AlertAction
} from '../types';

import { IalertState } from '../types';

const initialState: IalertState = {
    alert: {
        type:'',
        msg:''
    }
};

export default (state = initialState, action: AlertAction): IalertState => {
    switch ( action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload.alert
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: state.alert
            }
        default:
            return state;
    }
};