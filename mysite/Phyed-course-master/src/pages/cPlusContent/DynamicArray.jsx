import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';

const DynamicArray = () => {
  
  const codeString = `
  #include <iostream>

int main() {
    // Ask the user for the size of the array
    int size;
    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    // Create a dynamic array
    int* dynamicArray = new int[size];

    // Assign values to the array
    for (int i = 0; i < size; i++) {
        dynamicArray[i] = i * 2;
    }

    // Print the array elements
    std::cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        std::cout << dynamicArray[i] << " ";
    }
    std::cout << std::endl;

    // Release the dynamically allocated memory
    delete[] dynamicArray;

    return 0;
}
 `
  


  return (
    // lecture 19.1
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Dynamic Array </h4>
          
          <p className='text-justify pt-4'>A dynamic array is an array whose size can be determined at runtime. In other words, it allows us to create an array whose length can change during the execution of a program. This is useful when we don't know the exact size of the array beforehand or when we need to resize the array dynamically.</p><br></br>

          <p className='text-justify pt-4'>Here's an example that demonstrates how to use dynamic arrays in C++:</p>

              
          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter><br></br>
          <p>In this example, we start by asking the user for the size of the array they want to create. The user enters a value, and we store it in the size variable.</p><br></br>
          <p>Then, we create a dynamic array using the new operator. The new operator allocates memory for the array at runtime, based on the size specified by the user. The type of the dynamic array is int*, which means it's an array of integers.</p>
      <br></br>  <p>Next, we use a loop to assign values to each element of the dynamic array. In this case, we assign values that are multiples of 2. For example, if the user enters a size of 5, the dynamic array will contain the elements: [0, 2, 4, 6, 8].</p>
        <p>After assigning values to the dynamic array, we loop through the elements again to print them out.

Finally, it's important to release the memory allocated by the dynamic array using the delete[] operator. This ensures that the memory is freed up and can be used for other purposes.
</p><br></br>
<p>This example introduces the concept of dynamic arrays, where the size is determined at runtime. It demonstrates how to create, assign values to, and access the elements of a dynamic array. Remember to always release the memory using delete[] to avoid memory leaks.
</p>
        </article>
      </section>
    </div>
  )
}

export default DynamicArray