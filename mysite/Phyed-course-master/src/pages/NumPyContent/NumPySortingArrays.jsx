import React from "react"
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPySortingArrays = () => {

  const codeString1 = `
  import numpy as np

# Create a 1D array
arr = np.array([5, 2, 8, 1, 6])
  `
  const codeString2 = `
  sorted_arr = np.sort(arr)
print(sorted_arr)
  `
  const codeString3 = `
  [8 6 5 2 1]
  `
  const codeString4 = `
  # Create a 2D array
arr_2d = np.array([[5, 2, 8],
                   [1, 6, 4],
                   [3, 9, 7]])
  `
  const codeString5 = `
  sorted_arr_2d_rows = np.sort(arr_2d, axis=1)
print(sorted_arr_2d_rows)
  `
  const codeString6 = `
  [[2 5 8]
 [1 4 6]
 [3 7 9]]
  `
  const codeString7 = `
  sorted_arr_2d_cols = np.sort(arr_2d, axis=0)
print(sorted_arr_2d_cols)
  `
  const codeString8 = `
  [[1 2 4]
 [3 6 7]
 [5 9 8]]
  `

  return (

    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Sorting Array
 </span></p>
     
      <p className="px-4 mt-8 ml-2">Sorting arrays in NumPy means arranging the elements in ascending or descending order. It can be done on both one-dimensional (1D) and two-dimensional (2D) arrays. Let's explore how it works with some examples.</p>
      <ul className='list-decimal px-10 py-2 text-justify ml-5'>
        <li className="px-4 mt-2 ml-2">Sorting a 1D Array:</li>
        <p className="px-4 mt-2 ml-2"> Let's say we have the following array:</p>
        <CodeHighlighter>
            {codeString1} 
        </CodeHighlighter>
        <p>To sort this array in ascending order, we can use the np.sort() function:</p>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Output:</p>
       <CodeHighlighter>
        {codeString3}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Now, the elements are sorted in descending order.</p>

       <p className="px-4 mt-8 ml-2 font-bold">Sorting a 2D Array:</p>
       <p className="px-4 mt-2 ml-2">Let's consider a 2D array:</p>
       <CodeHighlighter>
        {codeString4}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">To sort the elements of this 2D array along the rows (axis 1), we can use the np.sort() function with axis=1 parameter:</p>
       <CodeHighlighter>
        {codeString5}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2">Output:</p>
       <CodeHighlighter>
        {codeString6}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2"> The elements in each row are sorted in ascending order.To sort the elements of the 2D array along the columns (axis 0), we can use the np.sort() function with axis=0 parameter:</p>
       <CodeHighlighter>
        {codeString7}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2"> Output:</p>
       <CodeHighlighter>
        {codeString8}
       </CodeHighlighter>
       <p className="px-4 mt-2 ml-2"> The elements in each column are sorted in ascending order.</p>
       <p className="px-4 mt-2 ml-2"> That's it! Sorting arrays in NumPy is quite straightforward. You can use the np.sort() function to sort both 1D and 2D arrays. By specifying the axis parameter, you can control whether the sorting is done along rows or columns.</p>

      </ul>
    
     </article>
   </section>
   </div>
  )
};

export default NumPySortingArrays;
