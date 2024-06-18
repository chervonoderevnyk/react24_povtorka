import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/'}>home page</Link>
            <br/>
            <Link to={'users'}>users page</Link>
            <br/>
            <Link to={'posts'}>posts page</Link>
            <br/>
            <Link to={'comments'}>comment page</Link>
        </div>
    );
};

export {Header};