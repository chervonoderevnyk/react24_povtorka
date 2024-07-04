import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {useState} from "react";
import {authService} from "../services/ApiService";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues: {username: 'userChI', password: "Pa$$word22"}});

    const [isAuthState , setIsAuthState ] = useState<boolean>(false)

    const authenticate = async (formData: AuthDataModel) => {
        const isAuth =await authService.authentication(formData)
        setIsAuthState(isAuth)
        console.log(isAuth);
    };

    return (
        <div>
            <h3>
                <div>
                    {isAuthState ? <span>ok</span> : <span>not ok</span>}
                </div>
            </h3>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text"{...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export {FormComponent};