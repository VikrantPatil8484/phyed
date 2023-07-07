import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppOperatorOverl = () => {

  const codeString = `
  class Point {
    private:
        int x;
        int y;
    
    public:
        Point(int a, int b) : x(a), y(b) {}
    
        // Overloading the addition operator
        Point operator+(const Point& other) {
            return Point(x + other.x, y + other.y);
        }
    
        // Overloading the equality operator
        bool operator==(const Point& other) {
            return (x == other.x && y == other.y);
        }
    
        void display() {
            cout << "(" << x << ", " << y << ")" << endl;
        }
    };
    
    int main() {
        Point p1(2, 3);
        Point p2(4, 6);
    
        Point p3 = p1 + p2;  // Using the overloaded addition operator
        p3.display();
    
        bool result = (p1 == p2);  // Using the overloaded equality operator
        cout << "p1 and p2 are equal: " << (result ? "true" : "false") << endl;
    
        return 0;
    }
  `
  const codeString1 = `
(6, 9)
p1 and p2 are equal: false
  `


  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>12. Operator Overloading:</h4>
          <br></br>
          <p className='text-justify pt-4'>Operator overloading in C++ allows you to redefine the behavior of operators when used with objects of user-defined classes. It provides a way to extend the functionality of operators to work with user-defined types in a meaningful and intuitive way.</p>
          <p className='text-justify pt-4'>C++ supports overloading of many operators, including arithmetic operators, comparison operators, assignment operators, logical operators, and more.</p>
          <p className='text-justify pt-4'>Operator overloading is achieved by defining special member functions or global functions called "operator functions" that specify the behavior of operators when used with objects of the class.</p>
          <p className='text-justify pt-4'>Here are some key points to keep in mind when overloading operators in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Syntax:</span>
          <p> Operator functions have a specific syntax. For example, to overload the addition operator (+), you would define a function named operator+(). The operator keyword is followed by the operator symbol without spaces.</p>
          <br></br>
          <span className='font-semibold'>2. Member Functions vs Global Functions:</span>
          <p> Operator functions can be defined as member functions of the class or as global functions. Member functions are called using the object of the class on the left-hand side of the operator. Global functions are called with two arguments, the left-hand operand and the right-hand operand.</p>
          <br></br>
          <span className='font-semibold'>3. Number of Arguments:</span>
          <p>The number of arguments required by an operator function depends on the operator being overloaded. For binary operators (e.g., +, -, *), the operator function typically takes two arguments. For unary operators (e.g., ++, --), the operator function takes only one argument.</p>
          <br></br>
          <span className='font-semibold'>4. Return Type:</span>
          <p> The return type of an operator function depends on the operator being overloaded. For most operators, including arithmetic and comparison operators, the return type is typically the resulting value or a reference to the object. For assignment operators (=, +=, -=), the return type is typically a reference to the modified object.</p>
          <br></br>
          <span className='font-semibold'>5. Access Specifiers:</span>
          <p> Operator functions can be declared as public, private, or protected like other member functions. The choice of access specifier depends on the desired accessibility of the operator function.</p>
          <br></br>
        
          <p className='text-justify pt-4'>Here's an example that demonstrates operator overloading for addition (+) and equality (==) operators:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'> In the example above, we define a Point class to represent 2D points. We overload the addition operator (+) and equality operator (==) by defining the operator+() and operator==() member functions.</p>
          <p className='text-justify pt-4'> In the main() function, we create two Point objects, p1 and p2. We use the overloaded addition operator to add p1 and p2, storing the result in p3. We then display the coordinates of p3.</p>
          <p className='text-justify pt-4'> Next, we use the overloaded equality operator to compare p1 and p2, storing the result in the result variable. We print whether p1 and p2 are equal based on the result.</p>
          <br></br>
          <p className='text-justify pt-4'>The output of the program will be:</p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <p className='text-justify pt--4'>Operator overloading in C++ allows you to write code that works with user-defined types in a natural and intuitive way, similar to how built-in types and objects are used. It enhances code readability, reusability, and expressiveness.</p>


        </article> 
        </section>    
        </div>

  )
}

export default CppOperatorOverl
//lecture 36.3