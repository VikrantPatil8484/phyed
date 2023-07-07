import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
// import { FaLightbulb } from 'react-icons/fa';

const CplusInlineFunction = () => {
  const codeString = `
    #include <iostream>

    // Inline function definition
    inline int square(int num) {
        return num * num;
    }
    
    int main() {
      int number = 5;

      // Function call is replaced with the actual code
      int result = square(number);

      std::cout << "The square of " << number << " is: " << result << std::endl;

      return 0;
    }
  `;
  const codeString1 = `
    int main() {
      int number = 5;

      int result = number * number;

      std::cout << "The square of " << number << " is: " << result << std::endl;

      return 0;
    }
  `;
  const codeString2 = `
    #include <iostream>
    // Function template for addition
    template<typename T>
    T add(T a, T b) {
        return a + b;
    }
    
    int main() {
        int result1 = add(5, 3);  // Calls the add() template function with int type
        double result2 = add(2.5, 3.7);  // Calls the add() template function with double type
    
        std::cout << "Result 1: " << result1 << std::endl;
        std::cout << "Result 2: " << result2 << std::endl;
    
        return 0;
    }
  `;
  const codeString3 = `
    int add(int a, int b) {
      return a + b;
    }
  `;
  const codeString4 = `
    double add(double a, double b) {
     return a + b;
    }
  `;
  const codeString5 = `
    #include <iostream>

    // Function that takes a callback function as an argument
    void performOperation(int a, int b, int (*operation)(int, int)) {
        int result = operation(a, b);
        std::cout << "Result: " << result << std::endl;
    }
    
    // Callback function 1: Addition
    int add(int a, int b) {
        return a + b;
    }
    
    // Callback function 2: Subtraction
    int subtract(int a, int b) {
        return a - b;
    }
    
    int main() {
        int x = 5, y = 3;
    
        // Function pointers
        int (*operationPtr)(int, int);
    
        // Assigning the address of the add() function to the function pointer
        operationPtr = add;
        performOperation(x, y, operationPtr);
    
        // Assigning the address of the subtract() function to the function pointer
        operationPtr = subtract;
        performOperation(x, y, operationPtr);
    
        return 0;
  }
  
  
  `;

  return (
    // Lecture 17
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            1. Inline Functions
          </h4>
          <ul className="list-disc px-10">
            <li className="pt-4">Inline function definition</li>
            <li className="pt-2">Advantages and usage of inline functions</li>
          </ul>
          <div>
            <h4 className="mt-4 text-md font-bold  w-fit">
              1. Function Parameters:{" "}
            </h4>
            <p className="text-justify pt-4">
              An inline function is a special type of function in programming
              that is defined with the keyword "inline" before the function
              declaration. When the inline function is invoked, the compiler
              replaces the function call with the actual code of the function,
              instead of executing a separate function call.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold  w-fit">
              2. Advantages of Inline Functions
            </h4>
            <p className="text-justify pt-4 px-2">
              {" "}
              <span className="font-semibold">Efficiency:</span> Inline
              functions eliminate the overhead of function calls. Since the
              function code is directly inserted at the call site, there is no
              need to push arguments onto the stack, jump to a different
              location, and return from the function. This results in faster
              execution and can improve the performance of the program.
            </p>
            <p className="text-justify pt-4 px-2">
              {" "}
              <span className="font-semibold">
                Reduced Function Call Overhead:
              </span>{" "}
              In some cases, when a function is called frequently, the overhead
              of function calls can become significant. By making the function
              inline, we can avoid this overhead and reduce the execution time.
            </p>
            <p className="text-justify pt-4 px-2">
              {" "}
              <span className="font-semibold">
                Code Size Optimization:
              </span>{" "}
              Inline functions can lead to smaller executable code. Instead of
              generating separate function code for each call, the compiler
              includes the function code directly at the call site. This can
              result in smaller executable size, which can be beneficial for
              memory-constrained systems.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold w-fit">
              3. Usage of Inline Functions:
            </h4>
            <p className="text-justify pt-4 px-2">
              {" "}
              Inline functions are commonly used in scenarios where the function
              body is short and frequently called. For example, mathematical
              operations, accessors, or simple utility functions are good
              candidates for inlining. Here's an example to illustrate the usage
              of an inline function in C++:{" "}
            </p>
            <CodeHighlighter>{codeString}</CodeHighlighter>
            <p className="text-justify pt-4 px-2">
              {" "}
              In the above example, we have an inline function called square()
              that calculates the square of a number. Inside the main()
              function, we call the square() function with the number 5. Since
              the function is inline, the compiler replaces the function call
              with the actual code of the square() function.
            </p>
            <p className="text-justify pt-4 px-2">
              {" "}
              The resulting executable code will be similar to:
            </p>
            <CodeHighlighter>{codeString1}</CodeHighlighter>
            <p className="text-justify pt-4 px-2">
              As you can see, the function call square(number) is replaced with
              number * number directly in the code.
            </p>
            <p className="text-justify pt-4 px-2">
              By using inline functions, we can achieve better performance and
              optimize the code execution. However, it's important to note that
              the decision to inline a function is ultimately up to the
              compiler. The inline keyword is a hint to the compiler, and it may
              choose to ignore it in certain situations.
            </p>
          </div>
        </article>
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            2. Function Templates
          </h4>
          <ul className="list-disc px-10">
            <li className="pt-4">Generic functions using templates</li>
          </ul>
          <div>
            {/* <h4 className='mt-4 text-md font-bold  w-fit'>1. Function Parameters: </h4> */}
            <p className="text-justify pt-4">
              Function templates in programming allow us to write generic
              functions that can work with different types of data. They are
              like blueprints for functions that can be used to create specific
              functions for different types of data. Let's dive into the details
              in a way that's easy for a small kid to understand.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold underline w-fit">
              What are Function Templates?
            </h4>
            <p className="text-justify pt-4 px-2">
              {" "}
              A function template is a way to define a function without
              specifying the exact type of data it will operate on. Instead, we
              use a placeholder called a "template parameter" to represent the
              data type. This allows us to write a single function that can be
              used with different data types.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold underline w-fit">
              Why use Function Templates?
            </h4>
            <p className="text-justify pt-4 px-2">
              Function templates are useful when we want to write a function
              that performs the same logic regardless of the data type. It saves
              us from writing multiple versions of the same function for
              different data types. Templates also provide flexibility and
              reusability, as they can be used with various types without
              sacrificing code clarity or performance.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold underline w-fit">
              How to use Function Templates?
            </h4>
            <p className="text-justify pt-4 px-2">
              To create a function template, we use the keyword "template"
              followed by the template parameter(s) in angle brackets &lt;&gt;.
              Here's an example in C++ to demonstrate a function template that
              adds two values:
            </p>
            <CodeHighlighter>{codeString2}</CodeHighlighter>
            <p className="text-justify pt-4 px-4">
              In the above example, we define a function template called add()
              using the template keyword and the template parameter typename T.
              The template parameter T represents any data type.
            </p>
            <p className="text-justify pt-4 px-4">
              Inside the main() function, we call the add() function template
              twice: once with int arguments and once with double arguments. The
              compiler creates specific versions of the add() function for each
              data type based on the template parameter T.
            </p>
            <p className="text-justify pt-4 px-2">
              When we call add(5, 3), the compiler generates the following
              function:
            </p>
            <CodeHighlighter>{codeString3}</CodeHighlighter>
            <p className="text-justify pt-4 px-4">
              Similarly, when we call add(2.5, 3.7), the compiler generates the
              following function:
            </p>
            <CodeHighlighter>{codeString4}</CodeHighlighter>
            <p className="text-justify pt-4 px-4">
              The generated functions perform the addition based on the specific
              data types provided during the function call.
            </p>
            <p className="text-justify pt-4 px-4">
              By using function templates, we can create generic functions that
              work with different types of data without having to rewrite the
              same logic multiple times. This provides flexibility and promotes
              code reuse, making programming more efficient and concise.
            </p>
          </div>
        </article>
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            3. Function Pointers
          </h4>
          <ul className="list-disc px-10">
            <li className="pt-4">Pointers to functions</li>
            <li className="pt-2">Callback functions</li>
          </ul>
          <div>
            <p className="text-justify pt-4">
              Function pointers in programming allow us to store the memory
              address of a function and use it to call the function later. They
              are similar to variables that can hold the address of a function.
              Let's explain function pointers, why they are used, how they work,
              and provide an easy example for better understanding.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold underline w-fit">
              What are Function Pointers?
            </h4>
            <p className="text-justify pt-4 px-2">
              In programming, functions reside in the memory, just like
              variables. Function pointers are variables that can hold the
              memory address of a function. They enable us to refer to a
              function by its address and use it to call the function later in
              the program.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold underline w-fit">
              Why are Function Pointers Used?
            </h4>
            <p className="text-justify pt-4 px-2">
              Function pointers are used in various scenarios, including:
            </p>
            <p className="text-justify pt-4 px-4">
              {" "}
              <span className="font-semibold">Callback Functions:</span>{" "}
              Function pointers are often used as "callback" functions. A
              callback function is a function that is passed as an argument to
              another function and is called by that function to perform a
              specific task. Callback functions provide a way to customize or
              extend the behavior of a function without modifying its code.
            </p>
            <p className="text-justify pt-4 px-4">
              {" "}
              <span className="font-semibold">Function Selection:</span>{" "}
              Function pointers can be used to select a specific function to
              execute at runtime based on certain conditions or user choices.
              This allows for dynamic behavior and flexibility in program
              execution.
            </p>
          </div>
          <div>
            <h4 className="mt-6 text-md font-bold underline w-fit">
              How to Use Function Pointers?
            </h4>
            <p className="text-justify pt-4 px-2">
              To use function pointers, we need to follow these steps:
            </p>
            <p className="text-justify pt-4 px-4">
              Declare the function pointer variable, specifying the return type
              and parameter types of the function it will point to.
            </p>
            <p className="text-justify pt-4 px-4">
              Assign the address of a function to the function pointer variable.
            </p>
            <p className="text-justify pt-4 px-4">
              Use the function pointer to call the function.
            </p>
            <p className="text-justify pt-4 px-4">
              Here's a simple example in C++ to demonstrate the usage of
              function pointers as callback functions:
            </p>
            <CodeHighlighter>{codeString5}</CodeHighlighter>
            <p className="text-justify pt-4 px-4">
              In this example, we have a function called{" "}
              <span className="code-text italic text-sm">
                performOperation()
              </span>{" "}
              that takes two integers and a function pointer as arguments. It
              performs an operation using the callback function pointed to by
              the function pointer.
            </p>
            <p className="text-justify pt-4 px-4">
              We also have two callback functions:{" "}
              <span className="code-text italic text-sm">
                add() and subtract()
              </span>{" "}
              These functions have the same signature as the function pointer,
              taking two integers as arguments and returning an integer.
            </p>
            <p className="text-justify pt-4 px-4">
              Inside the{" "}
              <span className="code-text italic text-sm">main()</span> function,
              we declare a function pointer{" "}
              <span className="code-text italic text-sm">operationPtr</span>{" "}
              that can point to functions with the signature
              <span className="code-text italic text-sm">
                (int, int) -&lt; int. 
              </span>
              We assign the address of the <span className="code-text italic text-sm">add()</span> function to operationPtr and call <span className="code-text italic text-sm">performOperation()</span> to perform an addition operation. Then, we assign the address of the <span className="code-text italic text-sm">subtract()</span> function to operationPtr and call <span className="code-text italic text-sm">performOperation()</span> again to perform a subtraction operation.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CplusInlineFunction;
