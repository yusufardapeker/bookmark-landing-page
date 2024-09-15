import React from "react";

function InfoContent({ title, description }) {
	return (
		<div className="info-content">
			<h2 className="title">{title}</h2>
			<p className="description">{description}</p>
		</div>
	);
}

export default InfoContent;
