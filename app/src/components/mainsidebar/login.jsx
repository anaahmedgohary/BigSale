import React from 'react';
import "./loginstyle/login.css";

const Login = () =>
{
    return (
        <div>

            <div className='msb_login_form_div'>
                <form action="">

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" required />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="" id="" required />
                    </div>
                    <div>
                        <button type='submit'>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
            <div className='text-center pt-6'>
                <a href="/recoverpass" className='underline underline-offset-4 text-gray-400 hover:text-gray-800'>
                    Forgot Password !
                </a>
            </div>

        </div>
    );
}

export default Login;
