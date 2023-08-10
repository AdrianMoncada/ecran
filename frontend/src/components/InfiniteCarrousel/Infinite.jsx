import React, { useEffect, useState } from "react";
import { Container } from "./Infinite.styles";
import brands from "@/assets/marcas.json";

const Infinite = () => {
	const [brand, setBrand] = useState(brands);

	useEffect(() => {
		if (brand.length < 16) {
			setBrand([...brand, ...brand])
		}
	}, [brand])

	return (
		<Container>
			<div className="slider">
				<div className="slide-track">
					{
						brand.map((item, index) => <div key={index} className="slide">
							<img src={`images/home/logos/${item.name}.svg`} alt={item.name} />
						</div>)
					}
				</div>
			</div>
		</Container>
	);
};

export default Infinite;
