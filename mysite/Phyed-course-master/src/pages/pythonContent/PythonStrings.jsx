import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 9

const PythonStrings = () => {
  const codeString = ` 
  # String creation
  name = "John"
  message = 'Hello, World!'
    `

  const codeString1 = `
   # Accessing characters in a string
  name = "John"
  print(name[0])  # Output: 'J'
  print(name[2])  # Output: 'h'
  
  `  

  const codeString2 = `
   # String operations and methods
  name = "John"
  greeting = "Hello"
  
  # Concatenation: Joining strings together
  full_greeting = greeting + " " + name  # Output: "Hello John"
  
  # Length: Getting the length of a string
  name_length = len(name)  # Output: 4
  
  # Upper and Lower: Converting case
  name_upper = name.upper()  # Output: "JOHN"
  name_lower = name.lower()  # Output: "john"
  
  # Split: Splitting a string into a list
  sentence = "Hello, how are you?"
  words = sentence.split()  # Output: ['Hello,', 'how', 'are', 'you?']
  
  # Replace: Replacing substrings
  message = "Hello, name!"
  new_message = message.replace("name", "John")  # Output: "Hello, John!"
  # String operations and methods
  name = "John"
  greeting = "Hello"

  # Concatenation: Joining strings together
  full_greeting = greeting + " " + name  # Output: "Hello John"

  # Length: Getting the length of a string
  name_length = len(name)  # Output: 4

  # Upper and Lower: Converting case
  name_upper = name.upper()  # Output: "JOHN"
  name_lower = name.lower()  # Output: "john"

  # Split: Splitting a string into a list
  sentence = "Hello, how are you?"
  words = sentence.split()  # Output: ['Hello,', 'how', 'are', 'you?']

  # Replace: Replacing substrings
  message = "Hello, name!"
  new_message = message.replace("name", "John")  # Output: "Hello, John!"

  ` 

  const codeString3 = `
   # String formatting
  name = "John"
  age = 25
  
  # Using the % operator
  message = "My name is %s and I am %d years old." % (name, age)
  
  # Using the format() method
  message = "My name is {} and I am {} years old.".format(name, age)
  
  # Using f-strings
  message = f"My name is {name} and I am {age} years old."
  
  ` 

  const codeString4 = `
   # String slicing
  name = "John Doe"
  
  first_name = name[:4]   # Output: "John"
  last_name = name[4:]    # Output: "Doe"
  
  ` 

  const codeString5 = `
   # Basic string slicing
  message = "Hello, World!"
  
  # Extracting a substring
  substring = message[7:12]   # Output: "World"
  
  ` 

  const codeString6 = `
   # Omitted indices
  message = "Hello, World!"
  
  # Omitting the start index
  substring1 = message[:5]    # Output: "Hello"
  
  # Omitting the end index
  substring2 = message[7:]    # Output: "World!"
  
  ` 

  const codeString7 = `
   # Negative indices
  message = "Hello, World!"
  
  substring = message[-6:-1]   # Output: "World"
  
  ` 

  const codeString8 = `
   # Step size
  message = "Hello, World!"
  
  # Extracting every second character
  substring1 = message[::2]    # Output: "Hlo ol!"
  
  # Reversing the string
  substring2 = message[::-1]   # Output: "!dlroW ,olleH"
  
  ` 

  const codeString9 = `
   # Slicing with variables
  message = "Hello, World!"
  
  start_index = 7
  end_index = 12
  substring = message[start_index:end_index]   # Output: "World"
  
  `

  const codeString10 = ` 
  # Concatenation
  str1 = "Hello"
  str2 = "World"
  
  concatenated = str1 + " " + str2   # Output: "Hello World"
  
  `

  const codeString11 = `
   # String methods
  message = "Hello, World!"
  
  # Changing case
  uppercase = message.upper()        # Output: "HELLO, WORLD!"
  lowercase = message.lower()        # Output: "hello, world!"
  
  # Removing leading and trailing whitespace
  trimmed = message.strip()          # Output: "Hello, World!"
  
  # Replacing substrings
  replaced = message.replace("Hello", "Hi")   # Output: "Hi, World!"
  
  # Splitting into a list
  words = message.split(",")         # Output: ["Hello", " World!"]
  
  `

  const codeString12 = ` 
  # String formatting
  name = "Alice"
  age = 25
  
  # Using the % operator
  formatted1 = "My name is %s and I am %d years old." % (name, age)
  
  # Using the format() method
  formatted2 = "My name is {} and I am {} years old.".format(name, age)
  
  # Using f-strings
  formatted3 = f"My name is {name} and I am {age} years old."
  
  `

  const codeString13 = `
   # Slicing and reassignment
  message = "Hello, World!"
  
  # Slicing to modify a portion of the string
  modified = message[:5] + " Python!"   # Output: "Hello Python!"
  
  `

  const codeString14 = `
   # Using the + operator
  str1 = "Hello"
  str2 = "World"
  
  concatenated = str1 + " " + str2   # Output: "Hello World"
  
  `

  const codeString15 = ` 
  # Using the += operator
  str1 = "Hello"
  str2 = "World"
  
  str1 += " " + str2   # Output: "Hello World"
  
  `

  const codeString16 = `
   # Using the join() method
  words = ["Hello", "World"]
  
  concatenated = " ".join(words)   # Output: "Hello World"
  
  `

  const codeString17 = `
   # Using f-strings
  str1 = "Hello"
  str2 = "World"
  
  concatenated = f"{str1} {str2}"   # Output: "Hello World"
  
  `

  const codeString18 = `
   # Using the % operator (Old Style)
  name = "Alice"
  age = 25
  
  formatted = "My name is %s and I am %d years old." % (name, age)
  
  `

  const codeString19 = `
   # Using the format() method
  name = "Alice"
  age = 25
  
  formatted = "My name is {} and I am {} years old.".format(name, age)
  
  `

  const codeString20 = `
   # Using f-Strings
  name = "Alice"
  age = 25
  
  formatted = f"My name is {name} and I am {age} years old."
  
  `

  const codeString21 = `
   # Newline escape character
  message = "Hello,\nWorld!"
  print(message)
  # Output:
  # Hello,
  # World!
  
  `

  const codeString22 = `
   # Tab escape character
  message = "Name:\tJohn"
  print(message)
  # Output: Name:    John
  
  `
  const codeString23 = ` 
  # Backslash escape character
  path = "C:\\Users\\John\\Documents"
  print(path)
  # Output: C:\Users\John\Documents
  
  `

  const codeString24 = `
   # Single quote and double quote escape characters
  message1 = 'He said, \'Hello!\''
  message2 = "She said, \"Hi!\""
  print(message1)
  print(message2)
  # Output:
  # He said, 'Hello!'
  # She said, "Hi!"
  
  `

  const codeString25 = `
   # Unicode character escape
  message = "\u03A3"   # Greek capital letter Sigma
  print(message)
  # Output: Σ
  
  `

  const codeString26 = `
   # Raw string
  message = r"Path:\Users\John\Documents"
  print(message)
  # Output: Path:\Users\John\Documents
  
  `

  const codeString27 = `
   # upper() method
  message = "Hello, World!"
  uppercase = message.upper()
  print(uppercase)
  # Output: HELLO, WORLD!
  
  `

  const codeString28 = `
   # lower() method
  message = "Hello, World!"
  lowercase = message.lower()
  print(lowercase)
  # Output: hello, world!
  
  `

  const codeString29 = ` 
   # strip() method
  message = "   Hello, World!   "
  trimmed = message.strip()
  print(trimmed)
  # Output: Hello, World!
  
  `

  const codeString30 = ` 
   # replace() method
  message = "Hello, World!"
  replaced = message.replace("Hello", "Hi")
  print(replaced)
  # Output: Hi, World!
  
   `

  const codeString31 = ` 
   # split() method
  message = "Hello, World!"
  words = message.split(",")
  print(words)
  # Output: ['Hello', ' World!']
  
  `

  const codeString32 = `
   # join() method
  words = ['Hello', 'World']
  joined = " ".join(words)
  print(joined)
  # Output: Hello World
  
  `

 

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>
            
      <p className='text-justify p-2 pt-4'>Strings are versatile and extensively used in various applications. Understanding string operations and methods allows you to manipulate and work with textual data effectively in your Python programs.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Slicing Strings</h4>
      <p className='text-justify p-2 pt-4'> In Python, string slicing allows you to extract a portion of a string by specifying a range of indices. The syntax for string slicing is string[start:end:step], where start is the starting index, end is the ending index (exclusive), and step is the optional step size. Here are the key points about string slicing:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.Basic String Slicing:</b></p>
      <p className='text-justify p-2 pt-4'> To slice a string, specify the starting and ending indices within square brackets ([]).</p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>2.Omitted Indices:</b></p>
      <p className='text-justify p-2 pt-4'>If you omit the start index, Python assumes it as 0 (the beginning of the string).</p>
      <p className='text-justify p-2 pt-4'>If you omit the end index, Python assumes it as the length of the string (the end of the string).</p>
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>3.Negative Indices:</b></p>
      <p className='text-justify p-2 pt-4'>You can use negative indices to slice a string from the end.</p>
      <p className='text-justify p-2 pt-4'>-1 represents the last character of the string, -2 represents the second-to-last character, and so on.</p>
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>4.Step Size:</b></p>
      <p className='text-justify p-2 pt-4'>The step parameter allows you to specify the number of characters to skip between each character in the slice.</p>
      <p className='text-justify p-2 pt-4'>A positive step value extracts characters from left to right, while a negative step value extracts characters from right to left.</p>
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>5.Slicing with Variables:</b></p>
      <p className='text-justify p-2 pt-4'>You can use variables to specify the start, end, and step indices for slicing.</p>
              <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>Slicing allows you to extract substrings from a larger string, which is useful for manipulating and processing specific parts of the text.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Modify Strings:</h4>
      <p className='text-justify p-2 pt-4'> In Python, strings are immutable, which means you cannot change individual characters in a string directly. However, you can perform various operations to create new modified strings. Here are some ways to modify strings:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.Concatenation:</b></p>
      <p className='text-justify p-2 pt-4'> You can concatenate (join) two or more strings together using the + operator.</p>
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>2.String Methods:</b></p>
      <p className='text-justify p-2 pt-4'>Python provides several built-in string methods that allow you to modify strings. Here are some commonly used methods:</p>
              <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'> <b>3.String Formatting:</b></p>
      <p className='text-justify p-2 pt-4'>String formatting allows you to insert values into a string dynamically. You can use the % operator, the format() method, or f-strings (formatted string literals) to achieve this.</p>
              <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'> <b>4.Slicing and Reassignment:</b></p>
      <p className='text-justify p-2 pt-4'>Although you cannot modify individual characters, you can slice a string and assign the modified slice to a new variable.</p>
              <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>It's important to note that when modifying strings, the original string remains unchanged, and the modifications result in new string objects. Therefore, you need to assign the modified string to a new variable to store the changes.</p>
      <p className='text-justify p-2 pt-4'>By utilizing concatenation, string methods, formatting, and slicing techniques, you can effectively modify and manipulate strings in Python to suit your specific requirements.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python String Concatenation</h4>
      <p className='text-justify p-2 pt-4'> In Python, string concatenation refers to the process of combining two or more strings to create a single string. There are several ways to perform string concatenation:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.Using the + Operator:</b></p>
      <p className='text-justify p-2 pt-4'> You can use the + operator to concatenate strings together. When the + operator is used between two strings, it joins them into a single string.</p>
              <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>2.Using the += Operator:</b></p>
      <p className='text-justify p-2 pt-4'>The += operator is a shorthand operator that combines the concatenation and assignment operations. It appends the second string to the end of the first string and assigns the result back to the first string variable.</p>
              <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'> <b>3.Using the join() Method:</b></p>
      <p className='text-justify p-2 pt-4'>The join() method is a powerful way to concatenate multiple strings stored in a list or iterable. It takes an iterable as an argument and joins its elements into a single string using the specified string as a separator.</p>
              <CodeHighlighter>
                {codeString16} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>4.Using f-strings (formatted string literals):</b></p>
      <p className='text-justify p-2 pt-4'>f-strings allow you to insert variables directly into a string using curly braces {}. When an f-string is prefixed with an f, Python evaluates the expressions inside the curly braces and replaces them with their values.</p>
              <CodeHighlighter>
                {codeString17} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>String concatenation is a fundamental operation when working with text data. It allows you to combine strings in various ways, such as joining words, creating sentences, or constructing more complex data structures. By understanding and utilizing the different methods of string concatenation in Python, you can effectively manipulate and create meaningful strings in your programs.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Format - Strings</h4>
      <p className='text-justify p-2 pt-4'> String formatting in Python allows you to insert values into a string dynamically. It helps create more readable and flexible output by combining text and variables. There are multiple approaches for string formatting:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.Using the % Operator (Old Style):</b></p>
      <p className='text-justify p-2 pt-4'> The % operator allows you to format strings using placeholders %s for strings, %d for integers, %f for floating-point numbers, and other format specifiers. You provide the values to be inserted into the placeholders after the % operator.</p>
              <CodeHighlighter>
                {codeString18} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>2.Using the format() Method:</b></p>
      <p className='text-justify p-2 pt-4'>The format() method provides a more versatile way of string formatting. You can use curly braces {} as placeholders, and pass the values to be inserted into the placeholders as arguments to the format() method.</p>
              <CodeHighlighter>
                {codeString19} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'> <b>3.Using f-Strings (Formatted String Literals):</b></p>
      <p className='text-justify p-2 pt-4'>f-Strings provide a concise and intuitive way of string formatting introduced in Python 3.6+. You can include expressions inside curly braces {} within an f-string, and Python evaluates the expressions and replaces them with their values.</p>
              <CodeHighlighter>
                {codeString20} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>String formatting allows you to combine static text and dynamic values in a readable and flexible manner. It's important to choose the appropriate formatting method based on your Python version and personal preference.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Escape Characters:</h4>
      <p className='text-justify p-2 pt-4'> In Python, escape characters are special characters that are used to represent certain non-printable or special characters within a string. They are preceded by a backslash (\). Here are some commonly used escape characters:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.Newline (\n):</b></p>
      <p className='text-justify p-2 pt-4'> The newline escape character is used to insert a line break in a string.</p>
              <CodeHighlighter>
                {codeString21} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'> <b>2.Tab (\t):</b></p>
      <p className='text-justify p-2 pt-4'> The tab escape character is used to insert a horizontal tab in a string.</p>
              <CodeHighlighter>
                {codeString22} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'> <b>3.Backslash (\\):</b></p>
      <p className='text-justify p-2 pt-4'> The backslash escape character is used to include a literal backslash in a string.</p>
              <CodeHighlighter>
                {codeString23} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>4.Single Quote (\') and Double Quote (\"):</b></p>
      <p className='text-justify p-2 pt-4'> The single quote escape character is used to include a single quote within a single-quoted string.</p>
      <p className='text-justify p-2 pt-4'>The double quote escape character is used to include a double quote within a double-quoted string.</p>    
              <CodeHighlighter>
                {codeString24} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'> <b>5.Unicode Character Escape (\u and \U):</b></p>
      <p className='text-justify p-2 pt-4'> The Unicode character escape allows you to include Unicode characters in a string by specifying their hexadecimal value.</p>
              <CodeHighlighter>
                {codeString25} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>6.Raw String (r):</b></p>
      <p className='text-justify p-2 pt-4'> The raw string prefix r is used to create a raw string that treats backslashes as literal characters, ignoring escape characters.</p>
              <CodeHighlighter>
                {codeString26} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>Escape characters are useful when you need to include special characters or control the formatting of strings. By understanding and utilizing escape characters in Python, you can create strings that contain a wide range of characters and formatting options.</p>
     

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python String Methods</h4>
      <p className='text-justify p-2 pt-4'>Python provides a rich set of built-in string methods that allow you to manipulate and perform various operations on strings. Here are some commonly used string methods:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1.upper():</b></p>
      <p className='text-justify p-2 pt-4'> The upper() method returns a new string with all characters converted to uppercase.</p>
              <CodeHighlighter>
                {codeString27} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>2.lower():</b></p>
      <p className='text-justify p-2 pt-4'> The lower() method returns a new string with all characters converted to lowercase.</p>
              <CodeHighlighter>
                {codeString28} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>3.strip():</b></p>
      <p className='text-justify p-2 pt-4'> The strip() method returns a new string with leading and trailing whitespace characters removed.</p>
              <CodeHighlighter>
                {codeString29} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'> <b>4.replace():</b></p>
      <p className='text-justify p-2 pt-4'> The replace() method returns a new string with all occurrences of a specified substring replaced with another substring.</p>
              <CodeHighlighter>
                {codeString30} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>5.split():</b></p>
      <p className='text-justify p-2 pt-4'> The split() method splits a string into a list of substrings based on a specified delimiter. By default, the delimiter is a space.</p>
              <CodeHighlighter>
                {codeString31} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>6.join():</b></p>
      <p className='text-justify p-2 pt-4'> The join() method joins the elements of an iterable (such as a list) into a single string, using the specified string as a separator.</p>
              <CodeHighlighter>
                {codeString32} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>6.join():</b></p>
      <p className='text-justify p-2 pt-4'> The join() method joins the elements of an iterable (such as a list) into a single string, using the specified string as a separator.</p>
              <CodeHighlighter>
                {codeString32} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>These are just a few examples of the many string methods available in Python. Each method serves a specific purpose and allows you to manipulate strings in various ways.</p>
      
            </article>
        </section>
    </div>
  )
}

export default PythonStrings