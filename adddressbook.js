'use strict';
var fs = require("fs");
const address = require("./address.js");
const EventEmitter = require('events');
var readlineSync = require('readline-sync');

var count = 0;
while (readlineSync.keyInYN('Do you want to add contact in the list?')) {

    var firstName = readlineSync.question('May I have your first name? ');
    var lastName = readlineSync.question('May I have your last name? ');
    var address1 = readlineSync.question('May I have your address? ');
    var city = readlineSync.question('May I have your City? ');
    var state = readlineSync.question('May I have your state? ');
    var zip  = readlineSync.question('May I have your zip? ');
    var phoneNumber  = readlineSync.question('May I have your number? ');
    var adr = new address.Contact(firstName,lastName,address1,city,state,zip,phoneNumber);
    adr.AddContact(adr)   
    count = count + 1;
}

if(count>0) adr.SaveData()
if (readlineSync.keyInYN('Do you want to delet contact in the list?')) {
    var index = readlineSync.question('Please enter index to delete the contact? ');
    adr.RemoveContact(index)
}

if (readlineSync.keyInYN('Do you want to update contact name in the list?')) {
    var index = readlineSync.question('Please enter index to update the contact? ');
    var newName = readlineSync.question('Please enter new name to update the contact of index '+ index + '? ');
    adr.updateContact(index,newName)
}


