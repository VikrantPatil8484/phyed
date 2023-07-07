import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const DynamicProgTopDown = () => {

  const codeString = `
  #include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1)
        return n;

    int prev = 0;
    int curr = 1;

    for (int i = 2; i <= n; i++) {
        int temp = curr;
        curr = prev + curr;
        prev = temp;
    }

    return curr;
}

int main() {
    int n = 10;
    int fib = fibonacci(n);
    cout << "Fibonacci(" << n << ") = " << fib << endl;
    return 0;
}
  `
  const codeString1 = `
  #include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;

    int result = 1;
    for (int i = 2; i <= n; i++)
        result *= i;

    return result;
}

int main() {
    int n = 5;
    int fact = factorial(n);
    cout << "Factorial(" << n << ") = " << fact << endl;
    return 0;
}
  `
  return (
    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Bottom-Up Approach (Iterative Approach)</h4>
        <p className='text-justify pt-4'>
        The bottom-up approach, also known as the iterative approach, is a problem-solving technique where the solution is built iteratively from the simplest case to the desired solution. This approach avoids recursion and uses loops to calculate and store the solutions of subproblems.
        </p>
        <br></br>
        <p className='pt-4'>Here are a few examples of the bottom-up approach with code in C++, along with their time complexity and space complexity:</p>
        <p className='p-6 pt-5'>
          <strong>1.Fibonacci Series: </strong> In this example, we calculate the Fibonacci series iteratively using the bottom-up approach.
        </p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='pt-1'>Time Complexity: O(n) Space Complexity: O(1)</p>
        <p className='pt-5 p-6'><strong>2. Factorial:</strong> In this example, we calculate the factorial of a number iteratively using the bottom-up approach.</p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        <p className='pt-4'>Time Complexity: O(n) Space Complexity: O(1)</p>
      </article>
    </section>
    </div>

  )
}

export default DynamicProgTopDown