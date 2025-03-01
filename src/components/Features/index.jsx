import React, { useEffect, useRef, useState } from "react";

import "./features.scss";

import InformationContent from "../shared/InfoContent";
import { tabs } from "./constants";

function index() {
	const [links, setLinks] = useState([]);
	const [activeLink, setActiveLink] = useState();

	const linksRef = useRef([]);

	useEffect(() => {
		setLinks(linksRef.current);
		setActiveLink(linksRef.current[0]);
	}, []);

	activeLink?.classList.add("active");

	const handleFeaturesTabs = (e) => {
		links.forEach((link) => {
			link.classList.remove("active");
		});

		e.target.classList.add("active");

		setActiveLink(e.target);
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
					<li
						className="tab-link"
						key={index}
						onClick={(e) => handleFeaturesTabs(e)}
						ref={(el) => (linksRef.current[index] = el)}
					>
						{tab.text}
					</li>
				))}
			</ul>

			<div className="tabs">
				{tabs.map((tab, index) => {
					return (
						<div className="tab" key={index}>
							{activeLink?.textContent === tab.text && tab.component}
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default index;
