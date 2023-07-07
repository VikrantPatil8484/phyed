import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 20

const PythonRecursion = () => {
  const codeString = `
  def factorial(n):
    # Base case: factorial of 0 or 1 is 1
    if n == 0 or n == 1:
        return 1
    else:
        # Recursive case: call the factorial function with a smaller problem
        return n * factorial(n - 1)

  result = factorial(5)
  print("The factorial of 5 is:", result)
  `

  const codeString1 = `
  The factorial of 5 is: 120
  `

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Recursion:</h4>
      <p className='text-justify p-2 pt-4'>Recursion is a programming technique where a function calls itself to solve a smaller version of the same problem. It allows you to break down complex problems into simpler, more manageable subproblems. Recursive functions have two main components: a base case and a recursive case.</p>
      <p className='text-justify p-2 pt-4'><b>Here's how recursion works:</b></p>
      <p className='text-justify p-2 pt-4'>1. The function checks if the current problem is a base case, which is the simplest form of the problem that can be directly solved without further recursion.</p>
      <p className='text-justify p-2 pt-4'>2. If the current problem is a base case, the function returns the solution.</p>
      <p className='text-justify p-2 pt-4'>3. If the current problem is not a base case, the function calls itself with a smaller version of the problem.</p>
      <p className='text-justify p-2 pt-4'>4. The recursive function continues to call itself until it reaches a base case, solving each smaller problem along the way.</p>
      <p className='text-justify p-2 pt-4'>5. The solutions to the smaller problems are combined to solve the original problem.</p>
      <p className='text-justify p-2 pt-4'>Let's consider a real-life example to illustrate recursion. One classic example is calculating the factorial of a number.</p>
               <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `factorial` function calculates the factorial of a number `n`. The base case is when `n` is 0 or 1, where the function directly returns 1. For any other value of `n`, the function calls itself with the smaller problem of `(n - 1)` and multiplies it by `n`. This recursive process continues until the base case is reached.</p>
      <p className='text-justify p-2 pt-4'>When you run this program, it will display the following output:</p>
               <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>           
            
      <p className='text-justify p-2 pt-4'>Recursion is useful when a problem can be broken down into smaller, identical subproblems. It allows for elegant and concise code by delegating repetitive tasks to recursive function calls. However, it's important to define base cases properly to avoid infinite recursion.</p>
      <p className='text-justify p-2 pt-4'>In real-life scenarios, recursion can be found in various applications, such as tree traversal, searching algorithms, mathematical calculations, and more. It provides an efficient and intuitive way to solve complex problems by reducing them into simpler subproblems and building up the solution step by step.</p>
         
            </article>
        </section>
    </div>
  )
}

export default PythonRecursion