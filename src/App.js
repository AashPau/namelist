import "./App.css";
import Form from "./Form";
import List from "./List";
import React, { useState } from "react";

function App() {
	const [names, setNames] = useState(["Ram", "Bam", "Vam"]);
	return (
		<div className="">
			<Form setNames={setNames} />
			<List names={names} />
		</div>
	);
}

export default App;
