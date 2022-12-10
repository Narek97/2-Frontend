import React from 'react';
import {useMutation} from "@apollo/client";
import {CREATE_PRODUCT} from "../gql/CREATE_PRODUCT";

const CreateProduct = () => {
	
	const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT);

	if (error) {
		return <div className={'error'}>{error.message}</div>;
	}

	if (loading) {
		return <div className={'loading'}>Loading...</div>;
	}

	console.log(data, 'data');
	
	return (
		<div>
			<button onClick={() => createProduct({variables: {name: 'some name', quantityPerUnit: 4}})}
			>
				Create product
			</button>
		</div>
	);
};

export default CreateProduct;