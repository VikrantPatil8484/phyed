import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';
const NumPyArraySlicing = () => {
  const codeString1 =`scores = np.array([85, 92, 78, 87, 91, 76, 81, 90, 85, 88])`
  const codeString2 =`subset1 = scores[2:6]`
  const codeString3 =`subset2 = scores[:4]`
  const codeString4 =`subset3 = scores[7:]`
  const codeString5 =`subset4 = scores[1::2]`
  const codeString6 =`Print the resulting subarrays:
  print("Subset 1:", subset1)
  print("Subset 2:", subset2)
  print("Subset 3:", subset3)
  print("Subset 4:", subset4)`
  const codeString7 =`Subset 1: [78 87 91 76]
Subset 2: [85 92 78 87]
Subset 3: [90 85 88]
Subset 4: [92 87 81 85]`
  const codeString8 =`import numpy as np

  # Create a 1-dimensional array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Slice the array from index 1 to 3 (exclusive)
  sliced_arr = arr[1:3]
  
  # Print the sliced array
  print(sliced_arr)`
  const codeString9 =`[2 3]`
  const codeString10 =`import numpy as np

  # Create a 1-dimensional array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Slice the last three elements
  sliced_arr = arr[-3:]
  
  # Print the sliced array
  print(sliced_arr)`
  const codeString11 =` import numpy as np

  # Create a 2-dimensional array
  arr = np.array([[1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]])
  
  # Slice the subarray from row 0 to 2 (exclusive) and column 1 to 3 (exclusive)
  sliced_arr = arr[0:2, 1:3]
  
  # Print the sliced array
  print(sliced_arr)`
const codeString12 = `[[2 3]
[5 6]]`
 

  return <>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">Accessing Array Slicing: </span></p>
      <p className="px-4 mt-4 ml-2"> Slicing arrays in NumPy allows you to extract a portion of an array by specifying a range of indices. It is a powerful way to manipulate and access subarrays efficiently. Here's a short way to perform array slicing in NumPy with a life-related example presented in points:</p>
      <p className="px-4 mt-4 ml-10"> 1.. Import the NumPy library:   <span className='code-text italic text-sm'>import  numpy  as np</span>: </p>
      <p className="px-4 mt-4 ml-10">2. Create an example array representing student scores:</p>
          <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-10">3. Extract a subset of the array using slicing:</p>
      <p className="px-4 mt-4 ml-20 ">Get the scores from index 2 to 5 (inclusive):</p>
          <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-20">Get the scores from the beginning up to index 4 (exclusive):</p>
      <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-20">Get the scores from index 7 to the end:</p>
      <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-20">Get every other score starting from index 1:</p>
      <CodeHighlighter>
            {codeString5} 
          </CodeHighlighter>
      <CodeHighlighter>
            {codeString6} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-20">In this example, we created an array <span className='code-text italic text-sm'>scores</span> representing student scores. We then used slicing to extract specific subsets of the array based on different ranges of indices.</p>
      <p className="px-4 mt-4 ml-8">The output will be:</p>
      <CodeHighlighter>
            {codeString7} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-8">By utilizing array slicing, you can efficiently extract and work with subsets of data, making it easier to analyze and manipulate arrays in NumPy.</p>
      <p className="px-4 mt-4 ml-4 font-bold">1. Slicing a 1-Dimensional Array:</p>
      <p className="px-4 mt-4 ml-20">A NumPy array is like a grid of values, and you can access specific elements or groups of elements using slicing. Let's start with a simple example:</p>
      <CodeHighlighter>
            {codeString8} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-4">Output:</p>
      <CodeHighlighter>
            {codeString9} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-4">In the code above, we create a 1-dimensional array <span>arr</span> with values <span>[1, 2, 3, 4, 5]</span>. We then use slicing to extract a portion of the array from index 1 to 3 (exclusive), which gives us the elements <span>[2, 3]</span>. The syntax for slicing is <span>start:end</span>, where <span>start</span> is the starting index (inclusive) and <span>end</span> is the ending index (exclusive).</p>
      <p className="px-4 mt-4 ml-4 font-bold">2. Negative Slicing:</p>
      <p className="px-4 mt-4 ml-20"> You can also use negative indices in slicing to start from the end of the array. Let's see an example:</p>
      <CodeHighlighter>
            {codeString10} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-4">In the code above, we use negative slicing to get the last three elements of the array. The index -3 refers to the third-to-last element, and : indicates the rest of the elements until the end of the array.</p>
      <p className="px-4 mt-4 ml-4 font-bold">3. Slicing a 2-Dimensional Array:</p>
      <p className="px-4 mt-4 ml-20"> A 2-dimensional array is like a table with rows and columns. You can slice along both dimensions to extract specific parts of the array. Here's an example:</p>
      <CodeHighlighter>
            {codeString11} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-4">Output:</p>
      <CodeHighlighter>
            {codeString12} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-4">In the code above, we create a 2-dimensional array <span className='code-text italic text-sm'>arr</span> with values <span className='code-text italic text-sm'>[[1, 2, 3], [4, 5, 6], [7, 8, 9]]</span>. We use slicing to extract a subarray that includes rows 0 to 2 (exclusive) and columns 1 to 3 (exclusive), which gives us the subarray <span className='code-text italic text-sm'>[[2, 3], [5, 6]]</span>. The syntax for slicing a 2-dimensional array is <span className='code-text italic text-sm'>row_start:row_end, col_start:col_end</span>.</p>
      
      
      </article>
    </section>
  </div>

</>;
};

export default NumPyArraySlicing;
