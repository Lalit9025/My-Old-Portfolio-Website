import "./project-box.css";

export const ProjectBox =(props) => {
 return(
    <div className="pbox-body">
      <div className="im"><img className ="pimg"src={props.img}/></div>
      <div className="pr-heading">{props.heading}</div>
      <div className="pr-des">{props.des}</div>
      <button className="pbtn"><a className ="pbtn-prop"href={props.link} style={{ textDecoration: 'none' }}>View Project</a></button>

    </div>
 )
}