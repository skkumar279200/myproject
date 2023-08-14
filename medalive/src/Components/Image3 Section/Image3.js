import React,{useState} from "react";
import './Image3.css';
import {BsClock} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {ImLab} from 'react-icons/im';
import {BiSearch} from 'react-icons/bi';
import {FaPrescriptionBottleAlt} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';
import {FaUserDoctor} from 'react-icons/fa6';
import Slider from "react-slick";


function LeftArrow(props) {
    const { onClick } = props;
    return (
      <button className="arrow left-arrow" onClick={onClick}>
        prev
      </button>
    );
  }
  
  function RightArrow(props) {
    const { onClick } = props;
    return (
      <button className=" arrow right-arrow" onClick={onClick}>
        next
      </button>
    );
  }
  
function Image3() {
    const [activeTab, setActiveTab] = useState('Popular HealthChecks');
      
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    const settings3 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />
      };
    return (

        <><><><div className='doctordetail2'>
            <div className="mobile-close" />
            <div className="mob-img">

                <div className="offer-img">
                    {/* <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Healthcare_How_it_works.webp" alt width="100%" height="100%" loading="eager" /> */}
                </div>
            </div>
            <div className="how-it-works3">
                <h3 className="hdn6_sb">
                    How does it work?
                </h3>
                <div className="icon-wrap">
                    <div className="icon5">
                        <BiSearch className='icon51' />
                    </div>
                    <p className="pp1">Browse By Tests</p>
                </div>
                <div className="icon-wrap">
                    <div className="icon5">
                        <ImLab className='icon52' />
                    </div>
                    <p className="pp2">Select a lab</p>
                </div>
                <div className="icon-wrap">
                    <div className="icon5">
                        <AiOutlineHome className='icon53' />
                    </div>
                    <p className="pp3">Same day sample collection at-home or at-center</p>
                </div>
                <div className="icon-wrap">
                    <div className="icon5">
                        <FaPrescriptionBottleAlt className='icon54' />
                    </div>
                    <p className="pp4">Get your reports online</p>
                </div>
            </div>
            <div className="how-it-works4">
                <h3 className="how-it-works-light-title">
                    Post consultation you can…
                </h3>
                <div className="icon-wrap">
                    <div className="icon6">
                        <FaUserDoctor className='icon61' />
                    </div>
                    <p className='p2'>Consult a doctor</p>
                </div>
                <div className="icon-wrap">
                    <div className="icon6">
                        <ImLab className='icon62' />
                    </div>
                    <p className='p3'>Order Medicines</p>
                </div>
            </div>
        </div>


            <div className="image3container">
                <div class="section-header-left1">
                    <h2 class="hdn3_B blue">
                        Book X-rays, MRIs and Scans
                    </h2>
                    <div class="section-header-icons1">
                        <div class="icon-wrap">
                            <div class="icon4">
                                <ImLab className='icon41' />
                            </div>
                            <p>NABL accredited labs for accurate results</p>
                        </div>
                        <div class="icon-wrap">
                            <div class="icon4">
                                <FiUsers className='icon41' />
                            </div>
                            <p>3L+ patients served so far</p>
                        </div>
                        <div class="icon-wrap">
                            <div class="icon4">
                                <BsClock className='icon41' />
                            </div>
                            <p>Same day digital reports*</p>
                        </div>
                    </div>
                    <img className='userpic' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/header-img-2.webp" alt="" loading="lazy"></img>
                </div>
            </div>

            <div className='fullactivetab'>
                <ul className="nav nav-pills mb-3" role="tablist">
                    <li className="nav-item">
                        <button
                            className={`nav-link consultTab ${activeTab === 'Popular HealthChecks' ? 'active' : ''}`}
                            data="Popular HealthChecks"
                            type="button"
                            onClick={() => handleTabClick('Popular HealthChecks')}
                        >
                            Popular HealthChecks
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link consultTab ${activeTab === 'Prescribed Lab Tests' ? 'active' : ''}`}
                            data="Prescribed Lab Tests"
                            type="button"
                            onClick={() => handleTabClick('Prescribed Lab Tests')}
                        >
                            Prescribed Lab Tests
                        </button>
                    </li>
                </ul>
            </div>

            <div className="data-container">
                {activeTab === 'Popular HealthChecks' && (
                    <ul>
                        <div className="fullcontainer2">
                            <Slider {...settings3}>
                                <div className="swiper-slide2" role="group" aria-label="1 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-advance-health-check">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-advance-health-check">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-advance-health-check">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-advance-health-check">
                                            <p className="test-badge">
                                                <strong>86+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Advanced Health Check                                                          </h2>
                                            <p className="test-type">
                                                Diabetes,Cholesterol &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹2499                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-advance-health-check"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-basic-health-check">
</a> */}
                                <div className="swiper-slide2" role="group" aria-label="2 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-basic-health-check">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-basic-health-check">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-basic-health-check">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-basic-health-check">
                                            <p className="test-badge">
                                                <strong>66+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Basic Health Check                                                          </h2>
                                            <p className="test-type">
                                                Thyroid, CBC &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹999                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-basic-health-check"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-complete-health-check">
</a> */} <div className="swiper-slide2" role="group" aria-label="3 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-complete-health-check">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-complete-health-check">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-complete-health-check">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-complete-health-check">
                                            <p className="test-badge">
                                                <strong>83+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Complete Health Check                                                          </h2>
                                            <p className="test-type">
                                                Diabetes profile, Liver function test, lipid profile &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹1999                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-complete-health-check"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-vital-health-check">
</a> */}

                                <div className="swiper-slide2 swiper-slide-prev" role="group" aria-label="4 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-vital-health-check">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-vital-health-check">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-vital-health-check">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-vital-health-check">
                                            <p className="test-badge">
                                                <strong>77+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Vital Health Check                                                          </h2>
                                            <p className="test-type">
                                                Diabetes profile, Liver function test, lipid profile &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹1499                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-vital-health-check"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-male">
</a> */}

                                <div className="swiper-slide2 swiper-slide-active" role="group" aria-label="5 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-male">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-male">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-male">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-male">
                                            <p className="test-badge">
                                                <strong>89+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Comprehensive  Health Check  - Male                                                          </h2>
                                            <p className="test-type">
                                                Diabetes profile, Liver function test, lipid profile &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹3999                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-male"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>


                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-female">
</a> */}

                                <div className="swiper-slide2 swiper-slide-next" role="group" aria-label="6 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-female">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-female">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-female">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-female">
                                            <p className="test-badge">
                                                <strong>89+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Comprehensive Health Check - Female                                                          </h2>
                                            <p className="test-type">
                                                Diabetes profile, Liver function test, lipid profile &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹3999                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-comprehensive-health-check-female"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>


                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-male">
</a> */}
                                <div className="swiper-slide2" role="group" aria-label="7 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-male">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-male">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-male">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-male">
                                            <p className="test-badge">
                                                <strong>97+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Taxsaver Health Package - Male                                                          </h2>
                                            <p className="test-type">
                                                Diabetes profile, Liver function test, lipid profile &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹4999                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-male"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>


                                {/* <a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-female">
</a> */}
                                <div className="swiper-slide2" role="group" aria-label="8 / 8"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-female">
                                </a><div className="gradient-box"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-female">
                                </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-female">
                                        </a><div className="box-gradient"><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-female">
                                            <p className="test-badge">
                                                <strong>97+</strong>
                                                TESTS
                                            </p>
                                            <h2 className="test-name">
                                                Ayushman Taxsaver Health Package - Female                                                          </h2>
                                            <p className="test-type">
                                                Diabetes profile, Liver function test, lipid profile &amp; more                                                          </p>
                                            <p className="test-price">
                                                ₹4999                                                                onwards</p>
                                        </a><a aria-label href="https://www.mfine.co/apps/ha/ayushman-taxsaver-health-package-female"><img className="test-icon" src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Arrow.svg" alt width="50%" height="50%" loading="lazy" /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 4" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 5" aria-current="true" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 6" /></div>
<div className="swiper-button-next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-4104ae46354474276" aria-disabled="false" />
<div className="swiper-button-prev" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-4104ae46354474276" aria-disabled="false" />
<span className="swiper-notification" aria-live="assertive" aria-atomic="true" /> */}



                            </Slider>
                        </div>


                    </ul>

                )}
                {activeTab === 'Prescribed Lab Tests' && (
                    <ul>
                        <div className="fullcontainer2">
                            <Slider {...settings3}>

                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/complete-blood-count-test-cbc">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/CBC_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Complete Blood Count Test (CBC)                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹349                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/complete-blood-count-test-cbc';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/covid-19-rt-pcr-test">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/Covid_19_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Covid-19 RT-PCR Test                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹750                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/covid-19-rt-pcr-test';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/hba1c-diabetes-test">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/Diabetes_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    HbA1c Diabetes Test                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹550                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/hba1c-diabetes-test';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/thyroid-panel">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/Thyroid_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Thyroid Profile                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹500                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/thyroid-panel';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/liver-function-test-lft">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/LFT_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Liver Function Test (LFT)                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹700                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/liver-function-test-lft';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/fasting-blood-glucose">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/Fasting_blood_glucose.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Fasting Blood Glucose                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹90                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/fasting-blood-glucose';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/lipid-profile-test">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/LPT_web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Lipid Profile Test                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹700                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/lipid-profile-test';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/urine-culture-sensitivity-report">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/Urine_Culture_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    Urine Culture &amp; Sensitivity Report                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹750                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/urine-culture-sensitivity-report';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide2">
                                    <a aria-label href="https://www.mfine.co/apps/ha/creactive-protein-crp-quantitative">
                                        <div className="border-box">
                                            <div className="box-img">
                                                <img src="https://assets.mfine.co/api/contentservice/attachments/downloadFromDb?fileName=homePage/Website_common/Homepage/lab_test/CRP_Web.webp" alt width="100%" height="100%" loading="lazy" />
                                            </div>
                                            <div className="box-content">
                                                <p className="hdn5_sb box-title">
                                                    C-Reactive Protein (CRP)                                                      </p>
                                                <div className="box-footer">
                                                    <div className="bb">
                                                        <p className="amt-title">Starts at</p>
                                                        <p className="amt">
                                                            ₹500                                                                    onwards</p>
                                                    </div>
                                                    <button className="button orange small-btn" onclick="window.location.href = 'https://www.mfine.co/apps/ha/creactive-protein-crp-quantitative';">Book
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" />
<div className="swiper-button-next swiper-button-disabled swiper-button-lock" tabIndex={-1} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-8cc5e1894964423b" aria-disabled="true" />
<div className="swiper-button-prev swiper-button-disabled swiper-button-lock" tabIndex={-1} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-8cc5e1894964423b" aria-disabled="true" />
<span className="swiper-notification" aria-live="assertive" aria-atomic="true" /> */}
                            </Slider>
                        </div>
                    </ul>
                )}
            </div><br></br>
        </><div className="viewall1">
                <button type="button" className="button orange line consultView aos-init aos-animate" onclick="window.location.href = 'https://www.mfine.co/consult/symptoms?utm_campaign=symptom_widget_clicked';">Viewall</button>
            </div></><br></br></>
            
            
    );
  }
  
  export default Image3;