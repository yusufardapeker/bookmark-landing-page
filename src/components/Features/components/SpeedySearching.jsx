import React from "react";

import InformationContent from "../../shared/InfoContent";
import tabImage from "../../../images/illustration-features-tab-2.svg";
import Button from "../../shared/Button";

function SpeedySearching() {
	return (
		<div className="tab">
			<div className="img-wrapper">
				<img src={tabImage} />
			</div>

			<div className="content">
				<InformationContent
					title={"Intelligent search"}
					description={
						"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
					}
				/>
				<Button text={"More Info"} className={"btn-primary"} />
			</div>
		</div>
	);
}

export default SpeedySearching;
