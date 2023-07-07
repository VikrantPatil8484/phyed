import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CplusStringConversion = () => {


  const codeString = `
#include <iostream>
#include <string>

int main() {
    std::string str1 = "123";
    std::string str2 = "3.14";

    int intValue = std::stoi(str1);
    long longValue = std::stol(str1);
    float floatValue = std::stof(str2);

    std::cout << "Integer value: " << intValue << std::endl;
    std::cout << "Long value: " << longValue << std::endl;
    std::cout << "Float value: " << floatValue << std::endl;

    return 0;
}
  `

  const codeString1 = `
#include <iostream>
#include <string>

int main() {
    int intValue = 123;
    float floatValue = 3.14;

    std::string str1 = std::to_string(intValue);
    std::string str2 = std::to_string(floatValue);

    std::cout << "Integer string: " << str1 << std::endl;
    std::cout << "Float string: " << str2 << std::endl;

    return 0;
}
  `

  const codeString2 = `
#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string myString = "Hello, World!";

    // Convert to uppercase using std::transform()
    std::transform(myString.begin(), myString.end(), myString.begin(), ::toupper);
    std::cout << "Uppercase string: " << myString << std::endl;

    // Convert to lowercase using a loop
    for (char& c : myString) {
        c = std::tolower(c);
    }
    std::cout << "Lowercase string: " << myString << std::endl;

    return 0;
}
  `
  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>String Conversion:</h4>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Converting strings to numeric types using stoi(), stol(), stof(), etc. :</p><br></br>
        <p className='text-justify pt-4'>C++ provides several functions to convert strings to numeric types. Here are a few commonly used functions:</p><br></br>
        <span className='font-semibold'> stoi:</span><p> Converts a string to an integer (int).</p>
        <span className='font-semibold'> stol:</span><p> Converts a string to a long integer (long).</p>
        <span className='font-semibold'> stof:</span><p> Converts a string to a floating-point number (float).</p>
        <CodeHighlighter>
          {codeString} 
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be:<br></br>
                                        "Integer value: 123"<br></br>
                                        "Long value: 123"<br></br>
                                         "Float value: 3.14"</p><br></br>
        <p>In this example, the stoi(), stol(), and stof() functions are used to convert the strings str1 and str2 to different numeric types.</p>      
        <br></br>
        <p className='text-justify pt-4 font-bold'>Converting numeric types to strings using to_string() function:</p><br></br>
        <p>The to_string() function converts numeric types to strings.</p>
         <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        
        <p className='text-justify pt-4'>The output will be: <br></br>
                                         "Integer string: 123"<br></br>
                                         "Float string: 3.140000"</p><br></br>

        <p>In this example, the to_string() function is used to convert the variables intValue and floatValue to strings.</p>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Converting strings to uppercase or lowercase using algorithms and loops:</p>
        <p className='text-justify pt-4'>To convert a string to uppercase or lowercase, you can use algorithms like std::transform() or loops.</p>
        <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString2} 
        </CodeHighlighter>

        <p className='text-justify pt-4'>The output will be:<br></br>
                                        "Uppercase string: HELLO, WORLD!" <br></br>
                                        "Lowercase string: hello, world!"</p><br></br>

        <p>In this example, std::transform() is used to convert the string to uppercase, and a loop is used to convert the string to lowercase.</p>
        <br></br>
        <p>These examples demonstrate various string conversion operations in C++. Remember to include the necessary header files (#include) to access the functions used in these examples.</p>
      </article>
    </section>
  </div>

  )
}

export default CplusStringConversion