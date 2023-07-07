import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CplusStringParsing = () => {

  const codeString = `
  #include <iostream>
  #include <string>
  #include <vector>
  #include <sstream>
  
  int main() {
      std::string myString = "Hello,World,How,Are,You";
      std::vector<std::string> tokens;
      std::stringstream ss(myString);
      std::string token;
  
      while (getline(ss, token, ',')) {
          tokens.push_back(token);
      }
  
      // Printing the tokens
      for (const auto& t : tokens) {
          std::cout << t << std::endl;
      }
  
      return 0;
  }
  `

  const codeString1 = `
  Hello
  World
  How
  Are
  You 
  `

  const codeString2 = `
  #include <iostream>
  #include <string>
  #include <sstream>
  
  int main() {
      std::string myString = "Hello World How Are You";
      std::stringstream ss(myString);
      std::string token;
  
      getline(ss, token, ' '); // Extract the first token
      std::cout << "First token: " << token << std::endl;
  
      getline(ss, token, ' '); // Extract the second token
      std::cout << "Second token: " << token << std::endl;
  
      return 0;
  }  
  `
const codeString3 = `
"First token: Hello"
"Second token: World"
`
const codeString4 = `
#include <iostream>
#include <regex>
#include <string>

int main() {
    std::string myString = "Hello, World!";
    std::regex pattern("Hello");

    // Pattern matching using regex_match()
    if (std::regex_match(myString, pattern)) {
        std::cout << "Pattern matched!" << std::endl;
    } else {
        std::cout << "Pattern not matched." << std::endl;
    }

    // Pattern validation using regex_search()
    if (std::regex_search(myString, pattern)) {
        std::cout << "Pattern found!" << std::endl;
    } else {
        std::cout << "Pattern not found." << std::endl;
    }

    return 0;
}
`

const codeString5 = `
"Pattern matched!"
"Pattern found!"
`
const codeString6 = `
Character classes: [abc], [0-9], [^a-z], etc.
Quantifiers: *, +, ?, {n}, {n,m}
Anchors: ^ (start of string), $ (end of string)
Alternation: |
Grouping: (...)
Escape sequences: /d (digit), /w (word character), /s (whitespace), etc.
`
  return (
    //lecture 25.1
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>String Parsing and Tokenization:</h4>
        <br></br>
        <p className='text-justify pt-4 font-bold'>Splitting strings into tokens using getline() or istringstream with delimiters:</p><br></br>
        <p className='text-justify pt-4'>One way to split a string into tokens is by using the getline() function or istringstream along with delimiters. </p>
        <p>Here's an example using getline():</p>
        <CodeHighlighter>
          {codeString} 
        </CodeHighlighter>
        <br></br>
        <p>The output will be:</p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        <br></br>
        <p>In this example, the string myString is split into tokens using the getline() function with the delimiter ,. Each token is stored in a vector called tokens.</p>      
        <br></br>
        <p className='text-justify pt-4 font-bold'>Extracting specific tokens using stringstream and getline():</p><br></br>
        <p>If you want to extract specific tokens from a string, you can use stringstream and getline() together.</p>
         <p> Here's an example:</p>

        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
        <br></br>
        <p> The output will be:</p>
        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter><br></br>
        <p>In this example, the stringstream object ss is created from the string myString. getline() is used multiple times to extract specific tokens based on the delimiter (space in this case).</p>
        <br></br>
        <p className='text-justify pt-4'>These examples demonstrate string parsing and tokenization in C++. You can customize the delimiters based on your requirements and use the extracted tokens as needed.</p>
        <br></br>
        <br></br>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Regular Expressions with Strings:</h4><br></br>
        <p className='text-justify pt-4 font-bold'>Introduction to regular expressions:</p><br></br>
        <p className='text-justify pt-4'>Regular expressions provide a powerful way to search, match, and manipulate text based on patterns. They consist of a sequence of characters that define a search pattern, which can be used to match against strings.
        <br></br>
        In C++, you can work with regular expressions using the [regex] library, which provides classes and functions to handle regular expressions.
        <br></br>
        Here's an example that demonstrates the usage of regular expressions for pattern matching and validation:</p>
        <CodeHighlighter>
          {codeString4}
        </CodeHighlighter>
        <br></br>
        <p> The output will be:</p>
        <CodeHighlighter>
          {codeString5}
        </CodeHighlighter>
        <br></br>
        <p className='text-justify pt-4'>In this example, the string myString is matched against the pattern "Hello" using std::regex_match(). Since the string starts with "Hello," the pattern is matched. Similarly, std::regex_search() is used to check if the pattern is found within the string.</p>
        <br></br>
        <p>Regular expressions support a wide range of patterns and operations, such as:</p>
        <CodeHighlighter>
          {codeString6}
        </CodeHighlighter>
        <br></br>
        <p className='text-justify pt-4'>You can use regular expressions to perform various tasks, including pattern matching, validation, search and replace, and extracting specific information from strings.</p>
        <p className='text-justify pt-4'>It's important to note that regular expressions can be complex, and mastering them requires practice and understanding of the syntax and patterns. The [regex] library in C++ provides additional functions and classes to perform advanced operations with regular expressions.</p>
        <br></br><br></br>


        <br></br> <br></br>

      </article>
    </section>
  </div>

  )
}

export default CplusStringParsing