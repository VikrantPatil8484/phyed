import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboard, FaCheck, FaLightbulb } from 'react-icons/fa'
import CodeHighlighter from '../../components/CodeHighlighter';

const VariablesComm = () => {
  const [ copy, setCopy ] = useState(false);

  const codeString = `
        // This is a comment explaining the purpose of the code.

      `;
  
      const codeString1 =  `
        /*
        This is a multi-line comment
        explaining a block of code.
        */
      `
  return (
    <div>
      <section className='p-4 text-md text-justify'>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Variables</h4>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Variables are like containers that hold information or values. We can give them names and use them to store different types of data, such as numbers, text, or true/false values.</li>
              <li className='pt-4'>Imagine you have a box with a label on it. The label is the variable name, and the box holds the value.</li>
              <li className='pt-4'>For example, let's say we have a variable called age to store a person's <span className='code-text italic text-sm'>age</span> . We can assign a value to it like this:  <span className='code-text italic text-sm'>int age = 10;</span> . Here, int tells the computer that age is an integer (a whole number), and <span className='code-text italic text-sm'>10</span> is the value we assign to it.</li>
              <li className='pt-4'>We can also change the value of a variable later in the program. For example: <span className='code-text italic text-sm'>age = 12</span> ; assigns a new value of <span className='code-text italic text-sm'>12</span> to the age variable.</li>
              <li className='pt-4'>Variables help us store and manipulate data, making our programs more dynamic and flexible.</li>
            </ul>
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Comments</h4>
           <div className='pt-6 px-8'>
              <p className=''>
                Comments are notes or explanations we write in our code that the computer ignores when running the program. They are meant for humans to understand the code better.
              </p>
              <p className='pt-4'>
                Comments are like sticky notes or captions that we can add to our program to remind ourselves or explain something to others.
              </p>
              <p className='pt-4'>
                In C++, we can write comments in two ways
              </p>
              <ul className='list-disc px-6'>
                <li className='pt-4'><span className='font-semibold'>Single-line comments:</span>  These are comments that only apply to a single line. We start them with <span className='code-text italic text-sm'>//</span>. Anything after <span className='code-text italic text-sm'>//</span>  on the same line is considered a comment and is not executed by the computer.</li>
                <CodeHighlighter>
                  {codeString}
                </CodeHighlighter>

                <li className='pt-4'><span className='font-semibold'>Multi-line comments:</span>  These comments can span multiple lines. We start them with <span className='code-text italic text-sm'>/*</span>  and end them with <span className='code-text italic text-sm'>*/</span> . Everything between <span className='code-text italic text-sm'>/* and */</span>  is considered a comment.</li>
                <section className='bg-gray-400 h-auto mt-6 w-52 md:w-3/5 ml-0 md:ml-20 rounded-lg overflow-hidden text-base' >
                <article className='flex items-center text-white justify-between p-1 px-4 text-sm'>
                    <div>
                      <p>Example</p>
                    </div>
                    {
                      copy ? (
                        <div className='flex h-auto items-center cursor-pointer'>
                        <FaCheck className=''/> 
                        <p className='pt-1 ml-0.5'>Copied</p> 
                      </div>
                        
                      ) : (
                        <div className='flex h-auto items-center cursor-pointer'
                        onClick={() => {
                          navigator.clipboard.writeText(codeString)
                          setCopy(true)
                          setTimeout(() => {
                            setCopy(false)
                          }, 3000);
                        }}

                        >
                          <FaClipboard className=''/> 
                          <p className='pt-1 ml-0.5'>Copy</p> 
                        </div>
                      )
                      
                    }
                  </article>
                  <SyntaxHighlighter language="jsx" style={atomOneDark}>
                    {codeString1}
                  </SyntaxHighlighter>
              </section>
                <li className='pt-4'>Comments are useful for documenting our code, making it easier to understand and maintain. They help us and others read and remember the purpose of different parts of our program.</li>
              </ul>

              <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                  Remember, variables are like labelled boxes that store values, and comments are notes we write in our code to explain things. By using variables and comments, we can make our programs more organised and easier to understand.
                  </p>
              </div>
            </div>
          </article>
          

        </section>
    </div>
  )
}

export default VariablesComm