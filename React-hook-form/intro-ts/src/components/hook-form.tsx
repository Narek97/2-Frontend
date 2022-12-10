import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IShippingFields} from "../app.interface";

const HookForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        formState: {errors},
        reset,
        resetField
    } = useForm<IShippingFields>({
        defaultValues: {
            // email: 'test@gmail.com' //// default input value
        },
        mode: 'onChange'//// validation worked when you write, not when you do click(button<submit>)
    });

    console.log(watch("name")); // watch input value
    console.log(getValues()); // get all form input values

    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
        console.log({data});
        // resetField('name'); // reset just name input value
        reset();// reset all inputs value
    };
    console.log({errors});


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register("name", {
                    required: "Name is required!"
                })}
            />
            {errors.name && <div className={'error'}> {errors.name.message}</div>}
            <input
                type="text"
                {...register("email", {
                    required: "Email is required!",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter valid email!'
                    }
                })}
            />
            {errors.email && <div className={'error'}> {errors.email.message}</div>}
            <div>
                <button type={'submit'}>Submit</button>
            </div>
            <div>
                <button type={'button'} onClick={() => {
                    setValue('name', 'Test'); // add text to name input by click
                    setValue('email', 'test@gmail.com');
                }}>Click
                </button>
            </div>
        </form>
    );
};

export default HookForm;