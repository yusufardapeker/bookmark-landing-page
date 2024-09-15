import React from "react";
import tabImage from "../../../images/illustration-features-tab-1.svg";
import InformationContent from "../../shared/InfoContent";
import Button from "../../shared/Button";

function SimpleBookmarking() {
	return (
		<div className="tab">
			<div className="img-wrapper">
				<img src={tabImage} />
			</div>

			<div className="content">
				<InformationContent
					title={"Bookmark in one click"}
					description={
						"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
					}
				/>
				<Button text={"More Info"} className={"btn-primary"} />
			</div>
		</div>
	);
}

export default SimpleBookmarking;
