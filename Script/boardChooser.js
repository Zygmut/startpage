function boardPicker() {
    var boards = []; //for checking if board already is used

    for(let i = 0; i < 4; i++){
        var platform = generateRandomPlatform();
        var board = generateRandomBoard(platform);
        while(boards.includes(board)){
            board = generateRandomBoard(platform);
        }
        boards.push(board);
        updateBoardDisplay(board, platform, "board" + i);
    }
}
 
function getPlatforms() {
    return ["reddit", "chan"];
}

function generateRandomPlatform() {
    var platform = getPlatforms(); //generates array of platforms

    var choosenPlatform = Math.floor((Math.random() * platform.length));    

    return platform[choosenPlatform];
}

function generateRandomBoard(platform) {
    var boards = [];

    switch(platform) {
        case("reddit"):
            boards.push("unixporn");
            boards.push("nextfuckinglevel");
            boards.push("WTF");
            boards.push("grandorder");
            boards.push("aww");
            boards.push("Whatcouldgowrong");
            boards.push("startpages");
            boards.push("IdiotsInCars");
            boards.push("VaporwaveAesthetics");
            boards.push("greentexts");
            boards.push("assholedesign");
            boards.push("collguides");
            boards.push("medizzy");
            boards.push("raspberry_pi");
            boards.push("researchchemicals");
            boards.push("algotrading");
            boards.push("Python");
            boards.push("DesignPorn");
            boards.push("minimalism");
            boards.push("ProgrammerHumor");
            boards.push("softwaregore")
            break;

        case("chan"):
            boards.push("/wg/");
            boards.push("/wsg/");
            boards.push("/g/");
            boards.push("/his/");
            boards.push("/ck/");
            boards.push("/vg/");
            boards.push("/v/");
            boards.push("/vst/");
            boards.push("/mu/");
            boards.push("/x/");
            boards.push("/sci/");
            boards.push("/lit/");
            boards.push("/po/");
            boards.push("/tv/");
            break;
    }

    var choosenBoard = Math.floor((Math.random() * boards.length));    

    return boards[choosenBoard];

}
 
function pickAuthor(platforms) {
    var choosenBoard = Math.floor((Math.random() * platforms.length));    
 
    return platforms[choosenBoard];
}
 
function updateBoardDisplay(boardName, platform, boardID) {
    var preamble;

    switch(platform) {
        case("chan"):
            preamble = "https://boards.4chan.org";
            break;

        case("reddit"):
            preamble = "https://www.reddit.com/r/";
            break;
    }

    document.getElementById(boardID).href = preamble + boardName;
    document.getElementById(boardID).innerHTML = boardName;
}