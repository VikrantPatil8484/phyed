import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const NumPyFilterArray = () => {

  const codeString=`import numpy as np

  # Original array of ages
  ages = np.array([25, 32, 19, 45, 50, 28])
  
  # Filter array: Select ages above 30
  filter_array = ages > 30
  
  # Filtered array
  filtered_ages = ages[filter_array]
  
  # Print the filtered ages
  print(filtered_ages)`
  const codeString1=`[32 45 50]`
  const codeString2=`
  import numpy as np

  # Create a 1D array
  arr = np.array([5, 2, 8, 1, 6])`
  const codeString3=`
  filtered_arr = arr[arr > 4]
print(filtered_arr)
  `
  const codeString4=`[5 8 6]`
  const codeString5=`
  # Create a 2D array
arr_2d = np.array([[5, 2, 8],
                   [1, 6, 4],
                   [3, 9, 7]])
  `
  const codeString6=`
  filtered_arr_2d = arr_2d[arr_2d > 5]
print(filtered_arr_2d)
  `
  const codeString7=`[2 6 9]`

  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">NumPy Filter Array
 </span></p>
     
      <p className="px-4 mt-8 ml-2">Filtering arrays in NumPy means selecting specific elements from an array based on certain conditions. It allows us to extract only the elements that meet a specific criterion. Let's explore how it works with some examples.</p>
      <p className="px-4 mt-4 ml-2">Imagine you have a list of people's ages, and you want to filter out only those ages that are above a certain threshold. In this case, the list of ages represents your original array, and the filtering process will create a filter array that selects the ages meeting the specified condition.</p>
      <p className="px-4 mt-4 ml-2">Here's an example to illustrate this using NumPy:</p>
      <CodeHighlighter>
        {codeString} 
      </CodeHighlighter>
      <p className="px-4 mt-4 ml-2">Output</p>            
      <CodeHighlighter>
         {codeString1} 
       </CodeHighlighter>
      <p className="px-4 mt-2 ml-2">In this example, we have an array ages that represents the ages of a group of people. We want to filter out the ages that are above 30.</p>
      <p className="px-4 mt-2 ml-2">To create the filter array, we use the expression ages >30. This expression generates a Boolean array with the same shape as ages, where each element is True if the corresponding age in ages is above 30, and False otherwise.</p>
      <p className="px-4 mt-2 ml-2">Next, we use this filter array to index the original array ages using square brackets []. This operation selects only the elements from ages corresponding to True values in the filter array, effectively filtering out the ages that don't meet the condition.</p>
      <p className="px-4 mt-2 ml-2">Finally, we store the filtered ages in the filtered_ages array and print it.</p>
      <p className="px-4 mt-2 ml-2">This concept of filtering arrays can be useful in various real-life scenarios, such as filtering data based on certain conditions, extracting relevant information from large datasets, or performing analysis on specific subsets of data.</p>
      <ul>
        <li className="px-4 mt-2 ml-2">Filtering a 1D Array: </li>
        <p className="px-4 mt-2 ml-2">Let's say we have the following array:</p>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
        <p className="px-4 mt-2 ml-2">Now, let's say we want to select only the elements greater than 4 from this array. We can use a condition to filter the array:</p>
        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter>
        <p className="px-4 mt-2 ml-2">Output:</p>
        <CodeHighlighter>
          {codeString4}
        </CodeHighlighter>
        <p className="px-4 mt-2 ml-2">As you can see, the filtered array contains only the elements greater than 4.</p>
        <p className="px-4 mt-4 ml-2 font-bold">Filtering a 2D Array:</p>
        <p className="px-4 mt-2 ml-2">Let's consider a 2D array:</p>
        <CodeHighlighter>
          {codeString5}
        </CodeHighlighter>
        <p className="px-4 mt-2 ml-2">Now, let's say we want to select only the elements greater than 5 from this 2D array. We can use a similar approach:</p>
        <CodeHighlighter>
          {codeString6}
        </CodeHighlighter>
        <p className="px-4 mt-2 ml-2">Output:</p>
        <CodeHighlighter>
          {codeString7}
        </CodeHighlighter>
        <p className="px-4 mt-2 ml-2">The filtered column contains the elements greater than 3 from the second column of the 2D array.</p>
        <p className="px-4 mt-2 ml-2">That's it! Filtering arrays in NumPy is a useful way to select specific elements based on conditions. By using conditional statements and indexing, we can extract the elements that meet our criteria.</p>
      </ul>
    
     </article>
   </section>
   </div>
  )
};

export default NumPyFilterArray;
