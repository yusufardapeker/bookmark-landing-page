import "./footer.css";

import SendEmail from "./components/SendEmail";
import FooterLinks from "./components/FooterLinks";

function index() {
	return (
		<footer>
			<SendEmail />
			<FooterLinks />
		</footer>
	);
}

export default index;
