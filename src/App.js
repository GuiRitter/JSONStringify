import React, { useEffect, useRef } from 'react';

import './App.css';

function componentDidMount(props) {
	document.body.classList.add('container');
}

function App(props) {

	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) {
			// componentDidUpdate(props, prevProps);
		} else {
			didMountRef.current = true;
			componentDidMount(props);
		}
	});

	return <><textarea className='input' id='input' /><textarea className='output' id='output' /><input className='button' onClick={() => {
		const input = document.getElementById('input');
		const output = document.getElementById('output');
		output.value = JSON.stringify(input.value);
	}} type='button' value='generate' /></>;
}

export default App;
