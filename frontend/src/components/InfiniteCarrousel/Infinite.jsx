import React from "react";
import { Container } from "./Infinite.styles";
import brands from "@/assets/marcas.json";
import Image from "next/image";

const Infinite = () => {
	return (
		<Container>
			<div className="slider">
				<div className="slide-track">
					{brands.map((item, index) => (
						<div key={index} className="slide">
							<Image src={`images/home/logos/${item.name}.svg`} alt={item.name} width={50} height={50} />
						</div>
					))}
					{brands.map((item, index) => (
						<div key={index} className="slide">
							<Image src={`images/home/logos/${item.name}.svg`} alt={item.name} width={50} height={50} />
						</div>
					))}
					{brands.map((item, index) => (
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
