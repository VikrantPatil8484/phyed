import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyArrayShape = () => {
  const codeString1 = `import numpy as np

  # Creating a 1-dimensional array
  arr1d = np.array([1, 2, 3, 4, 5])
  print(arr1d.shape)  # Output: (5,)`
  const codeString2 = `# Creating a 2-dimensional array
  arr2d = np.array([[1, 2, 3], [4, 5, 6]])
  print(arr2d.shape)  # Output: (2, 3)`
  const codeString3 = `# Creating a 3-dimensional array
  arr3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
  print(arr3d.shape)  # Output: (2, 2, 2)`
  const codeString4 = `import numpy as np

  # Create a 2D array
  arr = np.array([[1, 2, 3], [4, 5, 6]])
  
  # Get the shape of the array
  print(arr.shape)`
  const codeString5 = `(2, 3)`
  const codeString6 = `import numpy as np

  # Create a 3D array
  arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
  
  # Get the number of dimensions
  print(arr.ndim)`
  const codeString7 = `3`
  return <>  
  <div>
  <section className='p-4 md:text-base text-justify text-sm'>
    <article className='mt-4'>
    <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Array Shaping</span></p>
    <p className="px-4 mt-4 ml-2"> NumPy is a powerful Python library for numerical computing. It provides a data structure called an "array," which is similar to a list or a table but with additional capabilities. One important attribute of a NumPy array is its shape, which defines the dimensions of the array.</p>
    <p className="px-4 mt-4 ml-2"> Imagine you have a collection of toys. You can organize them in different ways. For example, you can put them all in a single line, stack them in a square grid, or arrange them in a cube. The shape of the arrangement tells you how many toys are in each dimension. Similarly, the shape of a NumPy array tells you the size of each dimension.</p>
    <p className="px-4 mt-4 ml-2"> Let's look at some examples:</p>
    <CodeHighlighter>
      {codeString1} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this example, we created a 1-dimensional array called <span className='code-text italic text-sm'>arr1d</span> with five elements. When we print its shape, we get <span className='code-text italic text-sm'>(5,)</span>. The shape is a tuple with a single value, indicating the size of the array along that dimension. Here, the array has 5 elements in the first (and only) dimension.</p>
    <CodeHighlighter>
      {codeString2} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this case, we created a 2-dimensional array called <span className='code-text italic text-sm'>arr2d</span> with two rows and three columns. The shape is <span className='code-text italic text-sm'>(2, 3)</span>, meaning there are two elements along the first dimension (rows) and three elements along the second dimension (columns).</p>
    <CodeHighlighter>
      {codeString3} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Here, we created a 3-dimensional array called <span className='code-text italic text-sm'>arr3d</span> with two layers, two rows, and two columns. The shape is <span className='code-text italic text-sm'>(2, 2, 2)</span>, indicating that there are two elements along each dimension.</p>
    <p className="px-4 mt-4 ml-2"> The shape of a NumPy array can be accessed using the <span className='code-text italic text-sm'>shape</span> attribute. It returns a tuple representing the size of each dimension.</p>
    <p className="px-4 mt-4 ml-2"> Knowing the shape of an array is useful for various operations. For example, you can reshape an array to change its dimensions or perform mathematical operations that require arrays of the same shape.</p>
    <p className="px-4 mt-4 ml-2"> To access the shape of a NumPy array, you can use the <span className='code-text italic text-sm'>shape</span> attribute. Here's an example:</p>
    <CodeHighlighter>
      {codeString4} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Output:</p>
    <CodeHighlighter>
      {codeString5} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In the example above, <span className='code-text italic text-sm'>arr.shape</span> returns <span className='code-text italic text-sm'>(2, 3)</span>, indicating that the array has 2 rows and 3 columns.</p>
    <p className="px-4 mt-4 ml-2"> You can also use the <span className='code-text italic text-sm'>ndim</span> attribute to get the number of dimensions (axes) of the array:</p>
    <CodeHighlighter>
      {codeString6} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> Output:</p>
    <CodeHighlighter>
          {codeString7} 
    </CodeHighlighter>
    <p className="px-4 mt-4 ml-2"> In this case, <span className='code-text italic text-sm'>arr.ndim</span> returns <span className='code-text italic text-sm'>3</span>, indicating that the array has three dimensions.</p>
       
        
    </article>
  </section>
</div>

</>;
};

export default NumPyArrayShape;
