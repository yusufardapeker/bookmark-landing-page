import "./faq.css";

import InformationContent from "../shared/InfoContent";
import Button from "../shared/Button";

import { faqContent } from "./constant";

const toggleAnswer = (e) => {
	const clickedFaqElement = e.target.closest(".faq-item");

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
					<div className="faq-item" key={index}>
						<div className="question" onClick={(e) => toggleAnswer(e)}>
							<p className="question-text">{faq.question}</p>

							<button className="toggle-answer-button" aria-label="Toggle answer">
								<svg
									className="arrow-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="12"
								>
									<path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
								</svg>
							</button>
						</div>
						<p className="answer" aria-live="assertive">
							{faq.answer}
						</p>
					</div>
				))}
			</div>

			<Button>More Info</Button>
		</section>
	);
}

export default FAQ;
