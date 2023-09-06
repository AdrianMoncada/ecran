import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating, onStarClick }) => {
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(
				<FontAwesomeIcon
					key={i}
					icon={solidStar}
					onClick={() => onStarClick(i)}
					style={{ color: "yellow", marginRight: "8px", fontSize: "28px" }}
				/>,
			);
		} else if (i - 0.5 === rating) {
			stars.push(
				<FontAwesomeIcon
					key={i}
					icon={faStarHalfAlt}
					onClick={() => onStarClick(i)}
					style={{ color: "yellow", marginRight: "8px", fontSize: "28px" }}
				/>,
			);
		} else {
			stars.push(
				<FontAwesomeIcon
					key={i}
					icon={regularStar}
					onClick={() => onStarClick(i)}
					style={{ color: "white", marginRight: "8px", fontSize: "28px" }}
				/>,
			);
		}
	}

	return <div>{stars}</div>;
};

export default StarRating;
