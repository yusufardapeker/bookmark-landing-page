import "./hero.css";

import Button from "../shared/Button";

import heroImg from "../../images/illustration-hero.svg";

function index() {
	return (
		<section id="hero">
			<img className="hero-image" src={heroImg} alt="" />

			<div className="hero-content">
				<h1>A Simple Bookmark Manager</h1>

				<p className="description">
					A clean and simple interface to organize your favourite websites. Open a new browser tab
					and see your sites load instantly. Try it for free.
				</p>

				<div className="hero-buttons-wrapper">
					<Button>Get it on Chrome</Button>
					<Button className={"btn-extra"}>Get it on Firefox</Button>
				</div>
			</div>
		</section>
	);
}

export default index;
