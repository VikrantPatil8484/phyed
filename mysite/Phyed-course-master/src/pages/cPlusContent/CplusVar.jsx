import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const CplusVar = () => {

  return (
    <div className='h-full text-sm md:text-lg'>
      <section className='p-4 text-md text-justify text-sm '>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Reference Variables</h4>
            <ul className='list-disc px-5 md:px-10'>
              <li className='pt-4'>Reference variables in C++ are like nicknames or aliases that we give to existing variables. They allow us to refer to the same data by different names.</li>
              <li className='pt-4'>Imagine you have a classmate named Sarah. You can give her a nickname like "Sara" so that when you say "Sara," everyone knows you're talking about Sarah.</li>
              <li className='pt-4'>In C++, reference variables allow us to create an alternative name or reference for an existing variable.</li>
              <li className='pt-4'>For example, let's say we have a variable called <span className='code-text italic text-sm'>score</span> that stores a student's test score. We can create a reference variable called <span className='code-text italic text-sm'>result</span>  that refers to the same data as <span className='code-text italic text-sm'>score</span> </li>
              <li className='pt-4'>Any changes made to <span className='code-text italic text-sm'>score</span>  will also affect <span className='code-text italic text-sm'>result</span>, and vice versa. It's like having two different names for the same thing.</li>
            </ul>            
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Typecasting</h4>
            <ul className='list-disc px-5 md:px-10'>
              <li className='pt-4'>Typecasting in C++ is like temporarily changing the type or format of a value to perform a specific operation or assignment.</li>
              <li className='pt-4'>Imagine you have a toy car that can only fit in a small box, but you want to put it in a bigger box. You need to change its size or shape temporarily to fit it in the bigger box.</li>
              <li className='pt-4'>In C++, typecasting allows us to change the data type of a value to another data type.</li>
              <li className='pt-4'>There are two types of typecasting: implicit typecasting (automatic) and explicit typecasting (manual).</li>
              <li className='pt-4'>Implicit typecasting happens automatically when the compiler can convert one data type to another safely. For example, converting an integer to a floating-point number.</li>
              <ul className='list-disc px-6'>
                <li className='pt-4'>For example, if we have an integer variable <span className='code-text italic text-sm'>number</span> and we want to treat it as a floating-point number, we can use explicit typecasting:
                  <br /> <span className='code-text italic text-sm'>float newNumber = static_cast &lt;float&gt; (number);.</span> 
                </li>
                <li className='pt-4'> Here, <span className='code-text italic text-sm'>static_cast &lt;float&gt; </span> tells the compiler to convert <span className='code-text italic text-sm'>number</span> to a floating-point number, and <span className='code-text italic text-sm'>newNumber</span> will hold the converted value.</li>
              </ul>
            </ul>            
          </article>
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                    Remember, reference variables are like nicknames or aliases that refer to the same data by different names, and typecasting is like temporarily changing the type or format of a value to perform a specific operation or assignment. Understanding reference variables and type casting helps us work with variables and manipulate data effectively in our programs, just like using different names or changing the shape of objects as needed.
                  </p>
          </div>
      </section>
    </div>
  ) 
}

export default CplusVar