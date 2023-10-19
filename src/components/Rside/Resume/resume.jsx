import {GrResume} from "react-icons/gr"
import "./resume.css";
import { ResBox } from "./resbox";
const Resume =() =>{
    return(
        <div  id ="rs"className="resume">
             {/* <div className="resume-icon">
                  <a><GrResume/></a>
                  <p>Resume</p>
              </div>
              <div className="res-text">
                <span className="rhead-text1">Extra
                <span className="rhead-text2"> Activities</span>
                </span>
                
              </div> */}
              <div className="c-heading">
                {/* <span className="s-heading">Resume</span> */}
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
         <a href="https://drive.google.com/drive/folders/1VDPfbflsM2WWe3kq746C1rD9lIEmIAkw?usp=drive_link"><button className="rbtn">View Resume</button></a>
        </div>
    )
}

export default Resume;