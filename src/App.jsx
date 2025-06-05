import DigitalClock from "./components/DigitalClock";
import "./App.css";

const App = () => {
	return (
		<>
			<div
				style={{
					textAlign: "center",
					padding: "20px",
					background: "#290701",
					color: "#d73c21",
				}}
			>
				<h1>Digital Clock</h1>
				<p>React Digital Clock with 7-segment display</p>
				<br />

				<DigitalClock />
			</div>
		</>
	);
};

export default App;
