import React from 'react'
//import { Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import './home.css';
import emailjs from '@emailjs/browser';
//import { format } from 'date-fns';

function Flights(props) {

  let makePayment =async (token) => {
       
       //console.log(token)
     
    try {  
      emailjs.send("service_zqytxdk","template_3vgw6wm",{
        to_name: `${token.email}`,
        from_name: "BOOK FLIGHT",
        message: `BOOKING SUCCESSFUL... Flight:${props.data.flightname},From:${props.data.From},To:${props.data.To},Arrival Time:${props.data.Arrival},
        -Departure:${props.data.Departure},`,
        reply_to: "nil",
        },"WrrbSh-MJdn0Sm0WO");
    
        //      await axios.post(`/payment`,props.data,{
        //   headers: {
        //     'Authorization': `${localStorage.getItem("react_app_token")}`
        //   }
        // });
        // alert(res.data.message)
        
      } catch (error) {console.log(error)}
     
    
   // navigate(`/orders`)
  }
  
return (
    <><>
    <StripeCheckout name='FLIGHT BOOKING' amount={props.data.price*100} currency='INR'
    stripeKey='pk_test_51LddhjSI5h877L4qnnk886Y8sUn2LDjaFvYEC55fbFmYD5fyezbaO6tMOKatgIIdrDXgIfLzY10MBRTjwQ1EsCOt00RaQ44Xv6'
    token={makePayment}>
    <div>
        <div className="card mt-4">
  <h3 className="card-header">{props.data.flightname}</h3>
  <div className="card-body">
    <h5 className="card-title">From:<b>{props.data.From.toUpperCase()}</b> To:<b>{props.data.To.toUpperCase()}</b></h5>
    <p className="card-text">Arrival Time:{props.data.Arrival} Departure:{props.data.Departure}</p>
    <p className="card-text">Some advance Booking have many offers shown in below...
    {/* <Link to={`/Advancebook/${props.data._id}`} className='btn btn-primary'>Click get Offers</Link> */}
    
       <p>Food Offers:{props.data.Foodoffers}</p></p>
       <h5>Date:{props.data.date}</h5>
    <button className="btn btn-primary ml-4">Go to <b>{props.data.To} ₹{props.data.price}</b></button>
  </div>
</div>
    </div>
    </StripeCheckout>
    </>
    <>
    <StripeCheckout name='ADVANCE BOOK' amount={(props.data.price-props.data.Offers)*100} currency='INR'
    stripeKey='pk_test_51LddhjSI5h877L4qnnk886Y8sUn2LDjaFvYEC55fbFmYD5fyezbaO6tMOKatgIIdrDXgIfLzY10MBRTjwQ1EsCOt00RaQ44Xv6'
    token={makePayment}>
    <div className='advance'>
    <h5>Advance Booking Offer:{props.data.Offers}</h5>
    <button className='btn btn-primary'>Advance Booking ₹{props.data.price-props.data.Offers}</button>
    </div>
    </StripeCheckout>
    </>
    </>
    
  )
}

export default Flights;

