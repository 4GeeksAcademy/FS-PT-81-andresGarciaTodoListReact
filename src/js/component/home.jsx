import React from "react";
import { useState } from "react";

//create your first component
function Home() {
	const [work, setWork] = useState('');
	const [tareas, setTareas] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
	};

	const handlechange = e => setWork(e.target.value);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			setTareas([...tareas, work]);
			setWork("");
		}
	};

	const handleDelete = (index) => {
		const filtroTareas = tareas.filter((_, indice) => index !== indice);
		setTareas(filtroTareas);
	};
	return (
		<div className="fondo">
			<div className="container">
				<div className="text-center">
					<h1>TODO</h1>
					<input type="text" onChange={handlechange} onKeyDown={(e) => handleKeyDown(e)} value={work} />
					<ul>
						{tareas.map((item, index) => (<div className="items" key={index}><li>{item}</li><button onClick={() => { handleDelete(index); }}>X</button></div>))}
					</ul>
					<p className="item">{tareas.length} {tareas.length === 1 ? "item" : "items"} </p>
				</div>
			</div>
		</div>
	);
}

export default Home;
