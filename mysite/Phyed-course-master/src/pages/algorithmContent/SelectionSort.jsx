import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 3

const SelectionSort = () => {
  const codeString = `
  #include <iostream>
  
  void selectionSort(int toys[], int size) {
      // Iterate through the toys
      for (int i = 0; i < size - 1; i++) {
          int smallestIndex = i;
          // Find the index of the smallest toy
          for (int j = i + 1; j < size; j++) {
              if (toys[j] < toys[smallestIndex]) {
                  smallestIndex = j;
              }
          }
          // Swap the smallest toy with the current toy
          int temp = toys[smallestIndex];
          toys[smallestIndex] = toys[i];
          toys[i] = temp;
      }
  }
  
  int main() {
      int toys[] = {5, 2, 8, 3}; // Each number represents the size of a toy
      int size = sizeof(toys) / sizeof(toys[0]);
  
      // Print the toys before sorting
      std::cout << "Toys before sorting: ";
      for (int i = 0; i < size; i++) {
          std::cout << toys[i] << " ";
      }
      std::cout << std::endl;
  
      // Apply Selection Sort to arrange the toys
      selectionSort(toys, size);
  
      // Print the toys after sorting
      std::cout << "Toys after sorting: ";
      for (int i = 0; i < size; i++) {
          std::cout << toys[i] << " ";
      }
      std::cout << std::endl;
  
      return 0;
  }
  `
  return (
    <div>
     <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Selection Sort :</h4>

           <p className='text-justify p-2 pt-4'>Imagine you have a collection of toys in your room that you want to sort based on their size from smallest to largest using the Selection Sort algorithm. Here's how the algorithm works:</p>
           
            <p className='text-justify p-2 pt-4'><b>Why do we use Selection Sort?</b></p>
            <p className='text-justify p-2 pt-4'>1. Selection Sort helps us organise things in a specific order. In this case, we want to arrange the toys by size. By using Selection Sort, we can compare the toys and swap them if they are in the wrong order until they are arranged correctly.</p>
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>2. Selection Sort requires going through the toys multiple times to find the smallest toy and place it in the correct position. The time it takes to sort the toys using Selection Sort increases as the number of toys grows. For example, if you have 10 toys, it may take about 45 comparisons to sort them. The number of comparisons can be calculated as (n^2)/2, where "n" is the number of toys.</p>
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. Selection Sort is an "in-place" sorting algorithm, which means it doesn't require any extra space to sort the toys. You can arrange the toys in your room without needing any additional containers. So, we say that Selection Sort has a space complexity of O(1), which means it doesn't need any extra memory proportional to the number of toys.</p>
            <p className='text-justify p-2 pt-4'>Now, let's see an example of Selection Sort implemented in C++ using the toy sorting scenario:</p>
                      <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have an array representing the sizes of four toys: [5, 2, 8, 3]. After applying Selection Sort, the array will be sorted in ascending order based on toy size: [2, 3, 5, 8].</p>
           <p className='text-justify p-2 pt-4'>The code uses two loops to go through the toys. In each iteration, it finds the index of the smallest toy from the unsorted part of the array and swaps it with the current toy. It repeats this process until the toys are arranged in the correct order.</p>
           <p className='text-justify p-2 pt-4'>I hope this explanation and code example help you understand Selection Sort with a life-related scenario in a simplified way!</p>
          
           </article>
       </section>
    </div>
  )
}

export default SelectionSort