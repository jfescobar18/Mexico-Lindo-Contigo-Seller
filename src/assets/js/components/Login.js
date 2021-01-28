import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
    const SellerUsername = useFormInput('');
    const SellerPassword = useFormInput('');

    const handleLogin = () => {
        axios.post(`${process.env.API_URL}auth/seller-login`, {
            SellerUsername: SellerUsername,
            SellerPassword: SellerPassword
        }).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    return (
        <div className="login">
            <div className="wrapper fadeInDown">
                <div className="formContent">
                    <h2 className="active"> Sign In </h2>

                    <div className="fadeIn first">
                        <i className="fas fa-user-circle icon"></i>
                    </div>

                    <form>
                        <input type="text" {...SellerUsername} className="fadeIn second" name="login" placeholder="login" />
                        <input type="password" {...SellerPassword} className="fadeIn third" name="login" placeholder="password" />
                        <input type="button" onClick={handleLogin} className="fadeIn fourth" value="Log In" />
                    </form>

                    <div className="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;