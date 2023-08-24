// Checkbox.js
import Image from "next/image";
import React from "react";

const CheckboxImage = ({ label, isChecked, onChange }) => {
	return (
		<label className="flex items-center space-x-2" style={{ width: "120px", height: "3em" }}>
			<input type="checkbox" className="form-checkbox text-indigo-500" checked={isChecked} onChange={onChange} />
			<Image src={label.value} width={50} height={50} alt={label.label} />
		</label>
	);
};

export default CheckboxImage;
