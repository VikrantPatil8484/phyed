import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 28


const PythonUserInput = () => {
  const codeString = `
  
    name = input("Please enter your name: ")
    print("Hello, " + name + "! Nice to meet you.")
    `

  const codeString1 = `
  
    age = input("Please enter your age: ")
    age = int(age)  # Convert the input to an integer
    years_until_hundred = 100 - age
    print("You have approximately", years_until_hundred, "years until you turn 100.")

    `

  const codeString2 = `
  
    print("Welcome to the survey!")
    name = input("Please enter your name: ")
    age = input("Please enter your age: ")
    occupation = input("Please enter your occupation: ")

    print("Thank you for participating in the survey, " + name + "!")
    print("Here is a summary of your responses:")
    print("Name: " + name)
    print("Age: " + age)
    print("Occupation: " + occupation)
    `


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-m'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'>In Python, user input refers to the ability to accept data or information from the user during the execution of a program. This allows users to interact with the program and provide input based on their requirements or preferences. Python provides a built-in function called <span className='code-text  text-m'>input() </span> that enables you to prompt the user for input and store their response.</p>
      <p className='text-justify p-2 pt-4'>The <span className='code-text  text-m'>input() </span> function takes an optional string argument, which is the prompt displayed to the user. It waits for the user to enter input, and once the user presses the Enter key, the input is returned as a string. Here's an example of how to use the <span className='code-text  text-m'>input() </span> function:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In the example above, the <span className='code-text  text-m'>input() </span> function prompts the user with the message "Please enter your name: ". The user can then enter their name and press Enter. The input is stored in the variable <span className='code-text  text-m'>name </span>, and the program proceeds to print a greeting message using the entered name.</p>
      <p className='text-justify p-2 pt-4'>It's important to note that the <span className='code-text  text-m'>input() </span> function always returns the user's input as a string, regardless of the type of input entered. If you need to convert the input to a different data type, such as an integer or float, you can use type conversion functions like <span className='code-text  text-m'>int() </span> or <span className='code-text  text-m'>float() </span>. Here's an example:</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> In this example, the user is asked to enter their age. The input is initially stored as a string. To perform calculations, the input is converted to an integer using the int() function. The program then calculates the approximate number of years until the user turns 100 and prints the result.</p>  
      <p className='text-justify p-2 pt-4'> Now, let's consider a relatable real-life example to understand user input better.</p>      
      <p className='text-justify p-2 pt-4'> Imagine you are developing a simple survey program. The program prompts the user with a series of questions and collects their responses. Once all the questions are answered, the program generates a summary of the survey results.</p>      
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the program starts by welcoming the user to the survey. It then uses the <span className='code-text  text-m'>input() </span> function to collect the user's name, age, and occupation. Finally, it displays a summary of the responses provided by the user.</p>
      <p className='text-justify p-2 pt-4'>By incorporating user input in your Python programs, you can create interactive experiences that involve users in the decision-making process, just like conducting a survey to gather valuable information.</p>
             
         
      
            </article>
        </section>
    </div>
  )
}

export default PythonUserInput