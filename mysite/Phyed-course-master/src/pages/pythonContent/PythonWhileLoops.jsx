import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 17

const PythonWhileLoops = () => {

  const codeString = `

    while condition:
    # code to execute while the condition is True
  `

  const codeString1 = `
  count = 10

    while count > 0:
        print(count)
        count -= 1

    print("Blastoff!")
  `
  return (
    <div>
        <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python While Loops:</h4>
      <p className='text-justify p-2 pt-4'>In Python, a while loop allows you to repeatedly execute a block of code as long as a specified condition remains true. It's used when you want to repeat a set of instructions until a certain condition is no longer met.</p>
      <p className='text-justify p-2 pt-4'>The basic syntax of a while loop is as follows:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
      
       <p className='text-justify p-2 pt-4'><b>Here's how it works:</b></p>
       <p className='text-justify p-2 pt-4'>- The condition is evaluated before each iteration of the loop. If the condition is true, the code block indented under the while statement is executed.</p>
       <p className='text-justify p-2 pt-4'>- After executing the code block, the condition is checked again. If it is still true, the loop continues to iterate, executing the code block repeatedly.</p>
       <p className='text-justify p-2 pt-4'>- The loop continues until the condition becomes false. At that point, the program moves on to the next section of code after the while loop.</p>
       <p className='text-justify p-2 pt-4'>Let's consider a real-life example to illustrate the while loop. Suppose you want to implement a program that counts down from a given number to zero.</p>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

              <p className='text-justify p-2 pt-4'>In this example, the `count` variable is initialized to 10. The while loop is set to execute as long as the `count` is greater than zero. Within the loop, the current value of `count` is printed, and then the `count` is decremented by 1. This process continues until the `count` reaches zero. After the loop, the program prints "Blastoff!"</p>
              <p className='text-justify p-2 pt-4'>When you run this program, it will display the numbers from 10 to 1 and then print "Blastoff!".</p>
              <p className='text-justify p-2 pt-4'>The while loop allows you to repeat a block of code until a specific condition is no longer true. It is useful when you want to perform repetitive tasks or iterate over a sequence of items until a certain condition is met. Just like in real life, while loops enable you to keep performing an action until a desired outcome is achieved.</p>

            </article>
        </section>
    </div>
  )
}

export default PythonWhileLoops