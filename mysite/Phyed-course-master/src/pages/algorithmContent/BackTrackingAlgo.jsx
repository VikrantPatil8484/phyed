import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const BackTrackingAlgo = () => {

  const codeString = `
  #include <iostream>
#include <vector>

// Function to check if a queen can be placed at a given position
bool isSafe(const std::vector<int>& queens, int row, int col) {
    for (int i = 0; i < row; ++i) {
        // Check if the queens in previous rows attack the current position
        if (queens[i] == col || queens[i] - col == i - row || queens[i] - col == row - i) {
            return false;
        }
    }
    return true;
}

// Backtracking function to solve the N-Queens problem
void solveNQueens(int N, int row, std::vector<int>& queens) {
    if (row == N) {
        // Base case: All queens have been placed, print the solution
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < N; ++j) {
                if (queens[i] == j) {
                    std::cout << "Q ";
                } else {
                    std::cout << "- ";
                }
            }
            std::cout << std::endl;
        }
        std::cout << std::endl;
        return;
    }

    // Try placing the queen in each column of the current row
    for (int col = 0; col < N; ++col) {
        if (isSafe(queens, row, col)) {
            queens[row] = col;  // Place the queen at (row, col)
            solveNQueens(N, row + 1, queens);  // Move to the next row
        }
    }
}

int main() {
    int N = 4;  // Number of queens and size of the chessboard

    std::vector<int> queens(N);  // Vector to store the column position of queens

    solveNQueens(N, 0, queens);

    return 0;
}
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Backtracking Algorithm</h4>
        <p className='text-justify pt-8'>Backtracking is a technique used to solve problems by incrementally building a solution and exploring different possibilities. It is particularly useful when dealing with problems that have a large search space, where exploring all possible solutions is impractical.</p>
        <p className='text-justify pt-4'>The basic idea behind backtracking is to incrementally build a solution by making choices at each step and then evaluating whether the chosen path leads to a valid solution. If the current path leads to a dead end or violates certain constraints, the algorithm backtracks and undoes the previous choice, exploring a different path.</p>
        <p className='text-justify pt-4'>Here's an explanation of the backtracking algorithm and an example implementation in C++.</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Problem Definition: </strong>Define the problem and its constraints. Identify the decision variables and the conditions that must be satisfied.</li>
          <li className='pt-2'><strong>Backtracking Algorithm:</strong></li>
          <ul className='list-disc px-10'>
            <li className='pt-2'>Start with an empty or partially complete solution.</li>
            <li className='pt-2'>Make a choice at the current step.</li>
            <li className='pt-2'>Check if the choice is valid and satisfies the problem constraints.</li>
            <li className='pt-2'>If the choice is valid, move to the next step.</li>
            <li className='pt-2'>If the choice is invalid or leads to a dead end, backtrack to the previous step and undo the choice.</li>
            <li className='pt-2'>Repeat the above steps until a valid solution is found or all possibilities have been explored.</li>
          </ul>
          <li className='pt-2'><strong>Implementation in C++: </strong></li>
        </ul>
        <p className='text-justify pt-4'>Let's consider the N-Queens problem as an example, where the goal is to place N queens on an N x N chessboard such that no two queens can attack each other.</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this code, we define the isSafe function, which checks whether a queen can be placed at a given position (row, col) on the chessboard without attacking any other queens. The function checks the column, diagonal, and anti-diagonal conditions.</p>
        <p className='text-justify pt-4'>The solveNQueens function is the backtracking function that solves the N-Queens problem. It takes the number of queens (N), the current row, and the vector queens as parameters. It uses recursion to explore all possible placements of queens.</p>
        <p className='text-justify pt-4'>Inside the solveNQueens function, if the current row equals N, it means all queens have been placed, and a valid solution is found. We print the solution and return.</p>
        <p className='text-justify pt-4'>Otherwise, we iterate over each column in the current row and check if a queen can be placed at that position. If it is safe, we place the queen at (row, col) and recursively move to the next row by calling solveNQueens again.</p>
        <p className='text-justify pt-4'>In the main function, we initialise  the number of queens and create a vector to store the column positions of the queens. We call solveNQueens to find all valid solutions for the N-Queens problem.</p>
        <p className='text-justify pt-4'>The time complexity of the backtracking algorithm can vary depending on the problem. In the case of the N-Queens problem, the time complexity is typically O(N!), where N is the number of queens or the size of the chessboard. This is because, in the worst case, the algorithm explores all possible configurations of queens.</p>
        <p className='text-justify pt-4'>The space complexity of the algorithm is O(N) to store the column positions of the queens and the call stack used in the recursive calls.</p>
        <p className='text-justify pt-4'>Backtracking algorithms provide a flexible and efficient approach to solve problems with combinatorial or exponential search spaces, allowing us to explore different paths and find valid solutions efficiently.</p>

      </article>
    </section>
    </div>
  )
}

export default BackTrackingAlgo