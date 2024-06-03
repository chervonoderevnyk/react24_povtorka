import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {UserValidator} from "../validators/User.validator";

interface IUserProps {
    username: string,
    age: number,
    password: string
}

const FormComponent = () => {
    let {
        register,
        handleSubmit,
        formState:{errors,isValid}
    } = useForm<IUserProps>({mode: "all", resolver: joiResolver(UserValidator)});

    const save = (asd:IUserProps) => {console.log(asd)};

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <br/>

                <input type={"number"} {...register('age')}/>
                {errors.age && <span>{errors.age.message}</span>}
                <br/>

                <input type={"text"} {...register('password')}/>
                <br/>

                <button>save</button>
            </form>
        </div>
    );
};

export {FormComponent};