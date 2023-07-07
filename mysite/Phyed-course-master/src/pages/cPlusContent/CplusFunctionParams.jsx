import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';
import { FaLightbulb } from 'react-icons/fa';


const CplusFunctionParams = () => {

  const codeString = `
    // Function declaration with parameters
    void makeSandwich(std::string breadType, std::string filling) {
        std::cout << "Making a " << breadType << " sandwich with " << filling << " filling." << std::endl;
    }
  `
  const codeString1 = ` 
    // Function call with arguments
    makeSandwich("whole wheat", "ham and cheese");
  `
  const codeString2 = ` 
    // Function declaration with default argument
    void makeSandwich(std::string breadType = "white bread", std::string filling = "peanut butter and jelly") {
        std::cout << "Making a " << breadType << " sandwich with " << filling << " filling." << std::endl;
    }
  `
  const codeString3 = ` 
    // Function calls
    makeSandwich();  // Output: Making a white bread sandwich with peanut butter and jelly filling.
    makeSandwich("rye bread", "turkey");  // Output: Making a rye bread sandwich with turkey filling.
  `

  return (
    // lecture 14
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Function Parameters and Arguments</h4>
          <ul className='list-disc px-5 md:px-10'>
              <li className='pt-4 font-semibold'>Passing parameters to a function</li>
              <li className='pt-4 font-semibold'>Function arguments</li>
              <li className='pt-4 font-semibold'>Default arguments</li> 
          </ul>
          <p className='pt-4'>Imagine we have a function called <span className='code-text italic text-sm'>makeSandwich</span> that can make different types of sandwiches.</p>
        </article>
          <div>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>1. Function Parameters: </h4>
            <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>Parameters are like placeholders that the function expects to receive when it is called. They specify the type and name of the values we need to provide to the function.</li>
                <CodeHighlighter>
                  {codeString}
                </CodeHighlighter>
                <ul className='list-disc px-2 md:px-8'>
                  <li className='pt-4 px-5'>In this example, <span className='code-text italic text-sm'>breadType</span>  and <span className='code-text italic text-sm'>filling</span>  are the parameters of the <span className='code-text italic text-sm'>makeSandwich</span> function. They represent the type of bread and the filling for the sandwich, respectively.</li>
                </ul>
            </ul>
          </div>
          <div>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>2. Function Arguments </h4>
            <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>Arguments are the actual values we provide when calling a function. They correspond to the parameters of the function and are used to fill in the placeholders.</li>
                <CodeHighlighter>
                  {codeString1}
                </CodeHighlighter>
                <ul className='list-disc px-2 md:px-8'>
                  <li className='pt-4 px-5'>In this example, we are calling the <span className='code-text italic text-sm'>makeSandwich</span> function and providing the arguments <span className='code-text italic text-sm'>"whole wheat"</span> for breadType and <span className='code-text italic text-sm'> "ham and cheese" for filling.</span>These values will be used inside the function to make the specific sandwich.</li>
                </ul>
            </ul>
          </div>
          <div>
            <h4 className='p-2 mt-4 text-md font-bold  w-fit'>3. Default Arguments </h4>
            <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>Default arguments are values assigned to parameters in the function declaration. If no argument is provided for a parameter, the default value is used instead.</li>
                <CodeHighlighter>
                  {codeString2}
                </CodeHighlighter>
                <ul className='list-disc px-2 md:px-8'>
                  <li className='pt-4 px-5'>In this example, the makeSandwich function has default arguments of "white bread" for breadType and "peanut butter and jelly" for filling. If no arguments are provided when calling the function, these default values will be used.</li>
                </ul>
                <CodeHighlighter>
                  {codeString3}
                </CodeHighlighter>
                <ul className='list-disc px-2 md:px-8'>
                  <li className='pt-4 px-5'>In the first function call, no arguments are provided, so the default values are used. In the second function call, we provide arguments <span className='code-text italic text-sm'>"rye bread"</span> and <span className='code-text italic text-sm'>"turkey"</span>, which replace the default values.</li>
                </ul>
            </ul>
          </div>
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'>
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                    Understanding function parameters, arguments, and default arguments is like giving specific instructions to a sandwich-making machine. Parameters are the placeholders that tell the machine what types of bread and filling to expect, and arguments are the actual bread and filling we provide when using the machine. Default arguments are like pre-set choices for the bread and filling in case we don't provide any specific instructions. This way, we can customize the sandwiches we make without always having to specify every detail.
                  </p>
          </div>
      </section>
    </div>
  )
}

export default CplusFunctionParams