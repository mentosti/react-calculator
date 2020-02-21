import React from "react";
import ButtonList from "./components/ButtonList";
import History from "./components/History";
import "./App.css";

class App extends React.Component {
	//useReducer maybe? or redux
	constructor() {
		super();
		this.state = {
			result: 0,
			a: 0,
			b: 0,
			operator: ""
		};
	}

	handleKeydown = e => {
		switch (e.keyCode) {
			case 27:
				this.setState({ result: 0, a: 0, b: 0, operator: "" });
				break;
			case 48:
			case 96:
				this.onClickNumber(0);
				break;
			case 49:
			case 97:
				this.onClickNumber(1);
				break;
			case 50:
			case 98:
				this.onClickNumber(2);
				break;
			case 51:
			case 99:
				this.onClickNumber(3);
				break;
			case 52:
			case 100:
				this.onClickNumber(4);
				break;
			case 53:
			case 101:
				this.onClickNumber(5);
				break;
			case 54:
			case 102:
				this.onClickNumber(6);
				break;
			case 55:
			case 103:
				this.onClickNumber(7);
				break;
			case 56:
			case 104:
				this.onClickNumber(8);
				break;
			case 57:
			case 105:
				this.onClickNumber(9);
				break;
			default:
				break;
		}
	};

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeydown);
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeydown);
	}

	onClickNumber = num => {
		if (this.state.operator === "") {
			this.setState(prevState => {
				return {
					a: prevState.a * 10 + num
				};
			});
		} else {
			this.setState(prevState => {
				return {
					b: prevState.b * 10 + num
				};
			});
		}
	};

	onClickOperator = operator => {
		if (operator === "=") {
			if (this.state.b != null) {
				switch (this.state.operator) {
					case "+":
						this.setState(prevState => ({
							result: prevState.a + prevState.b,
							operator: "",
							a: prevState.a + prevState.b,
							b: 0
						}));
						break;

					default:
						break;
				}
			}
		}
		this.setState({ operator: operator });
	};

	render() {
		return (
			<>
				<h1>BIG NUMBER CALCULATOR</h1>
				<div className="result">{this.state.result}</div>
				<div>
					<ButtonList
						onClickNumber={this.onClickNumber}
						onClickOperator={this.onClickOperator}
					></ButtonList>
					<History></History>
				</div>
			</>
		);
	}
}

export default App;
