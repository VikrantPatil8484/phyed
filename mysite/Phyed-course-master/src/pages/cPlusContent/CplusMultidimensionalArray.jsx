import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const CplusMultidimensionalArray = () => {
  const codeString = `#include <iostream>

  int main() {
      // Creating a 2D array representing a 3x3 grid
      int grid[3][3] = {
          {1, 2, 3},
          {4, 5, 6},
          {7, 8, 9}
      };
  
      // Accessing and printing the elements of the grid
      std::cout << "Grid elements:" << std::endl;
      for (int i = 0; i < 3; ++i) {
          for (int j = 0; j < 3; ++j) {
              std::cout << "Element at position (" << i << ", " << j << "): " << grid[i][j] << std::endl;
          }
      }
  
      return 0;
  }
  
  `;

  const codeString1 = `
    Grid elements:
    Element at position (0, 0): 1
    Element at position (0, 1): 2
    Element at position (0, 2): 3
    Element at position (1, 0): 4
    Element at position (1, 1): 5
    Element at position (1, 2): 6
    Element at position (2, 0): 7
    Element at position (2, 1): 8
    Element at position (2, 2): 9
    `;
  const codeString2 = `
    #include <iostream>

    int main() {
      int numbers[5] = {1, 2, 3, 4, 5};
  
      // Getting the size of the array
      int size = sizeof(numbers) / sizeof(numbers[0]);
  
      // Printing the size and length of the array
      std::cout << "Array size: " << size << std::endl;
      std::cout << "Array length: " << size << std::endl;
  
      return 0;
    }
    
    `;
  const codeString3 = `
    Array size: 5
    Array length: 5
  
    `;
  const codeString4 = `#include <iostream>

  int main() {
      // Array of toy cars
      std::string toys[5] = {"car", "ball", "car", "puzzle", "car"};
  
      // Counting the number of cars in the array
      int carCount = 0;
  
      for (int i = 0; i < 5; ++i) {
          if (toys[i] == "car") {
              carCount++;
          }
      }
  
      // Printing the count of cars
      std::cout << "Number of cars: " << carCount << std::endl;
  
      return 0;
  }
  
  
  `;
  const codeString5 = `
    Number of cars: 3
    `;
  const codeString6 = `#include <iostream>
    #include <algorithm>

    int main() {
    // Array of fruits
    std::string fruits[5] = {"banana", "apple", "orange", "grape", "kiwi"};

    // Sorting the array in alphabetical order
    std::sort(fruits, fruits + 5);

    // Printing the sorted array
    std::cout << "Sorted fruits:" << std::endl;
    for (int i = 0; i < 5; ++i) {
        std::cout << fruits[i] << std::endl;
    }

    return 0;
  }

  `;
  const codeString7 = `Sorted fruits:
      apple
      banana
      grape
      kiwi
      orange

      `;

  return (
    // Lecture 20
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            1.Multidimensional Arrays
          </h4>
          <ul className="list-disc px-10"></ul>
          <p className="text-justify pt-4">
            Multidimensional arrays are arrays that store elements in multiple
            dimensions or dimensions within dimensions. They allow us to
            represent data in a tabular or matrix-like structure. Let's explain
            multidimensional arrays, why they are used, provide a real-life
            example, and demonstrate it with easy-to-understand C++ code.
          </p>
          <p className="text-justify pt-4">
            Why are Multidimensional Arrays Used? Multidimensional arrays are
            used to represent structured data that has multiple dimensions or
            dimensions within dimensions. They provide a way to organize and
            manipulate data in a tabular format. For example, a spreadsheet or a
            chessboard can be represented using a multidimensional array.
          </p>
          <p className="text-justify pt-4">
            Understanding Multidimensional Arrays with a Real-Life Example:
            Imagine you have a chessboard, which is an 8x8 grid of squares. You
            can think of this grid as a two-dimensional array. Each square can
            be identified by its row and column coordinates. The
            multidimensional array provides an organized way to store and access
            the information of each square on the chessboard.
          </p>
          <p className="text-justify pt-4">
            Demonstrating Multidimensional Arrays in C++: Let's consider a
            simple C++ example to demonstrate multidimensional arrays:
          </p>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this example, we create a 2D array called grid representing a 3x3
            grid. The array is initialized with the values 1 to 9, arranged in a
            tabular format.
          </p>
          <p className="text-justify pt-4">
            To access individual elements of the grid, we use two sets of square
            brackets [][]. The first set corresponds to the row index, and the
            second set corresponds to the column index. In the nested for loop,
            we iterate over each row and column index to access and print the
            elements of the grid.
          </p>
          <p className="text-justify pt-4">
            The output will display the elements of the grid along with their
            positions:
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this real-life example, we can think of the grid array as a
            representation of a chessboard or any other tabular structure. Each
            element in the array represents a specific position on the grid, and
            we can access and manipulate individual elements by specifying their
            row and column indices.
          </p>
          <p className="text-justify pt-4">
            Multidimensional arrays provide a way to store and organize data in
            a structured manner, especially when dealing with tabular or
            matrix-like data. They are widely used in various applications, such
            as games, image processing, and scientific computations, to
            represent and process multidimensional data.
          </p>

          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            1.Array Size and Length
          </h4>

          <p className="text-justify pt-4">
            Array size and length refer to the number of elements present in an
            array. The size represents the total capacity or the maximum number
            of elements an array can hold, while the length indicates the actual
            number of elements currently stored in the array. Let's explain
            array size and length, why they are important, provide a real-life
            example, and demonstrate it with easy-to-understand C++ code.
          </p>
          <p className="text-justify pt-4">
            Why are Array Size and Length Important? Array size and length are
            important because they provide information about the capacity and
            the actual usage of an array. They help in managing and accessing
            the elements of an array correctly and prevent any unintended access
            beyond the valid range of indices.
          </p>
          <p className="text-justify pt-4">
            Understanding Array Size and Length with a Real-Life Example:
            Imagine you have a tray that can hold a maximum of 10 cookies. The
            tray size represents the total capacity, while the length represents
            the number of cookies currently present in the tray. The tray size
            tells you how many cookies you can store in it, while the length
            tells you how many cookies are actually in the tray at a given time.
          </p>
          <p className="text-justify pt-4">
            Demonstrating Array Size and Length in C++: Let's consider a simple
            C++ example to demonstrate array size and length.
          </p>
          <CodeHighlighter>{codeString2}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we have an array called numbers that stores five
            integer values.
          </p>

          <p className="text-justify pt-4">
            To determine the size of the array, we use the sizeof operator,
            which gives the total number of bytes occupied by the array. We
            divide this size by the size of a single element (sizeof(numbers[0])
            to get the number of elements in the array. This calculation gives
            us the size of the array.
          </p>
          <p className="text-justify pt-4">
            The size and length of the array will be the same because all five
            elements are initialized in the array. We print both the size and
            length of the array to the console.
          </p>
          <p className="text-justify pt-4">
            The output will display the size and length of the array, which is 5
            in this case:
          </p>

          <CodeHighlighter>{codeString3}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this real-life example, we can think of the numbers array as a
            tray that can hold a maximum of five integers. The size represents
            the maximum capacity of the tray, and the length represents the
            number of integers currently present in the tray.
          </p>

          <p className="text-justify pt-4">
            Array size and length are important because they help us understand
            the capacity and the actual usage of an array. By knowing the size
            and length, we can ensure that we access only the valid elements
            within the array and avoid any unintended access beyond its
            boundaries.
          </p>
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            1.Array Traversal
          </h4>
          <p className="text-justify pt-4">
            Array traversal refers to the process of visiting or accessing each
            element in an array, one by one, in order to perform some operation
            or retrieve information. It involves iterating over the array and
            processing each element. Let's explain array traversal, why it is
            important, provide a real-life example, and demonstrate it with
            easy-to-understand C++ code.
          </p>
          <p className="text-justify pt-4">
            Why is Array Traversal Important? Array traversal is important
            because it allows us to perform operations on each element of an
            array. It enables us to examine or modify the data stored in the
            array, calculate aggregate values, search for specific elements, or
            perform any other tasks that involve processing each element.
          </p>
          <p className="text-justify pt-4">
            Understanding Array Traversal with a Real-Life Example: Imagine you
            have a box containing 10 different toys. You want to inspect each
            toy and count how many of them are cars. To achieve this, you will
            pick up each toy from the box, examine it, and keep track of the
            count. This process of inspecting and counting each toy is similar
            to array traversal.
          </p>
          <p className="text-justify pt-4">
            Demonstrating Array Traversal in C++: Let's consider a simple C++
            example to demonstrate array traversal:
          </p>
          <CodeHighlighter>{codeString4}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this example, we have an array called toys that stores the names
            of different toys. We want to count the number of toy cars present
            in the array.
          </p>
          <p className="text-justify pt-4">
            We start by initializing a variable carCount to 0, which will keep
            track of the number of cars found.
          </p>
          <p className="text-justify pt-4">
            Next, we use a for loop to iterate over each element of the array.
            The loop starts from 0 and goes up to 4 (the size of the array minus
            one) because arrays in most programming languages are zero-indexed.
          </p>
          <p className="text-justify pt-4">
            Within the loop, we compare each element with the string "car". If
            the current element is equal to "car", we increment the carCount
            variable.
          </p>
          <p className="text-justify pt-4">
            After the loop, we print the count of cars to the console.
          </p>
          <p className="text-justify pt-4">
            The output will display the number of cars found in the array, which
            is 3 in this case:
          </p>
          <CodeHighlighter>{codeString5}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this real-life example, we can imagine the toys array as a box of
            toys, and the array traversal process is similar to inspecting and
            counting the toys in the box. By iterating over the array elements
            one by one, we examine each toy and count the number of cars found
          </p>
          <p className="text-justify pt-4">
            Array traversal allows us to process each element of an array
            individually, enabling us to perform operations, calculations, or
            searches on the array data. It is an essential technique in
            programming for working with arrays effectively.
          </p>
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            1.Array Manipulation
          </h4>

          <p className="text-justify pt-4">
            Array manipulation refers to the process of modifying the elements
            of an array, such as changing their values, rearranging their order,
            or adding/removing elements. It involves performing various
            operations on the array to achieve a desired outcome. Let's explain
            array manipulation, why it is important, provide a real-life
            example, and demonstrate it with easy-to-understand C++ code.
          </p>
          <p className="text-justify pt-4">
            Why is Array Manipulation Important? Array manipulation is important
            because it allows us to modify and transform the data stored in an
            array according to our requirements. It enables us to update values,
            reorder elements,
          </p>
          <p className="text-justify pt-4">
            insert or remove items, or perform any other operations that involve
            changing the array's content.
          </p>
          <p className="text-justify pt-4">
            insert or remove items, or perform any other operations that involve
            changing the array's content.
          </p>
          <p className="text-justify pt-4">
            Understanding Array Manipulation with a Real-Life Example: Imagine
            you have a basket of fruits, and you want to sort them in
            alphabetical order. To achieve this, you would rearrange the fruits
            based on their names, placing them in the desired order. This
            process of rearranging the fruits is similar to array manipulation.
          </p>
          <p className="text-justify pt-4">
            Demonstrating Array Manipulation in C++: Let's consider a simple C++
            example to demonstrate array manipulation:
          </p>
          <CodeHighlighter>{codeString6}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this example, we have an array called fruits that stores the
            names of different fruits. We want to sort the array in alphabetical
            order.
          </p>
          <p className="text-justify pt-4">
            To achieve this, we use the std::sort function from the C++ Standard
            Library. This function takes the starting and ending iterators of
            the array and rearranges the elements in ascending order.
          </p>
          <p className="text-justify pt-4">
            After sorting the array, we use a for loop to iterate over each
            element and print them in the sorted order.
          </p>
          <p className="text-justify pt-4">
            The output will display the sorted fruits:
          </p>

          <CodeHighlighter>{codeString7}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this real-life example, we can imagine the fruits array as a
            basket of fruits, and the array manipulation process is similar to
            rearranging the fruits in alphabetical order. By applying the
            sorting operation on the array, we change the order of the fruits to
            achieve the desired outcome.
          </p>
          <p className="text-justify pt-4">
            Array manipulation allows us to modify the content of an array
            according to our needs. It gives us the flexibility to update
            values, reorder elements, insert or remove items, or perform any
            other operations required to transform the array. It is a
            fundamental concept in programming and enables us to work with
            arrays effectively.
          </p>
        </article>
      </section>
    </div>
  );
};

export default CplusMultidimensionalArray;
