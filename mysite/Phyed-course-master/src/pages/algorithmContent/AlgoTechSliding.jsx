import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const AlgoTechSliding = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  using namespace std;
  
  int maxSubarraySum(vector<int>& scores, int k) {
    int n = scores.size();
    int maxSum = 0;
    int currentSum = 0;
    // Calculate the sum of the first window
    for (int i = 0; i < k; i++) {
      currentSum += scores[i];
    }
    maxSum = currentSum;
    // Slide the window and update the maximum sum
    for (int i = k; i < n; i++) {
    currentSum += scores[i] - scores[i - k];
    maxSum = max(maxSum, currentSum);
  }
    return maxSum;
  }
  int main() {
    vector<int> scores = {90, 87, 76, 92, 88, 82, 95};
    int k = 3; // Length of the subarray
    int maxSum = maxSubarraySum(scores, k);
    cout << "Maximum subarray sum: " << maxSum << endl;
    return 0;
  }
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            2. Sliding Window Technique :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            The sliding window technique is a popular algorithmic approach used
            to solve problems that involve finding a subarray or substring of a
            specific length or satisfying certain conditions. It involves
            maintaining a window or a range of elements within the given array
            or string and efficiently sliding or expanding the window to solve
            the problem. Here's a detailed explanation of the sliding window
            technique in C++ with a real-life related example:
          </p>

          <p className="text-justify pt-4">
            The Sliding Window Technique: The sliding window technique involves
            using two pointers, typically the start and end pointers, to
            represent the range or window of elements within the given array or
            string. The window is initially set to cover a specific length or a
            starting range of elements. By moving or sliding the window based on
            certain conditions, we can solve various problems in an optimized
            manner.
          </p>

          <p className="text-justify pt-4">
            Example Scenario: Let's consider a real-life related example
            scenario to explain the sliding window technique. Imagine a student
            who wants to find the maximum sum of a subarray of a specific length
            within their exam scores. They want to find the highest total score
            they achieved in any consecutive range of exams.
          </p>

          <p className="text-justify pt-4">
            C++ Implementation: Here's a sample implementation in C++ that
            demonstrates the sliding window technique to solve the student's
            maximum subarray sum problem:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify pt-4 font-bold">Explanation:</p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              In this example, we have a vector{" "}
              <span className="code-text italic text-sm">scores</span>{" "}
              representing the exam scores, and an integer{" "}
              <span className="code-text italic text-sm">k </span>representing
              the length of the subarray.
            </li>
            <li className="pt-4">
              The{" "}
              <span className="code-text italic text-sm">maxSubarraySum </span>
              function takes the{" "}
              <span className="code-text italic text-sm"> scores</span> vector
              and k as inputs and returns the maximum sum of a subarray of
              length <span className="code-text italic text-sm"> k</span>.
            </li>
            <li className="pt-4">
              We initialize{" "}
              <span className="code-text italic text-sm"> maxSum</span> and{" "}
              <span className="code-text italic text-sm">currentSum</span>{" "}
              variables to keep track of the maximum sum and the current sum of
              the window, respectively.
            </li>
            <li className="pt-4">
              We calculate the sum of the first window by iterating through the
              scores array for the first{" "}
              <span className="code-text italic text-sm"> k</span> elements.
            </li>
            <li className="pt-4">
              <span className="code-text italic text-sm"> maxSum</span> is
              initially set to{" "}
              <span className="code-text italic text-sm"> currentSum</span>.
            </li>
            <li className="pt-4">
              We slide the window from left to right by iterating from{" "}
              <span className="code-text italic text-sm"> k</span> to{" "}
              <span className="code-text italic text-sm"> n-1</span>, where n is
              the size of the scores array.
            </li>
            <li className="pt-4">
              In each iteration, we update{" "}
              <span className="code-text italic text-sm"> currentSum</span> by
              adding the current element and subtracting the element that is no
              longer part of the window.
            </li>
            <li className="pt-4">
              We update <span className="code-text italic text-sm">maxSum</span>{" "}
              by taking the maximum value between{" "}
              <span className="code-text italic text-sm">maxSum</span> and
              <span className="code-text italic text-sm">currentSum </span>in
              each iteration.
            </li>
            <li className="pt-4">
              Finally, we return{" "}
              <span className="code-text italic text-sm"> maxSum</span> as the
              maximum sum of a subarray of length{" "}
              <span className="code-text italic text-sm"> k</span>.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Real-life related example: In the student's maximum subarray sum
            scenario, the sliding window technique is used to find the highest
            total score achieved in any consecutive range of exams. By
            efficiently sliding the window and updating the sum, the algorithm
            finds the maximum subarray sum in an optimized manner.
          </p>
          <p className="text-justify pt-4">
            Complexity: The time complexity of the sliding window technique
            depends on the specific problem being solved. In this example, the
            time complexity is O(N), where N is the number of exam scores, as we
            iterate through the scores array once.
          </p>
          <p className="text-justify pt-4">
            The space complexity is O(1) as we only use a few additional
            variables that don't depend on the size of the input.
          </p>
          <p className="text-justify pt-4">
            By relating the sliding window technique to the student's exam
            scores, it helps to illustrate how this algorithmic approach can be
            applied in real-life scenarios, making it more relatable and
            interesting for students.
          </p>
          <br></br>
        </article>
      </section>
    </div>
  );
};

export default AlgoTechSliding;
