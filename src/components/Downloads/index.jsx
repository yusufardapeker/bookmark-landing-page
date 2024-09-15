import React from "react";

import "./downloads.scss";

import InformationContent from "../shared/InfoContent";
import Button from "../shared/Button";

import dots from "../../images/bg-dots.svg";

import { cardsContent } from "./constants";

function Downloads() {
	return (
		<section id="downloads">
			<InformationContent
				title={"Download the extension"}
				description={
					"We've got more browsers in the pipeline.Please do let us know if you've got a favourite you'd like us to prioritize."
				}
			/>

			<div className="cards">
				{cardsContent.map((card, index) => (
					<div className="card" key={index}>
						<img className="browser-image" src={card.browserImg} />
						<h3 className="browser-name">{`Add to ${card.browserName}`}</h3>
						<span className="min-version">{`Minimum Version ${card.minVersion}`}</span>
						<img className="dots" src={dots} />

						<Button text={"Add & Download Extension"} className={"btn-primary"} />
					</div>
				))}
			</div>
		</section>
	);
}

export default Downloads;
