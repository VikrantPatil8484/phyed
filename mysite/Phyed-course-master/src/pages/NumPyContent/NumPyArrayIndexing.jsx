import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyArrayIndexing = () => {
  const codeString1 = `import numpy as np

  # Create a 1-dimensional array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Accessing array elements
  print(arr[0])   # Access the first element
  print(arr[2])   # Access the third element`
  const codeString2 = `1
3`
  const codeString3 = `import numpy as np
  # Create a 2-dimensional array
  arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  # Accessing array elements
  print(arr[0, 0])   # Access the element in the first row, first column
  print(arr[1, 2])   # Access the element in the second row, third column`
  const codeString4 = `1
6`
  const codeString5 = `import numpy as np

  # Create a 3-dimensional array
  arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
  
  # Accessing array elements
  print(arr[0, 1, 0])   # Access the element at coordinates (0, 1, 0)
  print(arr[1, 0, 1])   # Access the element at coordinates (1, 0, 1)
  `
  const codeString6 = `3
6
  `
  const codeString7 = `import numpy as np
  # Create a 1-dimensional array
  arr = np.array([1, 2, 3, 4, 5])
  # Accessing array elements using negative indexing
  print(arr[-1])   # Access the last element
  print(arr[-3])   # Access the third-to-last element`
  const codeString8 = `5
  3`
  const codeString9 = `import numpy as np

  # Create an example array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Access elements using negative indexing
  last_element = arr[-1]  # Access the last element
  second_last_element = arr[-2]  # Access the second-to-last element
  
  # Print the results
  print("Last element:", last_element)
  print("Second-to-last element:", second_last_element)`
  const codeString10 = `Last element: 5
Second-to-last element: 4`
  

  return <>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">Accessing Array Elements: </span></p>
      <p className="px-4 mt-4 ml-2"> NumPy provides various techniques to access elements within an array. Array indexing allows you to retrieve specific values based on their position in the array.</p>
      <p className='pt-4'><span className="font-bold">1-Dimensional Array Indexing:</span></p>
      <p className="px-4 mt-4 ml-2">  A 1-dimensional array, or a vector, is indexed by a single value representing the position of the element.</p>
          <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">  Result:</p>
          <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2"> In this example, we created a 1-dimensional array <span className='code-text italic text-sm'>arr</span> with values 1, 2, 3, 4, and 5. We accessed the first element using <span className='code-text italic text-sm'>arr[0]</span> and the third element using <span className='code-text italic text-sm'>arr[2]</span>. Array indexing starts from 0, so the first element is at index 0, the second element is at index 1, and so on.</p>
          <p className='pt-4'><span className="font-bold">2-Dimensional Array Indexing:</span></p>
 
          <p className="px-4 mt-4 ml-2">  A 2-dimensional array, or a matrix, is indexed using two values representing the row and column positions of the element.</p>
          <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">   Result:</p>
          <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2"> In this example, we created a 2-dimensional array <span className='code-text italic text-sm'>arr</span> with values arranged in three rows and three columns. We accessed the element in the first row and first column using <span className='code-text italic text-sm'>arr[0, 0]</span> and the element in the second row and third column using <span>arr[1, 2]</span>.</p>
          <p className='pt-4'><span className="font-bold">3-Dimensional Array Indexing:</span></p>


          <p className="px-4 mt-4 ml-2">   A 3-dimensional array is indexed using three values representing the positions of the element along each axis.</p>
          <CodeHighlighter>
            {codeString5} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">   Result:</p>
          <CodeHighlighter>
            {codeString6} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">  Here, we created a 3-dimensional array <span className='code-text italic text-sm'>arr</span> with values arranged in two 2x2 matrices. We accessed the element at coordinates (0, 1, 0) using <span className='code-text italic text-sm'>arr[0, 1, 0]</span> and the element at coordinates (1, 0, 1) using <span className='code-text italic text-sm'>arr[1, 0, 1]</span>.</p>
          <p className="px-4 mt-4 ml-2">  Negative Indexing: NumPy also supports negative indexing, where -1 represents the last element, -2 represents the second-to-last element, and so on.</p>
      
          <CodeHighlighter>
            {codeString7} 
          </CodeHighlighter>
      
          <p className="px-4 mt-4 ml-2">   Result:</p>

          <CodeHighlighter>
            {codeString8} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">In this example, we accessed the last element using <span className='code-text italic text-sm'>arr[-1]</span> and the third-to-last element using <span className='code-text italic text-sm'>arr[-3]</span> in a 1-dimensional array.</p>

          <p className="px-4 mt-4 ml-2">These examples demonstrate how to access elements in 1-dimensional, 2-dimensional, and 3-dimensional arrays using array indexing. You can specify the positions of the elements using positive indexing (starting from 0) or negative indexing (starting from -1).</p>
          <p className='pt-4'><span className="font-bold">Negative Indexing</span></p>

          <p className="px-4 mt-4 ml-2">Negative indexing in NumPy allows you to access elements of an array from the end, rather than from the beginning. It provides a convenient way to access elements relative to the last element without knowing the exact size of the array. Here's an easy and short way to use negative indexing in NumPy:</p>
          <CodeHighlighter>
            {codeString9} 
          </CodeHighlighter>
      
          <p className="px-4 mt-4 ml-2">In this example, we created an array <span className='code-text italic text-sm'>arr</span> with elements <span className='code-text italic text-sm'>[1, 2, 3, 4, 5].</span> By using negative indexing, we accessed the last element of the array using <span className='code-text italic text-sm'>-1</span> and the second-to-last element using<span className='code-text italic text-sm'>-2</span>.</p>
          <p className="px-4 mt-4 ml-2">The output will be:.</p>
          <CodeHighlighter>
            {codeString10} 
          </CodeHighlighter>
      </article>
    </section>
  </div>

</>;;
};

export default NumPyArrayIndexing;
