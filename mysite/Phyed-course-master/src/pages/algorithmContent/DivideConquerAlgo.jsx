import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const DivideConquerAlgo = () => {

  const codeString = `
  #include <iostream>
  #include <vector>
  
  // Recursive binary search function
  int binarySearch(const std::vector<int>& arr, int target, int left, int right) {
      if (left <= right) {
          int mid = left + (right - left) / 2;
  
          // If the target is found, return its index
          if (arr[mid] == target) {
              return mid;
          }
  
          // If the target is smaller, search in the left half
          if (arr[mid] > target) {
              return binarySearch(arr, target, left, mid - 1);
          }
  
          // If the target is larger, search in the right half
          return binarySearch(arr, target, mid + 1, right);
      }
  
      // If the target is not found, return -1
      return -1;
  }
  
  // Wrapper function for binary search
  int search(const std::vector<int>& arr, int target) {
      int n = arr.size();
      return binarySearch(arr, target, 0, n - 1);
  }
  
  int main() {
      std::vector<int> arr = {2, 4, 6, 8, 10, 12, 14};
      int target = 8;
  
      int index = search(arr, target);
  
      if (index != -1) {
          std::cout << "Element found at index " << index << std::endl;
      } else {
          std::cout << "Element not found" << std::endl;
      }
  
      return 0;
  }
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Divide and Conquer</h4>
        <p className='text-justify pt-8'>Divide and Conquer is a problem-solving paradigm that involves breaking a problem into smaller subproblems, solving them recursively, and combining their solutions to obtain the final result. The main steps in a divide and conquer algorithm are:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Divide: </strong>Break the problem into smaller subproblems. This step involves dividing the input into smaller parts that can be solved independently.</li>
          <li className='pt-2'><strong>Conquer: </strong>Solve the subproblems recursively. This step involves solving the smaller subproblems by applying the same algorithm recursively until they become simple enough to solve directly.</li>
          <li className='pt-2'><strong>Combine: </strong>Combine the solutions of the subproblems to obtain the final result. This step involves merging or combining the solutions of the smaller subproblems to obtain the solution for the original problem.</li>
        </ul>
        <p className='text-justify pt-4'>Now let's see an example of a divide and conquer algorithm implemented in C++.</p>
        <p className='text-justify pt-4'><strong>Binary Search: </strong>Binary search is a classic example of a divide and conquer algorithm. It is used to search for an element in a sorted array by repeatedly dividing the search space in half.</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this code, we have a sorted array arr and a target element target that we want to search for. The binarySearch function implements the recursive binary search algorithm. It takes the array, target element, left index, and right index as parameters.</p>
        <p className='text-justify pt-4'>Inside the binarySearch function, we calculate the middle index and compare the middle element with the target element. If they are equal, we return the middle index. If the middle element is greater than the target, we recursively search in the left half of the array. Otherwise, we recursively search in the right half of the array.</p>
        <p className='text-justify pt-4'>The search function is a wrapper function that initializes the left and right indices and calls the binarySearch function.</p>
        <p className='text-justify pt-4'>In the main function, we create a sorted array and search for a target element using the search function. If the element is found, we print its index; otherwise, we indicate that the element is not found.</p>
        <p className='text-justify pt-4'>The time complexity of the binary search algorithm is O(log n), where n is the size of the input array. This is because the search space is divided in half in each recursive step.</p>
        <p className='text-justify pt-4'>The space complexity of the algorithm is O(log n) as well, due to the recursive calls that consume space on the call stack.</p>
        <p className='text-justify pt-4'>Divide and conquer algorithms, like binary search, can provide efficient solutions to a wide range of problems by leveraging the divide, conquer, and combine steps to break down complex problems into simpler ones.</p>

      </article>
    </section>
    </div>
  )
}

export default DivideConquerAlgo