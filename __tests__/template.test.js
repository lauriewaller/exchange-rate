// import AddressBook from './../src/js/address-book.js';
// import Contact from './../src/js/contact.js';

// describe ('AddressBook', () => {

//   let address;
//   let Joe;

//   beforeEach(() => {
//     address = new AddressBook();  
//     Joe = new Contact("Joe", "Dirt", "555-5555");
//   });
  

//   test('should correctly create an addressbook object with contact and currentId', () => {
//       expect(address.contacts).toEqual({});
//       expect(address.currentId).toEqual(0);
//     });

//   test('should correctly increase the currentId by one', () => {
//       address.assignId();
//       expect(address.currentId).toEqual(1);
//     });

//   test('should correctly store a new contact to the addressbook', () => {
//       address.addContact(Joe);
//       expect(address.contacts['1'].firstName).toEqual("Joe");
//       expect(address.contacts['1'].lastName).toEqual("Dirt");
//       expect(address.contacts['1'].phoneNumber).toEqual("555-5555");
//     });

//   test('should correctly return the contact that matched the id passed in', () => {
//       address.addContact(Joe);
//       expect(address.findContact(1)).toEqual({firstName: "Joe", lastName: "Dirt", phoneNumber: "555-5555", id: 1});
//       expect(address.findContact(2)).toEqual(false); 
//     });

//   test('should correctly delete the contact id number that is passed in', () => {
//       address.addContact(Joe);
//       expect(address.deleteContact(1)).toEqual(true);
//       expect(address.deleteContact(2)).toEqual(false);
//     });
//   });