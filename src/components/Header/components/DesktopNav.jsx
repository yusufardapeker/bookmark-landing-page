import Button from "../../shared/Button";
import SiteLinks from "../../shared/SiteLinks";

function DesktopNav() {
	return (
		<nav className="desktop-nav">
			<SiteLinks />

			<Button className={"btn-secondary"}>Login</Button>
		</nav>
	);
}

export default DesktopNav;
