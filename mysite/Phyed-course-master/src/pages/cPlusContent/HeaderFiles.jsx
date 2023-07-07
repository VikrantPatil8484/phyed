import React from 'react';
import { FaLightbulb } from 'react-icons/fa';


const HeaderFiles = () => {
  return (
    <div>
      <section>
          <h4 className='p-2 text-lg font-bold rounded-md bg-blue-400 w-full'>1. Header Files:</h4>
          <div>
            <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>Header files in C++ are like special books that contain extra information or tools that we can use in our programs.</li>
              <li className='pt-4'>Imagine you have a bookshelf with different books, and each book has a different topic or set of tools.</li>
              <li className='pt-4'>In C++, we use header files to include additional functionality or tools in our programs.</li>
              <li className='pt-4'>For example, if we want to use some special commands to work with numbers, we can include the <span className='code-text italic text-sm'>&lt;cmath&gt;</span> header file. It's like taking out a book from the shelf that has tools for doing math.</li>
              <li className='pt-4'>By including the appropriate header file at the beginning of our program, we can access and use the extra functionality provided by that file.</li>
            </ul>
          </div>
        </section>
        <section>
          <h4 className='p-2 text-lg font-bold mt-6 rounded-md bg-blue-400 w-full'>2. Operators</h4>
          <div>
            <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>Operators in C++ are like special symbols or signs that help us perform different actions or operations.</li>
              <li className='pt-4'>Imagine you have a set of symbols that represent different actions, like adding, subtracting, or comparing things.</li>
              <li className='pt-4'>In C++, we use operators to perform actions on data, such as performing calculations or comparing values.</li>
              <li className='pt-4'>Here are some common operators in C++:</li>
                <ul className='list-disc px-8'>
                    <li className='pt-4'><span className='font-semibold'>Arithmetic operators:</span> These operators are used for basic math calculations, such as addition (+), subtraction (-), multiplication (*), division (/), and more.</li>
                    <li className='pt-4'><span className='font-semibold'>Comparison operators:</span>These operators are used to compare values and determine if they are equal (==), not equal (!=), greater than (&gt;), less than (&lt;), etc.</li>
                    <li className='pt-4'><span className='font-semibold'>Assignment operator:</span>The assignment operator (=) is used to assign a value to a variable.</li>
                    <li className='pt-4'><span className='font-semibold'>Logical operators:</span>These operators are used to perform logical operations, such as combining conditions with AND (&&) and OR (||), or negating a condition with NOT (!).</li>
                    <li className='pt-4'><span className='font-semibold'>String:</span>This data type is used for a sequence of characters, like words or sentences. For example, you can use the <span className='code-text italic text-sm'>string</span> data type to store someone's name.</li>
                </ul>
              <li>By using operators, we can perform different actions on data, make decisions in our programs, and perform calculations, just like using different symbols to do different tasks.</li>

            </ul>
          </div>
        </section>
        <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>
            Remember, header files provide additional functionality or tools for our programs, like books with specialised information, and operators are like special symbols that help us perform actions or operations on data, just like using different symbols to perform different tasks.
          </p>
        </div>
    </div>
  )
}

export default HeaderFiles