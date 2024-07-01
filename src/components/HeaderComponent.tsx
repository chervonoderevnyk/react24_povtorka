import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
             <Link to={'/'}>auth page</Link>
            <br/>
             <Link to={'/cars'}>cars page</Link>
            <hr/>
        </div>
    );
};

export {HeaderComponent};