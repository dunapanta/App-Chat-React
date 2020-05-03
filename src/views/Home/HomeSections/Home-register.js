import React from 'react';
import {connect}  from "react-redux";
import {
    setCurrentRegister,
    setCurrentLogin,
    register
} from "store/actions/user-actions";
import Login from "views/Autenticacion/iniciar sesion/login-component";
import Register from "views/Autenticacion/registro/Registrarse/register-component";

function HomeRegister(props){
    let {email:emailLogin,password:passwordLogin}=props.user.CurrentLogin;   
    let {
        email:emailRegister,
        password:passwordRegister
    } = props.user.CurrentRegister;
    return (
        <div className="App">
            <Login
                handleLoginForm={props.handleLoginForm}
                email={emailLogin}
                password={passwordLogin}            
            />
            <Register
                handleRegisterForm={props.handleRegisterForm}
                email={emailRegister}
                password={passwordRegister}            
            />
        </div>

    );
}

const mapStateToProps = state=>{
    return {
        user:state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleRegisterForm: event => dispatch(setCurrentRegister(event)),
        handleLoginForm: event => dispatch(setCurrentLogin(event)),
        handleRegister: event => dispatch(register())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeRegister);