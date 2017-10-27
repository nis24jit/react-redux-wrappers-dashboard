var initialState = {
    period: 7
};

export const period = (state = initialState, action) => {
    if (action.type === 'PERIOD_CHANGED') {
        let period = action.payload;
        let newState = Object.assign({}, state);
        newState.period = period;
        return newState;
    } else {
        return state;
    }
};