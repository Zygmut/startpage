const quickLinks = { g: "https://www.github.com" };

document.addEventListener("DOMContentLoaded", () => {
	this.enableSearch();
});

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
