import React from "react";
import Number from "./Number";
import Operator from "./Operator";

function ButtonList(props) {
	return (
		<div className="button-list">
			<Number onClickNumber={props.onClickNumber}>7</Number>
			<Number onClickNumber={props.onClickNumber}>8</Number>
			<Number onClickNumber={props.onClickNumber}>9</Number>
			<Number onClickNumber={props.onClickNumber}>4</Number>
			<Number onClickNumber={props.onClickNumber}>5</Number>
			<Number onClickNumber={props.onClickNumber}>6</Number>
			<Number onClickNumber={props.onClickNumber}>1</Number>
			<Number onClickNumber={props.onClickNumber}>2</Number>
			<Number onClickNumber={props.onClickNumber}>3</Number>
			<Operator>-</Operator>
			<Number onClickNumber={props.onClickNumber}>0</Number>
			<Operator>.</Operator>
		</div>
	);
}

export default ButtonList;
