import React from "react";

import Button from "../../shared/Button";

function SendEmail() {
	return (
		<div className="send-email">
			<div className="container">
				<div className="content">
					<span className="joined-amount">35,000+ already joined</span>
					<h3 className="text">Stay up-to-date with what we're doing</h3>
				</div>
				<div className="input-wrapper">
					<input className="email-input" type="email" placeholder="Enter your email address" />
					<Button text={"Contact us"} className={"btn-secondary"} />
				</div>
			</div>
		</div>
	);
}

export default SendEmail;
