import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const NPCompletenessAlgo = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  using namespace std;
  bool subsetSum(vector<int>& nums, int target) {
    int n = nums.size();
    vector<vector<bool>> dp(n + 1, vector<bool>(target + 1, false));
    // Base case: If the target sum is 0, an empty subset is the solution
    for (int i = 0; i <= n; i++) {
      dp[i][0] = true;
    }
  // Dynamic programming approach to fill the table
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= target; j++) {
        if (j < nums[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
        }
      }
    }
    return dp[n][target];
}
  int main() {
  vector<int> nums = {3, 1, 5, 9, 12};
  int target = 8;
  bool result = subsetSum(nums, target);
  if (result) {
    cout << "There exists a subset that sums up to the target." <<
    endl;
  } else {
  cout << "No subset sums up to the target." << endl;
  }
  return 0;
}
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            NP-completeness Algorithms :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            NP-completeness is a concept in computer science that refers to a
            class of problems that are difficult to solve efficiently. These
            problems belong to the complexity class NP (nondeterministic
            polynomial time) and are considered some of the most challenging
            computational problems. While it's not possible to provide a
            specific example in C++ due to the nature of NP-complete problems, I
            can explain NP-completeness and provide a relatable real-life
            example.
          </p>

          <p className="text-justify pt-4">
            NP-Completeness: NP-completeness is a property of computational
            problems that indicates they are both in the class NP and difficult
            to solve. NP stands for nondeterministic polynomial time, which
            refers to problems that can be verified in polynomial time, given a
            potential solution. However, finding an actual solution for these
            problems in polynomial time remains an open question.
          </p>

          <p className="text-justify pt-4">
            In 1971, Stephen Cook introduced the concept of NP-completeness and
            proved the Cook-Levin theorem, showing that the Boolean
            satisfiability problem (SAT) is NP-complete. Since then, many other
            problems have been proven to be NP-complete by reducing them to SAT
            or other known NP-complete problems.
          </p>

          <p className="text-justify pt-4">
            Real-Life Example: While it's challenging to provide a specific
            NP-complete problem example in C++, here's a real-life scenario that
            helps illustrate NP-completeness:
          </p>

          <p className="text-justify pt-4">
            Consider a student scheduling problem. Imagine a student who needs
            to select a set of courses from a university's course catalog for an
            upcoming semester. Each course has prerequisites, time slots, and
            limited seat availability. The student wants to find an optimal
            combination of courses that satisfies all prerequisites, does not
            overlap in time slots, and maximizes the number of courses taken.
          </p>
          <p className="text-justify pt-4">
            This problem can be modeled as an NP-complete problem because::
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              The student needs to select a combination of courses (solution)
              that satisfies multiple constraints (prerequisites, time slots,
              seat availability).
            </li>
            <li className="pt-4">
              Verifying a solution is relatively easy, as we can check if all
              prerequisites are satisfied, no time conflicts exist, and the
              number of courses taken is maximum.
            </li>
            <li className="pt-4">
              However, finding the optimal combination that satisfies all
              constraints is challenging, as the search space grows
              exponentially with the number of courses.
            </li>
          </ul>
          <p className="text-justify pt-4">
            While the specific algorithm to solve the NP-complete student
            scheduling problem efficiently remains an open question, various
            heuristics, approximation algorithms, and optimization techniques
            are commonly employed to find reasonably good solutions within a
            reasonable time frame.
          </p>
          <p className="text-justify pt-4">
            In summary, NP-completeness is a concept that defines a class of
            computationally challenging problems that belong to the complexity
            class NP. While providing a concrete example in C++ is difficult due
            to the nature of NP-complete problems, illustrating the concept with
            a real-life scenario, such as the student scheduling problem, can
            help students understand the concept and its relevance in solving
            complex problems efficiently.
          </p>
          <br></br>

          <p className="text-justify pt-4">
            I can provide an example of a problem that is widely known to be
            NP-complete and show how it can be represented in code. One such
            problem is the Subset Sum problem.
          </p>

          <p className="text-justify pt-4">
            The Subset Sum problem is defined as follows: Given a set of
            integers and a target sum, determine whether there exists a subset
            of the integers that sums up to the target sum.
          </p>

          <p className="text-justify pt-4">
            Here's an example of how you can represent the Subset Sum problem in
            C++:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this code, the{" "}
            <span className="code-text italic text-sm">subsetSum</span> function
            takes a vector of integers{" "}
            <span className="code-text italic text-sm">nums</span>
            and a target sum{" "}
            <span className="code-text italic text-sm">target</span> as inputs.
            It uses a dynamic programming approach to solve the Subset Sum
            problem.
          </p>
          <p className="text-justify pt-4">
            The code initializes a 2D boolean table{" "}
            <span className="code-text italic text-sm">dp</span> with dimensions
            (n+1) x (target+1), where n is the size of{" "}
            <span className="code-text italic text-sm">nums</span>. Each cell{" "}
            <span className="code-text italic text-sm">dp[i][j]</span>
            represents whether there exists a subset of the first i elements in
            <span className="code-text italic text-sm">nums</span> that sums up
            to j.
          </p>

          <p className="text-justify pt-4">
            The code then fills the table using a bottom-up dynamic programming
            approach. It iterates through each element in{" "}
            <span className="code-text italic text-sm">nums</span> and each
            possible <span className="code-text italic text-sm">target</span>{" "}
            sum from 1 to target. The cell{" "}
            <span className="code-text italic text-sm">dp[i][j]</span> is filled
            based on whether including or excluding the current element{" "}
            <span className="code-text italic text-sm">nums[i-1]</span> can lead
            to a subset sum equal to j.
          </p>
          <p className="text-justify pt-4">
            Finally, the code returns the value of{" "}
            <span className="code-text italic text-sm">dp[n][target]</span>,
            which indicates whether there exists a subset of{" "}
            <span className="code-text italic text-sm">nums</span> that sums up
            to the target.
          </p>
          <p className="text-justify pt-4">
            Although the above code provides a solution to the Subset Sum
            problem, it's important to note that this problem is known to be
            NP-complete. This means that as the size of the input grows, the
            running time of the algorithm will also grow exponentially, making
            it impractical for large inputs.
          </p>
          {/* <br></br> */}
        </article>
      </section>
    </div>
  );
};

export default NPCompletenessAlgo;
