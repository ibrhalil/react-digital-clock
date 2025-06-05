import PropTypes from "prop-types";

const SEGMENTS = {
	0: ["a", "b", "c", "d", "e", "f"],
	1: ["b", "c"],
	2: ["a", "b", "g", "e", "d"],
	3: ["a", "b", "g", "c", "d"],
	4: ["f", "g", "b", "c"],
	5: ["a", "f", "g", "c", "d"],
	6: ["a", "f", "g", "e", "c", "d"],
	7: ["a", "b", "c"],
	8: ["a", "b", "c", "d", "e", "f", "g"],
	9: ["a", "b", "c", "d", "f", "g"],
};

const Digit = ({ number }) => {
	const active = SEGMENTS[number] || [];
	return (
		<div className="digit">
			{["a", "b", "c", "d", "e", "f", "g"].map((seg) => (
				<div
					key={seg}
					className={`segment ${seg} ${
						active.includes(seg) ? "on" : ""
					}`}
				/>
			))}
		</div>
	);
};
Digit.propTypes = {
	number: PropTypes.number.isRequired,
};

export default Digit;
