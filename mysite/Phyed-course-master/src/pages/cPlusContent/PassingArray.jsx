import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';

const PassingArray = () => {
  
  const codeString = `
  #include <iostream>

  // Function to calculate the average age
  double calculateAverageAge(int ages[], int size) {
      int sum = 0;
  
      for (int i = 0; i < size; ++i) {
          sum += ages[i];
      }
  
      return static_cast<double>(sum) / size;
  }
  
  int main() {
      int group1[] = {20, 25, 22, 23, 28};
      int group2[] = {18, 19, 20, 22, 21, 24, 23};
  
      // Calling the function for group1
      double avg1 = calculateAverageAge(group1, 5);
      std::cout << "Average age of group1: " << avg1 << std::endl;
      // Calling the function for group2
      double avg2 = calculateAverageAge(group2, 7);
      std::cout << "Average age of group2: " << avg2 << std::endl;
  
      return 0;
  }
  `
  const codeString1 = `
Average age of group1: 23.6
Average age of group2: 21.5714
  `
  const codeString2 = `
  #include <iostream>

// Function to generate an array of even numbers
    int* generateEvenNumbers(int size) {
    int* evenNumbers = new int[size];

    for (int i = 0; i < size; ++i) {
        evenNumbers[i] = 2 * (i + 1);
    }

    return evenNumbers;
}

int main() {
    int size = 5;

    // Calling the function to generate an array of even numbers
    int* evenArray = generateEvenNumbers(size);

    // Printing the generated array
    std::cout << "Even numbers:" << std::endl;
    for (int i = 0; i < size; ++i) {
        std::cout << evenArray[i] << " ";
    }
    std::cout << std::endl;

    // Remember to delete the dynamically allocated array
    delete[] evenArray;

    return 0;
}
  `
  const codeString3 = `
  Even numbers:
  2 4 6 8 10
  `
  const codeString4 = `
  #include <iostream>
#include <algorithm>

int main() {
    int numbers[] = {5, 2, 9, 1, 3};

    // Sorting the array in ascending order
    std::sort(numbers, numbers + 5);

    // Printing the sorted array
    std::cout << "Sorted numbers:" << std::endl;
    for (int i = 0; i < 5; ++i) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
`
const codeString5 = `
Sorted numbers:
1 2 3 5 9
`
const codeString6 = `
#include <iostream>

int main() {
    // Array of marbles
    std::string marbles[] = {"red", "blue", "green", "yellow", "purple"};

    // Number of marbles in the array
    int numMarbles = sizeof(marbles) / sizeof(marbles[0]);

    // Marble to search for
    std::string targetMarble = "green";

    // Variable to keep track of the found marble index
    int foundIndex = -1;

    // Searching for the marble
    for (int i = 0; i < numMarbles; i++) {
        if (marbles[i] == targetMarble) {
            foundIndex = i;
            break;  // Exit the loop once the marble is found
        }
    }

    // Check if the marble was found or not
    if (foundIndex != -1) {
        std::cout << "The marble \"" << targetMarble << "\" was found at index " << foundIndex << std::endl;
    } else {
        std::cout << "The marble \"" << targetMarble << "\" was not found in the box." << std::endl;
    }

    return 0;
}
`


  return (
    // lecture 19.1
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Passing Arrays to Functions</h4>
          
          <p className='text-justify pt-4'>Passing arrays to functions involves passing the array as a parameter to a function so that the function can work with the array's elements. It allows us to perform operations on arrays within functions and manipulate the data stored in them. Let's explain how to pass arrays to functions, why it is useful, provide a real-life example, and demonstrate it with easy-to-understand C++ code.</p><br></br>
            <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Why are Arrays Used?</h5>
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Why is Passing Arrays to Functions Useful?</span> Passing arrays to functions allows us to encapsulate specific operations or logic into separate functions. It promotes code modularity, reusability, and readability. By passing arrays to functions, we can apply the same operations to different arrays without duplicating code.</li>
                <li className='pt-4'><span className='font-semibold'>Understanding Passing Arrays to Functions with a Real-Life Example:</span> Imagine you have a group of friends, and you want to calculate the average age of the group. To do this, you can write a function that accepts an array of ages as input, calculates the average, and returns the result. This way, you can reuse the same function to calculate the average age of different groups of friends.</li>
        </ul><br></br>
          <p className='text-justify pt-3'>Demonstrating Passing Arrays to Functions in C++:</p>
           <p>Let's consider a simple C++ example to demonstrate passing arrays to functions:</p>
          <CodeHighlighter>
            {codeString} 
          </CodeHighlighter><br></br>
          <p>In this example, we have a function called calculateAverageAge that accepts an array of ages and its size as parameters. It calculates the average age of the group and returns the result.</p>
          <br></br>
         <p>In the main function, we have two arrays group1 and group2 representing different groups of friends and their ages.</p>
       <br></br> <p>We call the calculateAverageAge function twice, once for group1 and once for group2, passing the array and its size as arguments. The function calculates the average age based on the provided array and returns the result.</p>
      <br></br>   <p>We store the average ages in variables avg1 and avg2 and print them to the console.</p>
          <br></br><p>
The output will display the average ages of the groups:</p>
<CodeHighlighter>
            {codeString1} 
          </CodeHighlighter><br></br>
          <p>In this real-life example, we can think of the calculateAverageAge function as a calculator that calculates the average age of a group of friends. By passing different arrays of ages to this function, we can calculate the average age for different groups without duplicating code.</p>
      <br></br>    <p>Passing arrays to functions allows us to encapsulate specific operations on arrays into separate functions, promoting code modularity and reusability. It helps us work with arrays more efficiently and makes our code easier to understand and maintain.

</p>
        <br></br>
    
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Returning Arrays from Functions</h4>
          <p className='text-justify pt-4'>Returning arrays from functions involves returning an array as the result of a function. It allows us to generate or transform arrays within functions and use the resulting array in other parts of our code. Let's explain how to return arrays from functions, why it is useful, provide a real-life example, and demonstrate it with easy-to-understand C++ code.</p>
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Why is Returning Arrays from Functions Useful?</span> Returning arrays from functions allows us to encapsulate complex array generation or transformation logic into separate functions. It enables us to generate arrays dynamically, based on input parameters or calculations, and use the resulting arrays in other parts of our code.</li>
            <li className='pt-4'><span className='font-semibold'>Understanding Returning Arrays from Functions with a Real-Life Example:</span>Imagine you have a store that sells different types of candies, and you want to generate an array of candies based on a specific criterion. To do this, you can write a function that takes the desired criterion as input, generates an array of candies meeting that criterion, and returns the result. This way, you can use the returned array to display the available candies to customers.</li>
         </ul>
          <p className='text-justify pt-4'>Let's consider a simple C++ example to demonstrate returning arrays from functions: </p>
          <CodeHighlighter>
            {codeString2}
          </CodeHighlighter>
          <br></br> <p>In this example, we have a function called generateEvenNumbers that takes the desired size of the array as input. It dynamically allocates an array of integers using the new keyword and fills it with even numbers.</p>   
        <br></br><p>In the main function, we call the generateEvenNumbers function to generate an array of even numbers. We pass the desired size as an argument.</p>
        <br></br><p>We store the returned array in a pointer called evenArray and then iterate over the array to print its elements.After using the array, it's important to deallocate the memory by using the delete[] operator to avoid memory leaks.</p>
        <br></br>
    <p>The output will display the generated array of even numbers:</p>    
    <br></br>
    <CodeHighlighter>
            {codeString3}
          </CodeHighlighter>
          <br></br>
          <p>In this real-life example, we can think of the generateEvenNumbers function as a candy factory that generates an array of even numbers. By calling this function with a specific size, we can dynamically generate an array of even numbers and use it to display available candies to customers.</p>
         <br></br> <p>Returning arrays from functions allows us to generate or transform arrays within functions and use the resulting arrays in other parts of our code. It provides flexibility, modularity, and reusability by encapsulating array-related operations in separate functions.</p>
          <br></br>
        
         <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Array Sorting</h5>
          <p className='text-justify pt-4'>Array sorting refers to the process of rearranging the elements of an array in a specific order, such as ascending or descending. It allows us to organize the data in the array so that it can be easily searched, accessed, or displayed. Let's explain array sorting, why it is useful in real life, provide a simple example, and demonstrate it with easy-to-understand C++ code.</p>
           
          <ul className='list-disc px-10'>
                <li className='pt-4'><span className='font-semibold'>Why Array Sorting</span> Array sorting is useful in real life because it helps us organize and arrange data in a meaningful way. It allows us to find specific elements quickly, identify patterns or trends, and present the data in a more structured manner. Sorting is commonly used in various applications, such as organizing lists, ranking items, or displaying data in a user-friendly manner.</li>
                <li className='pt-4'><span className='font-semibold'>Understanding Array Sorting with a Real-Life Example:</span> Understanding Array Sorting with a Real-Life Example:
Imagine you have a deck of cards that are randomly arranged. If you want to play a card game, it would be difficult to find specific cards or follow the game rules with the cards in a random order. By sorting the cards, you can group them by suit and rank, making it easier to find the cards you need during the game</li>
              </ul><br></br>
              <p>Let's consider a simple C++ example to demonstrate array sorting:</p>
              <CodeHighlighter>
            {codeString4}
          </CodeHighlighter><br></br>
           <p>In this example, we have an array called numbers that contains a random order of integers.</p>
        <p>To sort the array, we use the std::sort function from the C++ Standard Library. This function takes the starting and ending iterators of the array and rearranges the elements in ascending order.</p>
        <br></br><p>After sorting the array, we use a for loop to iterate over each element and print them in the sorted order.The output will display the sorted numbers:</p>
       
        <CodeHighlighter>
            {codeString5}
          </CodeHighlighter><br></br>

          <p>In this real-life example, we can think of the array as a deck of cards, and sorting the array is similar to arranging the cards in a specific order. By sorting the array, we make it easier to find and use specific elements, just like arranging the deck of cards helps in playing card games more efficiently.</p>
       <br></br>  
       <h5 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Searching in Arrays</h5>
          <p className='text-justify pt-4'> Imagine you have a box of different colored marbles, and you want to find a specific marble in the box. The marbles are arranged in a line, and each marble has a different color. Let's write a C++ code to simulate this scenario:</p>
               <br></br>
              <CodeHighlighter>
            {codeString6}
          </CodeHighlighter><br></br>
          <p>In this example, the marbles array represents the box of marbles, where each element of the array corresponds to a different colored marble. We use the sizeof operator to determine the number of marbles in the array by dividing the total size of the array by the size of a single marble.</p>
      <br></br> <p>The targetMarble variable represents the marble we want to find in the box. In this case, we are searching for the green marble.</p>
       <br></br><p>We initialize the foundIndex variable to -1, indicating that the marble has not been found yet. Then, we loop through each marble in the array and compare it with the target marble using the equality operator ==. If a match is found, we update the foundIndex variable with the index of the found marble and exit the loop using the break statement.</p>
        <br></br><p>Finally, we check the value of foundIndex to determine whether the marble was found or not. If the foundIndex is not equal to -1, we display a message indicating the index where the marble was found. Otherwise, we display a message indicating that the marble was not found in the box.</p>
        </article>
      </section>
    </div>
  )
}

export default PassingArray