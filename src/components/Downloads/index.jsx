import "./downloads.css";

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
						<img className="browser-image" src={card.browserImg} alt="" />
						<p className="browser-name">{`Add to ${card.browserName}`}</p>
						<p className="min-version">{`Minimum Version ${card.minVersion}`}</p>
						<img className="dots" src={dots} alt="" />

						<Button>Add & Download Extension</Button>
					</div>
				))}
			</div>
		</section>
	);
}

export default Downloads;
