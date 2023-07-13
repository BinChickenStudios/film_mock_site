import { changeText, highlightFirstLetterInWords } from "./utils/text.js";

const traits = [
    'Craftsmanship', 
    'Mastery', 
    'Precision', 
    'Cine Manuel'
];


function changeTitle(titleElement, texts){
    if(!titleElement){
        console.log("invalid title element");
        return;
    }
    if(!texts){
        console.log("no texts inputted");
        return;
    }
    if(typeof texts === "string"){
        texts = [texts];
    }
    if(!Array.isArray(texts)){
        console.log("invalid texts inputted");
        return;
    }

    textIndex %= texts.length; 
    const text = highlightFirstLetterInWords(texts[textIndex]);
    changeText(titleElement, text);
    textIndex = (textIndex + 1) % texts.length;
}


let changingText = document.getElementsByClassName("title-name");
let textIndex = 0;    

if (!changingText) {
    console.log("changing text element could not be found");
}else{
    textIndex = 0;
    setInterval(() => changeTitle(changingText, traits), 6000);
}
