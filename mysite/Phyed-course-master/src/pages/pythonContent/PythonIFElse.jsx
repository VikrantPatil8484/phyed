import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
const PythonIFElse = () => {
  const codeString =`
  if condition:
  # code to execute if the condition is True
   else:
  # code to execute if the condition is False
 `

  const codeString1 =`
   age = int(input("Enter your age: "))

    if age >= 18:
        print("You are eligible to vote!")
    else:
        print("You are not eligible to vote yet.")
    `
  const codeString2 =`
  age = int(input("Enter your age: "))

  if age >= 18:
      print("You are eligible to vote!")
  elif age >= 13:
      print("You are a teenager.")
  else:
      print("You are not eligible to vote yet.")
  `


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python If ... Else:</h4>
      <p className='text-justify p-2 pt-4'>In Python, the if...else statement allows you to execute different blocks of code based on a condition. It enables your program to make decisions and take different paths of execution</p>
      <p className='text-justify p-2 pt-4'>The basic syntax of the if...else statement is as follows:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'><b>Here's how it works:</b></p>
       <p className='text-justify p-2 pt-4'>- The condition is evaluated, and if it is True, the code block indented under the if statement is executed.</p>
       <p className='text-justify p-2 pt-4'>- If the condition is False, the code block indented under the else statement is executed.</p>
       <p className='text-justify p-2 pt-4'>Let's consider a real-life example to illustrate the if...else statement. Suppose you want to implement a program that checks if a person is eligible to vote based on their age.</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the program prompts the user to enter their age. The `age` variable is then assigned the integer value obtained from the user input. The if...else statement checks if the `age` is greater than or equal to 18. If it is, the program prints "You are eligible to vote!". Otherwise, it prints "You are not eligible to vote yet."</p>
      <p className='text-justify p-2 pt-4'>Based on the user's input, the program will take different paths and display the appropriate message accordingly. This demonstrates how the if...else statement allows your program to make decisions and execute different blocks of code based on specific conditions.</p>
      <p className='text-justify p-2 pt-4'>You can also extend the if...else statement using elif (short for "else if") to check for multiple conditions. This allows you to handle various scenarios based on different conditions.</p>
      <p className='text-justify p-2 pt-4'>Here's an example that extends the previous voting eligibility program to include a check for teenagers:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the additional elif statement checks if the `age` is greater than or equal to 13, and if so, it prints "You are a teenager."</p>
      <p className='text-justify p-2 pt-4'>The if...else statement provides a powerful way to incorporate decision-making logic into your Python programs. By evaluating conditions, you can guide the flow of your code and perform different actions based on specific situations, just like making decisions in real-life scenarios.</p>




              </article>
        </section>
    </div>
  )
}

export default PythonIFElse