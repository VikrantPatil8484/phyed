import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 4

const InsertionSort = () => {
  const codeString = `
  #include <iostream>
  
  void insertionSort(int cards[], int size) {
      // Iterate through the cards
      for (int i = 1; i < size; i++) {
          int currentCard = cards[i];
          int j = i - 1;
  
          // Compare the current card with the ones before it
          while (j >= 0 && cards[j] > currentCard) {
              cards[j + 1] = cards[j];
              j--;
          }
  
          // Insert the current card into its correct position
          cards[j + 1] = currentCard;
      }
  }
  
  int main() {
      int cards[] = {7, 3, 9, 2, 5}; // Each number represents a playing card value
      int size = sizeof(cards) / sizeof(cards[0]);
  
      // Print the cards before sorting
      std::cout << "Cards before sorting: ";
      for (int i = 0; i < size; i++) {
          std::cout << cards[i] << " ";
      }
      std::cout << std::endl;
  
      // Apply Insertion Sort to arrange the cards
      insertionSort(cards, size);
  
      // Print the cards after sorting
      std::cout << "Cards after sorting: ";
      for (int i = 0; i < size; i++) {
          std::cout << cards[i] << " ";
      }
      std::cout << std::endl;
  
      return 0;
  }
  `
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>  
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Insertion sort :</h4>
        
            <p className='text-justify p-2 pt-4'><b>1: Arranging a Deck of Playing Cards</b></p>
            <p className='text-justify p-2 pt-4'> Imagine you have a deck of playing cards that is all mixed up, and you want to sort them in ascending order based on their values using the Insertion Sort algorithm.</p>
           
            <p className='text-justify p-2 pt-4'><b>Why do we use Insertion Sort?</b></p>
            <p className='text-justify p-2 pt-4'>1. Insertion Sort helps us organize things in a specific order. In this case, we want to arrange the playing cards in numerical order. By using Insertion Sort, we can compare the cards and insert them into their correct positions until they are arranged correctly.</p>
          
           <p className='text-justify p-2 pt-4'><b>Time Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>2. Insertion Sort works by comparing each card with the ones before it and placing it in its correct position. The time it takes to sort the cards using Insertion Sort depends on the number of cards and their initial order. In the worst-case scenario, where the cards are in reverse order, it would take roughly (n^2)/2 comparisons, where "n" is the number of cards.</p>
           
           <p className='text-justify p-2 pt-4'><b>Space Complexity:</b></p>
           <p className='text-justify p-2 pt-4'>3. Insertion Sort is an "in-place" sorting algorithm, which means it doesn't require any extra space to sort the cards. You can arrange the cards on the table without needing any additional containers. So, we say that Insertion Sort has a space complexity of O(1), which means it doesn't need any extra memory proportional to the number of cards.</p>
            <p className='text-justify p-2 pt-4'>Now, let's see an example of Insertion Sort implemented in C++ using the playing card sorting scenario:</p>
                      <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this example, we have an array representing the values of five playing cards: [7, 3, 9, 2, 5]. After applying Insertion Sort, the array will be sorted in ascending order: [2, 3, 5, 7, 9].</p>
           <p className='text-justify p-2 pt-4'>The code uses two loops to go through the cards. In each iteration, it compares the current card with the ones before it and shifts them to the right if necessary. It finds the correct position for the current card and inserts it there.</p>
           <p className='text-justify p-2 pt-4'>I hope this example and explanation help in understanding Insertion Sort in a simplified way!</p>
           </article>
       </section>
    </div>
  )
}

export default InsertionSort