import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    firstName: string;
    age: number;
}

const schema = yup.object({
    firstName: yup.string().required('Some error'),
    age: yup.number().typeError('Amount must be a number').positive().integer().required().min(10, "Too little"),

}).required();

const HookFormYup = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInputs>({
        resolver: yupResolver(schema),

    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <p className={'error'}>{errors.firstName?.message}</p>

            <input {...register("age")} />
            <p className={'error'}>{errors.age?.message}</p>

            <input type="submit"/>
        </form>
    );
};

export default HookFormYup;