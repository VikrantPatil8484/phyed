import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const CppDestructors = () => {

  const codeString = `
  class Resource {
    private:
        int* data;
    
    public:
        Resource() {
            data = new int[100];  // Dynamically allocate memory
            cout << "Resource acquired." << endl;
        }
    
        ~Resource() {
            delete[] data;  // Release dynamically allocated memory
            cout << "Resource released." << endl;
        }
    };
    
    int main() {
        {
            Resource res;  // Object of Resource created
    
            // Use the resource...
    
        }  // Object goes out of scope, destructor is automatically called
    
        return 0;
    }
  `

  return (


    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>8. Destructors:</h4>
          <br></br>
          <p className='text-justify pt-4'>In C++, destructors are special member functions of a class that are called automatically when an object of the class goes out of scope or is explicitly deleted. Destructors are responsible for releasing resources and performing necessary cleanup operations before an object is destroyed.</p>
          <p className='text-justify pt-4'>Here are some key points about destructors in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Syntax:</span><p> A destructor is defined using the same name as the class preceded by a tilde (~) symbol. It does not have any return type and does not take any parameters. There can only be one destructor for a class.</p>
          <br></br>
          <span className='font-semibold'>2. Automatic Invocation:</span><p> Destructors are automatically invoked when an object goes out of scope, such as when a local object in a function is about to be destroyed, or when an object defined in a block is no longer in scope. The destructor is also called when an object is explicitly deleted using the delete keyword.</p>
          <br></br>
          <span className='font-semibold'>3. Cleanup Operations:</span><p> Destructors are used to perform cleanup operations before the object is destroyed. This can include releasing dynamically allocated memory, closing files, releasing system resources, or any other necessary cleanup tasks.</p>
          <br></br>
          <span className='font-semibold'>4. Inherited Destructors:</span><p> If a class inherits from a base class, the derived class automatically inherits the base class's destructor. When an object of the derived class is destroyed, both the derived class's destructor and the base class's destructor are called, in the reverse order of construction.</p>
          <br></br>
          <span className='font-semibold'>5. Destructors:</span><p> If a class is designed to be used as a base class, it is good practice to declare the destructor as virtual. This ensures that when an object of a derived class is destroyed through a pointer to the base class, the destructor of the derived class is called as well. This is important to avoid memory leaks and ensure proper cleanup of resources in polymorphic scenarios.</p>
        
          <p className='text-justify pt-4'>Here's an example that demonstrates the usage of destructors in C++:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a Resource class that dynamically allocates memory in its constructor and releases it in its destructor. In the main() function, we create an object of the Resource class within a block. As the block ends, the object goes out of scope, and the destructor is automatically called, releasing the allocated memory.</p>
          <p className='text-justify pt-4'>Destructors are essential for proper resource management and cleanup in C++. They ensure that objects release resources and perform necessary cleanup operations before they are destroyed. It is important to implement destructors correctly, especially when dealing with dynamically allocated memory or other scarce resources, to prevent memory leaks and resource leaks.</p>
        
        </article> 
        </section>    
        </div>


  )
}

export default CppDestructors
// Lecture 35.2