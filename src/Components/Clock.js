import React, {useState, useEffect, useCallback} from "react";

const Clock = ({words, timeFormat}) => {
	// const [timeFormat, setTimeFormat] = useState(false);

	const getTime = useCallback(() => {
		var currentDate = new Date();
		var hr, min;

		if (timeFormat === 1) {
			hr =
				currentDate.getHours() > 12
					? currentDate.getHours() - 12
					: currentDate.getHours();
		} else {
			hr = currentDate.getHours();
		}

		min =
			currentDate.getMinutes().toString().length < 2
				? "0" + currentDate.getMinutes()
				: currentDate.getMinutes();

		return hr + ":" + min;
	}, [timeFormat]);

	const getWordTime = () => {
		var currentDate = new Date();
		var hrs = currentDate.getHours();
		if (hrs > 12) {
			hrs = hrs - 12;
		}

		var min = currentDate.getMinutes();
		if (min < 5) {
			setMinuteWord("");
		} else if (min >= 5 && min < 10) {
			setMinuteWord("FIVE");
			setMinuteHelperWord("PAST");
		} else if (min >= 10 && min < 15) {
			setMinuteWord("TEN");
			setMinuteHelperWord("PAST");
		} else if (min >= 15 && min < 20) {
			setMinuteWord("QUARTER");
			setMinuteHelperWord("AFTER");
		} else if (min >= 20 && min < 30) {
			setMinuteWord("TWENTY");
			setMinuteHelperWord("PAST");
		} else if (min >= 30 && min < 45) {
			setMinuteWord("HALF");
			setMinuteHelperWord("PAST");
		} else if (min >= 30 && min < 40) {
			setMinuteWord("TWENTY");
			setMinuteHelperWord("TO");
			hrs = hrs + 1;
		} else if (min >= 40 && min < 50) {
			setMinuteWord("QUARTER");
			setMinuteHelperWord("TO");
			hrs = hrs + 1;
		} else if (min >= 50 && min < 55) {
			setMinuteWord("TEN");
			setMinuteHelperWord("TO");
			hrs = hrs + 1;
		} else {
			setMinuteWord("FIVE");
			setMinuteHelperWord("TO");
			hrs = hrs + 1;
		}

		switch (hrs) {
			case 1:
				setHourWord("ONE");
				break;
			case 2:
				setHourWord("TWO");
				break;
			case 3:
				setHourWord("THREE");
				break;
			case 4:
				setHourWord("FOUR");
				break;
			case 5:
				setHourWord("FIVE");
				break;
			case 6:
				setHourWord("SIX");
				break;
			case 7:
				setHourWord("SEVEN");
				break;
			case 8:
				setHourWord("EIGHT");
				break;
			case 9:
				setHourWord("NINE");
				break;
			case 10:
				setHourWord("TEN");
				break;
			case 11:
				setHourWord("ELEVEN");
				break;
			case 12:
				setHourWord("TWELVE");
				break;
			default:
				setHourWord("UNDEFINED");
		}
	};
	const [time, setTime] = useState(getTime());
	const [minuteWord, setMinuteWord] = useState("");
	const [minuteHelperWord, setMinuteHelperWord] = useState("");
	const [hourWord, setHourWord] = useState("");
	//render dummy to control unintended renders from "setInterval"
	const [dummy, setDummy] = useState(true);

	useEffect(() => {
		setTime(getTime());
		getWordTime();
	}, [getTime, dummy]);

	useEffect(() => {
		setInterval(() => {
			setDummy(!dummy);
		}, 1000);
	});

	return (
		<div>
			{words ? (
				minuteWord === "" ? (
					<p className="clock-display-words">
						IT'S <br></br>
						{hourWord}.
					</p>
				) : (
					<p className="clock-display-words">
						IT'S <br></br> {minuteWord} <br></br> {minuteHelperWord} <br></br>
						{hourWord}.
					</p>
				)
			) : (
				<p className="clock-display">
					{time}
					{/* {timeFormat === 1
						? (() => {
								let curr = new Date();
								return curr.getHours();
						  }) > 12
							? "AM"
							: "PM"
						: ""} */}
				</p>
			)}
		</div>
	);
};

export default Clock;
