import {HigthOrderComponent} from "./HigthOrderComponent";

const OriginalComponent1 = () => {
    return (
        <div>
            <i>Lorem ipsum dolor sit.</i>
        </div>
    );
};

export default HigthOrderComponent(OriginalComponent1);