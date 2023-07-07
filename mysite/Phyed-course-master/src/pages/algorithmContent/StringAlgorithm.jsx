import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const StringAlgorithm = () => {

  const codeString = `
  #include <iostream>
#include <vector>
using namespace std;

vector<int> computeLPS(string pattern) {
    int m = pattern.length();
    vector<int> lps(m, 0);
    int length = 0;
    int i = 1;

    while (i < m) {
        if (pattern[i] == pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length != 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

vector<int> kmpSearch(string text, string pattern) {
    int n = text.length();
    int m = pattern.length();
    vector<int> lps = computeLPS(pattern);
    vector<int> matches;

    int i = 0, j = 0;
    while (i < n) {
        if (pattern[j] == text[i]) {
            i++;
            j++;

            if (j == m) {
                matches.push_back(i - j);
                j = lps[j - 1];
            }
        } else {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return matches;
}

int main() {
    string text = "ABABDABACDABABCABAB";
    string pattern = "ABABCABAB";
    vector<int> result = kmpSearch(text, pattern);

    if (result.empty()) {
        cout << "Pattern not found in the text." << endl;
    } else {
        cout << "Pattern found at indices: ";
        for (int i : result) {
            cout << i << " ";
        }
        cout << endl;
    }

    return 0;
}
  `
  const codeString1 = `
  #include <iostream>
#include <vector>
using namespace std;

int lis(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);  // dp[i] represents the length of the LIS ending at index i

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }

    int maxLength = 0;
    for (int i = 0; i < n; i++) {
        maxLength = max(maxLength, dp[i]);
    }

    return maxLength;
}

int main() {
    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};
    int length = lis(nums);

    cout << "Length of the Longest Increasing Subsequence: " << length << endl;

    return 0;
}
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>String Algorithm</h4>
        <p className='text-justify pt-8'>String algorithms are a set of computational methods and techniques specifically designed for manipulating and analyzing strings of characters. These algorithms are used in various fields such as text processing, bioinformatics, data compression, natural language processing, and more. Here are some common string algorithms:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-6'><strong>String Matching Algorithms: </strong>These algorithms determine if a given pattern exists within a larger text or string. Some popular string matching algorithms include brute force, Knuth-Morris-Pratt (KMP), Boyer-Moore, and Rabin-Karp.</li>
          <li className='pt-2'><strong>Longest Common Subsequence(LCS): </strong> This algorithm finds the longest subsequence that two or more strings have in common. It is widely used in bioinformatics, DNA sequencing, and text comparison.</li>
          <li className='pt-2'><strong>Levenshtein Distance: </strong>This algorithm calculates the minimum number of single-character edits (insertions, deletions, or substitutions) required to transform one string into another. It is useful for applications like spell checking, DNA sequence alignment, and approximate string matching.</li>
          <li className='pt-2'><strong>Tries: </strong>A trie (also called a prefix tree) is a tree-like data structure used for efficient retrieval and storage of strings. It is particularly useful for tasks like auto-complete, searching for strings with a common prefix, and dictionary lookups.</li>
          <li className='pt-2'><strong>String Compression Algorithms: </strong>These algorithms aim to reduce the size of strings to save storage space or improve transmission efficiency. Examples include Huffman coding, Lempel-Ziv-Welch (LZW) compression, and Run-Length Encoding (RLE).</li>
          <li className='pt-2'><strong>Regular Expression Matching: </strong> Regular expressions (regex) provide a powerful language for pattern matching and manipulation of strings. Algorithms are used to efficiently match and search for patterns defined by regular expressions.</li>
          <li className='pt-2'><strong>String Sorting Algorithms: </strong>These algorithms arrange strings in a specific order, such as lexicographically (alphabetical order) or based on a custom sorting criteria. Popular sorting algorithms like quicksort, mergesort, and radix sort can be adapted for sorting strings.</li>
        </ul>
        <p className='text-justify pt-4 font-bold'>String Matching: </p>
        <p className='text-justify pt-4'>Let's take a look at an implementation of the Knuth-Morris-Pratt (KMP) algorithm for string matching in Python:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4 font-bold'>Explanation: </p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'>The computeLPS function calculates the Longest Proper Prefix which is also a Suffix (LPS) array for the given pattern, similar to the previous explanation.</li>
          <li className='pt-2'>The kmpSearch function performs the string matching using the KMP algorithm. It iterates through the text and pattern, comparing characters and adjusting indices based on matches or mismatches. The LPS array is used to determine the next index to check in the pattern when a mismatch occurs.</li>
          <li className='pt-2'>The main function demonstrates the usage of the kmpSearch function. It searches for the pattern in the given text and prints the indices where the pattern is found, or a message if the pattern is not found.</li>
        </ul>
        <p className='text-justify pt-4 font-bold'>Complexity:</p>
        <ul className='list-disc px-10'>
        <li className='pt-2'>The time complexity of the KMP algorithm in C++ is also O(n + m), where n is the length of the text and m is the length of the pattern. Each character in the text and pattern is compared at most once.</li>
        <li className='pt-2'>The space complexity of the algorithm is O(m) for the LPS array, similar to the previous explanation.</li>
        </ul>
        <p className='text-justify pt-4 font-bold'>Longest Increasing Subsequence </p>
        <p className='text-justify pt-4'>Here's an implementation of the Longest Increasing Subsequence (LIS) algorithm in C++:</p>
        <CodeHighlighter>
          {codeString1}
        </CodeHighlighter>
        <p className='text-justify pt-4 font-bold'>Explanation:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'>The lis function takes a vector of integers nums as input and calculates the length of the Longest Increasing Subsequence (LIS) in nums.</li>
          <li className='pt-2'>The algorithm uses dynamic programming to solve the problem. It initializes an auxiliary array dp of the same size as nums, where dp[i] represents the length of the LIS ending at index i.</li>
          <li className='pt-2'>It iterates through nums from left to right. For each element at index i, it compares it with all the elements before it (at indices j from 0 to i-1). If nums[i] is greater than nums[j], it means it can be a part of a longer increasing subsequence. In that case, it updates dp[i] to the maximum value between its current value and dp[j] + 1</li>
          <li className='pt-2'>After completing the iteration, the algorithm finds the maximum value in the dp array, which represents the length of the longest increasing subsequence.</li>
          <li className='pt-2'>Finally, the main function demonstrates the usage of the lis function. It creates a vector of integers nums, calls the lis function on it, and prints the length of the longest increasing subsequence.</li>
        </ul>
        <p className='text-justify pt-4 font-bold'>Complexity:</p>
        <ul className='list-disc px-10'>
        <li className='pt-2'>The time complexity of the LIS algorithm implemented above is O(n^2), where n is the size of the input vector nums. This is because there are two nested loops that iterate through nums, resulting in a quadratic time complexity.</li>
        <li className='pt-2'>The space complexity is O(n) because of the additional array dp used to store the lengths of the LIS ending at each index.</li>
        </ul>


      </article>
    </section>
    </div>
  )
}

export default StringAlgorithm