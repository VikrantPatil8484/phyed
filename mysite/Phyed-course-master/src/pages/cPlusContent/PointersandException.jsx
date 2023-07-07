import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const PointersandException = () => {


  const codeString =`
  #include <stdexcept>

  void someFunction() {
      int* ptr = nullptr;
  
      if (!ptr) {
          throw std::invalid_argument("Invalid pointer!");  // Throw a pointer to an exception object
      }
  }
  
  int main() {
      try {
          someFunction();
      }
      catch (const std::exception* e) {
          std::cout << "Exception caught: " << e->what() << std::endl;
      }
  
      return 0;
  }
  `
  const codeString1 = `
  #include <stdexcept>

  class MyException : public std::exception {
  public:
      const char* what() const noexcept override {
          return "Custom exception occurred!";
      }
  };
  
  int main() {
      try {
          throw new MyException();  // Throw a pointer to a custom exception object
      }
      catch (const MyException* e) {
          std::cout << "Custom exception caught: " << e->what() << std::endl;
          delete e;  // Don't forget to deallocate the exception object
      }
      catch (const std::exception* e) {
          std::cout << "Exception caught: " << e->what() << std::endl;
          delete e;  // Deallocate the exception object
      }
  
      return 0;
  }
  `

  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>11. Pointers and Exception Handling:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>In C++, pointers can be thrown and caught as exceptions, allowing you to handle exceptional conditions related to pointers in your code. Exception handling provides a mechanism to handle errors and abnormal situations gracefully. Here's how you can use exception handling with pointers:</p>

      <br></br>
      <p className='text-justify pt-4 font-bold'>Throwing Pointers as Exceptions:</p>
      <p>You can throw a pointer as an exception by using the throw keyword followed by the pointer. It is common to throw pointers to objects derived from the std::exception class or its subclasses. Here's an example</p>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, the someFunction() throws a pointer to a std::invalid_argument exception object when the ptr is nullptr. The exception is caught in the catch block, and the message is printed using the what() function of the exception object.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Catching Pointers as Exceptions:</p>
      <p>To catch a pointer thrown as an exception, you can use the catch block with a pointer type that matches the thrown pointer type. You can also catch a pointer to a base class to handle exceptions of derived classes. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a custom exception class MyException is defined, which inherits from std::exception. A pointer to a MyException object is thrown, and it is caught in the first catch block that matches the pointer type. The message is printed using the what() function. If the first catch block is not executed, the second catch block catches a pointer to std::exception or its derived classes.</p>
      <p className='text-justify pt-4'>When throwing pointers as exceptions, it's important to properly handle memory deallocation by deleting the thrown objects after they are caught and no longer needed. Also, consider using smart pointers or other resource management techniques to automate memory deallocation in exception handling scenarios.</p>
      <p className='text-justify pt-4'>By throwing and catching pointers as exceptions, you can handle exceptional conditions related to pointers and provide meaningful error messages or take appropriate actions in your code.</p>
      
    
      </article>
      </section>
      </div>
      <div></div>
      </>


  )
}

export default PointersandException
 // Lecture 32.2