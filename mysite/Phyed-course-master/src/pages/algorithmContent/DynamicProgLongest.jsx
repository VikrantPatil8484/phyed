import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const DynamicProgLongest = () => {
  const codeString = `
  #include <iostream>
#include <string>
using namespace std;

int lcs(string X, string Y) {
    int m = X.length();
    int n = Y.length();
    int dp[m + 1][n + 1];

    // Step 1: Initialize table
    for (int i = 0; i <= m; i++)
        dp[i][0] = 0;
    for (int j = 0; j <= n; j++)
        dp[0][j] = 0;

    // Step 2 and 3: Fill table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (X[i - 1] == Y[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Step 5: Length of LCS
    return dp[m][n];
}

string getLCS(string X, string Y) {
    int m = X.length();
    int n = Y.length();
    int dp[m + 1][n + 1];

    // Same initialization and table filling as above...

    // Step 6: Reconstruct LCS
    string lcs;
    int i = m, j = n;
    while (i > 0 && j > 0) {
        if (X[i - 1] == Y[j - 1]) {
            lcs = X[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs;
}

int main() {
    string X = "AGGTAB";
    string Y = "GXTXAYB";
    int length = lcs(X, Y);
    string sequence = getLCS(X, Y);

    cout << "Length of LCS: " << length << endl;
    cout << "LCS: " << sequence << endl;

    return 0;
}
  `
  const codeString1 = `
  Length of LCS: 4
  LCS: GTAB
  `


  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Longest Common Subsequence (LCS)</h4>
        <p className='pt-8'>The Longest Common Subsequence (LCS) problem is a classic computer science problem that involves finding the longest subsequence that is common to two or more sequences. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.</p>
        <p className='pt-4'>Given two sequences, let's call them sequence X and sequence Y, the LCS problem asks for the length of the longest common subsequence of X and Y.</p>
        <p className='pt-4'>For example, consider the sequences X = "AGGTAB" and Y = "GXTXAYB". The LCS of X and Y is "GTAB" with a length of 4.</p>
        <p className='pt-4'>To solve the LCS problem, we can use dynamic programming. The idea behind dynamic programming is to break down a complex problem into smaller overlapping subproblems and solve them individually, storing the results of the subproblems in a table for future use. The bottom-up approach of dynamic programming is commonly used for solving the LCS problem.</p>
        <p className='pt-4'>Here's a step-by-step explanation of how we can solve the LCS problem using dynamic programming:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-4'>Create a table or a 2D array with dimensions (m+1) x (n+1), where m and n are the lengths of sequences X and Y, respectively. Initialize all the cells of the table to 0</li>
          <li className='pt-4'>Traverse the table row by row and column by column. Let's consider the current cell at position (i, j) in the table, where i represents the index in sequence X and j represents the index in sequence Y.</li>
          <li className='pt-4'>If the characters at indices (i-1) and (j-1) in sequences X and Y are the same, it means we have found a new common element. In this case, we increment the value of the current cell by 1 and move diagonally to the cell at position (i-1, j-1).<p>If the characters at indices (i-1) and (j-1) are different, we take the maximum value between the cell above (i.e., at position (i-1, j)) and the cell to the left (i.e., at position (i, j-1)). We store this maximum value in the current cell.</p></li>
          <li className='pt-4'>Repeat step 3 for all cells in the table.</li>
          <li className='pt-4'>Finally, the value in the bottom-right cell of the table represents the length of the LCS of sequences X and Y.</li>
          <li className='pt-4'>To reconstruct the LCS itself, start from the bottom-right cell and backtrack through the table. Whenever we encounter a diagonal move, it means the corresponding characters at that position are part of the LCS. Append these characters to a result string or array.</li>
        </ul>
        <p className='pt-4'>Here's an example implementation in C++ that solves the LCS problem</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='pt-4'>In this example, we use the strings "AGGTAB" and "GXTXAYB" as inputs. The output will be:</p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        
        <p className='pt-4'>The time complexity of the above implementation is O(mn), where m and n are the lengths of sequences X and Y, respectively. The space complexity is also O(mn) because we use a 2D array to store the dynamic programming table.</p>
        <p className='pt-4 font-bold'>Advantage:</p>
        <p className='pt-4'>The Longest Common Subsequence (LCS) has several advantages and use cases in various fields. Here are some key advantages of using LCS:</p>

        <ul className='list-decimal px-10'>
          <li className='pt-4'><strong>Text Comparison and Difference Analysis:</strong> LCS can be used to compare two texts or documents to identify their similarities and differences. It helps in performing efficient textual analysis, identifying changes between different versions of documents, and highlighting the modified or added content.</li>
          <li className='pt-4'><strong>Version Control Systems:</strong> LCS is widely used in version control systems like Git, SVN, and Mercurial to track changes between different versions of files. It helps in determining the differences between file versions, merging changes from different branches, and resolving conflicts during code collaboration.</li>
          <li className='pt-4'><strong>DNA Sequence Analysis:</strong> In bioinformatics, LCS is employed to analyze DNA sequences. It helps in identifying common genetic patterns and similarities between different organisms. LCS algorithms are crucial in DNA sequencing, genome comparison, and evolutionary studies.</li>
          <li className='pt-4'><strong>Plagiarism Detection:</strong> LCS algorithms play a vital role in plagiarism detection systems. By comparing a submitted document with a large database of existing documents, the system can identify similarities and potential instances of plagiarism.</li>
          <li className='pt-4'><strong>Data Compression:</strong> LCS is utilized in data compression algorithms like Lempel-Ziv-Welch (LZW) to find repeating patterns and create a dictionary for efficient compression. By replacing repeated sequences with shorter codes, the compression ratio can be improved.</li>
          <li className='pt-4'><strong>Data Mining and Pattern Recognition:</strong> LCS is a fundamental tool for data mining and pattern recognition tasks. It helps in discovering common patterns and similarities in large datasets, which can be used for clustering, classification, and anomaly detection.</li>
          <li className='pt-4'><strong>Speech and Audio Processing:</strong> In speech recognition and audio processing, LCS algorithms can be employed to compare and match phonemes or acoustic features. This aids in speech-to-text conversion, speaker identification, and audio content analysis.</li>
          <li className='pt-4'><strong>Image Comparison:</strong> LCS techniques can be applied to compare and analyze images by treating them as sequences of pixels. It helps in image recognition, object detection, and content-based image retrieval.</li>
        </ul>

      </article>
    </section>
    </div>
  )
}

export default DynamicProgLongest