const traits = [
    'Craftsmanship', 
    'Mastery', 
    'Precision', 
    'Cine Manuel'
];

changingText = document.querySelector('#changing-text');
if (!changingText) {
    console.log("changing text element could not be found");
}

let currentTextIndex = 0;

function changeText() {
    const text = traits[currentTextIndex];
    const words = text.split(" ");
    let modifiedText = "";

    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i].charAt(0);
        const restOfWord = words[i].slice(1);
        const modifiedWord = `<span class="title-highlight">${firstLetter}</span>${restOfWord}`;
        modifiedText += modifiedWord + " ";
    }
    changingText.innerHTML = modifiedText;
    currentTextIndex = (currentTextIndex + 1) % traits.length;
}



if (changingText) {
    changeText();
    changingTextInterval = setInterval(changeText, 6000);
}else{
    console.log("couldn't find changing text...");
}

