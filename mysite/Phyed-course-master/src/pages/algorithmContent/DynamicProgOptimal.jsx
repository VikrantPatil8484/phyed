import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
import { FaBold } from 'react-icons/fa';

const DynamicProgOptimal = () => {
  
  const codeString = `
  def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

  # Testing the Fibonacci function
  n = 6
  result = fibonacci(n)
  print(f"The {n}th Fibonacci number is: {result}")
  `
  
  const codeString1 = `
  The 6th Fibonacci number is: 8
  `
  const codeString2 = `
  def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

  # Testing the factorial function
  n = 5
  result = factorial(n)
  print(f"The factorial of {n} is: {result}")
  `
  const codeString3 = `
  The factorial of 5 is: 120
  `
  return (
    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Optimal Substructure</h4>
        <p className='text-justify pt-4'>
        Optimal substructure is a property that certain problems exhibit, where an optimal solution to the overall problem can be constructed from optimal solutions to its subproblems. In other words, the problem can be broken down into smaller subproblems, and the optimal solution can be derived by combining the optimal solutions of those subproblems.
        </p>
        <p className='text-justify pt-4'>
        To understand optimal substructure better, let's explore it with a couple of easy problems:
        </p>
        <p className='pt-4 font-bold'>1.Fibonacci Numbers:</p>
        <p className='text-justify pt-2'>
          The Fibonacci sequence is defined as follows: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1. The task is to find the nth Fibonacci number.
        </p>
        <p className='text-justify pt-4'>
           The nth Fibonacci number can be computed by summing the (n-1)th and (n-2)th Fibonacci numbers. So, the problem of finding the nth Fibonacci number can be divided into subproblems of finding the (n-1)th and (n-2)th Fibonacci numbers. The optimal solution to the overall problem can be obtained by combining the optimal solutions to these subproblems
        </p>
          
        <p className='text-justify pt-4'>
          Here's an example code in Python that calculates the nth Fibonacci number using optimal substructure:
        </p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>
          Output:
        </p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        <br></br>
        <p className='pt-4 font-bold'>
          2. Factorial:
        </p>
        <p className='text-justify pt-4'>
        The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial problem also exhibits optimal substructure, as the factorial of n can be computed by multiplying n with the factorial of (n-1).
        </p>
        <p className='text-justify pt-4'>
         Here's an example code in Python that calculates the factorial of a number using optimal substructure:
        </p>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
        <p className='text-justify pt-4'>
          Output:
        </p>
        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter>




      </article>
    </section>
    </div>

  )
}

export default DynamicProgOptimal
//DynamicProgOptimal