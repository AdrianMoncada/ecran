import React from "react";
import { Container, CardHeader } from "./CardSeries.styles";

import Link from "next/link";

const CardSerie = ({ serie }) => {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "430px" }}>
			<Container imageUrl={serie?.image_url}>
				<CardHeader>
					<div>
						<p>{serie?.release_date}</p>
						<p>Seasons {serie?.seasons}</p>
					</div>
				</CardHeader>
				<h1 className="title">{serie?.title}</h1>

				<Link className="button" href={`/series/${serie.serieId}`}>
					Ver más
				</Link>
			</Container>
		</div>
	);
};

export default CardSerie;
