import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const CplusStringManipulation = () => {
  
  const codeString =`
  #include <iostream>
  #include <string>
  
  int main() {
      std::string myString = "Hello, World!";
      std::string subString = myString.substr(7, 5);
      std::cout << "Substring: " << subString << std::endl;
      return 0;
  }  
  `

  const codeString1 =`
#include <iostream>
#include <string>

int main() {
    std::string myString = "Hello, World!";
    myString.replace(7, 5, "Universe");
    std::cout << "Modified string: " << myString << std::endl;
    return 0;
}
  `

  const codeString2 = `
#include <iostream>
#include <string>
#include <cctype> // Include the cctype library for tolower() and toupper()

int main() {
    std::string myString = "Hello, World!";
    for (char& c : myString) {
        c = std::tolower(c); // Convert each character to lowercase
    }
    std::cout << "Lowercase string: " << myString << std::endl;

    for (char& c : myString) {
        c = std::toupper(c); // Convert each character to uppercase
    }
    std::cout << "Uppercase string: " << myString << std::endl;
    return 0;
}
  `

  const codeString3 = `
#include <iostream>
#include <string>

int main() {
    std::string myString = "   Hello, World!   ";
    myString.erase(0, myString.find_first_not_of(" "));
    myString.erase(myString.find_last_not_of(" ") + 1);
    std::cout << "Trimmed string: " << myString << std::endl
  `
  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>String Manipulations:</h4>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Extracting substrings using substr() function:</p>
        <p className='text-justify pt-4'>The substr() function allows you to extract a substring from a given string. It takes two parameters: the starting index and the length of the substring.</p>
        <p>Here's an example:</p>

        <CodeHighlighter>
          {codeString} 
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be: "Substring: World"</p>
        <p>In this example, the substr() function is used to extract a substring starting from index 7 with a length of 5 characters.</p>      
        <br></br>
        <p className='text-justify pt-4 font-bold'>Replacing characters or substrings using replace() function:</p><br></br>
        <p>The replace() function allows you to replace characters or substrings within a string. It takes three parameters: the starting index, the length of the portion to be replaced, and the replacement string</p>
         <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        
        <p className='text-justify pt-4'>The output will be: "Modified string: Hello, Universe!".</p>
        <p>In this example, the replace() function is used to replace the substring "World" starting from index 7 with the string "Universe".</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Converting case with tolower() and toupper() functions:</p>
        <p className='text-justify pt-4'>The tolower() and toupper() functions allow you to convert the case of characters within a string.</p>
        <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString2} 
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be:<br></br>
                                        "Lowercase string: hello, world!" <br></br>
                                        "Uppercase string: HELLO, WORLD!"
</p>

        <p>In this example, the tolower() function is used to convert each character of the string to lowercase, and the toupper() function is used to convert each character to uppercase.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Removing leading/trailing whitespaces using erase() and find_first_not_of() functions:</p><br></br>
        <p>To remove leading and trailing whitespaces from a string, you can use the erase() function along with the find_first_not_of() function. </p>
        <p> Here is an example:</p>

        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter>

      </article>
    </section>
  </div>





    // Lecture 24.2
  )
  
}

export default CplusStringManipulation