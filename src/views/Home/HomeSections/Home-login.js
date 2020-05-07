import React from 'react';
import { connect } from "react-redux";
import {
    
    setCurrentLogin,
    register
} from "store/actions/user-actions";
import Login from "views/Autenticacion/iniciar sesion/login-component";

import '../../../App.css';

function HomeLogin(props) {
    
    let {
        email: emailLogin,
        password: passwordLogin
    } = props.user.currentLogin;

    return (
        <div className="App">

            
            <section className="Container2">
                <Login
                    handleLoginForm={props.handleLoginForm}
                    email={emailLogin}
                    password={passwordLogin}
                />
            </section>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        
        handleLoginForm: event => dispatch(setCurrentLogin(event)),
       
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeLogin);


