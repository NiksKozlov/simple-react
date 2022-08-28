import React from 'react';
import s from './OnOff.module.css'

type OnOffType = { switchOn: boolean }


function OnOff(props: OnOffType) {
    return (
        <div className={s.wrapper}>
            {props.switchOn && <div className={s.green}>On</div>}
            {!props.switchOn && <div className={s.noColor}>On</div>}
            <div className={s.noColor}>Off</div>
            {props.switchOn && <div className={s.circleG}></div>}
            {!props.switchOn && <div className={s.noColorCircle}></div>}
            <div className={s.noColor}>On</div>
            {!props.switchOn && <div className={s.red}>Off</div>}
            {props.switchOn && <div className={s.noColor}>Off</div>}
            {!props.switchOn && <div className={s.circleR}></div>}
            {props.switchOn && <div className={s.noColorCircle}></div>}
        </div>
    );
};

export default OnOff;