import React from "react";
import './activity.css';
import {BsArrowRightShort} from 'react-icons/bs';
import pic12 from '../../../Assets/pic12.jpg';
import pic9 from '../../../Assets/pic9.jpg';
import pic10 from '../../../Assets/pic10.jpg';
import pic11 from '../../../Assets/pic11.jpg';
import pic2 from '../../../Assets/pic2.jpg';
const Activity=()=>
{
    return(
        <div className="activitySection">
        <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
            See All<BsArrowRightShort className="icon"/>

        </button>
        </div>

        <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={pic12} alt="Customer Image"/>
          
          <div className="customerDetails">
          <span className="name" >Ola Martha</span>
           <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={pic9} alt="Customer Image"/>
          
          <div className="customerDetails">
          <span className="name" >Ola Martha</span>
           <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={pic10} alt="Customer Image"/>
          
          <div className="customerDetails">
          <span className="name" >Ola Martha</span>
           <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={pic11} alt="Customer Image"/>
          
          <div className="customerDetails">
          <span className="name" >Ola Martha</span>
           <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={pic2} alt="Customer Image"/>
          
          <div className="customerDetails">
          <span className="name" >Ola Martha</span>
           <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minutes ago
          </div>
        </div>
        </div>
        </div>
    )
}
export default Activity;