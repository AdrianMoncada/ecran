import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, onStarClick }) => {
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(
				<FaStar
					key={i}
					onClick={() => onStarClick(i)}
					style={{ color: "yellow", marginRight: "8px", fontSize: "28px" }}
				/>,
			);
		} else if (i - 0.5 === rating) {
			stars.push(
				<FaStarHalfAlt
					key={i}
					onClick={() => onStarClick(i)}
					style={{ color: "yellow", marginRight: "8px", fontSize: "28px" }}
				/>,
			);
		} else {
			stars.push(
				<FaStar
					key={i}
					onClick={() => onStarClick(i)}
					style={{ color: "white", marginRight: "8px", fontSize: "28px" }}
				/>,
			);
		}
	}

	return <div style={{ display: "flex" }}>{stars}</div>;
};

export default StarRating;
