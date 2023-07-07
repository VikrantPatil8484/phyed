import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const DynamicProgMemoi = () => {
const codeString = `
#include <iostream>
#include <vector>

std::vector<int> memo;

int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    if (memo[n] != -1) {
        return memo[n];
    }
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}

int main() {
    int n = 6;
    memo.resize(n + 1, -1);
    int result = fibonacci(n);
    std::cout << "The " << n << "th Fibonacci number is: " << result << std::endl;
    return 0;
}  
  `
  const codeString1 = `
  The 6th Fibonacci number is: 8
  `
  const codeString2 = `
  #include <iostream>
#include <vector>

int fibonacci(int n) {
    std::vector<int> table(n + 1, 0);
    table[0] = 0;
    table[1] = 1;
    for (int i = 2; i <= n; ++i) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}

int main() {
    int n = 6;
    int result = fibonacci(n);
    std::cout << "The " << n << "th Fibonacci number is: " << result << std::endl;
    return 0;
}
  `
  const codeString3 = `
  The 6th Fibonacci number is: 8
  `


 
  return (
    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Memoization and Tabulation</h4>
        <p className='text-justify pt-4'>
          Memoization and tabulation are two common techniques used in dynamic programming to optimise the computation of solutions for problems that exhibit overlapping subproblems. Let's explore these techniques with an example problem, and I'll provide code examples in C++ for both approaches.
        </p>
        <br></br>
        <p className='font-bold'>Problem : Fibonacci Numbers</p>
        <p className='p-4 pt-2'>We will use the Fibonacci sequence as an example to demonstrate memoization and tabulation.</p>
        <p className='p-4 pt-2 font-bold'>1. Memoization</p>
        <p className='p-8 pt-0.5'>Memoization involves storing the results of expensive function calls and reusing them when the same inputs occur again. In the case of Fibonacci numbers, we can store the previously calculated Fibonacci values in an array to avoid redundant computations.</p>
        <p className=''>Here's an example code in C++ that calculates the nth Fibonacci number using memoization:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='pt-2'>Output</p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        <br></br>
        <p className='pt-4'>In the code, we use the memo vector to store the computed Fibonacci numbers. Before computing the nth Fibonacci number, we check if it has already been computed and stored in memo. If so, we directly return the value. Otherwise, we calculate it recursively, store it in memo for future use, and return the computed value.</p>
        <ul className='list-disc px-10'>
          <li className='pt-4 p-4'><strong>Time Complexity:</strong> The time complexity of memoization depends on the number of unique subproblems that need to be solved. If there are n unique subproblems, and each subproblem takes O(1) time to solve (assuming constant time for memoization table lookup), then the overall time complexity is O(n). However, if there are overlapping subproblems and each subproblem is solved only once, the time complexity can be significantly reduced to O(m), where m is the number of distinct subproblems.</li>
          <li className='p-4 pt-0.5'><strong>Space Complexity:</strong>The space complexity of memoization is determined by the size of the memoization table or cache. If there are n subproblems to be memoized, the space complexity is typically O(n) to store the results of these subproblems. However, in some cases, the space complexity may be reduced to O(m), where m is the number of distinct subproblems, if the memoization table only stores the necessary subproblem results.</li>
        </ul>
        <p className='p-4 pt-2 font-bold'>2. Tabulation</p>
        <p className='p-8 pt-0.5'>Tabulation involves creating a table (usually an array) and filling it iteratively by solving the subproblems in a bottom-up manner. Each entry in the table represents the solution to a subproblem.</p>
        <p>Here's an example code in C++ that calculates the nth Fibonacci number using tabulation:</p>
        <CodeHighlighter>
          {codeString2}
        </CodeHighlighter>
        <p className='pt-4'>Output:</p>
        <CodeHighlighter>
          {codeString3}
        </CodeHighlighter>
        <p className='pt-4'>In this code, we create a table and fill it iteratively from the base cases (table[0] = 0 and table[1] = 1) up to the nth Fibonacci number. Each entry in the table represents the Fibonacci number for that index. By iterating and filling the table in a bottom-up manner, we avoid redundant computations and obtain the result efficiently.</p>
        <ul className='list-disc px-10'>
          <li className='pt-4 p-4'><strong>Time Complexity:</strong> The time complexity of tabulation is determined by the number of subproblems that need to be solved and the time required to solve each subproblem. If there are n subproblems and each subproblem takes O(1) time, the overall time complexity is O(n). The tabulation approach usually involves iterating over the subproblems in a bottom-up manner, so the time complexity is typically linear with respect to the number of subproblems.</li>
          <li className='p-4 pt-0.5'><strong>Space Complexity:</strong>The space complexity of tabulation is determined by the size of the table or array used to store the results of subproblems. If there are n subproblems to be solved, the space complexity is typically O(n) to store the results. Each entry in the table corresponds to a subproblem, so the space complexity is directly proportional to the number of subproblems.</li>
        </ul>
        <p className='pt-4'>Both memoization and tabulation offer ways to optimise dynamic programming algorithms by avoiding redundant computations. Memoization is typically used in a top-down recursive approach, while tabulation is used in a bottom-up iterative approach. Both techniques lead to significant performance improvements for problems with overlapping subproblems.</p>

      </article>
    </section>
    </div>
  )
}

export default DynamicProgMemoi
//dynamic Programs memoization