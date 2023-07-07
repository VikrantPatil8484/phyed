import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 12

const PythonLists = () => {

    const codeString =`
    fruits = ['apple', 'banana', 'cherry']
    print(fruits[0])  # Output: 'apple'
    print(fruits[1])  # Output: 'banana'
    print(fruits[2])  # Output: 'cherry'
    `
    const codeString1 = `
    fruits = ['apple', 'banana', 'cherry']
    print(fruits[-1])  # Output: 'cherry'
    print(fruits[-2])  # Output: 'banana'
    print(fruits[-3])  # Output: 'apple'
    `
    const codeString2 = `
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    print(numbers[1:5])   # Output: [2, 3, 4, 5]
    print(numbers[:4])    # Output: [1, 2, 3, 4]
    print(numbers[5:])    # Output: [6, 7, 8, 9]
    print(numbers[2:7:2]) # Output: [3, 5, 7]
     `

    const codeString3 = `
    fruits = ['apple', 'banana', 'cherry']
    fruits[1] = 'orange'
    print(fruits)  # Output: ['apple', 'orange', 'cherry']
    `

    const codeString4 = `
    fruits = ['apple', 'banana', 'cherry']
    print(len(fruits))  # Output: 3
        `  

    const codeString5 = `
    fruits = ['apple', 'banana', 'cherry']
    fruits[1] = 'orange'
    print(fruits)  # Output: ['apple', 'orange', 'cherry']
        `

    const codeString6 = `
    fruits = ['apple', 'banana', 'cherry']
    fruits[1] = 'orange'
    print(fruits)  # Output: ['apple', 'orange', 'cherry']
    
    `
    const codeString7 = `
     numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers[1:4] = [10, 11, 12]
    print(numbers)  # Output: [1, 10, 11, 12, 5, 6, 7, 8, 9]
    
    `
     const codeString8 = ` 
     fruits = ['apple', 'banana', 'cherry']
     fruits[1:] = ['orange', 'kiwi', 'mango']
     print(fruits)  # Output: ['apple', 'orange', 'kiwi', 'mango']
     
     `

     const codeString9 = ` 
     numbers = [1, 2, 3]
     numbers.append(4)
     print(numbers)  # Output: [1, 2, 3, 4]
     
     fruits = ['apple', 'banana', 'cherry']
     fruits.extend(['orange', 'kiwi'])
     print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange', 'kiwi']
     
     numbers = [1, 2, 3]
     numbers.insert(1, 10)
     print(numbers)  # Output: [1, 10, 2, 3]
     
     `

     const codeString10 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.append('orange')
     print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']
     
     `

     const codeString11 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.extend(['orange', 'kiwi'])
     print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange', 'kiwi']
     
     `

     const codeString12 = ` 
     fruits = ['apple', 'banana', 'cherry']
     fruits.insert(1, 'orange')
     print(fruits)  # Output: ['apple', 'orange', 'banana', 'cherry']
     
     `

     const codeString13 = `
      fruits = ['apple', 'banana', 'cherry']
     new_fruits = fruits + ['orange', 'kiwi']
     print(new_fruits)  # Output: ['apple', 'banana', 'cherry', 'orange', 'kiwi']
     
     `

     const codeString14 = `
      fruits = ['apple', 'banana', 'cherry', 'banana']
     fruits.remove('banana')
     print(fruits)  # Output: ['apple', 'cherry', 'banana']
     
     `

     const codeString15 = `
      fruits = ['apple', 'banana', 'cherry']
     removed_item = fruits.pop(1)
     print(fruits)         # Output: ['apple', 'cherry']
     print(removed_item)   # Output: 'banana'
     
     `

     const codeString16 = `
      fruits = ['apple', 'banana', 'cherry']
     del fruits[1]
     print(fruits)  # Output: ['apple', 'cherry']
     
     numbers = [1, 2, 3, 4, 5]
     del numbers[2:4]
     print(numbers)  # Output: [1, 2, 5]
     
     vegetables = ['carrot', 'potato', 'broccoli']
     del vegetables   # deletes the entire list
     
     `

     const codeString17 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.clear()
     print(fruits)  # Output: []
     
     `

     const codeString18 = `
      fruits = ['apple', 'banana', 'cherry']
     for fruit in fruits:
         print(fruit)
     
     #Output:
     
     apple
     banana
     cherry
     
     `

     const codeString19 = `
      fruits = ['apple', 'banana', 'cherry']
     for i in range(len(fruits)):
         print(fruits[i])

     #Output:
     apple
     banana
     cherry
     
     `

     const codeString20 = `
      fruits = ['apple', 'banana', 'cherry']
     for index, fruit in enumerate(fruits):
         print(index, fruit)
     
     #Output:
     
     0 apple
     1 banana
     2 cherry
     
     `

     const codeString21 = `
      fruits = ['apple', 'banana', 'cherry']
     upper_fruits = [fruit.upper() for fruit in fruits]
     print(upper_fruits)  # Output: ['APPLE', 'BANANA', 'CHERRY']
     
     `

     const codeString22 = ` 
     numbers = [1, 2, 3, 4, 5]
     squared_numbers = [x ** 2 for x in numbers]
     print(squared_numbers)  # Output: [1, 4, 9, 16, 25] 
     
     `

     const codeString23 = `
      numbers = [1, 2, 3, 4, 5]
     even_numbers = [x for x in numbers if x % 2 == 0]
     print(even_numbers)  # Output: [2, 4]
     
     `

     const codeString24 = `
      names = ['alice', 'bob', 'charlie']
     upper_names = [name.upper() for name in names]
     print(upper_names)  # Output: ['ALICE', 'BOB', 'CHARLIE']
     
     `

     const codeString25 = `
      numbers = [5, 2, 8, 1, 3]
     sorted_numbers = sorted(numbers)
     print(sorted_numbers)  # Output: [1, 2, 3, 5, 8]
     
     `
     const codeString26 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.sort()
     print(fruits)  # Output: ['apple', 'banana', 'cherry']
     
     `
     const codeString27 = `
      fruits = ['apple', 'banana', 'cherry']
     sorted_fruits = sorted(fruits, key=len)
     print(sorted_fruits)  # Output: ['apple', 'cherry', 'banana']
     
     `
     const codeString28 = `
      numbers = [5, 2, 8, 1, 3]
     sorted_numbers = sorted(numbers, reverse=True)
     print(sorted_numbers)  # Output: [8, 5, 3, 2, 1]
     
     `
     const codeString29 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits_copy = fruits[:]
     
     `
     const codeString30 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits_copy = fruits.copy()
     
     `
     const codeString31 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits_copy = list(fruits)
     
     `
     const codeString32 = `
      list1 = [1, 2, 3]
     list2 = [4, 5, 6]
     combined_list = list1 + list2
     
     `
     const codeString33 = `
      list1 = [1, 2, 3]
     list2 = [4, 5, 6]
     list1.extend(list2)
     
     `
     const codeString34 = `
      list1 = [1, 2, 3]
     list2 = [4, 5, 6]
     combined_list = [*list1, *list2]
     
     `
     const codeString35 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.append('durian')
     print(fruits)  # Output: ['apple', 'banana', 'cherry', 'durian']
     
     `
     const codeString36 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.insert(1, 'orange')
     print(fruits)  # Output: ['apple', 'orange', 'banana', 'cherry']
     
     `
     const codeString37 = `
      fruits = ['apple', 'banana', 'cherry']
     fruits.remove('banana')
     print(fruits)  # Output: ['apple', 'cherry']
     
     `
     const codeString38 = `
      fruits = ['apple', 'banana', 'cherry']
     removed_fruit = fruits.pop(1)
     print(removed_fruit)  # Output: 'banana'
     print(fruits)  # Output: ['apple', 'cherry']
     
     `
     const codeString39 = ` 
     fruits = ['apple', 'banana', 'cherry']
     index = fruits.index('banana')
     print(index)  # Output: 1
     
     `

     
  return (
    <div>
        <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Access List Items:</h4>
      <p className='text-justify p-2 pt-4'> In Python, you can access individual items in a list using their index values. The index of the first item in a list is 0, the second item has an index of 1, and so on. Here's an explanation of how to access list items in Python, along with examples:</p>
      <p className='text-justify p-2 pt-4'><b>1. Accessing a Single Item:</b></p>
      <p className='text-justify p-2 pt-4'>To access a single item in a list, you can use the index enclosed in square brackets ([]). Here's an example:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'><b>2. Negative Indexing:</b></p>
      <p className='text-justify p-2 pt-4'>Python also allows negative indexing, where -1 refers to the last item in the list, -2 refers to the second last item, and so on. Here's an example:</p>
               <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter> 

      <p className='text-justify p-2 pt-4'><b>3. Accessing Multiple Items (Slicing):</b></p>
      <p className='text-justify p-2 pt-4'>You can access a range of items from a list using slicing. The syntax for slicing is `list[start:end]`, where `start` is the index of the first item to include, and `end` is the index of the item just after the last item to include. Here's an example:</p>
               <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>               
       <p className='text-justify p-2 pt-4'>In the last example, `2:7:2` means start at index 2, end at index 7 (exclusive), and take every second element</p>
       
      <p className='text-justify p-2 pt-4'><b>4. Modifying List Items:</b></p>
      <p className='text-justify p-2 pt-4'>You can assign new values to list items by accessing them using their indexes. Here's an example:</p>
               <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter> 

       <p className='text-justify p-2 pt-4'><b>5. Checking List Length:</b></p>
      <p className='text-justify p-2 pt-4'>You can find the length of a list using the `len()` function. It returns the total number of items in the list. Here's an example:</p>
               <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>These are some of the common ways to access list items in Python. Remember, lists are mutable, which means you can modify them by accessing and assigning values to specific indexes.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Change List Items</h4>
      <p className='text-justify p-2 pt-4'>To change the value of a single item in a list, you can use the index and assign a new value to it. Here's an example:</p>
             <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the second item in the list (`fruits[1]`) is changed from `'banana'` to `'orange'`.</p>

      <p className='text-justify p-2 pt-4'><b>1. Modifying a Single Item:</b></p>
      <p className='text-justify p-2 pt-4'>To change the value of a single item in a list, you can use the index and assign a new value to it. Here's an example:</p>
               <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>In this example, the second item in the list (`fruits[1]`) is changed from `'banana'` to `'orange'`.</p>


      <p className='text-justify p-2 pt-4'><b>2. Modifying Multiple Items (Slicing):</b></p>
      <p className='text-justify p-2 pt-4'>You can modify a range of items in a list using slicing. The syntax for slicing is `list[start:end]`, where `start` is the index of the first item to include, and `end` is the index of the item just after the last item to include. Here's an example:</p>
               <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>In this example, the second, third, and fourth items in the list (`numbers[1:4]`) are replaced with the new values `[10, 11, 12]`.</p>


      <p className='text-justify p-2 pt-4'><b>3. Changing List Length:</b></p>
      <p className='text-justify p-2 pt-4'>You can change the length of a list by assigning a new list or sequence of items to a slice. This allows you to add or remove items from the list. Here's an example:</p>
               <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>In this example, starting from the second item (`fruits[1:]`), the list is replaced with a new list `['orange', 'kiwi', 'mango']`. As a result, the list is modified with new items, and the length is changed.</p>

      <p className='text-justify p-2 pt-4'><b>4. Changing List Items In-Place:</b></p>
      <p className='text-justify p-2 pt-4'>Another way to modify list items is by using in-place operations like `append()`, `extend()`, or `insert()`. These methods directly modify the original list. Here are some examples:</p>
               <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>In the above examples, `append()` adds a single item at the end of the list, `extend()` adds multiple items to the end of the list, and `insert()` inserts an item at a specific index.</p>
      <p className='text-justify p-2 pt-4'>These are the various ways to change list items in Python. Remember, lists are mutable, which means you can modify them directly by accessing and assigning new values to specific indexes or using in-place operations</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Add List Items</h4>
      <p className='text-justify p-2 pt-4'>In Python, there are several ways to add items to a list. Here's an explanation of how to add list items, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>1. Append Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `append()` method is used to add a single item at the end of a list. Here's an example:</p>
                <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the string `'orange'` is appended to the end of the `fruits` list using the `append()` method.</p>


      <p className='text-justify p-2 pt-4'><b>2. Extend Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `extend()` method is used to add multiple items to the end of a list. It takes an iterable as an argument (e.g., another list). Here's an example:</p>
                <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the list `['orange', 'kiwi']` is appended to the end of the `fruits` list using the `extend()` method.</p>


      <p className='text-justify p-2 pt-4'><b>3. Insert Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `insert()` method is used to insert an item at a specific index in a list. It takes two arguments: the index where you want to insert the item and the item itself. Here's an example:</p>
                <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the string `'orange'` is inserted at index 1 in the `fruits` list using the `insert()` method.</p>


      <p className='text-justify p-2 pt-4'><b>4. Concatenation Operator:</b></p>
      <p className='text-justify p-2 pt-4'>You can also use the concatenation operator (`+`) to combine two lists. This creates a new list without modifying the original lists. Here's an example:</p>
                <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the original `fruits` list is combined with the list `['orange', 'kiwi']` using the `+` operator, creating a new list `new_fruits`.</p>
      <p className='text-justify p-2 pt-4'>These are some of the common ways to add items to a list in Python. Depending on your specific requirements, you can choose the appropriate method to add items to your list.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Remove List Items</h4>
      <p className='text-justify p-2 pt-4'>In Python, there are multiple ways to remove items from a list. Here's an explanation of how to remove list items, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>1. Remove Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `remove()` method is used to remove the first occurrence of a specific item from a list. Here's an example:</p>
                <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the first occurrence of the string `'banana'` is removed from the `fruits` list using the `remove()` method.</p>

      <p className='text-justify p-2 pt-4'><b>2. Pop Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `pop()` method is used to remove an item from a list based on its index. It returns the removed item. If no index is specified, the last item is removed. Here's an example:</p>
                <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the item at index 1 ('banana') is removed from the `fruits` list using the `pop()` method and assigned to the variable `removed_item`.</p>

      <p className='text-justify p-2 pt-4'><b>3. Del Statement:</b></p>
      <p className='text-justify p-2 pt-4'>The `del` statement is a general-purpose way to remove items from a list using their indexes. It can also be used to delete a slice of items or the entire list. Here are some examples:</p>
                <CodeHighlighter>
                {codeString16} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In the first example, the item at index 1 ('banana') is removed from the `fruits` list using the `del` statement. In the second example, a slice of items with indexes 2 and 3 is removed from the `numbers` list. Finally, the `del` statement without an index removes the entire `vegetables` list.</p>


      <p className='text-justify p-2 pt-4'><b>4. Clear Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `clear()` method is used to remove all items from a list, making it empty. Here's an example:</p>
                <CodeHighlighter>
                {codeString17} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `clear()` method is used to remove all items from the `fruits` list, resulting in an empty list.</p>
      <p className='text-justify p-2 pt-4'>These are some of the common ways to remove items from a list in Python. Depending on your specific requirements, you can choose the appropriate method to remove items from your list.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Loop Lists:</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can use loops to iterate over the items in a list. There are multiple ways to loop through a list. Here's an explanation of how to loop through lists using different approaches, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>1. For Loop:</b></p>
      <p className='text-justify p-2 pt-4'>The `for` loop is commonly used to iterate over each item in a list. Here's an example:</p>
                <CodeHighlighter>
                {codeString18} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `for` loop iterates over each item in the `fruits` list, and the variable `fruit` takes the value of each item in each iteration. The `print()` statement inside the loop prints each fruit on a new line.</p>

      <p className='text-justify p-2 pt-4'><b>2. Using the Range and Length:</b></p>
      <p className='text-justify p-2 pt-4'>You can also use the `range()` function in conjunction with the `len()` function to loop through a list using index values. Here's an example:</p>
                <CodeHighlighter>
                {codeString19} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `range(len(fruits))` generates a sequence of index values corresponding to the list items. The `for` loop iterates over these index values, and `fruits[i]` accesses each item in the `fruits` list using the index.</p>


      <p className='text-justify p-2 pt-4'><b>3. Enumerate Function:</b></p>
      <p className='text-justify p-2 pt-4'>The `enumerate()` function allows you to iterate over both the index and value of each item in a list. Here's an example:</p>
                <CodeHighlighter>
                {codeString20} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `enumerate(fruits)` function returns an iterator that generates pairs of index and value for each item in the `fruits` list. The `for` loop unpacks these pairs into the `index` and `fruit` variables, respectively.</p>

      <p className='text-justify p-2 pt-4'><b>4. List Comprehension:</b></p>
      <p className='text-justify p-2 pt-4'>List comprehension provides a concise way to loop through a list and perform operations on each item to create a new list. Here's an example:</p>
                <CodeHighlighter>
                {codeString21} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the list comprehension `[fruit.upper() for fruit in fruits]`   creates a new list by converting each item in the `fruits` list to uppercase using the `upper()` method.</p>
      <p className='text-justify p-2 pt-4'>These are some of the common ways to loop through lists in Python. Depending on your specific requirements, you can choose the appropriate approach to iterate over and work with list items.</p>



      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - List Comprehension</h4>
      <p className='text-justify p-2 pt-4'> List comprehension is a concise and powerful way to create new lists by performing operations on existing lists. It provides a compact syntax to generate a new list based on the items of an existing list. Here's an explanation of list comprehension in Python, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>Basic Syntax:</b></p>
      <p className='text-justify p-2 pt-4'>The basic syntax for list comprehension is as follows:</p>
                
      <p className='text-justify p-2 pt-4'>new_list = [expression for item in iterable if condition]</p>
      <p className='text-justify p-2 pt-4'>where:</p>
      <p className='text-justify p-2 pt-4'>- `expression` is the operation or transformation to be performed on each item.</p>
      <p className='text-justify p-2 pt-4'>- `item` is the variable that represents each item in the iterable.</p>
      <p className='text-justify p-2 pt-4'>- `iterable` is the sequence or collection of items to iterate over.</p>
      <p className='text-justify p-2 pt-4'>- `condition` (optional) is an optional filter that determines whether an item should be included in the new list or not.</p>
      
      <p className='text-justify p-2 pt-4'><b>Example 1 - Squaring Numbers:</b></p>
      <p className='text-justify p-2 pt-4'>Let's say we have a list of numbers and we want to create a new list that contains the squares of each number. We can use list comprehension to achieve this:</p>
                <CodeHighlighter>
                {codeString22} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the expression `x ** 2` calculates the square of each number `x` in the `numbers` list. The resulting squares are then collected into the `squared_numbers` list using list comprehension.</p>
      

      <p className='text-justify p-2 pt-4'><b>Example 2 - Filtering Even Numbers:</b></p>
      <p className='text-justify p-2 pt-4'>Let's consider a scenario where we have a list of numbers, and we want to create a new list that only contains the even numbers. We can use list comprehension with a condition to achieve this:</p>
                <CodeHighlighter>
                {codeString23} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the condition `x % 2 == 0` checks if each number `x` in the `numbers` list is divisible by 2 (i.e., even). Only the even numbers satisfying the condition are included in the `even_numbers` list.</p>
      

      <p className='text-justify p-2 pt-4'><b>Example 3 - String Manipulation:</b></p>
      <p className='text-justify p-2 pt-4'>List comprehension can also be used with strings. Let's say we have a list of names, and we want to create a new list that contains the uppercase versions of each name:</p>
                <CodeHighlighter>
                {codeString24} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the expression `name.upper()` converts each name `name` in the `names` list to uppercase using the `upper()` method. The resulting uppercase names are then collected into the `upper_names` list using list comprehension.</p>
      <p className='text-justify p-2 pt-4'>List comprehension provides a concise and expressive way to create new lists by applying operations or conditions on existing lists. It helps in writing compact and readable code for transforming and filtering data.</p>
 

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Sort Lists</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can sort lists using various methods and functions. Here's an explanation of how to sort lists, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>1. Sorted Function:</b></p>
      <p className='text-justify p-2 pt-4'>The `sorted()` function is used to sort a list in ascending order. It returns a new sorted list, leaving the original list unchanged. Here's an example:</p>
                <CodeHighlighter>
                {codeString25} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `sorted()` function sorts the `numbers` list in ascending order, and the sorted list is stored in the `sorted_numbers` variable.</p>


      <p className='text-justify p-2 pt-4'><b>2. Sort Method:</b></p>
      <p className='text-justify p-2 pt-4'>The `sort()` method is used to sort a list in-place, i.e., it modifies the original list directly. Here's an example:</p>
                <CodeHighlighter>
                {codeString26} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `sort()` method sorts the `fruits` list in lexicographical order (alphabetical order), modifying the original list.</p>
      <p className='text-justify p-2 pt-4'>Note: The `sort()` method does not return a new list; it sorts the list in place.</p>


      <p className='text-justify p-2 pt-4'><b>3. Custom Sorting Order:</b></p>
      <p className='text-justify p-2 pt-4'>Both the `sorted()` function and the `sort()` method allow you to specify a custom sorting order using the `key` parameter. Here's an example:</p>
                <CodeHighlighter>
                {codeString27} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `sorted()` function sorts the `fruits` list based on the length of each fruit name, resulting in a new list `sorted_fruits`. The `key=len` parameter tells the function to use the length of each item as the basis for sorting.</p>
      
      <p className='text-justify p-2 pt-4'><b>4. Reverse Sorting:</b></p>
      <p className='text-justify p-2 pt-4'>Both the `sorted()` function and the `sort()` method have a `reverse` parameter that allows you to sort the list in descending order. Here's an example:</p>
                <CodeHighlighter>
                {codeString28} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `sorted()` function sorts the `numbers` list in descending order by setting the `reverse=True` parameter.</p>
      <p className='text-justify p-2 pt-4'>These are some of the common ways to sort lists in Python. Depending on your specific requirements, you can choose the appropriate method or function to sort your lists.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Copy & Join Lists</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can copy and join lists using different methods and functions. Here's an explanation of how to copy and join lists, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>1. Copying Lists:</b></p>
      <p className='text-justify p-2 pt-4'>The `sorted()` function is used to sort a list in ascending order. It returns a new sorted list, leaving the original list unchanged. Here's an example:</p>
      <p className='text-justify p-2 pt-4'><b>- Using the Slice Operator:</b></p>
       
                <CodeHighlighter>
                {codeString29} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `fruits_copy` list is created by using the slice operator `[:]` on the `fruits` list. It creates a new list with the same elements as the original list.</p>


      <p className='text-justify p-2 pt-4'><b>- Using the `copy()` Method:</b></p>
              <CodeHighlighter>
              {codeString30} 
              </CodeHighlighter>
<p className='text-justify p-2 pt-4'>In this example, the `copy()` method is used to create a copy of the `fruits` list. It returns a new list with the same elements as the original list.</p>


<p className='text-justify p-2 pt-4'><b>- Using the `list()` Function:</b></p>
              <CodeHighlighter>
              {codeString31} 
              </CodeHighlighter>
<p className='text-justify p-2 pt-4'>In this example, the `list()` function is used to create a new list `fruits_copy` based on the elements of the `fruits` list. It produces a copy of the original list.</p>
<p className='text-justify p-2 pt-4'>Note: It's important to use one of these methods to create a copy of a list. Assigning a list to a new variable without using a copy method (e.g., `fruits_copy = fruits`) creates a reference to the same list, so modifications to one list will affect the other.</p>

<p className='text-justify p-2 pt-4'><b>2. Joining Lists:</b></p>
      <p className='text-justify p-2 pt-4'>To combine or join multiple lists into a single list, there are a few methods available:</p>
      <p className='text-justify p-2 pt-4'><b>- Using the `+` Operator:</b></p>
       
                <CodeHighlighter>
                {codeString32} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `+` operator is used to concatenate `list1` and `list2`, resulting in a new list `combined_list` that contains all the elements from both lists.</p>

      <p className='text-justify p-2 pt-4'><b>- Using the `extend()` Method</b></p>
              <CodeHighlighter>
              {codeString33} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `extend()` method is used to append all the elements from `list2` to `list1`. The modification is done in-place, and `list1` is updated to include the elements from `list2`.</p>


      <p className='text-justify p-2 pt-4'><b>- Using List Concatenation:</b></p>
                    <CodeHighlighter>
                    {codeString34} 
                    </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the lists `list1` and `list2` are unpacked using the `*` operator  and then combined into a new list `combined_list`.</p>
      <p className='text-justify p-2 pt-4'>These are some of the common methods and techniques to copy and join lists in Python. Depending on your specific requirements, you can choose the appropriate approach to work with lists.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - List Methods</h4>
      <p className='text-justify p-2 pt-4'>In Python, lists are objects that have built-in methods for performing various operations. Here's an explanation of some commonly used list methods, along with examples:</p>    
      
      <p className='text-justify p-2 pt-4'><b>1. append():</b></p>
      <p className='text-justify p-2 pt-4'>The `append()` method is used to add an element to the end of a list. Here's an example:</p>      
                <CodeHighlighter>
                {codeString35} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `append('durian')` call adds the element `'durian'` to the end of the `fruits` list.</p>


      <p className='text-justify p-2 pt-4'><b>2. insert():</b></p>
      <p className='text-justify p-2 pt-4'>The `insert()` method is used to insert an element at a specific position in a list. Here's an example:</p>      
                <CodeHighlighter>
                {codeString36} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `insert(1, 'orange')` call inserts the element `'orange'` at index 1 in the `fruits` list.</p>


      <p className='text-justify p-2 pt-4'><b>3. remove():</b></p>
      <p className='text-justify p-2 pt-4'>The `remove()` method is used to remove the first occurrence of a specified element from a list. Here's an example:</p>      
                <CodeHighlighter>
                {codeString37} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `remove('banana')` call removes the first occurrence of the element `'banana'` from the `fruits` list.</p>

      <p className='text-justify p-2 pt-4'><b>4. pop():</b></p>
      <p className='text-justify p-2 pt-4'>The `pop()` method is used to remove and return an element at a specified index in a list. Here's an example:</p>      
                <CodeHighlighter>
                {codeString38} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `pop(1)` call removes the element at index 1 ('banana') from the `fruits` list and returns it.</p>

      <p className='text-justify p-2 pt-4'><b>5. index():</b></p>
      <p className='text-justify p-2 pt-4'>The `index()` method is used to find the index of the first occurrence of a specified element in a list. Here's an example:</p>      
                <CodeHighlighter>
                {codeString39} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the `index('banana')` call returns the index of the first occurrence of the element `'banana'` in the `fruits` list.</p>
      <p className='text-justify p-2 pt-4'>These are just a few examples of the many methods available for lists in Python. Other useful list methods include `sort()`, `reverse()`, `count()`, and more. You can explore the Python documentation for a comprehensive list of list methods and their functionalities.</p>


            </article>
        </section>
    </div>
  )
}

export default PythonLists