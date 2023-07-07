  import React from 'react'
  import CodeHighlighter from '../../components/CodeHighlighter';

  //Lecture 2

  const PythonGettingStarted = () => {
    const codeString = `
    print("Hello, World!")
    `
    const codeString1 = `
    python hello.py
    `

      const codeString2 = `
      # Variable assignment
    message = "Hello, Python!"

    # Printing the variable
    print(message) 
    `
    const codeString3 = `
    # Conditional statement
    age = 20

    if age >= 18:
        print("You are an adult.")
    else:
        print("You are not an adult.")
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

  # Looping through the list
  for num in numbers:
      print(num)

  # Modifying the list
  numbers.append(6)
  `





    return (
      <div>
        <section className='p-4 md:text-base text-justify text-sm'>
          <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Install Python:</h4>
              <p className='text-justify p-2 pt-4'>- Visit the official Python website at python.org.</p>
              <p className='text-justify p-2 pt-4'>- Download the latest version of Python that matches your operating system.</p>
              <p className='text-justify p-2 pt-4'>- Run the installer and follow the instructions to install Python on your machine.</p>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Set up a development environment:</h4>
              <p className='text-justify p-2 pt-4'>You can use any text editor or Integrated Development Environment (IDE) to write Python code. Some popular options include Visual Studio Code, PyCharm, and Atom.Install the chosen editor or IDE and configure it for Python development.</p>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>3.Writing your first Python program:</h4>
        <p className='text-justify p-2 pt-4'>Open your text editor or IDE and create a new file with a .py extension (e.g., "hello.py"). In the file, type the following code:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
            <p className='text-justify p-2 pt-4'>Save the file.</p>   
              <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>4.Running your Python program:</h4>
              <p className='text-justify p-2 pt-4'> Open a terminal or command prompt.</p> 
              <p className='text-justify p-2 pt-4'> Navigate to the directory where you saved your Python file.</p>   
              <p className='text-justify p-2 pt-4'> Type the following command to run the program:</p>  
                <CodeHighlighter>
                  {codeString1} 
                </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>The output "Hello, World!" should appear on the screen.</p>  
                <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>5.Variables and data types:</h4>
                <p className='text-justify p-2 pt-4'>Python uses dynamic typing, which means you don't need to explicitly declare the variable type.</p>   
                <p className='text-justify p-2 pt-4'>Here's an example:</p>  
                  <CodeHighlighter>
                    {codeString2} 
                  </CodeHighlighter> 
              <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>6.Control flow and loops:</h4>
              <p className='text-justify p-2 pt-4'>Python provides various control flow statements like if-else, for, and while loops. Example of an if-else statement:</p>   
                  <CodeHighlighter>
                    {codeString3} 
                  </CodeHighlighter>

              <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>7.Functions:</h4>
              <p className='text-justify p-2 pt-4'>Functions allow you to group a set of statements into a reusable block of code.</p>   
              <p className='text-justify p-2 pt-4'>Example of defining and calling a function:</p>      
                  <CodeHighlighter>
                    {codeString4} 
                  </CodeHighlighter>

              <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>8.Lists and loops:</h4>
              <p className='text-justify p-2 pt-4'>Lists are used to store multiple items in a single variable.</p>
              <p className='text-justify p-2 pt-4'>Example of a loop and list manipulation:</p>      

                  <CodeHighlighter>
                    {codeString5} 
                  </CodeHighlighter>   
                  <p className='text-justify p-2 pt-4'>These are just the basics to get you started with Python. As you progress, you can explore more advanced topics such as file handling, object-oriented programming, and working with external libraries.</p>      
    
           </article>
        </section>
      </div>
    )
  }

  export default PythonGettingStarted