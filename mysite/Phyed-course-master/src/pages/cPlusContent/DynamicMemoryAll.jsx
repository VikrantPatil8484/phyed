import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
import { FaLightbulb } from 'react-icons/fa'

const DynamicMemoryAll = () => {

  const codeString = `
  int* ptr = new int;
  *ptr = 10;
  
  // Use the dynamically allocated memory
  cout << "Value: " << *ptr << endl;
  
  // Deallocate the memory
  delete ptr;
  `
  const codeString1 = `
  double* ptr = new double;
  *ptr = 3.14;
  
  // Use the dynamically allocated memory
  cout << "Value: " << *ptr << endl;
  
  // Deallocate the memory
  delete ptr;
  `
  const codeString2 = `
int size;
cout << "Enter the size of the array: ";
cin >> size;

int* arr = new int[size];

// Use the dynamically allocated array
for (int i = 0; i < size; i++) {
    arr[i] = i + 1;
    cout << arr[i] << " ";
}
cout << endl;

// Deallocate the memory
delete[] arr;
  `

  return (
    
    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>4. Dynamic Memory Allocation:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Introduction to dynamic memory allocation:</p>
      <p className='text-justify pt-4'>Dynamic memory allocation allows you to allocate and deallocate memory during program execution, rather than at compile time. It gives you flexibility in managing memory based on runtime requirements. In C++, dynamic memory allocation is done using the new and delete operators.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Allocation and Deallocation of Memory Using new and delete:</p>
      <p className='text-justify pt-4'>The new operator is used to dynamically allocate memory for variables or objects. It returns a pointer to the allocated memory. Here's an example of allocating memory for a single integer:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code snippet, new int dynamically allocates memory for an integer and returns a pointer to the allocated memory. The value 10 is stored in the allocated memory using the dereference operator *ptr. After using the dynamically allocated memory, it is important to deallocate it using the delete operator to free the memory.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Allocating Memory for Single Variables:</p>
      <p className='text-justify pt-4'>You can also dynamically allocate memory for other data types, such as floating-point numbers, structures, or objects. Here's an example of allocating memory for a double:</p>
      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>Similarly, you can allocate memory for other data types by replacing int with the desired type in the new expression.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Allocating Memory for Arrays:</p>
      <p className='text-justify pt-4'>Dynamic memory allocation is useful for creating arrays whose size is determined at runtime. To allocate memory for an array, you can specify the array size within square brackets. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, new int[size] dynamically allocates memory for an integer array of the specified size. The array elements are accessed and used as usual. When deallocating the memory, the delete[] operator is used instead of delete to release the entire array.</p>

      </article>
      </section>
      
      <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
      <FaLightbulb className='text-4xl mr-4 bulb'/>
      <p className='text-justify pt-4'>Dynamic memory allocation is powerful, but it requires careful management. It's important to deallocate the allocated memory using delete or delete[] when it is no longer needed to prevent memory leaks. Failing to deallocate dynamically allocated memory can result in memory exhaustion and unexpected behavior in your program.</p>
      </div>
    </div>
      </>
    
  )
}

export default DynamicMemoryAll
// Lecture 30.1