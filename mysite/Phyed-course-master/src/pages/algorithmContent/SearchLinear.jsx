import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 10

const SearchLinear = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  
  // Linear search function
  int linearSearch(const std::vector<int>& arr, int target) {
      int size = arr.size();
  
      for (int i = 0; i < size; i++) {
          if (arr[i] == target) {
              return i;  // Return the index where the target is found
          }
      }
  
      return -1;  // Return -1 if the target is not found
  }
  
  int main() {
      std::vector<int> numbers = {5, 3, 8, 2, 9, 1};
      int target = 8;
  
      // Perform linear search
      int index = linearSearch(numbers, target);
  
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
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Linear Search :</h4>

           <p className='text-justify p-2 pt-4'>Linear search is a simple searching algorithm that works by sequentially checking each element in a collection until the desired element is found or the end of the collection is reached. It is typically used when the data is unsorted or when the collection is small.</p>
           <p className='text-justify p-2 pt-4'><b>Here's an explanation of linear search using a life-related example:</b></p>
           <p className='text-justify p-2 pt-4'>Imagine you are looking for a book in your bookshelf, but the books are not arranged in any specific order. You would start from the first book and check if it's the one you're looking for. If it's not, you would move to the next book and continue this process until you either find the book or reach the end of the bookshelf.</p>
           <p className='text-justify p-2 pt-4'><b>Let's see an example of linear search implemented in C++:</b></p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have a vector of numbers: [5, 3, 8, 2, 9, 1]. We want to find the index of the number 8 using linear search. The linearSearch function sequentially checks each number in the vector until it finds the target or reaches the end. If the target is found, it returns the index. If the target is not found, it returns -1.</p>
           <p className='text-justify p-2 pt-4'>In this case, the target element 8 is found at index 2, so the output would be: "The target element 8 is found at index 2".</p>
           <p className='text-justify p-2 pt-4'>Linear search has a time complexity of O(n), where n is the number of elements in the collection. This means that in the worst-case scenario, where the target element is at the end of the collection or not present at all, the algorithm will perform n comparisons.</p>
           
           </article>
       </section>
    </div>

  )
}

export default SearchLinear