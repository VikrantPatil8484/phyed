import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 5

const PythonVariables = () => {
  const codeString = `
    # Valid variable names
    name = "John"
    age = 25
    _my_var = "Hello"
  `

  const codeString1 = `
    # Variable assignment
    name = "John"
    age = 25
`

  const codeString2 = `
    python
    Copy code
    # String
    name = "John"
    # Integer
    age = 25

    # Float
    height = 1.75

    # Boolean
    is_student = True
    `
  
  const codeString3 = `
    x = 5  # x is assigned the value 5
    x = x + 1  # x is reassigned the value x + 1 (6)
   `  

  const codeString4 =`
    # Global variable
    global_var = 10

    def my_function():
        # Local variable
        local_var = 5
        print(local_var)  # Output: 5
        print(global_var)  # Output: 10

    my_function()
  `
  const codeString5 = `
      # Multiple assignment
      x, y, z = 1, 2, 3
      `
   
  const codeString6 = `
    # Unpacking from a list
    numbers = [1, 2, 3]
    x, y, z = numbers
    
    # Unpacking from a tuple
    coordinates = (4, 5, 6)
    a, b, c = coordinates
    
    # Unpacking from a string
    name = "Alice"
    first, second, third, fourth, fifth = name 
        `    

  const codeString7 = `
    numbers = [1, 2, 3, 4, 5]
    x, y, _, _, z = numbers
    `

const codeString8 = `
    # Outputting variables using print()
    name = "John"
    age = 25
    height = 1.75

    print(name)   # Output: John
    print(age)    # Output: 25
    print(height) # Output: 1.75
    `

const codeString9 = `
    # Outputting variables with additional text using print()
    name = "John"
    age = 25

    print("Name:", name)  # Output: Name: John
    print("Age:", age)    # Output: Age: 25
    `

const codeString10 = `
    # Outputting variables using f-strings
    name = "John"
    age = 25

    print(f"Name: {name}")  # Output: Name: John
    print(f"Age: {age}")    # Output: Age: 25
    `  
const codeString11 = `
    # Outputting variables with operations using f-strings
    x = 10
    y = 5

    print(f"The sum of {x} and {y} is {x + y}")  # Output: The sum of 10 and 5 is 15
   `    
const codeString12 = `
    # Declaring global variables
    global_var = 10
    another_global_var = "Hello, world!"
    `     
const codeString13 = `
    # Accessing global variables
    global_var = 10

    def my_function():
        print(global_var)  # Output: 10

    my_function()
    `

const codeString14 = `
      # Modifying global variables
      global_var = 10

      def my_function():
          global global_var
          global_var = 20

      print(global_var)  # Output: 10
      my_function()
      print(global_var)  # Output: 20
     `   
     
  const codeString15 = `
      # global_var_module.py
      global_var = 10

      # main.py
      import global_var_module

      print(global_var_module.global_var)  # Output: 10
      `   


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
          <article className='mt-6'>
           <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python Variables</h4>
           <p className='text-justify p-2 pt-4'> Variables in Python are used to store values that can be accessed and manipulated later. They provide a way to label and refer to data in your code. Here's what you need to know about variables:</p>
           
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1.Variable Naming:</h4>
      <p className='text-justify p-2 pt-4'>Variable names can contain letters (a-z, A-Z), digits (0-9), and underscores (_).</p>
      <p className='text-justify p-2 pt-4'> They must start with a letter or an underscore.</p>
      <p className='text-justify p-2 pt-4'> Variable names are case-sensitive (e.g., "age" and "Age" are different variables).</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2.Variable Assignment:</h4>
      <p className='text-justify p-2 pt-4'> Variables are assigned values using the assignment operator (=).</p>
      <p className='text-justify p-2 pt-4'> Python is dynamically typed, so you don't need to specify the variable type explicitly.</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>   

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3.Data Types:</h4>
      <p className='text-justify p-2 pt-4'> Variables can hold different data types, such as strings, integers, floats, booleans, and more.</p>
      <p className='text-justify p-2 pt-4'> Python automatically assigns the appropriate data type based on the assigned value.</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter> 

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>4.Variable Reassignment:</h4>
      <p className='text-justify p-2 pt-4'> Variables can be reassigned with new values using the assignment operator (=).</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>    

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>5.Variable Scope:</h4>
      <p className='text-justify p-2 pt-4'> Variables have a scope, which defines their accessibility within the code.</p>
      <p className='text-justify p-2 pt-4'> Variables defined inside a function have local scope and are only accessible within that function.</p>
      <p className='text-justify p-2 pt-4'> Variables defined outside any function have global scope and can be accessed throughout the program.</p>
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>Variables are fundamental building blocks in Python and allow you to store and manipulate data effectively. Choose meaningful and descriptive variable names to improve code readability and maintainability.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python Assign Multiple Values</h4>
      <p className='text-justify p-2 pt-4'> In Python, you can assign multiple values to multiple variables simultaneously using a single line of code. This is known as multiple assignment or unpacking. Here's what you need to know:</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 1.Unpacking into Multiple Variables:</h4>
      <p className='text-justify p-2 pt-4'> You can assign multiple values to multiple variables by separating them with commas.</p>
      <p className='text-justify p-2 pt-4'> The number of variables on the left side of the assignment operator (=) must match the number of values on the right side.</p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> The values on the right side are assigned to the corresponding variables on the left side.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 2.Unpacking from an Iterable:</h4>
      <p className='text-justify p-2 pt-4'> You can also unpack values from an iterable (e.g., a list, tuple, or string) into multiple variables.</p>
      <p className='text-justify p-2 pt-4'> The number of variables must match the number of elements in the iterable.</p>
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3.Ignoring Unwanted Values:</h4>
      <p className='text-justify p-2 pt-4'> If you're interested in only a few values from an iterable, you can use an underscore (_) to ignore the unwanted values.</p>
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>     
          <p className='text-justify p-2 pt-4'> In the example above, the third and fourth values from the list are ignored.</p>
          <p className='text-justify p-2 pt-4'> Multiple assignment provides a concise and efficient way to assign multiple values to multiple variables in Python. It is commonly used when working with functions that return multiple values or when unpacking elements from data structures. Ensure that the number of variables matches the number of values to avoid errors.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Output Variables</h4>
      <p className='text-justify p-2 pt-4'> In Python, you can output the values of variables to the console or other output streams for display or further processing. Here are a few ways to output variables:</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1.Print Statement:</h4>
      <p className='text-justify p-2 pt-4'> The most common way to output variables is by using the print() function.</p>
      <p className='text-justify p-2 pt-4'> You can pass one or more variables as arguments to print() to display their values.</p>
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> You can also concatenate variables with strings using the + operator inside the print() function to create more meaningful output.</p>
              <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2.f-strings (Formatted Strings):</h4>
      <p className='text-justify p-2 pt-4'> Another way to output variables in a more readable and concise manner is by using f-strings.</p>
      <p className='text-justify p-2 pt-4'> F-strings allow you to embed variables directly within a string, preceded by the f prefix. The variables are enclosed in curly braces {}.</p>
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter> 
            <p className='text-justify p-2 pt-4'> Inside the curly braces, you can also perform operations or format the variables.</p>
              <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>       

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3.Other Output Methods:</h4>
      <p className='text-justify p-2 pt-4'> Apart from the print() function, you can also write variables to files, databases, or any other output stream depending on your specific requirements.</p>
      <p className='text-justify p-2 pt-4'> These methods allow you to output variables to the console or other output streams, making it easier to view and analyze the values during program execution. Choose the appropriate method based on your needs, considering factors such as readability, formatting, and further processing requirements.</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Global Variables</h4>
      <p className='text-justify p-2 pt-4'> In Python, a global variable is a variable that is defined outside of any function or class. Global variables have global scope, meaning they can be accessed and modified from anywhere within the program. Here's what you need to know about global variables:</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1.Declaring Global Variables:</h4>
      <p className='text-justify p-2 pt-4'> To declare a global variable, you simply assign a value to a variable outside of any function or class.</p>
      <p className='text-justify p-2 pt-4'> Global variables are usually declared at the top of the program or module, making them accessible throughout the codebase.</p>
              <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Accessing global variables:</h4>
      <p className='text-justify p-2 pt-4'> Global variables can be accessed and used from anywhere within the program, including inside functions, classes, and modules.</p>
              <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>   

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3. Modifying global variables</h4>
      <p className='text-justify p-2 pt-4'> Global variables can be modified from anywhere within the program, including inside functions.</p>
      <p className='text-justify p-2 pt-4'> However, you need to use the global keyword before the variable name within the function to indicate that you want to modify the global variable, rather than creating a new local variable.</p>
              <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>Without using the global keyword, a new local variable with the same name is created within the function, which does not affect the value of the global variable.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>4.Global Variables in Different Modules:</h4>
      <p className='text-justify p-2 pt-4'> Global variables defined in one module can be accessed from another module by importing the module.</p>
      <p className='text-justify p-2 pt-4'> However, you need to use the module name as a prefix to access the global variable.</p>
              <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>Global variables are useful when you need to share data between different parts of your program.</p>  




          </article>
      </section>
    </div>
  )
}



export default PythonVariables 