import React from "react";

const List = ({ names }) => {
	return (
		<>
			<h4>Name List</h4>
			<ol>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ol>
		</>
	);
};

export default List;
