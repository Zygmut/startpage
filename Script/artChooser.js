//HOW TO EDIT IMAGES
// 1. Add your images to a folder under Images. You can have more than one.
// 1. Currently the scripts chooses a folder at random.
// 1. Change the folders you use in "getFolders()"
// 2. Change the artists you have in "getArtists()"
// 3. Change the images for each artist in "pickImage(artist)".
// 3. These are all hardcoded, so make sure you get the file-name and -type correct 

function artPicker() {
    var folder = pickFolder(); 
    var artist = pickArtist(); 
 
    var image = pickImage(artist); //randomly picks an image from the given arist
 
    updateImageDisplay(image, folder) //updates UI elements
}

function pickFolder() {
    var folders = getFolders();
    var choosenFolder = Math.floor((Math.random() * folders.length)); 

    return folders[choosenFolder];
}

function pickArtist() {   
    var artists = getArtists();
    var choosenArtist = Math.floor((Math.random() * artists.length)); 

    return artists[choosenArtist];
}


function pickImage(artist) {
    var images = [];
    switch(artist) {
        case("Aephanemer"):
            images.push("aephanemer_prokopton.jpg");
            break;

        case("Afsky"):
            images.push("afsky_oftedød.jpg");
            break;
        
        case("Alcest"):
            images.push("alcest_spiritual.jpg");
            break;
        
        case("Arch Enemy"):
            images.push("archenemy_willpower.jpg");
            break;
        
        case("Battle Beast"):
            images.push("battlebeast_pain.jpg");
            images.push("battlebeast_unholy.jpg");
            break;
        
        case("Hinayana"):
            images.push("hinayana_cosmic.jpg");
            break;
        
        case("Myrkur"):
            images.push("myrkur_folkesange.jpg");
            images.push("myrkur_m.jpg");
            break;

        case("Visions of Atlantis"):
            images.push("visionsatlantis_wanderers.jpg");
            break;

        case("Wuthering Heights"):
            images.push("wuthering_farfrom.jpg");
            images.push("wuthering_shadow.jpg");
            images.push("wuthering_salt.jpg");
            break;

        case("Æther Realm"):
            images.push("æther_redneckvikings.jpg");
            images.push("æther_tarot_old.jpg");
            images.push("æther_tarot_new.jpg");
            break;
    }
    var choosenImage = Math.floor((Math.random() * images.length));    
    return images[choosenImage];
}

function updateImageDisplay(image, folder) {
    document.getElementById("imageDisplayer").style.backgroundImage = "url('./Images/" + folder + "/" + image + "')";
}

function getFolders() {
    return ["Albums"];
}

function getArtists() {
    
    return ["Aephanemer", "Afsky", "Alcest",
    "Arch Enemy", "Battle Beast", "Hinayana", "Myrkur",
    "Visions of Atlantis", "Wuthering Heights", "Æther Realm"];
}