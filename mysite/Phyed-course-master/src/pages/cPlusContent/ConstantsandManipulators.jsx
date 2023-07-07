import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboard, FaCheck, FaLightbulb } from 'react-icons/fa';


const ConstantsandManipulators = () => {

    const [ copy, setCopy ] = useState(false);

    const codeString = `
            #include <iostream>

            // Function to calculate the average age
            double calculateAverageAge(int ages[], int size) {
                int sum = 0;
            
                for (int i = 0; i < size; ++i) {
                    sum += ages[i];
                }
            
                return static_cast<double>(sum) / size;
            }
            
            int main() {
                int group1[] = {20, 25, 22, 23, 28};
                int group2[] = {18, 19, 20, 22, 21, 24, 23};
            
                // Calling the function for group1
                double avg1 = calculateAverageAge(group1, 5);
                std::cout << "Average age of group1: " << avg1 << std::endl;
            
        `;


  return (
    <div className='p-4 text-md'>
        <section>
          <h4 className='p-2 text-lg font-bold rounded-md bg-blue-400 w-full'>1. Constants:</h4>
          <div>
            <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>Constants in C++ are like fixed values that cannot be changed, just like a rule that never changes.</li>
              <li className='pt-4'>Imagine you have a rule that says you can only have one piece of candy per day. No matter how much you want more candy, you cannot change that rule.</li>
              <li className='pt-4'>We declare constants using the <span className='code-text italic text-sm'>const</span>  keyword and give them a name, just like giving a name to a rule.</li>
              <li className='pt-4'>After the installation is finished, you can find the VS Code icon on your computer's desktop or in the list of installed programs.</li>
              <li className='pt-4'>Double-click on the VS Code icon, and it will open up the program for you to start coding!</li>
            </ul>
          </div>
        </section>
        <section className='bg-gray-400 ml-4 h-auto mt-6 w-auto rounded-lg overflow-hidden text-base' >
                <article className='flex items-center text-white justify-between p-1 px-4 text-sm'>
                    <div>
                      <p>Example</p>
                    </div>
                    {
                      copy ? (
                        <div className='flex h-auto items-center cursor-pointer'>
                        <FaCheck className=''/>3
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
        <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>
            Remember, installing these programs may require the help of an adult or someone who knows how to install software on your computer. Always ask for assistance and permission when installing new programs.
          </p>
        </div>
        <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>
            Once you have VS Code and the g++ compiler installed, you can open VS Code, write your C++ code, and use the g++ compiler to compile and run your programs. Have fun coding!
          </p>
        </div>
    </div>
  )
}

export default ConstantsandManipulators