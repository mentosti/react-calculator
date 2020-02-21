import React from "react";

function Number(props) {
	let pos = null;
	switch (props.number) {
		case 0:
			pos = {
				gridColumnStart: 2,
				gridRowStart: 4
			};
			break;
		case 1:
			pos = {
				gridColumnStart: 1,
				gridRowStart: 3
			};
			break;
		case 2:
			pos = {
				gridColumnStart: 2,
				gridRowStart: 3
			};
			break;
		case 3:
			pos = {
				gridColumnStart: 3,
				gridRowStart: 3
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

	let clickNumber = () => {
		props.onClickNumber(parseInt(props.number));
	};

	return (
		<div className="button " style={pos} onClick={clickNumber}>
			{props.number}
		</div>
	);
}

export default Number;
