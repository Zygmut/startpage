document.addEventListener("DOMContentLoaded", async () => {
	const json = await fetch("cards.json")
		.then((res) => res.text())
		.then((content) => JSON.parse(content))
		.catch((e) => ({}));

	this.generateCSS(json);
	this.generateHTML(json);
	this.generateShortcuts(json);
});

function generateCSS(array) {
	let style = document.createElement("style");

	style.innerHTML = array
		.map((elem) => this.generateCardCss(elem))
		.join("\n");

	const head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
}

function generateCardCss(elem) {
	return `
        .${elem["title"]}{
            color: ${elem["color"]};
        }
        .${elem["title"]} *:hover {
            color: inherit;
            transition: color 0.1s ease-in;
        }`;
}

function generateHTML(array) {
	const link_boxes = document.getElementById("link-boxes");
	link_boxes.innerHTML = array
		.map((elem) => generateCardHtml(elem))
		.join("\n");
}

function generateCardHtml(elem) {
	return `
        <div class="${
			elem["title"]
		} card p-3 d-flex flex-column flex-grow-1 gap-2 rounded-3">
            <h2 class="card-title p-0 m-0 text-center">${elem["title"]}</h2>

            <div class="card-body p-0">
                <ul class="list-group text-center d-flex flex-col justify-content-between h-100">
                    ${Array.from(elem["links"])
						.map((link) => generateLink(link))
						.join("\n")}
                    </li>
                </ul>
            </div>
        </div>
    `;
}

function generateLink(link) {
	return `
        <li class="p-0 list-group-item border-0 bg-transparent"><a class="text-decoration-none"
            href="${link["link"]}">${link["display"]}</a></li>`;
}

function generateShortcuts(json) {
	console.warn(
		"[ cards.js ]: generateShortcuts(json) is not implemented yet"
	);
}
