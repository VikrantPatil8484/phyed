import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusArray = () => {
  
  const codeString = `
  #include <iostream>

int main() {
    // Array declaration and initialization
    int numbers[5] = {2, 4, 6, 8, 10};

    // Accessing array elements
    std::cout << "Element at index 0: " << numbers[0] << std::endl;
    std::cout << "Element at index 2: " << numbers[2] << std::endl;
    std::cout << "Element at index 4: " << numbers[4] << std::endl;

    return 0;
}
  `
  const codeString1 = `
  int array1[5] = {1, 2, 3, 4, 5};
  `
  const codeString2 = `
  int array2[5] = {1, 2};
  // The remaining elements array2[2], array2[3], and array2[4] are initialized to 0.
  `
  const codeString3 = `
  int array3[5] = {};  // All elements are initialized to 0.
`
  const codeString4 = `
  int array6[5];
for (int i = 0; i < 5; i++) {
    array6[i] = i + 1;
}
  `
  const codeString5 = `
  #include <iostream>

int main() {
    // Array of favorite fruits
    std::string fruits[3] = {"apple", "banana", "orange"};

    // Accessing individual array elements
    std::cout << "My favorite fruits:" << std::endl;
    std::cout << "1. " << fruits[0] << std::endl;
    std::cout << "2. " << fruits[1] << std::endl;
    std::cout << "3. " << fruits[2] << std::endl;

    return 0;
}
`
const codeString6 = `
My favorite fruits:
1. apple
2. banana
3. orange
`
const codeString7 = `
#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    // Accessing elements within the valid bounds
    std::cout << "Numbers within bounds:" << std::endl;
    for (int i = 0; i < 5; ++i) {
        std::cout << "Element at index " << i << ": " << numbers[i] << std::endl;
    }

    // Accessing an element outside the valid bounds
    std::cout << "Accessing an element out of bounds:" << std::endl;
    std::cout << "Element at index 6: " << numbers[6] << std::endl;

    return 0;
}
`
  const codeString8 = `
  Numbers within bounds:
  Element at index 0: 1
  Element at index 1: 2
  Element at index 2: 3
  Element at index 3: 4
  Element at index 4: 5
  Accessing an element out of bounds:
  `


  return (
    // lecture 19.1
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array</h4>
          
          <p className='text-justify pt-4'>Arrays are a way to store multiple values of the same type in a single variable. They provide a convenient and organized way to work with collections of data. Let's explain array declaration, why arrays are used, how they work, and provide an easy example for better understanding.</p><br></br>
          <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array Declaration</h5>
          <p className='text-justify pt-4'>Array declaration is the process of creating an array variable in a programming language. It involves specifying the type of data the array will store and the size or number of elements it can hold.</p>
          <br></br><h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Why are Arrays Used?</h5>
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Collection of Data:</span> Arrays allow us to store and organize multiple values of the same type in a single variable. For example, we can store a list of numbers, names, or any other data in an array.</li>
                <li className='pt-4'><span className='font-semibold'>Easy Access :</span> Arrays provide a way to access individual elements by their position or index within the array. This makes it easy to retrieve or manipulate specific data within the collection.</li>
              </ul><br></br>
              <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>How do Arrays Work?</h5>
        
          <p className='text-justify pt-3'>Arrays work by allocating a contiguous block of memory to store the elements. Each element is assigned a unique index starting from 0, indicating its position within the array. The elements can be accessed using these indices</p>
           <br></br> <p>Here's a simple example in C++ to demonstrate array declaration and usage:</p>
          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter><br></br>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array Initialization</h4>
          <p className='text-justify pt-4'>Array initialization is the process of assigning initial values to the elements of an array when it is created. It allows us to provide the initial data for the array right from the start. Let's explain array initialization, why it is used, how it works, and provide a real-life example with easy-to-understand code.</p>
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Why is Array Initialization Used?</span> Array initialization is used to set the initial values of the elements in an array. It helps in defining the initial state of the array and provides a way to specify the data the array will hold. By initializing an array, we can avoid the need to manually assign values to each element after the array is created.</li>
                <li className='pt-4'><span className='font-semibold'>How Does Array Initialization Work?</span> Array initialization can be done in several ways, depending on the programming language. Some common methods include:</li>
         </ul>
          <p className='text-justify pt-4'>Initializing with values explicitly: </p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>

          <p className='text-justify pt-4'>Initializing with fewer values (remaining elements are zero-initialized): </p>
          <CodeHighlighter>
            {codeString2}
          </CodeHighlighter>
          <p className='text-justify pt-4'>Initializing with zero-initialized values: </p>
          <CodeHighlighter>
            {codeString3}
          </CodeHighlighter>
          <p className='text-justify pt-4'>Initializing using a loop:</p>
          <CodeHighlighter>
            {codeString4}
          </CodeHighlighter>
          <p className='text-justify pt-4'>Please note that the array size must be known at compile-time in C++. If you need a dynamically-sized array, consider using std::vector from the Standard Library instead.</p>   
       <br></br> <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Accessing Array Elements</h5>
          <p className='text-justify pt-4'>Accessing array elements means retrieving the values stored in specific positions or indices within an array. It allows us to work with individual elements of an array for further processing or manipulation. Let's explain how to access array elements, why it is important, provide a real-life example, and demonstrate it with easy-to-understand C++ code.</p>
          
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Why is Accessing Array Elements Important?</span> Accessing array elements is important because it allows us to retrieve and work with specific data stored in an array. It enables us to perform calculations, comparisons, or any other operations on individual elements, providing us with flexibility and control over the data.</li>
                <li className='pt-4'><span className='font-semibold'>How to Access Array Elements in C++?</span> In C++, array elements can be accessed using square brackets [] along with the index value inside them. The index represents the position of the element in the array. Array indices start from 0 for the first element and go up to the size of the array minus one.</li>
              </ul><br></br>
              <p>Here's a real-life example in C++ to demonstrate accessing array elements:</p>
              <CodeHighlighter>
            {codeString5}
          </CodeHighlighter><br></br>
           <p>In this example, we have an array called fruits that stores our favorite fruits. The array is initialized with three string values: "apple", "banana", and "orange".</p>
        <p>To access individual array elements, we use the square brackets [] after the array name, followed by the index of the element we want to access. In this case, we access elements with indices 0, 1, and 2.</p>
        <br></br><p>The code then prints the accessed elements to the console, displaying our favorite fruits:</p>
        <CodeHighlighter>
            {codeString6}
          </CodeHighlighter><br></br>
          <p>In this real-life example, we can imagine having a list of our favorite fruits stored in the fruits array. By accessing the array elements using their respective indices, we can display the fruits one by one, just like listing our favorite fruits.</p>
         <p>Accessing array elements is essential when we want to work with individual values within an array. It allows us to retrieve specific data and perform operations or manipulations on them, providing us with control and flexibility over the data stored in the array.</p>
       <br></br>  <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array Bounds</h5>
          <p className='text-justify pt-4'>Array bounds refer to the valid range of indices or positions that can be used to access elements in an array. It defines the lower and upper limits of the indices that can be used to retrieve data from an array. Let's explain array bounds, why they are important, provide a real-life example, and demonstrate it with easy-to-understand C++ code.</p>
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Why are Array Bounds Important?</span> Array bounds are important because they ensure that we access only the valid and allocated memory locations within an array. By adhering to the array bounds, we avoid accessing memory that does not belong to the array, which can lead to unpredictable behavior or runtime errors.</li>
                <li className='pt-4'><span className='font-semibold'>Understanding Array Bounds with a Real-Life Example:</span> Imagine you have a basket of 5 apples labeled from 1 to 5. Each apple represents an element in the array, and the label corresponds to the index. The valid range of indices for this array would be from 0 to 4, as arrays in most programming languages start indexing from 0.<br></br>If you try to access an element outside this range, such as the apple labeled 6, which doesn't exist in the basket, you'll encounter an "out of bounds" error because you're trying to access memory beyond the allocated space.</li>
              </ul><br></br>
              <p>Let's consider a simple C++ example to demonstrate array bounds and their importance:</p>
              <CodeHighlighter>
            {codeString7}
          </CodeHighlighter><br></br>
          <p>In this example, we have an array called numbers with a size of 5. The array is initialized with the values 1, 2, 3, 4, and 5.</p>
           <p>First, we loop through the array elements within the valid bounds (indices 0 to 4) and print their values to the console. This demonstrates accessing elements within the valid bounds and printing their values</p>
          <p>However, after that, we try to access an element outside the valid bounds by using the index 6, which is beyond the allocated memory for the array. This will result in undefined behavior and may cause a runtime error or crash.</p>
       <br></br> <p>When running the code, you will see the output for the valid array elements but encounter an error when trying to access an element out of bounds.</p>
       <CodeHighlighter>
            {codeString8}
          </CodeHighlighter><br></br>
          <p>This example highlights the importance of staying within the array bounds to ensure safe and predictable program execution.</p>
       <p>By understanding and respecting the array bounds, we can avoid accessing memory beyond the allocated space, prevent unexpected behavior, and write reliable and error-free code.

</p>
        </article>
      </section>
    </div>
  )
}

export default CplusArray