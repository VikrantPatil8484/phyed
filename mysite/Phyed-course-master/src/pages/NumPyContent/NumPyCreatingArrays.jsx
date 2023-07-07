import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';
const NumPyCreatingArrays = () => {
  const codeString = `import numpy as np

  # Create a 0-dimensional array (scalar)
  arr = np.array(5)
  print(arr)`

  const codeString1 = `5`
  const codeString2 = `import numpy as np

  # Create a 1-dimensional array
  arr = np.array([1, 2, 3, 4, 5])
  print(arr)`
  const codeString3 = `[1 2 3 4 5]`
  const codeString4 = `import numpy as np

  # Create a 2-dimensional array
  arr = np.array([[1, 2, 3], [4, 5, 6]])
  print(arr)`
  const codeString5 = `[[1 2 3]
  [4 5 6]]`
  const codeString6 = `import numpy as np

  # Create a 3-dimensional array
  arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
  print(arr)`
  const codeString7 = `[[[1 2]
  [3 4]]
  [[5 6]
  [7 8]]]`
  const codeString8 = `import numpy as np`
  const codeString9 = `# Create a 3-dimensional array with shape (num_subjects, num_years, num_classrooms)
  test_scores = np.array([
      [[85, 92, 88], [78, 87, 91]],
      [[76, 81, 79], [90, 85, 88]]
  ])`
  const codeString10 = `# Access an individual element
  score = test_scores[1, 0, 2]  # Subject 1, Year 0, Classroom 2
  print("Test Score:", score)
  
  # Access slices
  subject_scores = test_scores[0, :, :]  # Test scores for subject 0 in all years and classrooms
  print("Subject Scores:")
  print(subject_scores)`
  const codeString11 = `# Reshape the array to a 2-dimensional array
  reshaped_scores = test_scores.reshape((2, -1))
  print("Reshaped Scores:")
  print(reshaped_scores)`
  const codeString12 = `# Calculate the average test score for each subject
  subject_average = test_scores.mean(axis=(1, 2))
  print("Subject Average Scores:")
  print(subject_average)
  
  # Perform computations
  total_scores = np.sum(test_scores, axis=(0, 1, 2))  # Sum of all test scores
  maximum_scores = np.max(test_scores, axis=(0, 2))  # Maximum score in each subject and classroom
  print("Total Scores:", total_scores)
  print("Maximum Scores:")
  print(maximum_scores)`

  return <>
  <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <p className='p-2 text-lg font-bold rounded-md card-bg w-full'><span className="font-bold">Creating a NumPy Nd array Object: </span></p>
      <p className="px-4 mt-4 ml-2"> In NumPy, the main object used to store and manipulate data is called an ndarray (n-dimensional array). We can create ndarrays using various methods provided by NumPy.</p>
      <p className='pt-4'><span className="font-bold">1. 0-Dimensional Array (Scalar):</span></p>
      <p className="px-4 mt-4 ml-2"> A 0-dimensional array, also known as a scalar, represents a single value. You can create a scalar array by passing a single value to the <span className='code-text italic text-sm'>np.array()</span> function..</p>
          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">Result:</p>
          <CodeHighlighter>
            {codeString1} 
          </CodeHighlighter>
      <p className="px-4 mt-4 ml-2">In this example, we created a 0-dimensional array <span className='code-text italic text-sm'>arr</span> with a value of 5. It represents a single value, which is why it is called a scalar</p>
      <p className='pt-4'><span className="font-bold">2. 1-Dimensional Array: </span></p>
      <p className="px-4 mt-4 ml-2">A 1-dimensional array, also known as a vector, represents a sequence of values. You can create a 1-dimensional array by passing a Python list or tuple to the <span className='code-text italic text-sm'>np.array()</span> function.</p>
      <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">Result:</p>
          <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">Here, we created a 1-dimensional array <span className='code-text italic text-sm'>arr</span> with the values 1, 2, 3, 4, and 5. The array represents a sequence of values arranged in a single row.</p>
          <p className='pt-4'><span className="font-bold">3. 2-Dimensional Array: </span></p>
          <p className="px-4 mt-4 ml-2">A 2-dimensional array represents a matrix or a grid of values. You can create a 2-dimensional array by passing a list of lists or a nested list to the <span className='code-text italic text-sm'>np.array()</span> function.</p>
          <CodeHighlighter>
            {codeString4} 
          </CodeHighlighter>

          <p className="px-4 mt-4 ml-2">Result:</p>
          <CodeHighlighter>
            {codeString5} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">In this example, we created a 2-dimensional array <span className='code-text italic text-sm'>arr</span> with two rows and three columns. The array represents a matrix with rows and columns.</p>


          <p className='pt-4'><span className="font-bold">4. 3-Dimensional Array: </span></p>
          <p className="px-4 mt-4 ml-2">A 3-dimensional array represents a collection of matrices or a cube of values. You can create a 3-dimensional array by passing a list of 2-dimensional arrays to the <span className='code-text italic text-sm'>np.array()</span> function.</p>
          <CodeHighlighter>
            {codeString6} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">Result:</p>
          <CodeHighlighter>
            {codeString7} 
          </CodeHighlighter>
          <p className="px-4 mt-4 ml-2">Here, we created a 3-dimensional array <span className='code-text italic text-sm'>arr</span> with two 2x2 matrices. The array represents a cube of values or a collection of matrices.</p>
          <p className="px-4 mt-4 ml-2">These examples demonstrate the creation of NumPy arrays in different dimensions. Arrays can have any number of dimensions, depending on the data you are working with. NumPy provides powerful functions to manipulate and perform calculations on arrays of any dimension.</p>
          <p className='pt-4'><span className="font-bold">Higher Dimensional Arrays </span></p>
          <p className="px-4 mt-4 ml-2">Step 1: Import the NumPy library</p>
          <CodeHighlighter>
            {codeString8} 
          </CodeHighlighter>

          <p className="px-4 mt-4 ml-2">Step 2: Create a 3-dimensional array to represent the test scores</p>
          <CodeHighlighter>
            {codeString9} 
          </CodeHighlighter>  
          <p className="px-4 mt-4 ml-2">In this example, we have two subjects, two years, and two classrooms, with each element representing a test score.</p>
          <p className="px-4 mt-4 ml-2">Step 3: Accessing elements and slices</p>
          <CodeHighlighter>
            {codeString10} 
          </CodeHighlighter> 
          <p className="px-4 mt-4 ml-2">Here, we accessed an individual test score and retrieved a slice representing the scores for subject 0 across all years and classrooms.</p>
          <p className="px-4 mt-4 ml-2">Step 4: Reshaping the array</p>
          <CodeHighlighter>
            {codeString11} 
          </CodeHighlighter> 
          <p className="px-4 mt-4 ml-2">We reshaped the array into a 2-dimensional array where the first dimension represents subjects, and the second dimension represents a combination of years and classrooms.</p>
          <p className="px-4 mt-4 ml-2">Step 5: Aggregations and computations</p>
          <CodeHighlighter>
            {codeString12} 
          </CodeHighlighter>

          <p className="px-4 mt-4 ml-2">We calculated the average test score for each subject, computed the total scores, and found the maximum score in each subject and classroom using aggregations and computations.</p>
          <p className="px-4 mt-4 ml-2">By working through these steps, you can effectively create, manipulate, and analyze higher-dimensional arrays in NumPy
</p>











      </article>
    </section>
  </div>

</>;
};

export default NumPyCreatingArrays;
