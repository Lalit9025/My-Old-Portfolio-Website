import "./connect.css";
import {IoIosContact} from "react-icons/io"

const Connect = () =>{
    return(
        <div id="cn" className="conn-box">
             {/* <div className="conn-icon">
              <a><IoIosContact/></a>
              <p>Connect</p>
           </div>
           <div className="conn-text">
              <span className="chead-text1">
                 Contact
                  <span className="chead-text2"> Me</span>
              </span>
           </div> */}
           <div className="c-heading">
                {/* <span className="s-heading">connect</span> */}
                <div className="h-text">
                    <span className="jhead-text1">Contact </span> 
                    <span className="jhead-text2">Me</span>
                </div>
              </div>
           
           <div className="cbox">
             <div className="box-elem">
                <input className="f-prop" type="text" placeholder="Name" required/>
                <input className="f-prop" type="text" placeholder="Email" required/>
             </div>
             <div className="box-elem">
                <input className="f-prop" type="number" placeholder="Phone Number" required/>
                <input className="f-prop" type="text" placeholder="Subject" required/>
             </div>
             <div className="box-elem">
                <input className="f-prop" type="text" placeholder="Message" required/>
                <div className="f-prop">
                  <button className="bg">Send Message</button>
                </div>
             </div>
           </div>
        </div>
    )

}
export default Connect;