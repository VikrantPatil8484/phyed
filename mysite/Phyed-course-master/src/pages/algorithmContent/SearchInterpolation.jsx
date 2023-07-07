import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 12

const SearchInterpolation = () => {
  const codeString = `#include <iostream>
  #include <vector>
  
  // Interpolation search function
  int interpolationSearch(const std::vector<int>& arr, int target) {
      int left = 0;
      int right = arr.size() - 1;
  
      while (left <= right && target >= arr[left] && target <= arr[right]) {
          if (left == right) {
              if (arr[left] == target) {
                  return left;  // Return the index where the target is found
              }
              return -1;  // Return -1 if the target is not found
          }
  
          // Estimate the position using interpolation formula
          int pos = left + ((target - arr[left]) * (right - left)) / (arr[right] - arr[left]);
  
          if (arr[pos] == target) {
              return pos;  // Return the index where the target is found
          }
  
          if (arr[pos] < target) {
              left = pos + 1;  // Continue searching in the right portion
          } else {
              right = pos - 1;  // Continue searching in the left portion
          }
      }
  
      return -1;  // Return -1 if the target is not found
  }
  
  int main() {
      std::vector<int> numbers = {10, 20, 30, 40, 50, 60, 70, 80, 90};
      int target = 50;
  
      // Perform interpolation search
      int index = interpolationSearch(numbers, target);
  
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
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Interpolation Search :</h4>

           <p className='text-justify p-2 pt-4'>Interpolation search is a searching algorithm that improves upon binary search, especially when the elements in the collection are uniformly distributed. It works by estimating the position of the target element based on the values of the first and last elements in the collection. It is also applicable to sorted collections.</p>
           <p className='text-justify p-2 pt-4'><b>Let's explain interpolation search using a life-related example:</b></p>
           <p className='text-justify p-2 pt-4'>Imagine you have a number line with evenly spaced marks, and you are looking for a specific number, let's say 50. Instead of always dividing the search range in half like in binary search, interpolation search estimates the position of 50 based on the values of the first and last marks on the number line. If the first mark is 0 and the last mark is 100, then 50 would be located at the halfway point. You would start by checking that estimated position. If the value at the estimated position is 50, you have found the target. If the value is greater than 50, you would adjust the estimate closer to the first mark. If the value is less than 50, you would adjust the estimate closer to the last mark. By repeatedly adjusting the estimate based on the comparison with the target, you can quickly narrow down the search range until you find the target or determine that it doesn't exist.</p>
           <p className='text-justify p-2 pt-4'><b>Here's an example of interpolation search implemented in C++:</b></p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a sorted vector of numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90]. We want to find the index of the number 50 using interpolation search. The interpolationSearch function estimates the position of 50 based on the values of the first and last elements in the vector. It adjusts the estimate by using the interpolation formula. If the target is found at the estimated position, it returns the index. If the target is less than the value at the estimated position, it continues searching in the left portion. If the target is greater than the value, it continues searching in the right portion. This process is repeated until the target is found or the range is empty.</p>
           <p className='text-justify p-2 pt-4'>In this case, the target element 50 is found at index 4, so the output would be: "The target element 50 is found at index 4".</p>
           <p className='text-justify p-2 pt-4'> Interpolation search has an average time complexity of O(log log n) for uniformly distributed data, where n is the number of elements in the collection. It performs better than binary search when the data is uniformly distributed, but it can degrade to O(n) in worst-case scenarios with unevenly distributed data.</p>
           
           </article>
       </section>
    </div>
  )
}

export default SearchInterpolation