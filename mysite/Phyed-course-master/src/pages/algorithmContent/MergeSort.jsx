import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 5

const MergeSort = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  
  // Merge two sorted subarrays into one sorted array
  void merge(std::vector<int>& blocks, int left, int mid, int right) {
      int i = left;       // Index for the left subarray
      int j = mid + 1;    // Index for the right subarray
      std::vector<int> temp;   // Temporary array to store the merged elements
  
      // Compare and merge the elements from the two subarrays
      while (i <= mid && j <= right) {
          if (blocks[i] <= blocks[j]) {
              temp.push_back(blocks[i]);
              i++;
          } else {
              temp.push_back(blocks[j]);
              j++;
          }
      }
  
      // Add any remaining elements from the left subarray
      while (i <= mid) {
          temp.push_back(blocks[i]);
          i++;
      }
  
      // Add any remaining elements from the right subarray
      while (j <= right) {
          temp.push_back(blocks[j]);
          j++;
      }
  
      // Copy the sorted elements back to the original array
      int k = left;
      for (int num : temp) {
          blocks[k] = num;
          k++;
      }
  }
  
  // Merge Sort function
  void mergeSort(std::vector<int>& blocks, int left, int right) {
      if (left < right) {
          int mid = left + (right - left) / 2;
  
          // Recursively sort the two halves
          mergeSort(blocks, left, mid);
          mergeSort(blocks, mid + 1, right);
  
          // Merge the sorted halves
          merge(blocks, left, mid, right);
      }
  }
  
  int main() {
      std::vector<int> blocks = {4, 2, 7, 1, 5}; // Each number represents a colored block
      int size = blocks.size();
  
      // Print the blocks before sorting
      std::cout << "Blocks before sorting: ";
      for (int num : blocks) {
          std::cout << num << " ";
      }
      std::cout << std::endl;
  
      // Apply Merge Sort to sort the blocks
      mergeSort(blocks, 0, size - 1);
  
      // Print the blocks after sorting
      std::cout << "Blocks after sorting: ";
      for (int num : blocks) {
          std::cout << num << " ";
      }
      std::cout << std::endl;
  
      return 0;
  }
  `

  
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Merge Sort :</h4>

           <p className='text-justify p-2 pt-4'>Imagine you have two piles of colored blocks, and you want to sort them by color using the Merge Sort algorithm.</p>
           
            <p className='text-justify p-2 pt-4'><b>Why do we use Merge Sort?</b></p>
            <p className='text-justify p-2 pt-4'>1.Merge Sort helps us organize things in a specific order. In this case, we want to arrange the colored blocks by color. By using Merge Sort, we can divide the blocks into smaller groups, sort them individually, and then merge them back together in the correct order.</p>
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>2. Merge Sort works by repeatedly dividing the blocks into halves, sorting them, and then merging them back together. The time it takes to sort the blocks using Merge Sort depends on the number of blocks and the initial order. Merge Sort has a time complexity of O(n log n), which means it takes a reasonable amount of time even for a large number of blocks.</p>
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. Merge Sort requires extra space to merge the sorted blocks back together. However, it can be implemented in two ways: using an additional array or using an in-place approach. The space complexity of Merge Sort using an additional array is O(n), which means it requires additional memory proportional to the number of blocks. The in-place implementation has a space complexity of O(1), which means it doesn't need any extra memory apart from the original blocks.</p>
            <p className='text-justify p-2 pt-4'>Now, let's see an example of Merge Sort implemented in C++ using the colored block sorting scenario:</p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a vector representing the colors of five blocks: [4, 2, 7, 1, 5].</p>
           <p className='text-justify p-2 pt-4'>After applying Merge Sort, the vector will be sorted in ascending order: [1, 2, 4, 5, 7].</p>
           <p className='text-justify p-2 pt-4'>The code uses recursion to divide the blocks into smaller groups until each group contains a single block. Then, it merges the groups back together in a sorted manner. The merge function compares and combines the two sorted subarrays into one sorted array.</p>
           <p className='text-justify p-2 pt-4'>I hope this example and explanation help in understanding Merge Sort in a simplified way!</p>

            </article>
       </section>
    </div>
  )
}

export default MergeSort