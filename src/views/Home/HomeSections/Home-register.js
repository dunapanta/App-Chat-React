import React from 'react';
import {connect}  from "react-redux";
import {
    setCurrentRegister,
    setCurrentLogin,
    register
} from "store/actions/user-actions";
import Login from "views/Autenticacion/iniciar sesion/login-component";
import Register from "views/Autenticacion/registro/Registrarse/register-component";
import '../../../App.css';
function HomeRegister(props){
    let {email:emailLogin,password:passwordLogin}=props.user.currentLogin;   
    let {
        email:emailRegister,
        password:passwordRegister
    } = props.user.currentRegister;
    return (
        <div className="App">

            <section className="Container"> 
                <Login
                    handleLoginForm={props.handleLoginForm}
                    email={emailLogin}
                    password={passwordLogin}
                />
                {/* <Register
                    handleRegisterForm={props.handleRegisterForm}
                    email={emailRegister}
                    password={passwordRegister}
                /> */}
            </section>
           
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


{/* <i class="far fa-address-card"></i> */}