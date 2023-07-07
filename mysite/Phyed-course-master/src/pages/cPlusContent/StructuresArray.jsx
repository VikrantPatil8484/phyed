import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const StructuresArray = () => {
  
  const codeString = `
  #include <iostream>
#include <string>

// Define a structure
struct Person {
    std::string name;
    int age;
};

int main() {
    // Create an array of structures
    const int arraySize = 3;
    Person people[arraySize];

    // Assign values to the structure elements
    people[0].name = "Alice";
    people[0].age = 25;

    people[1].name = "Bob";
    people[1].age = 30;

    people[2].name = "Charlie";
    people[2].age = 35;

    // Access and print the structure elements
    for (int i = 0; i < arraySize; i++) {
        std::cout << "Person " << i + 1 << ": " << std::endl;
        std::cout << "Name: " << people[i].name << std::endl;
        std::cout << "Age: " << people[i].age << std::endl;
        std::cout << std::endl;
    }

    return 0;
}
  `
  const codeString1 = `
  Copy code
Person 1:
Name: Alice
Age: 25

Person 2:
Name: Bob
Age: 30

Person 3:
Name: Charlie
Age: 35
  `

  const codeString2 = `
  #include <iostream>
#include <string>

// Define a structure
struct Person {
    std::string name;
    int age;
};

// Function that takes a structure by value
void printPersonByValue(Person person) {
    std::cout << "Name: " << person.name << std::endl;
    std::cout << "Age: " << person.age << std::endl;
}

// Function that takes a structure by reference
void incrementAge(Person& person) {
    person.age++;
}


int main() {
    // Create a structure
    Person person;
    person.name = "Alice";
    person.age = 25;

    // Pass the structure to functions
    printPersonByValue(person);
    incrementAge(person);

    // Print the modified structure
    std::cout << "Modified Age: " << person.age << std::endl;

    return 0;
}
  `

  const codeString3 = `
Name: Alice
Age: 25
Modified Age: 26
  `
  const codeString4 = `
#include <iostream>
#include <string>

// Define a structure
struct Person {
    std::string name;
    int age;
};

// Function that returns a structure by value
Person createPerson() {
    Person person;
    person.name = "Bob";
    person.age = 30;
    return person;
}

// Function that returns a structure by reference
Person& getPersonByReference(Person& person) {
    return person;
}

int main() {
    // Call the function that returns a structure by value
    Person returnedPerson = createPerson();
    std::cout << "Name: " << returnedPerson.name << std::endl;
    std::cout << "Age: " << returnedPerson.age << std::endl;

    // Call the function that returns a structure by reference
    Person person;
    person.name = "Charlie";
    person.age = 35;
    Person& returnedPersonRef = getPersonByReference(person);
    std::cout << "Name (Reference): " << returnedPersonRef.name << std::endl;
    std::cout << "Age (Reference): " << returnedPersonRef.age << std::endl;

    return 0;
}
  `
  const codeString5 = `
Name: Bob
Age: 30
Name (Reference): Charlie
Age (Reference): 35
  `
  
  return (
   <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array of Structures:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'> Creating arrays of structures & Accessing array elements:</p>
      <br></br>
      <p className='text-justify pt-4'>Arrays of structures allow you to store multiple instances of a structure type in a contiguous block of memory. Each element of the array represents one instance of the structure. You can access and manipulate individual elements of the array using array indexing.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates the creation and accessing of arrays of structures:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>The output will be:</p>
      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>In this example, we define a structure Person that consists of a name (string) and age (integer). We then create an array of Person structures called people with a size of 3.</p>
      <p className='text-justify pt-4'>We assign values to the name and age elements of each structure using array indexing. We then access and print the elements using a loop, iterating over each element of the array.</p>
      <p className='text-justify pt-4'>By using arrays of structures, you can store and manipulate multiple instances of the same structure type in a convenient and organized manner.</p>
      <p className='text-justify pt-4'>Feel free to modify the example and experiment with different structures and array sizes to suit your needs.</p>
      <br></br>
      <br></br>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Structures and Functions:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'> Passing structures to functions & Returning structures from functions:</p>
      <br></br>
      <span className='font-semibold'>Passing structures to functions:</span>
      <p className='text-justify pt-4 '>When passing a structure to a function, you can pass it by value or by reference. Passing by value creates a copy of the structure, while passing by reference allows the function to directly modify the original structure.</p>
      <p className='text-justify pt-4 '>Here's an example that demonstrates passing structures to functions:</p>
      <br></br>
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4 '>The output will be:</p>
      <CodeHighlighter>
        {codeString3}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4 '>In this example, we define a structure Person with name and age fields. We create a person instance and initialize its values.</p>
      <p className='text-justify pt-4 '>We then pass the person structure to the printPersonByValue() function by value, which creates a copy of the structure and prints its values. After that, we pass the person structure to the incrementAge() function by reference, allowing the function to modify the original structure.</p>
      <br></br>
      <span className='font-semibold'>Returning structures from functions:</span>
      <br></br>
      <p className='text-justify pt-4 '>Functions can also return structures as their return value. The structure can be returned by value or by reference, similar to passing structures to functions.</p>
      <p className='text-justify pt-4 '>Here's an example that demonstrates returning structures from functions:</p>
      <CodeHighlighter>
        {codeString4}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4 '>The output will be:</p>
      <CodeHighlighter>
        {codeString5}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4 '>In this example, we define a structure Person with name and age fields. We have two functions: createPerson() that returns a Person structure by value and getPersonByReference() that returns a Person structure by reference.</p>
      <br></br>
      <p className='text-justify pt-4 '>We call the createPerson() function and store the returned structure in returnedPerson, which we then print its values.</p>
      <br></br>
      <p className='text-justify pt-4 '>We also create a person instance, initialise its values, and pass it to the getPersonByReference() function. The function returns a reference to the original person structure, which we store in returnedPersonRef and print its values.</p>
      <br></br>
      <p className='text-justify pt-4 '>By passing structures to functions and returning structures from functions, you can work with structured data in a modular and reusable manner.</p>
      <br></br>
      <p className='text-justify pt-4 '>Feel free to modify the example and experiment with different structures and function behaviours to further explore the possibilities.</p>
      </article>
      </section>
      </div>

    </>

  )
}

export default StructuresArray