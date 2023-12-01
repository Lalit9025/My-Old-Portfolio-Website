import "./projects.css";
import { ProjectBox } from "./project-box";
import Image1 from "./url.png";
import Image2 from "./image2.png"
import Image3 from "./image3.png"



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
                            <ProjectBox img ={Image2} heading ={"eShop"} des ={"HTML, CSS, JavaScript, ReactJs"}
                            link="https://eshop-fb048.web.app/"/>
                      </div>
                      <div className="pr-1">
                            <ProjectBox img ={Image3} heading ={"solo-web"} des ={"HTML, CSS, JavaScript, ReactJs"}
                            link="https://solo-web-d274a.web.app/"/>
                      </div>
                </div>
            </div>
    </div>
               
                
          
    
)
}

export default Projects;