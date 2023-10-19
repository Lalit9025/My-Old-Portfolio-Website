import "./projects.css";
import {GrProjects} from "react-icons/gr";
import { ProjectBox } from "./project-box";
import {BiCodeAlt} from "react-icons/bi"
import Image1 from "./image1.jpg";


const Projects = () => {
return(
    <div id="pr" className="project">
  
           <div className="c-heading">
                <div className="h-text">
                    <span className="jhead-text1">About My </span> 
                    <span className="jhead-text2">Projects</span>
                </div>
              </div>
           <div className="m-projects">
                <div className="projects">
                      <div className="pr-1">
                              <ProjectBox img ={Image1} heading ={"URL Shortner"} des ={"HTML, CSS, JavaScript"} link="https://url-shortner-cls3.onrender.com"/>
                      </div>
                   
                  
                      <div className="pr-1">
                              <ProjectBox img ={Image1} heading ={"URL Shortner"} des ={"HTML, CSS, JavaScript"}
                              link="https://url-shortner-cls3.onrender.com"/>                    
                      </div>
                  
                      <div className="pr-1">
                            <ProjectBox img ={Image1} heading ={"URL Shortner"} des ={"HTML, CSS, JavaScript"}
                            link="https://url-shortner-cls3.onrender.com"/>
                      </div>
                </div>
            </div>
    </div>
               
                
          
    
)
}

export default Projects;