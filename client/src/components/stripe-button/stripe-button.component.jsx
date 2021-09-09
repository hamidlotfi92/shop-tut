// this component uses the react-stripe-checkout library. that provides an easy way to make a purchase in stripe


//react
import React from 'react';
//components
import StripeCheckout from 'react-stripe-checkout';


// axios is a library to fetch and get data from server
import axios from 'axios';

const StripeCheckoutButton=({price})=>{
    //stripe needs the price in cents so we have to convert USD to cents
    const priceForStripe = price*100;
    const publishableKey='pk_test_51JSzzMItuOt5mp89ci0StJ6uurUqvrIVTPalf9nAXMghY6epmMOI7ioNGszrAFAnP5jM4nSR9qnovuwNzRynVQsK00LPbuJh0Z'
    //whit tiken we would pass it to backend to process the payment
    const onToken = token => {
        // axios getsfolloing parameters and returns a promiss 
        axios({
            url: 'payment',
            method:'post',
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(' There was an issu with your payment please make sure to use the provided credit card')
        })
    }
    return (
        <StripeCheckout 
            lable='Pay Now'
            name='MY F shop'
            billingAddress
            shippingAddress
            img=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            //token in OnSUccess callback that trigers wehn we submit
            token={onToken}
            stripeKey={publishableKey}
            />

)}

export default StripeCheckoutButton;