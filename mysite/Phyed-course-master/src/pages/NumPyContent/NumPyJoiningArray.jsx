import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyJoiningArray = () => {
  const codeString1 = `import numpy as np

  # Create two 1-D arrays
  arr1 = np.array([1, 2, 3])
  arr2 = np.array([4, 5, 6])
  
  # Stack the arrays along rows
  stacked = np.vstack((arr1, arr2))
  
  # Print the result
  print(stacked)`
  const codeString2 = `[[1 2 3]
  [4 5 6]]`
  const codeString3 = `import numpy as np

  # Create two 1-D arrays
  arr1 = np.array([1, 2, 3])
  arr2 = np.array([4, 5, 6])
  
  # Stack the arrays along columns
  stacked = np.hstack((arr1, arr2))
  
  # Print the result
  print(stacked)`
  const codeString4 = `[1 2 3 4 5 6]`
  const codeString5 = `import numpy as np

  # Create two 2-D arrays
  arr1 = np.array([[1, 2], [3, 4]])
  arr2 = np.array([[5, 6], [7, 8]])
  
  # Stack the arrays along height
  stacked = np.dstack((arr1, arr2))
  
  # Print the result
  print(stacked)`
  const codeString6 = `[[[1 5]
  [2 6]]

 [[3 7]
  [4 8]]]`
  return <>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-4'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Array Joining</span></p>
      
      <p className="px-4 mt-8 ml-2 font-bold">1. Joining Arrays Using Stack Functions: </p>
      <p className="px-4 mt-8 ml-2">NumPy provides several stack functions to join arrays together. These functions include <span className='code-text italic text-sm'>np.concatenate(), np.vstack(), np.hstack(), and np.dstack()</span>. Here's a brief explanation of each function:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>np.concatenate():</span> This function joins arrays along an existing axis.</li>
        <li><span className='code-text italic text-sm'>np.vstack():</span> This function vertically stacks arrays (along the rows).</li>
        <li><span className='code-text italic text-sm'>np.hstack():</span> This function horizontally stacks arrays (along the columns).</li>
        <li><span className='code-text italic text-sm'>np.dstack():</span> This function stacks arrays along the third dimension (depth).</li>
       </ul>
      <p className="px-4 mt-8 ml-2 font-bold">2. Stacking Along Rows:</p>
      <p className="px-4 mt-8 ml-2">Stacking along rows means joining arrays vertically, one below the other. Here's an example:</p>
      <CodeHighlighter>
      {codeString1} 
    </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">Output:</p>
      <CodeHighlighter>
      {codeString2} 
    </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">In this example, we have two 1-D NumPy arrays <span className='code-text italic text-sm'>arr1</span> and <span className='code-text italic text-sm'>arr2</span> with the values <span className='code-text italic text-sm'>[1, 2, 3]</span> and <span className='code-text italic text-sm'>[4, 5, 6]</span>, respectively. We use the <span className='code-text italic text-sm'>np.vstack()</span> function to vertically stack the arrays along the rows. The result is a 2-D array with the values <span className='code-text italic text-sm'>[[1, 2, 3], [4, 5, 6]]</span>.</p>
      <p className="px-4 mt-8 ml-2 font-bold">3. Stacking Along Columns:
</p>
      <p className="px-4 mt-8 ml-2">Stacking along columns means joining arrays horizontally, side by side. Here's an example:</p>
      <CodeHighlighter>
      {codeString3} 
    </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">Output:</p>
      <CodeHighlighter>
      {codeString4} 
    </CodeHighlighter>
      <p className="px-4 mt-8 ml-2">In this example, we have two 1-D NumPy arrays <span className='code-text italic text-sm'>arr1</span> and <span className='code-text italic text-sm'>arr2</span> with the values <span className='code-text italic text-sm'>[1, 2, 3]</span> and <span className='code-text italic text-sm'>[4, 5, 6]</span>, respectively. We use the <span className='code-text italic text-sm'>np.hstack()</span> function to horizontally stack the arrays side by side. The result is a 1-D array with the values <span className='code-text italic text-sm'>[1, 2, 3, 4, 5, 6]</span>.
</p>
<p className="px-4 mt-8 ml-2 font-bold">4. Stacking Along Height (Depth):</p>
<p className="px-4 mt-8 ml-2">Stacking along the height or depth dimension means joining arrays along the third dimension. This is applicable to 3-D arrays. Here's an example:</p>
<CodeHighlighter>
      {codeString5} 
    </CodeHighlighter>
<p className="px-4 mt-8 ml-2">Output:</p>
<CodeHighlighter>
      {codeString6} 
    </CodeHighlighter>
<p className="px-4 mt-8 ml-2">In this example, we have two 2-D NumPy arrays <span className='code-text italic text-sm'>arr1</span> and <span className='code-text italic text-sm'>arr2</span> with the values<span className='code-text italic text-sm'> [[1, 2], [3, 4]]</span> and <span className='code-text italic text-sm'>[[5, 6], [7, 8]]</span>, respectively. We use the np.dstack() function to stack the arrays along the height or third dimension. The result is a 3-D array with the values <span className='code-text italic text-sm'>[[[1, 5], [2, 6]], [[3, 7], [4, 8]]]</span>.</p>
      
      </article>
    </section>
  </div>

</>;
};

export default NumPyJoiningArray;
