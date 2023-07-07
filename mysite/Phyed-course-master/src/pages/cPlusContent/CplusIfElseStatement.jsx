import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusIfElseStatement = () => {

  const codeString1 = `
    int cookies = 7;
    
    if (cookies > 5) {
        std::cout << "I can eat a cookie!" << std::endl;
    } else {
        std::cout << "I don't have enough cookies to eat." << std::endl;
    }
  `;
  const codeString2 = `
    int choice = 2;

    switch (choice) {
        case 1:
            std::cout << "You chose option 1." << std::endl;
            break;
        case 2:
            std::cout << "You chose option 2." << std::endl;
            break;
        default:
            std::cout << "Invalid choice." << std::endl;
            break;
    }  
  `;

  return (
      <div className='h-full text-sm md:text-lg'>
        <section className='p-2 text-md text-justify'>
            <article className='mt-6'>
              <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Control Structures</h4>
              <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>Control structures in C++ are like instructions or rules that tell the computer what to do in different situations, just like following specific steps when playing a game.</li>
                <li className='pt-4'>Imagine you are playing a game with different levels, and for each level, you have different instructions or rules to follow.</li>
                <li className='pt-4'>In C++, control structures help us control the flow of our program and make decisions based on certain conditions.</li>
                <li className='pt-4'>Control structures allow us to execute specific blocks of code or perform certain actions based on the conditions we specify.</li>
              </ul>            
            </article>
            <article className='mt-6'>
              <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. If-Else Statements</h4>
              <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>If-else statements in C++ are like decision-making instructions that tell the computer to do different things based on whether a condition is true or false, just like making choices based on certain conditions.</li>
                <li className='pt-4'>Imagine you have a box of cookies, and you want to eat a cookie only if you have more than five cookies left.</li>
                <li className='pt-4'>In C++, if-else statements help us make decisions by checking if a certain condition is true or false.</li>
                <li className='pt-4'>Here's an example of an if-else statement in C++:</li>
                  <CodeHighlighter>
                    {codeString1}
                  </CodeHighlighter>
                <li className='pt-4'>In this example, the if-else statement checks if the variable <span className='code-text italic text-sm'>cookies</span> is greater than 5. If it is, it displays the message "I can eat a cookie!" If it's not, it displays the message "I don't have enough cookies to eat."</li>
                <li className='pt-4'>The computer follows the instructions based on the condition being true or false, just like you make choices based on certain conditions.</li>
              </ul>            
            </article>
            <article className='mt-6'>
              <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Switch-Case Statements</h4>
              <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>Switch-case statements in C++ are like multiple-choice instructions that tell the computer to do different things based on the value of a variable, just like following different instructions based on different options.</li>
                <li className='pt-4'>Imagine you have a menu with different food options, and based on what you choose, you get a different meal.</li>
                <li className='pt-4'>In C++, switch-case statements help us make decisions based on the value of a variable.</li>
                <li className='pt-4'>Here's an example of a switch-case statement in C++</li>
                  <CodeHighlighter>
                    {codeString2}
                  </CodeHighlighter>
                <li className='pt-4'>In this example, the switch-case statement checks the value of the variable <span className='code-text italic text-sm'>choice</span>. Based on the value, it executes the corresponding case.</li>
                <li className='pt-4'>If <span className='code-text italic text-sm'>choice</span> is 1, it displays "You chose option 1." If <span className='code-text italic text-sm'>choice</span> is 2, it displays "You chose option 2." If the value doesn't match any of the cases, it executes the default case and displays "Invalid choice."</li>
                <li className='pt-4'>The computer follows the instructions based on the value of the variable, just like you make choices based on different options.</li>
              </ul>            
            </article>
            <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
                    <FaLightbulb className='text-6xl hidden md:block mr-4 bulb'/>
                    <p>
                      Remember, control structures help us make decisions and control the flow of our program, if-else statements allow us to make choices based on conditions, and switch-case statements help us make decisions based on the value of a variable. Understanding control structures, if-else statements, and switch-case statements helps us write programs that can make decisions and respond differently based on different conditions, just like following instructions, making choices, and selecting options in a game or in real life.  
                    </p>
            </div>
        </section>
    </div>

  )
}

export default CplusIfElseStatement