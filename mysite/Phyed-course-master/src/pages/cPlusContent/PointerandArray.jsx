import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
import { FaLightbulb } from 'react-icons/fa'

const PointerandArray = () => {


  const codeString = `
  int arr[] = {1, 2, 3, 4, 5};
  int* ptr = arr;
  `
  const codeString1 = `
int arr[] = {1, 2, 3, 4, 5};
int* ptr = arr;

cout << "First element: " << *ptr << endl;  // Output: First element: 1

ptr++;  // Move to the next element
cout << "Second element: " << *ptr << endl;  // Output: Second element: 2
  `
  const codeString2 = `
  int arr[] = {1, 2, 3, 4, 5};
int* ptr = arr;

cout << "First element: " << *ptr << endl;  // Output: First element: 1

ptr = ptr + 2;  // Move two elements ahead
cout << "Third element: " << *ptr << endl;  // Output: Third element: 3

ptr = ptr - 1;  // Move one element back
cout << "Second element: " << *ptr << endl;  // Output: Second element: 2
  `


  return (
    
    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>3. Pointers and Arrays:</h4>
      <br></br>
      <br></br>
      <p className = ' text-justify p-4'>Arrays and pointers have a close relationship in C++. In fact, arrays can be thought of as a type of pointer that points to the first element of the array. Understanding this relationship allows you to access array elements using pointers and perform pointer arithmetic on arrays.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Arrays and pointers relationship:</p>
      <p className='text-justify pt-4'>When you declare an array in C++, it is implicitly converted to a pointer to its first element. For example:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>Here, arr is an array of integers, and ptr is a pointer to an integer. The array name arr is automatically converted to a pointer to its first element, so ptr now points to the first element of the array.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Accessing Array Elements Using Pointers:</p>
      <p className='text-justify pt-4'>Since arrays and pointers are closely related, you can use pointers to access array elements. By incrementing or decrementing the pointer, you can navigate through the array.</p>
      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this example, *ptr is used to access the value of the element pointed to by ptr. By incrementing the pointer (ptr++), we move to the next element of the array.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointer Arithmetic with Arrays:</p>
      <p className='text-justify pt-4'>Pointer arithmetic can be used with arrays to traverse the elements or perform other operations. When you perform arithmetic operations on a pointer to an array, the pointer automatically moves to the next or previous element based on the size of the data type.</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this example, ptr + 2 moves the pointer two elements ahead, and ptr - 1 moves it one element back.</p>

      <p className='text-justify pt-4'>Pointer arithmetic can be particularly useful when iterating over arrays or when working with dynamic memory allocation.</p>
      
     </article>
     </section>
      
     <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
      <FaLightbulb className='text-4xl mr-4 bulb'/>
      <p>Remember to exercise caution with pointer arithmetic to avoid accessing elements outside the bounds of the array, as this can result in undefined behavior or unexpected results.</p>
      </div>

      </div>

      </>

  )
}

export default PointerandArray
// Lecture 29.3