import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboard, FaCheck, FaLightbulb } from 'react-icons/fa';
import CodeHighlighter from '../../components/CodeHighlighter';

const BasicIO = () => {

  const [ copy, setCopy ] = useState(false);

  const codeString = `
      #include <iostream>

      int main() {
          std::cout << "Hello, friends!" << std::endl;
          return 0;
      }
    `;
  const codeString1 = `
      #include <iostream>

      int main() {
          int age;
          std::cout << "Enter your age: ";
          std::cin >> age;
          std::cout << "You entered: " << age << std::endl;
          return 0;
      }
    `;
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm '>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Output (Displaying Information)</h4>
            <p className='text-justify pt-4'>Output in C++ means showing or displaying information on the screen, just like when you want to share something with others.</p>
            <p className='text-justify pt-4'>In C++, we use a special command called <span className='code-text italic text-sm'>cout</span> to display information on the screen.</p>
            <p className='text-justify pt-4'>Imagine you have a magic board where you can write messages. The <span className='code-text italic text-sm'>cout</span> command is like your magic board, and you can use it to write messages that the computer will display.</p>
            <p className='text-justify pt-4'>Here's an example of using <span className='code-text italic text-sm'>cout</span>  to display a message on the screen:</p>
            <CodeHighlighter>
              {codeString}
            </CodeHighlighter>
            <ul className='list-disc px-16'>
              <li className='pt-4'>In this example, <span className='code-text italic text-sm'>std::cout</span> is the command to display something on the screen. We can put the message we want to display between double quotation marks (" ").</li>
              <li className='pt-4'>The <span className='code-text italic text-sm'>&lt;&lt;</span> symbol connects the message with the <span className='code-text italic text-sm'>cout</span> command. The <span className='code-text italic text-sm'>std::endl</span> part is used to move to the next line after displaying the message.</li>
            </ul>
            
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Input (Getting Information)</h4>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Input in C++ means getting information from the user, just like when you ask a friend for their name or age.</li>
              <li className='pt-4'>In C++, we use a special command called <span className='code-text italic text-sm'>cin</span> to get information from the user.</li>
              <li className='pt-4'>Imagine you have a magic ear that can listen to what others say. The <span className='code-text italic text-sm'>cin</span>  command is like your magic ear, and you can use it to listen to what the user types.</li>
              <li className='pt-4'>Here's an example of using <span className='code-text italic text-sm'>cin</span>  to get a number from the user:</li>
            </ul>
            <CodeHighlighter>
              {codeString1}
            </CodeHighlighter>
            <ul className='list-disc px-16'>
              <li className='pt-4'>In this example, we first declare a variable called <span className='code-text italic text-sm'>age</span> to store the user's input. The <span className='code-text italic text-sm'>int</span> in <span className='code-text italic text-sm'>int age;</span> means the variable will hold an integer (a whole number).</li>
              <li className='pt-4'>We use <span className='code-text italic text-sm'>std::cout</span> to display a message asking the user to enter their age.</li>
              <li className='pt-4'>Then, we use <span className='code-text italic text-sm'>std::cin</span> to get the user's input. The <span className='code-text italic text-sm'>&lt;&lt;</span> symbol is used to connect the <span className='code-text italic text-sm'>cin</span> command with the variable where we want to store the input (in this case, <span className='code-text italic text-sm'>age;</span>). </li>
              <li className='pt-4'>Finally, we use <span className='code-text italic text-sm'>std::cout</span>  again to display the user's input back on the screen.</li>
            </ul>
          </article>
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                    Remember, variables are like labelled boxes that store values, and comments are notes we write in our code to explain things. By using variables and comments, we can make our programs more organised and easier to understand.
                  </p>
          </div>
      </section>
    </div>
  )
}

export default BasicIO