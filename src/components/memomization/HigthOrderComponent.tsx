import {FC} from "react";

const HigthOrderComponent = (Component: FC) => {

    const WrapedComponent = (props:any) => {
        return (
            <div>
                <h2>suit for component</h2>
                <h2>suit for component</h2>
                <Component {...props}/>
                <h2>suit for component</h2>
                <h2>suit for component</h2>
            </div>
        )
    }
    return WrapedComponent;
};

export {HigthOrderComponent};