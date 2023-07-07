  import React from 'react'
  import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 4

   
  const PythonComments = () => {

   const codeString = `
   # This is a single-line comment
   `

   const codeString1 = `
   # print("This line of code is commented out.")
   `
   const codeString2 = `
     '''
     This is a multi-line comment.
     It can span multiple lines.
     '''
     `
   const codeString3 = `
     def my_function():
     """
     This is a docstring that explains what the function does.
     It can span multiple lines and provides helpful information to users.
     """
     # Function code goes here
     pass
     `
   return (
     <div>
       <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <p className='text-justify p-2 pt-4'> Comments in Python are used to add explanatory notes within the code. They are ignored by the interpreter and serve as documentation for developers. There are two types of comments: single-line comments and multi-line comments.</p>

     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1.Single-line comments:</h4>
     <p className='text-justify p-2 pt-4'> Single-line comments start with the hash symbol (#).</p>
     <p className='text-justify p-2 pt-4'> They are used to add comments on a single line.</p>
             <CodeHighlighter>
               {codeString} 
             </CodeHighlighter>
           <p className='text-justify p-2 pt-4'> Single-line comments can also be used to disable a line of code temporarily.</p>
           <CodeHighlighter>
               {codeString1} 
             </CodeHighlighter>

     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2.Multi-line comments:</h4>
     <p className='text-justify p-2 pt-4'> Multi-line comments are enclosed within triple quotes (''' or """).</p>
     <p className='text-justify p-2 pt-4'> They are used to add comments spanning multiple lines.</p>
             <CodeHighlighter>
               {codeString2} 
             </CodeHighlighter>
           <p className='text-justify p-2 pt-4'> Multi-line comments are often used as docstrings, which provide documentation for functions, classes, or modules.</p>
           <CodeHighlighter>
               {codeString3} 
             </CodeHighlighter>        
           <p className='text-justify p-2 pt-4'> Comments are essential for code readability and maintainability. They help you and other developers understand the purpose and functionality of the code, making it easier to debug and modify.</p>




           </article>
       </section>
     </div>
   )
 }

 export default PythonComments