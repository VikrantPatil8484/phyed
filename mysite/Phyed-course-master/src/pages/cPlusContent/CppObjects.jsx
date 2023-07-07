import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
import { FaLightbulb } from 'react-icons/fa'
const CppObjects = () => {

  const codeString = `
  class Car {
    private:
        string brand;
        int year;
    
    public:
        // Constructor
        Car(string b, int y) {
            brand = b;
            year = y;
        }
    
        // Member function
        void displayInfo() {
            cout << "Brand: " << brand << ", Year: " << year << endl;
        }
    };
    
    int main() {
        // Creating an object of the Car class
        Car myCar("Tesla", 2022);
    
        // Accessing the member function
        myCar.displayInfo();
    
        return 0;
    }
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Objects</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, an object is an instance of a class. It is a tangible entity that encapsulates data and behavior defined by its corresponding class. Objects are fundamental building blocks of object-oriented programming (OOP) and enable the creation of modular, reusable, and organized code.</p>
          <p className='text-justify pt-4'>Here are some key points about objects in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Class:</span><p>A class is a blueprint or template that defines the properties and behaviors (member variables and member functions) that objects of that class will possess. It serves as a blueprint for creating objects. Objects are created from classes.</p>
          <br></br>
          <span className='font-semibold'>2. Instantiation:</span><p>The process of creating an object from a class is called instantiation. When an object is instantiated, memory is allocated to hold the object, and the constructor of the class is called to initialize the object's state.</p>
          <br></br>
          <span className='font-semibold'>3. Data Members:</span><p> Objects have data members, which are variables defined within the class. These variables hold the state or characteristics of the object. Each object of a class has its own set of data members.</p>
          <br></br>
          <span className='font-semibold'>4. Member functions:</span><p>  Objects also have member functions, also known as methods. Member functions are functions defined within the class and are responsible for performing operations or providing behavior associated with the object. They operate on the data members of the object. </p>
          <br></br>
          <span className='font-semibold'>5. Access control:</span><p> C++ provides access specifiers, such as public, private, and protected, to control the accessibility of class members. The private members can only be accessed within the class, while public members can be accessed from anywhere. Protected members are accessible within the class and derived classes.</p>
          <br></br>
          <span className='font-semibold'>6. Object-oriented features:</span><p> C++ supports various object-oriented features, such as inheritance, polymorphism, and encapsulation. These features allow for code reuse, modularity, and abstraction.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates the creation of an object in C++:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a Car class with private data members (brand and year) and a public member function (displayInfo). We create an object myCar of the Car class by calling its constructor with the appropriate arguments. We then access the member function displayInfo to display the car's information.</p>
          
          </article> 
        </section> 

          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>Note that objects can interact with each other by invoking their member functions or accessing their data members, enabling communication and collaboration within the program.</p>
          </div>
   
        </div> 

  )
}

export default CppObjects
// Lecture 33.1