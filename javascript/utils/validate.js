import { 
    ASCII_VALID, FILES, 
} from "./regex";

//retrieves the value of an input after validating it
export function getValidatedInputValue(name, pattern = ASCII_VALID){

    if(typeof(pattern) === "string"){
        try{
         pattern = new RegExp(pattern);
        }catch (error){
            console.log(`${pattern} is not a valid regex`);
            return null;
        }
    }
    if(!pattern instanceof RegExp && !Array.isArray(pattern)){
        console.log(`${pattern} is not a valid pattern`);
        return null;
    }
    if(typeof(name) !== "string"){
        console.log(`${name} is not a string`);
        return null;
    }

    const element = document.getElementsByName(name);

    if(!element){
        console.log(`no element with the name ${name} was found in the document`);
        return null;
    }


    //validate a collection
    if(element.length > 1){
        return null;
    }

    //validate by tagName
    if(!element.type){
        if(element.tagName === "TEXTAREA"){
            return validateStringValue(element.name, pattern);
        }

        return null;
    }

    switch(element.type){
        case "text":
        case "email":
            return validateStringValue(element.name, pattern);
        case "date":
            return validateDateValue(element);
        case "file":
            return validateFile(element, pattern);
        default:
            console.log(`${name} was not validated`);
            return element.value;
    }
}


//retrieves the checked radio
export function getCheckedRadio(elements){
    if(elements.type !== "radio"){
        console.log(`${elements} is not a valid radio button`);
        return null;
    }
        // checks a subject value was selected
        for (let i = 0; i < elements.length; i++) {
            const input = elements[i];
            if(input.checked){
                return input.value;
            }
        }
        return null;
}


//
export function validateStringValue(value, pattern = ASCII_VALID){
    
    if(typeof value !== "string"){
        return undefined;
    }
    value = value.trim();

    if(!pattern.test(value)){
        return undefined;
    }

    return value;
}

export function validateDateValue(date, start = new Date()){
    let scheduleDate = new Date(date.value);
    if(!isNaN(scheduleDate.getTime()) || scheduleDate > start){
        return scheduleDate;
        }
        return null;
    }

export function validateFile(file, validTypes = FILES){
    let fileValue = file.files;
    if(fileValue.length !== 0){
        // figure out the file type first (can we check the contents safely?)
        for (let i = 0; i < fileValue.length; i++) {
            const element = fileValue[i];
            const elementType = element.type;
            fileExtension = element.name.split(".").pop();
            
            if(validTypes.includes(elementType) || validTypes.includes(fileExtension)){

            }else{
                return null;
            }
        }
        return fileValue;
    }
}
