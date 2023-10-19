import "./resbox.css";

export const ResBox = (props) =>{
    return(
         <div className="container">
            <div className="date">{props.date}</div>
            <div className="name">{props.name}</div>
            <div className="club">{props.club}</div>
         </div>

    )
}
export default ResBox;