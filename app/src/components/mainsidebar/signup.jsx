import React from 'react';
import "./signupstyle/signup.css";

const Signup = () =>
{
    return (
        <div>

            <div className='msb_signup_form_div'>
                <form action="">
                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="" required />
                    </div>
                    <div>
                        <label htmlFor="">Phone</label>
                        <input type="tel" name="" id="" required />
                    </div>
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
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Signup;
