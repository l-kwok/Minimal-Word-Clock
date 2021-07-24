import React, {useState, useEffect, useCallback} from "react";
const NumericClock = () => {
	const [timeFormat, setTimeFormat] = useState(false);

	const getTime = useCallback(() => {
		var currentDate = new Date();
		var hr, min;

		if (timeFormat) {
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

	const [time, setTime] = useState(getTime());
	const [dummy, setDummy] = useState(true);

	useEffect(() => {
		setTime(getTime());
	}, [getTime, dummy]);

	useEffect(() => {
		setTimeout(() => {
			setDummy(!dummy);
		}, 1000);
	});

	return (
		<div className="numeric-clock-display">
			<p
				style={{cursor: "pointer"}}
				onClick={() => {
					setTimeFormat(!timeFormat);
				}}
			>
				{time}
				{timeFormat
					? (() => {
							let curr = new Date();
							return curr.getHours();
					  }) > 12
						? "AM"
						: "PM"
					: ""}
			</p>
		</div>
	);
};

export default NumericClock;
