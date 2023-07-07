import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 7

const RadixSort = () => {
  const codeString = `#include <iostream>
  #include <vector>
  
  // Find the maximum element in the vector
  int findMax(std::vector<int>& arr) {
      int max = arr[0];
      for (int i = 1; i < arr.size(); i++) {
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return max;
  }
  
  // Counting Sort function to sort the vector based on a specific digit
  void countingSort(std::vector<int>& arr, int exp) {
      int n = arr.size();
      std::vector<int> output(n);
      std::vector<int> count(10, 0);
  
      // Count the occurrences of each digit
      for (int i = 0; i < n; i++) {
          int digit = (arr[i] / exp) % 10;
          count[digit]++;
      }
  
      // Calculate the cumulative count of each digit
      for (int i = 1; i < 10; i++) {
          count[i] += count[i - 1];
      }
  
      // Build the sorted output array
      for (int i = n - 1; i >= 0; i--) {
          int digit = (arr[i] / exp) % 10;
          output[count[digit] - 1] = arr[i];
          count[digit]--;
      }
  
      // Copy the sorted elements back to the original array
      for (int i = 0; i < n; i++) {
          arr[i] = output[i];
      }
  }
  
  // Radix Sort function
  void radixSort(std::vector<int>& arr) {
      int max = findMax(arr);
  
      // Perform counting sort for each digit, starting from the least significant digit
      for (int exp = 1; max / exp > 0; exp *= 10) {
          countingSort(arr, exp);
      }
  }
  
  int main() {
      std::vector<int> ages = {26, 34, 19, 42, 31}; // Each number represents a student's age
      int size = ages.size();
  
      // Print the ages before sorting
      std::cout << "Ages before sorting: ";
      for (int age : ages) {
          std::cout << age << " ";
      }
      std::cout << std::endl;
  
      // Apply Radix Sort to sort the ages
      radixSort(ages);
  
      // Print the ages after sorting
      std::cout << "Ages after sorting: ";
      for (int age : ages) {
          std::cout << age << " ";
      }
      std::cout << std::endl;
  
      return 0;
  }
  `
  return (
    <div>
       <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Radix Sort :</h4>

           <p className='text-justify p-2 pt-4'><b>Definition of Radix Sort:</b></p>
           <p className='text-justify p-2 pt-4'>1. Radix Sort is a sorting algorithm that works on the digits or characters of a number or string. It sorts the elements by examining each digit or character from the least significant to the most significant. By repeatedly grouping the elements based on each digit or character, Radix Sort can sort them into the correct order.</p>
           
            <p className='text-justify p-2 pt-4'><b>Life-related Easy Example:</b></p>
            <p className='text-justify p-2 pt-4'>2. Let's say we have a group of students, and we want to sort them based on their ages using Radix Sort. Each student's age is represented by a number. Radix Sort would start by looking at the least significant digit (the units place) of each student's age and grouping them accordingly. Then, it would move on to the tens place, hundreds place, and so on until all the students are sorted by age.</p>
          
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. The time complexity of Radix Sort is typically considered to be O(d * (n + k)), where d is the number of digits or characters in the input, n is the number of elements to be sorted, and k is the range of possible values for each digit or character. In simple terms, Radix Sort has a linear time complexity, which means it can sort elements efficiently even for a large number of inputs.</p>
           
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>4. The space complexity of Radix Sort is O(n + k), where n is the number of elements to be sorted, and k is the range of possible values for each digit or character. The additional space required by Radix Sort is proportional to the number of elements and the range of values.</p>
           <p className='text-justify p-2 pt-4'>Now, let's see an example of Radix Sort implemented in C++ using the student age sorting scenario:</p>      
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a vector representing the ages of five students: [26, 34, 19, 42, 31]. After applying Radix Sort, the vector will be sorted in ascending order: [19, 26, 31, 34, 42].</p>
           <p className='text-justify p-2 pt-4'>The code uses Counting Sort as a subroutine to sort the elements based on each digit. It finds the maximum element in the vector to determine the number of digits. Then, it performs Counting Sort for each digit, starting from the least significant digit, until all the elements are sorted.</p>
           <p className='text-justify p-2 pt-4'>I hope this example and explanation help in understanding Radix Sort in a simplified way!</p>

             
           

           </article>
       </section>
    </div>
  )
}

export default RadixSort