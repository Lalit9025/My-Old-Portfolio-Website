import {GrResume} from "react-icons/gr"
import "./resume.css";
import { ResBox } from "./resbox";
const Resume =() =>{
    return(
        <div  id ="rs"className="resume">            
              <div className="c-heading">
                <div className="h-text">
                    <span className="jhead-text1">Extra </span> 
                    <span className="jhead-text2">Activities</span>
                </div>
              </div>

              <div className="m-content">
                 <div className="p-1">
                    <ResBox date={"Jun 2022 - Present"} name ={"Manager"} club={"Maried Hostel App, IIT Roorkee"}/>
                 </div>
                 <div className="p-1">
                    <ResBox date={"Oct 2022 - Aug 2022"} name ={"Associate Coordinator"} club={"Placement & Internship Cell, IIT Roorkee"}/>
                 </div>
                 <div className="p-1">
                    <ResBox date={"Nov 2022 - Present"} name ={"Mess Council Member"} club={"RadhaKrishnan Bhawan, IIT Roorkee"}/>
                 </div>
                 <div className="p-1">
                    <ResBox date={"May 2022 - Present"} name ={"Member"} club={"Team KNOx, IIT Roorkee"}/>
                 </div>
                 
         </div>
         <div className="resume-btn">
         <button className="rbtn"><a className="rbtn" href="https://drive.google.com/file/d/1HxD6tVK18bIPzFwWy1CXFUzKQyfeSKrm/view?usp=sharing">View Resume</a>
</button>
         </div>
        </div>
    )
}

export default Resume;