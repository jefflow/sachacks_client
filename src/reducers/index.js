import { TOGGLEADMINBARSUCCESS } from "../actions";

const initialState = {
    adminBarView: true
};

export const Reducer = ( state = initialState, action ) => {

    if (action.type === TOGGLEADMINBARSUCCESS) {
        return Object.assign({}, state, {
            adminBarView: action.payload
        });
    }
    return state;
};