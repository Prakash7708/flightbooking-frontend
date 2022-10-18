import React from 'react'
import './home.css';
import axios from '../axios';
import { useEffect, useState } from "react";
import Flights from './Flights';
function Home() {
    const [data, setData] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        flightData();
      },[]);
    
      let flightData = async () => {
        try {
          const res = await axios.get("/Flightdata");
          setData(res.data);
        }catch(err){
         console.log(err)
        }
      }
     
      let filterData=async()=>{
        //console.log(to,date)
        let query={
            to:`${to}`,
            date:`${date}`
        }
        try {
             const res = await axios.post(`/filterdata/${from}`,query);
             setData(res.data);
          }catch(err){
           console.log(err)
          }
      }

return (
    <>
      <div className='navbar1'>
        <h4>Flights</h4>
        <h4 className='book'><b>Bookings</b></h4>
        </div>
        <div className='row'>
            <div className='col-lg-4'>
                <img src='https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='img'></img>
                <img src='https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='img'></img>
                <img src='https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='img'></img>
            </div>
        <div className='col-lg-8 flights'>
            <div className='Search'>
            <label>From</label>
            <input placeholder='Enter From' onChange={(e) => setFrom(e.target.value)}></input>
            <label>To</label>
            <input placeholder='Enter To' onChange={(e) => setTo(e.target.value)}></input>
            <label>Date</label>
            <input type={"date"} placeholder='Enter Date' onChange={(e) => setDate(e.target.value)}></input>
            <button onClick={()=>filterData()} className='btn btn-outline-primary'>Search</button>
            </div>
            <div>All Flights</div>
        {
            data.map((input)=>{
            return <Flights data={input}/>})
        }

        </div>
        </div>
    </>
   
  )
}

export default Home