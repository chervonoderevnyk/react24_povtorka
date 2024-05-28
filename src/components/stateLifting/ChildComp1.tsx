import React, {FC} from "react";
import {ChildComp2} from "./ChildComp2";

const ChildComp1:FC<any> =({foobar}) =>{
    return(
        <div>
            <ChildComp2 foobar={foobar}/>
        </div>
    )}

export {ChildComp1}