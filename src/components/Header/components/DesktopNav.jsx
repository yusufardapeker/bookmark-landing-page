import React from "react";

import Button from "../../shared/Button";

function DesktopNav() {
	return (
		<nav className="desktop-nav">
			<ul className="links">
				<li className="link">
					<a href="#">Features</a>
				</li>
				<li className="link">
					<a href="#">Pricing</a>
				</li>
				<li className="link">
					<a href="#">Contact</a>
				</li>
				<Button className={"btn-secondary"} text={"Login"} />
			</ul>
		</nav>
	);
}

export default DesktopNav;
