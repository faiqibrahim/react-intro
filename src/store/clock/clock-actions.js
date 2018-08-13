import {UPDATE_TIME} from "./clock-types";
import axios from "axios/index";

const _updateTime = (payload) => {
    return {
        type: UPDATE_TIME,
        payload
    };
};

export const updateTime = () => {
    return (dispatch, getState) => {
        // processing ->true dispatch(true);


        axios.get('http://localhost:3001/time')
            .then((response) => {
                console.log('response', response);
                let {data} = response;
                dispatch(_updateTime(data.time));

                // processing ->true dispatch(false);

            })
            .catch(err => {
                let {response} = err;
                console.error(err, response);
                // Some error => dispatch();
                // processing ->true dispatch(false);
            });
    };
};