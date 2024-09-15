import React from "react";

import InformationContent from "../../shared/InfoContent";
import tabImage from "../../../images/illustration-features-tab-3.svg";
import Button from "../../shared/Button";

function EasySharing() {
	return (
		<div className="tab">
			<div className="img-wrapper">
				<img src={tabImage} />
			</div>

			<div className="content">
				<InformationContent
					title={"Share your bookmarks"}
					description={
						"Share your bookmarks Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
					}
				/>
				<Button text={"More Info"} className={"btn-primary"} />
			</div>
		</div>
	);
}

export default EasySharing;
