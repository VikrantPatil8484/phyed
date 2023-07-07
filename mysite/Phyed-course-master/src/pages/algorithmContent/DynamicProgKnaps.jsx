import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const DynamicProgKnaps = () => {

  const codeString = `
#include <iostream>
#include <vector>
using namespace std;

int knapsack(int W, vector<int>& wt, vector<int>& val, int n) {
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else if (wt[i - 1] <= w)
                dp[i][w] = max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
            else
                dp[i][w] = dp[i - 1][w];
        }
    }

    return dp[n][W];
}

int main() {
    vector<int> val = {60, 100, 120};
    vector<int> wt = {10, 20, 30};
    int W = 50;
    int n = val.size();
    int maxVal = knapsack(W, wt, val, n);
    cout << "Maximum value: " << maxVal << endl;

    return 0;
}
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Knapsack Problems</h4>
        <p className='pt-8'>The Knapsack Problem is a well-known optimization problem in computer science and mathematics. It involves selecting a subset of items from a given set, each with its own value and weight, in such a way that the total weight of the selected items is below or equal to a given capacity while maximizing the total value of the selected items.</p>
        <p className='pt-4'>The problem derives its name from the idea of a knapsack or backpack, which has a limited capacity to hold items. The goal is to determine the most valuable combination of items that can be packed into the knapsack without exceeding its weight limit.</p>
        <p className='pt-4'>Formally, the Knapsack Problem can be defined as follows:</p>
        <p className='pt-4 font-bold'>Given:</p>
        <ul className='list-disc px-10'>
          <li className='pt-2'>A set of n items, each item represented by its value (v_i) and weight (w_i).</li>
          <li className='pt-2'>A knapsack with a maximum weight capacity W.</li>
        </ul>
        <p className='pt-4 font-bold'>Objective:</p>
        <ul>
        <li className='pt-2'>Select a subset of items to maximize the total value (V) while ensuring that the total weight (W') of the selected items does not exceed the capacity W.</li>
        </ul>
        <p className='pt-4'>The problem can be stated in two variations:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>0/1 Knapsack Problem:</strong>In this variation, each item can either be included in the knapsack (0/1 decision) or excluded from it. We cannot include fractions or partial quantities of items.</li>
          <li className='pt-2'><strong>Fractional Knapsack Problem:</strong>In this variation, items can be included partially, allowing fractions or fractions of items to be packed into the knapsack. The objective is still to maximize the total value.</li>
        </ul>
        <p className='pt-4'>To solve the Knapsack Problem, several algorithms and approaches can be used. Here are two commonly used techniques:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Dynamic Programming:</strong>Dynamic programming is a popular technique to solve the Knapsack Problem. It uses a bottom-up approach to build a table or matrix, often referred to as a dynamic programming table.The table has rows representing the items and columns representing the weight capacity. Each cell in the table stores the maximum value that can be achieved by considering a subset of the items up to a certain weight capacity.The dynamic programming algorithm fills the table row by row, considering all possible combinations of items and their weights. By iteratively calculating the maximum value for each cell based on the previous row's values, it eventually computes the maximum value achievable for the given weight capacity.The time complexity of the dynamic programming approach is O(nW), where n is the number of items and W is the weight capacity.</li>
          <li className='pt-2'><strong>Greedy Algorithm (Fractional Knapsack Problem):</strong>In the fractional knapsack variation, a greedy algorithm can be used to solve the problem optimally. The algorithm follows a simple strategy: sort the items in decreasing order of their value-to-weight ratios and greedily select items until the knapsack capacity is exhausted.By selecting items with higher value-to-weight ratios first, the algorithm ensures that the overall value is maximised. If an item cannot fit entirely into the knapsack, fractional quantities are selected to utilise the remaining capacity.The greedy algorithm has a time complexity of O(n log n) due to the sorting step.</li>
        </ul>
        <p className='text-justify pt-4'>Both approaches have their advantages and limitations. The dynamic programming approach guarantees an optimal solution but requires more computational resources for large problem sizes. On the other hand, the greedy algorithm provides an optimal solution for the fractional knapsack problem but may not always yield the optimal solution for the 0/1 knapsack problem.</p>
        <p className='text-justify pt-4'>The Knapsack Problem has numerous real-world applications, such as resource allocation, project selection, portfolio optimization, and resource-constrained scheduling. It is a fundamental problem in combinatorial optimization and has been extensively studied and analysed in various contexts.</p>
        <p className='text-justify pt-4'>Here's an implementation of the 0/1 Knapsack Problem using dynamic programming in C++:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this example, we have an input of three items with their respective values and weights stored in the <span className='text-green-500'>val</span> and <span className='text-green-500'>wt</span> vectors. The <span className='text-green-500'>knapsack</span> capacity W is set to 50. The knapsack function uses dynamic programming to calculate and return the maximum value that can be achieved by selecting items for the given weight capacity. The main function calls <span className='text-green-500'>knapsack</span> and prints the result.</p>
        <p className='text-justify pt-4'>Please note that this implementation assumes the inputs are valid, i.e., the sizes of the <span className='text-green-500'>val</span> and <span className='text-green-500'>wt</span> vectors are the same, and <span className='text-green-500'>n</span> represents the number of items. Additionally, the time complexity of this implementation is O(nW), where <span className='text-green-500'>n</span> is the number of items and <span className='text-green-500'>w</span> is the weight capacity.</p>

      </article>
    </section>
    </div>
  )
}

export default DynamicProgKnaps