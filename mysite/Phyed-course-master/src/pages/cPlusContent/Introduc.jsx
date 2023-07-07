import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboard, FaCheck } from 'react-icons/fa'


const Introduc = () => {

  const [ copy, setCopy ] = useState(false);

  const codeString = `
        #include <iostream>

        int main() {
            std::cout << "Hello!" << std::endl;
            return 0;
        } 
      `;

  return (
    <div className='p-6 text-sm'>
      <h4 className='pt-4 text-2xl font-bold'>Introduction to C++</h4>
        <p className='text-justify pt-4'>C++ is a programming language that allows us to give instructions to a computer and make it do things. It's like talking to the computer in its own language. 
          Just like we use words and sentences to communicate with each other, we use code to communicate with the computer.
          <br /> <br /> In C++, we write code using a combination of words, numbers, and symbols. We can tell the computer to do different tasks by writing different instructions or commands in our code.
          Let's imagine that you have a robot friend, and you want to teach it how to say "Hello!" to you. In C++, you can write a simple program to do that. Here's what the program might look like:
        </p>
        <p className='text-justify pt-6'>In C++, we write code using a combination of words, numbers, and symbols. 
          We can tell the computer to do different tasks by writing different instructions 
          or commands in our code.
        </p>
        <p className='text-justify pt-6'>Let's imagine that you have a robot friend, and you
          want to teach it how to say "Hello!" to you. In C++, you can write a simple program
          to do that. Here's what the program might look like:
        </p>
        <section className='bg-gray-400 h-auto mt-6 w-60 md:w-3/5 ml-0 md:ml-20 rounded-lg overflow-hidden text-base' >
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
        <section className='pt-6'>
          <h3>Let's break it down step by step:</h3>
          <div>
            <p className='pt-4'>1. <span className='text-green-500'>#include &lt;iostream&gt; </span>: This line tells the computer to include a
             special library called "iostream." This library helps us to do input and 
             output operations, like printing text on the screen.
            </p>
            <p className='pt-4'>2. <span className='text-green-500'>int main() {} </span>: This is the main part of our program. It's like the brain of the program. Whatever instructions we write inside these curly braces { }, the computer will follow them.
            </p>
            <p className='pt-4'>3. <span className='text-green-500'>std::cout &lt;&lt;std::endl; </span>: Here, <span className='text-green-500'>std::cout </span> is a way to tell the computer to display something on the screen. In this case, we want it to display the text "Hello!" The <span className='text-green-500'>&lt;&lt;</span>  symbols are used to connect the text with the <span className='text-green-500'>std::cout </span> command. The std::endl part is used to move to the next line after displaying "Hello!"
            </p>
            <p className='pt-4'>4. <span className='text-green-500'>return 0;</span>This line tells the computer that the program has finished running and it can stop. The number 0 here represents a successful program execution.
 
            </p>
          </div>
        </section>
        <div className='pt-6'>
          <h5 className='text-justify'>
            To make the computer understand and run our program, we need a special software
            called a compiler. The compiler takes our code and translates it into a language 
            that the computer can understand. Once we have the compiled program, we can run it,
            and the computer will display "Hello!" on the screen, just as we instructed.
            That's a simple introduction to C++! It's like giving instructions to a computer 
            using code. With more practice and learning, you can make the computer do even 
            more amazing things.
          </h5>
        </div>
    </div>
  )
}

export default Introduc