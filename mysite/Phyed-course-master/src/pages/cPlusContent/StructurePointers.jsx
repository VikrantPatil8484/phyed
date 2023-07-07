import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const StructurePointers = () => {
 
 
  const codeString = `
#include <iostream>
#include <string>

// Define a structure
struct Person {
    std::string name;
    int age;
};

int main() {
    // Declare a structure pointer
    Person* personPtr;

    // Create a structure dynamically
    personPtr = new Person;

    // Access and modify the structure members using the pointer
    personPtr->name = "Alice";
    personPtr->age = 25;

    // Print the structure members
    std::cout << "Name: " << personPtr->name << std::endl;
    std::cout << "Age: " << personPtr->age << std::endl;

    // Deallocate the dynamic memory
    delete personPtr;

    return 0;
}
  `
  const codeString1 = `
Name: Alice
Age: 25
  `
  const codeString2 = `
  #include <iostream>
  #include <string>
  
  // Define a structure
  struct Person {
      std::string name;
      int age;
  };
  
  int main() {
      // Get the number of persons
      int numPersons;
      std::cout << "Enter the number of persons: ";
      std::cin >> numPersons;
  
      // Allocate memory for an array of persons
      Person* peopleArray = new Person[numPersons];
  
      // Input the details for each person
      for (int i = 0; i < numPersons; i++) {
          std::cout << "Enter name for person " << i + 1 << ": ";
          std::cin >> peopleArray[i].name;
  
          std::cout << "Enter age for person " << i + 1 << ": ";
          std::cin >> peopleArray[i].age;
      }
  
      // Print the details of each person
      for (int i = 0; i < numPersons; i++) {
          std::cout << "Person " << i + 1 << ":" << std::endl;
          std::cout << "Name: " << peopleArray[i].name << std::endl;
          std::cout << "Age: " << peopleArray[i].age << std::endl;
          std::cout << std::endl;
      }
  
      // Deallocate the dynamically allocated memory
      delete[] peopleArray;
  
      return 0;
  }
  `

  return (
    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Structure and Pointers:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'> Structure pointers.</p>
      <p className='text-justify pt-4'>Structure pointers allow you to create a pointer variable that can store the address of a structure. By using structure pointers, you can access and modify the structure's members indirectly.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates structure pointers:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>The output will be:</p>
      <br></br>
      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>In this example, we define a structure Person with name and age fields. We declare a pointer variable personPtr of type Person*.</p>
      <br></br>
      <p className='text-justify pt-4'>We allocate memory dynamically for a Person structure using the new keyword, and the address of the allocated memory is stored in personPtr. We then access and modify the structure members using the arrow operator (-&gt).</p>
      <br></br>
      <p className='text-justify pt-4'>Finally, we deallocate the dynamically allocated memory using the delete keyword to free up the memory.</p>
      <br></br>
      <br></br>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Dynamic Memory Allocation:</h4>
      <br></br> 
      <p className='text-justify pt-4'>Dynamic memory allocation allows you to allocate memory at runtime using the new operator. It is useful when you need to create structures or arrays dynamically and when the size is not known at compile time.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates dynamic memory allocation for an array of structures:</p>
      <br></br>
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>In this example, we define a structure Person with name and age fields. We prompt the user to enter the number of persons.</p>
      <p className='text-justify pt-4'>We allocate memory dynamically for an array of Person structures using the new keyword and the size provided by the user. The address of the allocated memory is stored in peopleArray.</p>
      <p className='text-justify pt-4'>We then use a loop to input the details (name and age) for each person in the array. After that, we print the details of each person using another loop.</p>
      <p className='text-justify pt-4'>Finally, we deallocate the dynamically allocated memory using the delete[] keyword to free up the memory.</p>
      <p className='text-justify pt-4'>Using structure pointers and dynamic memory allocation, you can work with structures dynamically and handle varying sizes of data at runtime.</p>
      <p className='text-justify pt-4'>Feel free to modify the examples and experiment with different scenarios to further understand structure pointers and dynamic memory allocation in C++.</p>



      </article>
      </section>
      </div>

      </>
      //lecture 27.1

  )
}

export default StructurePointers