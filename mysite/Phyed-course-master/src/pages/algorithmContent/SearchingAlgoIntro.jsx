import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture  9

const SearchingAlgoIntro = () => {
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Searching Algorithm Introductuion :</h4>

           <p className='text-justify p-2 pt-4'>Searching algorithms are used to find the presence and/or position of a specific element within a collection of data. There are several common searching algorithms, including linear search, binary search, and hash-based searching. Let's explore each of these algorithms and explain them in a way that a small child can understand without the help of other resources.</p> 
          
           <p className='text-justify p-2 pt-4'><b>Linear Search:</b></p>
           <p className='text-justify p-2 pt-4'>1.Linear search is a simple searching algorithm that works by sequentially checking each element in a collection until the desired element is found or the end of the collection is reached. It starts from the beginning and compares each element with the target element until a match is found.</p>
            <p className='text-justify p-2 pt-4'><b>Example:</b></p>
            <p className='text-justify p-2 pt-4'>2.Let's say you have a bag of colorful marbles, and you want to find a green marble. With linear search, you would start by picking up the first marble from the bag and checking if it is green. If it is not, you would move on to the next marble and continue this process until you find a green marble or go through all the marbles in the bag.</p>
          
           <p className='text-justify p-2 pt-4'><b>Binary Search:</b></p>
           <p className='text-justify p-2 pt-4'>1. Binary search is a more efficient searching algorithm that works on sorted collections. It repeatedly divides the collection in half and narrows down the search range based on whether the target element is greater than or less than the middle element. By eliminating half of the remaining elements at each step, it quickly finds the target element, if present.</p>
           <p className='text-justify p-2 pt-4'><b>Example:</b></p>
           <p className='text-justify p-2 pt-4'>2. Imagine you have a stack of cards with numbers written on them in ascending order. You want to find a card with the number 7 using binary search. You would start by looking at the middle card. If the number on the card is greater than 7, you would discard the upper half of the stack. If the number is less than 7, you would discard the lower half. By repeating this process, you can narrow down the search range until you find the card with the number 7.</p>
          
           <p className='text-justify p-2 pt-4'><b>Hash-Based Searching:</b></p>
           <p className='text-justify p-2 pt-4'>1. Hash-based searching involves using a hash function to map the search key to an index in a data structure called a hash table. The hash table stores key-value pairs, and the hash function ensures efficient retrieval of the desired element by computing its index directly.</p>      
           <p className='text-justify p-2 pt-4'><b>Example:</b></p>
           <p className='text-justify p-2 pt-4'>2. Think of a phone book, where names are sorted alphabetically, and phone numbers are associated with each name. To find a friend's phone number, you would open the phone book near the expected location based on their name's starting letter. This step is similar to using a hash function. Once you're in the correct section, you can quickly locate your friend's name and find their corresponding phone number without going through every name in the phone book.</p>
                   
           <p className='text-justify p-2 pt-4'><b>Time Complexity and Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>The time and space complexities of searching algorithms vary. Linear search has a time complexity of O(n), where n is the number of elements in the collection. Binary search has a time complexity of O(log n) and requires a sorted collection. </p>
           <p className='text-justify p-2 pt-4'>Hash-based searching can have a time complexity of O(1) on average when using a well-implemented hash function, but it requires additional space for the hash table.</p>
           <p className='text-justify p-2 pt-4'>These searching algorithms offer different trade-offs in terms of efficiency and requirements. Depending on the situation and the nature of the data, one algorithm may be more suitable than others.</p>
          </article>
       </section>
    </div>
  )
}

export default SearchingAlgoIntro