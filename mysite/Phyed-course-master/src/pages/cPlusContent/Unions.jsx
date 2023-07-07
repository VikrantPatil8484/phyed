import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const Unions = () => {

  const codeString = `
  #include <iostream>

  // Define a union
  union Data {
      int intValue;
      float floatValue;
      char charValue;
  };
  
  int main() {
      // Create an instance of the union
      Data data;
  
      // Assign values to the members
      data.intValue = 42;
      std::cout << "Integer value: " << data.intValue << std::endl;
  
      data.floatValue = 3.14;
      std::cout << "Float value: " << data.floatValue << std::endl;
  
      data.charValue = 'A';
      std::cout << "Character value: " << data.charValue << std::endl;
  
      // Print the values of all members
      std::cout << "Values in the union:" << std::endl;
      std::cout << "Integer value: " << data.intValue << std::endl;
      std::cout << "Float value: " << data.floatValue << std::endl;
      std::cout << "Character value: " << data.charValue << std::endl;
  
      // Print the size of the union
      std::cout << "Size of Data union: " << sizeof(data) << " bytes" << std::endl;
  
      return 0;
  }
  `

  const codeString1 = `
  Integer value: 42
  Float value: 3.14
  Character value: A
  Values in the union:
  Integer value: 65
  Float value: 6.93889e-44
  Character value: A
  Size of Data union: 4 bytes
  `
  return (
    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Unions:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Introduction to unions: </p>
      <br></br>
      <p className='text-justify pt-4'>A union in C++ is a special data type that allows different variables to share the same memory location. In a union, all members occupy the same memory space, and changing the value of one member affects the values of other members. Unions are useful when you want to store different types of data in the same memory location.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates the declaration and usage of a union:</p>
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
      <p className='text-justify pt-4'>The above example demonstrates how a union allows you to store different types of data in the same memory location, but only one member can be accessed at a time. It showcases assigning values to union members, accessing and printing those values, and determining the size of the union.</p>
      <br></br>
      <p className='text-justify pt-4'>We create an instance of the union called data and assign values to its members. Since all members share the same memory space, changing the value of one member affects the values of other members.</p>
      <br></br>
      <p className='text-justify pt-4'>We print the values of the members and observe that the integer value, float value, and character value are stored in the same memory location. Therefore, accessing one member after modifying another member may result in unexpected values.</p>
      <br></br>
      <p className='text-justify pt-4'>Finally, we use the sizeof() operator to determine the size of the union, which will be equal to the size of its largest member.</p>
      <br></br>
      <p className='text-justify pt-4'>Unions are useful when you want to store different types of data in the same memory location and access them based on the current context or requirement. However, it's important to handle unions with caution and ensure proper typecasting and data access to avoid unexpected behavior.</p>
      
      </article>
      </section>
      </div>

    </>


  )
}

export default Unions
 // Lecture 28.3