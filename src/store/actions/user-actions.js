import auth from "firebase/config-utils";

export const setCurrentRegister = event => {
    return {
        type: "SET_CURRENT_REGISTER",
        payload: {
            name: event.target.name,
            value: event.target.value
        }
    };
};

export const setCurrentLogin = event => {
    return {
        type: "SET_CURRENT_LOGIN",
        payload: {
            name: event.target.name,
            value: event.target.value
        }
    };
};

export const register = () => {
    console.log("Registro");
    return (dispatch, getState) => {
        console.log(getState());
        let {
            email,
            password
        }=getState().user.currentRegister;
        auth.createUserWithEmailAndPassword(email, password).then( response => console.log(response)).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        //    ...
        console.log(errorCode,errorMessage);
        });
    };
};
