import React, {ChangeEvent} from "react";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.error : "";

    return (
        <div>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            className={inputClass}
                            error={error}
                            placeholder={"Давай пиши чего-нибуть"}

            />
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}

            <SuperButton onClick={addUser} >Add</SuperButton>
           {/* <button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;

