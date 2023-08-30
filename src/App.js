import logo from "./logo.svg";
import Name from "./components/Name";
import "./App.css";
import Description from "./components/Description";
import Image from "./components/ImagePath";
import Price from "./components/Price";
import Card from "react-bootstrap/Card";
import product from "./components/product";

function App() {
	return (
		<>
			<h1>Hello</h1>

			<Description />

			<Price />

			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={product.image} />
				<Card.Body>
					<Card.Title>
						<Name />
					</Card.Title>
					<Card.Text>
						<Description />
						<Price />
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default App;
