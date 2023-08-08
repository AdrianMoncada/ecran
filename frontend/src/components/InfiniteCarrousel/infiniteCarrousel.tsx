import React from "react";
import { Slider, SlideTrack, Slide, Brand } from "./infiniteCarrousel.styles";

const InfiniteCarrousel = () => {
	return (
		<div>
			<Slider>
				<SlideTrack>
					<Slide>
						<Brand style={{ height: "70px", padding: "40px 15px" }} src="images/home/DisneyPlusLogo.png" alt="disney" />
					</Slide>
					<Slide>
						<Brand src="images/home/NetflixLogo.png" alt="netflix" />
					</Slide>
					<Slide>
						<Brand style={{ height: "50px", padding: "50px 15px" }} src="images/home/HBOLogo.png" alt="hbo" />
					</Slide>
					<Slide>
						<Brand src="images/home/youtubeLogo.png" alt="youtube" />
					</Slide>
					<Slide>
						<Brand style={{ height: "70px", padding: "40px 15px" }} src="images/home/DisneyPlusLogo.png" alt="disney" />
					</Slide>
					<Slide>
						<Brand src="images/home/NetflixLogo.png" alt="netflix" />
					</Slide>
					<Slide>
						<Brand style={{ height: "50px", padding: "50px 15px" }} src="images/home/HBOLogo.png" alt="hbo" />
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
