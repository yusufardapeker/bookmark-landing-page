import Button from "../../shared/Button";

function SendEmail() {
	return (
		<div className="send-email">
			<div className="container">
				<div className="content">
					<p className="joined-amount">35,000+ already joined</p>
					<p className="text">Stay up-to-date with what we're doing</p>
				</div>
				<form className="email-form">
					<input className="email-input" type="email" placeholder="Enter your email address" />
					<Button className={"btn-secondary"}>Contact Us</Button>
				</form>
			</div>
		</div>
	);
}

export default SendEmail;
