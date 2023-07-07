import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 6

const QuickSort = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  
  // Partition function to place the pivot ball in its correct position
  int partition(std::vector<int>& balls, int low, int high) {
      int pivot = balls[high];  // Choose the last ball as the pivot
      int i = low - 1;          // Index of the smaller element
  
      // Compare each ball with the pivot and swap if necessary
      for (int j = low; j < high; j++) {
          if (balls[j] <= pivot) {
              i++;
              std::swap(balls[i], balls[j]);
          }
      }
  
      // Place the pivot ball in its correct position
      std::swap(balls[i + 1], balls[high]);
      return i + 1;
  }
  
  // Quick Sort function
  void quickSort(std::vector<int>& balls, int low, int high) {
      if (low < high) {
          // Find the pivot position and recursively sort the two partitions
          int pivot = partition(balls, low, high);
          quickSort(balls, low, pivot - 1);
          quickSort(balls, pivot + 1, high);
      }
  }
  
  int main() {
      std::vector<int> balls = {7, 2, 10, 5, 3}; // Each number represents a ball size
      int size = balls.size();
  
      // Print the balls before sorting
      std::cout << "Balls before sorting: ";
      for (int num : balls) {
          std::cout << num << " ";
      }
      std::cout << std::endl;
  
      // Apply Quick Sort to sort the balls
      quickSort(balls, 0, size - 1);
  
      // Print the balls after sorting
      std::cout << "Balls after sorting: ";
      for (int num : balls) {
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
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Quick Sort :</h4>

           <p className='text-justify p-2 pt-4'>Imagine you have a box full of different-sized balls, and you want to sort them by size using the Quick Sort algorithm.</p>
           
            <p className='text-justify p-2 pt-4'><b>Why do we use Quick Sort?</b></p>
            <p className='text-justify p-2 pt-4'>1. Quick Sort helps us organize things in a specific order. In this case, we want to arrange the balls by size. By using Quick Sort, we can choose a "pivot" ball, compare it to other balls, and partition the balls into two groups based on their size. We repeat this process recursively until all the balls are sorted.</p>
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>2. Quick Sort works by repeatedly partitioning the balls based on the chosen pivot. The time it takes to sort the balls using Quick Sort depends on the number of balls and their initial order. In the average case, Quick Sort has a time complexity of O(n log n), which means it is efficient for most scenarios. However, in the worst-case scenario where the balls are already sorted or in reverse order, Quick Sort's time complexity becomes O(n^2), which is less efficient.</p>
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. Quick Sort typically uses a small amount of additional space for its recursive calls. However, it can be implemented in two ways: using an additional stack or using an in-place approach. The space complexity of Quick Sort using an additional stack is O(log n), which means it requires additional memory proportional to the number of recursive calls. The in-place implementation has a space complexity of O(1), which means it doesn't need any extra memory apart from the original balls.</p>
           <p className='text-justify p-2 pt-4'>Now, let's see an example of Quick Sort implemented in C++ using the ball sorting scenario:</p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a vector representing the sizes of five balls: [7, 2, 10, 5, 3]..</p>
           <p className='text-justify p-2 pt-4'>After applying Quick Sort, the vector will be sorted in ascending order: [2, 3, 5, 7, 10].</p>
           <p className='text-justify p-2 pt-4'>The code uses recursion to partition the balls based on the chosen pivot. It compares each ball with the pivot and swaps them if necessary. Finally, it recursively applies Quick Sort to the two partitions until all the balls are sorted.</p>
           <p className='text-justify p-2 pt-4'>I hope this example and explanation help in understanding Quick Sort in a simplified way!</p>


             
           

           </article>
       </section>
    </div>
  )
}

export default QuickSort