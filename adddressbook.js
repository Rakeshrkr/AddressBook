'use strict';
const fs = require("fs");
const Contact = require("./address.js").Contact;
// const EventEmitter = require('events');
const readlineSync = require('readline-sync');

// Git .gitignore
// Environment variable - Keys related to credentials ( AWS keypair, DB login details etc.)
// NPM - What is NPM? 
// REPL
// Async nature of Javascript (Async / Sync / Callback) - Call stack, Event Loop, Stack trace
// Event & Event Emmitters (Events, Listners, Emitter)
// Debugguing
// Require, Exports: How it is working?
// ES6 - Standards & Features  
// Error handling (Same as ELMAH - )
// Logging 
// HTTP Request / Response ( Headers ) 
// How server works in NodeJS? With ExpressJS


// Function defined 
// Commenting guidelines give - Google Javascript Style guide
// Naming conventions for functions, class, variables, constant etc. Address 
// Naming conventions should be meaningfull 

var count = 0;

while (readlineSync.keyInYN('Do you want to add contact in the list?')) {

    var firstName = readlineSync.question('May I have your first name? ');
    var lastName = readlineSync.question('May I have your last name? ');
    var address1 = readlineSync.question('May I have your address? ');
    var city = readlineSync.question('May I have your City? ');
    var state = readlineSync.question('May I have your state? ');
    var zip = readlineSync.question('May I have your zip? ');
    var phoneNumber = readlineSync.question('May I have your number? ');
    var adr = new Contact(firstName, lastName, address1, city, state, zip, phoneNumber);
    adr.AddContact(adr)
    count = count + 1;
}

if (count > 0) adr.SaveData()
if (readlineSync.keyInYN('Do you want to delet contact in the list?')) {
    var index = readlineSync.question('Please enter index to delete the contact? ');
    adr.RemoveContact(index)
}

if (readlineSync.keyInYN('Do you want to update contact name in the list?')) {
    var index = readlineSync.question('Please enter index to update the contact? ');
    var newName = readlineSync.question('Please enter new name to update the contact of index ' + index + '? ');
    adr.updateContact(index, newName)
}



