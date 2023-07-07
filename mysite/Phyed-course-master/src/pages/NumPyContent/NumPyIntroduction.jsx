import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';
const NumPyIntroduction = () => {
  const codeString = `[1 2 3 4 5]`
  const codeString1 = `pip install numpy`
  const codeString2 = `import numpy as np`
  const codeString3 = `import numpy as np

  # Create a 1-dimensional array
  my_array = np.array([1, 2, 3, 4, 5])
  print(my_array)`
  const codeString4 =`import numpy as np

  # Create two arrays
  array1 = np.array([1, 2, 3])
  array2 = np.array([4, 5, 6])
  
  # Perform element-wise addition
  result = array1 + array2
  print(result)`
  const codeString5 = `[5 7 9]`
  return <div>
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. What is NumPy ? </h4>
          
          <div>
            
            <p className='text-justify p-2 pt-4'>NumPy is a Python library that stands for "Numerical Python." It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays. NumPy is widely used in scientific computing, data analysis, and machine learning applications.</p>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full mt-5'>2. Why is NumPy important ? </h4>
            <div>
            <ol  className=' px-10 py-4 text-justify'>
              <li className='pt-4'>1. Efficient numerical operations: NumPy arrays are highly optimized for numerical operations, which makes computations faster and more efficient compared to regular Python lists.</li>
              <li className='pt-4'>2. Memory efficiency: NumPy arrays use less memory compared to Python lists, as they store data in a contiguous block of memory. This allows for efficient storage and manipulation of large datasets.</li>
              <li className='pt-4'>3. Mathematical operations: NumPy provides a wide range of mathematical functions that can be applied to arrays, such as trigonometric functions, logarithms, exponential functions, and more. These functions make complex calculations easier and faster.</li>
              <li className='pt-4'>4. Integration with other libraries: NumPy integrates well with other libraries in the scientific Python ecosystem, such as Pandas (for data manipulation), Matplotlib (for data visualization), and Scikit-learn (for machine learning).</li>              
            </ol>
          </div>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full mt-4'>3. Where to use NumPy?  </h4>
          <ol  className=' px-10 py-4 text-justify'>
              <li className='pt-4'><span className="font-bold">1. Data analysis :</span> NumPy provides efficient tools for handling and manipulating large datasets, making it a popular choice for data analysis tasks.</li>
              <li className='pt-4'><span className="font-bold">2. Scientific computing :</span> NumPy is widely used in scientific and numerical computations, such as simulations, modeling, and optimization problems</li>
              <li className='pt-4'><span className="font-bold">3. Machine learning :</span> Many machine learning algorithms require the use of arrays for storing and manipulating data. NumPy provides the necessary tools for handling arrays efficiently, making it a fundamental library for machine learning applications.</li>
              
            </ol>
           
          </div>
          <div>
           
            <p className='text-justify p-2 pt-4'>Now, let's move on to some examples to help you understand better.</p>
            
            <p className='text-justify p-2 pt-4'><span className="font-bold">Example 1: </span> Creating a NumPy Array To use NumPy, you first need to install it. You can install it using the following command:</p>
            <CodeHighlighter>
              {codeString1} 
            </CodeHighlighter>
            <p className='text-justify p-2 pt-4 px-10'>Once installed, you can import NumPy into your Python program using the following line of code:</p>
            <CodeHighlighter>
              {codeString2} 
            </CodeHighlighter>
            <p className='text-justify p-2 pt-4 px-8'>Now, let's create a simple NumPy array:</p>
            <CodeHighlighter>
              {codeString3} 
            </CodeHighlighter>
            <p className='text-justify p-2 pt-4 px-8'>Result</p>
            <CodeHighlighter>
              {codeString} 
            </CodeHighlighter>
            <p className='text-justify p-2 pt-4 px-8'>In this example, we created a 1-dimensional NumPy array <span className='code-text italic text-sm'>my_array</span> with the values 1, 2, 3, 4, and 5. We used the  <span className='code-text italic text-sm'>np.array()</span> function to create the array, and then we printed it using the  <span className='code-text italic text-sm'>print()</span> function.</p>
            <p className='text-justify p-2 pt-4'><span className="font-bold">Example 2:  </span> Mathematical Operations with NumPy NumPy provides a wide range of mathematical functions that can be applied to arrays. Let's see an example:</p>
            <CodeHighlighter>
              {codeString4} 
            </CodeHighlighter>
            <p className='text-justify p-2 pt-4 px-8'>Result</p>
            <CodeHighlighter>
              {codeString5} 
            </CodeHighlighter>
            <p className='text-justify p-2 pt-4 px-8'>In this example, we created two arrays <span className='code-text italic text-sm'>array1</span> and <span className='code-text italic text-sm'>array2</span>. We then performed element-wise addition between the two arrays using the <span className='code-text italic text-sm'>+</span>  operator. The resulting array <span className='code-text italic text-sm'>result </span>contains the sum of corresponding elements from <span className='code-text italic text-sm'>array1 </span>and <span className='code-text italic text-sm'>array2</span>.</p>
            <p className='text-justify p-2 pt-4'>These are just basic examples to help you get started with NumPy. There are many more things you can do with NumPy, such as array indexing, slicing, reshaping, and more. NumPy's official documentation provides extensive information and examples on how to use the library.</p>

          </div>
          
          
          
                      
        </article>
      </section>
    </div>
  </div>;
};

export default NumPyIntroduction;
