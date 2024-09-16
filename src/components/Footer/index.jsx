import React from "react";

import "./footer.scss";

import SendEmail from "./components/SendEmail";
import SiteLinks from "./components/SiteLinks";

function index() {
	return (
		<footer>
			<SendEmail />
			<SiteLinks />
		</footer>
	);
}

export default index;
