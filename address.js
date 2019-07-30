
var fs = require("fs");
var Contacts=[];
 class Contact{
     constructor(firstName,lastName,address,city,state,zip,phoneNumber){
         this.firstName = firstName;
         this.lastName = lastName;
         this.address = address;
         this.city = city;
         this.state = state;
         this.zip = zip;
         this.phoneNumber = phoneNumber;

     }
     getFirstName(){
         return this.firstName;
     }
     getLastName(){
         return this.lastName;
     }
     getAddress(){
         return this.address;
     }
     getCity(){
         return this.city;
     }
     getState(){
         return this.state;
     }
     getZip(){
         return this.zip;
     }
     getPhoneNumber(){
         return this.phoneNumber;
     }

     AddContact(Contact){
         console.log("in Add Contact " + JSON.stringify(Contact))
        Contacts.push(Contact);
        console.log(Contacts)
     }

     RemoveContact(i){
       var  ContactsUpdated = Contacts.splice(i,Contacts.length-1);
        this.ClearData();
        Contacts = ContactsUpdated;
        this.SaveData();
     }

     ClearData(){
         console.log(Contacts.length)  
         Contacts = [];
         this.SaveData();
     }
    SaveData(){
       // console.log("In save data function " + JSON.stringify(Contacts))
       fs.writeFileSync('contacts.json',JSON.stringify(Contacts), 'utf8',function(err){
               console.log(err)	
                   
       });
    }
    updateContact(index, newName){
        console.log("inside update contact function");
        if(Contacts.length > index){
            Contacts[index].firstName = newName;
            var  ContactsUpdated = Contacts;
            this.ClearData();
            Contacts = ContactsUpdated;
            this.SaveData();
        }else{
            console.log('Correct index not entered ! Contacts length :' + Contacts.length + " and index :" + index )
        }
        
    }
}

module.exports = {
    Contact
} ;


