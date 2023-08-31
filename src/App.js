import logo from "./logo.svg";
import Name from "./components/Name";
import "./App.css";
import Description from "./components/Description";
import Price from "./components/Price";
import Card from "react-bootstrap/Card";
import product from "./components/product";

function App() {
	let Uname = "Bob";
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
				className="container"
			>
				{/* This is card, that will take all the seperate components into one */}
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={product.image} />
					<Card.Body>
						<Card.Title>
							<Name />
						</Card.Title>
						<Card.Text>
							<Description />
							<br />
							<Price />
						</Card.Text>
					</Card.Body>
				</Card>

				<br />
				<br />
				<br />

				{/* below is a condition if a username is given.
				if given, it will show hello, the name, and a picture
				if not, then it will show hello you */}
				{Uname ? (
					<>
						<div>
							<p>Hello, {Uname}</p>{" "}
							<img className="w-25" src={logo} alt="Profile Picture" />
						</div>
					</>
				) : (
					<p>Hello you</p>
				)}
			</div>
		</>
	);
}

export default App;
