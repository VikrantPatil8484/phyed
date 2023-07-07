import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const PointerandFunctions = () => {


  const codeString = `
void increment(int* ptr) {
(*ptr)++;
}

int main() {
    int num = 10;
    increment(&num);

    cout << "Modified value: " << num << endl;  // Output: Modified value: 11

    return 0;
}
  `
  const codeString1 = `
  int* createArray(int size) {
    int* arr = new int[size];

    for (int i = 0; i < size; i++) {
        arr[i] = i + 1;
    }

    return arr;
}

int main() {
    int* arr = createArray(5);

    // Use the dynamically allocated array
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    delete[] arr;

    return 0;
}
  `
  const codeString2 = `
  struct Person {
    string name;
    int age;
};

Person* createPerson(const string& name, int age) {
    Person* p = new Person;
    p->name = name;
    p->age = age;
    return p;
}

int main() {
    Person* person = createPerson("John Doe", 25);

    cout << "Name: " << person->name << endl;  // Output: Name: John Doe
    cout << "Age: " << person->age << endl;    // Output: Age: 25

    delete person;

    return 0;
}
  `

  return (


    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>5.Pointers and Functions:</h4>
      <br></br>
      <br></br>
      <p className='text-justify pt-4'>Pointers can be effectively used with functions to pass data by reference, return pointers from functions, and perform dynamic memory allocation within functions. Let's explore these concepts:</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Passing Pointers to Functions (Pass-by-Reference):</p>
      <p className='text-justify pt-4'>Pointers can be passed to functions to modify the value of variables or objects directly. By passing a pointer, you allow the function to access and modify the original data. Here's an example:</p>

      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this code, the increment function takes a pointer to an integer (int* ptr) as a parameter. By dereferencing the pointer ((*ptr)++), the function increments the value stored in the memory location pointed to by ptr, directly modifying the num variable in the main function.</p>

      <p className='text-justify pt-4'>By passing pointers to functions, you can avoid making copies of large data structures and achieve more efficient memory usage.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Returning Pointers from Functions:</p>
      <p className='text-justify pt-4'>Functions can also return pointers, allowing you to dynamically allocate memory within a function and return the allocated memory to the calling code. Here's an example:</p>

      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>

      <p className='text-justify pt-4'>In this example, the createArray function dynamically allocates an integer array of the specified size and initializes its elements. The function returns the pointer to the dynamically allocated array (int*) back to the main function, which can then use and manipulate the array. Remember to deallocate the dynamically allocated memory (delete[] arr) when it is no longer needed.</p>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Dynamic Memory Allocation with Functions:</p>
      <p className='text-justify pt-4'>Functions can perform dynamic memory allocation to create and return dynamically allocated data structures. This can be useful when the size or structure of the data is determined at runtime. Here's an example:</p>
      
      <CodeHighlighter>
        {codeString2}
      </CodeHighlighter>
      
      <p className='text-justify pt-4'>In this code, the createPerson function dynamically allocates memory for a Person structure, initializes its members, and returns the pointer to the created Person object. The main function then uses the returned pointer to access and display the data. Finally, the dynamically allocated memory is deallocated using delete to avoid memory leaks.</p>

      <p className='text-justify pt-4'>Remember to handle dynamically allocated memory carefully, ensuring proper deallocation to prevent memory leaks and undefined behavior.</p>
      <p className='text-justify pt-4'>Using pointers with functions offers great flexibility in manipulating data and performing dynamic memory allocation within the context of function calls. However, it's important to handle memory management responsibly to avoid memory leaks and access invalid memory locations.</p>


      </article>
      </section>
      </div>
      <div></div>
      </>


  )
}

export default PointerandFunctions
// Lecture 30.2