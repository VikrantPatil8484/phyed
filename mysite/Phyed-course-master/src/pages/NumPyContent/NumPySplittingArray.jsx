import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';


const NumPySplittingArray = () => {

  const codeString = `
  numpy.split(ary, indices_or_sections, axis=0)
  `
  const codeString1 = `
  import numpy as np

# Create a 2D array
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

# Split the array into two sub-arrays
subarrays = np.split(arr, 2)

# Display the sub-arrays
for subarr in subarrays:
    print(subarr)
  `
  const codeString2 =`
[[1 2 3 4]
[5 6 7 8]]
[[ 9 10 11 12]]
  `
  const codeString3 = `
  import numpy as np

# Create a 2D array
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

# Split the array horizontally
subarrays = np.hsplit(arr, 2)

# Display the sub-arrays
for subarr in subarrays:
    print(subarr)
  `
  const codeString4 =`
  import numpy as np
# Create a 2D array
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])
# Split the array vertically
subarrays = np.vsplit(arr, 3)
# Display the sub-arrays
for subarr in subarrays:
print(subarr)
  `
  const codeString5 = `
[[1 2 3 4]]
[[5 6 7 8]]
[[ 9 10 11 12]]
  `

  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Splitting Array
 </span></p>
     
      <p className="px-4 mt-8 ml-2">NumPy is a powerful library for numerical computations in Python. It provides an array object called ndarray, which is efficient for handling large amounts of numerical data. One of the useful features of NumPy is the ability to split arrays into multiple smaller arrays. This can be helpful for analyzing and manipulating data in a structured manner.</p>
      <p className="px-4 mt-4 ml-2">To split a 2D array into smaller arrays, NumPy provides several functions, such as split(), hsplit(), and vsplit().</p>
      <p className="px-4 mt-4 ml-2">Let's explore each of them:</p>
      <ul className='list-decimal px-10 py-2 text-justify ml-5'>
        <li className="px-4 mt-2 ml-2">split(): This function splits an array into multiple sub-arrays along a specified axis. The syntax for split() is as follows:</li>
        <CodeHighlighter>
            {codeString} 
        </CodeHighlighter>
          <ul className='list-disc px-10 py-2 text-justify ml-5'>
            <li className="px-4 mt-2 ml-2">ary: The array to be split.</li>
            <li className="px-4 mt-2 ml-2">indices_or_sections: It can be an integer specifying the number of equal-sized sub-arrays to create, or it can be a list of indices indicating the split points.</li>
            <li className="px-4 mt-2 ml-2">axis: The axis along which to split the array. By default, it is 0 (split vertically).</li>
          </ul>
        <p className="px-4 mt-2 ml-2">Let's see an example:</p>
      
       <CodeHighlighter>
         {codeString1} 
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Output:</p>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>

       <p className="px-4 mt-2 ml-2">In this example, the 2D array arr is split into two equal-sized sub-arrays along the default axis 0. The result is two 2D arrays: [[1, 2, 3, 4], [5, 6, 7, 8]] and [[9, 10, 11, 12]].</p>
       <li className="px-4 mt-8 ml-2"> hsplit(): This function splits an array horizontally (column-wise) into multiple sub-arrays. It takes a single argument, which is the array to be split. The array is split into equal-sized sub-arrays based on the number of columns. Let's see an example:</li>
       <CodeHighlighter>
        {codeString3}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">In this example, the 2D array arr is split into two sub-arrays, each containing half of the columns. The result is two 2D arrays: [[1, 2], [5, 6], [9, 10]] and [[3, 4], [7, 8], [11, 12]].</p>

       <li className="px-4 mt-8 ml-2">vsplit(): This function splits an array vertically (row-wise) into multiple sub-arrays. It takes a single argument, which is the array to be split. The array is split into equal-sized sub-arrays based on the number of rows. Let's see an example:</li>
       <CodeHighlighter>
        {codeString4}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Output</p>
       <CodeHighlighter>
        {codeString5}
       </CodeHighlighter>
       <ul className='list-decimal px-10 py-2 text-justify ml-5'>
        <li className="px-4 mt-2 ml-2">In this example, the 2D array arr is split into three sub-arrays, each containing one row. The result is three 2D arrays: [[1, 2, 3, 4]], [[5, 6, 7, 8]], and [[9, 10, 11, 12]].</li>
        <p className="px-4 mt-2 ml-2"> These are the basic functions for splitting a 2D array in NumPy. By using these functions, you can split arrays into smaller parts for further analysis and manipulation.</p>
       </ul>

      </ul>
    
     </article>
   </section>
   </div>
  )



};

export default NumPySplittingArray;
