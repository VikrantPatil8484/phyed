import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const PointerandConst = () => {

  const codeString = `
  #include <iostream>
  int main() {
    int num = 10;
    const int* ptr = &num;

    // *ptr = 20;  // Error: Cannot modify the value through a pointer to constant data

    cout << "Value: " << *ptr << endl;  // Output: Value: 10

    return 0;
}
  `
  const codeString1 = `
  #include <iostream>
  int main() {
    int num = 10;
    int* const ptr = &num;

    // ptr = nullptr;  // Error: Cannot reassign a constant pointer

    cout << "Value: " << *ptr << endl;  // Output: Value: 10

    return 0;
} 
  `
  const codeString2 = `
  #include <iostream>
  int main() {
    int num = 10;
    const int* const ptr = &num;

    // *ptr = 20;    // Error: Cannot modify the value through a pointer to constant data
    // ptr = nullptr;  // Error: Cannot reassign a constant pointer

    cout << "Value: " << *ptr << endl;  // Output: Value: 10

    return 0;
}
  `


  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>9. Pointers and Const :</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>Pointers and const qualifiers can be used together to create different types of pointers that enforce constness. Let's explore the three types: pointers to constant data, constant pointers, and constant pointers to constant data.</p>

      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers to Constant Data:</p>
      <p>A pointer to constant data is a pointer that points to data that is considered constant and cannot be modified through the pointer. This is achieved by using the const qualifier when declaring the pointer. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, the ptr pointer is declared as a pointer to a constant integer (const int*). This means that the data pointed to by ptr (in this case, num) is considered constant, and any attempt to modify it through the pointer will result in a compilation error. However, you can still read the value of the data through the pointer.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Constant Pointers:</p>
      <p>A constant pointer is a pointer whose address cannot be changed after initialization. This is achieved by using the const qualifier before the pointer variable name. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, the ptr pointer is declared as a constant pointer to an integer (int* const). This means that the pointer itself is considered constant, and its address cannot be changed once it is initialized. Any attempt to reassign a value to the pointer will result in a compilation error. However, you can still modify the data that ptr points.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Constant Pointers to Constant Data:</p>
      <p>A constant pointer to constant data is a combination of the previous two concepts. It is a pointer whose address cannot be changed, and it points to data that is considered constant and cannot be modified. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, ptr is declared as a constant pointer to constant integer (const int* const). This means that both the pointer and the data it points to are considered constant. The address of ptr cannot be changed, and any attempt to modify the data through the pointer will result in a compilation error.</p>
      <p className='text-justify pt-4'>Using const pointers helps enforce const correctness and prevents accidental modification of data or pointer values, contributing to code safety and maintainability.</p>

      </article>
      </section>
      </div>
      <div></div>
      </>


  )
}

export default PointerandConst
    // Lecture 31.3