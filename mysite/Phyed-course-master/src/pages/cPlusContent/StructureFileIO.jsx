import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const StructureFileIO = () => {

  const codeString = `
  #include <iostream>
  #include <ifstream>
  #include <string>
  
  // Define a structure
  struct Person {
      std::string name;
      int age;
  };
  
  // Function to write structure data to a file
  void writeStructureToFile(const std::string& filename, const Person& person) {
      std::ofstream file(filename, std::ios::binary);
      if (file.is_open()) {
          file.write(reinterpret_cast<const char*>(&person), sizeof(person));
          file.close();
          std::cout << "Structure data written to the file." << std::endl;
      } else {
          std::cout << "Unable to open the file." << std::endl;
      }
  }
  
  // Function to read structure data from a file
  void readStructureFromFile(const std::string& filename, Person& person) {
      std::ifstream file(filename, std::ios::binary);
      if (file.is_open()) {
          file.read(reinterpret_cast<char*>(&person), sizeof(person));
          file.close();
          std::cout << "Structure data read from the file." << std::endl;
      } else {
          std::cout << "Unable to open the file." << std::endl;
      }
  }
  
  int main() {
      // Create a structure instance
      Person person;
      person.name = "Alice";
      person.age = 25;
  
      // Write structure data to a file
      writeStructureToFile("person.dat", person);
  
      // Clear the structure data
      person.name.clear();
      person.age = 0;
  
      // Read structure data from the file
      readStructureFromFile("person.dat", person);
  
      // Print the structure data
      std::cout << "Name: " << person.name << std::endl;
      std::cout << "Age: " << person.age << std::endl;
  
      return 0;
  }
  `
  const codeString1 = `
  #include <iostream>

  // Define a structure with a template
  template <typename T>
  struct Pair {
      T first;
      T second;
  };
  
  int main() {
      // Create an instance of the structure with int type
      Pair<int> intPair;
      intPair.first = 10;
      intPair.second = 20;
  
      // Create an instance of the structure with double type
      Pair<double> doublePair;
      doublePair.first = 3.14;
      doublePair.second = 2.71;
  
      // Print the values of the intPair
      std::cout << "Int Pair: " << intPair.first << ", " << intPair.second << std::endl;
  
      // Print the values of the doublePair
      std::cout << "Double Pair: " << doublePair.first << ", " << doublePair.second << std::endl;
  
      return 0;
  }
  `



  return (

    <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Structure and File I/O:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Reading and writing structures to files: </p>
      <br></br>
      <p className='text-justify pt-4'>Reading and writing structures to files involves serializing and deserializing structure data to and from a file. This allows you to store structure data persistently and retrieve it later when needed.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates reading and writing structures to a file in C++:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>In this example, we define a structure Person with name and age fields. We create two functions, writeStructureToFile() and readStructureFromFile(), to handle writing and reading structure data to and from a file.</p>

      <p className='text-justify pt-4'>The writeStructureToFile() function takes a filename and a Person structure as input. It opens the file in binary mode, writes the structure data to the file using the write() function, and then closes the file.</p>

      <p className='text-justify pt-4'>The readStructureFromFile() function takes a filename and a reference to a Person structure as input. It opens the file in binary mode, reads the structure data from the file using the read() function, and then closes the file.</p>
  
      <p className='text-justify pt-4'>In the main() function, we create a Person structure instance, person, and initialize its values. We then call the writeStructureToFile() function to write the structure data to a file named "person.dat".</p>
      
      <p className='text-justify pt-4'>After that, we clear the structure data by emptying the name field and setting the age to zero. We call the readStructureFromFile() function to read the structure data from the file "person.dat" back into the person structure.</p>
      <br></br>
      <p className='text-justify pt-4'>Finally, we print the values of the structure members to verify that the data was successfully read from the file.</p>
      <p className='text-justify pt-4'>Note: When reading and writing structures to files, it's important to ensure that the structure is serialized and deserialized in a consistent manner, considering factors like endianness, padding, and data alignment.</p>
      <br></br>
      <br></br>
      <p className='text-justify pt-4 font-bold'>Structures with templates: </p>
      
      <p className='text-justify pt-4'>Structures with templates allow you to create generic structures that can hold data of different types. This is useful when you want to create reusable data structures that can work with different types of data</p>

      <p className='text-justify pt-4'>Here's an example of a structure with a template:</p>
      <br></br>
      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>
      <p className='text-justify pt-4'>In this example, we define a structure Pair with a template parameter T. The structure has two members of type T, first and second.</p>

      <p className='text-justify pt-4'>In the main() function, we create two instances of the structure: intPair and doublePair. We specify the template parameter as int for intPair and double for doublePair.</p>

      <p className='text-justify pt-4'>We assign values to the members of each structure and then print the values to verify that the structure can hold different types of data.</p>

      <p className='text-justify pt-4'>Structures with templates provide flexibility and reusability, allowing you to create generic data structures that can work with various data types. They are particularly useful when you want to write generic algorithms or containers.</p>


      </article>
      </section>
      </div>

    </>
    
  )
}

export default StructureFileIO
// Lecture 28.4