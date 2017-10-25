var initialState = {
    users: []
};

export const users = (state = initialState, action) => {
    if (action.type === 'USER_RETRIEVED') {
        let users = action.payload;
        let newState = Object.assign({}, state);
        newState.users = users;
        return newState;
    } else {
        return state;
    }
};