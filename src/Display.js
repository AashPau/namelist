import React from "react";

const Display = ({ text }) => {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<h4>{text}</h4>
					</blockquote>
				</div>
			</div>
		</div>
	);
};

export default Display;
