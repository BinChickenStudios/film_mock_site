// get all the inputs on the page
// const inputs = document.getElementsByTagName('input');
// const textareas = document.getElementsByTagName('textarea');

// 

function validateInputsByName(){
    const subject = document.getElementsByName("subject");
    let subjectValue = null;
    // checks a subject value was selected
    for (let i = 0; i < subject.length; i++) {
        const input = subject[i];
        if(input.checked){
            subjectValue = input.value;
            break;
        }
    }
    if(!subjectValue){
        console.log("no radio button was selected, the message failed to send");
        return;
    }

    const first = document.getElementsByName("first");
    let firstValue = first.value.trim().toLowerCase();
    const firstRegex = /^[A-Za-z]{3,15}$/;
    if(!validateRegex(firstValue, firstRegex)){
        return;
    }else{
        firstValue = capitalizeString(firstValue);
    }

    const last = document.getElementsByName("last");
    let lastValue = last.value.trim().toLowerCase();
    const lastRegex = /^[A-Za-z/s]{3,15}$/;
    if(!validateRegex(lastValue, lastRegex)){
        return;
    }else{
        lastValue = capitalizeString(lastValue);
    }
    
    const email = document.getElementsByName("email");
    const emailValue = email.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!validateRegex(emailValue, emailRegex)){
        return;
    }

    const code = document.getElementsByName("code");
    const codeValue = code.value;
    const codeRegex = /^\+\d{1,3}$/;
    if(!validateRegex(codeValue, codeRegex)){
        // they havent inputted a proper number
    }

    const phone = document.getElementsByName("phone");
    const phoneValue = phone.value;
    const phoneRegex = /^\d{4,15}$/;
    if(!validateRegex(phoneValue, phoneRegex)){
        // they havent inputted a proper number
    }
    
    if(subjectValue.toLowerCase() === "quote"){
        const budget = document.getElementsByName("budget");
        let budgetValue = budget.value;
        const budgetRegex = /^[$]?[0-9]+(\.[0-9]{1,2})?$/;
        if(!validateRegex(budgetValue, budgetRegex)){
            // they havent inputted a budget
        }else{
            //convert it to a float
            budgetValue = parseFloat(budgetValue.replace(/[^0-9.-]+/g, ''));
        }
    }
    
    if(subjectValue.toLowerCase() === "meeting"){
        const schedule = document.getElementsByName("schedule");
        let scheduleValue = schedule.value;
        // validate a date
    }

    const message = document.getElementsByName("message");
    // trim any evil characters (do we want emojis here?)
    
    const file = document.getElementsByName("file");
    // figure out the file type first (can we check the contents safely?)
}

function validateRegex(value, regex){
    if(regex.test(value)){
        return true;
    }else{
        console.log("${value} was not a valid value, the message failed to send");
        return false;
    }
}

function capitalizeString(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
}

// validate all the inputs
function validateInputs(inputs) {
    if(inputs.length > 0){
        // get every input
        inputs.forEach(input => {
            switch(inputs.type){
                case "radio":
                    validateRadio(input, validRadioValues);
                break;
                case "text":

                break;

                case "email":

                break;

                case "number":

                break;

                case "date":
                
                break;

                case "file":

                break;

                case "submit":

                break;

                default:
                    console.log("the type inputted was unexpected");
                    return;
                break;
            }
        });
    } else {
        console.log("no inputs were found");
        return;
    } 
}

function validateRadio(input, valid){
    if(typeof(valid) === "string"){
        valid = [valid];
    }
    if(Array.isArray(valid)){
        if(valid.includes(input.value.toLowerCase())){
            return input.value;
        }else{
            console.log("${input} is not a valid value");
            return undefined;
        }
    }else{
        console.log("unable to validate ${input}");
        return undefined;
    }

}

