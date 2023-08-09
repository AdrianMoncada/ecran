import React from "react";
import { Slider, SlideTrack, Slide, Brand } from "./infiniteCarrousel.styles";

const InfiniteCarrousel = () => {
	return (
		<div>
			<Slider>
				<SlideTrack>
					<Slide>
						<Brand src="images/home/DisneyPlusLogo.png" alt="disney" />
					</Slide>
					<Slide>
						<Brand src="images/home/NetflixLogo.png" alt="netflix" />
					</Slide>
					<Slide>
						<Brand src="images/home/HBOLogo.png" alt="hbo" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/DisneyPlusLogo.png" alt="disneyplus" />
					</Slide>
					<Slide>
						<Brand src="images/home/NetflixLogo.png" alt="netflix" />
					</Slide>
					<Slide>
						<Brand className="brand" src="images/home/HBOLogo.png" alt="hbo" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
				</SlideTrack>
			</Slider>
		</div>
	);
};

export default InfiniteCarrousel;
