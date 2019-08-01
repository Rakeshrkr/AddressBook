
var fs = require("fs");
var Contacts=[];
 class Contact{
     constructor(options){
         this.firstName = options.firstName;
         this.lastName = options.lastName;
         this.address = options.address;
         this.city = options.city;
         this.state = options.state;
         this.zip = options.zip;
         this.phoneNumber = options.phoneNumber;

     }

     AddContact(){
         console.log(this.lastName)
         console.log("in Add Contact " + JSON.stringify(Contact))
        Contacts.push(Contact);
        console.log(Contacts)
     }

     RemoveContact(i){
        
        //console.log(typeof(parseInt(i)));
        // parseInt(i);
        if(typeof(i) == "number" && Contacts.length> i){
            var  ContactsUpdated = Contacts.splice(i,1);
            this.SaveData();
        }else{
            console.log("Please enter correct index.");
      }
     }

     ClearData(){
         console.log(Contacts.length)  
         Contacts = [];
         this.SaveData();
     }
    SaveData(){
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


