import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const DynamicProgCoinC = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  #include <climits>
  using namespace std;
  
  int coinChange(vector<int>& coins, int amount) {
      vector<int> dp(amount + 1, INT_MAX);
      dp[0] = 0;
  
      for (int i = 1; i <= amount; i++) {
          for (int j = 0; j < coins.size(); j++) {
              if (coins[j] <= i && dp[i - coins[j]] != INT_MAX)
                  dp[i] = min(dp[i], 1 + dp[i - coins[j]]);
          }
      }
  
      return (dp[amount] == INT_MAX) ? -1 : dp[amount];
  }
  
  int main() {
      vector<int> coins = {1, 2, 5};
      int amount = 11;
  
      int minCoins = coinChange(coins, amount);
      cout << "Minimum number of coins required: " << minCoins << endl;
  
      return 0;
  }
  `

  return (
    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Coin Change Problems</h4>
        <p className='pt-8'>The Coin Change Problem is another well-known problem in computer science and mathematics. It involves finding the minimum number of coins required to make a given amount of change, using a set of available coin denominations.</p>
        <p className='pt-4'>Formally, the Coin Change Problem can be defined as follows:</p>
        <p className='pt-4 font-bold'>Given:</p>
        <ul className='list-disc px-10'>
          <li className='pt-2'>A set of m coin denominations, represented by an array or vector of positive integers, [c1, c2, ..., cm].</li>
          <li className='pt-2'>A target amount of change, represented by a positive integer, N.</li>
        </ul>
        <p className='pt-4 font-bold'>Objective:</p>
        <ul>
        <li className='pt-2'>Determine the minimum number of coins needed to make the amount N using the available denominations.</li>
        </ul>
        <p className='pt-4'>The goal is to optimise the number of coins used while achieving the target amount of change. In some variations of the problem, it is also required to determine the specific combination of coins that yields the minimum number.</p>
        <p className='pt-4'>To solve the Coin Change Problem, several algorithms and approaches can be used. Here, we'll discuss two commonly used techniques:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Dynamic Programming:</strong>Dynamic programming is a widely used technique to solve the Coin Change Problem optimally. It uses a bottom-up approach to build a table or matrix, often referred to as a dynamic programming table.The table has rows representing the coin denominations and columns representing the target amounts from 0 to N. Each cell in the table stores the minimum number of coins required to make the corresponding amount using the available denominations.The dynamic programming algorithm fills the table row by row, considering all possible coin denominations and target amounts. By iteratively calculating the minimum number of coins for each cell based on the previous denominations' values, it eventually computes the minimum number of coins needed for the target amount.</li>
          <li className='pt-2'><strong>Greedy Algorithm:</strong>In some cases, a greedy algorithm can be used to approximate the solution to the Coin Change Problem. The algorithm follows a simple strategy: iteratively select the largest denomination that is less than or equal to the remaining change until the target amount is achieved.While the greedy algorithm may not always produce the optimal solution, it can provide a feasible solution in certain scenarios. However, it may fail to find the optimal solution when the available coin denominations do not have the "greedy choice property."The time complexity of the greedy algorithm depends on the specific implementation and the sorting step (if needed) and can range from O(m log m) to O(m).</li>
        </ul>
        <p className='text-justify pt-4'>The Coin Change Problem has various real-world applications, such as making change in currencies, vending machines, cashier systems, and optimization problems involving money transactions.</p>
        <p className='text-justify pt-4'>Let's consider an example implementation of the Coin Change Problem using dynamic programming in C++:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this example, we have an input of coin denominations stored in the <span className='text-green-500'>coins</span> vector, and the target amount is set to 11. The <span className='text-green-500'>coinChange</span> function uses dynamic programming to calculate and return the minimum number of coins required to make the target amount. The main function calls <span className='text-green-500'>coinChange</span> and prints the result.</p>
        <p className='text-justify pt-4'>Please note that this implementation assumes the inputs are valid, i.e., the <span className='text-green-500'>coins</span> vector is non-empty, and the target amount is positive. Additionally, if it is not possible to make the target amount using the available coins, the function returns -1. The time complexity of this implementation is O(mN), where <span className='text-green-500'>m</span> is the number of coin denominations, and <span className='text-green-500'>N</span> is the target amount.</p>

      </article>
    </section>
    </div>
  )
}

export default DynamicProgCoinC