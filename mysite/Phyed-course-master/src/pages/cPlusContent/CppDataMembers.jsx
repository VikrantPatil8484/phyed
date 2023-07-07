import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppDataMembers = () => {

  const codeString = `
  class Person {
    private:
        string name;
        int age;
    
    public:
        // Constructor
        Person(string n, int a) {
            name = n;
            age = a;
        }
    
        // Getter functions
        string getName() {
            return name;
        }
    
        int getAge() {
            return age;
        }
    
        // Setter functions
        void setName(string n) {
            name = n;
        }
    
        void setAge(int a) {
            age = a;
        }
    };
    
    int main() {
        // Creating an object of the Person class
        Person person("John Doe", 30);
    
        // Accessing data members using getter functions
        cout << "Name: " << person.getName() << endl;
        cout << "Age: " << person.getAge() << endl;
    
        // Modifying data members using setter functions
        person.setName("Jane Smith");
        person.setAge(35);
    
        // Accessing modified data members
        cout << "Updated Name: " << person.getName() << endl;
        cout << "Updated Age: " << person.getAge() << endl;
    
        return 0;
    }
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>3. Data Members</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, data members (also known as member variables or attributes) are variables declared within a class. They represent the state or characteristics of the objects created from the class. Each object of the class has its own set of data members.</p>
          <p className='text-justify pt-4'>Here are some key points about data members in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Declaration:</span><p>Data members are declared within the body of the class, typically after the access specifiers (public, private, protected) and before the member functions. They are declared using the same syntax as regular variables, specifying the data type and an optional initialization value.</p>
          <br></br>
          <span className='font-semibold'>2. Accessibility:</span><p>The accessibility of data members is controlled by access specifiers. By default, if no access specifier is specified, the data members are considered private. Private members can only be accessed within the class itself. Public members are accessible from anywhere in the program. Protected members are accessible within the class and its derived classes.</p>
          <br></br>
          <span className='font-semibold'>3. Encapsulation:</span><p> Data members can be encapsulated within a class by declaring them as private or protected. Encapsulation helps in enforcing data integrity and prevents direct access to the internal representation of the class from outside. Access to the data members is provided through public member functions, also known as getters and setters.</p>
          <br></br>
          <span className='font-semibold'>4. Instance-specific:</span><p> Each object of a class has its own copy of the data members. When an object is created, memory is allocated for its data members. This means that changes to the data members of one object do not affect the data members of other objects created from the same class.</p>
          <br></br>
          <span className='font-semibold'>5. Initialization:</span><p> Data members can be initialized using constructors. Constructors are special member functions that are called when an object is created. They can take arguments to initialize the data members with specific values. Initialization can also be done using initialization lists in the constructor definition.</p>
          <br></br>
          <p className='text-justify pt-4'>Here's an example that demonstrates the usage of data members in C++:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a Person class with private data members (name and age). We provide public getter functions (getName and getAge) to access the values of the data members, and setter functions (setName and setAge) to modify the values. We create an object person of the Person class using the constructor, and then use the getter and setter functions to access and modify the data members.</p>
          <p className='text-justify pt-4'>Data members allow classes to maintain state and represent the characteristics of the objects they create. They are an essential part of the object-oriented programming paradigm, enabling the encapsulation and manipulation of data within objects.</p>
        
        </article> 
        </section>    
        </div> 

  )
}

export default CppDataMembers
//lecture 33.3