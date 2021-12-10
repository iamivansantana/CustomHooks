import React from 'react';
import { useToggle } from './useToggle';

const ToggleScreen = () => {
	//useToggle, se extrae el valor y toggleValue-> para cabiar el valor
	const [value, toggleValue] = useToggle(false); //Recibe el valor inicial
	return (
		<>
			{/* value.toSring() -> para poder mostrar un valor boolean en pantalla */}
			<div>{value.toString()}</div>
			{/* onClick={toggleValue} -> cambia el valor del toggle */}
			<button onClick={toggleValue}>Toggle</button>
			{/* onClick={() => toggleValue(true)} -> vuelve el valor a true */}
			<button onClick={() => toggleValue(true)}>Make True</button>
			{/* onClick={() => toggleValue(false)} -> vuelve el valor a false */}
			<button onClick={() => toggleValue(false)}>Make False</button>
		</>
	);
};

export default ToggleScreen;
