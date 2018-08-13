import * as types from './clock-types';

const initialState = {
    timeRedux: new Date().toLocaleTimeString()
};

const reducer = (oldState = initialState, action) => {
    let newState = {...oldState};
    switch (action.type) {
        case types.UPDATE_TIME :
            newState.timeRedux = action.payload
    }

    return newState;
};

export default reducer;