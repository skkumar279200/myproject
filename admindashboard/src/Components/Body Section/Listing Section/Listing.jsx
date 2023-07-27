import React from "react";
import './listing.css';
import {BsArrowRightShort} from 'react-icons/bs';
import{AiFillHeart} from 'react-icons/ai';
import{AiOutlineHeart} from 'react-icons/ai';
import pic4 from '../../../Assets/pic4.jpg';
import pic5 from '../../../Assets/pic5.jpg';
import pic6 from '../../../Assets/pic6.jpg';
import pic7 from '../../../Assets/pic7.jpg';
import pic8 from '../../../Assets/pic8.jpg';
import pic9 from '../../../Assets/pic9.jpg';
import pic10 from '../../../Assets/pic10.jpg';
import pic11 from '../../../Assets/pic11.jpg';
const Listing=()=>
{
    return(
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={pic4} alt="Image Name"/>
                    <h3>Coffee Plant</h3>
                </div>
                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={pic5} alt="Image Name"/>
                    <h3>Grow Spider Plant</h3>
                </div>
                <div className="singleItem">
                    <AiOutlineHeart className="icon"/>
                    <img src={pic4} alt="Image Name"/>
                    <h3>Wayfair Plant</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={pic5} alt="Image Name"/>
                    <h3>Indoor plant</h3>
                </div>

            </div>

            <div className="sellers flex">
            <div className="topSellers">
                <div className="heading flex">
                    <h3>Top Sellers</h3>
              <button className="btn flex">
                See All <BsArrowRightShort className="icon"/>

              </button>
              </div>

              <div className="card flex">
                <div className="users">
                    <img src={pic8} alt="User Image"/>
                    <img src={pic9} alt="User Image"/>
                    <img src={pic10} alt="User Image"/>
                    <img src={pic11} alt="User Image"/>
                </div>
                 <div className="cardText">
                    <span>
                        14.556 Plant sold<br/>
                        <small>
                            21 Sellers<span className="date">  7 Days</span>
                        </small>
                    </span>
                    
                 </div>

              </div>
            </div>


            <div className="featuredSellers">
                <div className="heading flex">
                    <h3>Feactured Sellers</h3>
              <button className="btn flex">
                See All <BsArrowRightShort className="icon"/>

              </button>
              </div>

              <div className="card flex">
                <div className="users">
                    <img src={pic8} alt="User Image"/>
                    <img src={pic9} alt="User Image"/>
                    <img src={pic10} alt="User Image"/>
                    <img src={pic11} alt="User Image"/>
                </div>
                 <div className="cardText">
                    <span>
                        28.556 Plant sold<br/>
                        <small>
                            26 Sellers<span className="date">  31 Days</span>
                        </small>
                    </span>
                    
                 </div>

              </div>
            </div>
            </div>
            </div>
    )
}
export default Listing;