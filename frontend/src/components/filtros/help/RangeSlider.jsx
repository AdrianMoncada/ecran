// RangeSlider.js
import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slider";
import styled from "styled-components";

const Container = styled.div`
	.slider {
		margin: 30px 0;
		width: 100%;
		height: 2px;
		background-color: #663b9f;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.example-thumb {
		width: 18px;
		height: 18px;
		cursor: grab;
		background-color: #a855f7;
		border-radius: 100%;
		position: relative;
	}

	.example-mark {
		width: 2px;
		height: 10px;
		background-color: #663b9f;
		margin: 10px;
	}

	.year {
		top: 15px;
		left: -7px;
		font-size: 14px;
		position: absolute;
	}
`;

const RangeSlider = ({ min, max, value, onChange }) => {
	const [marcas, setMarcas] = useState([]);

	useEffect(() => {
		const resta = max - min;
		const intervalo = resta / 5;
		const marks = Array.from({ length: 6 }, (_, index) => min + index * intervalo);
		setMarcas(marks);
	}, []);

	return (
		<Container>
			<Slider
				className="slider"
				markClassName="example-mark"
				thumbClassName="example-thumb"
				marks={marcas}
				min={min}
				max={max}
				value={value}
				onChange={onChange}
				renderThumb={(props, state) => (
					<div {...props}>
						<span className="year">{state.valueNow}</span>
					</div>
				)}
			/>
		</Container>
	);
};

export default RangeSlider;
