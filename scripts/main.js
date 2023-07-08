window.onload = () => {
	this.setTitle();
};

function setTitle() {
	const currentTime = new Date();
	const currentTimeDecimal =
		currentTime.getHours() + currentTime.getMinutes() / 100;

	const inRange = (value, min, max) => value >= min && value <= max;

	const timeRanges = [
		{ range: [0, 5.59], message: "Take some sleep" },
		{ range: [6, 8.59], message: "You're up early" },
		{ range: [9, 11.59], message: "Have a good day ahead" },
		{ range: [12, 16.59], message: "Good Afternoon" },
		{ range: [17, 19.59], message: "Good Evening" },
		{ range: [20, 23.59], message: "It's time to wrap up for the day" },
	];

	const message = timeRanges.find((timeRange) => {
		const [start, end] = timeRange.range;
		return inRange(currentTimeDecimal, start, end);
	}).message;

	console.log(message);
	document.getElementById("title").innerHTML = message;
}
