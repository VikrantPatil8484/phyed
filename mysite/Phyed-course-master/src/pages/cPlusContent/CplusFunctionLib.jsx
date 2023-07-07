import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CplusFunctionLib = () => {

  const codeString = `
  int main() {
    double x = 2.0;

    // Call the sqrt() function from the math library to calculate the square root
    double result = sqrt(x);

    std::cout << "The square root of " << x << " is: " << result << std::endl;

    return 0;
}
  `
  const codeString1 = `
  // arithmetic.h

#ifndef ARITHMETIC_H
#define ARITHMETIC_H

int add(int a, int b);
int subtract(int a, int b);

#endif
  `
  const codeString2 = `
  // arithmetic.cpp

#include "arithmetic.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}
  `
  const codeString3 = `
  #include <iostream>
  #include "arithmetic.h"
  
  int main() {
      int x = 5, y = 3;
  
      // Call the functions from the user-defined arithmetic library
      int sum = add(x, y);
      int difference = subtract(x, y);
  
      std::cout << "Sum: " << sum << std::endl;
      std::cout << "Difference: " << difference << std::endl;
  
      return 0;
  }
  `

  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Function Libraries:</h4>
        <ul className='list-disc px-10 py-4 text-justify'>
            <li className='pt-4'>Using functions from libraries</li>
            <li className='pt-4'> Creating and using user-defined libraries</li>
        </ul>
        <br></br>
        <p className='text-justify pt-4'>Function libraries are collections of pre-written functions that can be used in programming to perform specific tasks. Libraries provide a way to reuse code, promote modular programming, and simplify the development process. Let's explain how to use functions from libraries and how to create and use user-defined libraries with an easy example.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Using Functions from Libraries:</p>
        <p className='text-justify pt-4'>When using functions from libraries, we typically follow these steps:</p>
        <ul className='list-disc px-10 text-justify'>
          <li className= 'text-justify pt-4'>Include the library's header file(s) at the beginning of our program to gain access to the function declarations.</li>
          <li>Call the functions from the library as needed in our code.</li>

        </ul>
        <br></br>
        <p className= 'text-justify pt-4'>Here's a simple example in C++ to demonstrate using functions from the math library:</p>
        <br></br>
        <p className= 'text-justify pt-4'>To use exception handling, we follow these steps:</p>
        <ul className='list-disc px-10 py-4 text-justify'>
          <li>Place the code that may raise an exception inside a try block.</li>
          <li>If an exception occurs, it is "thrown" using the throw keyword.</li>
          <li>Catch the thrown exception in a catch block, which specifies the type of exception to catch.</li>
          <li>Handle the exception in the catch block.</li>

        </ul>
        <br></br>
        <p className='text-justify pt-4'>Here's a simple example in C++ to demonstrate the usage of exception handling:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>

        <p className='text-justify pt-4'>In this example, we include the [cmath] header file, which provides access to various mathematical functions, including the sqrt() function. We call the sqrt() function and pass the value x to calculate the square root. The result is then printed to the console.</p>
        <p className='text-justify pt-4'>By including the appropriate library header files, we can access and use functions from those libraries in our programs. Libraries are valuable resources as they provide a wide range of ready-to-use functions for specific tasks, saving us from writing the code from scratch.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Creating and Using User-Defined Libraries:</p>
        <p className='text-justify pt-4'>We can also create our own libraries by organizing related functions into a separate file, commonly referred to as a "header file" or "module." Let's look at an example to understand how to create and use a user-defined library.</p>
        <br></br>
        <p>Example:</p>
        <p>Suppose we want to create a library that provides functions for basic arithmetic operations. Here's how we can do it:</p>
        <p>Create a new header file, let's say arithmetic.h, and define the functions we want to include in the library. For this example, let's define add() and subtract() functions.</p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        <br></br>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Implement the functions in a separate source file, say arithmetic.cpp. </h4>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
        <br></br>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>3. In our main program, include the arithmetic.h header file and call the functions from the library</h4>
        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this example, we create the arithmetic.h header file, which contains function declarations for add() and subtract(). The corresponding function definitions are implemented in the arithmetic.cpp file.</p>
        <p className='text-justify pt-4'>In the main program, we include the arithmetic.h header file and call the functions add() and subtract() from the user-defined library. We pass the values x and y to these functions and store the results in variables. Finally, we print the results to the console.</p>
        <p className='text-justify pt-4'>By creating and using user-defined libraries, we can organize our code, promote code reuse, and make our programs more modular. Libraries encapsulate related functions, making the code more manageable, maintainable, and reusable.</p>




      </article>
    </section>

  </div>
 

  )

}

export default CplusFunctionLib
// Lecture 18.2