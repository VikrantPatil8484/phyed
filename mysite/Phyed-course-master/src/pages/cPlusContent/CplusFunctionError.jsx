import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CplusFunctionError = () => {

  const codeString = `
  #include <iostream>

// Function to divide two numbers
double divide(int dividend, int divisor) {
    if (divisor == 0) {
        throw "Division by zero error";
    }
    return static_cast<double>(dividend) / divisor;
}

int main() {
    int a = 10, b = 0;

    try {
        // Call the divide function inside a try block
        double result = divide(a, b);
        std::cout << "Result: " << result << std::endl;
    } catch (const char* error) {
        // Catch the exception and handle the error
        std::cout << "Error: " << error << std::endl;
    }

    return 0;
}

  `
  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Function Error Handling:</h4>
        <ul className='list-disc px-10 py-4 text-justify'>
            <li className='pt-4'>Exception handling within functions</li>
            <li className='pt-4'> Try-catch blocks</li>
        </ul>
        <br></br>
        <p className='text-justify pt-4'>Function error handling, using try-catch blocks and exception handling, is a mechanism in programming that allows us to handle and manage errors or exceptional situations that may occur during the execution of a function. Let's explain exception handling, why it is used, how it works, and provide an easy example for better understanding.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>What is Exception Handling?</p>
        <p className='text-justify pt-4'>Exception handling is a way to deal with errors or exceptional situations that can occur during the execution of a program. It provides a structured approach to handle these situations by using try-catch blocks. When an error or exception occurs within a try block, it can be caught and handled in the corresponding catch block.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Why is Exception Handling Used?</p>
        <p className='text-justify pt-4 font-bold'>Exception handling is used for several reasons:</p>
        <ul className='list-disc px-10 text-justify'>
          <li className='pt-4 font-bold'>Error Management:</li><p>It allows us to identify and handle errors or exceptional situations in a controlled and organized manner. This helps prevent unexpected program termination and enables graceful error recovery.</p>
          <li className='pt-4 font-bold'>Separation of Concerns:</li><p>Exception handling separates the normal flow of code from error handling code. It makes the code more readable and maintains a clean structure by separating error-handling logic from the main logic of the program.</p>
          <li className='pt-4 font-bold'>Propagation:</li><p>Exceptions can be propagated up the call stack, allowing higher-level functions to handle or further propagate the exception. This allows for centralized error handling at an appropriate level in the program.</p>

        </ul>
        <br></br>
        <p className= 'text-justify pt-4 font-bold'>How to Use Exception Handling?</p>
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
        <p className='text-justify pt-4'>In this example, we have a function called divide() that takes two integers as arguments and returns the result of dividing the first number by the second number. Inside the function, we check if the divisor is zero. If it is, we throw an exception with the error message "Division by zero error" using the throw keyword.</p>
        <p className='text-justify pt-4'>In the main() function, we call the divide() function inside a try block. If the division operation encounters a division by zero error, it throws an exception. The catch block immediately following the try block catches the exception and handles the error. In this case, it prints the error message to the console.</p>
        <p className='text-justify pt-4'>By using exception handling, we can gracefully handle errors and exceptional situations that may occur during the execution of a function. It allows us to provide meaningful error messages, perform specific error handling tasks, and prevent the program from crashing unexpectedly. Exception handling promotes robustness and maintainability in our code.</p>



      </article>
    </section>

  </div>
  )
}

export default CplusFunctionError
// Lecture 18.1