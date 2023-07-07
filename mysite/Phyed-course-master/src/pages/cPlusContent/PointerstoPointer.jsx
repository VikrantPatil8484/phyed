import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
import { FaLightbulb } from 'react-icons/fa'

const PointerstoPointer = () => {


  const codeString = `
  int main() {
    int num = 10;
    int* ptr = &num;
    int** ptrToPtr = &ptr;

    cout << "Value of num: " << **ptrToPtr << endl;  // Output: Value of num: 10

    return 0;
}
 `
 const codeString1 = `
 int main() {
  int num = 10;
  int* ptr = &num;
  int** ptrToPtr = &ptr;
  int*** ptrToPtrToPtr = &ptrToPtr;

  cout << "Value of num: " << ***ptrToPtrToPtr << endl;  // Output: Value of num: 10

  return 0;
}
 `

  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>7. Pointers to Pointers:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>Pointers to pointers, also known as double pointers, are variables that store the memory address of another pointer. They introduce multiple levels of indirection and are useful in scenarios where you need to manipulate or modify pointers dynamically. Let's explore pointers to pointers and their usage:</p>

      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers to Pointers (Double Pointers):</p>
      <p>Pointers to pointers are variables that store the memory address of another pointer. By using double indirection, you can indirectly access and modify the value of a pointer. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, ptrToPtr is a pointer to a pointer (int**). It stores the memory address of ptr, which itself stores the memory address of num. By dereferencing ptrToPtr twice (**ptrToPtr), we can access the value of num.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Multiple Levels of Indirection:</p>
      <p>Pointers to pointers introduce multiple levels of indirection. The number of asterisks (*) represents the level of indirection. For each level of indirection, you need an additional dereference to access the actual value. Here's an example with three levels of indirection:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, 'ptrToPtrToPtr' is a pointer to a pointer to a pointer (int***). It stores the memory address of ‘ptrToPtr’, which itself stores the memory address of ptr, which in turn stores the memory address of num. By dereferencing ptrToPtrToPtr three times (‘***ptrToPtrToPtr’), we can access the value of num.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Usage and Applications of Pointers to Pointers:</p>
      <p>Pointers to pointers are commonly used in various scenarios, including:</p>

      <p className='text-justify pt-4 font-bold'>Dynamic memory allocation:</p>
      <p>Pointers to pointers are useful for dynamically allocating multidimensional arrays or structures. By using double indirection, you can allocate memory dynamically and access the elements efficiently.</p>
      <p className='text-justify pt-4 font-bold'>Function parameter passing:</p>
      <p> Pointers to pointers can be passed to functions when you need to modify the original pointer inside the function. This allows you to update the pointer's value and reflect the changes in the calling code.</p>
      <p className='text-justify pt-4 font-bold'>Linked data structures:</p>
      <p> Pointers to pointers can be used in linked data structures like linked lists or binary trees. They facilitate efficient traversal and modification of the structure by updating pointers at different levels.</p>
      <p className='text-justify pt-4'>Pointers to pointers provide increased flexibility and power when manipulating pointers dynamically. They are particularly useful in situations where you need to modify pointers themselves or dynamically allocate memory with multiple levels of indirection.</p>
      <br></br>
      

      
      </article>
      </section>
      
      <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
      <FaLightbulb className='text-4xl mr-4 bulb'/>
      <p>Remember to handle pointers to pointers with care to avoid null or uninitialized pointer dereference, and ensure proper deallocation of dynamically allocated memory to prevent memory leaks.</p>
      </div>


      </div>
      <div></div>
      </>
 

  )
}

export default PointerstoPointer
   // Lecture 31.1