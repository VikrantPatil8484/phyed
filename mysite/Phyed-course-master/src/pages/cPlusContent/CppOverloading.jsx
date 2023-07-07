import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppOverloading = () => {

  const codeString = `
  void print(int num) {
    cout << "Printing an integer: " << num << endl;
}

void print(double num) {
    cout << "Printing a double: " << num << endl;
}

int main() {
    print(10);
    print(3.14);

    return 0;
}
  `
  const codeString1 = `
  Printing an integer: 10
  Printing a double: 3.14
  `
  const codeString2 = `
  class Complex {
    private:
        double real;
        double imaginary;
    
    public:
        Complex(double r, double i) : real(r), imaginary(i) {}
    
        Complex operator+(const Complex& other) {
            return Complex(real + other.real, imaginary + other.imaginary);
        }
    
        void display() {
            cout << real << " + " << imaginary << "i" << endl;
        }
    };
    
    int main() {
        Complex c1(2.5, 3.7);
        Complex c2(1.8, 4.2);
        Complex result = c1 + c2;
    
        result.display();
    
        return 0;
    }
  `
  const codeString3 = `
  4.3 + 7.9i
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>11. Overloading:</h4>
          <br></br>
          <p className='text-justify pt-4'>Overloading in C++ refers to the ability to define multiple functions or operators with the same name but different parameters or argument types. This allows different variations of a function or operator to be used based on the type or number of arguments provided.</p>
          <p className='text-justify pt-4'>There are two main types of overloading in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Function Overloading:</span>
          <p> Function overloading involves defining multiple functions with the same name but different parameter lists. The compiler determines which function to call based on the number, order, and types of the arguments passed during the function call. The return type of the function is not considered for overloading.</p>
          <p className='text-justify pt-4'> Here's an example of function overloading:</p>
          <CodeHighlighter>
            {codeString}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>In the example above, we have two functions named print(). One takes an int argument, and the other takes a double argument. The appropriate function is called based on the type of the argument passed.</p>
          <p className='text-justify pt-4'>The output of the program will be:</p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <br></br>
          <span className='font-semibold'>2. Operator Overloading:</span>
          <p> Operator overloading allows you to redefine the behavior of operators when used with objects of a user-defined class. It allows you to extend the functionality of operators to work with user-defined types in a meaningful way.</p>
          <p> Operator overloading is achieved by defining special member functions or global functions called "operator functions" that specify the behavior of operators when used with objects of the class.</p>
          <p className='text-justify pt-4'>Here's an example of operator overloading:</p>

          <CodeHighlighter>
            {codeString2}
          </CodeHighlighter>
      
          <br></br>

          <p className='text-justify pt-4'> In the example above, we define a Complex class to represent complex numbers. We overload the + operator by defining the operator+() member function. This allows us to add two Complex objects using the + operator.</p>
          <p className='text-justify pt-4'>In the main() function, we create two Complex objects, c1 and c2, and add them using the + operator. The result is stored in the result object, which is then displayed.</p>
          <br></br>
          <p className='text-justify pt-4'> The output of the program will be:</p>
          
          <CodeHighlighter>
            {codeString3}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>Overloading provides a way to write more intuitive and expressive code by using the same function or operator name for different variations of behavior. It enhances code readability and allows you to work with different data types or objects in a consistent manner.</p>
  
        </article> 
        </section>    
        </div>


  )
}

export default CppOverloading
// Lecture 36.2