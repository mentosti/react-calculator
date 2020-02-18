import React from "react";
import ButtonList from "./components/ButtonList";
import History from "./components/History";
import "./App.css";

class App extends React.Component {
	//useReducer maybe? or redux
	constructor() {
		super();
		this.state = {
			result: 0
		};
	}

	onClickNumber = num => {
		this.setState(prevState => {
			console.log(prevState.result)
			return {
				result: prevState.result * 10 + num
			};
		},()=>console.log(this.state.result));
		
	};

	render() {
		return (
			<div>
				<h1>BIG NUMBER CALCULATOR</h1>
				<div className="result">{this.state.result}</div>
				<div style={{ margin: "auto 0" }}>
					<ButtonList onClickNumber={this.onClickNumber}></ButtonList>
					<History></History>
				</div>
			</div>
		);
	}
}

export default App;
