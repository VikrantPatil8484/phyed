import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 24

const PythonMath = () => {
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Arithmetic Operations:</h4>
      <p className='text-justify p-2 pt-4'> 1. Arithmetic operations are basic mathematical operations performed on numbers. The four main arithmetic operations are addition, subtraction, multiplication, and division.</p>
      <p className='text-justify p-2 pt-4'> Example: Imagine you went to a grocery store and bought three apples. Later, you decided to buy two more apples. The total number of apples you have now is the result of the addition operation: 3 + 2 = 5.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Variables:</h4>
      <p className='text-justify p-2 pt-4'> 2. Variables are symbols used to represent values in programming. In Python, you can assign values to variables using the assignment operator (=). These values can be numbers, strings, or other data types.</p>
      <p className='text-justify p-2 pt-4'> Example: Let's say you want to calculate the area of a rectangle. You can define variables for the length and width of the rectangle, like length = 5 and width = 3.</p>
      <p className='text-justify p-2 pt-4'> Then, you can calculate the area by multiplying the length and width: area = length * width.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Order of Operations (PEMDAS/BODMAS):</h4>
      <p className='text-justify p-2 pt-4'>3. Order of operations defines the sequence in which mathematical operations should be performed. The acronym PEMDAS (or BODMAS) helps remember the order: Parentheses (Brackets), Exponents (Orders/Rules), Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).</p>
      <p className='text-justify p-2 pt-4'> Example: Let's say you have an expression: 3 + 4 * 2. According to the order of operations, you first perform the multiplication (4 * 2), which gives you 8. Then, you add 3 to 8, resulting in 11.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Functions from the math module:</h4>
      <p className='text-justify p-2 pt-4'>4. Python provides the math module, which offers various mathematical functions. You can import and use these functions to perform advanced mathematical calculations.</p>
      <p className='text-justify p-2 pt-4'> Example: Suppose you want to calculate the square root of a number. You can use the sqrt() function from the math module. For instance, if you want to find the square root of 16, you can write: math.sqrt(16) = 4.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Random Numbers:</h4>
      <p className='text-justify p-2 pt-4'>5. Python has a random module that allows you to generate random numbers. This module includes functions to generate random integers, floats, and other random values.</p>
      <p className='text-justify p-2 pt-4'> Example: Let's say you want to simulate rolling a dice. You can use the randint() function from the random module to generate a random number between 1 and 6. For instance: random.randint(1, 6) = 3.</p>

            <p className='text-justify p-2 pt-4'> These examples illustrate how math concepts and operations can be applied in everyday situations. Understanding math is essential for various fields, including computer programming, finance, engineering, and more.</p>
       
      
            </article>
        </section>
    </div>
  )
}

export default PythonMath