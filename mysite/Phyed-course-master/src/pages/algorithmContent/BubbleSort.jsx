import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 2

const BubbleSort = () => {
  const codeString = `
  #include <iostream>
  
  void bubbleSort(int arr[], int size) {
      // Iterate through the list
      for (int i = 0; i < size - 1; i++) {
          // Compare adjacent elements
          for (int j = 0; j < size - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  // Swap them if they are in the wrong order
                  int temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
  }
  
  int main() {
      int numbers[] = {5, 2, 8, 3};
      int size = sizeof(numbers) / sizeof(numbers[0]);
  
      // Print the list before sorting
      std::cout << "Before sorting: ";
      for (int i = 0; i < size; i++) {
          std::cout << numbers[i] << " ";
      }
      std::cout << std::endl;
  
      // Apply Bubble Sort
      bubbleSort(numbers, size);
  
      // Print the list after sorting
      std::cout << "After sorting: ";
      for (int i = 0; i < size; i++) {
          std::cout << numbers[i] << " ";
      }
      std::cout << std::endl;
  
      return 0;
  }
  `



  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Bubble Sort :</h4>

           <p className='text-justify p-2 pt-4'>Bubble Sort is a simple sorting algorithm that helps us arrange a list of things in order. It works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order, just like bubbles rising to the surface.</p>
           
            <p className='text-justify p-2 pt-4'><b>Why do we use Bubble Sort?</b></p>
            <p className='text-justify p-2 pt-4'>1. Bubble Sort is easy to understand and implement. It helps us learn about sorting algorithms. However, it's not very efficient for large lists, so we usually use other sorting algorithms for practical purposes.</p>
          
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>2. Bubble Sort compares each pair of adjacent elements in the list and swaps them if they are in the wrong order. In the worst case, it needs to go through the list multiple times to ensure everything is sorted correctly. The time it takes to sort the list using Bubble Sort grows quadratically as the number of elements increases. For example, if we have 10 elements, Bubble Sort may need 100 comparisons (10^2). If we have 100 elements, it may need 10,000 comparisons (100^2).</p>
           
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. Bubble Sort is an "in-place" sorting algorithm, which means it doesn't require any extra memory proportional to the input size. It uses a constant amount of additional space, so we say its space complexity is O(1).</p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have an array of numbers [5, 2, 8, 3]. After applying Bubble Sort, the array will be sorted in ascending order as [2, 3, 5, 8].</p>
           <p className='text-justify p-2 pt-4'>The code uses two loops to go through the list. In each iteration, it compares adjacent elements and swaps them if they are in the wrong order. It repeats this process until the array is sorted correctly.</p>
           <p className='text-justify p-2 pt-4'>I hope this explanation and code example help you understand Bubble Sort in a simplified way!</p>

             
           

           </article>
       </section>
    </div>
  )
}

export default BubbleSort