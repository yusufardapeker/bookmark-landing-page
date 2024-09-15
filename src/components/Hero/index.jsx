import React from "react";

import "./hero.scss";

import Button from "../shared/Button";
import InfoContent from "../shared/InfoContent";

import heroImg from "../../images/illustration-hero.svg";

function index() {
	return (
		<section id="hero">
			<img className="hero-image" src={heroImg} />

			<div className="content">
				<InfoContent
					title={"A Simple Bookmark Manager"}
					description={
						"A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
					}
				/>

				<Button className={"btn-primary"} text={"Get it on Chrome"} />
				<Button className={"btn-extra"} text={"Get it on Firefox"} />
			</div>
		</section>
	);
}

export default index;
