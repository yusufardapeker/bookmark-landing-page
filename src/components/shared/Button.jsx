import React from "react";

function Button({ className = "btn-primary", children }) {
	return <button className={className}>{children}</button>;
}

export default Button;
