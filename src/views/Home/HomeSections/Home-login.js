import React from 'react';
import { connect } from "react-redux";
import {
    
    setCurrentLogin,
    login
    
} from "store/actions/user-actions";
import Login from "views/Autenticacion/iniciar sesion/login-component";
import { withRouter } from 'react-router-dom'
import '../../../App.css';

function HomeLogin(props) {
    
    let {
        email: emailLogin,
        password: passwordLogin
    } = props.user.currentLogin;

    return (
        <div >
            {console.log("LAS PROPS", props)}
            <section >
                <Login
                    handleLoginForm={props.handleLoginForm}
                    handleLogin={props.handleLogin}
                    email={emailLogin}
                    password={passwordLogin}
                    {...props}
                />
            </section>
        </div>

    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        ownProps: ownProps
    };
};
const mapDispatchToProps = dispatch => {
    return {
        
        handleLoginForm: event => dispatch(setCurrentLogin(event)),
        handleLogin:()=> dispatch(login())
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeLogin));


