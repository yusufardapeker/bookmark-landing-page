import React, { useEffect, useState } from "react";

import "./features.scss";

import InformationContent from "../shared/InfoContent";
import { tabs } from "./constants";

function index() {
	const [links, setLinks] = useState([]);
	const [activeLink, setActiveLink] = useState();

	useEffect(() => {
		const linkElements = document.querySelectorAll(".tab-link");
		setLinks(linkElements);
	}, []);

	if (links.length > 0 && !activeLink) {
		links[0].classList.add("active");
	}

	const handleFeaturesTabs = (e) => {
		links.forEach((link) => {
			link.classList.remove("active");
		});

		e.target.classList.add("active");

		const activeLinkElement = document.querySelector(".tab-link.active");
		setActiveLink(activeLinkElement);
	};

	return (
		<section id="features">
			<InformationContent
				title={"Features"}
				description={
					"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
				}
			/>

			<ul className="links-wrapper">
				{tabs.map((tab, index) => (
					<li className="tab-link" key={index} onClick={(e) => handleFeaturesTabs(e)}>
						{tab.text}
					</li>
				))}
			</ul>

			<div className="tabs">
				{tabs.map((tab, index) => {
					return (
						<div className="tab" key={index}>
							{index === 0 ? !activeLink && tab.component : ""}
							{activeLink?.textContent === tab.text && tab.component}
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default index;
