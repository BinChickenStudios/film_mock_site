export const ASCII_VALID = /^[a-zA-Z0-9\s!"#$%'()*+,-.\/:;<=>?@\[\\\]^_`{|}~]*$/;
export const FIRST_NAME = /^[A-Za-z]{3,15}$/;
export const LAST_NAME = /^[A-Za-z/s]{3,15}$/;
export const EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PHONE_CODE = /^\+\d{1,3}$/;
export const PHONE_VALID = /^\d{4,15}$/;
export const CURRENCY = /^[$]?[0-9]+(\.[0-9]{1,2})?$/;
export const FILES = [
    "application/pdf", 
    "application/msword", 
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
export const DOCUMENTS = [
    "application/pdf", 
    "application/msword", 
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
