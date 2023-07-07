import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 11

const SearchBinary = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  
  // Binary search function
  int binarySearch(const std::vector<int>& arr, int target) {
      int left = 0;
      int right = arr.size() - 1;
  
      while (left <= right) {
          int mid = left + (right - left) / 2;
  
          if (arr[mid] == target) {
              return mid;  // Return the index where the target is found
          }
  
          if (arr[mid] < target) {
              left = mid + 1;  // Continue searching in the right half
          } else {
              right = mid - 1;  // Continue searching in the left half
          }
      }
  
      return -1;  // Return -1 if the target is not found
  }
  
  int main() {
      std::vector<int> numbers = {1, 2, 3, 5, 8, 9};
      int target = 8;
  
      // Perform binary search
      int index = binarySearch(numbers, target);
  
      // Check the result
      if (index != -1) {
          std::cout << "The target element " << target << " is found at index " << index << std::endl;
      } else {
          std::cout << "The target element " << target << " is not found." << std::endl;
      }
  
      return 0;
  }
  `
  return (
    <div>
       <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Binary Search :</h4>

           <p className='text-justify p-2 pt-4'>Binary search is a searching algorithm that efficiently finds the position of a target element in a sorted collection. It works by repeatedly dividing the search range in half until the target element is found or the range is empty. Binary search can only be applied to sorted collections.</p>
           <p className='text-justify p-2 pt-4'><b>Let's explain binary search using a life-related example:</b></p>
           <p className='text-justify p-2 pt-4'>Imagine you have a set of index cards with names written on them in alphabetical order. You are looking for a specific name, let's say "John". You would start by picking the middle card and comparing it with the target name. If the name on the card is "John", you have found the target. If the name on the card comes before "John" alphabetically, you would discard the first half of the cards. If the name on the card comes after "John", you would discard the second half of the cards. By repeatedly dividing the remaining cards in half and comparing with the target, you can quickly narrow down the search range until you find the target name or determine that it doesn't exist.</p>
           <p className='text-justify p-2 pt-4'><b>Here's an example of binary search implemented in C++:</b></p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a sorted vector of numbers: [1, 2, 3, 5, 8, 9]. We want to find the index of the number 8 using binary search. The binarySearch function divides the search range in half and compares the middle element with the target. If the target is found, it returns the index. If the target is less than the middle element, it continues searching in the left half. If the target is greater than the middle element, it continues searching in the right half. This process is repeated until the target is found or the range is empty.</p>
           <p className='text-justify p-2 pt-4'>In this case, the target element 8 is found at index 4, so the output would be: "The target element 8 is found at index 4".</p>
           <p className='text-justify p-2 pt-4'>Binary search has a time complexity of O(log n), where n is the number of elements in the collection. This means that in each comparison, the search range is divided by half, leading to a more efficient search compared to linear search.</p>
           
           </article>
       </section>
    </div>
  )
}

export default SearchBinary