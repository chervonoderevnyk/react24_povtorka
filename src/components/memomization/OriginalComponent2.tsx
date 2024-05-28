import {HigthOrderComponent} from "./HigthOrderComponent";

const OriginalComponent2 = () => {
    return (
        <div>
            <i>Lorem ipsum dolor sit amet, consectetur.</i>
        </div>
    );
};

export default HigthOrderComponent(OriginalComponent2);