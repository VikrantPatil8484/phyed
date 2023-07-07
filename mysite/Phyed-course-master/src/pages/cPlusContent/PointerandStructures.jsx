import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
import { FaLightbulb } from 'react-icons/fa'

const PointerandStructures = () => {

  const codeString = `
  struct Person {
    string name;
    int age;
};

int main() {
    Person person;
    person.name = "John Doe";
    person.age = 25;

    Person* ptr = &person;

    cout << "Name: " << ptr->name << endl;  // Output: Name: John Doe
    cout << "Age: " << ptr->age << endl;    // Output: Age: 25

    return 0;
}
  `
  const codeString1 = `
  struct Person {
    string name;
    int age;
};

int main() {
    Person person;
    Person* ptr = &person;

    ptr->name = "John Doe";
    ptr->age = 25;

    cout << "Name: " << ptr->name << endl;  // Output: Name: John Doe
    cout << "Age: " << ptr->age << endl;    // Output: Age: 25

    return 0;
}
  `

  const codeString2 = `
  struct Person {
    string name;
    int age;
};

int main() {
    Person* ptr = new Person;

    ptr->name = "John Doe";
    ptr->age = 25;

    cout << "Name: " << ptr->name << endl;  // Output: Name: John Doe
    cout << "Age: " << ptr->age << endl;    // Output: Age: 25

    delete ptr;

    return 0;
}
  `


  return (
   <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>6. Pointers and Structures:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>Pointers can be used effectively with structures in C++ to access structure members, create pointers to structures, and perform dynamic memory allocation for structures. Let's explore these concepts:</p>

      <br></br>
      <p className='text-justify pt-4 font-bold'>Pointers to Structures:</p>
      <p className='text-justify pt-4'>Pointers can be used to create variables that store the memory address of a structure. By using pointers, you can efficiently manipulate and access structure data. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, a structure Person is defined with name and age as its members. A variable person of type Person is created, and its members are accessed using the pointer ptr by using the arrow operator.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Accessing Structure Members Using Pointers:</p>
      <p className='text-justify pt-4'>Pointers to structures can be used to access structure members using the arrow operator. This allows you to modify or retrieve data from the structure indirectly through the pointer. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, the structure Person is defined, and a pointer ptr of type Person* is created. The arrow operator(->) is used to access the structure members and assign values to them or retrieve them via the pointer.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Dynamic Memory Allocation for Structures:</p>
      <p className='text-justify pt-4'>Pointers can also be used to dynamically allocate memory for structures. This allows you to create structures at runtime and manage memory efficiently. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, dynamic memory allocation is performed using the new operator to allocate memory for a Person structure. The pointer ptr is then used to access the structure members and manipulate the data. After using the dynamically allocated memory, it's important to deallocate it using the delete operator to free the memory.</p>
      
      </article>
      </section>
      <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
      <FaLightbulb className='text-4xl mr-4 bulb'/>
      <p>Remember to handle dynamic memory allocation carefully and deallocate the memory using delete to avoid memory leaks and undefined behavior.</p>
      </div>
    </div>

      </>


  )
}

export default PointerandStructures
    // Lecture 30.3