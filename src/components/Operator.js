import React from "react";

function Operator(props) {
    let pos = null;
	switch (props.operator) {
		case "+":
			pos = {
				gridColumnStart: 4,
				gridRowStart: 3
			};
			break;
		case "-":
			pos = {
				gridColumnStart: 4,
				gridRowStart: 2
			};
			break;
		case "X":
			pos = {
				gridColumnStart: 4,
				gridRowStart: 1
			};
			break;
		case "+/-":
			pos = {
				gridColumnStart: 1,
				gridRowStart: 4
			};
			break;
		case 4:
			pos = {
				gridColumnStart: 1,
				gridRowStart: 2
			};
			break;
		case 5:
			pos = {
				gridColumnStart: 2,
				gridRowStart: 2
			};
			break;
		case 6:
			pos = {
				gridColumnStart: 3,
				gridRowStart: 2
			};
			break;
		case 7:
			pos = {
				gridColumnStart: 1,
				gridRowStart: 1
			};
			break;
		case 8:
			pos = {
				gridColumnStart: 2,
				gridRowStart: 1
			};
			break;
		case 9:
			pos = {
				gridColumnStart: 3,
				gridRowStart: 1
			};
			break;
		default:
			break;
    }
    
    let clickOperator = () => {
		props.onClickOperator(props.operator);
	};

	return <div className="button" style={pos} onClick={clickOperator}>{props.operator}</div>;
}

export default Operator;
