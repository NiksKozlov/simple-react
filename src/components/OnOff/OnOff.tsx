import React from "react";
import s from './OnOff.module.css'

type PropsType = {
    on: boolean
    setOn: (on:boolean) => void
}

function OnOff(props: PropsType) {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle}
                 onClick={()=>props.setOn(true)}>On
            </div>
            <div style={offStyle}
                 onClick={()=>props.setOn(false)}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

const OnOffContainer = React.memo(OnOff)

export default OnOff;