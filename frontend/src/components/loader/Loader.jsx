import React from "react";
import { Jelly } from "@uiball/loaders";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;

const Loader = () => {
	return (
		<Container>
			<Jelly size={500} speed={0.9} color="black" />
		</Container>
	);
};

export default Loader;
