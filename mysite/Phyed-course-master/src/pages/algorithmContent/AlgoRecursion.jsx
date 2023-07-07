import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const AlgoRecursion = () => {
  const codeString = `
  #include <iostream>
  int factorial(int n) {
    // Base case: factorial of 0 or 1 is 1
    if (n == 0 || n == 1) {
      return 1;
  }
    // Recursive case: factorial of n is n multiplied by factorial of n-1
    else {
      return n * factorial(n - 1);
    }
  }
  int main() {
    int num = 5;
    int result = factorial(num);
    std::cout << "Factorial of " << num << " is: " << result <<
    std::endl;
    return 0;
  }
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Recursion :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Recursion is a programming concept where a function calls itself to
            solve a problem by breaking it down into smaller, simpler
            subproblems. It is a powerful technique used in many algorithms and
            can provide elegant solutions to a wide range of problems. Recursion
            involves two main components: the base case and the recursive case.
          </p>

          <p className="text-justify pt-4">
            The base case is the simplest form of the problem that can be
            directly solved without further recursion. It acts as the
            termination condition for the recursive calls, preventing an
            infinite loop. When the base case is reached, the recursion stops,
            and the function returns a result.
          </p>

          <p className="text-justify pt-4">
            The recursive case defines how the problem is broken down into
            smaller subproblems. In the recursive case, the function calls
            itself one or more times with modified parameters, moving closer to
            the base case with each recursive call. The results of the recursive
            calls are then combined to solve the original problem.
          </p>

          <p className="text-justify pt-4">
            Here's an example of recursion in C++:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this example, we define a function{" "}
            <span className="code-text italic text-sm">subsetSum</span>{" "}
            factorial that calculates the factorial of a given number using
            recursion. The factorial of a number n is the product of all
            positive integers from 1 to n.
          </p>
          <p className="text-justify pt-4">
            In the <span className="code-text italic text-sm">factorial</span>{" "}
            function, we have a base case when{" "}
            <span className="code-text italic text-sm">n </span> is{" "}
            <span className="code-text italic text-sm"> 0</span> or{" "}
            <span className="code-text italic text-sm"> 1</span>. In this case,
            the function returns 1 as the factorial of{" "}
            <span className="code-text italic text-sm"> 0</span> or{" "}
            <span className="code-text italic text-sm">1</span> is{" "}
            <span className="code-text italic text-sm">1</span> .
          </p>
          <p className="text-justify pt-4">
            For any other value of{" "}
            <span className="code-text italic text-sm">n</span> , we have a
            recursive case. The function calls itself with the parameter{" "}
            <span className="code-text italic text-sm">n-1</span> and multiplies
            it by <span className="code-text italic text-sm">n</span> . This
            recursive call continues until the base case is reached, and the
            function returns the final result.
          </p>
          <p className="text-justify pt-4">
            In the <span className="code-text italic text-sm">main </span>{" "}
            function, we call the{" "}
            <span className="code-text italic text-sm">factorial</span> function
            with <span className="code-text italic text-sm"> num </span>equal to{" "}
            <span className="code-text italic text-sm"> 5 </span>and store the
            result in the{" "}
            <span className="code-text italic text-sm">result</span> variable.
            We then print the factorial of{" "}
            <span className="code-text italic text-sm"> num</span>.
          </p>
          <p className="text-justify pt-4">
            Recursion finds applications in many algorithms, such as tree
            traversals, graph traversals, sorting algorithms like quicksort and
            mergesort, and many more. By understanding recursion, students can
            grasp the power of breaking down complex problems into simpler
            subproblems and appreciate its usefulness in solving various
            real-life scenarios.
          </p>
        </article>
      </section>
    </div>
  );
};

export default AlgoRecursion;
