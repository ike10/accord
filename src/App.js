import React from "react";

import './App.css'







// import TypewriterComponent from 'typewriter-effect'
// import Link from 'next/link'
import 'animate.css/animate.min.css'
// import {AnimationOnScroll} from 'react-animation-on-scroll' 
import FaqComponent from "./components/FAQ/faq";


// import {useMediaQuery} from "react-responsive";
// import { mediaQueries } from "./responsive";
export const App  = () => {



  
    return (
    <div className="main-body">
    {/* welcome page */}
       <div className="welcome-page">
           <nav className="header-container">
               <div className="logo-container">
                   {/* <img src='/'/> */}
                   <p>accord</p>
               </div>
               <div className="navigation-container">
                   <a href='#contact'><p>Contact</p></a>
                   <a href='#faq'><p>FAQ</p></a>
               </div>
           </nav>
           <div className="welcome-section">
               <h2 className="welcome-header">We are a growing list of perople and brands, driving action for peace and prosperity, for people and planet</h2>
               <div className="welcome-button">
               <a href="/">
                    <p>JOIN THE ACCORD</p>
               </a>
                  
               </div>
           </div>
       </div>
       {/* end of welcome  page */}

       {/* pledge page */}
       <div className="pledge-page">
           <h2 className="pledge-header">
               JOIN THE A-LIST BY TAKING THE PLEDGE
           </h2>
           <p className="pledge-text">
                "WE THE PEOPLE OF THE PLANET... <br/>
                PLEDGE TO TAKE IMMEDIATE4 ACTINO FOR ALL PEOPLE, PLANET AND PROSPERITY. <br/>
                 <br/>
                 
                 WE SUPPORT BRANDS THAT TAKE MEASURABLE ACTION FOR PEOPLE & PROSPERITY."

           </p>
           <div className="pledge-form"
            // method="POST"
            
            >
               <div className="form-name">
                    <div className="first-name">
                        <p>First Name</p>
                        <input placeholder="eg John" type="text"/>
                    </div>
                    <div className="last-name">
                        <p>Last Name</p>
                        <input placeholder="eg John" type="text"/>
                    </div>
               </div>
               <div className="form-email">
                   <p>Email</p>
                   <input placeholder="123@gmail.com" type="email"/>
               </div>
               <div className="form-country">
                   <p>Country</p>
                   <input placeholder="123@gmail.com" type="email"/>
               </div>
               <div className="welcome-button">
                    <a href="/">
                        <p>PLEDGE</p>
                    </a>
               </div>
               <div className="form-terms">
                <p>By signing you agree to ONE FUTURE's privacy policy, your information will not be shared or transferred to anyone without your permission.

You agree to receive occasional updates about The ACCORD’s campaign and events.
You can unsubscribe at any time.</p>
               </div>
           </div>
       </div>

       {/* end of  pledge page */}
       

       {/* faq page */}
        <div className="faq-page">
            <h2 className="faq-header">Have Some Questions?</h2>
            <div className="faq-section">
                <FaqComponent/>
                <FaqComponent/>
                <FaqComponent/>
            </div>
        </div>

        {/* end of faq page */}

        {/* contact page */}
            <div className="contact-page">
            <div className="contact-container">
            <div className="contact-section-1">
                                <p>Reach Out:</p>
                                <p>Hello@theaccord.org</p>
                            </div>  
                            <div className="contact-section-2">
                                <p>Reach Out:</p>
                                <p>Hello@theaccord.org</p>
                            </div>
                            <div className="contact-section-3">
                                <p>Reach Out:</p>
                                <p>Hello@theaccord.org</p>
                            </div> 
            </div>
                

            </div>
        {/* end of contact page */}

        {/* footer page */}
            <div className="footer-page">
                <div className="footer-section-1">
                    <h3>Explore</h3>
                    <nav className="footer-nav-list">
                        <a href="/"><p>Home</p></a>
                        <a href="/"><p>pledge</p></a>
                        <a href="/"><p>faq</p></a>
                        <a href="/"><p>contact</p></a>
                    </nav>
                    
                </div>
                <div className="footer-section-2">
                    <h3>Social</h3>
                    <nav className="footer-nav-list">
                        <a href="/"><p>instagram</p></a>
                        <a href="/"><p>twitter</p></a>
                        <a href="/"><p>linkedin</p></a>
                       
                    </nav>
                    
                </div>
                <div className="footer-section-3">
                    <h3>Contact</h3>
                    <nav className="footer-nav-list">
                        <a href="/"><p>hello@theaccord.org</p></a>
                        <a href="/"><p>+1-1234-234-2345</p></a>
                       
                    </nav>
                    
                </div>
            </div>
        {/* end of footer page */}
       

        
       
        

    </div>
    
    
       
    )
  
 
}
export default App;