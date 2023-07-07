import React from 'react'
//import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 1

const SortingIntro = () => {
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Sorting Introduction :</h4>

           <p className='text-justify p-2 pt-4'><b>What is a sorting algorithm?</b></p>
             <p className='text-justify p-2 pt-4'> A sorting algorithm is like a set of instructions that help us arrange a group of things in a particular order. Think of it as organising a messy room or arranging things on your bookshelf.</p>
           
            <p className='text-justify p-2 pt-4'><b>Why do we use sorting algorithms?</b></p>
             <p className='text-justify p-2 pt-4'>Sorting algorithms are useful because they help us put things in order. Just like organising your toys makes it easier to find your favourite toy, sorting helps us find things quickly or present information in a neat and logical way.</p>
             
            <p className='text-justify p-2 pt-4'><b>Where do we use sorting algorithms?</b></p>
             <p className='text-justify p-2 pt-4'>We use sorting algorithms in many everyday situations. For example, when you put your books in alphabetical order on a shelf, or when you organise your toys by size or colour. Computers also use sorting algorithms to sort data, like sorting names in a contact list or arranging numbers from smallest to largest.</p>
             
            <p className='text-justify p-2 pt-4'><b>How does a sorting algorithm work?</b></p>
             <p className='text-justify p-2 pt-4'>Sorting algorithms work by comparing and rearranging the items until they are in the desired order. Let's look at a simple example called "Bubble Sort" to understand how it works:</p>
             
           <p className='text-justify p-2 pt-4'>1. Imagine you have a row of toy cars, and they're all mixed up.</p>
           <p className='text-justify p-2 pt-4'>2. To sort them, you start by comparing two cars at a time, starting from the left side.</p>
           <p className='text-justify p-2 pt-4'>3. If a car on the left is bigger than the one on the right, you swap their positions.</p>
           <p className='text-justify p-2 pt-4'>4. You keep going through the row, comparing and swapping the cars until they're in the right order.</p>
           <p className='text-justify p-2 pt-4'>5. After each pass through the row, the biggest car moves to the end.</p>
           <p className='text-justify p-2 pt-4'>6. You repeat this process until all the cars are in the correct order, with the smallest car at the beginning.</p>
            
           <p className='text-justify p-2 pt-4'>For example, let's say you have the following toy cars: 5, 2, 8, and 3.</p>
           
            <ul className='list-disc px-10'>
            <li className='pt-4'>First, compare 5 and 2. Since 5 is bigger, you swap them: 2, 5, 8, 3.</li>
            <li className='pt-2'>Next, compare 5 and 8. They're already in the right order, so you leave them as they are.</li>
            <li className='pt-2'>Then, compare 8 and 3. You swap them: 2, 5, 3, 8.</li>
            <li className='pt-2'>Now, repeat the process from the beginning until everything is in order.</li>
            <li className='pt-2'>Then, compare 8 and 3. You swap them: 2, 5, 3, 8.</li>
            <li className='pt-2'>Compare 2 and 5. They're already in the right order.</li>
            <li className='pt-2'>Compare 5 and 3. You swap them: 2, 3, 5, 8.</li>
            <li className='pt-2'>Compare 5 and 8. They're already in the right order.</li>
          </ul>
          <p className='text-justify p-2 pt-4'>Now, your toy cars are in order from smallest to largest: 2, 3, 5, 8.</p>
          <p className='text-justify p-2 pt-4'>There are many other types of sorting algorithms, like "Selection Sort" and "Insertion Sort," each with their own way of comparing and rearranging items. Sorting algorithms make it easier to find things, organise data, and solve problems efficiently.</p>
          <p className='text-justify p-2 pt-4'>I hope this explanation helps you understand sorting algorithms in a fun and simple way!</p>


          <p className='text-justify p-2 pt-4'><b>There are several types of sorting algorithms commonly used. Here are some of the main types:</b></p>
          <p className='text-justify p-2 pt-4'><b>1. Bubble Sort:</b> It repeatedly compares adjacent elements and swaps them if they are in the wrong order until the entire list is sorted.</p>
          <p className='text-justify p-2 pt-4'><b>2. Selection Sort:</b> It repeatedly selects the smallest element from the unsorted part of the list and moves it to the sorted part.</p>
          <p className='text-justify p-2 pt-4'><b>3. Insertion Sort:</b> It builds the final sorted array one item at a time by inserting each element into its correct position within the sorted portion of the array.</p>
          <p className='text-justify p-2 pt-4'><b>4. Merge Sort:</b> It follows the divide-and-conquer approach by dividing the unsorted list into smaller sublists, sorting them, and then merging them back together to obtain a sorted list.</p>
          <p className='text-justify p-2 pt-4'><b>5. Quick Sort:</b> It also uses the divide-and-conquer approach, selecting a "pivot" element and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.</p>
          <p className='text-justify p-2 pt-4'><b>6. Heap Sort:</b> It builds a binary heap from the input list and repeatedly extracts the largest element from the heap, placing it in the sorted part of the array.</p>
          <p className='text-justify p-2 pt-4'><b>7. Radix Sort:</b> It sorts numbers digit by digit, starting from the least significant digit to the most significant digit, using counting sort or another stable sorting algorithm.</p>
          <p className='text-justify p-2 pt-4'><b>8. Counting Sort:</b> It works well for sorting integers with a small and known range of values by counting the occurrences of each distinct element and using that information to determine their correct positions in the sorted output.</p>
          <p className='text-justify p-2 pt-4'>These are some of the commonly used sorting algorithms, each with its own advantages, disadvantages, and best-case/worst-case performance characteristics.</p>
          <p className='text-justify p-2 pt-4'>The choice of sorting algorithm depends on factors such as the size of the input, the nature of the data, and the desired performance requirements.</p>


           </article>
       </section>
    </div>
  )
}

export default SortingIntro