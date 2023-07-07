import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const PointerAdvanced = () => {

  const codeString = `
#include <iostream>

void foo() {
    std::cout << "Hello, from foo!" << std::endl;
}

void bar() {
    std::cout << "Hello, from bar!" << std::endl;
}

int main() {
    void (*funcPtr)();  // Declare a function pointer

    funcPtr = &foo;    // Assign the address of foo to the function pointer
    funcPtr();         // Call the function through the pointer: Output: Hello, from foo!

    funcPtr = &bar;    // Assign the address of bar to the function pointer
    funcPtr();         // Call the function through the pointer: Output: Hello, from bar!

    return 0;
}
  `
  const codeString1 = `
#include <iostream>

int main() {
    int arr[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
    int* ptr = &arr[0][0];  // Pointer to the first element of the multidimensional array

    for (int i = 0; i < 9; i++) {
        std::cout << *ptr << " ";
        ptr++;  // Move to the next element
    }

    return 0;
}
  `
  const codeString2 = `
  #include <iostream>
  #include <cstdarg>
  
  int sum(int count, ...) {
      int result = 0;
      va_list args;
      va_start(args, count);
  
      for (int i = 0; i < count; i++) {
          int num = va_arg(args, int);
          result += num;
      }
  
      va_end(args);
      return result;
  }
  
  int main() {
      int total = sum(4, 1, 2, 3, 4);
      std::cout << "Sum: " << total << std::endl;  // Output: Sum: 10
  
      return 0;
  }
  `

  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>12. Advanced Pointer Topics:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers and Function Pointers:</p>
      <p>In C++, pointers can also be used to point to functions. Function pointers allow you to store the address of a function and call it through the pointer. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a function pointer funcPtr is declared, which can point to functions taking no arguments and returning void. The function pointer is assigned the addresses of foo and bar, and the functions are called through the pointer.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers and Multidimensional Arrays:</p>
      <p>Pointers can be used to handle multidimensional arrays in C++. A multidimensional array is essentially an array of arrays. By using pointers, you can access and manipulate elements in a multidimensional array. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a 3x3 multidimensional array arr is declared. A pointer ptr is initialized to the address of the first element of the array. By dereferencing the pointer and incrementing it, the elements of the multidimensional array are accessed and printed.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers to Functions with Variable Arguments (Varargs):</p>
      <p>Pointers to functions with variable arguments allow you to create functions that can accept a varying number of arguments. This is typically achieved using the std::va_list type and the [cstdarg]header. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, the sum function takes a variable number of arguments. It uses va_list, va_start, va_arg, and va_end macros from [cstdarg] to handle the variable arguments. The sum function calculates the sum of all the provided arguments.</p>
      <p className='text-justify pt-4'>These advanced pointer topics allow you to utilize pointers in more complex scenarios, such as function pointers, multidimensional arrays, and functions with variable arguments. Understanding these concepts expands your ability to work with pointers and unlocks additional capabilities in C++.</p>

      </article>
      </section>
      </div>
      </>


  )
}

export default PointerAdvanced
// Lecture 32.3