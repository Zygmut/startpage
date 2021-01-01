// HOW TO EDIT QUOTES
// The script first chooses a random author and then a random quote from this author.
// I don't know how to make it automatically fetch the information, so it is hardcoded
// 1. Change the array of authors to your liking in "getAuthor()"
// 2. Edit the quotes in "pickQuote". This is the boring, manual work :D
// 3. You can add as many authors and quotes as you'd like. I don't know when/if performance starts to drop significantly.

function quotePicker() {
   var authors = getAuthors(); 
   var author = pickAuthor(authors);
   var quote = pickQuote(author); 

   updateDisplay(author, quote) //updates UI elements
}

function getAuthors() {

    return ["Napoleon Bonaparte", "Augustus Caesar",
    "Julius Caesar", "Marcus Aurelius", "Seneca", "Winston Churchill",
    "Christopher Columbus", "Albert Camus", "Archer", "Shirou Emiya", "Kirei Kotomine", "Cowboy Bebop"];
}

function pickAuthor(authors) {

    var choosen = Math.floor((Math.random() * authors.length));    

    return authors[choosen];
}

function pickQuote(author) {   

    var quotes = []; 

    switch(author) {
        case("Napoleon Bonaparte"):
            quotes.push("Show me a family of readers, and I will show you the people who move the world.");
            quotes.push("History is a set of lies agreed upon.");
            quotes.push("Imagination governs the world.");
            quotes.push("Nothing is more difficult, and therefore more precious, than to be able to decide.");
            quotes.push("A leader is a dealer in hope.");
            quotes.push("The only victories which leave no regret are those which are gained over ignorance.");
            quotes.push("Men are Moved by two levers only: fear and self interest.");
            quotes.push("The best way to keep one's word is not to give it.");
            quotes.push("He who fears being conquered is sure of defeat.");
            quotes.push("In politics, stupidity is not a handicap.");
            quotes.push("Men are more easily governed through their vices than through their virtues.");
            quotes.push("Music is what tell us that the human race is greater than we realize.");
            quotes.push("Four hostile newspapers are more to be feared than a thousand bayonets..");
            quotes.push("Glory is fleeting, but obscurity is forever.");
            quotes.push("If we could read the past histories of all our enemies we would disregard all hostility for them.");
            quotes.push("A throne is only a bench covered with velvet.");
            break;

        case("Augustus Caesar"):
            quotes.push("You cheer my heart, who build as if Rome would be eternal.");
            quotes.push("We write our names in the sand: and then the waves roll in and wash them away.");
            quotes.push("Only that which is well done is quickly done");
            break;

        case("Julius Caesar"):
            quotes.push("As a rule, men worry more about what they can't see than about what they can.");           
            quotes.push("Veni, Vedi, Veci");
            quotes.push("In war, events of importance are the result of trivial causes");
            quotes.push("The die is cast");
            quotes.push("What we wish, we readily believe, and what we ourselves think, we imagine others think also.");
            break;

        case("Marcus Aurelius"):
            quotes.push("It is not death that a man should fear, but he should fear never beginning to live.");    
            quotes.push("Dwell on the beauty of life. Watch the stars, and see yourself running with them.");
            quotes.push("You have power over your mind - not outside events. Realize this, and you will find strength.");
            quotes.push("Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.");
            quotes.push("When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love");
            quotes.push("Our life is what our thoughts make it.");
            quotes.push("If it is not right do not do it; if it is not true do not say it.");
            quotes.push("Very little is needed to make a happy life; it is all within yourself in your way of thinking.");
            quotes.push("Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?");
            quotes.push("The best revenge is not to be like your enemy.");
            quotes.push("Reject your sense of injury and the injury itself disappears.");
            quotes.push("The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.");
            quotes.push("How much more grievous are the consequences of anger than the causes of it.");
            quotes.push("Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.");
            quotes.push("How much time he gains who does not look to see what his neighbour says or does or thinks, but only at what he does himself, to make it just and holy.");
            quotes.push("You are a little soul carrying about a corpse, as Epictetus used to say.");
            quotes.push("Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.");
            quotes.push("For it is in your power to retire into yourself whenever you choose.");
            quotes.push("Remember that very little is needed to make a happy life.");
            quotes.push("Nothing happens to anybody which he is not fitted by nature to bear.");
            quotes.push("Don't go on discussing what a good person should be. Just be one.");
            quotes.push("Receive without conceit, release without struggle.");
            quotes.push("Life is neither good or evil, but only a place for good and evil.");
            quotes.push("Whatever anyone does or says, I must be emerald and keep my colour");
            quotes.push("If any man despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt.");
            quotes.push("Do what you will. Even if you tear yourself apart, most people will continue doing the same things.");
            quotes.push("Accept whatever comes to you woven in the pattern of your destiny, for what could more aptly fit your needs?");
            quotes.push("Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil.");
            quotes.push("A person's worth is measured by the worth of what he values.");
            quotes.push("The memory of everything is very soon overwhelmed in time.");
            quotes.push("It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.");
            quotes.push("Confine yourself to the present.");
            quotes.push("Be like the cliff against which the waves continually break; but it stands firm and tames the fury of the water around it.");
            quotes.push("I was once a fortunate man but at some point fortune abandoned me. But true good fortune is what you make for yourself. Good fortune: good character, good intentions, and good actions.");
            quotes.push("How ridiculous and unrealistic is the man who is astonished at anything that happens in life.");
            quotes.push("Death smiles at us all; all we can do is smile back.");
            quotes.push("No man is happy who does not think himself so.");
            quotes.push("Live out your life in truth and justice, tolerant of those who are neither true nor just.");
            break;

        case("Seneca"):
            quotes.push("All cruelty springs from weakness.");    
            quotes.push("Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.");
            quotes.push("There is no easy way from the earth to the stars");
            quotes.push("Difficulties strengthen the mind, as labor does the body.");
            quotes.push("We suffer more often in imagination than in reality.");
            quotes.push("You act like mortals in all that you fear, and like immortals in all that you desire");
            quotes.push("Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older.");
            quotes.push("As is a tale, so is life: not how long it is, but how good it is, is what matters.");
            quotes.push("If a man knows not to which port he sails, no wind is favorable.");
            quotes.push("It is not the man who has too little, but the man who craves more, that is poor.");
            quotes.push("What need is there to weep over parts of life? The whole of it calls for tears.");
            quotes.push("No man was ever wise by chance.");
            quotes.push("Associate with people who are likely to improve you.");
            quotes.push("I shall never be ashamed of citing a bad author if the line is good.");
            quotes.push("Only time can heal what reason cannot.");
            quotes.push("Most powerful is he who has himself in his own power.");
            quotes.push("Ignorance is the cause of fear.");
            quotes.push("Wealth is the slave of a wise man. The master of a fool.");
            quotes.push("If you live in harmony with nature you will never be poor; if you live according what others think, you will never be rich.");
            quotes.push("People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.");
            quotes.push("Fate leads the willing and drags along the reluctant.");
            quotes.push("Leisure without books is death, and burial of a man alive.");
            quotes.push("Often a very old man has no other proof of his long life than his age.");
            quotes.push("A gift consists not in what is done or given, but in the intention of the giver or doer.");
            quotes.push("Life is long if you know how to use it.");
            quotes.push("Nothing is more honorable than a grateful heart.");
            quotes.push("To wish to be well is a part of becoming well.");
            quotes.push("While we wait for life, life passes");
            quotes.push("Life is very short and anxious for those who forget the past, neglect the present, and fear the future.");
            quotes.push("Regard a friend as loyal, and you will make him loyal.");
            quotes.push("It's not because things are difficult that we dare not venture. It's because we dare not venture that they are difficult.");
            quotes.push("He who has injured thee was either stronger or weaker than you. If weaker, spare him; if stronger, spare yourself.");
            quotes.push("You should live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.");
            quotes.push("It is more civilized to make fun of life than to bewail it.");
            quotes.push("To win true freeedom you must be a slave to philosophy.");
            quotes.push("Whatever can happen at any time can happen today.");
            quotes.push("The best ideas are common property.");
            quotes.push("Of this one thing make sure against your dying day - that your faults die before you do.");
            quotes.push("No man is crushed by misfortune unless he has first been deceived by prosperity.");
            break;

        case("Winston Churchill"):
            quotes.push("The greatest lesson in life is to know that even fools are right sometimes.");
            quotes.push("We make a living by what we get. We make a life by what we give.");  
            quotes.push("Don't interrupt me while I'm interrupting.");  
            quotes.push("He has all the virtues I dislike and none of the vices I admire.");  
            quotes.push("An appeaser is one who feeds a crocodile, hoping it will eat him last.");  
            quotes.push("If you are going through hell, keep going");  
            quotes.push("Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing had happened."); 
            quotes.push("Success is not final, failure is not fatal: it is the courage to continue that counts.");  
            quotes.push("A fanatic is one who can't change his mind and won't change the subject.");  
            break;

        case("Christopher Columbus"):
            quotes.push("Following the light of the sun, we left the Old World.");    
            quotes.push("Life has more imagination than we carry in our dreams.");   
            quotes.push("You can never cross the ocean unless you have the courage to lose sight of the shore.");  
            quotes.push("It is easy to discover what another has discovered before");   
            break;

        case("Albert Camus"):
            quotes.push("Truth, like light, blinds. Falsehood, on the contrary, is a beautiful twilight that enhances every object.");    
            quotes.push("Every revolutionary ends up either by becoming an oppressor or a heretic.");
            quotes.push("The only real progress lies in learning to be wrong all alone.");
            quotes.push("You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.");
            quotes.push("A man without ethics is a wild beast loosed upon this world.");
            quotes.push("Those who lack the courage will always find a philosophy to justify it.");
            quotes.push("There is the good and the bad, the great and the low, the just and the unjust. I swear to you that all that will never change.");
            quotes.push("He who despairs of the human condition is a coward, but he who has hope for it is a fool.");
            quotes.push("Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.");
            quotes.push("Absolute virtue is impossible and the republic of forgiveness leads, with implacable logic, to the republic of the guillotine.");
            quotes.push("By definition, a government has no conscience. Sometimes it has a policy, but nothing more.");
            quotes.push("Man is an idea, and a precious small idea once he turns his back on love.");
            quotes.push("Seeking what is true is not seeking what is desirable.");
            quotes.push("What is called a reason for living is also an excellent reason for dying.");
            quotes.push("I know simply that the sky will last longer than I.");
            quotes.push("A man devoid of hope and conscious of being so has ceased to belong to the future.");
            quotes.push("The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.");
            quotes.push("A man is more a man through the things he keeps to himself than through those he says.");
            quotes.push("Existence is illusory and it is eternal.");
            quotes.push("Like great works, deep feelings always mean more than they are conscious of saying.");
            break;

        case("Archer"):
            quotes.push("The wish of wanting everyone to be happy is merely a fairy tale.");
            quotes.push("It is at the moment of death that humanity has value.");
            quotes.push("Fighting for others, but not yourself, is nothing but hypocrisy.");
            break;
        
        case("Shirou Emiya"):
            quotes.push("Even If I’m a fraud, I know my dream isn’t wrong.");
            quotes.push("If you walk down the path that you believe is right, you cannot be wrong.");
            quotes.push("If it ends up helping someone else out, who cares.");
            quotes.push("My goal is so far away that I’m not even on the starting line yet.");
            break;
        
        case("Kirei Kotomine"):
            quotes.push("Want to know if it is a crime to live as you are, when you are different from others.");
            quotes.push("If there is a pure wish in this world, it must be the desire to be born.");
            quotes.push("There are worthless things, but there are no meaningless things.");
            quotes.push("It is the path you have chosen. Take pride in it.");
            break;  
        
        case("Cowboy Bebop"):
            quotes.push("See you cowboy.\nSomeday, somewhere.");
            quotes.push("You're gonna carry that weight.");
            quotes.push("Life is but a dream.");
            quotes.push("Want a drink, cowboy?");
            break;            
    }

    var choosen = Math.floor((Math.random() * quotes.length));    

    return quotes[choosen];
}

function updateDisplay(author, quote) {
    document.getElementById("quoteAuthor").innerHTML = author;
    document.getElementById("quoteText").innerHTML = quote;
}
