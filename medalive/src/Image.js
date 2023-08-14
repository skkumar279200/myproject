import React from 'react';
import './Image.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {FaUserDoctor} from 'react-icons/fa6';
import {ImLab} from 'react-icons/im';
import {LuFileScan} from 'react-icons/lu';
import {BsFillHeartPulseFill} from 'react-icons/bs';
import {BsShieldFillPlus} from 'react-icons/bs';
import {BsThreeDots} from 'react-icons/bs';
function Image() {
  return (
    <><div className="container">
          <div className='image'>
              <a aria-label="" href="https://mfine.onelink.me/17Ed?af_banner=true&amp;pid=Website"><img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/homebanner_new.webp" alt="" /></a>
              <div className='container1'>
                  <div className='c1'>
                      <a aria-label="" href="https://www.mfine.co/consult" className="quick-link mob-view-link">
                          <div className="link-upper-wrap">
                              <div className="link-icons">
                                  <FaUserDoctor className='icon' />
                              </div>
                          </div>
                          <span className="hdn6_sb blue">
                              Consult
                          </span>
                      </a>
                  </div>
                  <div className='c2'>
                      <a aria-label="" href="https://www.mfine.co/lab-test" className="quick-link mob-view-link">
                          <div className="link-upper-wrap">
                              <div className="link-icons">
                                  <ImLab className='icon' />
                              </div>
                          </div>
                          <span className="hdn6_sb blue">
                              Lab Tests
                          </span>
                      </a>
                  </div>
                  <div className='c3'>
                      <a aria-label="" href="https://www.mfine.co/scans" className="quick-link mob-view-link">
                          <div className="link-upper-wrap">
                              <div className="link-icons">
                                  <LuFileScan className='icon' />
                              </div>
                          </div>
                          <span className="hdn6_sb blue">
                              Scans
                          </span>
                      </a>
                  </div>
                  <div className='c4'>
                      <a aria-label="" href="https://www.mfine.co/self-checks" className="quick-link">
                          <div className="link-upper-wrap">
                              <div className="link-icons">
                                  <BsFillHeartPulseFill className='icon' />
                              </div>
                          </div>
                          <span className="hdn6_sb blue">
                              Self Checks
                          </span>
                      </a>

                  </div>
                  <div className='c5'>
                      <a aria-label="" href="https://www.mfine.co/long-term-care-plans" className="quick-link">
                          <div className="link-upper-wrap">
                              <div className="link-icons">
                                  <BsShieldFillPlus className='icon' />
                              </div>
                          </div>
                          <span className="hdn6_sb blue">
                              Care Programs
                          </span>
                      </a>
                  </div>
                  <div className='c6'>
                      <div className="quick-link-others">
                          {/* <BsThreeDots/> */}
                      </div>
                  </div>
              </div>
          </div>
      </div><br></br><br></br></>
      
    
  );
}

export default Image;