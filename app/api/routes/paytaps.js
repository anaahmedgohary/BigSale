const express = require('express');
const router = express.Router();
const axios = require("axios");
const baseURL = process.env.PAYTAPS_REQ_URL;










router.post("/paytaps", async (req, res) =>
{
    let cartAmount = await req.body.cartTotal;
    let apiKey = process.env.PAYTAPS_API_KEY;
    let reqBody = {
        "profile_id": process.env.PAYTAPS_PROFILE_ID,
        "tran_type": "sale",
        "tran_class": "ecom",
        "cart_description": "Description labtop sale",
        "cart_id": "Unique_order_reference123456987",
        "cart_currency": "EGP",
        "cart_amount": cartAmount,
        "callback": "https://big-sale-1.vercel.app/checkoutcart",
        "return": "https://big-sale-1.vercel.app/paymentsuccess"
    }

    try
    {
        axios.post(`${baseURL}`, reqBody,
            { headers: { 'Authorization': `${apiKey}` } })
            .then(async response =>
            {
                let redirectUrl = await response.data.redirect_url;
                // console.log(response.data);

                console.log("payment request sent")
                // res.send(redirectUrl);
                res.json({ redirectUrl: redirectUrl });
                // res.redirect(redirectUrl);

            }).catch(e => console.log(e))
    } catch (error)
    {
        console.log(error)
        res.send(error)
    }

})






module.exports = router