import axios from 'axios';
import React, { useState, useEffect } from 'react';

const baseURL = import.meta.env.VITE_LOCAL_BASE_URL || "/api";

const EmailSub = () =>
{
    // const baseURL = "http://127.0.0.1:4000/api"
    const [email, setEmail] = useState('');
    function handelSubmit(e)
    {
        e.preventDefault();
        // try
        // {
        axios
            .post(`${baseURL}/newsletter`, { email: email })
            // .get(`${baseURL}/newsletter`)

            .then((response) =>
            {
                console.log(response)
            })
            .catch((err) => { console.log(err) })

        // } catch (err)
        // {
        // console.log(err);
        // }
    };

    // useEffect(() =>
    // {
    //     axios
    //         .post(`${baseURL}/newsletter`, { email: "qqq" })
    //         // .get(`${baseURL}/newsletter`)

    //         .then((response) =>
    //         {
    //             console.log(response);
    //         })
    //         .catch((err) => { console.log(err) })
    // }, [])

    // useEffect(() =>
    // {
    //     axios(`${baseURL}`, {
    //         method: 'GET',
    //     })
    //         .then(response =>
    //         {
    //             // console.log(response.data)
    //         }).catch(e =>
    //         {
    //             console.log(e);
    //         })
    // }, [])


    return (
        <div className='newsletter-div follow-subscribe-col'>
            <h4>Join Newsletter for new offers</h4>
            <form className='newsletter-form' onSubmit={handelSubmit}>
                <input className='email-input' type="email" name="email" id="newsletteremail" value={email} required placeholder='Your Email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                {/* <input className='sub-input' type="submit" value="Subscribe" /> */}
                <button className='sub-input' type='submit'>Subscribe</button>
            </form>
        </div>
    );
}

export default EmailSub;
