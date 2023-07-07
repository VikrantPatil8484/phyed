import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 22

const PythonArray = () => {
  const codeString = `
   numbers = [1, 2, 3, 4, 5]
  print(numbers[0])   # Access the first element
  print(numbers[2])   # Access the third element
 
`
  const codeString1 = `   #output
  1
  3 `


  const codeString2 = `  
    fruits = ['apple', 'banana', 'orange', 'mango']
  length = len(fruits)
  print("The length of the array is:", length)
`
  const codeString3 = `   
   The length of the array is: 4
  `
  const codeString4 = `     
  numbers = [1, 2, 3, 4, 5]
  for num in numbers:
      print(num)

`
  const codeString5 = `
  #output
  1
  2
  3
  4
  5

`
  const codeString6 = `  
  numbers = [1, 2, 3, 4, 5]
  squares = [num**2 for num in numbers]
  print(squares)

`
  const codeString7 = `
  fruits = ['apple', 'banana', 'orange']
  fruits.append('mango')
  print(fruits)

  `

    const codeString8 = `#output
     ['apple', 'banana', 'orange', 'mango']`
 
    const codeString9 = `
    numbers = [1, 2, 3, 4, 5]
    numbers.insert(2, 6)
    print(numbers)
 
 `

    const codeString10 = ` 
    #output
    [1, 2, 6, 3, 4, 5]
    `

    const codeString11 = `
    fruits = ['apple', 'banana', 'orange', 'mango']
    fruits.remove('banana')
    print(fruits)
 `

    const codeString12 = `
    #output
        ['apple', 'orange', 'mango']

    `

    const codeString13 = `
    numbers = [1, 2, 3, 4, 5]
    numbers.pop(2)
    print(numbers)
 `

  const codeString14 = `    
  [1, 2, 4, 5]
  `

  const codeString15 = `
  fruits = ['apple', 'banana', 'orange']
  fruits.append('mango')
  print(fruits)

`

  const codeString16 = `
      ['apple', 'banana', 'orange', 'mango']
  `

  const codeString17 = `
  numbers = [1, 2, 3, 4, 5]
  numbers.insert(2, 6)
  print(numbers)
`
 
  const codeString18 = `
   [1, 2, 6, 3, 4, 5]
  `

  const codeString19 = `
  fruits = ['apple', 'banana', 'orange', 'banana']
  fruits.remove('banana')
  print(fruits)
`

  const codeString20 = `
     ['apple', 'orange', 'banana']`

  const codeString21 = `
  numbers = [1, 2, 3, 4, 5]
  removed_number = numbers.pop(2)
  print("Removed number:", removed_number)
  print(numbers)
`

  const codeString22 = ` 
  Removed number: 3
  [1, 2, 4, 5]
`

  const codeString23 = `
   matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ]
`
  const codeString24 = `
   print(matrix[0][0])  # Accessing the element at row 0, column 0
  print(matrix[1][2])  # Accessing the element at row 1, column 2
  
  `

  const codeString25 = `
  #output
  1
  6
    `

  const codeString26 = `
   matrix[1][1] = 0
  print(matrix)
  
  `

  const codeString27 = ` 
  #output
  [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
  ]

`

 

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Access,length & looping of the array</h4>
      <p className='text-justify p-2 pt-4'> Certainly! I'll explain how to access, determine the length, and loop through an array in Python, along with a detailed explanation and a real-life example.</p>
      <p className='text-justify p-2 pt-4'> In Python, arrays are typically represented using the built-in `list` data type. Here's how you can perform various operations on arrays:</p>
     
      <p className='text-justify p-2 pt-4'><b>1. Accessing Array Elements:</b></p> 
      <p className='text-justify p-2 pt-4'>- Array elements can be accessed using their indices, which start from 0 for the first element.</p> 
      <p className='text-justify p-2 pt-4'>- You can use the index inside square brackets `[]` to access a specific element.</p> 
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'> In this example, the array `numbers` contains integers. By specifying the index inside square brackets, you can access individual elements. The output will be:</p> 
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'><b>2. Determining the Length of an Array:</b></p> 
      <p className='text-justify p-2 pt-4'> - The length of an array represents the number of elements it contains.</p> 
      <p className='text-justify p-2 pt-4'> - You can use the built-in `len()` function to determine the length of an array.</p> 
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>  In this example, the array `fruits` contains strings representing different fruits. By passing the array to the `len()` function, you can obtain the length of the array. The output will be:</p> 
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'><b>3. Looping Through an Array:</b></p> 
      <p className='text-justify p-2 pt-4'>  - You can use various looping constructs, such as `for` loops or list comprehensions, to iterate through each element of an array.</p> 
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>   In this example, the `for` loop iterates over each element `num` in the `numbers` array and prints it. The output will be</p> 
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>


              <p className='text-justify p-2 pt-4'> Example using a list comprehension:</p> 
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>  In this example, a list comprehension is used to create a new list `squares` where each element is the square of the corresponding element in the `numbers` array. The output will be:</p> 
              
       <p className='text-justify p-2 pt-4'>Accessing array elements, determining the length, and looping through an array are fundamental operations that allow you to work with array data effectively. These operations are commonly used in various real-life scenarios, such as data analysis, manipulating collections of items, and processing input/output.</p>
       <p className='text-justify p-2 pt-4'>By understanding and utilizing these array operations, you can access and manipulate array elements, obtain important information about the array, and perform computations or transformations on the array's elements.</p> 


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Adding & removing array element:</h4>
      <p className='text-justify p-2 pt-4'>In Python, arrays are typically represented using the built-in `list` data type, which provides several methods to add and remove elements.</p>
     
      <p className='text-justify p-2 pt-4'><b>1. Adding Elements to an Array:</b></p> 
      <p className='text-justify p-2 pt-4'> - You can add elements to the end of an array using the `append()` method.</p> 
      <p className='text-justify p-2 pt-4'> - You can insert elements at a specific position in the array using the `insert()` method.</p> 
      <p className='text-justify p-2 pt-4'> Example using <b>`append()`:</b></p> 

             <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `append()` method is used to add the string `'mango'` to the end of the `fruits` array. The output will be:</p> 
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> Example using <b>`insert()`:</b></p> 
                <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>
   
       <p className='text-justify p-2 pt-4'> In this example, the `insert()` method is used to insert the number `6` at index `2` in the `numbers` array. The output will be:</p> 
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>


       <p className='text-justify p-2 pt-4'><b>2. Removing Elements from an Array:</b></p> 
      <p className='text-justify p-2 pt-4'> - You can remove an element from an array by its value using the `remove()` method.</p> 
      <p className='text-justify p-2 pt-4'> - You can remove an element from an array by its index using the `pop()` method.</p> 
      <p className='text-justify p-2 pt-4'> Example using <b>`remove()`:</b></p> 
             <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> In this example, the `remove()` method is used to remove the string `'banana'` from the `fruits` array. The output will be:</p> 
              <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> Example using <b>`pop()`:</b></p> 
                <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'>  In this example, the `pop()` method is used to remove the element at index `2` from the `numbers` array. The output will be:</p> 
                <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>
        <p className='text-justify p-2 pt-4'>Adding and removing elements from an array allows you to modify the array dynamically based on your program's requirements. These operations are commonly used when working with collections of data or when updating data structures.</p>
        <p className='text-justify p-2 pt-4'>By understanding and utilizing these array manipulation methods, you can add new elements to the array, insert elements at specific positions, remove elements by value or index, and effectively manage the contents of the array based on your needs.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Array Method:</h4>
      <p className='text-justify p-2 pt-4'> In Python, arrays are typically represented using the built-in `list` data type, which provides several methods to manipulate and work with arrays. Here are some commonly used array methods:</p>
     
      <p className='text-justify p-2 pt-4'><b>1. `append()`:</b></p> 
      <p className='text-justify p-2 pt-4'>- The `append()` method adds an element to the end of the array.</p> 
              <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> Output:</p> 
              <CodeHighlighter>
                {codeString16} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, the `append()` method is used to add the string `'mango'` to the end of the `fruits` array.</p> 

      <p className='text-justify p-2 pt-4'><b>2. `insert()`:</b></p> 
      <p className='text-justify p-2 pt-4'> - The `insert()` method inserts an element at a specific index in the array.</p> 
              <CodeHighlighter>
                {codeString17} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> Output:</p> 
              <CodeHighlighter>
                {codeString18} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> In this example, the `insert()` method is used to insert the number `6` at index `2` in the `numbers` array.</p> 

      <p className='text-justify p-2 pt-4'><b>3. `remove()`:</b></p> 
      <p className='text-justify p-2 pt-4'>  - The `remove()` method removes the first occurrence of a specified element from the array.</p> 
              <CodeHighlighter>
                {codeString19} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> Output:</p> 
              <CodeHighlighter>
                {codeString20} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>  In this example, the `remove()` method is used to remove the string `'banana'` from the `fruits` array. Only the first occurrence of `'banana'` is removed.</p> 


      <p className='text-justify p-2 pt-4'><b>4. `pop()`:</b></p> 
      <p className='text-justify p-2 pt-4'>   - The `pop()` method removes and returns the element at a specified index in the array.</p> 
              <CodeHighlighter>
                {codeString21} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> Output:</p> 
              <CodeHighlighter>
                {codeString22} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>  In this example, the `pop()` method is used to remove the element at index `2` from the `numbers` array. The removed element is assigned to the variable `removed_number`.</p> 
              <p className='text-justify p-2 pt-4'>These are just a few examples of commonly used array methods in Python. Other array methods include `index()`, `count()`, `sort()`, `reverse()`, and more. Each method provides a specific functionality to manipulate, search, or sort the array.</p> 
              <p className='text-justify p-2 pt-4'>By understanding and utilizing these array methods, you can effectively manipulate and work with arrays, perform operations like adding, inserting, removing, and retrieving elements, and modify the array based on your program's requirements.</p> 


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Multidimensional array:</h4>
      <p className='text-justify p-2 pt-4'> In Python, a multidimensional array is an array that contains one or more arrays as its elements. It is also referred to as a nested array or an array of arrays. This allows you to create a structure that represents a grid or a matrix-like data structure.</p>
      <p className='text-justify p-2 pt-4'> To create a multidimensional array in Python, you can use nested lists, where each inner list represents a row or a sub-array. Here's an example:</p>
               <CodeHighlighter>
                {codeString23} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `matrix` is a multidimensional array that represents a 3x3 grid. Each inner list represents a row, and the elements within each inner list represent the individual values.</p> 
      <p className='text-justify p-2 pt-4'>To access elements in a multidimensional array, you need to use multiple indices. The first index represents the row, and the second index represents the column. Here's an example of accessing elements in the `matrix`:</p> 
              
              <CodeHighlighter>
                {codeString24} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> Output:</p> 
              <CodeHighlighter>
                {codeString25} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the first print statement accesses the element at row 0 and column 0, which is `1`. The second print statement accesses the element at row 1 and column 2, which is `6`.</p> 
      <p className='text-justify p-2 pt-4'>You can also perform various operations on multidimensional arrays, such as modifying elements, adding or removing rows/columns, and looping through the array using nested loops. Here's an example of modifying an element in the `matrix`:</p> 
              
              <CodeHighlighter>
                {codeString26} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> Output:</p> 
              <CodeHighlighter>
                {codeString27} 
              </CodeHighlighter>

              <p className='text-justify p-2 pt-4'>In this example, the statement `matrix[1][1] = 0` modifies the element at row 1 and column 1, setting it to `0`. The resulting `matrix` reflects the updated value.</p> 
              <p className='text-justify p-2 pt-4'>Multidimensional arrays are commonly used to represent grid-like structures in various real-life scenarios, such as representing images, matrices in linear algebra, game boards, or representing tabular data.</p> 
              <p className='text-justify p-2 pt-4'>By understanding and utilizing multidimensional arrays, you can work with structured data and perform operations that involve multiple dimensions, enabling you to handle complex data structures and solve a wide range of problems efficiently.</p> 



      
            </article>
        </section>
    </div>
  )
}

export default PythonArray