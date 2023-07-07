import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const StructureManipulation = () => {


  const codeString = `
  #include <iostream>
  #include <string>
  
  // Define a structure
  struct Person {
      std::string name;
      int age;
  };
  
  int main() {
      // Declare a structure variable
      Person person1;
  
      // Initialize the structure members
      person1.name = "Alice";
      person1.age = 25;
  
      // Assign one structure to another
      Person person2 = person1;
  
      // Copy the structure
      Person person3;
      person3 = person1;
  
      // Print the structure members
      std::cout << "Person 1: " << person1.name << ", " << person1.age << std::endl;
      std::cout << "Person 2: " << person2.name << ", " << person2.age << std::endl;
      std::cout << "Person 3: " << person3.name << ", " << person3.age << std::endl;
  
      return 0;
  }
  `
  const codeString1 = `
  Person 1: Alice, 25
  Person 2: Alice, 25
  Person 3: Alice, 25
  `
  const codeString2 = `
  #include <iostream>
  #include <string>
  
  // Define a structure
  struct Person {
      std::string name;
      int age;
  };
  
  bool areEqual(const Person& person1, const Person& person2) {
      return (person1.name == person2.name && person1.age == person2.age);
  }
  
  bool isOlder(const Person& person1, const Person& person2) {
      return (person1.age > person2.age);
  }
  
  int main() {
      // Create two structure instances
      Person person1;
      person1.name = "Alice";
      person1.age = 25;
  
      Person person2;
      person2.name = "Bob";
      person2.age = 30;
  
      // Compare structures for equality
      if (areEqual(person1, person2)) {
          std::cout << "Person 1 and Person 2 are equal." << std::endl;
      } else {
          std::cout << "Person 1 and Person 2 are not equal." << std::endl;
      }
  
      // Compare structures based on age
      if (isOlder(person1, person2)) {
          std::cout << "Person 1 is older than Person 2." << std::endl;
      } else {
          std::cout << "Person 1 is not older than Person 2." << std::endl;
      }
  
      return 0;
  }
  `

  const codeString3 = `
Person 1 and Person 2 are not equal.
Person 1 is not older than Person 2.
  `

  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Structure Manipulation:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'> Structure manipulation operations:</p>
      <br></br>
      <p className='text-justify pt-4'>Structure manipulation operations refer to performing various operations on structures, such as initializing, assigning, and copying structures</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates structure manipulation operations:</p>
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
      <p className='text-justify pt-4'>In this example, we define a structure Person with name and age fields. We declare three structure variables: person1, person2, and person3.</p>
      <br></br>
      <p className='text-justify pt-4'>We initialize the members of person1 with specific values. Then, we assign the values of person1 to person2 using the assignment operator (=). We also copy the values of person1 to person3 using the assignment operator.</p>
      <br></br>
      <br></br>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Structure Comparison:</h4>
      <br></br> 
      <p className='text-justify pt-4'>Structure comparison involves comparing structures to check their equality or order based on certain criteria. Comparison is typically performed by comparing individual members of the structures.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates structure comparison:</p>
      <br></br>
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>The output will be:</p>
      <br></br>
      <CodeHighlighter>
        {codeString3}
      </CodeHighlighter>


      <p className='text-justify pt-4'>In this example, we define a structure Person with name and age fields. We create two instances of the structure, person1 and person2, with different values.</p>
      <p className='text-justify pt-4'> We define two comparison functions: areEqual() and isOlder(). The areEqual() function compares the name and age of two structures for equality, and the isOlder() function compares the age of two structures to determine the older person.</p>
      <p className='text-justify pt-4'>We call these functions with the person1 and person2 structures and print the appropriate messages based on the comparison results.</p>
      <p className='text-justify pt-4'>Structure manipulation operations and structure comparison allow you to work with structures effectively, modify their values, and compare them based on specific criteria.</p>



      </article>
      </section>
      </div>

    </>
  )
}

export default StructureManipulation
//lecture 28.1