import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppFriendsFunctions = () => {

  const codeString = `
  class MyClass {
    private:
        int privateData;
    
    public:
        MyClass(int data) : privateData(data) {}
    
        friend void friendFunction(const MyClass& obj);
    };
    
    void friendFunction(const MyClass& obj) {
        cout << "Friend function accessing private data: " << obj.privateData << endl;
    }
    
    int main() {
        MyClass obj(42);
        friendFunction(obj);
    
        return 0;
    }
  `
  const codeString1 = `
  Friend function accessing private data: 42
  `


  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>14. Friend Functions:</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, a friend function is a function that is granted access to the private and protected members of a class. It is declared inside the class but is not a member of the class itself. Friend functions can be either regular functions or other class methods.</p>

          <p className='text-justify pt-4'>Here are some key points about friend functions:</p>
          <br></br>
          <span className='font-semibold'>1. Declaration:</span>
          <p> To declare a friend function, the friend keyword is used inside the class declaration, preceding the function prototype. This declaration provides access to the private and protected members of the class.</p>
          <br></br>
          <span className='font-semibold'>2. Scope:</span>
          <p>  Friend functions are not members of the class. They have access to the class's private and protected members but do not have an implicit ‘this’ pointer. They can't be called using an object of the class; instead, they are called like regular functions.</p>
          <br></br>
          <span className='font-semibold'>3. Access to Members:</span>
          <p> Friend functions can access private and protected members of the class, including private data members and private member functions.</p>
          <br></br>
          <span className='font-semibold'>4. Definition:</span>
          <p> The friend function is defined outside the class declaration, typically in the source file (.cpp). However, the function is still declared as a friend inside the class.</p>
          <br></br>
          <span className='font-semibold'>5. Namespace:</span>
          <p> Friend functions are not members of the class's namespace. They are defined outside the class's namespace but can be defined in the same namespace as the class.</p>
          <br></br>
        
          <p className='text-justify pt-4'>Here's an example to illustrate the usage of a friend function:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we have a class MyClass with a private data member privateData. Inside the class, we declare the friendFunction() as a friend function using the friend keyword.</p>
          <p className='text-justify pt-4'> In the main() function, we create an object of MyClass named obj and pass it to the friendFunction(). The friend function can access the private data member privateData of the MyClass object obj.</p>
          <br></br>
          <p className='text-justify pt-4'>The output of the program will be:</p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <p className='text-justify pt-4'>Friend functions are useful in scenarios where a function needs to access private or protected members of a class without being a member of that class. However, they should be used judiciously, as they break encapsulation to some extent and can reduce the encapsulation benefits of object-oriented programming.</p>


        </article> 
        </section>    
        </div>


  )
}

export default CppFriendsFunctions
// Lecture 37.2