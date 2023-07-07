import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 7

const PythonNumbers = () => {
   
  const codeString = `
   # Integer number
   age = 22  
   `
  const codeString1 =`
   # Floating-point number
   height = 6.85
   `
  
   const codeString2 =`
   # Complex number
   z = 9 + 7j
   `

   const codeString3 =`
    x = 10
    y = 5

    addition = x + y    # Output: 15
    subtraction = x - y # Output: 5
    multiplication = x * y    # Output: 50
    division = x / y    # Output: 2.0
    exponentiation = x ** y   # Output: 100000
    `

  const codeString4 = `
  x = 10
  y = 3.5
  z = 2 + 3j
  
  # Converting to integer
  int_x = int(x)      # Output: 10
  
  # Converting to float
  float_y = float(y) # Output: 3.5
  
  # Converting to complex
  complex_x = complex(x)   # Output: (10+0j)
  `  
  const codeString5 = `
  import math

  x = 4
  y = -2.5
  
  square_root = math.sqrt(x)    # Output: 2.0
  absolute_value = abs(y)       # Output: 2.5
    `

  return (
    <div>
        <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python numbers:</h4>
      <p className='text-justify p-2 pt-4'> In Python, numbers are a fundamental data type used to represent numeric values. There are three main types of numbers in Python:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.Integer (int):</b> Integers represent whole numbers without decimal points. They can be positive or negative.</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>2.Float (float):</b> Floats represent numbers with decimal points. They are used to represent real numbers.</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>3.Complex (complex):</b> Complex numbers are used to represent numbers with both real and imaginary parts. They are written in the form a + bj, where a is the real part and b is the imaginary part.</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>                  
      <p className='text-justify p-2 pt-4'> Python provides various operations and functions that can be performed on numbers. Here are some examples:</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1.Arithmetic Operations:</h4>
      <p className='text-justify p-2 pt-4'> <b>Addition (+), Subtraction (-), Multiplication (*), Division (/), and Exponentiation (**).</b></p>
             <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2.Type Conversion:</h4>
      <p className='text-justify p-2 pt-4'> You can convert a number from one type to another using the corresponding built-in functions: int(), float(), and complex().</p>
             <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>        
           
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3.Math Functions:</h4>
      <p className='text-justify p-2 pt-4'> Python provides several built-in math functions that can be used to perform common mathematical operations on numbers. These functions are available in the math module and need to be imported before use.</p>
             <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'> These examples demonstrate the basic usage of numbers in Python and some common operations and functions associated with them. Numbers are essential for performing mathematical calculations and are widely used in various applications and algorithms.</p>
             
            
           
            </article>
        </section>
    </div>
  )
}

export default PythonNumbers