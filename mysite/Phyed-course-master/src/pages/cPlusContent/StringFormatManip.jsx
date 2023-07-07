import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const StringFormatManip = () => {


  const codeString = `
#include <iostream> 
#include <cstdio>

int main() {
    int intValue = 123;
    float floatValue = 3.14;

    std::printf("Integer: %d, Float: %.2f\n", intValue, floatValue);

    return 0;
}
`

  const codeString1 = `
"Integer: 123, Float: 3.14"
`
  const codeString2 = `
#include <iostream>
#include <iomanip>

int main() {
    int intValue = 123;
    float floatValue = 3.14;

    std::cout << "Integer: " << std::setw(5) << std::setfill('0') << intValue << std::endl;
    std::cout << "Float: " << std::fixed << std::setprecision(2) << std::setw(8) << std::setfill('*') << floatValue << std::endl;

    return 0;
}
`
  const codeString3 = `
"Integer: 00123"
"Float: **3.14"
`
  return (
    // Lecture 25.2
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>

          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Formatting strings and Manipulating Whitespaces</h4>
          <br></br>
          <p className='text-justify pt-4 font-bold'>Formatting strings using printf()-style format specifiers:</p><br></br>
          <p className='text-justify pt-4'>In C++, you can format strings using printf()-style format specifiers by using the std::sprintf() or std::snprintf() functions from the [cstdio] header. These functions allow you to construct a formatted string by specifying placeholders and providing corresponding values.</p>
          <p>Here's an example:</p><br></br>
          <CodeHighlighter>
            {codeString}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>The output will be:</p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>Note that in modern C++, it is generally recommended to use the std::cout stream and its formatting capabilities instead of printf().<br></br>
            Manipulating whitespaces with setw(), setfill(), etc.:
            The [iomanip] library in C++ provides several functions to manipulate whitespaces in formatted output. Here are a few commonly used functions:
            <br></br>
            std::setw(): Sets the width of the next output field.
            std::setfill(): Sets the fill character for the next output field.</p>
          <br></br>
          <p className='text-justify pt-4'>Here is an example:</p>
          <CodeHighlighter>
            {codeString2}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>The output will be:</p>
          <CodeHighlighter>
            {codeString3}
          </CodeHighlighter>
          <br></br>
          <p className='text-justify pt-4'>In this example, std::setw() is used to set the width of the output field, std::setfill() is used to set the fill character for the field, and std::setprecision() is used to set the precision (number of decimal places) for the floating-point value.</p>
          <br></br>
          <p className='text-justify pt-4'>Note that the std::fixed manipulator is used to enforce fixed-point notation for the floating-point value.</p>
          <br></br>
          <p className='text-justify pt-4'>These examples demonstrate string formatting and manipulating whitespaces in C++. You can use these functions to customize the appearance and layout of your output based on your specific requirements.</p>

        </article>
      </section>
    </div>
  )
}

export default StringFormatManip