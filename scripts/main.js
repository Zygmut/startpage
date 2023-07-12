// Powered by Quotable
// https://github.com/lukePeavey/quotable

const quickLinks = {"g": "https://www.github.com"};

document.addEventListener("DOMContentLoaded", () => {
	this.setTitle();
	this.enableSearch();
});

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

	document.getElementById("title").innerHTML = message;
}

function enableSearch() {
	const searchbar = document.getElementById("searchbar");
	searchbar.addEventListener("keydown", function (event) {
		if (event.key == "Enter") {
			event.preventDefault();
			const text = document.getElementById("searchbar").value; //laver en string med forespørgslen

			if (text == "") {
				return;
			}

			if (quickLinks[text]) {
				window.open(quickLinks[text], "_self");
				return;
			}

			window.open("https://duckduckgo.com/?q=" + text, "_self");
		}
	});
}
