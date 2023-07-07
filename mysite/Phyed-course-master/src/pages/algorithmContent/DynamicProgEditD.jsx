import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const DynamicProgEditD = () => {

  const codeString = `
  #include <iostream>
  #include <vector>
  using namespace std;
  
  int editDistance(string A, string B) {
      int m = A.length();
      int n = B.length();
      vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
  
      for (int i = 0; i <= m; i++)
          dp[i][0] = i;
  
      for (int j = 0; j <= n; j++)
          dp[0][j] = j;
  
      for (int i = 1; i <= m; i++) {
          for (int j = 1; j <= n; j++) {
              if (A[i - 1] == B[j - 1])
                  dp[i][j] = dp[i - 1][j - 1];
              else
                  dp[i][j] = 1 + min(dp[i - 1][j - 1], min(dp[i][j - 1], dp[i - 1][j]));
          }
      }
  
      return dp[m][n];
  }
  
  int main() {
      string A = "kitten";
      string B = "sitting";
  
      int minOperations = editDistance(A, B);
      cout << "Minimum number of operations required: " << minOperations << endl;
  
      return 0;
  }
  `

  return (
    
    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Edit Distance</h4>
        <p className='pt-8'>The Edit Distance, also known as the Levenshtein Distance, is a measure of the similarity between two strings. It quantifies the minimum number of operations required to transform one string into another using three fundamental operations: insertion, deletion, and substitution.</p>
        <p className='pt-4'>Formally, the Edit Distance between two strings, let's call them string A and string B, is defined as follows:</p>
        <p className='pt-4 font-bold'>Given:</p>
        <ul className='list-disc px-10'>
          <li className='pt-2'>Two strings A and B, with lengths m and n, respectively.</li>
        </ul>
        <p className='pt-4 font-bold'>Objective:</p>
        <ul>
        <li className='pt-2'>Determine the minimum number of operations (insertions, deletions, and substitutions) needed to transform string A into string B.</li>
        </ul>
        <p className='pt-4'>The three basic operations allowed in edit distance are:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Insertion :</strong>Inserting a character into string A.</li>
          <li className='pt-2'><strong>Deletion :</strong>Removing a character from string A.</li>
          <li className='pt-2'><strong>Substitution :</strong>Replacing a character in string A with a different character.</li>
        </ul>
        <p className='text-justify pt-4'>The goal is to find the minimum number of these operations required to make the two strings equal. The operations can be applied to any position in the strings, and they can be performed multiple times.</p>
        <p className='text-justify pt-4'>To solve the Edit Distance problem, dynamic programming is often used. The dynamic programming approach employs a bottom-up strategy to construct a matrix or table, commonly known as a dynamic programming table.</p>
        <p className='text-justify pt-4'>The dynamic programming table has (m+1) rows and (n+1) columns, where m and n are the lengths of strings A and B, respectively. Each cell in the table, denoted as dp[i][j], represents the minimum number of operations needed to transform the substring A[0...i-1] into the substring B[0...j-1].</p>
        <p className='pt-4'>The dynamic programming algorithm populates the table by considering different cases and updating the cells accordingly:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'>If either string A or string B is empty, the minimum number of operations would be the length of the non-empty string. Thus, dp[i][0] = i and dp[0][j] = j.</li>
          <li className='pt-2'>If the characters at positions (i-1) and (j-1) are equal, no operation is required. The current cell dp[i][j] would have the same value as the previous cell, i.e., dp[i][j] = dp[i-1][j-1].</li>
          <li className='pt-2'>If the characters at positions (i-1) and (j-1) are different, three possible operations can be applied: insertion, deletion, or substitution. The current cell dp[i][j] would be updated to the minimum of the following values:</li>
          <ul className='list-disc px-10'>
            <li className='pt-2'>dp[i-1][j] + 1: Number of operations needed to transform substring A[0...i-2] into substring B[0...j-1] (deletion).</li>
            <li className='pt-2'>dp[i][j-1] + 1: Number of operations needed to transform substring A[0...i-1] into substring B[0...j-2] (insertion).</li>
            <li className='pt-2'>dp[i-1][j-1] + 1: Number of operations needed to transform substring A[0...i-2] into substring B[0...j-2] (substitution).</li>
          </ul>
        </ul>
        <p className='text-justify pt-4'>By filling the dynamic programming table using the above rules, the bottom-right cell dp[m][n] will contain the minimum number of operations required to transform string A into string B.</p>
        <p className='text-justify pt-4'>The Edit Distance algorithm has various applications, including spell checking, DNA sequence alignment, text similarity detection, and data cleaning.</p>
        <p className='text-justify pt-4'>Here's an example implementation of the Edit Distance algorithm using dynamic programming in C++:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this example, we have two input strings, "kitten" and "sitting." The <span className='text-green-500'>editDistance</span> function calculates and returns the minimum number of operations required to transform string A into string B using dynamic programming. The main function calls <span className='text-green-500'>editDistance</span> and prints the result.</p>
        <p className='text-justify pt-4'>Please note that this implementation assumes valid input strings. The time complexity of this implementation is O(mn), where m and n are the lengths of the input strings A and B, respectively.</p>

      </article>
    </section>
    </div>
  )
}

export default DynamicProgEditD