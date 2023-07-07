import React from 'react'

const ArrayLibraries = () => {
  return (
    // Lecture 22.3
    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array Libraries in C++</h4>
          <br></br>
          <p>In C++, there are several libraries that provide useful functionality for working with arrays. These libraries offer various operations such as sorting, searching, and manipulating array elements. Let's explore some commonly used array libraries in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Aligorithm:</span><p>This library provides a collection of functions for performing operations on arrays. Some commonly used functions include:</p>
          <br></br>
          <span className='font-semibold'>std::sort():</span><p> Sorts the elements of an array in ascending order.</p>
          <span className='font-semibold'>std::binary_search</span><p>Checks if a given value exists in a sorted array using binary search.</p>
          <span className='font-semibold'>std::find():</span><p> Searches for a specific value in an array and returns an iterator pointing to its first occurrence.</p>
          <span className='font-semibold'>std::max_element(:)</span><p>Finds the maximum element in an array.</p>
          <span className='font-semibold'>std::min_element():</span><p>Finds the minimum element in an array.</p>
          <br></br>
          <span className='font-semibold'>2. numeric:</span><p>This library provides functions for numeric operations on arrays. Some commonly used functions include:</p>
          <span className='font-semibold'>std::accumulate(): </span><p>Calculates the sum of all elements in an array.</p>
          <span className='font-semibold'>std::inner_product():</span><p> Computes the dot product of two arrays.</p>
          <span className='font-semibold'>std::partial_sum():</span> <p>Calculates the partial sum of elements in an array.</p>
          <br></br>
          <span className='font-semibold'>3. cstring:</span> <p>This library provides functions for working with C-style character arrays (null-terminated strings). Some commonly used functions include:</p>
          <span className='font-semibold'>std::strlen():</span><p> Calculates the length of a string.</p>
          <span className='font-semibold'>std::strcpy():</span> <p>Copies one string to another.</p>
          <span className='font-semibold'>std::strcmp():</span><p>Compares two strings lexicographically.</p>
          <br></br>
          <span className='font-semibold'>4. Array: </span> <p>This library provides a container class named std::array that represents a fixed-size array with various utility functions. It offers operations such as bounds checking, size determination, and iterators.</p>
          <br></br>
          <span className='font-semibold'>5. Vector:</span> <p>Although not strictly an array library, the 'vector' library provides a dynamic array-like container class named std::vector. It offers dynamic resizing, easy element insertion/deletion, and a wide range of member functions for array-like operations.</p>     
          <br></br>
          <p>These are just a few examples of array libraries in C++. Depending on your specific requirements, you may find other libraries or functions that suit your needs. Remember to include the appropriate header files (#include) to access the functionalities provided by these libraries.</p>
        </article> 
        </section>    
        </div> 
  )
}

export default ArrayLibraries