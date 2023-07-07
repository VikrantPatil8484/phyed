import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppStaticMem = () => {

  const codeString = `
  class MyClass {
    public:
        static int count;
        int id;
    
        MyClass() {
            count++;
            id = count;
        }
    };
    
    int MyClass::count = 0;
    
    int main() {
        MyClass obj1;
        MyClass obj2;
        MyClass obj3;
    
        cout << "Object 1 ID: " << obj1.id << endl;
        cout << "Object 2 ID: " << obj2.id << endl;
        cout << "Object 3 ID: " << obj3.id << endl;
        cout << "Total objects: " << MyClass::count << endl;
    
        return 0;
    }
  `
  const codeString1 = `
Object 1 ID: 1
Object 2 ID: 2
Object 3 ID: 3
Total objects: 3

  `
  const codeString2 = `
  class MathUtils {
    public:
        static int add(int a, int b) {
            return a + b;
        }
    };
    
    int main() {
        int result = MathUtils::add(5, 3);
        cout << "Result: " << result << endl;
    
        return 0;
    }
  `
  const codeString3 = `
  Result: 8
  `


  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>13. Static Members:</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, static members are members of a class that are shared among all instances of the class. Unlike regular members, which have a separate copy for each object of the class, static members are associated with the class itself rather than individual objects.</p>
          <p className='text-justify pt-4'>There are two types of static members in C++: static data members and static member functions.</p>
          <br></br>
          <p className='text-justify pt-4 font-bold'>1. Static Data Members:</p>
          <ul className='list-disc px-10'>
            <li className='pt-4'>Static data members are variables that are declared with the static keyword inside a class.</li>
            <li className='pt-4'>They are shared among all objects of the class.</li>
            <li className='pt-4'>Static data members must be defined outside the class declaration, typically in the source file (.cpp), using the class name and the scope resolution operator :: .</li>
            <li className='pt-4'>Static data members can be accessed directly using the class name followed by the scope resolution operator ::</li>
          </ul>  
            <p className='text-justify pt-4'>Here's an example to illustrate static data members:</p>
            <CodeHighlighter>
              {codeString}
            </CodeHighlighter>
            <p className='text-justify pt-4'>In the example above, we have a class MyClass with a static data member count and a regular data member id. The constructor of the class increments the count and assigns the current value to id for each object created.</p>
            <p className='text-justify pt-4'>The static data member count is defined outside the class using the class name MyClass::count = 0; .</p>
            <p className='text-justify pt-4'>In the main() function, we create three objects of MyClass. Each object's id is assigned a unique value based on the count of objects created. We access the static data member count using the class name and display the IDs and the total number of objects.</p>
            <br></br>
            <p className='text-justify pt-4'>The output of the program will be:</p>
            <CodeHighlighter>
              {codeString1}
            </CodeHighlighter>
            <br></br>
            <p className='text-justify pt-4 font-bold'>2. Static Member Functions:</p>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Static member functions are functions declared with the static keyword inside a class.</li>
              <li className='pt-4'>They do not have access to the this pointer, which means they cannot access non-static data members or invoke non-static member functions directly.</li>
            <li className='pt-4'>Static member functions can be called using the class name followed by the scope resolution operator : .</li>
            </ul>
            <br></br>
            <p>Here's an example to illustrate static member functions:</p>
            <CodeHighlighter>
              {codeString2}
            </CodeHighlighter>
            <p className='text-justify pt-4'>In the example above, we have a class MathUtils with a static member function add().</p>
            <p className='text-justify pt-4'>The add() function takes two integers as arguments and returns their sum.</p>
            <p className='text-justify pt-4'>We call the static member function using the class name MathUtils::add() and store the result in the result variable.</p>
            <br></br>
            <p className='text-justify pt-4'>The output of the program will be:</p>
            <CodeHighlighter>
              {codeString3}
            </CodeHighlighter>
            <p className='text-justify pt-4'>Static members in C++ provide a way to have shared data or behavior across all objects of a class without the need for individual copies. They can be used to maintain common information or perform operations that are independent of any particular object of the class.</p>

        
      </article>
    </section>
  </div>

  )
}

export default CppStaticMem
// Lecture 37.1