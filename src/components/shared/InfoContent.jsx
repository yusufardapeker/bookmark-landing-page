import React from "react";

function InfoContent({ title, description }) {
	return (
		<>
			<h2 className="title">{title}</h2>
			<p className="description">{description}</p>
		</>
	);
}

export default InfoContent;
