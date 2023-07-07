import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 30

const PythonModules = () => {
  const codeString = `  
  
    import math

    radius = 5
    area = math.pi * math.pow(radius, 2)
    print("The area of a circle with radius", radius, "is", area)
   `

  const codeString1 = ` 
  from math import sqrt
  
  number = 16
  square_root = sqrt(number)
  print("The square root of", number, "is", square_root)
  
  `

  const codeString2 = `  
  import datetime as dt
  
  current_date = dt.date.today()
  print("Today's date is", current_date)
  
  `

  const codeString3 = `  
  import random
  
  meals = ["Spaghetti Bolognese", "Chicken Curry", "Caesar Salad", "Beef Stir-Fry", "Margherita Pizza"]
  random_meal = random.choice(meals)
  print("Today's random meal suggestion is:", random_meal)
  
  `





  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'> In Python, a module is a file containing Python code that defines functions, classes, and variables that can be utilized in other Python programs. Modules provide a way to organize and reuse code, making it easier to manage large projects and promote code reusability.</p>
      <p className='text-justify p-2 pt-4'> Python modules can be created by simply writing Python code in a <span className='code-text  text-m'>.py</span> file. Each file acts as a separate module, and you can import these modules into other Python scripts to access their functionality. Python also includes a vast standard library with a wide range of modules that provide useful tools and functionalities.</p>
      <p className='text-justify p-2 pt-4'> To use a module in your Python program, you need to <span className='code-text  text-m'>import</span> it using the import statement. Here's a basic example:</p>

             <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> In this example, the <span className='code-text  text-m'>math</span> module is imported using the <span className='code-text  text-m'>import</span> statement. The <span className='code-text  text-m'>math</span> module provides various mathematical functions and constants. We use the <span className='code-text  text-m'>math.pi</span> constant and the <span className='code-text  text-m'>math.pow()</span> function to calculate the area of a circle.</p>
      <p className='text-justify p-2 pt-4'> You can also import specific functions or variables from a module using the from keyword. Here's an example:</p>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> In this example, we import only the <span className='code-text  text-m'>sqrt()</span> function from the <span className='code-text  text-m'>math</span> module. We can then directly use the <span className='code-text  text-m'>sqrt()</span> function without specifying the module name.</p>
      <p className='text-justify p-2 pt-4'> Additionally, you can give an imported module or function an alias using the <span className='code-text  text-m'>as</span> keyword. This can be useful to shorten long module names or avoid naming conflicts. Here's an example:</p>
             <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> In this example, the <span className='code-text  text-m'>datetime</span> module is imported and given an alias <span className='code-text  text-m'>dt</span>. We can then use <span className='code-text  text-m'>dt.date.today()</span> to access the <span className='code-text  text-m'>today()</span> function within the datetime module.</p>
      <p className='text-justify p-2 pt-4'> Now, let's consider a relatable real-life example to understand modules better.</p>
      <p className='text-justify p-2 pt-4'>Imagine you are building a recipe management application. You want to include a feature that generates random meal suggestions. You can utilize the <span className='code-text  text-m'>random</span> module from the Python standard library to achieve this.</p>       
             <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> In this example, the <span className='code-text  text-m'>random</span> module is imported, allowing us to use the <span className='code-text  text-m'>choice()</span> function to randomly select a meal from the list of available meals. The selected meal is then printed as a random meal suggestion.</p>      
      <p className='text-justify p-2 pt-4'> By using modules in your Python programs, you can leverage existing code and functionality to enhance your applications, just like utilizing a recipe management application that incorporates the <span className='code-text  text-m'>random</span> module to generate random meal suggestions.</p>       
 
            
      
            </article>
        </section>
    </div>
  )
}

export default PythonModules