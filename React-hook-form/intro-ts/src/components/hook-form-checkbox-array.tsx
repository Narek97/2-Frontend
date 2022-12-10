import React, {ChangeEvent} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";


interface ICheckboxes {
    label: string;
}

interface IFormInputs {
    checkboxes: ICheckboxes[];
}

const HookFormCheckboxArray = () => {

    const validationSchema = Yup.object().shape({
        checkboxes: Yup.array().min(2, 'min 2 ticket').of(
            Yup.object().shape({
                label: Yup.string()
            })
        )
    });

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const {append} = useFieldArray({name: 'checkboxes', control});

    const checkboxes = [
        {id: 1, isChecked: false, label: 'name 1'},
        {id: 2, isChecked: false, label: 'name 2'},
        {id: 3, isChecked: false, label: 'name 3'},
        {id: 4, isChecked: false, label: 'name 4'},
        {id: 5, isChecked: false, label: 'name 5'},
    ];

    const onCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        append({label:e.target.name})
    };


    const onSubmit = (data: IFormInputs) => {
        const nameData = data.checkboxes.map(el => el.label);
        console.log({nameData});
    };

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                checkboxes.map((checkbox, i) => <>
                    <input
                        key={checkbox.id}
                        type="checkbox"
                        defaultChecked={checkbox.isChecked}
                        name={checkbox.label}
                        onChange={onCheckbox}
                    />
                    <label htmlFor="chooseCb" className="form-check-label">
                        {checkbox.label}
                    </label>
                </>)
            }
            <button>Submit</button>
            <p>{errors.checkboxes?.message}</p>
        </form>
    );
};


export default HookFormCheckboxArray;


// import {useForm} from "react-hook-form";
// import * as Yup from "yup";
// import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
//
//
// interface ICheckboxes {
//     id: string | number,
//     isChecked: boolean,
//     label: string
// }
//
// interface IFormInputs {
//     checkboxes: ICheckboxes[];
// }
//
// const HookFormCheckboxArray = () => {
//
//     const validationSchema = Yup.object().shape({
//         checkboxes: Yup.array().min(2, 'min 2 ticket').of(
//             Yup.object().shape({
//                 isChecked: Yup.boolean(),
//                 label: Yup.string()
//             })
//         )
//     });
//
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//         watch,
//     } = useForm<IFormInputs>({
//         resolver: yupResolver(validationSchema),
//         defaultValues: {
//             checkboxes: [
//                 {id: 1, isChecked: false, label: 'name 1'},
//                 {id: 2, isChecked: false, label: 'name 2'},
//                 {id: 3, isChecked: false, label: 'name 3'},
//                 {id: 4, isChecked: false, label: 'name 4'},
//                 {id: 5, isChecked: false, label: 'name 5'},
//             ]
//         }
//     });
//
//     // const {fields, append, remove} = useFieldArray({name: 'checkboxes', control});
//
//     const fields = watch('checkboxes');
//
//     const onSubmit = (data: IFormInputs) => {
//         const filterData = data.checkboxes.filter(el => el.isChecked);
//         const nameData = filterData.map(el => el.label);
//         console.log({nameData});
//     };
//
//     console.log(errors);
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {
//                 fields.map((checkbox, i) => <>
//                     <input
//                         key={checkbox.id}
//                         type="checkbox"
//                         {...register(`checkboxes.${i}.isChecked`)}
//                     />
//                     <label htmlFor="chooseCb" className="form-check-label">
//                         {checkbox.label}
//                     </label>
//                 </>)
//             }
//             <button>Submit</button>
//         </form>
//     );
// };
//
//
// export default HookFormCheckboxArray;
//
