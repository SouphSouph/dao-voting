// Define a class called 'Person'
class Person {
    // Properties
    firstName: string;
    lastName: string;
  
    // Constructor
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method to get full name
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // Create an instance of the 'Person' class
  const person1: Person = new Person('John', 'Doe');
  
  // Call the 'getFullName' method and log the result
  console.log(person1.getFullName()); // Output: John Doe
  