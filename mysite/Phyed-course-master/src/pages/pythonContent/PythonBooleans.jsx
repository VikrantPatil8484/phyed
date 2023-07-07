import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 10

const PythonBooleans = () => {
  const codeString = `
  x = True
   y = False
   print(x)  # Output: True
   print(y)  # Output: False
   `

  const codeString1 = `
   a = True
   b = False
   print(a and b)  # Output: False

   `

   const codeString2 = `
   a = True
   b = False
   print(a or b)  # Output: True
   `

   const codeString3 = `
   a = True
   print(not a)  # Output: False
   `
   const codeString4 = `
   a = 5
   b = 10
   print(a == b)  # Output: False
   `
   const codeString5 = `
   a = 5
   b = 10
   print(a != b)  # Output: True
   `
   const codeString6 = `
   a = 5
   b = 10
   print(a > b)   # Output: False
   print(a < b)   # Output: True
   print(a >= b)  # Output: False
   print(a <= b)  # Output: True
   `
    const codeString7 = `
    a = True
    b = False
    c = True
 
    result = (a and b) or (b and c)
    print(result)  # Output: False
   `

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
       <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python Booleans:</h4>
      <p className='text-justify p-2 pt-4'> Booleans in Python are a data type that represents two possible values: True and False. They are primarily used for logical operations and control flow in programming. Here's a comprehensive explanation of booleans in Python with examples:</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 1. Boolean Values:</h4>
      <p className='text-justify p-2 pt-4'>  In Python, the boolean values are denoted as True and False. It's important to note that the first letter of each value is capitalized.</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 2. Boolean Operations:</h4>
    <p className='text-justify p-2 pt-4'>Python provides several logical operators for performing operations with boolean values.</p>
    <p className='text-justify p-2 pt-4'> <b>1. Logical AND (`and`):</b> Returns True if both operands are True; otherwise, it returns False</p>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

    <p className='text-justify p-2 pt-4'> <b>2. Logical OR (`or`):</b> Returns True if at least one of the operands is True; otherwise, it returns False.</p>
             <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>         

    <p className='text-justify p-2 pt-4'> <b>3. Logical NOT (`not`):</b> Returns the opposite boolean value of the operand.</p>
             <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>         

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 3. Comparison Operators:</h4>
    <p className='text-justify p-2 pt-4'> Comparison operators in Python compare two values and return a boolean value based on the comparison.</p>
    <p className='text-justify p-2 pt-4'> <b>1. Equality (`==`):</b> Returns True if the operands are equal; otherwise, it returns False.</p>
             <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>

     <p className='text-justify p-2 pt-4'> <b>2. Inequality (`!=`):</b> Returns True if the operands are not equal; otherwise, it returns False.</p>
             <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>   

    <p className='text-justify p-2 pt-4'> <b>3. Greater than (`&gt;`), Less than (`&lt;`), Greater than or equal to (`&gt;=`), Less than or equal to (`&lt;=`): </b> Returns True if the operands are not equal; otherwise, it returns False.</p>
             <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>   

    <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 4. Boolean Expressions:</h4>
    <p className='text-justify p-2 pt-4'>  Boolean expressions combine boolean values, variables, and operators to produce a boolean result.</p>
               <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>                            
      <p className='text-justify p-2 pt-4'>These are the fundamental aspects of booleans in Python. They play a vital role in conditional statements, loops, and other control flow structures in Python programming.</p>
           
            </article>
        </section>
     </div>
  )
}

export default PythonBooleans