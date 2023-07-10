import {
    ASCII_VALID,
    CURRENCY, 
    EMAIL, 
    FIRST_NAME, 
    LAST_NAME, 
    PHONE_CODE, 
    PHONE_VALID,
    FILES,
    DOCUMENTS
} from "../utils/regex";

import { 
    getValidatedInputValue, 
    validateStringValue 
} from "../utils/validate";

// const textareas = document.getElementsByTagName('textarea');
const submitButton = document.getElementById("submit");

if(!submitButton){
    console.log("no submit button was found, validation cannot be done here");
    return;
}else{
    submitButton.addEventListener("click", function(event){
        event.preventDefault();

        if(!validateInputsByName()){
            console.log("required inputs were missing, failed to send.");
            return;
        }

        submitFormManually();
    })
}


function validateContactForm(){
    const subject = document.getElementsByName("subject");
    const subjectValue = getValidatedInputValue(subject);
    if(!subjectValue){
        console.log("user didn't select valid subject");
        return;
    }
    
    const first = document.getElementsByName("first");
    let firstValue = getValidatedInputValue(first, FIRST_NAME);
    if(!firstValue){
        console.log("user didn't input there first name");
        return;
    }
    firstValue = capitalizeString(firstValue);
    
    const last = document.getElementsByName("last");
    let lastValue = getValidatedInputValue(last, LAST_NAME);
    if(!lastValue){
        console.log("user didn't input there last name");
        return;
    }
    lastValue = capitalizeString(lastValue);
    
    
    const email = document.getElementsByName("email");
    let emailValue = getValidatedInputValue(email, EMAIL);
    if(!emailValue){
        console.log("user didn't input valid email");
        return;
    }
    
    
    const message = document.getElementsByName("message");
    const messageValue = getValidatedInputValue(message);
    if(!messageValue){
        console.log("user didn't input in a valid message");
        return;
    }


    const code = document.getElementsByName("code");
    const codeValue = getValidatedInputValue(code, PHONE_CODE);
    if(!codeValue){
        console.log("user didn't input valid phone code");
    }

    const phone = document.getElementsByName("phone");
    const phoneValue = getValidatedInputValue(phone, PHONE_VALID);
    if(!phoneValue){
        console.log("user didn't input valid phone number");
    }
    
    if(subjectValue.toLowerCase() === "quote"){
        const budget = document.getElementsByName("budget");
        let budgetValue = getValidatedInputValue(budget, CURRENCY);
        if(!budgetValue){
            console.log("user didn't input valid budget");
        }else{
            budgetValue = parseFloat(budgetValue.replace(/[^0-9.-]+/g, ''));
        }
    }
    
    if(subjectValue.toLowerCase() === "meeting"){
        const schedule = document.getElementsByName("schedule");
        let scheduleDate = getValidatedInputValue(schedule);
        if(!scheduleDate){
            console.log("user didn't input valid date");
        }

    }
    
    const file = document.getElementsByName("file");
    let fileValue = getValidatedInputValue(file, DOCUMENTS);
    if(!fileValue){
        console.log("user didn't upload valid file");
    }
}
