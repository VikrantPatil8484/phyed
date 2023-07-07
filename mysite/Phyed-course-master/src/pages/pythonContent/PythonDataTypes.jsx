import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 6

const PythonDataTypes = () => {
  const codeString = `
    # Integer data type
    age = 25
      `
  const codeString1 = `
    # Float data type
     height = 1.75
        `
  const codeString2 = `
    # Complex data type
    z = 2 + j
        `
  const codeString3= `
    # String data type
    name = "John"
         `
  
   const codeString4= `
    # Boolean data type
    is_student = True   
          `       
  const codeString5=`
    # List data type
    numbers = [1, 2, 3, 4, 5]
            `
  const codeString6 =`
    # Tuple data type
    coordinates = (4, 5)
            `
  
   const codeString7 =`
    # Range data type
    my_range = range(1, 5)
          `   
          
  const codeString8 = `
    # Dictionary data type
    person = {"name": "John", "age": 25}
    `     
  const codeString9 = `
    python# Set data type
    fruits = {"apple", "banana", "cherry"}
    `  
    
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python Data Types:</h4>
      <p className='text-justify p-2 pt-4'> In Python, data types define the nature of data stored in variables. Python has several built-in data types that allow you to represent and manipulate different kinds of data. Here are some commonly used data types:</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 1.Numeric Data Types:</h4>
      <p className='text-justify p-2 pt-4'> <b>Integer (int):</b> Represents whole numbers without decimals.</p>
             <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>Float (float):</b> Represents numbers with decimal points.</p>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>Complex (complex):</b> Represents numbers with a real and imaginary part</p>
             <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 2.String Data Type:</h4>
      <p className='text-justify p-2 pt-4'> <b>String (str):</b> Represents a sequence of characters, enclosed in single quotes ('') or double quotes (" ").</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>  

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 3.Boolean Data Type:</h4>
      <p className='text-justify p-2 pt-4'> <b>Boolean (bool):</b> Represents either True or False.</p>
             <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter> 

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 4.Sequence Data Types:</h4>
      <p className='text-justify p-2 pt-4'> <b>List: </b> Represents an ordered collection of items. Items can be of different data types and are enclosed in square brackets ([]).</p>
             <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'> <b>Tuple:</b> Similar to lists but are immutable, meaning their elements cannot be modified after creation. Elements are enclosed in parentheses (()).</p>
             <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'> <b>Range:</b> Represents a sequence of numbers. It is commonly used in loops and is defined using the range() function.</p>
             <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter> 
             
             
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 5.Mapping Data Type:</h4>
      <p className='text-justify p-2 pt-4'> <b>Dictionary (dict):</b> Represents a collection of key-value pairs. Keys are unique and used to access corresponding values. Dictionaries are enclosed in curly braces ({}) and consist of key-value pairs separated by colons (:).</p>
             <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> 6. Set Data Type</h4>
      <p className='text-justify p-2 pt-4'> <b>Set:</b> Represents an unordered collection of unique elements. Sets are enclosed in curly braces ({}) or can be created using the set() function.</p>
             <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>          
      <p className='text-justify p-2 pt-4'> These are some of the commonly used data types in Python. Understanding and utilizing these data types will enable you to store and manipulate different kinds of data effectively in your programs.</p>

            </article>
        </section>
    </div>
  )
}

export default PythonDataTypes