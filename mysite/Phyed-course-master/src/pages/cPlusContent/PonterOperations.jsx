import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const PonterOperations = () => {

  const codeString = `
int num = 10;
int* ptr = &num;

cout << "Value of num: " << *ptr << endl;  // Output: Value of num: 10
  `
  const codeString1 = `
  cout << "Address of num: " << ptr << endl;  // Output: Address of num: 0x7ffd3f89e8ac (example address)
  `
  const codeString2 = `
  int num = 10;
  int* ptr = &num;
  
  *ptr = 20;
  cout << "Value of num: " << num << endl;  // Output: Value of num: 20
  `
  const codeString3 = `
  int arr[] = {1, 2, 3, 4, 5};
int* ptr = arr;

ptr++;  // Incrementing the pointer

cout << "Value pointed by ptr: " << *ptr << endl;  // Output: Value pointed by ptr: 2
  `
  const codeString4 = `
  int arr[] = {1, 2, 3, 4, 5};
int* ptr = arr;

ptr = ptr + 2;  // Adding 2 to the pointer

cout << "Value pointed by ptr: " << *ptr << endl;  // Output: Value pointed by ptr: 3
  `

  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Pointer Operations:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Accessing the value and address of a variable using pointers:</p>

      <p className='text-justify pt-4'>To access the value stored at a memory location pointed to by a pointer, you can use the dereference operator (*). For example:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this case, *ptr retrieves the value stored at the memory location pointed to by ptr, which is 10.</p>
      <p className='text-justify pt-4'>To access the memory address stored in a pointer, you can simply use the pointer variable itself. For example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>Here, ptr is used directly, and it will print the memory address it holds.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Dereferencing pointers:</p>
      <p className='text-justify pt-4'>Dereferencing a pointer means accessing the value stored at the memory location pointed to by the pointer. It is done using the dereference operator (*). For example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      <p className='text-justify pt-4'>In this case, *ptr dereferences the pointer and assigns the value 20 to the memory location pointed to by ptr, which modifies the value of num.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointer arithmetic:</p>
      <p className='text-justify pt-4'>Pointers support arithmetic operations, such as increment, decrement, addition, and subtraction, which can be useful for traversing arrays or manipulating memory addresses.</p>
      <p className='text-justify pt-4 font-bold'>Increment and decrement:</p>
      <p className='text-justify pt-4'>You can increment or decrement a pointer to navigate through memory addresses. For example:</p>

      <CodeHighlighter>
        {codeString3}
      </CodeHighlighter>

      <p className='text-justify pt-4'>Here, ptr++ increments the pointer by the size of the pointed data type (in this case, int), moving it to the next memory location.</p>
      <p className='text-justify pt-4 font-bold'>Addition and subtraction:</p>
      <p className='text-justify pt-4'> You can add or subtract an integer value to a pointer to adjust its position in memory. For example:</p>

      <CodeHighlighter>
        {codeString4}
      </CodeHighlighter>

      <p className='text-justify pt-4'>Here, ptr + 2 adds 2 times the size of the pointed data type to the pointer, effectively moving it two positions ahead.</p>
      <p className='text-justify pt-4'>It's important to note that pointer arithmetic should be used with caution to avoid accessing memory outside the bounds of allocated objects or arrays, which can lead to undefined behavior.</p>
      <p className='text-justify pt-4'>These pointer operations provide powerful tools for working with memory addresses and manipulating data indirectly in C++. However, it's crucial to ensure proper usage to avoid memory-related issues and adhere to the rules of the language.</p>
      
      
      </article>
      </section>
      </div>
      <div></div>
      </>
  )
}

export default PonterOperations
    // Lecture 29.2