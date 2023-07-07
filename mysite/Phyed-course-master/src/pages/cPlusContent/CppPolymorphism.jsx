import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const CppPolymorphism = () => {

  const codeString = `
  class Shape {
    public:
        virtual void draw() {
            cout << "Drawing a shape." << endl;
        }
    };
    
    class Circle : public Shape {
    public:
        void draw() override {
            cout << "Drawing a circle." << endl;
        }
    };
    
    class Square : public Shape {
    public:
        void draw() override {
            cout << "Drawing a square." << endl;
        }
    };
    
    int main() {
        Shape* shapePtr;
        Circle circle;
        Square square;
    
        shapePtr = &circle;
        shapePtr->draw();  // Calls the draw() function of the Circle class
    
        shapePtr = &square;
        shapePtr->draw();  // Calls the draw() function of the Square class
    
        return 0;
    }
  `
  const codeString1 = `
Drawing a circle.
Drawing a square.
  `


  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>10. Polymorphism:</h4>
          <br></br>
          <p className='text-justify pt-4'>Polymorphism is a key concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common base class. Polymorphism enables code to be written that can work with objects of different types, providing flexibility and extensibility to the code.</p>
          <p className='text-justify pt-4'>In C++, polymorphism is primarily achieved through two mechanisms:</p>
          <br></br>
          <span className='font-semibold'>1. Virtual Functions:</span>
          <p>  Virtual functions are member functions declared in the base class and overridden in the derived classes. They allow the derived class to provide its own implementation of the function. Virtual functions are declared using the virtual keyword in the base class and can be overridden in the derived classes using the same function signature.</p>
          <p> When a virtual function is called through a base class pointer or reference pointing to an object of a derived class, the appropriate derived class's implementation is executed. This is known as dynamic or late binding. The actual function called is determined at runtime based on the type of the object being pointed to or referenced.</p>
          <br></br>
          <span className='font-semibold'>2. Function Overriding:</span>
          <p> Function overriding is the process of providing a different implementation of a virtual function in a derived class. The overriding function in the derived class must have the same function signature (name and parameters) as the virtual function in the base class. By overriding virtual functions, you can customize the behavior of the derived class while adhering to the base class's interface.</p>
          <p> Polymorphism allows objects to be used in a generic and uniform way, regardless of their specific types. It provides the ability to write code that can operate on a collection of objects, treating them as objects of a common base class, without needing to know the specific derived class types. This enables code reuse, extensibility, and flexibility.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates polymorphism in C++ using virtual functions:</p>

          <CodeHighlighter>
            {codeString}
          </CodeHighlighter>
      
          <br></br>

          <p className='text-justify pt-4'> In the example above, we have a Shape base class with a virtual function draw(). Two derived classes, Circle and Square, override the draw() function with their own implementations.</p>
          <p className='text-justify pt-4'>In the main() function, we declare a pointer shapePtr of type Shape*. We then create objects of Circle and Square and assign their addresses to the shapePtr. By calling the draw() function through the shapePtr , the appropriate overridden function is executed based on the actual type of the object being pointed to.</p>
          <br></br>
          <p className='text-justify pt-4'> The output of the program will be:</p>
          
          <CodeHighlighter>
            {codeString1}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>Polymorphism allows us to treat objects of different derived classes uniformly through a common base class interface. It provides flexibility and enables code to be written that can work with different types of objects dynamically at runtime.</p>
  
        </article> 
        </section>    
        </div>

  )
}

export default CppPolymorphism
// Lecture 36.1