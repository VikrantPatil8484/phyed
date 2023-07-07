import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const DynamicTopDownRecursive = () => {
  const codeString = `
  #include <iostream>

// Function to calculate the factorial
int factorial(int n) {
    // Base case: factorial of 0 is 1
    if (n == 0) {
        return 1;
    }
    // Recursive case: calculate factorial of n by multiplying it with factorial(n-1)
    return n * factorial(n - 1);
}

int main() {
    int number;
    std::cout << "Enter a non-negative integer: ";
    std::cin >> number;
    
    // Calculate and display the factorial
    int result = factorial(number);
    std::cout << "Factorial of " << number << " is " << result << std::endl;
    
    return 0;
}
  `



  return (
    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Top-Down Approach (Recursive Approach)</h4>
        <p className='text-justify pt-4'>
        The top-down approach, also known as the recursive approach, is a problem-solving technique where you break down a complex problem into smaller subproblems and solve them recursively. It involves solving the problem at hand by dividing it into smaller instances of the same problem until reaching a base case, which is a trivial problem that can be solved directly.
        </p>
        <br></br>
        <p className=''>To illustrate this approach with a real-life example, let's consider the problem of calculating the factorial of a number. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.</p>
        <p className='pt-4'>We can solve this problem using a top-down approach in C++. Here's an example code that calculates the factorial recursively:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='pt-4'>In the above code, the factorial function takes an integer n as input. It checks for the base case when n is equal to 0 and returns 1. Otherwise, it recursively calls the factorial function with the argument n-1 and multiplies it with n. The recursive calls continue until reaching the base case.</p>
        <p className='pt-4'>This recursive approach breaks down the factorial calculation into smaller subproblems by reducing the value of n at each step. It simplifies the problem by reusing the solution to a smaller instance of the same problem. Eventually, the base case is reached, and the recursion "unwinds," combining the solutions of smaller subproblems to compute the factorial of the original number.</p>
        <p className='pt-4'>The time complexity of the top-down approach for calculating the factorial is O(n), where n is the input number. This is because the recursive function makes n recursive calls, each time reducing the value of n by 1, until reaching the base case where n is 0. Therefore, the number of recursive calls is directly proportional to n.</p>
        <p className='pt-4'>The space complexity of the top-down approach is O(n) as well. This is because each recursive call requires additional space on the call stack to store its local variables and return address. In this case, since the maximum depth of the recursion is n (when n is the input number), the space required on the call stack is proportional to n.</p>

      </article>
    </section>
    </div>
  )
}

export default DynamicTopDownRecursive