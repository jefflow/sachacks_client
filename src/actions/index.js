import { API_BASE_URL } from "../config";

const API = API_BASE_URL;

export const TOGGLEADMINBARSUCCESS = "TOGGLEADMINBARSUCCESS";
export const toggleAdminBarSuccess = payload => ({
    type: TOGGLEADMINBARSUCCESS,
    payload
});

export const toggleAdminBarView  = toggle => dispatch => {
    console.log("triggered", toggle)
    dispatch(toggleAdminBarSuccess(toggle));
}