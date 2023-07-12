document.addEventListener("DOMContentLoaded", async () => {
	const quote = await fetch("quotes.json")
		.then((res) => res.text())
		.then((content) => JSON.parse(content))
		.then((json) => this.randomElem(json))
		.catch((_e) => ({
			quote: "We suffer more often in imagination than in reality",
			author: "Lucius Annaeus Seneca",
		}));

	this.updateQuote(quote["quote"], quote["author"]);
});

function updateQuote(content, author) {
	const quote_tag = document.getElementsByTagName("blockquote")[0];
	quote_tag.innerHTML = `${content} <footer class="m-0 mt-2"><cite>${author}</cite></footer>`;
}

function randomElem(array) {
	return array[Math.floor(Math.random() * array.length)];
}
