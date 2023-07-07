import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const ApproxiAlgo = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  #include <algorithm>

  using namespace std;
  struct Package {
    int weight;
    int value;
  };
  bool compareByValuePerWeight(const Package& p1, const Package& p2) {
    double vpw1 = static_cast<double>(p1.value) / p1.weight;
    double vpw2 = static_cast<double>(p2.value) / p2.weight;
    return vpw1 > vpw2;
  }
  int knapsackApproximation(vector<Package>& packages, int capacity) {
    sort(packages.begin(), packages.end(), compareByValuePerWeight);
    int currentWeight = 0;
    int totalValue = 0;
    for (const auto& package : packages) {
      if (currentWeight + package.weight <= capacity) {
        currentWeight += package.weight;
        totalValue += package.value;
    } else {
        int remainingCapacity = capacity - currentWeight;
        totalValue += package.value * (remainingCapacity / package.weight);
        break;
      }
    }
  return totalValue;
}
  int main() {
    vector<Package> packages = {
      {5, 10},
      {3, 8},
      {7, 15},
      {2, 6}
  };
  int capacity = 10;
  int maxValue = knapsackApproximation(packages, capacity);
  cout << "Maximum value of packages: " << maxValue << endl;

  return 0;
}
  `;
  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Approximation Algorithms :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Approximation algorithms are algorithms that aim to find
            near-optimal solutions to optimization problems, especially those
            that are computationally difficult to solve exactly. These
            algorithms trade-off accuracy for efficiency, providing solutions
            that are close to the optimal but can be computed in a reasonable
            amount of time. I will explain the concept of approximation
            algorithms in detail and provide a C++ example with a daily-life
            related problem to make it more relatable.
          </p>

          <p className="text-justify pt-4">
            Approximation Algorithms: Optimization problems involve finding the
            best solution among a set of possible solutions. In some cases,
            finding the exact optimal solution is computationally infeasible or
            too time-consuming. Approximation algorithms offer a way to obtain a
            solution that is close to the optimal within a reasonable amount of
            time.
          </p>

          <p className="text-justify pt-4">
            The goal of an approximation algorithm is to find a solution that
            satisfies certain criteria. These criteria could be:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              Approximation Ratio: The solution is within a certain factor of
              the optimal solution.
            </li>
            <li className="pt-2">
              Approximation Guarantee: The solution is guaranteed to be within a
              specific percentage of the optimal solution.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Approximation algorithms are designed to strike a balance between
            efficiency and accuracy, providing solutions that are "good enough"
            in practical scenarios.
          </p>
          <p className="text-justify pt-4">
            Example Scenario: Let's consider a daily-life related example to
            illustrate approximation algorithms. Imagine you are a delivery
            person who needs to deliver packages to a set of locations. Each
            package has a specific weight, and you have a limited carrying
            capacity. Your goal is to maximize the total weight of the delivered
            packages while staying within your carrying capacity.
          </p>
          <p className="text-justify pt-4">
            This problem can be modeled as the Knapsack problem, which is known
            to be NP-complete. The exact solution to the Knapsack problem
            requires exploring all possible combinations of packages, which
            becomes computationally infeasible for large numbers of packages.
          </p>
          <p className="text-justify pt-4">
            C++ Implementation: Here's a simple implementation in C++ that
            demonstrates an approximation algorithm for the Knapsack problem:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            Explanation: In this code, we have a struct Package representing the
            weight and value of each package. The knapsackApproximation function
            takes a vector of packages and the knapsack capacity as inputs.
          </p>

          <p className="text-justify pt-4">
            First, the function sorts the packages in descending order of their
            value-to-weight ratio using the compareByValuePerWeight comparison
            function.
          </p>

          <p className="text-justify pt-4">
            Then, it iterates through the sorted packages and tries to add them
            to the knapsack if there is enough capacity. If adding a package
            would exceed the capacity, the function calculates the remaining
            capacity and adds a fraction of the package's value based on the
            ratio of the remaining capacity to the package's weight.
          </p>

          <p className="text-justify pt-4">
            Finally, the function returns the total value of the packages in the
            knapsack.
          </p>

          <p className="text-justify pt-4">
            In this approximation algorithm, we sort the packages based on their
            value-to-weight ratio and greedily select packages with higher
            ratios. While this approach doesn't guarantee the optimal solution,
            it provides a good approximation in a more efficient manner.
          </p>

          <p className="text-justify pt-4">
            In the context of daily-life, the knapsack problem can be related to
            packing a bag for a trip. You want to maximize the value of the
            items you pack (represented by their value) while staying within the
            weight limit of your bag (represented by the knapsack capacity).
          </p>
          <p className="text-justify pt-4">
            By using the approximation algorithm, you can efficiently select
            items with higher value-to-weight ratios, ensuring that you pack
            valuable items while still staying within the weight limit of your
            bag.
          </p>
          <p className="text-justify pt-4">
            The purpose of this code example is to demonstrate how approximation
            algorithms can provide near-optimal solutions to computationally
            difficult optimization problems. By relating it to a daily-life
            scenario like packing for a trip, students can find the concept more
            relatable and interesting.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ApproxiAlgo;
