import React from "react";
import img from './im4.jpeg';
import img1 from './im5.jpeg';
import img2 from './im6.jpeg';
import img3 from './im7.png';
import {Link,Routes,Route} from 'react-router-dom';
import Home from "./comp/Home";
import Bus from "./comp/Bus";
import Enquiry from "./comp/Enquiry";
import Cancel from "./comp/Cancel";
import Cancelled from "./comp/Cancelled";
import About from "./comp/About";
import Tourism from "./comp/Tourism";
import Driver from "./comp/Driver";
import './App.css';

const App=()=>{
  return(
    <>
    <body>
      <div className="div">
        <div className="div1" >
            <img src={img} height="100px" style={{paddingLeft:"50PX", paddingTop:"50PX"}}></img>
            <h4 style={{paddingTop:"50PX"}}>తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ<br></br>Telangana State Road Transport Corporation</h4>
        </div>
        <div className="div2">
          <div style={{display:"flex" , paddingLeft:"50PX"}}>
            <img src={img1} height="50px"></img><p>android app no <br></br>Google play</p>
           <img src={img2} height="50px"></img><p>Available on iphone<br></br>App Store</p>
          </div>
          <div className="midDiv"> 
            
          
            <img src={img3} height="50px" style={{paddingTop:"30PX"}}></img>
            <p>
                <span style={{color:"green", fontSize:"50px" , paddingLeft:"20px"}} ><b>Gamyam</b></span> <br></br>
                <span style={{paddingLeft:"50px"}}>Track-Ride-Arrive</span></p>
                <img src={img1} height="30px"></img>android
                <img src={img2} height="30px"></img>IOS
          </div>
        </div>
        <div className="div3">
          <div>
             <span style={{backgroundColor: "brown", color: "yellow" }}>eTicket Login</span>
        <span style={{backgroundColor: "green",color: "white" , marginLeft:"10px"}}>ATB/OPR Login</span>
        
          </div>
          <div style={{paddingTop: "30px", paddingLeft: "30px"}}>
          <span style={{color:" rgb(110, 110, 117)"}}>(24/7 Customer Support)</span><br></br>
        <span style={{fontSize:" 22px"}}>040 69440000 / 040 23450033</span><br></br>
        <span style={{color:" rgb(110, 110, 117)"}}>online.support@tsrtcbus.in</span>
            
          </div>
       
        </div>
        <div className="div4" style={{borderTop:"5px solid aquamarine"}}>
          
    <Link to="/Home" style={{marginRight:20}}>Home</Link> 
   <Link to="/Bus" style={{marginRight:20}}>Bus On Contract</Link> 
   <Link to="/Enquiry" style={{marginRight:20}}>Enquiry</Link> 
   <Link to="/Cancel" style={{marginRight:20}}>Cancel Tickets</Link> 
   <Link to="/Cancelled" style={{marginRight:20}}>Cancelled Scrvices</Link>
   <Link to="/About" style={{marginRight:20}}>About</Link>
   <Link to="/Tourism" style={{marginRight:20}}>Tourism</Link>
   <Link to="Driver" style={{marginRight:20}}>DriverInfo</Link>

   <Routes>
    <Route path="/Home" element={<Home></Home>}></Route>
    <Route path="/Bus" element={<Bus></Bus>}></Route>
    <Route path="/Enquiry" element={<Enquiry></Enquiry>}></Route>
    <Route path="/Cancel" element={<Cancel></Cancel>}></Route>
    <Route path="/Cancelled" element={<Cancelled></Cancelled>}></Route>
    <Route path="/About" element={<About></About>}></Route>
    <Route path="/Tourism" element={<Tourism></Tourism>}></Route>
    <Route path="/Driver" element={<Driver></Driver>}></Route>
    
   </Routes>
        </div>
        <div className="div5">
        <p style={{paddingLeft: "60px"}}>FAQs | Privacy Policy |Terms & Condition | Contact Us |About Us |<br></br> Version 6.11.8.01 |Copyright 2011 
                  tgsrtcbus.in , All rights reserved.</p>
<p style={{paddingLeft: "400px"}}>Our Official website - www.tgsrtc.telangana.gov.in<br></br>Our Parcel& Cargo website -tgsrtclogistics.co.in<br></br><span style={{paddingLeft: "75px"}}>Our Buspass website-tgsrtcpass.com</span></p>
</div>
      </div>
   


    </body>
      

    
   

    
    </>
  )
}
export default App;