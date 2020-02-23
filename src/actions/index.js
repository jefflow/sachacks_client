import { API_BASE_URL } from "../config";
import axios from 'axios';

const API = API_BASE_URL;


// THIS ARE ALL THE TYPE SELECTORS
export const TOGGLEADMINBARSUCCESS = "TOGGLEADMINBARSUCCESS";
export const toggleAdminBarSuccess = payload => ({
    type: TOGGLEADMINBARSUCCESS,
    payload
});

export const GETDRUGUSERBYSTATE = "GETDRUGUSERBYSTATE";
export const getDrugByState = payload => ({
    type: GETDRUGUSERBYSTATE,
    payload: payload
});

export const SETCOUNTRYSTATE = "SETCOUNTRYSTATE";
export const setCountryState = payload => ({
    type: SETCOUNTRYSTATE,
    payload: payload
});

export const GETCRIMEBYSTATE = "GETCRIMEBYSTATE";
export const getCrimeByState = payload => ({
    type: GETCRIMEBYSTATE,
    payload: payload
});

export const GETDEATHBYSTATE = "GETDEATHBYSTATE";
export const getDeathByState = payload => ({
    type: GETDEATHBYSTATE,
    payload: payload
});



// THIS ARE ALL THE DISPATCHERS
export const toggleAdminBarView  = toggle => dispatch => {
    console.log("triggered", toggle)
    dispatch(toggleAdminBarSuccess(toggle));
}

export const setStateView = state => dispatch => {
    console.log("triggered set state view", state)
    dispatch(setCountryState(state))
}

export const getCrimeByStateData  = state => dispatch => {
    console.log("triggered get crime by state", state)
    
    axios.get(`${API}/crime/${state}`)
    .then(a => {
        dispatch(getCrimeByState(a.data))
    })
}

export const getDeathByStateData  = state => dispatch => {
    console.log("triggered get death by state", state)
    
    axios.get(`${API}/death/${state}`)
    .then(res => {
        dispatch(getDeathByState(res.data))
    })
}

export const getDrugByStateData  = state => dispatch => {
    console.log("triggered get drug by state data", state)
    
    axios.get(`${API}/drug/user/${state}`)
    .then(a => {

        axios.get(`${API}/drug/order/${state}`)
        .then(b => {
            
            axios.get(`${API}/drug/supply/${state}`)
            .then(c => {
                axios.get(`${API}/drug/cost/${state}`)
                .then(d  => {
                    dispatch(getDrugByState([a.data,b.data,c.data,d.data]));
                })
            })
        })
        
    })
}