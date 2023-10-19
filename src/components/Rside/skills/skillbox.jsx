import "./skillbox.css";

export const SkillBox = (props) => {
    const iconStyle ={
        color: props.color,
    }
    return(
        <div className="s-box">
            <div className="icon">
                {/* <div className="icon-b"><props.icon  className="icon-prop"/></div> */}
                <div className="icon-b"> {<props.icon className="icon-prop"/>}</div>
                <span className="name-prop">{props.name}</span>
            </div>
        </div>
    )
}