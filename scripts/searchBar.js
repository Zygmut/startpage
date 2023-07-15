document.addEventListener("DOMContentLoaded", async () => {
	const quickLinks = await this.buildQuickLinks();
	this.enableSearch(quickLinks);
});

async function buildQuickLinks() {
	const shortcuts = await fetch("shortcuts.json")
		.then((res) => res.text())
		.then((content) => JSON.parse(content))
		.catch((_e) => ({}));

	const card_shortcuts = await fetch("cards.json")
		.then((res) => res.text())
		.then((content) => JSON.parse(content))
		.then((shortcuts) =>
			shortcuts.reduce((acc, card) => {
				card.links.forEach((link) => {
					acc[link.shortcut] = link.link;
				});
				return acc;
			}, {})
		)
		.catch((_e) => ({}));

	return Object.assign(shortcuts, card_shortcuts);
}

function enableSearch(quickLinks) {
	console.log(quickLinks);
	const searchbar = document.getElementById("searchbar");
	searchbar.addEventListener("keydown", function (event) {
		if (event.key == "Enter") {
			event.preventDefault();
			const text = document.getElementById("searchbar").value;

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
