import React from "react";
import s from "./AlternativeMessage.module.css";


export type AlternativeMessage = {
    avatar2: any
    name2: string
    message2: string
    time2: string
};


function AlternativeMessage(props: AlternativeMessage) {
    return (
        <div className={s.messageBlock}>
            <div className={s.message1}>
                <div><img className={s.ava} src={props.avatar2}/></div>
                <div className={s.namePerson}>{props.name2}</div>
                <div className={s.message}>{props.message2}</div>
                <div className={s.time}>{props.time2}</div>
            </div>
        </div>
    );
}

export default AlternativeMessage;
