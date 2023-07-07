import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyArrayIterating = () => {
  
  const codeString0 = `import numpy as np

  # Create a 1-D array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Iterate over the array
  for element in arr:
      print(element)`
  const codeString1 = `1
2
3
4
5`
  const codeString2 = `import numpy as np

  # Create a 2-D array
  arr = np.array([[1, 2, 3], [4, 5, 6]])
  
  # Iterate over the array
  for row in arr:
      for element in row:
          print(element)`
  const codeString3 = `1
2
3
4
5
6`
  const codeString4 = `import numpy as np

  # Create a 3-D array
  arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
  
  # Iterate over the array
  for matrix in arr:
      for row in matrix:
          for element in row:
              print(element)`
  const codeString5 = `1
2
3
4
5
6
7
8`
  const codeString6 = `import numpy as np

  # Create a 2-D array
  arr = np.array([[1, 2, 3], [4, 5, 6]])
  
  # Iterate over the array using nditer()
  for element in np.nditer(arr):
      print(element)
  `
  const codeString7 = `1
2
3
4
5
6`
  const codeString8 = `import numpy as np

  # Create a 2-D array
  arr = np.array([[1, 2, 3], [4, 5, 6]])
  
  # Iterate over the array using ndenumerate()
  for index, element in np.ndenumerate(arr):
      print(f"Index: {index}, Value: {element}")`
  const codeString9 = `Index: (0, 0), Value: 1
Index: (0, 1), Value: 2
Index: (0, 2), Value: 3
Index: (1, 0), Value: 4
Index: (1, 1), Value: 5
Index: (1, 2), Value: 6`
  const codeString10 = `import numpy as np

  # Create an array with different data types
  arr = np.array([1, 2.5, 'hello', True])
  
  # Iterate over the array
  for element in np.nditer(arr):
      print(element)`
      const codeString11 = `1
2.5
hello
1`
  
  return <>  
  <div>
  <section className='p-4 md:text-base text-justify text-sm'>
    <article className='mt-4'>
    <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Array Iteration</span></p>
    <p className="px-4 mt-4 ml-2 font-bold"> 1. Iterating 1-D Arrays:</p>
    <p className="px-4 mt-4 ml-2">A 1-D NumPy array is like a list of values. You can iterate over the elements of a 1-D array using a loop. Here's an example:</p>
    <CodeHighlighter>
            {codeString0} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2">Output:</p>
    <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this example, we create a 1-D NumPy array <span className='code-text italic text-sm'>arr</span> with the values <span className='code-text italic text-sm'>[1, 2, 3, 4, 5]</span>. We then use a for loop to iterate over each element in the array and print it.</p>
    <p className="px-4 mt-4 ml-2 font-bold">2. Iterating 2-D Arrays:</p>
    <p className="px-4 mt-4 ml-2">A 2-D NumPy array is like a table with rows and columns. To iterate over the elements of a 2-D array, we need to use nested loops. Here's an example: </p>
    <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Output:</p>
    <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this example, we create a 2-D NumPy array <span className='code-text italic text-sm'>arr</span> with the values <span className='code-text italic text-sm'>[[1, 2, 3], [4, 5, 6]]</span>. We use two nested loops to iterate over each element in the array. The outer loop iterates over each row, and the inner loop iterates over each element in the row.</p>
    <p className="px-4 mt-4 ml-2 font-bold"> 3. Iterating 3-D Arrays:</p>
    <p className="px-4 mt-4 ml-2"> A 3-D NumPy array is like a collection of 2-D arrays. To iterate over the elements of a 3-D array, we need to use three nested loops. Here's an example:</p>
    <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2">Output:</p>
    <CodeHighlighter>
            {codeString5} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2">In this example, we create a 3-D NumPy array <span className='code-text italic text-sm'>arr</span> with the values <span className='code-text italic text-sm'>[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]</span>. We use three nested loops to iterate over each element in the array. The outer loop iterates over each 2-D matrix, the middle loop iterates over each row in the matrix, and the inner loop iterates over each element in the row.</p>
    <p className="px-4 mt-4 ml-2 font-bold">4. Iterating Arrays Using nditer():</p>
    <p className="px-4 mt-4 ml-2">The <span className='code-text italic text-sm'>nditer()</span> function in NumPy allows us to iterate over an array using a single loop, regardless of its dimension. It provides more flexibility and control over the iteration process. Here's an example:</p>
    <CodeHighlighter>
            {codeString6} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Output:</p>
    <CodeHighlighter>
            {codeString7} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2">In this example, we create a 2-D NumPy array <span className='code-text italic text-sm'>arr</span> with the values <span className='code-text italic text-sm'>[[1, 2, 3], [4, 5, 6]]</span>. We use the <span className='code-text italic text-sm'>np.nditer()</span> function to iterate over the array. The <span className='code-text italic text-sm'>nditer()</span> function treats the array as a 1-D array and iterates over each element.</p>
    <p className="px-4 mt-4 ml-2 font-bold"> 5. Enumerated Iteration Using<span className='code-text italic text-sm'> ndenumerate()</span>:</p>
    <p className="px-4 mt-4 ml-2"> The <span className='code-text italic text-sm'>ndenumerate()</span> function in NumPy allows us to iterate over an array and get both the index and value of each element. This is useful when we need to access the index along with the value during iteration. Here's an example:</p>
    <CodeHighlighter>
            {codeString8} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Output:</p>
    <CodeHighlighter>
            {codeString9} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this example, we create a 2-D NumPy array <span className='code-text italic text-sm'>arr</span> with the values <span className='code-text italic text-sm'>[[1, 2, 3], [4, 5, 6]]</span>. We use the <span className='code-text italic text-sm'>np.ndenumerate()</span> function to iterate over the array. The <span className='code-text italic text-sm'>ndenumerate()</span> function returns both the index and the element value for each iteration, which we print out.</p>
    <p className="p-2 mt-8 text-lg font-bold rounded-md card-bg w-full">Iterating Array With Different Data Types</p>
    <p className="px-4 mt-4 ml-2">In NumPy, if you have an array with multiple data types, iterating over the array using a simple for loop may not give you the expected results. This is because NumPy arrays are homogeneous, meaning they have a fixed data type for all elements</p>
    <p className="px-4 mt-4 ml-2"> However, you can use the <span className='code-text italic text-sm'>nditer</span> function to iterate over arrays with different data types. The <span className='code-text italic text-sm'>nditer</span> function provides a flexible way to iterate over arrays while handling data type mismatches.</p>
    <p className="px-4 mt-4 ml-2">Here's an example of how you can use <span className='code-text italic text-sm'>nditer</span> to iterate over an array with different data types:</p>
    <CodeHighlighter>
            {codeString10} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Output:</p>
    <CodeHighlighter>
            {codeString11} 
          </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this example, the <span className='code-text italic text-sm'>nditer</span> function allows us to iterate over the array <span className='code-text italic text-sm'>arr</span> even though it contains elements with different data types. Each element is accessed within the loop, and you can perform operations or access properties of each element as needed.</p>
    <p className="px-4 mt-4 ml-2"> Note that <span className='code-text italic text-sm'>nditer</span> converts the elements to a common data type internally, which in this case is a string representation of each element's value.</p>
    
    </article>
  </section>
</div>

</>;
};

export default NumPyArrayIterating;
