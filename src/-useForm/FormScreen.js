import React from 'react';
import { useForm } from './useForm';

const FormScreen = () => {
	//Valores del formulario (los valores deven coincidir con el input name)
	const valoresForm = {
		name: '',
		age: '',
	};
	//useForm recibe lso valores iniciales del formulario
	const [values, handleInputChange, reset] = useForm(valoresForm);

	return (
		<>
			<span>Form</span>

			<form>
				name:
				<input
					type='text'
					placeholder='name'
					name='name'
					value={values.name}
					onChange={handleInputChange}
				/>
				<br />
				age:
				<input
					type='text'
					placeholder='age'
					name='age'
					value={values.age}
					onChange={handleInputChange}
				/>
				<br />
			</form>
			<p>name:{values.name}</p>
			<p>age:{values.age}</p>
			<button type='button' onClick={reset}>
				reset
			</button>
		</>
	);
};

export default FormScreen;
