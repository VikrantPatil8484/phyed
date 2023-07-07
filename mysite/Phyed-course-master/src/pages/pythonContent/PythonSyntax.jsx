import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 3

const PythonSyntax = () => {
    const codeString = `
        # Variable assignment
        name = "John"
        age = 25
        height = 1.75
        is_student = True
        `

    const codeString1 = `
        name = "John"
        print("Hello, " + name + "!")  # Output: Hello, John!
          `
    const codeString2 = `
        # Arithmetic Operators
        x = 10 + 5  # Addition
        y = 10 - 5  # Subtraction
        z = 10 * 5  # Multiplication
        w = 10 / 5  # Division
        `

    const codeString3 = `
        # If-else statement
        age = 18
        
        if age >= 18:
            print("You are an adult.")
        else:
            print("You are not an adult.")
        
        # For loop
        fruits = ["apple", "banana", "cherry"]

        for fruit in fruits:
            print(fruit)

        # While loop
        count = 0

        while count < 5:
            print("Count: ", count)
           count += 1
        `
    const codeString4 = `
          # Function definition
          def greet(name):
              print("Hello, " + name + "!")
          
          # Function call
          greet("Alice")
          `
    const codeString5 = `
          # List creation
          numbers = [1, 2, 3, 4, 5]
          
          # Accessing list elements
          print(numbers[0])  # Output: 1
          
          # Modifying list elements
          numbers[2] = 6
          
          # List operations
          numbers.append(7)  # Add an element to the end of the list
          numbers.remove(4)  # Remove a specific element from the list
          `          

  return (
    <div><section className='p-4 md:text-base text-justify text-sm'>
    <article className='mt-6'>
    <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1.Variables and Data Types:</h4>
    <p className='text-justify p-2 pt-4'> Variables are used to store values that can be accessed and manipulated later.</p>
    <p className='text-justify p-2 pt-4'> Python is dynamically typed, so you don't need to specify the variable type explicitly.</p>
            <CodeHighlighter>
              {codeString} 
            </CodeHighlighter>
    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2.Print Statement:</h4>
    <p className='text-justify p-2 pt-4'> The print() function is used to display output on the screen.</p>
            <CodeHighlighter>
              {codeString1} 
            </CodeHighlighter>    

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3.Basic Operators:</h4>
    <p className='text-justify p-2 pt-4'> Python supports various operators, including arithmetic, assignment, comparison, logical, and more.</p>
            <CodeHighlighter>
              {codeString2} 
            </CodeHighlighter>                

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>4.Control Flow Statements:</h4>
    <p className='text-justify p-2 pt-4'> Control flow statements are used to control the flow of execution based on conditions.</p>
    <p className='text-justify p-2 pt-4'> The most common control flow statements are if-else and loops (for and while).</p>
            <CodeHighlighter>
              {codeString3} 
            </CodeHighlighter>  

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>5.Functions:</h4>
    <p className='text-justify p-2 pt-4'> Functions are reusable blocks of code that perform specific tasks.</p>
    <p className='text-justify p-2 pt-4'> They can take input parameters and return values.</p>
            <CodeHighlighter>
              {codeString4} 
            </CodeHighlighter>

     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>6.Lists:</h4>
    <p className='text-justify p-2 pt-4'> Lists are used to store multiple items in a single variable.</p>
    <p className='text-justify p-2 pt-4'> They are mutable and can contain elements of different data types.</p>
            <CodeHighlighter>
              {codeString5} 
            </CodeHighlighter>   
  
   <p className='text-justify p-2 pt-4'> These examples cover the basic syntax of Python. As you continue learning, you'll encounter more advanced concepts and syntax elements, such as dictionaries, classes, exceptions, and file handling. Python's official documentation is an excellent resource to explore these topics in depth.</p>
                
        
    </article>
  </section>
  </div>
  )
}

export default PythonSyntax