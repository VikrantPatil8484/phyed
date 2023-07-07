import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 8

const HeapSort = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  
  // Heapify function to maintain the heap property
  void heapify(std::vector<int>& arr, int n, int i) {
      int largest = i;         // Initialize the largest element as the root
      int left = 2 * i + 1;    // Index of the left child
      int right = 2 * i + 2;   // Index of the right child
  
      // If the left child is larger than the root
      if (left < n && arr[left] > arr[largest]) {
          largest = left;
      }
  
      // If the right child is larger than the largest so far
      if (right < n && arr[right] > arr[largest]) {
          largest = right;
      }
  
      // If the largest element is not the root, swap them and recursively heapify the affected subtree
      if (largest != i) {
          std::swap(arr[i], arr[largest]);
          heapify(arr, n, largest);
      }
  }
  
  // Heap Sort function
  void heapSort(std::vector<int>& arr) {
      int n = arr.size();
  
      // Build a max heap by rearranging the elements
      for (int i = n / 2 - 1; i >= 0; i--) {
          heapify(arr, n, i);
      }
  
      // Extract elements from the heap one by one and place them at the end of the sorted array
      for (int i = n - 1; i > 0; i--) {
          std::swap(arr[0], arr[i]);    // Move the root (largest element) to the end
          heapify(arr, i, 0);           // Heapify the reduced heap
      }
  }
  
  int main() {
      std::vector<int> toys = {8, 4, 2, 6, 10}; // Each number represents a toy size
      int size = toys.size();
  
      // Print the toy sizes before sorting
      std::cout << "Toy sizes before sorting: ";
      for (int size : toys) {
          std::cout << size << " ";
      }
      std::cout << std::endl;
  
      // Apply Heap Sort to sort the toy sizes
      heapSort(toys);
  
      // Print the toy sizes after sorting
      std::cout << "Toy sizes after sorting: ";
      for (int size : toys) {
          std::cout << size << " ";
      }
      std::cout << std::endl;
  
      return 0;
  }
  `
  return (
    <div>
       <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Heap Sort :</h4>

           <p className='text-justify p-2 pt-4'><b>Definition of Heap Sort:</b></p>
           <p className='text-justify p-2 pt-4'>1. Heap Sort is a sorting algorithm that uses a data structure called a "heap" to sort elements. A heap is a binary tree-like structure that satisfies the heap property, which means that the value of each parent node is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the values of its children. Heap Sort works by repeatedly removing the top element (root) of the heap, which is the largest (in a max heap) or smallest (in a min heap) element, and placing it at the end of the sorted array.</p>
           
            <p className='text-justify p-2 pt-4'><b>Example:</b></p>
            <p className='text-justify p-2 pt-4'>2. Let's say you have a pile of toys of different sizes, and you want to sort them from smallest to largest using Heap Sort. You would start by arranging the toys in a heap based on their sizes, ensuring that the larger toys are towards the top. Then, you would repeatedly remove the largest toy from the heap and place it at the end of the sorted array until all the toys are sorted.</p>
          
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. The time complexity of Heap Sort is O(n log n), where n is the number of elements to be sorted. Heap Sort has a relatively efficient time complexity, making it suitable for large datasets.</p>
           
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>4. The space complexity of Heap Sort is O(1), meaning it uses a constant amount of additional space. Heap Sort rearranges the elements in place, without requiring significant additional memory.</p>
           <p className='text-justify p-2 pt-4'>Now, let's see an example of Heap Sort implemented in C++ using the toy sorting scenario:</p>      
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a vector representing the sizes of five toys: [8, 4, 2, 6, 10].</p>
           <p className='text-justify p-2 pt-4'>After applying Heap Sort, the vector will be sorted in ascending order: [2, 4, 6, 8, 10].</p>
           <p className='text-justify p-2 pt-4'>The code uses the heapify function to maintain the heap property and the heapSort function to perform the sorting. It builds a max heap by rearranging the elements, then repeatedly extracts the root (largest element) and places it at the end of the sorted array while maintaining the heap property.</p>
           <p className='text-justify p-2 pt-4'>I hope this example and explanation help in understanding Heap Sort in a simplified way!</p>
           </article>
       </section>
    </div>
  )
}

export default HeapSort