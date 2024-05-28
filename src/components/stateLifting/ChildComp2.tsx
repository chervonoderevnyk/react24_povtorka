import React, {FC} from "react";
import {ChildComp3} from "./ChildComp3";

const ChildComp2:FC<any> =({foobar}) =>{
    return(
        <div>
            <ChildComp3 foobar={foobar}/>
        </div>
    )}

export {ChildComp2}