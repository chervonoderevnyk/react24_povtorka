import {useForm} from "react-hook-form";
import {TokenObtainPair} from "../models/TokenObtainPair";
import {authService} from "../services/ApiService";
import {useState} from "react";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<TokenObtainPair>({defaultValues: {username: 'userChI', password: 'Pa$$word22'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: TokenObtainPair): Promise<number> => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);

        return 100500;
    };
    return (
        <div>
            <h3>login form</h3>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>not ok</span>
                }

            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>auth me</button>
            </form>

        </div>
    );
};
export {FormComponent};