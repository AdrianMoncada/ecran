import React from "react";
import { ButtonStyle } from "./AddButton.styles";
import { FiPlus } from "react-icons/fi";
// { movie, addToMyList }
const AddButton = () => {
	// const [added, setAdded] = useState(false);

	// const handleAddToMyList = () => {
	// 	addToMyList(movie);
	// 	setAdded(true);
	// };
	return (
		<ButtonStyle>
			<FiPlus />
			<p>Agregar a mi lista</p>
		</ButtonStyle>
	);
};

export default AddButton;
