const INITIAL_STATE = {
    currentRegister: {
        email: "",
        password: ""
    },
    currentLogin: {
        email: "",
        password: ""
    }
};

const userReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_REGISTER":
            return {
                ...previousState,
                currentRegister: {
                    ...previousState.currentRegister,
                    [action.payload.name]: action.payload.value
                }
            };
        case "SET_CURRENT_LOGIN":
            return {
                ...previousState,
                currentLogin: {
                    ...previousState.currentLogin,
                    [action.payload.name]: action.payload.value
                }
            };
        default:
            return previousState;
    }
};

export default userReducer;
