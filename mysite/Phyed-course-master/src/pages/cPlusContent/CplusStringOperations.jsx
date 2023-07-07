import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusStringOperations = () => {
  
  const codeString = `
#include <iostream>
#include <string>

int main() {
    std::string myString = "Hello";
    int length = myString.length();
    std::cout << "Length of the string: " << length << std::endl;
    return 0;
}
  `

  const codeString1 = `
#include <iostream>
#include <string>

int main() {
    std::string myString = "Hello";
    char firstChar = myString[0];
    std::cout << "First character: " << firstChar << std::endl;
    return 0;
}
  `

  const codeString2 = `
#include <iostream>
#include <string>

int main() {
    std::string str1 = "Hello";
    std::string str2 = " World";
    std::string result = str1 + str2;
    std::cout << "Concatenated string: " << result << std::endl;
    return 0;
}
  `
  const codeString3 = `
#include <iostream>
#include <string>

int main() {
    std::string str1 = "apple";
    std::string str2 = "banana";
    int result = str1.compare(str2);
    if (result == 0) {
        std::cout << "Strings are equal" << std::endl;
    } else if (result < 0) {
        std::cout << "str1 is less than str2" << std::endl;
    } else {
        std::cout << "str1 is greater than str2" << std::endl;
    }
    return 0;
}
  `
  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>String Operations:</h4>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Length calculation using length() or size() function:</p>
        <p className='text-justify pt-4'>The length() and size() functions can be used interchangeably to determine the length of a string, i.e., the number of characters it contains.</p>
        <p>Here's an example:</p>

        <CodeHighlighter>
          {codeString} 
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be: "Length of the string: 5"</p>
        <p className='text-justify pt-4'> In this example, the length() function is used to calculate the length of the string myString.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Accessing individual characters using indexing:</p>      
        <br></br>
        <p>In C++, you can access individual characters of a string using indexing, similar to an array.</p>
         <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        
        <p className='text-justify pt-4'>The output will be: "First character: H"</p>
        <p className='text-justify pt-4'> In this example, the character at index 0 of the string myString is accessed using the indexing operator [].</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>String concatenation using the + operator or append() function:</p>
        <p className='text-justify pt-4'>To concatenate (join) two strings together, you can use the + operator or the append() function.</p>
        <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString2} 
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be: "Concatenated string: Hello World"</p>

        <p>In this example, the + operator is used to concatenate str1 and str2 into the result string.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>String comparison using relational operators or compare() function: </p>
        <p>You can compare strings using relational operators or the compare() function. </p>
        <p> Here is an example:</p>

        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be: "str1 is less than str2"</p>
        <p> In this example, the compare() function is used to compare str1 and str2. The function returns a value less than 0 if str1 is lexicographically smaller than str2, 0 if they are equal, and a value greater than 0 if str1 is lexicographically greater than str2.</p>
        <br></br>
        <p>These examples demonstrate some common operations on strings in C++.</p>

      </article>
    </section>
  </div>
   
    // Lecture 24.1


  )
}

export default CplusStringOperations