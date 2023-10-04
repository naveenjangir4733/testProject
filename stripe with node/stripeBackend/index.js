// const express = require('express')
// const cors = require('cors')
// const stripe = require("stripe")("pk_test_51Nx3pMSGaOUlb41FJpwyaoDzOkx1s4MIfacsrF8x8RMMIJM5SCgXRPpX2ZKyfVHrxFvx0s424HjMio6q5sgG2pi1003vMDFTnR")
// const uuid = require('uuid/v4')
// const app = express()
//
// app.use(express.json())
// app.use(cors())
//
// // routes
//
// app.get('/',(req,res)=>{
//     res.send('it works at online')
// })
//
// app.post("/payment",(req,res)=>{
//      const {product,token} = req.body
//     console.log('product', product)
//     console.log('price', product.price)
//
//     const idempontencyKey = uuid()
//
//     return stripe.customers.create({
//         email:token.email,
//         source:token.id,
//
//     }).then((customer)=>{
// stripe.charges.create({
//
// },{idempontencyKey})
//     }).then((result)=>{
//         res.status(200).json(result)
//     })
// })
// // listen
//
// app.listen(8282,()=>{
//     console.log('Listening at port 8282')
// })


// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Nx3pMSGaOUlb41Fk0fqxaeXhkT8KlLA7uWCcJXRG6KJ3FdblVfq8rCTCYVMYurfEN65FRSrmdGbT9IkWjzBsRYJ00hsWdmzRe');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));