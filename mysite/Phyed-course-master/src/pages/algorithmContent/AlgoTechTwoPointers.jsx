import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const AlgoTechTwoPointers = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  using namespace std;

  bool isExpensesWithinBudget(vector<int>& expenses, int budget) {
    int left = 0;               // Left pointer representing the start of the window
    int right = 0;              // Right pointer representing the end of the window
    int sum = 0;                // Sum of expenses within the window

    while (right < expenses.size()) {
        sum += expenses[right];

        while (sum > budget) {
            sum -= expenses[left];
            left++;
        }

        if (sum == budget) {
            // Found a consecutive range of days with expenses equal to the budget
            return true;
        }

        right++;
    }

    // No consecutive range of days with expenses equal to the budget found
    return false;
  }

  int main() {
    vector<int> expenses = {12, 5, 8, 3, 10, 6};    // Expenses for each day
    int budget = 21;                               // Budget for the consecutive range of days

    bool result = isExpensesWithinBudget(expenses, budget);

    if (result) {
        cout << "There exists a consecutive range of days with expenses equal to the budget." << endl;
    } else {
        cout << "No consecutive range of days with expenses equal to the budget found." << endl;
    }

    return 0;
  } 
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            1. Two Pointers :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Two pointers is a popular algorithmic technique that involves using
            two pointers to traverse an array or a sequence in a specific
            manner. It is commonly used to solve problems that involve
            searching, finding pairs, or maintaining a specific window of
            elements. Here's a detailed explanation of the two pointers
            technique in C++ with a real-life related example:
          </p>

          <p className="text-justify pt-4">
            The Two Pointers Technique: The two pointers technique involves
            using two pointers that traverse the array from different ends or
            start from different positions to solve a given problem efficiently.
            By moving the pointers strategically based on certain conditions, we
            can solve various problems in an optimized manner.
          </p>

          <p className="text-justify pt-4">
            Example Scenario: Let's consider a real-life related example
            scenario to explain the two pointers technique. Imagine a student
            who is managing their expenses over a period of time. They have a
            list of expenses for each day, and they want to find a consecutive
            range of days where their expenses were within a specific budget.
          </p>

          <p className="text-justify pt-4">
            C++ Implementation: Here's a sample implementation in C++ that
            demonstrates the two pointers technique to solve the student's
            expense tracking problem:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify pt-4 font-bold">Explanation:</p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              In this example, we have an array{" "}
              <span className="code-text italic text-sm">expenses </span>{" "}
              representing the expenses for each day, and an integer{" "}
              <span className="code-text italic text-sm"> budget</span>{" "}
              representing the budget for the consecutive range of days.
            </li>
            <li className="pt-4">
              The{" "}
              <span className="code-text italic text-sm">
                isExpensesWithinBudget
              </span>{" "}
              function takes the{" "}
              <span className="code-text italic text-sm">expenses </span> vector
              and
              <span className="code-text italic text-sm"> budget</span> as
              inputs and returns a boolean value indicating whether there exists
              a consecutive range of days with expenses equal to the budget.
            </li>
            <li className="pt-4">
              The two pointers,{" "}
              <span className="code-text italic text-sm"> left</span> and{" "}
              <span className="code-text italic text-sm"> right</span>, are
              initially set to 0. They represent the start and end of the
              window.
            </li>
            <li className="pt-4">
              We maintain a{" "}
              <span className="code-text italic text-sm">sum</span> variable to
              keep track of the total expenses within the window.
            </li>
            <li className="pt-4">
              The algorithm iterates through the{" "}
              <span className="code-text italic text-sm"> expenses</span> array
              using the <span className="code-text italic text-sm"> right</span>
              pointer. It adds the expenses at the current position to the{" "}
              <span className="code-text italic text-sm"> sum</span>.
            </li>
            <li className="pt-4">
              If the <span className="code-text italic text-sm"> sum</span>{" "}
              exceeds the{" "}
              <span className="code-text italic text-sm"> budget</span> , we
              move the <span className="code-text italic text-sm"> left</span>{" "}
              pointer and subtract the expenses at that position from the{" "}
              <span className="code-text italic text-sm"> sum</span> . This way,
              we shrink the window from the left until the{" "}
              <span className="code-text italic text-sm">sum </span> becomes
              less than or equal to the{" "}
              <span className="code-text italic text-sm"> budget</span> .
            </li>
            <li className="pt-4">
              If the <span className="code-text italic text-sm"> sum</span> .
              becomes equal to the{" "}
              <span className="code-text italic text-sm"> budget</span>, it
              means we have found a consecutive range of days with expenses
              equal to the budget, and we return{" "}
              <span className="code-text italic text-sm"> true</span> .
            </li>
            <li className="pt-4">
              If the <span className="code-text italic text-sm">right </span>{" "}
              pointer reaches the end of the array and no consecutive range is
              found, we return{" "}
              <span className="code-text italic text-sm"> false</span> .
            </li>
            <li className="pt-4">
              The <span className="code-text italic text-sm"> main</span>{" "}
              function demonstrates the usage of the
              <span className="code-text italic text-sm">
                {" "}
                isExpensesWithinBudget
              </span>{" "}
              function. It creates a vector of expenses and a budget, calls the
              function, and prints the result accordingly.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Real-life related example: In the student expense tracking scenario,
            the two pointers technique is used to find a consecutive range of
            days where the student's expenses match the budget. By utilizing the
            two pointers to maintain a window of expenses and adjusting the
            window based on the conditions, we efficiently determine whether
            such a range exists or not.
          </p>
          <p className="text-justify pt-4">
            Complexity: The time complexity of the two pointers technique
            depends on the specific problem being solved. In this example, the
            time complexity is O(N), where N is the number of days/expenses, as
            we iterate through the expenses array once.
          </p>
          <p className="text-justify pt-4">
            The space complexity is O(1) as we only use a few additional
            variables that don't depend on the size of the input.
          </p>
          <br></br>
        </article>
      </section>
    </div>
  );
};

export default AlgoTechTwoPointers;
// Lecture 34.2
