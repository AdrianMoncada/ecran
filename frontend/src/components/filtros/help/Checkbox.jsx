// Checkbox.js
import React from "react";

const Checkbox = ({ label, isChecked, onChange }) => {
	return (
		<label className="flex items-center space-x-2" style={{ width: "140px", height: "2em" }}>
			<input type="checkbox" className="form-checkbox text-indigo-500" checked={isChecked} onChange={onChange} />
			<span style={{ fontSize: "1em", color: "#0F172A" }}>{label}</span>
		</label>
	);
};

export default Checkbox;
