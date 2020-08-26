import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.actions'

export const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">React Expense Tracker</h1>
            <p>Taste the thrill of accounting!</p>
            <button className="button" onClick={props.startLogin}>Login With Google</button>
        </div>
        
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);