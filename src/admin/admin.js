import React from 'react';
import { useFormik } from "formik";
import axios from '../axios';
import './admin.css';
function Admin() {
    const formik = useFormik({
        initialValues: {
          flightname: "",
        },
        onSubmit: async (values) => {
          //console.log(values)
         try{
            await axios.post(`/flights`, values);
         }catch(err){
            console.log(err)
         }
        },
      });

return (
    <>
    <div className='row'>
        <div className='col-lg-4'>
        <img src='https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='img'></img>
        </div>
    <div className='col-lg-8 back'>
        <h3>Make Bookings</h3>
      <form onSubmit={formik.handleSubmit}>
      <div className="row admintable">
          <div className="col-lg-12">
            <label>Flightname</label>
            <input type={"text"} placeholder={"Flightname"} className={"form-control"} name={"flightname"}value={formik.values.flightname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>From</label>
            <input type={"text"} placeholder={"From"} className={"form-control"} name={"From"}value={formik.values.From}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>To</label>
            <input type={"text"} placeholder={"To"} className={"form-control"} name={"To"}value={formik.values.To}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Departure</label>
            <input type={"text"} placeholder={"Departure"} className={"form-control"} name={"Departure"}value={formik.values.Departure}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Arrival</label>
            <input type={"text"} placeholder={"Arrival"} className={"form-control"} name={"Arrival"}value={formik.values.Arrival}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>FoodOffers</label>
            <input type={"text"} placeholder={"Food Offers"} className={"form-control"} name={"Foodoffers"}value={formik.values.Foodoffers}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Offers</label>
            <input type={"text"} placeholder={"Offers"} className={"form-control"} name={"Offers"}value={formik.values.Offers}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Price</label>
            <input type={"text"} placeholder={"Price"} className={"form-control"} name={"price"}value={formik.values.price}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Date</label>
            <input type={"text"} placeholder={"Date"} className={"form-control"} name={"date"}value={formik.values.date}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type={"submit"} className={"btn btn-primary form-control"}/>
          </div>
          </div>
      </form>
      </div>
      </div>
      </>
  )
}

export default Admin