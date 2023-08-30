import logo from "./logo.svg";
import Name from "./components/Name";
import "./App.css";
import Description from "./components/Description";
import Image from "./components/ImagePath";
import Price from "./components/Price";

function App() {
	return (
		<>
			<h1>Hello</h1>
			<Name />
			<Description />
			<Image />
			<Price />
		</>
	);
}

export default App;
