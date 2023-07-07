import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const PointerIntro = () => {

  const codeString = `
  int* ptr;
  `
  const codeString1 = `
int num = 10;
int* ptr = &num;
  `
  const codeString2 = `
int* ptr = nullptr; 
  `

  return (
  


    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1.Introduction to Pointer:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4 font-bold'>What are pointers?</p>

      <p className='text-justify pt-4'>Pointers in C++ are similar to pointers in C, allowing you to work with memory addresses directly. They provide a way to manipulate data indirectly by accessing and modifying the memory location where the data is stored.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Memory and addresses:</p>

      <p className='text-justify pt-4'>In computer memory, each byte has a unique address. Pointers are variables that store these memory addresses. By using pointers, you can perform operations on variables indirectly, rather than directly manipulating their values.</p>
      <p className='text-justify pt-4 font-bold'>Pointer declaration and initialization:</p>
      <p className='text-justify pt-4'>In C++, you can declare a pointer using the asterisk (*) symbol. For example:</p>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>Here, ptr is a pointer to an integer. It can store the memory address of an integer variable. The asterisk (*) indicates that ptr is a pointer.</p>
      <p className='text-justify pt-4'>To initialize a pointer, you can assign it the address of a variable using the ampersand (&) operator. The ampersand operator retrieves the address of a variable. For example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this case, ptr is initialized with the address of the num variable. Now, ptr points to the memory location where num is stored.</p>
      <p className='text-justify pt-4'>You can also assign nullptr to a pointer if you don't want it to point to any valid memory address initially. nullptr is a special constant introduced in C++11 that represents a null pointer value. For example:</p>

      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this case, ptr is a null pointer since it doesn't point to any valid memory location.</p>
      <p className='text-justify pt-4'>Pointers in C++ provide great flexibility and power, allowing you to work with dynamic memory allocation, manipulate arrays, create data structures like linked lists, and interact with functions more efficiently. However, they require careful management to avoid memory leaks and other memory-related issues. It's important to handle pointers with care and always ensure they point to valid memory addresses before dereferencing them.</p>
      </article>
      </section>
      </div>
      <div></div>
      </>

  )
}

export default PointerIntro
    // Lecture 29.1