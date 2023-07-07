import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const PointersandOOp = () => {

  const codeString = `
  class Shape {
    public:
        virtual void draw() {
            cout << "Drawing a Shape." << endl;
        }
    };
    
    class Circle : public Shape {
    public:
        void draw() override {
            cout << "Drawing a Circle." << endl;
        }
    };
    
    int main() {
        Shape* shapePtr = new Circle();
        shapePtr->draw();  // Output: Drawing a Circle.
    
        delete shapePtr;
    
        return 0;
    }
  `
    const codeString1 = `
    class Person {
      public:
          string name;
      
          Person(const string& name) : name(name) {
              cout << "Person " << name << " created." << endl;
          }
      
          ~Person() {
              cout << "Person " << name << " destroyed." << endl;
          }
      };
      
      int main() {
          Person* personPtr = new Person("John");
      
          // Use the personPtr...
      
          delete personPtr;
      
          return 0;
      }
    `
    const codeString2 = `
    class Animal {
      public:
          virtual void sound() {
              cout << "Animal sound." << endl;
          }
      };
      
      class Dog : public Animal {
      public:
          void sound() override {
              cout << "Woof!" << endl;
          }
      };
      
      class Cat : public Animal {
      public:
          void sound() override {
              cout << "Meow!" << endl;
          }
      };
      
      int main() {
          Animal* animalPtr;
      
          Dog dog;
          Cat cat;
      
          animalPtr = &dog;
          animalPtr->sound();  // Output: Woof!
      
          animalPtr = &cat;
          animalPtr->sound();  // Output: Meow!
      
          return 0;
      }
    `

  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>10. Pointers and Object-Oriented Programming:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>Pointers play a crucial role in object-oriented programming (OOP) in C++. They allow for dynamic memory allocation and enable polymorphism through virtual functions. Let's explore how pointers are used with objects, dynamic memory allocation, and polymorphism.</p>

      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers to Objects:</p>
      <p>Pointers can be used to create and manipulate objects dynamically. By using pointers, you can allocate memory for objects at runtime and access their members. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a base class Shape is defined with a virtual function draw(). A derived class Circle is created, which overrides the draw() function. Using a pointer shapePtr of type Shape*, a Circle object is dynamically allocated and assigned to the pointer. By calling the draw() function through the pointer, the derived class implementation is invoked.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Dynamic Memory Allocation for Objects:</p>
      <p>Pointers are commonly used to dynamically allocate memory for objects when the object's lifetime or size needs to be determined at runtime. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a Person class is defined with a constructor and destructor. Using the new operator, memory is dynamically allocated for a Person object, and a pointer personPtr is assigned the memory address. After using the object, the delete operator is used to deallocate the memory and invoke the destructor.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Polymorphism and Virtual Functions with Pointers:</p>
      <p>Pointers to base classes are often used to achieve polymorphism in C++. Virtual functions enable dynamic dispatch, allowing the appropriate derived class function to be called based on the object type. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, a base class Animal is defined with a virtual function sound(). Derived classes Dog and Cat override the sound() function. By using a pointer animalPtr of type Animal*, different objects of derived classes are assigned to the pointer, and the sound() function is called. The appropriate derived class implementation is invoked based on the actual object type assigned to the pointer.</p>
      <p className='text-justify pt-4'>Pointers in object-oriented programming facilitate dynamic object creation, polymorphism, and virtual function dispatch. They enable flexible memory allocation and the ability to work with objects of varying types through base class pointers. Proper memory management using new and delete is important to avoid memory leaks and undefined behavior.</p>

      </article>
      </section>
      </div>
      </>


  )
}

export default PointersandOOp
// Lecture 32.1