import "./App.css";
import Body from "./components/LsideBar/lside"
import Navbar from "./components/topbar/navbar"
import Intro from "./components/Rside/Intro/intro";
import Journey from "./components/Rside/MyJourney/journey";
import Projects from "./components/Rside/Projects/projects";
import Resume from "./components/Rside/Resume/resume"
import Skills from "./components/Rside/skills/skills";
import Connect from "./components/Rside/Connect/connect";
function App() {
  return (
    <>

    <div className="nav"><Navbar/></div>
     <div className="main-content">
          <div ><Body/></div>
          <div>
            <div><Intro/></div>
            <div><Journey/></div>
            <div><Projects/></div>
            <div><Resume/></div>
            <div><Skills/></div>
            <div><Connect/></div>
          </div>
          
        
        
     </div>
    
    </>
  );
}

export default App;
