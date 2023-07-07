import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyDataTypes = () => {
  const codeString = `import numpy as np

  # Create an array
  arr = np.array([1, 2, 3])
  
  # Check the data type of the array
  print(arr.dtype)`

  const codeString1 = `int64`
  const codeString5 = `New Array: [1. 2. 3. 4. 5.]
Data Type: float64`
  const codeString4 = `import numpy as np

  # Create an example array
  arr = np.array([1, 2, 3, 4, 5])
  
  # Convert the data type
  new_arr = arr.astype(float)
  
  # Print the new array and its data type
  print("New Array:", new_arr)
  print("Data Type:", new_arr.dtype)`
  const codeString2 = `import numpy as np

  # Create an array with integers
  arr = np.array([1, 2, 3])
  
  # Convert the data type to float
  float_arr = arr.astype(float)
  
  # Check the data type of the converted array
  print(float_arr.dtype)`
  const codeString3 = `float64`


  return  <>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">Data Types in Python </span></p>
     
      <p className="px-4 mt-4 ml-2">Numeric Types</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>int:</span> Represents integers.</li>
        <li><span className='code-text italic text-sm'>float:</span> Represents floating-point numbers</li>
        <li><span className='code-text italic text-sm'>complex:</span> Represents complex numbers</li>
      </ul>

      <p className="px-4 mt-4 ml-2">Sequence Types:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>str:</span> Represents strings of characters.</li>
        <li><span className='code-text italic text-sm'>list:</span> Represents ordered collections of elements.</li>
        <li><span className='code-text italic text-sm'>tuple:</span> Represents immutable ordered collections of elements.</li>
      </ul>
      <p className="px-4 mt-4 ml-2">Mapping Type:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>dict:</span> Represents key-value pair collections.</li>

       </ul>

      <p className="px-4 mt-4 ml-2">Set Types:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>set:</span> Represents unordered collections of unique elements.</li>
        <li><span className='code-text italic text-sm'>frozenset:</span> Represents immutable sets.</li>
       </ul>


       <p className="px-4 mt-4 ml-2">Boolean Type:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>bool:</span> Represents boolean values (True or False).</li>
       </ul>


       <p className="px-4 mt-4 ml-2">None Type:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>None:</span> Represents the absence of a value or a null value.</li>
       </ul>

       
        <p className="px-4 mt-4 ml-2"><span className="font-bold" >Data Types in NumPy:</span></p>
        <p className="px-4 mt-4 ml-2">NumPy introduces additional data types that are optimized for numerical computations and memory efficiency. These data types are represented by objects of the numpy.dtype class. Some commonly used NumPy data types include:</p>
        
        <p className="px-4 mt-4 ml-2">Integer Types:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>int8, int16, int32, int64:</span> Signed integer types with different bit sizes.</li>
        <li><span className='code-text italic text-sm'>uint8, uint16, uint32, uint64:</span> Unsigned integer types with different bit sizes.</li>
      </ul>
        <p className="px-4 mt-4 ml-2">Floating-Point Types:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>float16, float32, float64:</span> Floating-point types with different precision.</li>
        </ul>
        <p className="px-4 mt-4 ml-2">Complex Types:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>complex64, complex128:</span> Complex number types with different precision.</li>
        </ul>
        <p className="px-4 mt-4 ml-2">Other Types:</p>
      <ul className='list-disc px-10 py-2 text-justify ml-5'>
        <li><span className='code-text italic text-sm'>bool:</span> Represents boolean values (True or False).</li>
        <li><span className='code-text italic text-sm'>object:</span> Represents Python objects.</li>
        <li><span className='code-text italic text-sm'>string_, unicode_:</span> String types</li>
        </ul>


        <p className="px-4 mt-4 ml-2">NumPy data types provide finer control over memory usage and support various mathematical operations efficiently. They are commonly used for scientific computing, numerical analysis, and data manipulation tasks.</p>
        <p className="px-4 mt-4 ml-2">Note: NumPy also supports user-defined data types (structured or record arrays), allowing for more complex and specialized data representations.</p>

        <p className="px-4 mt-4 ml-8">1. Checking the Data Type of an Array: Every element in a NumPy array has a specific data type, such as integer, float, or string. You can check the data type of an array using the <span className='code-text italic text-sm'>dtype</span> attribute. Here's an example:</p>

          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter>
        <p className="px-4 mt-4 ml-2">Output:</p>

        <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
        <p className="px-4 mt-4 ml-2">In the code above, we create a NumPy array <span className='code-text italic text-sm'>arr</span> with values <span className='code-text italic text-sm'>[1, 2, 3]</span>. We then use the <span className='code-text italic text-sm'>dtype</span> attribute to check the data type of the array, which in this case is <span>int64</span> (64-bit integer).</p>
        <p className="px-4 mt-4 ml-2">2. Converting Data Type on Existing Arrays</p>
        
        <p className="px-4 mt-4 ml-8">You can convert the data type of an existing array to another data type using the <span className='code-text italic text-sm'>astype()</span> method. Let's see an example:</p>
        <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">Output:</p>
          <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">In the code above, we have an array <span className='code-text italic text-sm'>arr</span> with values <span className='code-text italic text-sm'>[1, 2, 3]</span> of integer data type. We use the <span className='code-text italic text-sm'>astype()</span> method to convert the data type to float, resulting in a new array <span className='code-text italic text-sm'>float_arr</span>. We then check the data type of the converted array, which is <span className='code-text italic text-sm'>float64</span> (64-bit floating-point number).</p>
          <p className="px-4 mt-4 ml-2">It's important to note that the <span className='code-text italic text-sm'>astype()</span> method creates a new array with the converted data type and does not modify the original array.</p>
          <p className="px-4 mt-4 ml-2"><span className="font-bold">Converting Data Type on Existing Arrays</span></p>
          <p className="px-4 mt-4 ml-2">In NumPy, you can convert the data type of existing arrays using the <span className='code-text italic text-sm'>astype()</span> method, which allows you to specify the desired data type. Here's a simple way to convert the data type of an existing NumPy array:</p>
          <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>
        <p className="px-4 mt-4 ml-2">In this example, we start with a NumPy array <span className='code-text italic text-sm'>arr</span> containing integer values. We use the <span className='code-text italic text-sm'>astype()</span> method to convert the data type to <span className='code-text italic text-sm'>float</span>, creating a new array <span className='code-text italic text-sm'>new_arr</span> with the converted values. Finally, we print the new array and its data type using the <span className='code-text italic text-sm'>dtype</span> attribute.</p>
        <p className="px-4 mt-4 ml-2">The output will be:</p>
        <CodeHighlighter>
            {codeString5} 
          </CodeHighlighter>
        <p className="px-4 mt-4 ml-2">By using the <span className='code-text italic text-sm'>astype()</span> method, you can easily convert the data type of existing NumPy arrays to the desired type, allowing for flexible data manipulation and computations.</p>
      </article>
    </section>
  </div>

</>;
};

export default NumPyDataTypes;
