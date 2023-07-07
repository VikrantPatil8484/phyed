import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 29

const PythonStringFormatting = () => {
  const codeString = `
  name = "Alice"
  age = 28
  message = "My name is {} and I'm {} years old.".format(name, age)
  print(message)
  `

  const codeString1 = `
    name = "Bob"
  age = 32
  message = "My name is {1} and I'm {0} years old.".format(age, name)
  print(message)
  `

  const codeString2 = ``
  
// price = 9.99
// message = "The price is ${:.2f}.".format(price)
// print(message)




  const codeString3= ``
  // item = "Smartphone"
  // quantity = 2
  // price_per_unit = 499.99
  // total_price = quantity * price_per_unit
  
  // receipt = "Receipt:\n\nItem: {}\nQuantity: {}\nPrice per unit: ${:.2f}\nTotal price: ${:.2f}".format(item, quantity, price_per_unit, total_price)
  
  // print(receipt)
    


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'> In Python, string formatting is the process of creating well-formatted strings by embedding variables or values within a string. It allows you to dynamically insert values into a string, making your output more readable and customized. Python provides several ways to perform string formatting, including the older <span className='code-text  text-m'>% </span> operator and the more modern <span className='code-text  text-m'>str.format() </span> method. We'll focus on the <span className='code-text  text-m'>str.format() </span> method, which is recommended for newer versions of Python.</p>
      <p className='text-justify p-2 pt-4'> The <span className='code-text  text-m'>str.format() </span> method allows you to create placeholders within a string, which are then replaced by values provided in a separate <span className='code-text  text-m'>format() </span> call. The placeholders are represented by curly braces <span className='code-text  text-m'>{} </span> within the string. Here's an example:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In the example above, the curly braces <span className='code-text  text-m'>{} </span> act as placeholders within the string. The <span className='code-text  text-m'>format() </span> method is called on the string and passed the variables <span className='code-text  text-m'>name </span>and <span className='code-text  text-m'>age </span>. The method replaces the placeholders with the corresponding values, resulting in the output: "My name is Alice and I'm 28 years old."</p>
      <p className='text-justify p-2 pt-4'> You can also specify the order of the placeholders using numerical indices within the curly braces. Here's an example:</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the index <span className='code-text  text-m'>0 </span> corresponds to the value of <span className='code-text  text-m'>age </span>, and the index 1 corresponds to the value of <span className='code-text  text-m'>name </span>. The output will be: "My name is Bob and I'm 32 years old."</p>
      <p className='text-justify p-2 pt-4'> Additionally, you can provide more formatting options within the curly braces to control the appearance of the inserted values. These options include specifying the width, precision, alignment, and more. Here's an example:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> In this example, <span className='code-text  text-m'>:.2f </span> within the curly braces specifies that the inserted value should be a floating-point number with two decimal places. The output will be: "The price is $9.99."</p>
      <p className='text-justify p-2 pt-4'>Now, let's consider a relatable real-life example to understand string formatting better.</p>
      <p className='text-justify p-2 pt-4'>Imagine you are developing an online shopping application. You want to display a receipt for a customer's purchase, including the item name, quantity, and total price. String formatting can help you create a well-structured and informative receipt.</p>       
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>          
      <p className='text-justify p-2 pt-4'>In this example, the variables <span className='code-text  text-m'>item </span>, <span className='code-text  text-m'>quantity </span>, <span className='code-text  text-m'>price_per_unit </span>, and <span className='code-text  text-m'>total_price </span> store the relevant information for the receipt. The <span className='code-text  text-m'>format() </span> method is used to insert these values into the receipt template. The resulting receipt is printed, displaying the item name, quantity, price per unit, and the total price, all formatted neatly.</p>
      <p className='text-justify p-2 pt-4'>By utilizing string formatting in your Python programs, you can dynamically insert variables or values into strings, allowing you to generate customized and well-structured output, just like creating a detailed receipt for an online shopping application.</p>      
      
            </article>
        </section>
    </div>
  )
}

export default PythonStringFormatting