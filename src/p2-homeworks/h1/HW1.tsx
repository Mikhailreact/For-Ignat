import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './HW1.module.css'

function HW1() {

    let avatar = "https://avatarfiles.alphacoders.com/221/thumb-221419.jpg";
    let name = "Mikhail";
    let message = "npm delete нажимал?";
    let time = "22:00";

    let avatar2 = "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg";
    let name2 = "Kristina";
    let message2 = "Я нажала npm install!";
    let time2 = "22:10";


    return (
        <div className={s.dialogues}>
            homeworks 1
            {/*
            should work (должно работать)*/}
            <Message
                avatar={avatar}
                name={name}
                message={message}
                time={time}
            />
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar2={avatar2}
                name2={name2}
                message2={message2}
                time2={time2}
            />
        </div>
    );
}

export default HW1;
