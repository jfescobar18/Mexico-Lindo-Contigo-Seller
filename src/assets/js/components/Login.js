import React from 'react';
import axios from 'axios';
import Modal from './Modal';

class Login extends React.Component {
    constructor(props) { // Init props and state
        super(props);
        this.state = {
            SellerUsername: '',
            SellerPassword: '',
            UsernameAlert: false,
            PasswordAlert: false,
            ShowModal: "0"
        };
        this.SellerUsername = this.handleSellerUsername.bind(this);
        this.SellerPassword = this.handleSellerPassword.bind(this);
    }

    handleSellerUsername = ({ target }) => {
        this.setState({
            SellerUsername: target.value
        });
    }
    handleSellerPassword = ({ target }) => {
        this.setState({
            SellerPassword: target.value
        });
    }

    handleLogin = () => {
        let _UsernameAlert = this.state.SellerUsername.length <= 0;
        let _PasswordAlert = this.state.SellerPassword.length <= 0;

        this.setState({
            UsernameAlert: _UsernameAlert,
            PasswordAlert: _PasswordAlert
        });

        if (!this.state.UsernameAlert && !this.state.PasswordAlert) {
            axios.post(`${process.env.API_URL}auth/seller-login`, {
                SellerUsername: this.state.SellerUsername,
                SellerPassword: this.state.SellerPassword
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }
    }

    OpenForgotModal = () => {
        this.setState({ ShowModal: "1" })
    }

    render() {
        return (
            <div className="login" >
                <div className="wrapper fadeInDown">
                    <div className="formContent">
                        <h2 className="active"> Sign In </h2>

                        <div className="fadeIn first">
                            <i className="fas fa-user-circle icon"></i>
                        </div>

                        <form>
                            <input type="text" onChange={this.handleSellerUsername} className="fadeIn second" name="login" placeholder="login" />
                            <small className={this.state.UsernameAlert ? "active" : ""} >This field cannot be empty</small>

                            <input type="password" onChange={this.handleSellerPassword} className="fadeIn third" name="login" placeholder="password" />
                            <small className={this.state.PasswordAlert ? "active" : ""} >This field cannot be empty</small>

                            <input type="button" onClick={this.handleLogin} className="fadeIn fourth" value="Log In" />
                        </form>

                        <div className="formFooter">
                            <a className="underlineHover" href="#" onClick={this.OpenForgotModal}>Forgot Password?</a>
                        </div>
                    </div>
                </div>

                <Modal Show={this.state.ShowModal}
                    Header="Forgot Password"
                    Body="<p>For password recovery please contact support<p/>"
                    Footer="" />
            </div>
        )
    }
}

export default Login;