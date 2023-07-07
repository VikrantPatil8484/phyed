import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusFunction = () => {

  const codeString = `
    // Function declaration
    void sayHello(); 
  `;
  const codeString1 = `
    // Function definition
    void sayHello() {
        std::cout << "Hello there!" << std::endl;
    }
  `;
  const codeString2 = `
    // Function call
    sayHello() 
  `;
  const codeString3 = `
    // Function to add two numbers
    int addNumbers(int a, int b) {
        int sum = a + b;
        return sum;
    }
    
    int main() {
        // Function call
        int result = addNumbers(3, 5);  // Calling the function to add 3 and 5
        std::cout << "The result is: " << result << std::endl;
        return 0;
    } 
  `;

  return (
    // lecture 13
    <div>
      <section className='p-4 md:text-base text-justify text-sm '>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Function Basic </h4>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>Function Declaration: </h4>
            <p className='text-justify pt-4 px-2'>A function declaration is like describing what a machine does before using it. It tells the computer about the function's name and the type of inputs and outputs it expects.</p>
            <CodeHighlighter>
              {codeString}
            </CodeHighlighter>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>Function Definition: </h4>
            <p className='text-justify pt-4 px-2'>A function definition is like providing detailed instructions for a machine's operation. It specifies what the function does and how it does it.</p>
            <CodeHighlighter>
              {codeString1}
            </CodeHighlighter>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>Function Call:</h4>
            <p className='text-justify pt-4 px-2'>A function call is like pressing a button to activate a machine and make it perform its task. It executes the instructions defined in the function's body.</p>
            <CodeHighlighter>
              {codeString2}
            </CodeHighlighter>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>Putting It All Together:</h4>
            <p className='text-justify pt-4 px-2'>Let's bring everything together with a complete example. Imagine we have a machine that can add two numbers.</p>
            <CodeHighlighter>
              {codeString3}
            </CodeHighlighter>
            <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>In this example, we have a function named <span className='code-text italic text-sm'>addNumbers</span> that takes two parameters a and b. It adds these numbers and returns the sum.</li>
                <li className='pt-4'>In the <span className='code-text italic text-sm'>main() </span> function, we call <span className='code-text italic text-sm'>addNumbers</span> with the values 3 and 5. The returned <span className='code-text italic text-sm'>result</span> is stored in the result variable.</li>
                <li className='pt-4'>The loop stops executing as soon as we win the game at level 5, and the output will be:</li>
                <li className='pt-4'>Finally, we print the result using <span className='code-text italic text-sm'>std::cout</span>.</li>
            </ul>
          </article>
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'>
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                    Understanding the basics of functions is like knowing how to use different machines. We declare a function to describe its purpose, define it to specify its instructions, and call it to activate its operation. By using functions, we can break down c
                  </p>
          </div>
          
      </section>
    </div>
  )
}

export default CplusFunction