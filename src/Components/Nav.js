import React from "react";

const Nav = ({setFormat, setTimeFormat}) => {
	return (
		<div style={{cursor: "pointer"}}className="d-flex flex-row justify-content-evenly align-items-center nav-options">
			<p
				className="format-time-nav"
				onClick={() => {
					setFormat(0);
				}}
			>
				Words
			</p>
			<p className="format-time-nav"> | </p>
			<p
				className="format-time-nav"
				onClick={() => {
					setFormat(1);
				}}
			>
				12 Hour
			</p>
			<p className="format-time-nav"> | </p>
			<p
				className="format-time-nav"
				onClick={() => {
					setFormat(2);
				}}
			>
				24 Hour
			</p>
		</div>
	);
};

export default Nav;
