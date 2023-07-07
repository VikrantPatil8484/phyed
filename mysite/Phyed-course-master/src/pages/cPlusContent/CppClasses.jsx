import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
import { FaLightbulb } from 'react-icons/fa'

const CppClasses = () => {

  const codeString = `
  class Rectangle {
    private:
        double length;
        double width;
    
    public:
        // Constructor
        Rectangle(double l, double w) {
            length = l;
            width = w;
        }
    
        // Member function
        double calculateArea() {
            return length * width;
        }
    };
    
    int main() {
        // Creating an object of the Rectangle class
        Rectangle myRectangle(5.0, 3.0);
    
        // Accessing the member function
        double area = myRectangle.calculateArea();
    
        cout << "Area: " << area << endl;
    
        return 0;
    }
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Classes</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, a class is a fundamental building block of object-oriented programming (OOP). It is a user-defined data type that encapsulates data and functions (member variables and member functions) into a single entity. Classes provide a blueprint or template for creating objects, which are instances of the class.</p>
          <p className='text-justify pt-4'>Here are some key points about classes in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Declaration:</span><p> A class is declared using the class keyword followed by the class name. The class declaration typically includes member variables and member functions, as well as access specifiers (public, private, protected) that define the visibility and accessibility of the class members.</p>
          <br></br>
          <span className='font-semibold'>2. Member Variables:</span><p> Member variables (also known as data members or attributes) are variables declared within the class. They represent the state or characteristics of the objects created from the class. Each object of the class has its own set of member variables.</p>
          <br></br>
          <span className='font-semibold'>3. Member functions:</span><p> Member functions (also known as methods or member methods) are functions defined within the class. They operate on the member variables of the class and provide behavior or functionality associated with the objects. Member functions can access the member variables and other member functions of the class.</p>
          <br></br>
          <span className='font-semibold'>4. Object Creation:</span><p> Objects are created from classes using the class name followed by parentheses. The process of creating an object from a class is called instantiation. Memory is allocated for the object, and the class constructor is called to initialize the object's state.</p>
          <br></br>
          <span className='font-semibold'>5. Encapsulation:</span><p>Classes enable encapsulation, which is the bundling of data and functions together into a single unit. The member variables are typically declared as private or protected, restricting direct access from outside the class. Access to these variables is provided through public member functions, which enforce data integrity and encapsulation.</p>
          <br></br>
          <span className='font-semibold'>6. Access specifiers:</span><p>C++ provides access specifiers to control the accessibility of class members. The three access specifiers are:</p>
          <span className='font-semibold'>public: </span><p> Members declared as public are accessible from anywhere in the program.</p>
          <span className='font-semibold'>private:</span><p>Members declared as private are only accessible within the class. They cannot be accessed directly from outside the class or by derived classes.</p>
          <span className='font-semibold'>protected:</span><p> Members declared as protected are accessible within the class and by derived classes. They are not accessible outside the class.</p>
          <br></br>
          <span className='font-semibold'>7.Constructors and destructors:</span><p>Classes may have special member functions called constructors and destructors. Constructors are called when objects are created and are used to initialize the object's state. Destructors are called when objects are destroyed and are used to clean up resources or perform necessary actions before the object is deallocated.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates the declaration and usage of a class in C++:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a Rectangle class with private member variables (length and width) and a public member function (calculateArea). We create an object myRectangle of the Rectangle class by calling its constructor with the appropriate arguments. We then access the member function calculateArea to calculate the area of the rectangle.</p>
          
          </article> 
        </section> 
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>Note that classes allow for code reuse, modularity, and abstraction. They provide a way to organize data and behavior into logical units, making the code more structured and easier to maintain.</p>
          </div>
        
   
        </div> 

  )
}

export default CppClasses
// Lecture 33.2