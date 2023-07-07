import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboard, FaCheck } from 'react-icons/fa'

const BasicStruc = () => {

  const [ copy, setCopy ] = useState(false);
 
  const codeString = `
      std::cout << "Hello!" << std::endl;
      int age = 10;
      int result = age * 2;
      std::cout << "Twice your age is: " << result << std::endl;
  
      `;

  return (
    <div>
        <section className='p-4 text-md text-justify'>
          <div className='p-4 text-sm mt-6 card-bg text-white rounded-lg  flex'> 
            <p>
              A C++ program is like a set of instructions that we give to the computer to perform a specific task. It has a specific structure that we follow to write our instructions. Let's break it down step by step
            </p>
          </div>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Preprocessor directives</h4>
            <ul className='list-disc px-10'>
              <li className='pt-4'>These are special instructions that we include at the beginning of our program to tell the computer to do certain things before running our main code.</li>
              <li className='pt-4'>An example of a preprocessor directive is #include &lt;iostream&gt;. It tells the computer to include a library called "iostream" that helps us with input and output operations, like printing text on the screen.</li>
            </ul>
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. The main() function</h4>
            <ul className='list-disc px-6'>
              <li className='pt-4'>The main function is the most important part of our program. It acts as the starting point and the "brain" of our program.</li>
              <li className='pt-4'>We write our main code inside this function. The computer will execute the instructions written inside the main function.</li>
              <li className='pt-4'>The structure of the main function looks like this: int main() '{ }'. It starts with int which means the main function will return an integer value. The { } braces contain our instructions or code.</li>
            </ul>
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>3. Instructions or code </h4>
            <ul className='list-disc px-6'>
              <li className='pt-4'>Inside the main function, we write instructions or code to tell the computer what to do. These instructions are like steps that the computer follows in order.</li>
              <li className='pt-4'>For example, we can tell the computer to display some text on the screen or perform calculations.</li>
              <li className='pt-4'>We write our instructions line by line, and each line ends with a semicolon (;).</li>
              <li className='pt-4'>Here's an example of code inside the main function:</li>
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
                    {codeString}
                  </SyntaxHighlighter>
              </section>
              
              <li className='pt-4'>In this example, we are displaying the text "Hello!" on the screen, assigning a value of 10 to the variable age, performing a calculation to double the value of age, and then displaying the result on the screen.</li>
              
            </ul>
          </article>

        </section>
    </div>
  )
}

export default BasicStruc