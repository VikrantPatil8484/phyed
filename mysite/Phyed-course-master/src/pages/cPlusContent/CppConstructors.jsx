import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppConstructors = () => {

    const codeString = `
    class Person {
      private:
          string name;
          int age;
      
      public:
          // Default Constructor
          Person() {
              name = "Unknown";
              age = 0;
          }
      
          // Parameterized Constructor
          Person(string n, int a) {
              name = n;
              age = a;
          }
      
          // Copy Constructor
          Person(const Person& other) {
              name = other.name;
              age = other.age;
          }
      
          void displayInfo() {
              cout << "Name: " << name << endl;
              cout << "Age: " << age << endl;
          }
      };
      
      int main() {
          Person person1;  // Default constructor is called
      
          Person person2("John Doe", 30);  // Parameterized constructor is called
      
          Person person3 = person2;  // Copy constructor is called
      
          person1.displayInfo();
          person2.displayInfo();
          person3.displayInfo();
      
          return 0;
      }
    `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>7. Constructors:</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, constructors are special member functions of a class that are called automatically when an object of the class is created. Constructors are responsible for initializing the object's data members and setting up its initial state. They have the same name as the class and do not have a return type (not even void).</p>
          <p className='text-justify pt-4'>Here are some key points about constructors in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Initialization:</span><p> Constructors initialize the data members of the class to specific values or perform any necessary setup operations.</p>
          <br></br>
          <span className='font-semibold'>2. Default Constructor:</span><p> If a class does not have any constructor defined, the compiler automatically generates a default constructor. The default constructor has no parameters and performs no initialization. It is used when an object is created without explicitly providing constructor arguments.</p>
          <br></br>
          <span className='font-semibold'>3. Parameterized Constructor:</span><p> A parameterized constructor is defined with one or more parameters. It allows you to specify values for the data members when creating an object. The parameters of the constructor are used to initialize the corresponding data members.</p>
          <br></br>
          <span className='font-semibold'>4. Multiple Constructors (Constructor Overloading):</span><p>  C++ allows a class to have multiple constructors with different parameter lists. This is known as constructor overloading. It allows objects to be created with different initialization options.</p>
          <br></br>
          <span className='font-semibold'>5. Initialization Lists:</span><p> Constructors can use initialization lists to initialize data members directly. Initialization lists appear after the constructor's parameter list and use a colon (:) to separate the parameters from the initialization expressions. Initialization lists can be more efficient than assigning values inside the constructor body.</p>
          <br></br>
          <span className='font-semibold'>6. Copy Constructor:</span><p> The copy constructor is a special constructor that creates a new object by copying the values of an existing object of the same class. It is called when an object is initialized with another object of the same class, passed by value, or returned by value from a function.</p>
          <br></br>
          <span className='font-semibold'>7. Explicit Constructors</span><p> By default, constructors can be used for implicit conversions, which means they can be invoked implicitly by the compiler. However, you can use the explicit keyword to declare a constructor as explicit, which prevents it from being used in implicit conversions.</p>
          <br></br>
          <span className='font-semibold'>8. Initialization Order</span><p>  When a class has multiple data members, they are initialized in the order of their declaration in the class, regardless of their order in the initialization list. It is important to ensure proper initialization order to avoid potential issues.</p>
          <br></br>
          <span className='font-semibold'>9. Destructors</span><p>  Destructors are special member functions that are called automatically when an object goes out of scope or is explicitly deleted. They are responsible for releasing resources and performing necessary cleanup operations.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates the usage of constructors in C++:</p>
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a Person class with three constructors: a default constructor, a parameterized constructor, and a copy constructor. The default constructor initializes the data members with default values. The parameterized constructor takes arguments to initialize the data members with specific values. The copy constructor copies the values from an existing Person object to create a new object.</p>
          <p className='text-justify pt-4'>In the main() function, we create three Person objects using different constructors. We then call the displayInfo() member function to print the information of each person.</p>
          <p className='text-justify pt-4'>Constructors provide a way to initialize objects of a class and ensure that the object is in a valid and usable state when created. They play a crucial role in object creation and initialization in C++.</p>


        </article> 
        </section>    
        </div>



  )
}

export default CppConstructors
// Lecture 35.1