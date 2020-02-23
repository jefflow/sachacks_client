import { TOGGLEADMINBARSUCCESS, GETDRUGUSERBYSTATE, SETCOUNTRYSTATE } from "../actions";

const initialState = {
    adminBarView: true,
    drug: {
        users: {
            x_axis : [],
            y_axis : []
        },
        orders: {
            x_axis : [],
            y_axis : []
        },
        supply: {
            x_axis : [],
            y_axis : []
        },
        cost: {
            x_axis : [],
            y_axis : []
        }
    },
    state: "CALIFORNIA"

};

const getDrugByUserHelper = (data) => {
    if (data) {
        let items = {
            x : [],
            y: []
        }
        data.slice(0,10).forEach(data => {
            items.x.push(data.drug_name)
            items.y.push(data.total_users)
        })
    
        return items
    }
    
    return []
}

export const Reducer = ( state = initialState, action ) => {
    
    switch(action.type) {
        case TOGGLEADMINBARSUCCESS:
            return Object.assign({}, state, {
                ...state,
                adminBarView: action.payload
            });
        case SETCOUNTRYSTATE:
            return Object.assign({}, state, {
                ...state,
                State: action.payload
            });
        case GETDRUGUSERBYSTATE:
            return Object.assign({}, state, {
                ...state,
                drug: {
                    user: {
                        x_axis : getDrugByUserHelper(action.payload[0]).x,
                        y_axis :  getDrugByUserHelper(action.payload[0]).y
                    },
                    order: {
                        x_axis : getDrugByUserHelper(action.payload[1]).x,
                        y_axis :  getDrugByUserHelper(action.payload[1]).y
                    },
                    supply: {
                        x_axis : getDrugByUserHelper(action.payload[2]).x,
                        y_axis :  getDrugByUserHelper(action.payload[2]).y
                    },
                    cost: {
                        x_axis : getDrugByUserHelper(action.payload[3]).x,
                        y_axis :  getDrugByUserHelper(action.payload[3]).y
                    }
                }
            });
    }

    return state;
};