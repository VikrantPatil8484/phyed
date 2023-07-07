import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 31

const PythonScope = () => {
  const codeString = `  
  global_variable = "I'm a global variable"
  
  def print_global():
      print(global_variable)
  
  print_global()  # Output: I'm a global variable
  
  `

  const codeString1 = `  
  def print_local():
  local_variable = "I'm a local variable"
  print(local_variable)

  print_local()  # Output: I'm a local variable
  print(local_variable)  # Raises NameError: name 'local_variable' is not defined

`

  const codeString2 = `  
  def session_details():
      session_name = "Python Fundamentals"
      speaker_name = "John Smith"
  
      def print_speaker_details():
          print("Speaker:", speaker_name)
  
      print("Session:", session_name)
      print_speaker_details()
  
  session_details()
  
  `

 

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'> In Python, scope refers to the region or context in which a variable or name can be accessed. It determines the visibility and lifetime of variables and defines the rules for variable name resolution. Python has different types of scopes, including global scope and local scope.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1.Global Scope:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-4'>The global scope refers to the outermost scope of a program, where variables and names are accessible throughout the entire program.</li>
            <li className='pt-2'>Variables defined in the global scope can be accessed from any part of the program, including inside functions.</li>
            <li className='pt-2'>To define a variable in the global scope, it should be declared outside any function or class.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 
     <p className='text-justify p-2 pt-4'>1. In this example, <span className='code-text  text-m'>global_variable</span> is defined in the global scope. It can be accessed from within the <span className='code-text  text-m'>print_global()</span> function because it is within the scope.</p>


     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Local Scope:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-4'>Local scope refers to the innermost scope, such as within a function or class, where variables and names have limited visibility.</li>
            <li className='pt-2'>Variables defined within a local scope can only be accessed within that specific scope.</li>
            <li className='pt-2'>Local variables are created when a function is called and destroyed when the function execution is completed.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>1. In this example, <span className='code-text  text-m'>local_variable</span> is defined within the <span className='code-text  text-m'>print_local()</span> function's local scope. It can be accessed and printed within the function, but trying to access it outside the function will raise a <span className='code-text  text-m'>NameError</span> since it is not defined in the global scope. </p>     
      <p className='text-justify p-2 pt-4'> Understanding scope is crucial to avoid naming conflicts and properly manage variables in your programs. It ensures that variables are accessible in the appropriate context and prevents unintended modifications.</p>         
      <p className='text-justify p-2 pt-4'> Now, let's consider a relatable real-life example to understand scope better.</p>         
      <p className='text-justify p-2 pt-4'> Imagine you are organizing a conference with multiple sessions and speakers. Each session has its own scope, where the speakers' names and session details are defined. However, the conference program itself has a global scope, where you can access information about all sessions and speakers.</p>         
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>session_details()</span> function represents the scope of a session. It defines local variables <span className='code-text  text-m'>session_name</span> and <span className='code-text  text-m'>speaker_name</span> that store <span className='code-text  text-m'>session-specific</span> information. The nested function<span className='code-text  text-m'> print_speaker_details()</span> can access the <span className='code-text  text-m'>speaker_name</span> variable within its local scope. The program's global scope can access the session name and call the <span className='code-text  text-m'>session_details()</span> function to display the session and speaker details. </p>     
      <p className='text-justify p-2 pt-4'>By understanding scope in Python, you can control the visibility and lifetime of variables, prevent naming conflicts, and organize your code effectively, just like managing sessions and speakers in a conference with appropriate scopes for each. </p>     

            
      
            </article>
        </section>
    </div>
  )
}

export default PythonScope