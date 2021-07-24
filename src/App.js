import "./Styles/App.css";
import Clock from "./Components/Clock";
import NumClock from "./Components/NumericClock";
import Nav from "./Components/Nav";
import {Container, Row, Col} from "react-bootstrap";
import {useState} from "react";

function App() {
	const [format, setFormat] = useState(0);
	const [menuState, setMenuState] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? "App dark" : "App"}>
			<Container fluid className={darkMode ? "dark" : ""}>
				<Row>
					<Col xs={{span: 1, offset: 11}} className="justify-content-center">
						{menuState ? <NumClock></NumClock> : <></>}
					</Col>
				</Row>
			</Container>
			<Container
				fluid
				className={darkMode ? "dark d-flex flex-column justify-content-center h-100" : "d-flex flex-column justify-content-center h-100"}
			>
				<Row>
					<Col xs={{span: 12, offset: 0}} className="clock-wrapper">
						<Clock words={format === 0} timeFormat={format}></Clock>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex flex-column align-items-center justify-content-end">
						{menuState ? <Nav setFormat={setFormat}></Nav> : <></>}
					</Col>
				</Row>
			</Container>
			<Container fluid className={darkMode ? "dark" : ""}>
				<Row>
					<Col
						xs={{span: 5, offset: 7}}
						sm={{span: 3, offset: 9}}
						md={{span: 2, offset: 10}}
						xl={{span: 1, offset: 11}}
					>
						<p
							style={{opacity: "0.3", cursor: "pointer", marginTop: "auto", marginBottom: "auto"}}
							onClick={() => {
								setMenuState(!menuState);
							}}
						>
							{menuState ? "Hide Menu" : "Show Menu"}
						</p>
					</Col>
				</Row>
				<Row>
					<Col
						xs={{span: 5, offset: 7}}
						sm={{span: 3, offset: 9}}
						md={{span: 2, offset: 10}}
						xl={{span: 1, offset: 11}}
					>
						<p
							style={{opacity: "0.3", cursor: "pointer"}}
							onClick={() => {
								setDarkMode(!darkMode);
							}}
						>
							{darkMode ? "Light Mode" : "Dark Mode"}
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
