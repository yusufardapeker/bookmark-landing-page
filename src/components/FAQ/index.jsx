import React from "react";

import "./faq.scss";

import InformationContent from "../shared/InfoContent";
import Button from "../shared/Button";

import { faqContent } from "./constant";

const handleClick = (e) => {
	const clickedFaqElement = e.target.closest(".faq");

	clickedFaqElement.classList.toggle("show");
};

function FAQ() {
	return (
		<section id="faq">
			<InformationContent
				title={"Frequently Asked Questions"}
				description={
					"Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
				}
			/>

			<div className="faq-items">
				{faqContent.map((faq, index) => (
					<div className="faq" key={index}>
						<div className="question" onClick={(e) => handleClick(e)}>
							<h4 className="question-text">{faq.question}</h4>
							<svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="12">
								<path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
							</svg>
						</div>
						<p className="answer">{faq.answer}</p>
					</div>
				))}
			</div>

			<Button text={"More Info"} className={"btn-primary"} />
		</section>
	);
}

export default FAQ;
