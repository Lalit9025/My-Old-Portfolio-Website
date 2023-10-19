import React from "react";
import './lside.css';
import image from "./lalitimage.png";
import{FaLinkedin,FaGithub,FaInstagram,FaFacebook} from"react-icons/fa";
import{FiMail} from"react-icons/fi";
import logo from "./logo.png"




const Body = () =>{
    return(           
                <div className="div">
                    <div className="bx">
                      <div className="full-stack">
                          {/* <img  className= "l-p" src={logo}/> */}
                        < span className="f-d">FULLSTACK DEVELOPER</span>
                        </div>
                      <div className="img-container"><img src={image} className="lalit-image"/></div>
                      <div className="email">lalit3chouhan@gmail.com</div>
                      <div className="copyrights">&#169;2023 Lalit, All Rights Reserverd</div>
                      <div className="socialmediaLinks" >
                        <a href="https://www.linkedin.com/in/lalit-chouhan-438b64228/" target="_blank" className="icons"><FaLinkedin/></a>
                        <a href="https://github.com/Lalit9025" target="_blank"className="icons"><FaGithub/></a>
                        <a href="https://www.instagram.com/laliit_07/" target="_blank"className="icons"><FaInstagram/></a>
                        <a href="https://www.facebook.com/profile.php?id=100068757227439" target="_blank"className="icons"><FaFacebook/></a>                    
                      </div>
                      <div className="hire">
                      <div className="hirebtn">
                         <a href="mailto:lalit3chouhan@gmail.com.com" className="hirecolor"><FiMail className="logo-2"/>
                         HIRE ME !
                         </a>
                      </div>
                    </div>
                  </div> 
                </div>  
    )
}

export default Body;