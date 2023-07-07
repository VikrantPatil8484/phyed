import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusFunctionScopeLifetime = () => {

  const codeString = `
      #include <iostream>

      void myFunction() {
          int x = 5;  // Local variable x, only accessible within this function
          std::cout << x << std::endl;
      }
      
      int main() {
          myFunction();  // Calling the function
          // std::cout << x << std::endl;  // This will give an error because x is not accessible here
          return 0;
      }
    `
  const codeString1 = `
      #include <iostream>

      int x = 5;  // Global variable, accessible throughout the program
      
      void myFunction() {
        std::cout << x << std::endl;  // Accessing the global variable inside a function
      }
      
      int main() {
          std::cout << x << std::endl;  // Accessing the global variable in the main function
          myFunction();  // Calling the function
          return 0;
      }
    `
  const codeString2 = `
      #include <iostream>

      int x = 10;  // Global variable
      
      void myFunction() {
          int x = 5;  // Local variable with the same name as the global variable
          std::cout << "Local x: " << x << std::endl;  // Accessing the local variable
          std::cout << "Global x: " << ::x << std::endl;  // Accessing the global variable using the scope resolution operator (::)
      }
      
      int main() {
          std::cout << "Global x: " << x << std::endl;  // Accessing the global variable in the main function
          myFunction();  // Calling the function
          return 0;
      }
    `

  return (
    // Lecture 16
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Function Scope and Lifetime</h4>
          <ul className='list-disc px-10'>
            <li className='pt-4'>Local variables</li>
            <li className='pt-2'>Global variables</li>
            <li className='pt-2'>Variable scope and visibility</li>
          </ul>
          <div>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>1. Local Variables: </h4>
            <p className='text-justify p-2 pt-4'>Local variables are declared inside a function or a block of code and are only accessible within that specific function or block. They have a limited scope, meaning they exist and can be used only within the function or block where they are declared.</p>
            <CodeHighlighter>
              {codeString} 
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>In this example, the variable x is declared inside the myFunction() function. It can be accessed and used within that function, but if we try to access it outside of the function (as shown in the commented line in main()), it will result in an error.</p>
          </div>
          <div>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>2. Global Variables: </h4>
            <p className='text-justify p-2 pt-4'>Global variables, on the other hand, are declared outside of any function or block, usually at the beginning of a program. They have a global scope, which means they can be accessed and used by any function or block throughout the entire program.</p>
            <CodeHighlighter>
              {codeString1} 
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>In this example, the <span className='code-text italic text-sm'>variable x</span> is declared outside of any function, making it a global variable. It can be accessed and used by both the <span className='code-text italic text-sm'>main() function and the myFunction()</span> function.</p>
          </div>
          <div>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>3. Variable Scope and Visibility: </h4>
            <p className='text-justify p-2 pt-4'>The scope of a variable refers to the part of the program where the variable is visible and can be accessed. The visibility determines if a variable can be accessed from a particular part of the program.</p>
            <p className='text-justify p-2 pt-4'>Local variables have a limited scope, only being visible and accessible within the block or function where they are declared. Global variables have a global scope, making them visible and accessible throughout the entire program.</p>
            <CodeHighlighter>
              {codeString2} 
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>In this example, both a local variable x and a global variable x are declared. Inside the myFunction() function, we can access the local x variable using its name. To access the global x variable, we use the scope resolution operator ::.</p>
            <p className='text-justify pt-4 px-5'>I hope this explanation clarifies the concepts of local variables, global variables, and variable scope and visibility in C++ in a way that's easy to understand!.</p>
          </div>
          
          
                      
        </article>
      </section>
    </div>
  )
} 

export default CplusFunctionScopeLifetime