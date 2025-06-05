import { useEffect, useState } from "react";
import Digit from "./Digit";
import "../styles/DigitStyle.css";

const DigitalClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	const formatDigits = (num) =>
		num.toString().padStart(2, "0").split("").map(Number);

	const [h1, h2] = formatDigits(time.getHours());
	const [m1, m2] = formatDigits(time.getMinutes());
	const [s1, s2] = formatDigits(time.getSeconds());

	return (
		<div
			style={{
				display: "flex",
				alignContent: "center",
				justifyContent: "center",
			}}
		>
			<Digit number={h1} />
			<Digit number={h2} />
			<ColonDot />
			<Digit number={m1} />
			<Digit number={m2} />
			<ColonDot />
			<Digit number={s1} />
			<Digit number={s2} />
		</div>
	);
};

const ColonDot = () => (
	<div className="colon">
		<div className="colon-dot"></div>
		<div className="colon-dot"></div>
	</div>
);

export default DigitalClock;
