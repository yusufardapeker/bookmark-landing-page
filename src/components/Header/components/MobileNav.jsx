import React from "react";

import Button from "../../shared/Button";

import facebookIcon from "../../../images/icon-facebook.svg";
import twitterIcon from "../../../images/icon-twitter.svg";

function MobileNav() {
	return (
		<div className="mobile-nav">
			<ul className="links">
				<li className="link">Features</li>
				<li className="link">Pricing</li>
				<li className="link">Contact</li>
				<Button className={"btn-mobile-nav"} text={"Login"} />
			</ul>

			<div className="social-media-icons">
				<img src={facebookIcon} />
				<img src={twitterIcon} />
			</div>
		</div>
	);
}

export default MobileNav;
