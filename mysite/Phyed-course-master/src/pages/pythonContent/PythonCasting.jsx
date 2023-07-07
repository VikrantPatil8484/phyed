import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 8 

const PythonCasting = () => {

  const codeString =`
  # Casting to integer
  x = 10.5
  y = "25"
  
  int_x = int(x)   # Output: 10
  int_y = int(y)   # Output: 25
  `
  const codeString1 =`
  # Casting to float
  x = 10
  y = "3.5"
  
  float_x = float(x)   # Output: 10.0
  float_y = float(y)   # Output: 3.5
  
  `

 const codeString2 = `
  # Casting to string
  x = 10
  y = 3.5

  str_x = str(x)   # Output: "10"
  str_y = str(y)   # Output: "3.5"
  ` 
 const codeString3 = `
  # Casting to boolean
  x = 10
  y = 0
  z = "Hello"
  bool_x = bool(x)   # Output: True
  bool_y = bool(y)   # Output: False
  bool_z = bool(z)   # Output: True

  `

  return (
    <div><section className='p-4 md:text-base text-justify text-sm'>
    <article className='mt-6'>

          <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Casting</h4>
          <p className='text-justify p-2 pt-4'> In Python, casting refers to the process of converting one data type into another. Python provides built-in functions that allow you to perform type casting. Here are the commonly used casting functions:</p>
          <p className='text-justify p-2 pt-4'> <b>1.int():</b> Converts a value into an integer.</p>
                <CodeHighlighter>
                  {codeString} 
                </CodeHighlighter>

          <p className='text-justify p-2 pt-4'> <b>2. float():</b> Converts a value into a floating-point number.</p>
              <CodeHighlighter>
                  {codeString1} 
                </CodeHighlighter>

          <p className='text-justify p-2 pt-4'> <b>3.str():</b> Converts a value into a string.</p>
              <CodeHighlighter>
                  {codeString2} 
                </CodeHighlighter>    

          <p className='text-justify p-2 pt-4'> <b>4.bool():</b> Converts a value into a boolean.</p>
              <CodeHighlighter>
                  {codeString3} 
                </CodeHighlighter>  
                
          <p className='text-justify p-2 pt-4'> It's important to note that not all types can be cast to each other. For example, casting a string that doesn't represent a valid number to an integer or float will result in an error. Similarly, casting a string to a boolean will always yield True unless the string is empty or "False".</p>
          <p className='text-justify p-2 pt-4'> Casting is useful when you need to change the data type of a variable to perform specific operations or to ensure compatibility with other parts of your code. However, be cautious when casting, as data loss or unexpected results can occur if the conversion is not appropriate for the given data.</p>



        </article>
    </section>
    </div>
  )
}

export default PythonCasting