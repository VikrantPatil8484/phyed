import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';

const ArrayPointer = () => {

  const codeString = `
  #include <iostream>

int main() {
    // Creating an array of pointers to integers
    int* array[3];

    // Creating three integer variables
    int a = 1;
    int b = 2;
    int c = 3;

    // Assigning the addresses of the integer variables to the array of pointers
    array[0] = &a;
    array[1] = &b;
    array[2] = &c;

    // Accessing and printing the values using the array of pointers
    for (int i = 0; i < 3; i++) {
        std::cout << "Value at index " << i << ": " << *array[i] << std::endl;
    }

    return 0;
}
`
const codeString1 = `
Value at index 0: 1
Value at index 1: 2
Value at index 2: 3
`
const codeString2 = `
#include <iostream>

int main() {
    // Creating a string
    std::string myString = "Hello";

    // Accessing individual characters using array notation
    for (int i = 0; i < myString.length(); i++) {
        std::cout << "Character at index " << i << ": " << myString[i] << std::endl;
    }

    // Modifying a character in the string
    myString[0] = 'J';
    std::cout << "Modified string: " << myString << std::endl;

    return 0;
}
`
const codeString3 = `
Character at index 0: H
Character at index 1: e
Character at index 2: l
Character at index 3: l
Character at index 4: o
`

const codeString4 = `
Modified string: Jello
`
  return (
    // lecture 22.1
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array Pointer</h4>
          
          <p className='text-justify pt-4'>An array of pointers is an array in which each element is a pointer to another data type. This concept allows us to create an array that can hold multiple pointers, and each pointer can point to a different data object. Let's explain this concept in detail using a simple example in C++.</p><br></br>

          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter><br></br>

          <p>In this example, we create an array of pointers to integers using the syntax int* array[3]. This means we are creating an array named array that can hold three pointers to integers.</p>
          <br></br>
          <p>Next, we create three integer variables named a, b, and c. These variables store integer values.</p>
          <br></br>
          <p>We then assign the addresses of these integer variables to the elements of the array of pointers using the assignment operator = and the address-of operator &. This allows each element of the array to point to a different integer variable.</p>
          <br></br>
          <p>Finally, we use a loop to access and print the values using the array of pointers. We use the dereference operator * to retrieve the value stored at the memory location pointed to by each pointer.</p>
          <br></br>
          <p>The output of the program will be:</p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <br></br>
          <p>This example demonstrates how an array of pointers can be used to store and access different variables. Each element of the array is a pointer that points to a specific data object, in this case, an integer. By dereferencing the pointers, we can retrieve the values stored in the respective variables.</p>
          <br></br>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Strings as character array in C++</h4>
          
          <p className='text-justify pt-4'>In C++, strings can be treated as character arrays. This means that you can access individual characters of a string using array notation and perform operations on them, just like you would with an array of characters. Let's explain this concept with a simple example:</p><br></br>


          <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter><br></br>

          <p>In this example, we first create a string named `myString` with the value "Hello".</p>

          <br></br>
          <p>We can access individual characters of the string using array notation, where `myString[i]` represents the character at index `i`. In the `for` loop, we iterate over each character of the string and print it along with its index.</p>

          <br></br>
          <p>The output of the first loop will be:</p>
          <br></br>
          <p>Finally, we use a loop to access and print the values using the array of pointers. We use the dereference operator * to retrieve the value stored at the memory location pointed to by each pointer.</p>
          <br></br>
          <p>The output of the program will be:</p>
          <CodeHighlighter>
            {codeString3}
          </CodeHighlighter>
          <br></br>
          <p>This demonstrates that we can treat the string `myString` as an array of characters and access individual characters using array notation.</p>
          <br></br>
          <p>We can also modify a character in the string by assigning a new value to `myString[i]`. In the example, we change the first character from 'H' to 'J' by assigning `'J'` to `myString[0]`. After the modification, we print the updated string.</p>
          <br></br>
          <p>The output of the second `cout` statement will be:</p>
          <br></br>
          <CodeHighlighter>
            {codeString4}
          </CodeHighlighter>
          <br></br>
          <p>This example illustrates how strings in C++ can be treated as character arrays, allowing us to access and modify individual characters using array notation.</p>

        </article>
      </section>
    </div>
  )
}

export default ArrayPointer