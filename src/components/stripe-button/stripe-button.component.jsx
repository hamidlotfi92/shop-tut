import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    //stripe needs the price in cents so we have to convert USD to cents
    const priceForStripe = price*100;
    const publishableKey='pk_test_51JSzzMItuOt5mp89ci0StJ6uurUqvrIVTPalf9nAXMghY6epmMOI7ioNGszrAFAnP5jM4nSR9qnovuwNzRynVQsK00LPbuJh0Z'
    //whit tiken we would pass it to backend to process the payment
    const onToken=token=>{
        console.log(token);
        alert('Successful Payment')
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