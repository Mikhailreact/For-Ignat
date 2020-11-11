import React, {useState} from "react";


export type TypeMessage = {
    name: string
    text: string
    time: string
}


export const Message = (props: TypeMessage) => {


    return (
        <div className={"message1"}>
            <div>{props.name}</div>
            <div>{props.text}</div>
            <div>{props.time}</div>
        </div>
    )
}