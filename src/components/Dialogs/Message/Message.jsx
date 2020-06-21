import React from "react";
import s from './../Dialogs.module.css';


const Message = ({state: {messages, dialogs} }) => {


    return (
        <>
            <div className={s.dialog}>
                <ul>{dialogs.map(({id, name}) => {
                    return (
                        <li key={id}>{name}</li>
                    )
                })}
                <div className={s.messages}>
                    {messages.map(({id, message}) => {
                        return (
                            <li key={id}>{message}</li>
                        )
                    })}
                </div>
                </ul>
            </div>




        </>

    )
}
export default Message;