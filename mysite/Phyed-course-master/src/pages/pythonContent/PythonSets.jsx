import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 14

const PythonSets = () => {
  const codeString = `
  set1 = {1, 2, 3}
  set2 = set([4, 5, 6])
`

  const codeString1 = `
  set3 = {1, 2, 3, 2, 4}
print(set3)  # Output: {1, 2, 3, 4}
`

  const codeString2 = `
  set4 = {3, 1, 2}
print(set4)  # Output: {1, 2, 3}
`

  const codeString3 = `
  set5 = {1, 2, 3}
set5.add(4)
print(set5)  # Output: {1, 2, 3, 4}
`

  const codeString4 = `
  set6 = {1, 2, 3, 4}
set6.remove(2)
print(set6)  # Output: {1, 3, 4}
`

  

  const codeString5 = `
  set7 = {1, 2, 3}
set8 = {3, 4, 5}

union = set7.union(set8)
print(union)  # Output: {1, 2, 3, 4, 5}

intersection = set7.intersection(set8)
print(intersection)  # Output: {3}

difference = set7.difference(set8)
print(difference)  # Output: {1, 2}
`

  const codeString6 = `
  set1 = {1, 2, 3}
  for item in set1:
      print(item)
`

  const codeString7 = `
  1
  2
  3
`

  const codeString8 = `
  set2 = {4, 5, 6}
  print(4 in set2)  # Output: True
  print(7 in set2)  # Output: False
`

  const codeString9 =`
  set3 = {1, 2, 3}
  list1 = list(set3)
  print(list1[0])  # Output: 1
`

  const codeString10 = `
  set1 = {1, 2, 3}
  set1.add(4)
  print(set1)  # Output: {1, 2, 3, 4}
`

  const codeString11 = `
  set2 = {1, 2, 3}
  set2.update([4, 5, 6])
  print(set2)  # Output: {1, 2, 3, 4, 5, 6}
`

  const codeString12 = `
  set3 = {1, 2, 3}
  set4 = {4, 5, 6}
  set3 = set3 | set4
  print(set3)  # Output: {1, 2, 3, 4, 5, 6}
  `

  const codeString13 = `
  set1 = {1, 2, 3, 4}
  set1.remove(3)
  print(set1)  # Output: {1, 2, 4}
`

  const codeString14 = `
  set2 = {1, 2, 3, 4}
  set2.discard(3)
  print(set2)  # Output: {1, 2, 4}
`

  const codeString15 = `
  set3 = {1, 2, 3, 4}
  removed_item = set3.pop()
  print(removed_item)  # Output: Randomly selected element (e.g., 2)
  print(set3)  # Output: Set without the removed element
`

  const codeString16 = `
  set4 = {1, 2, 3, 4}
  set4.clear()
  print(set4)  # Output: set()
`

  const codeString17 = `
  set1 = {1, 2, 3}

  for item in set1:
    print(item)
`

  const codeString18 = `
  #output
  1
  2
  3
`

  const codeString19 = `
  set2 = {4, 5, 6}

  for item in set2:
    if item % 2 == 0:
        print(f"{item} is even")
    else:
        print(f"{item} is odd")
`

  const codeString20 = `
  4 is even
  5 is odd
  6 is even
`

  const codeString21 = `
  set3 = {"apple", "banana", "cherry"}

 for item in set3:
    if "a" in item:
        for letter in item:
            print(letter)
`

  const codeString22 = `
  a
  p
  p
  l
  e
  a
  a
  n
  a
`

  const codeString23 = `
  set1 = {1, 2, 3}
  set2 = {3, 4, 5}
  
  union_set = set1.union(set2)
  print(union_set)  # Output: {1, 2, 3, 4, 5}
`

  const codeString24 = `
  set3 = {1, 2, 3}
   	set4 = {3, 4, 5}
   
   	intersection_set = set3.intersection(set4)
   	print(intersection_set)  # Output: {3}
`

  const codeString25 = `
  set5 = {1, 2, 3}
  set6 = {3, 4, 5}
  
  difference_set = set5.difference(set6)
  print(difference_set)  # Output: {1, 2}
  `

  const codeString26 = `
  set7 = {1, 2, 3}
  set8 = {3, 4, 5}
  
  symmetric_difference_set = set7.symmetric_difference(set8)
  print(symmetric_difference_set)  # Output: {1, 2, 4, 5}
  `

  const codeString27 = `
  set1 = {1, 2, 3}
  set1.add(4)
  print(set1)  # Output: {1, 2, 3, 4}
`

  const codeString28 = `
  set2 = {1, 2, 3, 4}
  set2.remove(3)
  print(set2)  # Output: {1, 2, 4}
`

  const codeString29= `
  set3 = {1, 2, 3, 4}
  set3.discard(3)
  print(set3)  # Output: {1, 2, 4}
`

  const codeString30 = `
  set4 = {1, 2, 3, 4}
  removed_element = set4.pop()
  print(removed_element)  # Output: Randomly selected element (e.g., 2)
  print(set4)  # Output: Set without the removed element
`

  const codeString31 = `
  set5 = {1, 2, 3, 4}
  set5.clear()
  print(set5)  # Output: set()
`

  const codeString32 = `
  set6 = {1, 2, 3}
  set7 = {3, 4, 5}
  
  union_set = set6.union(set7)
  print(union_set)  # Output: {1, 2, 3, 4, 5}
`

  const codeString33 = ` 
  set8 = {1, 2, 3}
  set9 = {3, 4, 5}
  
  intersection_set = set8.intersection(set9)
  print(intersection_set)  # Output: {3}
`

  const codeString34 = `
  set10 = {1, 2, 3}
  set11 = {3, 4, 5}
  
  difference_set = set10.difference(set11)
  print(difference_set)  # Output: {1, 2}
`

  const codeString35 = `
  set12 = {1, 2, 3}
  set13 = {3, 4, 5}
  
  symmetric_difference_set = set12.symmetric_difference(set13)
  print(symmetric_difference_set)  # Output: {1, 2, 4, 5}
`

  



  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Sets:</h4>
     <p className='text-justify p-2 pt-4'> In Python, a set is an unordered collection of unique elements. Sets are useful for various operations like removing duplicates, membership testing, and performing mathematical set operations such as union, intersection, and difference. In this response, I'll explain sets in Python, their properties, and provide examples to illustrate their usage.</p>
     <p className='text-justify p-2 pt-4'> <b>Creating Sets:</b></p>
     <p className='text-justify p-2 pt-4'> Sets can be created using curly braces `{}` or the `set()` constructor.</p>
                  <CodeHighlighter>
               {codeString} 
             </CodeHighlighter>
      <p className='text-justify p-2 pt-4'> In this example, `set1` is created using curly braces, and `set2` is created using the `set()` constructor and a list of elements.</p>
      <p className='text-justify p-2 pt-4'> <b>Properties of Sets:</b></p>
      <p className='text-justify p-2 pt-4'> <b>1. Uniqueness: Sets contain only unique elements. Duplicate values are automatically removed.</b></p>
            <CodeHighlighter>
               {codeString1} 
             </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the duplicate value `2` is automatically removed, and the resulting set contains only unique elements.</p>

      <p className='text-justify p-2 pt-4'> <b>2. Unordered: Sets are unordered, meaning the elements do not have a specific order.</b></p>
            <CodeHighlighter>
               {codeString2} 
             </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, even though the elements were defined in a different order, the set is printed in a sorted order.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Common Set Operations:</h4>
      <p className='text-justify p-2 pt-4'> <b>1. Adding Elements: Elements can be added to a set using the `add()` method.</b></p>
            <CodeHighlighter>
               {codeString3} 
             </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the element `4` is added to `set5` using the `add()` method.</p>

      <p className='text-justify p-2 pt-4'> <b>2. Removing Elements: Elements can be removed from a set using the `remove()` method.</b></p>
            <CodeHighlighter>
               {codeString4} 
             </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the element `2` is removed from `set6` using the `remove()` method.</p>

      <p className='text-justify p-2 pt-4'> <b>3. Set Operations: Sets support various mathematical set operations like union, intersection, and difference.</b></p>
            <CodeHighlighter>
               {codeString5} 
             </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, `union` contains all the unique elements from both `set7` and `set8`, `intersection` contains the elements common to both sets, and `difference` contains the elements present in `set7` but not in `set8`.</p>
      <p className='text-justify p-2 pt-4'>Sets in Python provide a powerful way to work with collections of unique elements and perform set operations efficiently. They are particularly useful when dealing with tasks like removing duplicates or finding common elements across multiple collections.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Access Set Items</h4>
      <p className='text-justify p-2 pt-4'>In Python, sets are unordered collections of unique elements. Since sets are unordered, you cannot access items by their index as you would with lists or tuples. Instead, you can use various methods to access and iterate over the items in a set. In this response, I'll explain how to access set items in Python with proper format and examples.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Accessing Set Items:</h4>
      <p className='text-justify p-2 pt-4'> <b>1. Iteration using a `for` loop:</b></p>
      <p className='text-justify p-2 pt-4'>You can iterate over the items in a set using a `for` loop. The loop will iterate over each item in an arbitrary order since sets are unordered.</p>
            <CodeHighlighter>
               {codeString6} 
             </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>Output:</p>
             <CodeHighlighter>
               {codeString7} 
             </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, the `for` loop iterates over each item in `set1` and prints it.</p>


     <p className='text-justify p-2 pt-4'> <b>2. Membership testing using the `in` keyword:</b></p>
      <p className='text-justify p-2 pt-4'>You can check if an item is present in a set using the `in` keyword. It returns a boolean value indicating whether the item is a member of the set or not.</p>
            <CodeHighlighter>
               {codeString8} 
             </CodeHighlighter>

     <p className='text-justify p-2 pt-4'> In this example, the `in` keyword is used to check if `4` and `7` are present in `set2`.</p>


     <p className='text-justify p-2 pt-4'> <b>3. Converting a set to a list or tuple for indexing:</b></p>
      <p className='text-justify p-2 pt-4'>If you need to access items by index, you can convert the set to a list or tuple. However, keep in mind that sets are unordered, so the indexing will be arbitrary.</p>
            <CodeHighlighter>
               {codeString9} 
             </CodeHighlighter>

     <p className='text-justify p-2 pt-4'> In this example, `set3` is converted to a list using the `list()` function, and then the first item in the list (`1`) is accessed using indexing.</p>
     <p className='text-justify p-2 pt-4'>It's important to note that sets are primarily designed for membership testing and set operations rather than item access by index. If you need to access items by index, you may want to consider using a different data structure like a list or tuple.</p>

     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Add set items:</h4>
      <p className='text-justify p-2 pt-4'>In Python, sets are mutable, unordered collections of unique elements. This means you can add items to a set after it is created. In this response, I'll explain how to add items to a set in Python, providing examples to illustrate the process.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Adding Items to a Set:</h4>
      <p className='text-justify p-2 pt-4'>You can add items to a set using the `add()` method or the `update()` method.</p>
      <p className='text-justify p-2 pt-4'> <b>1. Using the `add()` method:</b></p>
      <p className='text-justify p-2 pt-4'>The `add()` method is used to add a single element to a set.</p>
            <CodeHighlighter>
               {codeString10} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'> In this example, the `add()` method is used to add the element `4` to `set1`. The resulting set contains the added element.</p>


       <p className='text-justify p-2 pt-4'> <b>2. Using the `update()` method:</b></p>
      <p className='text-justify p-2 pt-4'>The `update()` method is used to add multiple elements to a set. It takes an iterable as an argument, such as a list or another set.</p>
            <CodeHighlighter>
               {codeString11} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'> In this example, the `update()` method is used with a list `[4, 5, 6]` to add multiple elements to `set2`. The resulting set contains all the added elements.</p>
       <p className='text-justify p-2 pt-4'>Note: When using the `add()` or `update()` methods, duplicate elements are automatically ignored since sets only contain unique elements.</p>

       <p className='text-justify p-2 pt-4'> <b>3. Using the union of sets:</b></p>
      <p className='text-justify p-2 pt-4'> You can also add items to a set by performing the union operation with another set using the `|` operator.</p>
            <CodeHighlighter>
               {codeString12} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'> In this example, the `|` operator is used to perform the union operation between `set3` and `set4`, and the result is assigned back to `set3`.</p>
       <p className='text-justify p-2 pt-4'>Adding items to a set allows you to expand and modify the set's contents. Whether you want to add a single item or multiple items, the `add()` and `update()` methods are available for your needs.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Remove Set Items:</h4>
      <p className='text-justify p-2 pt-4'>In Python, sets are mutable collections of unique elements. This means you can remove items from a set after it is created. In this response, I'll explain how to remove items from a set in Python and provide examples to illustrate the process.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Removing Items from a Set:</h4>
      <p className='text-justify p-2 pt-4'>You can remove items from a set using various methods such as `remove()`, `discard()`, and `pop()`.</p>
      <p className='text-justify p-2 pt-4'> <b>1. Using the `remove()` method:</b></p>
      <p className='text-justify p-2 pt-4'>The `remove()` method is used to remove a specific element from a set. If the element does not exist in the set, it raises a `KeyError`.</p>
            <CodeHighlighter>
               {codeString13} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>  In this example, the `remove()` method is used to remove the element `3` from `set1`. The resulting set no longer contains the removed element.</p>

       <p className='text-justify p-2 pt-4'> <b>2. Using the `discard()` method:</b></p>
      <p className='text-justify p-2 pt-4'>The `discard()` method is used to remove a specific element from a set. If the element does not exist in the set, it does not raise an error.</p>
            <CodeHighlighter>
               {codeString14} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>In this example, the `discard()` method is used to remove the element `3` from `set2`. If the element is not present, no error is raised, and the set remains unchanged.</p>

       <p className='text-justify p-2 pt-4'> <b>3. Using the `pop()` method:</b></p>
      <p className='text-justify p-2 pt-4'>The `pop()` method removes and returns an arbitrary element from the set. Since sets are unordered, the element to be removed is not deterministic.</p>
            <CodeHighlighter>
               {codeString15} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'> In this example, the `pop()` method is used to remove an arbitrary element from `set3`, and the removed element is stored in `removed_item`.</p>

       <p className='text-justify p-2 pt-4'> <b>4. Clearing a set:</b></p>
      <p className='text-justify p-2 pt-4'>You can completely empty a set by using the `clear()` method. After calling this method, the set will be empty.</p>
            <CodeHighlighter>
               {codeString16} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>In this example, the `clear()` method is used to remove all elements from `set4`, resulting in an empty set.</p>
       <p className='text-justify p-2 pt-4'>By using these methods, you can selectively remove specific elements or completely clear a set in Python. Choose the appropriate method based on your requirements for modifying the set.</p>

       <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Loop Sets</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can iterate over sets using a `for` loop to access and process each element in the set. Since sets are unordered collections of unique elements, the order of iteration is arbitrary. In this response, I'll explain how to loop over sets in Python with proper format and examples.</p>
      <p className='text-justify p-2 pt-4'> <b>Looping Over Sets:</b></p>
      <p className='text-justify p-2 pt-4'>You can use a `for` loop to iterate over the elements of a set.</p>
            <CodeHighlighter>
               {codeString17} 
             </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>Output:</p>
             <CodeHighlighter>
               {codeString18} 
             </CodeHighlighter>
             <p className='text-justify p-2 pt-4'>In this example, the `for` loop iterates over each element in `set1`, and the loop variable `item` takes on each element's value. The elements are printed in an arbitrary order since sets are unordered.</p>
             <p className='text-justify p-2 pt-4'>You can perform various operations within the `for` loop, such as checking conditions, performing calculations, or updating other data structures based on the elements of the set.</p>

             <CodeHighlighter>
               {codeString19} 
             </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>Output:</p>
             <CodeHighlighter>
               {codeString20} 
             </CodeHighlighter>

             <p className='text-justify p-2 pt-4'>In this example, the `for` loop iterates over each element in `set2`. For each element, the loop checks if it is even or odd and prints the corresponding message.</p>
             <p className='text-justify p-2 pt-4'>You can combine looping over sets with other Python constructs, such as conditional statements or nested loops, to perform more complex operations on the set elements.</p>

             <CodeHighlighter>
               {codeString21} 
             </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>Output:</p>
             <CodeHighlighter>
               {codeString22} 
             </CodeHighlighter>

             <p className='text-justify p-2 pt-4'>In this example, the `for` loop iterates over each element in `set3`. For elements containing the letter "a", an inner `for` loop is used to iterate over each character and print it.</p>
             <p className='text-justify p-2 pt-4'>By using a `for` loop, you can access and process each element in a set, allowing you to perform operations and manipulate the data according to your requirements. Remember that sets are unordered, so the iteration order may vary.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Join Sets:</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can join sets together using various set operations to create a new set that contains elements from both sets. The common set operations for joining sets are union, intersection, and difference. In this response, I'll explain how to join sets in Python with proper format and examples.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Joining Sets:</h4>
      <p className='text-justify p-2 pt-4'> <b>1. Union:</b></p>
      <p className='text-justify p-2 pt-4'>The union operation combines two or more sets, removing any duplicates, and creates a new set that contains all unique elements from both sets.</p>
            <CodeHighlighter>
               {codeString23} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'> In this example, the `union()` method is used to create a new set `union_set` that contains all unique elements from `set1` and `set2`.</p>


       <p className='text-justify p-2 pt-4'> <b>2. Intersection:</b></p>
      <p className='text-justify p-2 pt-4'> The intersection operation returns a new set that contains only the elements that are common to both sets.</p>
            <CodeHighlighter>
               {codeString24} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>   In this example, the `intersection()` method is used to create a new set `intersection_set` that contains only the common element `3` between `set3` and `set4`.</p>


       <p className='text-justify p-2 pt-4'> <b>3. Difference:</b></p>
      <p className='text-justify p-2 pt-4'> The difference operation returns a new set that contains the elements present in the first set but not in the second set.</p>
            <CodeHighlighter>
               {codeString25} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>In this example, the `difference()` method is used to create a new set `difference_set` that contains the elements `1` and `2` from `set5` that are not present in `set6`.</p>


       <p className='text-justify p-2 pt-4'> <b>4. Symmetric Difference:</b></p>
      <p className='text-justify p-2 pt-4'> The symmetric difference operation returns a new set that contains the elements present in either of the sets but not in both.</p>
            <CodeHighlighter>
               {codeString26} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>In this example, the `symmetric_difference()` method is used to create a new set `symmetric_difference_set` that contains the elements `1`, `2`, `4`, and `5` from both `set7` and `set8`, excluding the common element `3`.</p>
       <p className='text-justify p-2 pt-4'>By using these set operations, you can join sets together and perform set operations efficiently to create new sets with specific properties.</p>


       <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Set Methods</h4>
      <p className='text-justify p-2 pt-4'>In Python, sets are mutable collections of unique elements. They provide various built-in methods for performing common set operations and manipulating sets. In this response, I'll explain some of the commonly used set methods in Python, providing proper format and examples.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Joining Sets:</h4>
      <p className='text-justify p-2 pt-4'> <b>1. `add(element)`:</b></p>
      <p className='text-justify p-2 pt-4'>Adds an element to the set.</p>
            <CodeHighlighter>
               {codeString27} 
             </CodeHighlighter>

       <p className='text-justify p-2 pt-4'> <b>2. `remove(element)`:</b></p>
      <p className='text-justify p-2 pt-4'>Removes a specific element from the set. Raises a `KeyError` if the element does not exist.</p>
            <CodeHighlighter>
               {codeString28} 
             </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>3. `discard(element)`:</b></p>
      <p className='text-justify p-2 pt-4'> Removes a specific element from the set. Does not raise an error if the element is not found.</p>
            <CodeHighlighter>
               {codeString29} 
             </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>4. `pop()`:</b></p>
      <p className='text-justify p-2 pt-4'> Removes and returns an arbitrary element from the set. Since sets are unordered, the removed element is not deterministic.</p>
            <CodeHighlighter>
               {codeString30} 
             </CodeHighlighter>


      <p className='text-justify p-2 pt-4'> <b>5. `clear()`:</b></p>
      <p className='text-justify p-2 pt-4'>  Removes all elements from the set, making it empty.</p>
            <CodeHighlighter>
               {codeString31} 
             </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>6. `union(set2, set3, ...)`:</b></p>
      <p className='text-justify p-2 pt-4'>Returns a new set that contains all unique elements from the set and other sets.</p>
            <CodeHighlighter>
               {codeString32} 
             </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>7. `intersection(set2, set3, ...)`:</b></p>
      <p className='text-justify p-2 pt-4'> Returns a new set that contains only the elements that are common to the set and other sets.</p>
            <CodeHighlighter>
               {codeString33} 
             </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b> 8. `difference(set2, set3, ...)`:</b></p>
      <p className='text-justify p-2 pt-4'> Returns a new set that contains the elements present in the set but not in other sets.</p>
            <CodeHighlighter>
               {codeString34} 
             </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>9. `symmetric_difference(set2)`:</b></p>
      <p className='text-justify p-2 pt-4'> Returns a new set that contains the elements present in either the set or the other set, but not in both.</p>
            <CodeHighlighter>
               {codeString35} 
             </CodeHighlighter>


           </article>
       </section>
    </div>
  )
}

export default PythonSets