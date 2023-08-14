import React, { useState } from 'react';
import './Image2.css';
import {BsClock} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {ImLab} from 'react-icons/im';
import {FaUserDoctor} from 'react-icons/fa6';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import {FaPrescriptionBottleAlt} from 'react-icons/fa';
import {GiMedicines} from 'react-icons/gi';
import { GiHairStrands } from 'react-icons/gi';
import {IoMdMedkit} from'react-icons/io';
 import { FaHeadSideCough } from 'react-icons/fa';
import { FaTemperatureHigh} from 'react-icons/fa';
import {GiFemaleVampire } from 'react-icons/gi';
 import {GiStomach} from 'react-icons/gi';
import { SlUserFemale } from 'react-icons/sl';
import Slider from "react-slick";
function Image2() {
    

    var settings1 = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
        const [activeTab, setActiveTab] = useState('symptoms');
      
        const handleTabClick = (tab) => {
          setActiveTab(tab);
        };
  return (
    <>
    <div className='doctordetail'>
              <div className="mobile-close" />
              <div className="mob-img">
                  
                  <div className="offer-img">
                      {/* <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Healthcare_How_it_works.webp" alt width="100%" height="100%" loading="eager" /> */}
                  </div>
              </div>
              <div className="how-it-works">
                  <h3 className="hdn6_sb">
                      How does it work?
                  </h3>
                  <div className="icon-wrap">
                      <div className="icon2">
                      <FaUserDoctor className='icon21' />
                      </div>
                      <p>Choose a symptom/ speciality</p>
                  </div>
                  <div className="icon-wrap">
                      <div className="icon2">
                          <VscDeviceCameraVideo className='icon22'/>
                      </div>
                      <p>Video consultation with a doctor</p>
                  </div>
                  <div className="icon-wrap">
                      <div className="icon2">
                          <FaPrescriptionBottleAlt className='icon23' />
                      </div>
                      <p>Get online prescription</p>
                  </div>
              </div>
              <div className="how-it-works2">
                  <h3 className="how-it-works-light-title">
                      Post consultation you can…
                  </h3>
                  <div className="icon-wrap">
                      <div className="icon3">
                          <GiMedicines className='icon31' />
                      </div>
                      <p className='p1'>Order Medicines</p>
                  </div>
                  <div className="icon-wrap">
                      <div className="icon3">
                          <ImLab className='icon32' />
                      </div>
                      <p className='p2'>Book Lab Tests</p>
                  </div>
              </div>
              </div>


    <div className="imagecontainer">
          <div class="section-header-left">
              <h2 class="hdn3_B blue">
                  Consult top Doctors online
              </h2>
              <div class="section-header-icons">
                  <div class="icon-wrap">
                      <div class="icon1">
                          <BsClock className='icon11' />
                      </div>
                      <p>Start consultation in 60 seconds</p>
                  </div>
                  <div class="icon-wrap">
                      <div class="icon1">
                          <FiUsers className='icon11' />
                      </div>
                      <p>Free follow-up for the next 5 days</p>
                  </div>
                  <div class="icon-wrap">
                      <div class="icon1">
                          <ImLab className='icon11' />
                      </div>
                      <p>Doctors across 35+ specialties</p>
                  </div>
              </div>
              <img className='doctorpic' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/header-img-1.webp" alt="" loading="lazy"></img>
          </div>
      </div>

   <div className='fullactivetab'>
      <ul className="nav nav-pills mb-3" role="tablist">
      <li className="nav-item">
        <button
          className={`nav-link consultTab ${activeTab === 'symptoms' ? 'active' : ''}`}
          data="symptoms"
          type="button"
          onClick={() => handleTabClick('symptoms')}
        >
          Symptoms
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link consultTab ${activeTab === 'specialities' ? 'active' : ''}`}
          data="specialities"
          type="button"
          onClick={() => handleTabClick('specialities')}
        >
          Specialities
        </button>
      </li>
    </ul>
    </div>
    <div className="data-container">
        {activeTab === 'symptoms' && (
          <ul>
            <div className="swiper-wrapper">

  <a aria-label href="https://www.mfine.co/consult/speciality/5a11a908a183a17859a49ed5" className="swiper-slide1">
    <p>
      Stomach Ache
    </p>
    <div className='circle'></div>
    <span >
      <GiStomach className='logo1' />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a2814d59471d31ceba805f2" className="swiper-slide1">
    <p>
      Period Issue
    </p>
    <div className='circle'></div>
    <span>
      <SlUserFemale  className='logo1'/>
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a2815849471d31ceba805f4" className="swiper-slide1">
    <p>
      Acne / Pimples
    </p>
    <div className='circle'></div>
    <span >
      <GiFemaleVampire className='logo1' />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a11a908a183a17859a49ed5" className="swiper-slide1">
    <p>
      Fever
    </p>
    <div className='circle'></div>
    <span >
      < FaTemperatureHigh className='logo1'/>
    </span>
  </a>


  <a aria-label href="https://www.mfine.co/consult/speciality/5cfa65b73dd83a119920e966" className="swiper-slide1">
    <p>
      Depression
    </p>
    <div className='circle'></div>
    <span >
    <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Psychiatrist.svg" alt  loading="lazy" />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5be42c7130eb28ccafdef496" className="swiper-slide1">
    <p>
      Diabetes
    </p>
    <div className='circle'></div>
    <span >
      <IoMdMedkit className='logo1'/>
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/specialities?sp=%5B&quot;5b3ddf38d9140266c5b041bd&quot;,&quot;5a11a908a183a17859a49ed5&quot;%5D" className="swiper-slide1">
    <p>
      Cough
    </p>
    <div className='circle'></div>
    <span >
      <FaHeadSideCough className='logo1' />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a2815849471d31ceba805f4" className="swiper-slide1">
    <p>
      Hairfall
    </p>
    <div className='circle'></div>
    <span >
      < GiHairStrands className='logo1'/>
    </span>
  </a>
</div>

          </ul>
        )}
        {activeTab === 'specialities' && (
          <ul>
           <div className="swiper-wrapper">

  <a aria-label href="https://www.mfine.co/consult/speciality/5a11a908a183a17859a49ed5" className="swiper-slide1">
    <p>
      Physician
    </p>
    <div className='circle'></div>
    <span >
      <FaUserDoctor className='logo1'/>
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a2814d59471d31ceba805f2" className="swiper-slide1">
    <p>
      Gynecologist
    </p>
    <div className='circle'></div>
    <span >
      < SlUserFemale className='logo1' />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a11a908a183a17859a49ed4" className="swiper-slide1">
    <p>
      Pediatrician
    </p>
    <div className='circle'></div>
    <span >
      <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Pediatrician.svg" alt  loading="lazy" />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5a684a305a6850b86e67b140" className="swiper-slide1">
    <p>
      Orthopedician
    </p>
    <div className='circle'></div>
    <span >
      <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Orthopedician.svg" alt  loading="lazy" />
    </span>
  </a>


  
  <a aria-label href="https://www.mfine.co/consult/speciality/5e006a0251cff7e222c6ea32" className="swiper-slide1">
    <p>
      ENT Specialist
    </p>
    <div className='circle'></div>
    <span >
      <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/ENT_specialist.svg" alt  loading="lazy" />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5d809adc1c1e70c2e350de7a" className="swiper-slide1">
    <p>
      Psychotherapist
    </p>
    <div className='circle'></div>
    <span >
      <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Psychiatrist.svg" alt  loading="lazy" />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5d3adb9e8a2b53dc1047c44e" className="swiper-slide1">
    <p>
      Dentist
    </p>
    <div className='circle'></div>
    <span >
      <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Dentist.svg" alt  loading="lazy" />
    </span>
  </a>
  <a aria-label href="https://www.mfine.co/consult/speciality/5b1a80aeb9ebdf33991ea581" className="swiper-slide1">
    <p>
      cardiologist
    </p>
    <div className='circle'></div>
    <span >
      <img className='logo1' src="https://www.mfine.co/wp-content/themes/Divi/new-assets/icons/Cardiologist.svg" alt  loading="lazy" />
    </span>
  </a>
  </div>
          </ul>
        )}
      </div>
      <div className="viewall">
  <button type="button" className="button orange line consultView aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={0} onclick="window.location.href = 'https://www.mfine.co/consult/symptoms?utm_campaign=symptom_widget_clicked';">Viewall</button>
</div><br></br>

<div className='fulladd'>
<div className="slick2">
        <h4>MFine partners with top hospitals</h4>
        <Slider {...settings1}>
        
        <div className="top-img">
    <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/EyeQ.webp"  width="150px" height="150px" loading="lazy" />
  </div>
  <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} role="group" aria-label="3 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Jeewan.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} role="group" aria-label="4 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Aster_Clinic.webp" alt width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={4} role="group" aria-label="5 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Bewell.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index={5} role="group" aria-label="6 / 7">
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Marengo.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={6} role="group" aria-label="7 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Vishwa_Raj.webp" width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index={0} role="group" aria-label="1 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/KIMS.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide" data-swiper-slide-index={1} role="group" aria-label="2 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/EyeQ.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide" data-swiper-slide-index={2} role="group" aria-label="3 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Jeewan.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide" data-swiper-slide-index={3} role="group" aria-label="4 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Aster_Clinic.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide" data-swiper-slide-index={4} role="group" aria-label="5 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Bewell.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={5} role="group" aria-label="6 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Marengo.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={6} role="group" aria-label="7 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Vishwa_Raj.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
  <div className="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index={0} role="group" aria-label="1 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/KIMS.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={1} role="group" aria-label="2 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/EyeQ.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} role="group" aria-label="3 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Jeewan.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} role="group" aria-label="4 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Aster_Clinic.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={4} role="group" aria-label="5 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Bewell.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index={5} role="group" aria-label="6 / 7" >
    <div className="top-img">
      <img src="https://www.mfine.co/wp-content/themes/Divi/new-assets/images/Marengo.webp"  width="150px" height="150px" loading="lazy" />
    </div>
  </div>
        </Slider>
      </div>
      </div><br></br><br></br>
          </>
  );
}

export default Image2;