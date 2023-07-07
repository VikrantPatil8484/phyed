import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyArrayCopy = () => {
  const codeString1 =`import numpy as np

  # Create an array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Create a copy of the array
  arr_copy = arr.copy()
  
  # Modify the copy
  arr_copy[0] = 10
  
  # Print the copy and the original array
  print("Copy:", arr_copy)
  print("Original Array:", arr)
  `
  const codeString2 =`Copy: [10  2  3  4  5]
Original Array: [1 2 3 4 5]`
  const codeString3 =`import numpy as np

  # Create an array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Create a view of the array
  arr_view = arr.view()
  
  # Modify the view
  arr_view[0] = 10
  
  # Print the view and the original array
  print("View:", arr_view)
  print("Original Array:", arr)`
  const codeString4 =`View: [10  2  3  4  5]
Original Array: [10  2  3  4  5]`

  return<>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">The Difference Between Copy and View
 </span></p>
     
      <p className="px-4 mt-8 ml-2">In NumPy, <span className='code-text italic text-sm'>copy()</span> creates an independent copy of an array with its own memory, while <span className='code-text italic text-sm'>view()</span> creates a new array object that shares the same data buffer with the original array. Changes to the copy do not affect the original array, but modifications to the view are reflected in the original array. <span className='code-text italic text-sm'>copy()</span> requires additional memory, while <span className='code-text italic text-sm'>view()</span> has minimal memory consumption.</p>
      <p className="px-4 mt-8 ml-2"><span className="font-bold">Copy:</span> </p>
      <p className="px-4 mt-2 ml-2">When you create a copy of an array, a completely new and independent array is created. This means that any changes made to the copy will not affect the original array, and vice versa.</p>
      <p className="px-4 mt-8 ml-2">Example:</p>
      <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">Output:</p>
      <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">In this example, we create an array <span className='code-text italic text-sm'>arr</span> with values <span className='code-text italic text-sm'>[1, 2, 3, 4, 5].</span> Then, we use the <span className='code-text italic text-sm'>copy()</span> method to create a copy of the array, which is assigned to the variable <span className='code-text italic text-sm'>arr_copy</span>. When we modify the copy by changing the value at index 0 to 10, the original array <span className='code-text italic text-sm'>arr</span> remains unchanged.</p>
      <p className="px-4 mt-8 ml-2"><span className="font-bold">View:</span></p>
      <p className="px-4 mt-2 ml-2"> A view is a new array object that refers to the same data as the original array. This means that any changes made to the view will affect the original array, and vice versa</p>
      <p className="px-4 mt-8 ml-2">Example:</p>
          <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">Output:</p>
      <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">In this example, we create an array arr with values [1, 2, 3, 4, 5]. Then, we use the view() method to create a view of the array, assigned to the variable arr_view. When we modify the view by changing the value at index 0 to 10, the original array arr is also modified.</p>
      <p className="px-4 mt-8 ml-2">To summarize:</p>
      
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li>Copy creates a new and independent array, and changes made to the copy do not affect the original array.</li>
        <li>View refers to the same data as the original array, and changes made to the view affect the original array.</li>
       </ul>
      <p className="px-4 mt-8 ml-2"></p>
      
         
          
          
      </article>
    </section>
  </div>

</>;
};

export default NumPyArrayCopy;
