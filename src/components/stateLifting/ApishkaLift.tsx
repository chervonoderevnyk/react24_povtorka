import React, {FC} from "react";
import {ChildComp1} from "./ChildComp1";

const ApishkaLift = () => {

    const foobar = (arg1: any) =>{
        console.log(arg1)
    }

    return (
        <div>
            <ChildComp1 foobar={foobar}/>
        </div>
    );
};

export {ApishkaLift};