import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
import { FaLightbulb } from 'react-icons/fa'

const PointerandString = () => {

  const codeString =`
  int main() {
    char str[] = "Hello";
    char* ptr = str;

    cout << "String: " << ptr << endl;  // Output: String: Hello

    return 0;
}
  `
  const codeString1 = `
  #include <cstring>

  int main() {
      char str[] = "Hello";
      char* ptr = str;
  
      // Change the first character
      *ptr = 'J';
  
      // Append a string
      ptr += strlen(ptr);
      strcpy(ptr, " World!");
  
      cout << "Modified string: " << str << endl;  // Output: Modified string: Jello World!
  
      return 0;
  }
  `
  const codeString2 = `
  int main() {
    char* str = new char[10];  // Allocate memory for a string of length 10

    strcpy(str, "Dynamic");

    cout << "Dynamic string: " << str << endl;  // Output: Dynamic string: Dynamic

    delete[] str;

    return 0;
}
  `


  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>8. Pointers and Strings:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>Pointers are commonly used with character arrays to handle strings in C++. Pointers allow for efficient string manipulation and dynamic memory allocation for strings. Let's explore these concepts:</p>

      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers and Character Arrays:</p>
      <p>In C++, a string is often represented as an array of characters. Pointers can be used to manipulate and access the elements of a character array, allowing for string operations. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a character array str is initialized with the string "Hello". The pointer ptr is then assigned the memory address of the first character of the array. By dereferencing ptr or using it in a context where a string is expected, you can access and manipulate the string.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>String Manipulation Using Pointers:</p>
      <p>Pointers can be used to manipulate strings efficiently. By using pointer arithmetic and various string functions, you can perform common string operations. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, the first character of the string is changed by dereferencing the pointer (*ptr = 'J'). Then, the pointer is moved to the end of the string using ptr += strlen(ptr). The strcpy function is used to append the " World!" string to the original string.</p>
      <p className='text-justify pt-4'>Pointers enable efficient traversal and modification of string characters, making them useful in string manipulation operations.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Dynamic Memory Allocation for Strings:</p>
      <p>Pointers can also be used to dynamically allocate memory for strings when the string length is not known at compile time. Dynamic memory allocation allows you to allocate memory for strings of varying lengths. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, dynamic memory is allocated using the new operator to create a character array of length 10. The strcpy function is used to copy the string "Dynamic" into the allocated memory. After using the dynamically allocated memory, it's important to deallocate it using delete[] to prevent memory leaks.</p>
      <p className='text-justify pt-4'>Dynamic memory allocation for strings allows for flexibility in handling strings of varying lengths and avoids the limitations of fixed-size character arrays.</p>
      
      </article>
      </section>
      <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
      <FaLightbulb className='text-4xl mr-4 bulb'/>
      <p>Remember to handle dynamic memory allocation responsibly, ensuring proper deallocation to avoid memory leaks and undefined behavior.</p>
      </div>


      </div>
      <div></div>
      </>

  

  )
}

export default PointerandString
  // Lecture 31.2