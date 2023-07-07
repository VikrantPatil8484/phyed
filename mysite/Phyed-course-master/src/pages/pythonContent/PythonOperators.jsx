import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 9

const PythonOperators = () => {
  const codeString = `
   a = 5
   b = 3
   result = a + b
   print(result)  # Output: 8
   `

   const codeString1 = `
   a = 5
   b = 3
   result = a - b
   print(result)  # Output: 2
   `

   const codeString2 = `
   a = 5
   b = 3
   result = a * b
   print(result)  # Output: 15
   `
   const codeString3 = `
   a = 10
   b = 3
   result = a / b
   print(result)  # Output: 3.3333333333333335
   `
   const  codeString4 = `
   a = 10
   b = 3
   result = a // b
   print(result)  # Output: 3
   `
   const codeString5 =`
   a = 10
   b = 3
   result = a % b
   print(result)  # Output: 1
   `

   const codeString6 =`
   a = 2
   b = 3
   result = a ** b
   print(result)  # Output: 8
   `
   const codeString7 = `
   a = 5  # Assigns the value 5 to variable 'a'
   b = 10  # Assigns the value 10 to variable 'b'
   `
   const codeString8 = `
   a = 5
   a += 3  # Equivalent to a = a + 3
   print(a)  # Output: 8
   `

   const codeString9 = ` 
   a = 5
   b = 10

   print(a == b)  # Output: False
   print(a != b)  # Output: True
   print(a > b)  # Output: False
   print(a < b)  # Output: True
   print(a >= b)  # Output: False
   print(a <= b)  # Output: True
   `

   const codeString10 = `
   a = True
   b = False
   print(a and b)  # Output: False
   `

   const codeString11 = `
   a = True
   b = False
   print(a or b)  # Output: True
   `

   const codeString12 = `
   a = True
   print(not a)  # Output: False
    `

   const codeString13 = `
   python   name = "John"
   print('o' in name)  # Output: True
   `

   const codeString14 = `
   name = "John"
   print('x' not in name)  # Output: True
   `

   const codeString15 = `
   a = [1, 2, 3]
   b = a
   print(a is b)  # Output: True
   `

   const codeString16 = `
   a = [1, 2, 3]
   b = [1, 2, 3]
   print(a is not b)  # Output: True
   `



   
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Operators:</h4>
      <p className='text-justify p-2 pt-4'>In Python, operators are symbols or special characters that perform operations on one or more operands. They are used to manipulate values and variables. Here's a comprehensive explanation of operators in Python with examples:</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Arithmetic Operators:</h4>
      <p className='text-justify p-2 pt-4'> Arithmetic operators are used to perform mathematical operations.</p>
      <p className='text-justify p-2 pt-4'> <b>a&#41;Addition (`+`): Adds two operands</b></p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
    
     <p className='text-justify p-2 pt-4'> <b>b&#41;Subtraction (`-`): Subtracts the second operand from the first.</b></p>
               <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter> 

    <p className='text-justify p-2 pt-4'> <b>c&#41;Multiplication (`*`): Multiplies two operands.</b></p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>                    

    <p className='text-justify p-2 pt-4'> <b>d&#41;Division (`/`): Divides the first operand by the second. Returns a float result.</b></p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>

  <p className='text-justify p-2 pt-4'> <b>e&#41;Floor Division (`//`): Divides the first operand by the second and returns the integer result (floor value).</b></p>
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>

  <p className='text-justify p-2 pt-4'> <b>f&#41;Modulus (`%`): Returns the remainder when the first operand is divided by the second.</b></p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>

  <p className='text-justify p-2 pt-4'> <b>g&#41;Exponentiation (`**`): Raises the first operand to the power of the second</b></p>
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>               

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Assignment Operators:</h4>
      <p className='text-justify p-2 pt-4'>Assignment operators are used to assign values to variables.</p>
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>

     <p className='text-justify p-2 pt-4'> Python also provides compound assignment operators such as `+=`, `-=`, `*=`, `/=`, `//=`, `%=` that combine an arithmetic operation with assignment.</p>
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>          

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3. Comparison Operators:</h4>
      <p className='text-justify p-2 pt-4'><b>Comparison operators are used to compare values and return boolean results.</b></p>
              <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>4. Logical Operators:</h4>
      <p className='text-justify p-2 pt-4'><b>Logical operators are used to combine boolean values and perform logical operations.</b></p>
      <p className='text-justify p-2 pt-4'> <b>a&#41;Logical AND (`and`): Returns True if both operands are True.</b></p>    
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>b&#41;Logical OR (`or`): Returns True if at least one of the operands is True.</b></p>    
              <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>c&#41;Logical NOT (`not`): Returns the opposite boolean value of the operand.</b></p>    
              <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>5. Membership Operators:</h4>
      <p className='text-justify p-2 pt-4'><b>Membership operators are used to test if a value is a member of a sequence (such as a string, list, or tuple).</b></p>
      <p className='text-justify p-2 pt-4'> <b>a&#41;`in` operator: Returns True if the value is found in the sequence.</b></p>    
              <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>
 
       <p className='text-justify p-2 pt-4'> <b>b&#41;`not in` operator: Returns True if the value is not found in the sequence.</b></p>    
              <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>6. Identity Operators:</h4>
      <p className='text-justify p-2 pt-4'><b>Identity operators are used to compare the memory addresses of two objects.</b></p>
      <p className='text-justify p-2 pt-4'> <b>a&#41;`is` operator: Returns True if both operands refer to the same object.</b></p>    
              <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'><b>b&#41;`is not` operator: Returns True if both operands refer to different objects.</b></p>    
              <CodeHighlighter>
                {codeString16} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>These are the main categories of operators in Python, each serving a different purpose. Understanding and effectively using operators is crucial for performing various computations and manipulations in Python programming</p>



            </article>
        </section>
    </div>
  )
}

export default PythonOperators