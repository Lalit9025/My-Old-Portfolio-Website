import "./skills.css";
import {GiSkills} from "react-icons/gi"
import { SkillBox } from "./skillbox";
import {FaHtml5,FaCss3Alt,FaReact, FaGithub,FaNodeJs} from "react-icons/fa"
import {DiJavascript,DiJqueryLogo} from "react-icons/di"
import {TbBrandVscode} from "react-icons/tb";
import {BiLogoGit, BiLogoMongodb} from "react-icons/bi";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { colors } from "@mui/material";
import { pink } from "@mui/material/colors";

const Skills =()=>{
    return (
      <div id = "sk"className="skills">
            {/* <div className="skill-icon">
                  <a className="icon-color"><GiSkills/></a>
                  <p>Skills</p>
            </div>
            <div className="project-heading">
               <span className="m-head">
                  <span className="phead-text1">My </span>
                  <span className="phead-text2">Skills</span>
              </span>  
            </div> */}
             <div className="c-heading">
                {/* <span className="s-heading">Skills</span> */}
                <div className="h-text">
                    <span className="jhead-text1">My </span> 
                    <span className="jhead-text2">Skills</span>
                </div>
              </div>

            <div className="w-dev">
                <span className="dev">Web Development</span>
                <div className="icons-arr">
                   <SkillBox className="icon-pr" icon={FaHtml5} name ={"HTML"} />
                   <SkillBox className="icon-pr" icon={FaCss3Alt}  name ={"CSS"}/>
                   <SkillBox className="icon-pr" icon={DiJavascript} name ={"Javascript"}/>
                   <SkillBox className="icon-pr" icon={FaReact} name ={"React"}/>
                   <SkillBox className="icon-pr" icon={DiJqueryLogo} name ={"Jquery"}/>
                </div>
            </div>
            <div className="w-dev">
                <span className="dev"> Software Packages</span>
                <div className="icons-arr">
                   <SkillBox className="icon-pr" icon={TbBrandVscode} name ={"VS Code"}/>
                   <SkillBox className="icon-pr" icon={BiLogoGit} name ={"Git"}/>
                   <SkillBox className="icon-pr" icon={FaNodeJs} name ={"NodeJs"}/>
                   <SkillBox className="icon-pr" icon={FaGithub} name ={"GitHub"}/>
                   <SkillBox className="icon-pr" icon={BiLogoMongodb} name ={"Mondodb"}/>
                </div>
            </div>
      </div> 
    )
}

export default Skills;