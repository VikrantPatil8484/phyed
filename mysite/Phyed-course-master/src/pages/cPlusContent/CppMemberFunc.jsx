import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppMemberFunc = () => {

  const codeString = `
  class Calculator {
    private:
        int result;
    
    public:
        Calculator() {
            result = 0;
        }
    
        void add(int num) {
            result += num;
        }
    
        void subtract(int num) {
            result -= num;
        }
    
        int getResult() {
            return result;
        }
    };
    
    int main() {
        Calculator calc;
    
        calc.add(5);
        calc.subtract(3);
    
        int finalResult = calc.getResult();
        cout << "Final Result: " << finalResult << endl;
    
        return 0;
    }
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>4. Member Functions</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, member functions (also known as methods or member methods) are functions that are declared and defined within a class. They operate on the data members of the class and provide behavior or functionality associated with the objects created from the class.</p>
          <p className='text-justify pt-4'>Here are some key points about member functions in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Declaration and Definition:</span><p>Member functions are declared within the class declaration and defined outside the class using the scope resolution operator (::) to specify the class to which they belong. The declaration includes the return type, function name, and parameters (if any). The definition includes the function body, where the actual implementation of the function's behavior is written.</p>
          <br></br>
          <span className='font-semibold'>2. Access Specifiers:</span><p> Member functions can be declared under different access specifiers: public, private, or protected. The access specifier determines the accessibility of the member function. Public member functions are accessible from anywhere in the program. Private member functions can only be accessed within the class itself. Protected member functions are accessible within the class and its derived classes.</p>
          <br></br>
          <span className='font-semibold'>3. Accessing Data Members:</span><p>  Member functions have access to the data members (private, protected, or public) of the class. They can read and modify the values of the data members as required.</p>
          <br></br>
          <span className='font-semibold'>4. Object Context:</span><p> Member functions are invoked using objects of the class. When a member function is called on an object, it operates on the specific instance of the object and can access its data members. Each object of the class has its own set of member variables, so member functions can provide behavior specific to each object.</p>
          <br></br>
          <span className='font-semibold'>5. Constructors and Destructors:</span><p> Special member functions called constructors and destructors are used to create and destroy objects, respectively. Constructors are called when an object is created and are responsible for initializing the object's state. Destructors are called when an object goes out of scope or is explicitly deleted, and they perform necessary cleanup actions.</p>
          <br></br>
          <span className='font-semibold'>6. Overloading:</span><p> Like regular functions, member functions can be overloaded. Overloading allows multiple member functions with the same name but different parameters to exist in the same class. This enables the flexibility to provide different versions of the function based on the types or number of arguments.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates the usage of the member functions in C++:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a Calculator class with a private data member (result). The class provides three member functions: a default constructor that initializes the result to 0, an add function that adds a number to the result, a subtract function that subtracts a number from the result, and a getResult function that returns the current result. We create an object calc of the Calculator class and use the member functions to perform calculations and retrieve the final result.</p>
          <p className='text-justify pt-4'>Member functions are a fundamental part of classes in C++ and allow objects to exhibit behavior and provide useful functionality. They enable encapsulation, modularity, and code reusability by organizing related operations within the class and operating on the object's data members.</p>
        
        </article> 
        </section>    
        </div> 


  )
}

export default CppMemberFunc
// Lecture 34.1