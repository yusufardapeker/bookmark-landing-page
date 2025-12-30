import { useEffect, useRef, useState } from "react";

import "./features.css";

import InformationContent from "../shared/InfoContent";
import { tabs } from "./constants";

function index() {
	const tabButtonElements = useRef([]);
	const [activeButton, setActiveButton] = useState();

	useEffect(() => {
		setActiveButton(tabButtonElements.current[0]);
	}, []);

	activeButton?.classList.add("active");

	const handleTabs = (e) => {
		setActiveButton(e.target);

		tabButtonElements.current.forEach((link) => link.classList.remove("active"));
		e.target.classList.add("active");
	};

	return (
		<section id="features">
			<InformationContent
				title={"Features"}
				description={
					"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
				}
			/>

			<ul className="tab-buttons">
				{tabs.map((tab, index) => (
					<li key={index} className="tab-button-wrapper">
						<button
							className="tab-button"
							onClick={(e) => handleTabs(e)}
							ref={(el) => (tabButtonElements.current[index] = el)}
						>
							{tab.text}
						</button>
					</li>
				))}
			</ul>

			<div className="tab-contents">
				{tabs.map((tab, index) => (
					<div className="tab-content" key={index}>
						{activeButton?.textContent === tab.text && tab.component}
					</div>
				))}
			</div>
		</section>
	);
}

export default index;
