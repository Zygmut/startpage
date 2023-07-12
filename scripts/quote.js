// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
	fetch("quotes.json")
		.then((res) => res.text())
		.then((content) => JSON.parse(content))
		.then((json) => this.randomElem(json["quotes"]))
		.then((elem) => this.updateQuote(elem["quote"], elem["author"]))
		.catch((e) => this.updateQuote("We suffer more often in imagination than in reality", "Lucius Annaeus Seneca"));
	this.updateQuote();
});

function updateQuote(content, author) {
	const quote_tag = document.getElementsByTagName("blockquote")[0];
	quote_tag.innerHTML = `${content} <footer class="m-0 mt-2"><cite>${author}</cite></footer>`;
}

function randomElem(array) {
	return array[Math.floor(Math.random() * array.length)];
}
