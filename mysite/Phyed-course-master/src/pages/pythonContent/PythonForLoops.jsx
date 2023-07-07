import React from 'react'
import CodeHighlighter from "../../components/CodeHighlighter";
//Lecture 
const PythonForLoops = () => {
  const codeString = `
  for item in sequence:
  # code to execute for each item
  `


    const codeString1 = `
    names = ["Alice", "Bob", "Charlie", "Dave"]

    for name in names:
        print("Hello, " + name + "!")
    
    print("All greetings sent.")
        
  `
    const codeString2 = `
    Hello, Alice!
    Hello, Bob!
    Hello, Charlie!
    Hello, Dave!
    All greetings sent.
  `;
  
  return (
    <div>
      <div className=''>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full"> Python For Loops:</h4>
          <p className="text-justify pt-4 font-bold">
          In Python, a for loop is used to iterate over a sequence (such as a list, tuple, string, or dictionary) or any iterable object. It allows you to repeatedly execute a block of code for each item in the sequence.
          The basic syntax of a for loop is as follows:
          </p>
          <br></br>
          <p>
           
          </p>
          <p>
            Here's how it works:
-             The for loop iterates over each item in the sequence.
            - On each iteration, the current item is assigned to the variable specified after the `for` keyword (in this example, `item`).
            - The code block indented under the for statement is executed for each item in the sequence.
            </p>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <br></br>
          <p>Let's consider a real-life example to illustrate the for loop. Suppose you want to implement a program that greets each person in a list of names.
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <br></br>
          <p className="text-justify pt-4">
          In this example, the `names` list contains several names. The for loop iterates over each name in the list. On each iteration, the current name is assigned to the `name` variable. Within the loop, the program prints a greeting message for each name. After the loop, the program prints "All greetings sent."
          </p>
          <p className="text-justify pt-4">
            Note that working with Unicode characters and handling different
            encodings can be complex. For advanced Unicode support and more
            comprehensive functionality, external libraries like ICU
            (International Components for Unicode) can be used.
          </p>
          <br></br>
          <p className="text-justify pt-4 font-bold">
          When you run this program, it will display the following output
          </p>
          <br></br>
          <p className="text-justify pt-4">
          <br></br>
          <CodeHighlighter>{codeString2}</CodeHighlighter>
          <br></br>
          The for loop allows you to iterate over a sequence of items and perform a specific action for each item. It is commonly used to iterate over lists, but it can also be used with other iterable objects like strings or dictionaries. For loops provide a convenient way to process each item in a sequence without explicitly managing indices or loop counters.
          <br></br>Here's an example that demonstrates string hashing using
            std::hash:
          </p>
          <p className="text-justify pt-4">
           In real-life scenarios, for loops can be used to iterate over collections of data, perform calculations on each element, process files, handle batches of items, and much more. They provide a powerful tool for automating repetitive tasks and efficiently working with sequences of data.
          </p>
        
        </article>
      </section>
    </div>
    </div>
  )
}

export default PythonForLoops