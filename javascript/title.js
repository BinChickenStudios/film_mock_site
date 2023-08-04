import { changeText, highlightFirstLetterInWords, highlightText } from "./utils/text.js";

const traits = [
    'Craftsmanship', 
    'Mastery', 
    'Precision', 
    'Cine Manuel'
];

const identities = [
    'Storytellers',
    'visionaries',
    'Cine Manuel'
]


function changeTitle(textElement, texts, textIndex){
    // if(typeof textIndex !== 'number'){
    //     console.log("invalid text index");
    //     return;
    // }
    if(!textElement){
        console.log("invalid text element");
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

    textIndex.index %= texts.length; 
    let text = '';
    if(textIndex.index < texts.length - 1){
         text = highlightFirstLetterInWords(texts[textIndex.index]);
    }else{
         text = highlightText(texts[textIndex.index]);
    }
    changeText(textElement, text);
    textIndex.index = (textIndex.index + 1) % texts.length;
}


let titleText = document.getElementsByClassName("title-name");
let titleIndex = {index: 0};    
let aboutText = document.getElementsByClassName("about-name");
let aboutIndex = 0;    

if (!titleText) {
    console.log("changing text element could not be found");
}else{
    titleIndex = {index: 0};
    aboutIndex = {index: 0};
    changeTitle(titleText, traits, titleIndex);
    changeTitle(aboutText, identities, aboutIndex);
    setInterval(() => changeTitle(titleText, traits, titleIndex), 3000);
    setInterval(() => changeTitle(aboutText, identities, aboutIndex), 3000);
}
