import React, {useEffect} from 'react';
import {useForm, useFieldArray} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {getValue} from "@testing-library/user-event/dist/utils";
import {string} from "yup";


interface IFormInputs {
    numberOfTickets: number;
    tickets: {
        id: string | number,
        name: string,
        email: string
    }[];
}

const HookFormArray = () => {

    const validationSchema = Yup.object().shape({
        numberOfTickets: Yup.string(),
        // .required('Number of tickets is required'),
        tickets: Yup.array().min(1, 'min 1 ticket').of(
            Yup.object().shape({
                name: Yup.string(),
                // .required('Name is required'),
                email: Yup.string()
                    .email('Email is Invalid')
                // .required('Email is required')
            })
        )
    });
    const formOptions = {resolver: yupResolver(validationSchema)};

    const {
        register,
        setValue,
        control,
        handleSubmit,
        reset,
        formState: {errors},
        watch,
    } = useForm<IFormInputs>(formOptions);

    const {fields, append, remove} = useFieldArray({name: 'tickets', control});

    const numberOfTickets = watch('numberOfTickets');

    useEffect(() => {
        // update field array when ticket number changed
        const newVal = parseInt(numberOfTickets?.toString()) || 0;
        const oldVal = fields.length;
        if (newVal > oldVal) {
            // append tickets to field array
            for (let i = oldVal; i < newVal; i++) {
                append({id: Date.now(), name: '', email: ''});
            }
        } else {
            // remove tickets from field array
            for (let i = oldVal; i > newVal; i--) {
                remove(i - 1);
            }
        }
    }, [append, fields.length, numberOfTickets, remove]);

    const addTicket = () => {
        append({id: Date.now(), name: '', email: ''});
        const ticketCount = +watch("numberOfTickets") + 1;
        setValue('numberOfTickets', ticketCount);
    };

    const removeTicket = (index: number) => {
        const tickets = watch("tickets");
        const newTickets = tickets.filter((ticket, ticketIndex) => ticketIndex !== index);
        const ticketCount = +watch("numberOfTickets") - 1;
        setValue('numberOfTickets', ticketCount);
        setValue('tickets', newTickets);

    };

    const onSubmit = (data: IFormInputs) => {
        console.log(data, 'data');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card m-3">
                <h5 className="card-header">React Hook Form 7 - Dynamic Form Example</h5>
                <div className="card-body border-bottom">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Number of Tickets</label>
                            <select  {...register('numberOfTickets')}
                                     className={`form-control ${errors.numberOfTickets ? 'is-invalid' : ''}`}>
                                {['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                                    <option key={i} value={i}>{i}</option>
                                )}
                            </select>
                            <div className="invalid-feedback">{errors.numberOfTickets?.message}</div>
                        </div>
                    </div>
                    <div>
                        <button type={'button'} onClick={addTicket}>Add ticket</button>
                    </div>
                </div>
                {fields.map((item, i) => (
                    <div key={item.id} className="list-group list-group-flush">
                        <div className="list-group-item">
                            <h5 className="card-title">Ticket {i + 1}</h5>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label>Name</label>
                                    <input  {...register(`tickets.${i}.name`)} type="text"
                                            className={`form-control ${errors.tickets?.[i]?.name ? 'is-invalid' : ''}`}/>
                                    <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div>
                                </div>
                                <div className="form-group col-6">
                                    <label>Email</label>
                                    <input  {...register(`tickets.${i}.email`)} type="text"
                                            className={`form-control ${errors.tickets?.[i]?.email ? 'is-invalid' : ''}`}/>
                                    <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div>
                                </div>
                                <button type={'button'} onClick={() => removeTicket(i)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="card-footer text-center border-top-0">
                    <button type="submit" className="btn btn-primary mr-1">
                        Buy Tickets
                    </button>
                    <button onClick={() => reset()} type="button" className="btn btn-secondary mr-1">Reset</button>
                </div>
            </div>
        </form>
    );
};

export default HookFormArray;