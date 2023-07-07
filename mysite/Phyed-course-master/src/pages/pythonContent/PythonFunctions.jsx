import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 19

const PythonFunctions = () => {
  const codeString = `
  def function_name(argument1, argument2, ...):
  # code block
  # perform computations
  # return result (if necessary)
  `
  const codeString1 = `
  def square(num):
  result = num ** 2
  return result
   `
   const codeString2 = `
   number = 5
   square_result = square(number)
   print("The square of", number, "is", square_result)
   
   `
   const codeString3 = `
   The square of 5 is 25
    `
   const codeString4 = `
   def greet(name, age):
       print("Hello,", name)
       print("You are", age, "years old")
   greet("Alice", 25)

   `
   const codeString5 = `
   def greet(name, age):
   print("Hello,", name)
   print("You are", age, "years old")

   greet(age=25, name="Bob")
    `
   const codeString6 = `
   def greet(name, age=30):
       print("Hello,", name)
       print("You are", age, "years old")

   greet("Alice")
   `

   const codeString7 = `
   def add(*numbers):
   result = 0
   for num in numbers:
       result += num
   return result

  sum = add(1, 2, 3, 4, 5)
`

   const codeString8 = ` 
   def greet(*, name, age):
       print("Hello,", name)
       print("You are", age, "years old")

   greet(name="Alice", age=25)
`

   const codeString9 = `
   def add_numbers(num1, num2):
   sum = num1 + num2
   return sum

  result = add_numbers(5, 3)
  print("The sum is:", result)
  `

  const codeString10 = `
  def placeholder_function():
  pass

  def process_data(data):
  for item in data:
      # Process each item
      pass
   `

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python create & call function:</h4>
      <p className='text-justify p-2 pt-4'> In Python, a function is a block of reusable code that performs a specific task. Functions provide modularity and allow you to break down your code into smaller, manageable units. They can accept input arguments, perform computations, and return results.</p>
      <p className='text-justify p-2 pt-4'> To create a function in Python, you use the `def` keyword followed by the function name, a set of parentheses for optional input arguments, and a colon. The code block for the function is indented under the function definition.</p>
      <p className='text-justify p-2 pt-4'> The basic syntax for creating a function in Python is as follows:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>  
      <p className='text-justify p-2 pt-4'> Here's an example of a simple function that calculates the square of a number:</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> In this example, the `square` function takes an argument `num`, computes its square by raising it to the power of 2, and returns the result.</p>
      <p className='text-justify p-2 pt-4'> To call a function in Python, you simply write the function name followed by parentheses, passing the required arguments (if any). The function is executed, and the control returns to the calling code.</p>
      <p className='text-justify p-2 pt-4'> Here's how you can call the `square` function and use its returned value:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> In this example, the `square` function is called with the argument `number` set to 5. The returned value is assigned to the variable `square_result`. Finally, the program prints the result using the `print` statement.</p>
      <p className='text-justify p-2 pt-4'> When you run this program, it will display the following output:</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'> Functions provide a way to organize and reuse code, making it easier to manage complex programs. They allow you to encapsulate specific functionality, separate concerns, and improve code readability. In real-life scenarios, functions can be used to perform various tasks, such as processing data, performing calculations, interacting with databases, or implementing complex algorithms.</p>
    <p className='text-justify p-2 pt-4'> By creating and calling functions, you can write more modular and maintainable code, promoting code reuse and making your programs more efficient and scalable.</p>

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python Argument ( parameter , Number , arbitrary keyword)</h4>
    <p className='text-justify p-2 pt-4'> There are different types of arguments in Python functions: positional arguments, keyword arguments, default arguments, variable-length arguments, and keyword-only arguments. I'll provide a detailed explanation and include real-life examples.</p>

    <p className='text-justify p-2 pt-4'> <b>1. Positional Arguments:</b></p>
    <p className='text-justify p-2 pt-4'>  - Positional arguments are passed to a function based on their position or order.</p>
    <p className='text-justify p-2 pt-4'> - The number and order of arguments must match between the function definition and the function call.</p>
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'>   In this example, the `greet` function accepts two positional arguments: `name` and `age`. When calling the function, the arguments are passed in the same order: "Alice" for `name` and 25 for `age`.</p>
    

    <p className='text-justify p-2 pt-4'> <b>2. Keyword Arguments:</b></p>
    <p className='text-justify p-2 pt-4'>- Keyword arguments are passed to a function using the argument name.</p>
    <p className='text-justify p-2 pt-4'>- The order of the arguments doesn't matter as long as the argument names are provided.</p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'> In this example, the `greet` function is called with keyword arguments: `age=25` and `name="Bob"`. The order of the arguments is different from the function definition, but the argument names match.</p>
    

    <p className='text-justify p-2 pt-4'> <b>3. Default Arguments:</b></p>
    <p className='text-justify p-2 pt-4'>- Default arguments have a predefined value in the function definition.</p>
    <p className='text-justify p-2 pt-4'> - If an argument is not provided when calling the function, the default value is used.</p>
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'>In this example, the `greet` function has a default argument `age=30`. If the `age` argument is not provided when calling the function, it automatically takes the default value of 30.</p>
    

    <p className='text-justify p-2 pt-4'> <b>4. Variable-Length Arguments:</b></p>
    <p className='text-justify p-2 pt-4'> - Variable-length arguments allow a function to accept any number of arguments.</p>
    <p className='text-justify p-2 pt-4'> - These arguments are represented using the `*` operator before the parameter name.</p>
    <p className='text-justify p-2 pt-4'>  - The function treats the variable-length arguments as a tuple.</p>
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'>In this example, the `add` function accepts any number of arguments using `*numbers`. The function iterates over the `numbers` tuple and calculates the sum of all the arguments provided.</p>
    
    <p className='text-justify p-2 pt-4'> <b>5. Keyword-Only Arguments:</b></p>
    <p className='text-justify p-2 pt-4'>- Keyword-only arguments can only be passed using the argument name and not by position.</p>
    <p className='text-justify p-2 pt-4'> - These arguments are specified after a `*` in the function definition.</p>
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'>In this example, the `greet` function has keyword-only arguments `name` and `age`. These arguments must be passed using the argument names, as indicated by the `*` before the parameter list.</p>
    <p className='text-justify p-2 pt-4'>These different types of arguments provide flexibility in defining and calling functions in Python. By understanding and utilizing them effectively, you can create functions that can handle a variety of inputs and scenarios, making your code more versatile and adaptable to different use cases.</p>


    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Return values & pass function:</h4>
    <p className='text-justify p-2 pt-4'> <b>1. Return Values:</b></p>
    <p className='text-justify p-2 pt-4'> - In Python, a function can return a value using the `return` statement.</p>
    <p className='text-justify p-2 pt-4'> - The returned value can be assigned to a variable or used directly in the calling code.</p>
    <p className='text-justify p-2 pt-4'> - Functions can have multiple return statements, but only one is executed during the function call.</p>
              <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'> In this example, the `add_numbers` function takes two arguments, `num1` and `num2`. It calculates their sum and returns it using the `return` statement. The returned value is assigned to the variable `result` and then printed.</p>
    

    <p className='text-justify p-2 pt-4'> <b>2. The `pass` Keyword:</b></p>
    <p className='text-justify p-2 pt-4'> - In Python, the `pass` keyword is used as a placeholder for a block of code with no action.</p>
    <p className='text-justify p-2 pt-4'> - It is often used when you need to define a function or a loop that does nothing but needs to have valid syntax.</p>
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>
    <p className='text-justify p-2 pt-4'>In this example, the `placeholder_function` is defined with the `pass` statement, indicating that it does nothing. Similarly, in the `process_data` function, the `pass` statement is used inside the loop to indicate that the processing of each item is not implemented yet.</p>
    <p className='text-justify p-2 pt-4'>Return values allow functions to produce results that can be used further in the program. By returning values, functions can perform computations, manipulate data, or generate outputs. The calling code can then utilize these returned values for additional operations.</p>
    <p className='text-justify p-2 pt-4'>On the other hand, the `pass` keyword provides a way to create function or loop placeholders without causing syntax errors. It can be used when you are working on a code structure and want to implement the logic later or when you need a code block to be syntactically correct but don't require any action to be taken.</p>
    <p className='text-justify p-2 pt-4'>These concepts are essential in building robust and flexible programs in Python. By understanding return values and using the `pass` keyword effectively, you can design functions that produce meaningful results and create placeholders for future implementations.</p>




      
            </article>
        </section>
    </div>
  )
}

export default PythonFunctions