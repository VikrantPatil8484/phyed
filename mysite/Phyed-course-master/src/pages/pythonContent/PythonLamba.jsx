import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 21

const PythonLamba = () => {
  const codeString = `
  lambda arguments: expression
  `

  const codeString1 = `
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
  print("Even numbers:", even_numbers)
    `

  const codeString2 = `
  Even numbers: [2, 4, 6, 8, 10]
  `

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Lambda (what,why we use):</h4>
      <p className='text-justify p-2 pt-4'>In Python, a lambda function (also known as an anonymous function) is a small, anonymous function that is defined without a name. It is created using the `lambda` keyword and can take any number of arguments but can only have a single expression.</p>
      <p className='text-justify p-2 pt-4'>The basic syntax of a lambda function is as follows:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'>Here's how it works:</p>
      <p className='text-justify p-2 pt-4'>- The `lambda` keyword is used to define the lambda function.</p>
      <p className='text-justify p-2 pt-4'>- The `arguments` are the input parameters of the lambda function.</p>
      <p className='text-justify p-2 pt-4'>- The `expression` is a single expression that is evaluated and returned as the result of the lambda function.</p>
      <p className='text-justify p-2 pt-4'> Lambda functions are typically used when you need a simple, one-line function and you don't want to define a separate named function using the `def` keyword.</p>
      <p className='text-justify p-2 pt-4'>Let's consider a real-life example to illustrate lambda functions. Suppose you have a list of numbers and you want to filter out the even numbers using a lambda function:</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>            
      <p className='text-justify p-2 pt-4'>In this example, the `filter` function is used along with a lambda function to filter out the even numbers from the `numbers` list. The lambda function `lambda x: x % 2 == 0` takes a single argument `x` and checks if it is divisible by 2 (i.e., even). The `filter` function applies the lambda function to each element of the `numbers` list, returning only the elements that satisfy the condition.</p>
      <p className='text-justify p-2 pt-4'>When you run this program, it will display the following output:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>Lambda functions provide a concise way to define simple functions without the need for a formal function definition. They are often used in combination with higher-order functions like `map`, `filter`, and `reduce` to perform operations on sequences or collections.</p>
      <p className='text-justify p-2 pt-4'>Lambda functions are particularly useful in scenarios where you need to define short, throwaway functions or when you want to pass a function as an argument to another function. They can help in writing more compact code and improving code readability by keeping the focus on the logic at hand rather than defining separate named functions.</p>
      <p className='text-justify p-2 pt-4'>However, it's important to note that lambda functions have limitations and should not be used for complex logic or when you need to reuse the function multiple times within your code. In such cases, it's recommended to define a regular named function using the `def` keyword.</p>




            </article>
        </section>
    </div>
  )
}

export default PythonLamba