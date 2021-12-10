import { useState } from 'react';

//estado inicial es un arreglo vacio
export const useForm = (initialState = {}) => {
	//useState con el estado inicial
	const [values, setValues] = useState(initialState);

	//Reset regresa al estado inicial {}
	const reset = () => {
		setValues(initialState);
	};

	const handleInputChange = ({ target }) => {
		//Copia de los values y se agrega el nuevo valor
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, handleInputChange, reset];
};
