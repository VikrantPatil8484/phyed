import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppAccesSpeci = () => {
 
  const codeString = `
  class MyClass {
    public:
        int publicVar;      // Public member variable
    
        void publicMethod() {
            // Public member function
        }
    
    private:
        int privateVar;     // Private member variable
    
        void privateMethod() {
            // Private member function
        }
    
    protected:
        int protectedVar;   // Protected member variable
    
        void protectedMethod() {
            // Protected member function
        }
    };
    
    int main() {
        MyClass obj;
    
        obj.publicVar = 10;        // Public member accessed directly
        obj.publicMethod();        // Public member function called
    
        // obj.privateVar = 20;    // Error: Private member cannot be accessed
        // obj.privateMethod();    // Error: Private member function cannot be called
    
        // obj.protectedVar = 30;  // Error: Protected member cannot be accessed
        // obj.protectedMethod();  // Error: Protected member function cannot be called
    
        return 0;
    }
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>6. Access Specifiers:</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, access specifiers are keywords that control the visibility and accessibility of class members (data members and member functions) from different parts of the program. There are three access specifiers: public, private, and protected. These specifiers are used within a class to specify the accessibility of its members.</p>
          <p className='text-justify pt-4'>Here are the details of each access specifier in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Public Access Specifiers:</span>
          <p className='text-justify pt-4'>Members declared as public are accessible from anywhere in the program, including outside the class.</p>
          <p>Public members can be accessed by objects of the class, as well as by other functions and classes.</p>
          <p>Public members are typically used to provide the interface or public API of the class, allowing users of the class to interact with its functionality.</p>
          <br></br>
          <span className='font-semibold'>2. Private Access Specifiers:</span>
          <p className='text-justify pt-4'>Members declared as private are only accessible within the class itself.</p>
          <p>Private members cannot be accessed directly from outside the class or by derived classes.</p>
          <p>Private members are often used for internal implementation details and data that should not be directly modified or accessed by external code.</p>
          <br></br>
          <span className='font-semibold'>3. Protected Access Specifiers:</span>
          <p className='text-justify pt-4'>Members declared as protected have similar access restrictions as private members, but with an additional capability: they can be accessed by derived classes.</p>
          <p>Protected members are accessible within the class itself and by derived classes that inherit from the base class.</p>
          <p>Protected members are useful when you want to provide access to derived classes while still keeping them hidden from the outside world.</p>
          <p>The access specifiers are specified within the class definition and apply to all subsequent members declared after the specifier until another specifier is encountered or the end of the class is reached. By default, if no access specifier is specified, the members are considered private.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates the usage of access specifiers in C++:</p>

          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a MyClass class with members declared under different access specifiers. The publicVar and publicMethod members are public, allowing them to be accessed and called directly. The privateVar and privateMethod members are private, so they cannot be accessed or called from outside the class. The protectedVar and protectedMethod members are protected, making them accessible only within the class and by derived classes.</p>
          <p className='text-justify pt-4'>Access specifiers provide control over the visibility and accessibility of class members, allowing for proper encapsulation and information hiding. They help enforce data integrity, prevent unauthorized access, and define the interface of the class.</p>
        
        </article> 
        </section>    
        </div> 


  )
}

export default CppAccesSpeci
// Lecture 34.3