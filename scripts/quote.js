// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", async () => {
	await this.updateQuote();
});

async function updateQuote() {
	const data = await fetch(
		"https://api.quotable.io/quotes?tags=sadness|philosophy|pain|leadership|ethics"
	)
		.then((response) => response.json())
		.then((json) => json["results"])
		.then((content) =>
			Array.from(content).map((elem) => [elem["content"], elem["author"]])
		);

	const random_elem = data[Math.floor(Math.random() * data.length)];

    let quote_tag = document.getElementsByTagName("blockquote")[0];
    quote_tag.innerHTML = `${random_elem[0]} <footer><cite>${random_elem[1]}</cite></footer>`
}
