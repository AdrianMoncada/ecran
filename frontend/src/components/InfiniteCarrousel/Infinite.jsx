import React, { useEffect, useState } from "react";
import { Container } from "./Infinite.styles";
import brands from "@/assets/marcas.json";
import Image from "next/image";
Image;

const Infinite = () => {
	const [brand, setBrand] = useState(brands);

	useEffect(() => {
		if (brand.length < 16) {
			setBrand([...brand, ...brand]);
		}
	}, [brand]);

	return (
		<Container>
			<div className="slider">
				<div className="slide-track">
					{brand.map((item, index) => (
						<div key={index} className="slide">
							<Image src={`images/home/logos/${item.name}.svg`} alt={item.name} width={50} height={50} />
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default Infinite;
