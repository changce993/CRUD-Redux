import {
    SHOW_ALERT,
    HIDE_ALERT,
} from '../types';

import { IalertState } from '../types';

const initialState: IalertState = {
    alert: {
        type:'',
        msg:''
    }
};

const alertReducer = (state = initialState, action: {type: string, payload: any}) => {
    switch ( action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
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

export default alertReducer;
