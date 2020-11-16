import React from "react";
import s from './Message.module.css'

export type MessageType = {
    avatar: any
    name: string
    message: string
    time: string
};

function Message(props: MessageType) {
    return (
        <div className={s.messageBlock}>
            <div className={s.message1}>
                <div><img className={s.ava} src={props.avatar}/></div>
                <div className={s.namePerson}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
