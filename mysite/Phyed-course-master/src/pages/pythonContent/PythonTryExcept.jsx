import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 27

const PythonTryExcept = () => {
  const codeString = `
      try:
    # Code that may raise an exception
    # ...
    except ExceptionType1:
    # Code to handle ExceptionType1
    # ...
    except ExceptionType2:
    # Code to handle ExceptionType2
    # ...
    else:
    # Code that executes if no exceptions were raised
    # ...
    finally:
    # Code that always executes, regardless of exceptions
    # ...
  `

  const codeString1 = `
  try:
  # Code for separating egg yolks from egg whites
  # ...
  except EggshellError:
  # Code to handle the presence of eggshell
  # ...
  else:
  # Code to continue with the baking process
  # ...
  finally:
  # Code to clean up utensils and workspace
  # ...
  `


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'> In Python, the <span className='code-text  text-m'>try-except</span> block is used for handling exceptions or errors that may occur during the execution of a program. It allows you to write code that may raise an exception, and provides a mechanism to catch and handle those exceptions gracefully, without causing the program to crash.</p>
      <p className='text-justify p-2 pt-4'> The general syntax of a <span className='code-text  text-m'>try-except</span> block is as follows:</p>
               <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>1. <span className='code-text  text-m'>try </span>block: This is where you place the code that might raise an exception. It is the main part of the <span className='code-text  text-m'>try-except</span> block.</p>

      <p className='text-justify p-2 pt-4'>2. <span className='code-text  text-m'>except </span> block(s): After the <span className='code-text  text-m'>try </span> block, you can have one or more <span className='code-text  text-m'>except </span> blocks that specify the type of exception to catch. If an exception of the specified type is raised within the <span className='code-text  text-m'>try </span> block, the corresponding <span className='code-text  text-m'>except </span> block is executed.</p>

      <p className='text-justify p-2 pt-4'>3. <span className='code-text  text-m'>else </span> block (optional): The <span className='code-text  text-m'>else </span> block is executed only if no exceptions occur within the <span className='code-text  text-m'>try </span> block. It is generally used for code that should run when no exceptions are raised.</p>

      <p className='text-justify p-2 pt-4'>4. <span className='code-text  text-m'>finally </span> block (optional): The <span className='code-text  text-m'>finally </span> block always executes, regardless of whether an exception occurred or not. It is typically used for releasing resources or cleaning up operations.</p>

      <p className='text-justify p-2 pt-4'>Now, let's consider a relatable real-life example to understand <span className='code-text  text-m'>try-except</span> better.</p>

      <p className='text-justify p-2 pt-4'>Imagine you are baking a cake, and you are following a recipe. The recipe has a step where you need to separate egg yolks from egg whites. However, there's a possibility that a piece of eggshell might accidentally fall into the mixture while separating the eggs. This could raise an exception during the baking process.</p>

      <p className='text-justify p-2 pt-4'>In Python code, it could be represented as follows:</p>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In the example above, the <span className='code-text  text-m'>try </span> block contains the code for separating egg yolks from egg whites. If an <span className='code-text  text-m'>EggshellError</span> exception is raised (representing the presence of eggshell), the corresponding <span className='code-text  text-m'>except </span> block is executed to handle the situation (e.g., removing the eggshell). If no exception occurs, the <span className='code-text  text-m'>else </span>block can continue with the baking process. Finally, the <span className='code-text  text-m'>finally </span> block is executed to clean up the utensils and workspace, regardless of any exceptions.</p>
      <p className='text-justify p-2 pt-4'>By using <span className='code-text  text-m'>try-except</span> blocks, you can anticipate and handle exceptional situations in your code, preventing unexpected crashes and allowing your program to gracefully handle errors, just like removing eggshells while baking a cake.</p>         
      
            </article>
        </section>
    </div>
  )
}

export default PythonTryExcept