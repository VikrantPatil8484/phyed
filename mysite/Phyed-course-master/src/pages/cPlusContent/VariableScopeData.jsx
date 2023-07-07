import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const VariableScopeData = () => {
  return (
    <div>
      <section className='p-4 text-md text-justify'>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Variable Scope</h4>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Variable scope refers to where a variable is accessible or visible in a program. It's like knowing where you can find and use a toy in your room.</li>
              <li className='pt-4'>Imagine you have two toy boxes: one in your bedroom and one in the living room. The toys in each box can only be used in their respective rooms.</li>
              <li className='pt-4'>In programming, variables have scopes that determine where they can be used in the program.</li>
              <li className='pt-4'>There are two main types of variable scope:</li>
              <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Local scope:</span> Variables with local scope are like toys in your bedroom. They can only be used within a specific part of the program, such as inside a function or a code block (within curly braces { }).</li>
                <li className='pt-4'><span className='font-semibold'>Global scope:</span>Variables with global scope are like toys in the living room. They can be accessed and used from anywhere in the program, including inside functions or code blocks.</li>
              </ul>
              <li className='pt-4'>Variables help us store and manipulate data, making our programs more dynamic and flexible.</li>
            </ul>
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Data Types</h4>
           <div className='pt-6 px-8'>
              <ul className='list-disc px-6'>
                <li className='pt-4'>Data types in C++ define the type of data that a variable can hold. It's like categorising toys based on what they are, such as cars, dolls, or blocks.</li>
                <li className='pt-4'>Some common data types in C++ are:</li>
                  <ul className='list-disc px-10'>
                    <li className='pt-4'><span className='font-semibold'>Integer:</span> This data type is used for whole numbers. For example, you can use the <span className='code-text italic text-sm'>int</span>  data type to store someone's age.</li>
                    <li className='pt-4'><span className='font-semibold'>Floating-point:</span>This data type is used for numbers with decimal points. For example, you can use the <span className='code-text italic text-sm'>float</span>  or <span className='code-text italic text-sm'>double</span>  data type to store someone's height.</li>
                    <li className='pt-4'><span className='font-semibold'>Character:</span>This data type is used for individual characters, like letters or symbols. For example, you can use the <span className='code-text italic text-sm'>char</span> data type to store a single letter like 'A'.</li>
                    <li className='pt-4'><span className='font-semibold'>Boolean:</span>This data type is used to represent true or false values. For example, you can use the <span className='code-text italic text-sm'>bool</span> data type to store whether it's raining <span className='code-text italic text-sm'>(true)</span>   or not  <span className='code-text italic text-sm'>(false)</span>.</li>
                    <li className='pt-4'><span className='font-semibold'>String:</span>This data type is used for a sequence of characters, like words or sentences. For example, you can use the <span className='code-text italic text-sm'>string</span> data type to store someone's name.</li>
                  </ul>
                <li className='pt-4'>Each data type has a specific way of storing and representing data in the computer's memory. By using different data types, we can store different kinds of information in our programs.</li>
              </ul>

              <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                    Remember, variable scope determines where a variable can be accessed in a program, and data types define the type of data a variable can hold. Understanding variable scope and data types helps us manage and use variables effectively in our programs, just like knowing where to find and use toys in different parts of our house.
                  </p>
              </div>
            </div>
          </article>
          

        </section>
    </div>
  )
}

export default VariableScopeData