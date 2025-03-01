import React, { useState } from "react";

import "./header.scss";

import Logo from "./components/Logo";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";

function index() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<header className={showMobileMenu && "show-mobile-menu"}>
			<Logo />
			<DesktopNav />

			{showMobileMenu ? (
				<img src={closeIcon} className="close-icon" onClick={() => setShowMobileMenu(false)} />
			) : (
				<img
					src={hamburgerIcon}
					className="hamburger-icon"
					onClick={() => setShowMobileMenu(true)}
				/>
			)}

			{showMobileMenu && <MobileNav />}
		</header>
	);
}

export default index;
