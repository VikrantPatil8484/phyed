import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusFunctionReturn = () => {
  
  const codeString = `
  int addNumbers(int a, int b) {
    int sum = a + b;
    return sum; // The result is returned using the "return" keyword
  }
  `
  const codeString1 = `
    #include <iostream>

    int addNumbers(int a, int b); // Function declaration
    
    int main() {
        int num1 = 5;
        int num2 = 3;
        int result = addNumbers(num1, num2); // The return value is stored in the variable "result"
    
        std::cout << "The sum is: " << result << std::endl;
    
        return 0;
    }
    
    int addNumbers(int a, int b) {
        int sum = a + b;
        return sum;
    }
  `
  const codeString2 = `
    #include <iostream>

    // Function to calculate the area of a rectangle
    int calculateArea(int length, int width) {
        return length * width;
    }
    
    // Function to calculate the area of a circle
    double calculateArea(double radius) {
        return 3.14159 * radius * radius;
    }
    
    int main() {
        int rectangleLength = 5;
        int rectangleWidth = 3;
        double circleRadius = 2.5;
    
        int rectangleArea = calculateArea(rectangleLength, rectangleWidth);
        double circleArea = calculateArea(circleRadius);
    
        std::cout << "Area of rectangle: " << rectangleArea << std::endl;
        std::cout << "Area of circle: " << circleArea << std::endl;
    
        return 0;
    }
  `
  const codeString3 = `
    Area of rectangle: 15
    Area of circle: 19.6349
  `

  return (
    // lecture 15
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Return Values</h4>
          <ul className='list-disc px-10'>
            <li className='pt-4'>Function return type</li>
            <li className='pt-2'>Returning values from a function</li>
          </ul>
          <p className='text-justify pt-4'>In C++, functions can perform specific tasks and sometimes produce a result or value as output. This output is called a return value. Just like a vending machine takes your money and gives you a chocolate bar, a function takes some input and gives you a result.</p>
          <p className='text-justify pt-4'>Let's imagine we have a function called "addNumbers" that adds two numbers together and returns the result. Here's how it looks:</p>
          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter>
          <p className='text-justify pt-4'>In this example, the function addNumbers takes two integers (a and b) as input. It adds them together and stores the result in a variable called sum. Finally, it uses the return keyword to send the value of sum back to the place where the function was called.</p>
          <p className='text-justify pt-4'>Now, let's see how we can use this function and understand the concept of return values.</p>
          <CodeHighlighter>
            {codeString1}
          </CodeHighlighter>
          <p className='text-justify pt-4'>In this example, we first declare the addNumbers function at the beginning, so the compiler knows that it exists. Then, in the main function, we declare two variables num1 and num2 and assign them the values 5 and 3, respectively.</p>
          <p className='text-justify pt-4'>Next, we call the addNumbers function with num1 and num2 as arguments, and the return value is stored in a variable called result. The value returned by the addNumbers function (the sum of num1 and num2) is assigned to the result.</p>
          <p className='text-justify pt-4'>Finally, we print the result using <span className='code-text italic text-sm'>std::cout</span> to display the message "The sum is: " followed by the value of the result.</p>
          <p className='text-justify pt-4'>When we run this program, it will output: <span className='code-text italic text-sm'>"The sum is: 8".</span> </p>
          <p className='text-justify pt-4'>So, in summary, return values allow functions to provide results or outputs that can be used in other parts of the program. It's like getting something back from the function after it performs its task, just like a vending machine giving you a chocolate bar after you insert money.</p>
                      
        </article>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Function Overloading</h4>
          <ul className='list-disc px-10'>
            <li className='pt-4'>Overloading functions with different parameters</li>
            {/* <li className='pt-2'>Returning values from a function</li> */}
          </ul>
          <p className='text-justify pt-4'>Function overloading is a concept in C++ that allows us to define multiple functions with the same name but different parameters. It's like having different versions of a game, where each version has slightly different rules but shares the same name.</p>
          <p className='text-justify pt-4'>Let's imagine we want to create a function called <span className='code-text italic text-sm'>"calculateArea"</span>  that calculates the area of different shapes. We can use function overloading to define multiple versions of this function, each tailored to a specific shape.</p>
          <CodeHighlighter>
            {codeString2} 
          </CodeHighlighter>
          <p className='text-justify pt-4'>In this example, we have two versions of the <span className='code-text italic text-sm'>calculateArea</span> function. The first version takes two integers <span className='code-text italic text-sm'>(length and width)</span> as parameters and calculates the area of a rectangle by multiplying the length and width. The second version takes a double <span className='code-text italic text-sm'>(radius)</span> as a parameter and calculates the area of a circle using the formula <span className='code-text italic text-sm'> π * radius * radius</span>.</p>
          <p className='text-justify pt-4'>In the main function, we declare variables <span className='code-text italic text-sm'>rectangleLength, rectangleWidth, and circleRadius</span>  to hold the dimensions of a rectangle and the radius of a circle, respectively.</p>
          <p className='text-justify pt-4'>We then call the calculateArea function twice: once with the rectangle dimensions and once with the circle radius. The return values of these function calls are stored in rectangleArea and circleArea, respectively.</p>
          <p className='text-justify pt-4'>Finally, we use <span className='code-text italic text-sm'>std::cout</span>  to display the calculated areas of the rectangle and the circle.</p>
          <p className='text-justify pt-4'>When we run this program, it will output:</p>
          <CodeHighlighter>
            {codeString3} 
          </CodeHighlighter>
          <p className='text-justify pt-4'>So, in summary, function overloading allows us to create multiple functions with the same name but different parameters. It helps us write more readable and organized code by grouping related functionality under the same function name. Just like different versions of a game have different rules but the same name, function overloading allows us to define different versions of a function with different parameter types or numbers.</p>
          
        </article>
      </section>
    </div>
  )
}

export default CplusFunctionReturn