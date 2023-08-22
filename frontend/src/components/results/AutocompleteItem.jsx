import React from "react";
import Image from "next/image";
import Link from "next/link";
import { List } from "./AutocompleteItem.styles";

const AutocompleteItem = ({ movieId, title, image_url }) => {
	return (
		<List>
			<Link className="list" href={`/movies/${movieId}`}>
				<div className="imageList">
					<Image src={image_url} alt={title} className="image" width={50} height={50} />
				</div>

				<div className="descriptionList">
					<h3 className="titleList">{title}</h3>
					<p>Genero</p>
					<p>Año</p>
				</div>
			</Link>
			<hr />
		</List>
	);
};

export default AutocompleteItem;
