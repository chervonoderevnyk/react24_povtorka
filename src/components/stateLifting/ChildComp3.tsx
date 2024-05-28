import React, {FC} from "react";

const ChildComp3:FC<any> =({foobar}) =>{
    return(
        <div>
            <button
                onClick={()=>{
                    foobar('hot patetos!!!')}}>
                click me
            </button>
        </div>
    )}

export {ChildComp3}