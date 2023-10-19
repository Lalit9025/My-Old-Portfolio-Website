import {GiJourney} from "react-icons/gi";
import "./journey.css";
import "../../top.css"
const Journey =()=>{
    return(
        <div id ="ab"className="journey">
               {/* <div className="journey-icon">
                  <a><GiJourney/></a>
                  <p>Journey</p>
              </div> */}
              <div className="c-heading">
                {/* <span className="s-heading">ABOUT ME</span> */}
                <div className="h-text">
                    <span className="jhead-text1">About My </span> 
                    <span className="jhead-text2">Journey</span>
                </div>
              </div>

              <div className="journey-text">
                    <p className="para-text">In my first college year, curiosity led me to web development. Crafting web pages with HTML and CSS was a rewarding creative outlet. Venturing into JavaScript and advanced frameworks, I embraced React, shaping web development into both a hobby and a career aspiration, fueling my journey of continuous learning.</p>
              </div>
        </div>
    )
}

export default Journey;