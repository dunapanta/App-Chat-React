import React from 'react';
import { connect } from "react-redux";
import {
    setCurrentRegister,

    register
}
    from "store/actions/user-actions";
import Register from "views/Autenticacion/registro/Registrarse/register-component";
import '../../../App.css';

function HomeRegister(props) {

    let {
        email: emailRegister,
        password: passwordRegister
    } = props.user.currentRegister;

    return (
        <div >

            <section >

                <Register
                    handleRegisterForm={props.handleRegisterForm}
                    handleRegister={props.handleRegister}
                    email={emailRegister}
                    password={passwordRegister}
                />
            </section>
            {/* <section className="Container2">
                <Login
                    handleLoginForm={props.handleLoginForm}
                    email={emailLogin}
                    password={passwordLogin}
                />
            </section> */}
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
        handleRegisterForm: event => dispatch(setCurrentRegister(event)),

        handleRegister: () => dispatch(register())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeRegister);