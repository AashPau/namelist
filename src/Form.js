import React, { useState } from "react";
import Display from "./Display";

const Form = ({ setNames }) => {
	const [str, setStr] = useState("");
	const handleOnChange = (e) => {
		setStr(e.target.value);
	};
	const handleSubmit = (e) => {
		console.log(e.target[0].value);
		e.preventDefault();
		const name = e.target[0].value;
		setNames((prevNames) => [...prevNames, name]);
		e.target.reset();
	};
	return (
		<div className="text-center">
			<Display text={str} />
			<div className="mt-3 p-2">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col">
							<input onChange={handleOnChange} type="text" />
						</div>
						<div className="col">
							<button className="btn btn-success" type="submit">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
