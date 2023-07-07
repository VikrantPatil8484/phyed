import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const StructureIntro = () => {
  const codeString =`
  struct StructureName {
    dataType member1;
    dataType member2;
    // ...


};
  `
  const codeString1 = `
  struct Person {
    std::string name;
    int age;
    char gender;
};

int main() {
    Person p1;  // Structure variable declaration
    p1.name = "John";  // Accessing structure members and assigning values
    p1.age = 25;
    p1.gender = 'M';

    return 0;
}
  `
  const codeString2 = `
  #include <iostream>
#include <string>

struct Student {
    std::string name;
    int age;
    char gender;
};

int main() {
    Student s;  // Declare a structure variable of type Student

    // Assign values to structure members
    s.name = "Alice";
    s.age = 10;
    s.gender = 'F';

    // Access and display structure members
    std::cout << "Name: " << s.name << std::endl;
    std::cout << "Age: " << s.age << std::endl;
    std::cout << "Gender: " << s.gender << std::endl;

    return 0;
}
  `
  const codeString3 = `
  #include <iostream>
#include <string>

struct Student {
    std::string name;
    int age;
};

struct School {
    std::string name;
    Student student;
};

int main() {
    School school;
    school.name = "ABC School";
    school.student.name = "Alice";
    school.student.age = 10;

    std::cout << "School: " << school.name << std::endl;
    std::cout << "Student Name: " << school.student.name << std::endl;
    std::cout << "Student Age: " << school.student.age << std::endl;

    return 0;
}
  `



  return (
    // Lecture 26
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Introduction to Structures:</h4>
      <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>What are structures?</li>
              <li className='pt-4'>Structure declaration and definition.</li>
              </ul><br></br>

          <p className='text-justify pt-4'>Structures, also known as structs, are user-defined data types in C++ that allow you to group together related variables of different data types into a single unit. Structures provide a way to represent and manipulate complex data structures by creating a custom data type that contains multiple fields or members.</p>
          <br></br>
          <span className='font-semibold'>Structure Declaration:</span>
          <br></br>
          <p>To declare a structure, you need to define its structure and specify its members. The general syntax for declaring a structure is as follows:</p><br></br>
          <CodeHighlighter>
            {codeString}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>Here, StructureName is the name you choose for the structure, and dataType represents the data type of each member variable. You can declare as many members as needed, each separated by a semicolon.</p>
          <br></br>
          <span className='font-semibold'>Structure Definition:</span>
          <p className='text-justify pt-4'>After declaring a structure, you can define variables of that structure type. The structure definition specifies the values of its members. Here's an example:</p>
          <br></br>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>In this example, a structure named Person is declared with three members: name, age, and gender. Inside the main() function, a structure variable p1 of type Person is declared. The structure members are accessed using the dot (.) operator and assigned values.</p><br></br>
          <p>Structures provide a way to create custom data types that can store and organize related information. They are useful for representing real-world entities or complex data structures. By grouping variables together within a structure, you can access and manipulate them as a single unit, simplifying your code and enhancing its organization.</p>
          <br></br>
          <span className='font-semibold'>Structure Members:</span><br></br> <br></br>
          <span className='font-semibold'>Accessing structure members:<br></br>Initializing structure members:</span>
          <br></br>
          <p className='text-justify pt-4'>Accessing structure members involves accessing and manipulating the individual variables within a structure. In C++, you can use the dot (.) operator to access and assign values to structure members. Let's explain accessing structure members in a way that a kid can understand.</p>
          <p className='text-justify pt-4'>Let's consider an example of a structure representing a student:</p>
          <CodeHighlighter>
            {codeString2}
          </CodeHighlighter>
          <br></br>

          <p className='text-justify pt-4'>In this example, we have a structure named Student with three members: name, age, and gender. We declare a structure variable s of type Student.</p>
          <p className='text-justify pt-4'>To access the structure members, we use the dot (.) operator followed by the member name. For example, s.name represents the name member of the s structure. Similarly, we can access the age and gender members.</p>
          <p className='text-justify pt-4'>To assign values to structure members, we simply use the assignment operator (=). For instance, s.name = "Alice" assigns the value "Alice" to the name member of the s structure.</p>
          <p className='text-justify pt-4'>To display the structure members, we use the std::cout object and the insertion operator. We concatenate the structure member with a text label, such as "Name:", and use std::endl to insert a newline.</p>
          <p className='text-justify pt-4'>By accessing and manipulating structure members, we can store and retrieve different types of data for each structure instance. Structures provide a way to organize related information, making it easier to work with complex data structures in a structured and organized manner.</p>
          <br></br> <br></br>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Nested Structures:</h4><br></br>
          <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>Creating structures within structures.</li>
              <li className='pt-4'>Accessing nested structure members.</li>
              </ul><br></br>
              <p className='text-justify pt-4'>Nested structures refer to the concept of creating structures within structures. This allows you to organize and represent more complex data structures by combining multiple levels of data hierarchy. You can access the members of nested structures using the dot (.) operator. Let's explain nested structures and how to access their members in a way that a kid can understand.</p>
              <br></br>
              <p className='text-justify pt-4'>Let's consider an example of nested structures representing a school:</p>
              <br></br>
          <CodeHighlighter>
            {codeString3}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>In this example, we have two structures: Student and School. The Student structure represents individual students with members name and age. The School structure represents a school and includes a member student of type Student.</p>
          <br></br>
          <p className='text-justify pt-4'>To create nested structures, we define one structure within another. In this case, the School structure contains a member student of type Student. This means that each School structure has its own Student structure associated with it.</p>
          <br></br>
          <p className='text-justify pt-4'>To access the members of nested structures, we use the dot (.) operator multiple times. For example, school.student.name represents the name member of the student member of the school structure. Similarly, we can access the age member using school.student.age.</p>
          <br></br>
          <p className='text-justify pt-4'>To assign values to the nested structure members, we simply chain the dot (.) operator to access each member. For instance, school.student.name = "Alice" assigns the value "Alice" to the name member of the student member of the school structure.</p>
          <br></br>
          <p className='text-justify pt-4'>To display the nested structure members, we use std::cout and the insertion operator , similar to accessing members of a single structure.</p>
          <p className='text-justify pt-4'>By using nested structures, we can represent more complex relationships and hierarchies of data. This allows us to organize related information in a hierarchical manner, making it easier to work with multi-level data structures.</p>
    </article>
    </section>
    </div>

  )
}

export default StructureIntro