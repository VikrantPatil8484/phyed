import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyArrayReshaping = () => {
const codeString8 = `import numpy as np

# Creating a 1-dimensional array
arr1d = np.array([1, 2, 3, 4, 5])

# Reshaping to a 2-dimensional array with 5 rows and 1 column
arr2d = arr1d.reshape(5, 1)

print(arr2d)`
  const codeString = `[[1]
  [2]
  [3]
  [4]
  [5]]`
  const codeString0 = `import numpy as np
  # Creating a 1-dimensional array
  arr1d = np.array([1, 2, 3, 4, 5, 6, 7, 8])
  # Reshaping to a 3-dimensional array with 2 layers, 2 rows, and 2 columns
  arr3d = arr1d.reshape(2, 2, 2)
  print(arr3d)`
  const codeString1 = `[[[1 2]
  [3 4]]

[[5 6]
  [7 8]]]`
  const codeString2 = `import numpy as np

  # Creating a 1-dimensional array
  arr1d = np.array([1, 2, 3, 4, 5])
  
  # Reshaping to a 2-dimensional array with 5 rows and 1 column
  arr2d = arr1d.reshape(5, 1)
  
  # Modifying the first element of arr2d
  arr2d[0] = 10
  
  print(arr1d)`
  const codeString3 = `[10  2  3  4  5]`
  const codeString4 = `import numpy as np

  # Creating a 2-dimensional array
  arr2d = np.array([[1, 2, 3], [4, 5, 6]])
  
  # Flattening the array
  arr1d = arr2d.flatten()
  
  print(arr1d)`
  const codeString5 = `[1 2 3 4 5 6]`
  const codeString6 = `import numpy as np
  # Creating a 1-dimensional array
  arr1d = np.array([1, 2, 3, 4, 5, 6])
  # Reshaping to a 2-dimensional array with 2 rows and unknown number of 
  arr2d = arr1d.reshape(2, -1)
  print(arr2d)`
  const codeString7 = `[[1 2 3]
  [4 5 6]]`
  
  return<>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Array Reshaping</span></p>
     
      <p className="px-4 mt-8 ml-2">Reshaping a NumPy array means changing its dimensions or rearranging its elements to create a new array. This can be done using the <span>reshape()</span> function in NumPy. Let's explore different scenarios:</p>

      <p className="px-4 mt-8 ml-2 font-bold">1. Reshape from 1-D to 2-D:</p>
          <CodeHighlighter>
            {codeString8} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">Output:</p>
          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">In this example, we start with a 1-dimensional array <span>arr1d</span> containing numbers from 1 to 5. By using the <span>reshap()</span> function, we convert it into a 2-dimensional array <span>arr2d</span> with 5 rows and 1 column. The elements are arranged vertically.</p>
      <p className="px-4 mt-2 ml-2 font-bold">2. Reshape from 1-D to 3-D:</p>
      <CodeHighlighter>
            {codeString0} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">Output:</p>
      <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">In this example, we reshape the 1-dimensional array <span>arr1d</span> into a 3-dimensional array <span>arr3d</span>. It has 2 layers, 2 rows, and 2 columns. The elements are arranged in a cube-like structure.</p>
      <p className="px-4 mt-2 ml-2 font-bold">3. Returns Copy or View</p>
      <p className="px-4 mt-2 ml-2">The <span>reshape()</span> function returns a new array with the desired shape. However, it's important to understand whether the returned array is a copy of the original array or just a view.</p>
      <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">Output:</p>
      <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">In this example, we reshape the 1-dimensional array <span>arr1d</span> into a 2-dimensional array <span>arr2d</span>. If we modify an element in <span>arr2d</span>, the corresponding element in arr1d also changes. This indicates that <span>arr2d</span> is just a view, or a different way to access the same data.</p>
      <p className="px-4 mt-2 ml-2 font-bold">4. Flattening the arrays:</p>
      <p className="px-4 mt-2 ml-2">Flattening an array means converting a multi-dimensional array into a 1-dimensional array. This can be achieved using the <span>flatten()</span> or <span>ravel()</span> function in NumPy.</p>
      <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>
      
      <p className="px-4 mt-2 ml-2">Output:</p>
      <CodeHighlighter>
            {codeString5} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">In this example, we start with a 2-dimensional array <span>arr2d</span>. By using the <span>flatten()</span> function, we convert it into a 1-dimensional array <span>arr1d</span>. The elements are arranged sequentially.</p>
      <p className="px-4 mt-2 ml-2 font-bold">5. Unknown Dimension:</p>
      <p className="px-4 mt-2 ml-2">In some cases, you may want to reshape an array but have an unknown dimension. You can specify <span>-1</span> for that dimension, and NumPy will automatically calculate the correct size.</p>
      <CodeHighlighter>
            {codeString6} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">Output:</p>
      <CodeHighlighter>
            {codeString7} 
          </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">In this example, we reshape the 1-dimensional array <span>arr1d</span> into a 2-dimensional array <span>arr2d</span> with 2 rows. By specifying <span>-1</span> for the number of columns, NumPy automatically calculates that each row should have 3 columns.</p>
      
          
          
      </article>
    </section>
  </div>

</>;
};

export default NumPyArrayReshaping;
