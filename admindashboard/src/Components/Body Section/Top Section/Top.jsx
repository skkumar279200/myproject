import React from "react";
import './top.css';
import {BiSearchAlt} from 'react-icons/bi';
import {AiOutlineMessage} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BsArrowRightShort} from 'react-icons/bs';
import {BsQuestionCircle } from 'react-icons/bs';
import pic1 from '../../../Assets/pic1.jpg';
import pic3 from '../../../Assets/pic3.jpg';
import video1 from '../../../Assets/video1.mp4';
const Top=()=>
{
    return(
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                   <h1>Welcome to Planti.</h1>
                   <p>Hello IsraTech,Welcome Back!</p>
                </div>

            <div className="searchBar flex">
                 <input type="text" placeholder="Search Dashborad..." ></input>
                 <BiSearchAlt className="icon"/>
            </div>
            <div className="adminDiv flex">
             <AiOutlineMessage className="icon"/>
             <IoMdNotificationsOutline className="icon"/>
             <div className="adminImage">
                <img src={pic1} alt="Admin Image" />

             </div>
            </div>
            </div>

            <div className="cardSection flex">
            <div className="rightCard flex">
                <h1>Create and sell extraordinary products</h1>
                {/* <p>The World's fast growing industry today are natural made  products!</p> */}
                <div className="button flex">
                    <button className="btn">Explore More</button>
                    <button className="btn transparent">Top Selllers</button>
                </div>
                 <div className="videoDiv">
                    <video src={video1} autoPlay loop muted></video>
                 </div>
            </div>

          <div className="leftCard flex">
            <div className="main flex">
             <div className="textDiv">
                <h1>My stat</h1>
                <div className="flex">
                    <span>
                        Today <br/><small>4 Orders</small>
                    </span>
                    <span>
                        This Month <br/><small>175 Orders</small>
                    </span>
                </div>
              
              <span className="flex link">
               Go to my orders <BsArrowRightShort className="icon"/>
              </span>
                    
                
             </div>

             <div className="imgDiv">
              <img src={pic3} alt="Image Name"></img>
             </div>
             
            <div className="sideBarCard">
             <BsQuestionCircle  className="icon"/>
             <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>Having troule in planti,please contact us from  for more  questions.</p>
                <button className='btn'>Go to help  center</button>
             </div>
            </div>
            </div>
            </div>

            </div>
        </div>
    )
}
export default Top;