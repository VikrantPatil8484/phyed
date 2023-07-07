import React from "react"
import CodeHighlighter from '../../components/CodeHighlighter';
const NumPySearchingArrays = () => {

  const codeString = `
  numpy.searchsorted(a, v, side='left')
  `
  const codeString1 = `
  import numpy as np

# Create a sorted array
arr = np.array([2, 4, 6, 8, 10])

# Search for the index where 6 should be inserted
index = np.searchsorted(arr, 6)

print(index)
  `
  const codeString2 = `
  2
  `
  const codeString3 = `
  import numpy as np

# Create a sorted array
arr = np.array([2, 4, 6, 6, 8, 10])

# Search for the rightmost index of 6
index = np.searchsorted(arr, 6, side='right')

print(index)
  `
  const codeString4 = `
  import numpy as np

# Create a sorted array
arr = np.array([2, 4, 6, 6, 8, 10])

# Search for the rightmost index of 6
index = np.searchsorted(arr, 6, side='right')

print(index)
  `
  const codeString5 = `
  4
  `

  return(

    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Searching Array
 </span></p>
     
      <p className="px-4 mt-8 ml-2">NumPy provides functions to search for elements or insert elements into a sorted array. This is useful when you have a sorted array and need to find the position where a specific value should be inserted or search for a specific value in the array.</p>
      <ul className='list-decimal px-10 py-2 text-justify ml-5'>
        <li className="px-4 mt-2 ml-2">searchsorted(): This function returns the index where a specified value should be inserted to maintain the sorted order of the array. The syntax for searchsorted() is as follows:</li>
        <CodeHighlighter>
            {codeString} 
        </CodeHighlighter>
          <ul className='list-disc px-10 py-2 text-justify ml-5'>
            <li className="px-4 mt-2 ml-2">a: The input sorted array.</li>
            <li className="px-4 mt-2 ml-2">v: The value to be inserted or searched.</li>
            <li className="px-4 mt-2 ml-2">side: This optional parameter determines whether to return the leftmost or rightmost index if the value is found. By default, it is set to 'left'.</li>
          </ul>
        <p className="px-4 mt-2 ml-2">Let's see an example:</p>
      
       <CodeHighlighter>
         {codeString1} 
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Output:</p>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
        <ul className='list-disc px-10 py-2 text-justify ml-5'>
          <li className="px-4 mt-2 ml-2">In this example, the sorted array arr contains the values [2, 4, 6, 8, 10]. The searchsorted() function is used to find the index where the value 6 should be inserted to maintain the sorted order. The result is 2, indicating that 6 should be inserted at index 2 to keep the array sorted.</li>
          <li className="px-4 mt-2 ml-2">Searching from the right side: In addition to the default behavior of searching from the left side, NumPy also allows searching from the right side of the array. </li>
        </ul>

       <p className="px-4 mt-2 ml-2">To search from the right side, you can specify the side parameter as 'right'. <br></br>Let's see an example:</p>
       <CodeHighlighter>
        {codeString3}
       </CodeHighlighter>
       <CodeHighlighter>
        {codeString4}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Output</p>
       <CodeHighlighter>
        {codeString5}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">In this example, the sorted array arr contains the values [2, 4, 6, 6, 8, 10]. The searchsorted() function is used to find the rightmost index of the value 6. The result is 4, indicating that the rightmost occurrence of 6 is at index 4.</p>
       <p className="px-4 mt-2 ml-2">These NumPy functions provide a convenient way to search for values in sorted arrays and determine the appropriate insertion points to maintain the sorted order.</p>
      </ul>
    
     </article>
   </section>
   </div>

  ) 
};

export default NumPySearchingArrays;
