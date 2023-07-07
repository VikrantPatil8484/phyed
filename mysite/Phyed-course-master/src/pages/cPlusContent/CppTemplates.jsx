import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppTemplates = () => {

  const codeString = `
  template <typename T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swapValues(x, y);

    double a = 3.14, b = 2.71;
    swapValues(a, b);

    return 0;
}
  `
  const codeString1 = `
  template <typename T>
class Stack {
private:
    vector<T> elements;

public:
    void push(const T& item) {
        elements.push_back(item);
    }

    void pop() {
        elements.pop_back();
    }

    T top() const {
        return elements.back();
    }

    bool empty() const {
        return elements.empty();
    }
};

int main() {
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);

    Stack<string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");

    return 0;
}
  `


  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>15. Templates:</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, templates provide a way to write generic code that can work with different data types without having to rewrite the code for each specific type. Templates allow you to define classes and functions that are parameterized by one or more types.</p>
          <p className='text-justify pt-4'>Templates are powerful constructs in C++ that enable you to create reusable code components. There are two main types of templates in C++: function templates and class templates.</p>
          <br></br>
          <p className='text-justify pt-4 font-bold'>1. Function Templates:</p>
          <ul className='list-disc px-10'>
            <li className='pt-4'>Function templates allow you to define a blueprint for a function that can operate on multiple data types.</li>
            <li className='pt-4'>The template parameters are specified using the template keyword, followed by a list of template parameters in angle brackets.</li>
            <li className='pt-4'>Within the function template, the template parameters can be used as placeholders for the types used in the function.</li>
            <li className='pt-4'>The function template is instantiated with a specific type when it is called, and the compiler generates the appropriate function code based on the provided type.</li>
          </ul>  
            <p className='text-justify pt-4'>Here's an example of a function template that swaps two values:</p>
            <CodeHighlighter>
              {codeString}
            </CodeHighlighter>
            <p className='text-justify pt-4'>In the example above, we define a function template swapValues() that takes two parameters of type T and swaps their values. The template parameter T serves as a placeholder for the actual type used when the function is called.</p>
            <p className='text-justify pt-4'>In the main() function, we demonstrate the usage of the swapValues() function template with both int and double types. The compiler generates separate code for each type based on the template instantiation.</p>
            <br></br>
            <p className='text-justify pt-4 font-bold'>2. Class Templates:</p>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Class templates allow you to define a generic class that can be instantiated with different types.</li>
              <li className='pt-4'>Similar to function templates, class templates are defined using the template keyword followed by a list of template parameters in angle brackets.</li>
              <li className='pt-4'>Within the class template, the template parameters can be used as placeholders for the types used in the class.</li>
              <li className='pt-4'>The class template is instantiated with a specific type when objects of the class are created, and the compiler generates the appropriate class code based on the provided type.</li>
            </ul>
            <br></br>
            <p>Here's an example of a class that represents a generic stack:</p>
            <CodeHighlighter>
              {codeString1}
            </CodeHighlighter>
            <p className='text-justify pt-4'>In the example above, we define a class template Stack that represents a generic stack. The template parameter T is used as a placeholder for the element type of the stack.</p>
            <p className='text-justify pt-4'>In the main() function, we create two instances of the Stack class, one with int type and another with string type. The compiler generates separate code for each type based on the template instantiation.</p>
            <p className='text-justify pt-4'>Templates provide a powerful mechanism for code reuse and enable you to write generic algorithms and data structures that can work with different types. They are widely used in C++ to create flexible and efficient code components that can adapt to various data types.</p>
      </article>
    </section>
  </div>

  )
}

export default CppTemplates
// Lecture 37.3