import {useForm} from "react-hook-form";
import {TokenObtainPair} from "../models/TokenObtainPair";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    }
        = useForm<TokenObtainPair>({defaultValues: {username: 'userChI', password: 'Pa$$word22'}});

    const authentikate = (formData: TokenObtainPair) => {

    };

    return (
        <div>
            <form onSubmit={handleSubmit(authentikate )}>
                <input type="text" {...register("username")}/>
                <input type="text" {...register("password")}/>
                <button>auth me</button>
            </form>
        </div>
    );
};

export {FormComponent};