import React from "react";
import Number from "./Number";
import Operator from "./Operator";

function ButtonList(props) {
	

	const numbers = Array.from(Array(10).keys());
	const listNumbers = numbers.map(n => (
		<Number onClickNumber={props.onClickNumber} key={n} number={n}></Number>
	));

	return (
		<div className="button-list">
			{listNumbers}
			<Operator operator="+/-"></Operator>
			<Operator operator="."></Operator>
			<Operator operator="X"></Operator>
			<Operator operator="-"></Operator>
			<Operator operator="+" onClickOperator={props.onClickOperator}></Operator>
			<Operator operator="=" onClickOperator={props.onClickOperator}></Operator>
		</div>
	);
}

export default ButtonList;
