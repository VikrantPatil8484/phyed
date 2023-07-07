import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppInheritance = () => {

  const codeString = `
  class DerivedClassName : access-specifier BaseClassName
{
    // Derived class members
};
  `
  const codeString1 = `
  class Shape {
    protected:
        int width;
        int height;
    
    public:
        void setDimensions(int w, int h) {
            width = w;
            height = h;
        }
    };
    
    class Rectangle : public Shape {
    public:
        int getArea() {
            return width * height;
        }
    };
    
    int main() {
        Rectangle rect;
        rect.setDimensions(5, 3);
        cout << "Area of the rectangle: " << rect.getArea() << endl;
    
        return 0;
    }
  `

  return (
  <div>
  <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>9. Inheritance:</h4>
        <br></br>
        <p className='text-justify pt-4'>Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class to inherit properties and behaviors from another class. In C++, inheritance provides a way to create new classes (derived classes) based on existing classes (base classes). The derived classes inherit the members (data members and member functions) of the base class and can add new members or modify the inherited members as needed.</p>
        <p className='text-justify pt-4'>Here are some key points about inheritance in C++:</p>
        <br></br>
        <span className='font-semibold'>1. Base Class and Derived Class:</span><p>  Inheritance involves two types of classes - a base class (also known as a parent class or superclass) and a derived class (also known as a child class or subclass). The base class is the existing class from which properties and behaviors are inherited, and the derived class is the new class that inherits those properties and behaviors.</p>
        <br></br>
        <span className='font-semibold'>2. Syntax:</span><p> In C++, inheritance is declared using the class keyword, followed by the derived class name and a colon (:), followed by the access specifier and the name of the base class. Multiple base classes can be specified by separating them with commas.</p>
        
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <br></br>
        <span className='font-semibold'>3.Types of Inheritance:</span>
        <ul className='list-disc px-10'>
              <li className='pt-4'>Public Inheritance:</li>
              <p>In public inheritance, public members of the base class become public members of the derived class, protected members become protected members, and private members are not directly accessible. It represents an "is-a" relationship, where the derived class is a specialized version of the base class.</p>
              <li className='pt-4'>Protected Inheritance:</li>
              <p>In protected inheritance, public and protected members of the base class become protected members of the derived class. It restricts access to the base class members in the derived class and is less commonly used.</p>
              <li className= 'pt-4'>Private Inheritance:</li>
              <p>In private inheritance, public and protected members of the base class become private members of the derived class. It is the most restrictive form of inheritance and is typically used for implementation details or as a way to reuse code without exposing the base class interface.</p>
                
        </ul>
        <br></br>
        <span className='font-semibold'>4. Inherited Members:</span>
        <p> The derived class inherits the data members and member functions of the base class. This means the derived class can access and use these inherited members as if they were defined within the derived class itself. Inherited members can be overridden or extended in the derived class.</p>
        <br></br>
        <span className='font-semibold'>5. Overriding Members:</span>
        <p> In the derived class, it is possible to override the base class's member functions by providing a new definition with the same name and signature. This allows the derived class to provide its own implementation of the function, which may be different from the base class.</p>
        <br></br>
        <span className='font-semibold'>6. Access Control</span>
        <p> The access specifiers (public, protected, private) in the base class determine the accessibility of the inherited members in the derived class. Public members of the base class remain public in the derived class, protected members become protected, and private members are not directly accessible.</p>
        <br></br>
        <span className='font-semibold'>7. Constructor and Destructor Inheritance:</span>
        <p> Constructors and destructors are not inherited by derived classes. However, the derived class's constructor can call the base class's constructor explicitly to initialize the inherited members.</p>
        <br></br>
        <span className='font-semibold'>8. Multiple Inheritance:</span>
        <p> C++ supports multiple inheritance, which means a derived class can inherit from multiple base classes. Multiple inheritance allows a class to combine the properties and behaviors of multiple classes. However, it requires careful handling to avoid ambiguity and conflicts between the inherited members.</p>
      
        <p className='text-justify pt-4'>Here's an example that demonstrates inheritance in C++:</p>
        
        <CodeHighlighter>
          {codeString1}
          </CodeHighlighter> 
        <p className='text-justify pt-4'>In the example above, we have a Shape class as the base class with two data members width and height and a member function setDimensions(). The Rectangle class is derived from the Shape class using public inheritance. It inherits the width and height members from the base class and defines its own member function getArea() to calculate the area of the rectangle.</p>
        <p className='text-justify pt-4'>In the main() function, we create an object of the Rectangle class and set its dimensions using the setDimensions() function inherited from the Shape class. We then call the getArea() function to calculate and print the area of the rectangle.</p>
        <p className='text-justify pt-4'>Inheritance provides a powerful mechanism for code reuse, extensibility, and creating class hierarchies in C++. It allows you to define common properties and behaviors in a base class and specialize or modify them in derived classes.</p>

      </article> 
      </section>    
      </div>




  )
}

export default CppInheritance
    // Lecture 35.3