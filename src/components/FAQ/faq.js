import React, { useState } from "react";
import './faq.css'
import CloseIcon from '../../../src/images/faq/Close.svg'
import OpenIcon from '../../../src/images/faq/open.svg'
export const FaqComponent  = ({FaqHeader}) => {

    const [showText, setShowText] = useState(false)

    const renderText=()=>{
        if(showText){
            return(
                <div className="faq-component-text">
           <p>By signing you agree to ONE FUTURE's privacy policy, your information will not be shared or transferred to anyone without your permission.

You agree to receive occasional updates about The ACCORD’s campaign and events.
You can unsubscribe at any time.</p>
       </div>
            )
        }else{
            return null
        }
    }

  
    return (
         
    <div className="faq-component">
  
       <div className="footer-component-header">
           <h1 className="footer-component-header-text">{FaqHeader}</h1>
           <div 
            onClick={()=>{
                setShowText(!showText)
            }}
            className="footer-toggle-button">
            {
                showText ? <img src={CloseIcon} alt='close'/> : <img src={OpenIcon} alt='open'/>
            }
               
           </div>
       </div>
       {
           renderText()
       }
       
        

    </div>
    
    
       
    )
  
 
}
export default FaqComponent;