export function changeText(textElements, text) {

    if(!textElements){
        console.log("invalid textElement Inputted");
        return;
    }
    if(!textElements.length)
    {
        if(!textElements.innerHTML){
            console.log("invalid textElement Inputted");
            return;
        }
        textElements = [textElements];
    }
    if(!textElements.length){
        console.log("invalid textElement Inputted");
        return;
    }

    if(!text){
        console.log("invalid texts inputted");
        return;
    }
    if(typeof(text) !== 'string'){
        console.log(`${text} is not a string`);
        return;
    }


    for (let i = 0; i < textElements.length; i++) {
        const textElement = textElements[i];
        updateText(textElement, text);
    }
}

export function highlightText(text){
    
    if(!text){
        console.log("invalid texts inputted");
        return;
    }
    if(typeof(text) !== 'string'){
        console.log(`${text} is not a string`);
        return;
    }
    
    return `<span class="highlight">${text}</span>`;
}


export function highlightFirstLetterInWords(text){
    if(!text){
        console.log("invalid texts inputted");
        return;
    }
    if(typeof(text) !== 'string'){
        console.log(`${text} is not a string`);
        return;
    }
    const words = text.split(" ");
    let modifiedText = "";
    
    //highlight the first letter of each word
    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i].charAt(0);
        const restOfWord = words[i].slice(1);
        const modifiedWord = `${highlightText(firstLetter)}${restOfWord}`;
        modifiedText += modifiedWord + " ";
    }

    return modifiedText;
}


export function updateText(element, text){
    if(!element || !element.innerHTML){
        console.log(`${element} is not a valid element`);
        return;
    }

    if(typeof(text) !== "string"){
        console.log(`${text} is not a valid string`);
        return;
    }

    element.innerHTML = text;
}
