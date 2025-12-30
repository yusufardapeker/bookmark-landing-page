import Button from "../../shared/Button";

import facebookIcon from "../../../images/icon-facebook.svg";
import twitterIcon from "../../../images/icon-twitter.svg";
import SiteLinks from "../../shared/SiteLinks";

function MobileNav() {
	return (
		<nav className="mobile-nav">
			<SiteLinks />

			<Button className={"btn-mobile-nav"}>Login</Button>

			<div className="social-media-icons">
				<img src={facebookIcon} />
				<img src={twitterIcon} />
			</div>
		</nav>
	);
}

export default MobileNav;
