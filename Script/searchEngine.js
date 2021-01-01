function search(event) {
    if (event.key == "Enter") {
        event.preventDefault()
        let text = document.getElementById("searchbar").value; //laver en string med forespørgslen
        url = 'https://duckduckgo.com/?q=' + text;
    	window.open(url, '_self');
    }
}
