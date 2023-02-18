import React from 'react';
import "./SendMessage/SendMessage.css";

const SendMessage = () =>
{
    return (
        <div>

            <div className='msb_SendMessage_form_div'>
                <form action="">

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="Email" id="Email" required />
                    </div>
                    {/* <div>
                        <label htmlFor="">Message</label>
                        <input className='msb-mess-inp' type="text" name="Message" id="Message" required />
                    </div> */}
                    <div>
                        <label htmlFor="">Message</label>
                        <textarea className='msb-mess-inp' required name="Message" id="Message" cols="20" rows="6"></textarea>
                    </div>
                    <div>
                        <button type='submit'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
            {/* <div className='text-center pt-6'>
                <a href="/recoverpass" className='underline underline-offset-4 text-orange-400'>
                    Forgot Password !
                </a>
            </div> */}

        </div>
    );
}

export default SendMessage;
