import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 13

const PythonTurples = () => {
  const codeString = `
   empty_tuple = ()
  single_item_tuple = (42,)
  multiple_items_tuple = (1, 2, 3)
  mixed_data_types_tuple = ('apple', 42, True)
  
  `

  const codeString1 = `
   fruits = ('apple', 'banana', 'cherry')
  print(fruits[0])  # Output: 'apple'
  print(fruits[2])  # Output: 'cherry'
  
  `

  const codeString2 = `
   point = 2, 3
  x, y = point
  print(x, y)  # Output: 2 3
  
  `

  const codeString3 = ` 
  fruits = ('apple', 'banana', 'cherry', 'apple')
  print(len(fruits))           # Output: 4
  print(fruits.count('apple')) # Output: 2
  print(fruits.index('banana')) # Output: 1
  
  `

  const codeString4 = ` 
  fruits = ('apple', 'banana', 'cherry')
  fruits[0] = 'orange'  # Raises an error: TypeError: 'tuple' object does not support item assignment
  
  `

  const codeString5= ` 
  fruits = ('apple', 'banana', 'cherry')
  print(fruits[0])  # Output: 'apple'
  print(fruits[2])  # Output: 'cherry'
  
  `

  const codeString6 = ` 
  fruits = ('apple', 'banana', 'cherry')
  print(fruits[-1])  # Output: 'cherry'
  print(fruits[-2])  # Output: 'banana'
  
  `

  const codeString7 = `
   fruits = ('apple', 'banana', 'cherry', 'durian', 'elderberry')
  print(fruits[1:4])  # Output: ('banana', 'cherry', 'durian')
  
  `

  const codeString8 = ` 
  point = (2, 3)
  x, y = point
  print(x, y)  # Output: 2 3
  
  `

  const codeString9 = ` 
  tuple1 = (1, 2, 3)
  tuple2 = (4, 5, 6)
  updated_tuple = tuple1 + tuple2
  print(updated_tuple)  # Output: (1, 2, 3, 4, 5, 6)
  
  `

  const codeString10 = `
   tuple1 = (1, 2, 3)
  new_element = 4
  index_to_replace = 1
  updated_tuple = tuple1[:index_to_replace] + (new_element,) + tuple1[index_to_replace+1:]
  print(updated_tuple)  # Output: (1, 4, 3)
  
  `


  const codeString11 = `
   tuple1 = (1, 2, 3)
  list1 = list(tuple1)
  list1[1] = 4
  updated_tuple = tuple(list1)
  print(updated_tuple)  # Output: (1, 4, 3)
  
  `
  const codeString12 = ` 
  from collections import namedtuple

  Person = namedtuple('Person', ['name', 'age'])
  person1 = Person('Alice', 30)
  updated_person = person1._replace(age=31)
  print(updated_person)  # Output: Person(name='Alice', age=31)
  
  `

  const codeString13 = ` 
  variable1, variable2, ... = tuple_name
  Example 1: Basic Tuple Unpacking
  
  `


  const codeString14 = ` 
  tuple1 = (1, 2, 3)
  a, b, c = tuple1
print(a)  # Output: 1
print(b)  # Output: 2
print(c)  # Output: 3

`

  const codeString15 = ` 
  tuple2 = (4, 5, 6)
  x, y = tuple2
  print(x)  # Output: 4
  print(y)  # Output: 5
  
  `

  const codeString16 = ` 
  tuple3 = (7, 8, 9)
  m, _, n = tuple3
  print(m)  # Output: 7
  print(n)  # Output: 9
  
  `

  const codeString17 = ` 
  nested_tuple = (1, (2, 3), 4)
  p, (q, r), s = nested_tuple
  print(p)  # Output: 1
  print(q)  # Output: 2
  print(r)  # Output: 3
  print(s)  # Output: 4
  
  `

  const codeString18 = `
   tuple1 = (1, 2, 3)
  for element in tuple1:
      print(element)
  
 #Output:
  1
  2
  3
  
  `


  const codeString19 = ` 
  tuple2 = (4, 5)
  tuple3 = (6, 7, 8)
  joined_tuple = tuple2 + tuple3
  print(joined_tuple)
  
  
  #Output:
  (4, 5, 6, 7, 8)
  
  `


  const codeString20 = `
   tuple4 = (1, 2)
  tuple5 = (3, 4)
  tuple4 += tuple5
  print(tuple4)
  
  
  #Output:
  (1, 2, 3, 4)
  
  `

  const codeString21 = ` 
  tuple6 = (1, 2)
  list1 = [3, 4]
  tuple6 = tuple6 + tuple(list1)
  print(tuple6)
  
  
  #Output:
    (1, 2, 3, 4)
  
  `

  const codeString22 = ` 

  tuple1 = (1, 2, 2, 3, 4, 2)
  count = tuple1.count(2)
  print(count)  # Output: 3
 `

 const codeString23 = ` 
 tuple2 = (1, 2, 3, 4, 3, 2, 1)
 index = tuple2.index(3)
 print(index)  # Output: 2
 
 `

 const codeString24= ` 
 tuple3 = (1, 2, 3, 4, 3, 2, 1)
 index = tuple3.index(3, 3)
 print(index)  # Output: 4
 
 `

 const codeString25 = ` 
 tuple4 = (1, 2, 3, 4, 3, 2, 1)
 index = tuple4.index(3, 3, 6)
 print(index)  # Output: 4
 
 `




  return (
    <div>
       <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Tuples</h4>
      <p className='text-justify p-2 pt-4'> In Python, a tuple is an immutable sequence data type that is similar to a list. However, unlike lists, tuples cannot be modified once created. Here's an explanation of tuples in Python, along with examples:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1. Creating Tuples:</b></p>
      <p className='text-justify p-2 pt-4'>Tuples are created by enclosing comma-separated values in parentheses `()`. Here are a few examples:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In the above examples, we create different tuples: an empty tuple, a tuple with a single item, a tuple with multiple items, and a tuple containing mixed data types.</p>
      
      <p className='text-justify p-2 pt-4'> <b>2. Accessing Tuple Elements:</b></p>
      <p className='text-justify p-2 pt-4'>You can access individual elements of a tuple using indexing, similar to lists. Here's an example:</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, we access the first and third elements of the `fruits` tuple using indexing.</p>
      

      <p className='text-justify p-2 pt-4'> <b>3. Tuple Packing and Unpacking:</b></p>
      <p className='text-justify p-2 pt-4'>Tuple packing is the process of creating a tuple by assigning multiple values separated by commas. Tuple unpacking is the process of assigning individual elements of a tuple to separate variables. Here's an example:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, we create a tuple `point` by packing two values (`2` and `3`). Then, we unpack the tuple into separate variables `x` and `y`.</p>
      

      <p className='text-justify p-2 pt-4'> <b>4. Tuple Methods and Operations:</b></p>
      <p className='text-justify p-2 pt-4'>Tuples support a few methods and operations, such as `len()`, `count()`, and `index()`. Here's an example:</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, we use the `len()` function to get the length of the `fruits` tuple, the `count()` method to count the occurrences of a specific element, and the `index()` method to find the index of an element.</p>
      

      <p className='text-justify p-2 pt-4'> <b>5. Immutable Nature:</b></p>
      <p className='text-justify p-2 pt-4'>Tuples are immutable, meaning you cannot modify their elements once created. Attempting to modify a tuple will result in an error. Here's an example:</p>
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, we try to modify the first element of the `fruits` tuple, which raises a `TypeError` because tuples are immutable.</p>
      <p className='text-justify p-2 pt-4'>Tuples are useful when you want to create a collection of items that should not be modified. They are commonly used in scenarios where you need an immutable sequence of values, such as returning multiple values from a function or as keys in dictionaries.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Access Tuple Items</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can access individual items in a tuple using indexing and slicing. Here's an explanation of how to access tuple items, along with examples:</p>
      
      <p className='text-justify p-2 pt-4'> <b>1. Indexing:</b></p>
      <p className='text-justify p-2 pt-4'>You can access individual items in a tuple by specifying their index position, starting from 0 for the first item. Here's an example:</p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, we access the first item of the `fruits` tuple using index 0, and the third item using index 2.</p> 


      <p className='text-justify p-2 pt-4'> <b>2.Negative Indexing</b></p>
      <p className='text-justify p-2 pt-4'>You can also use negative indexing to access items from the end of the tuple. `-1` refers to the last item, `-2` refers to the second-to-last item, and so on. Here's an example:</p>
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, we access the last item of the `fruits` tuple using negative index `-1`, and the second-to-last item using negative index `-2`.</p> 

      <p className='text-justify p-2 pt-4'> <b>3. Slicing:</b></p>
      <p className='text-justify p-2 pt-4'>You can extract a subset of items from a tuple using slicing, which allows you to specify a range of indices. Here's an example:</p>
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, we use slicing with the range `1:4` to extract items from index 1 up to, but not including, index 4. The resulting tuple includes the items `'banana'`, `'cherry'`, and `'durian'`.</p> 


              <p className='text-justify p-2 pt-4'> <b>4. Tuple Unpacking:</b></p>
      <p className='text-justify p-2 pt-4'>You can assign individual tuple items to separate variables using tuple unpacking. Here's an example:</p>
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, we assign the first item of the `point` tuple to the variable `x` and the second item to the variable `y`. This allows us to access and work with the individual values conveniently.</p> 
              <p className='text-justify p-2 pt-4'>These are some of the ways to access items in a tuple in Python. Remember that tuples are immutable, so you cannot modify their items once created. They are useful when you have a collection of values that should not be changed.</p>    

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Update Tuples</h4>
      <p className='text-justify p-2 pt-4'>In Python, tuples are immutable sequences, meaning that once they are created, their elements cannot be modified. However, it is possible to update tuples indirectly by creating new tuples based on existing ones. In this response, I'll explain various methods for updating tuples with proper format and examples.</p>
      
      <p className='text-justify p-2 pt-4'> <b>Method 1: Concatenation</b></p>
      <p className='text-justify p-2 pt-4'>Tuples can be updated by concatenating them with other tuples. This operation creates a new tuple with the elements from both tuples.</p>
              <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'> <b>Method 2: Slicing and Replacing</b></p>
      <p className='text-justify p-2 pt-4'>This method involves slicing the original tuple and combining it with a new tuple that contains the updated elements. It creates a new tuple with the desired modifications.</p>
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>
        <p className='text-justify p-2 pt-4'>Note that (new_element,) is used to create a single-element tuple. The comma after new_element is necessary to distinguish it from a regular parentheses grouping.</p>    


        <p className='text-justify p-2 pt-4'> <b>Method 3: Converting to a List</b></p>
      <p className='text-justify p-2 pt-4'>Tuples can be converted to lists, modified, and then converted back to tuples. This approach is useful when multiple modifications are needed.</p>
              <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'> <b>Method 4: Using the collections.namedtuple Function</b></p>
      <p className='text-justify p-2 pt-4'>The collections.namedtuple function allows creating named tuples with named fields. These named tuples can be updated by creating new instances with modified field values.</p>
              <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, _replace creates a new named tuple with the specified field value replaced while keeping the other fields unchanged.</p>    


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Unpack Tuples</h4>
      <p className='text-justify p-2 pt-4'>In Python, tuple unpacking allows you to assign the elements of a tuple to individual variables. This can be done in a single line of code, making it a convenient way to extract and work with the values stored in a tuple. In this response, I'll explain tuple unpacking in proper format and provide examples to illustrate its usage.</p>
      
      <p className='text-justify p-2 pt-4'> <b>Tuple Unpacking Syntax:</b></p>
            <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'><b>Example 1: Basic Tuple Unpacking</b></p>
              <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the elements of tuple1 are assigned to the variables a, b, and c respectively.</p>    

      <p className='text-justify p-2 pt-4'><b>Example 2: Unpacking with a Different Number of Variables</b></p>
              <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, even though tuple2 has three elements, we are only unpacking the first two. Python allows unpacking a tuple into a different number of variables as long as the number of variables matches the number of elements being unpacked.</p>    

      <p className='text-justify p-2 pt-4'><b>Example 3: Ignoring Certain Elements</b></p>
              <CodeHighlighter>
                {codeString16} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, we use the underscore _ as a placeholder to ignore the second element of tuple3. This is useful when you only need specific elements from a tuple and want to discard the rest.</p>    

      <p className='text-justify p-2 pt-4'><b>Example 4: Unpacking Nested Tuples</b></p>
              <CodeHighlighter>
                {codeString17} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, we have a nested tuple where the second element is itself a tuple. By using nested parentheses in the variable assignment, we can unpack the elements at multiple levels.</p>    
      <p className='text-justify p-2 pt-4'>Tuple unpacking is a powerful feature in Python that simplifies working with the elements of a tuple by assigning them to individual variables. It is especially useful when you know the structure and size of the tuple in advance.</p>    


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Loop Tuples & Join Tuples</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can loop through tuples using various looping constructs like for loops, and you can also join tuples to create new tuples. In this response, I'll explain how to loop through tuples and join tuples with proper format and examples.</p>
      
      <p className='text-justify p-2 pt-4'> <b>Looping Through Tuples:</b></p>
      <p className='text-justify p-2 pt-4'>You can iterate over the elements of a tuple using a for loop. The loop will execute once for each element in the tuple.</p>
              <CodeHighlighter>
                {codeString18} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, each element of tuple1 is printed on a separate line.</p>
      

      <p className='text-justify p-2 pt-4'> <b>Joining Tuples:</b></p>
      <p className='text-justify p-2 pt-4'>You can join or concatenate two or more tuples to create a new tuple that contains the elements from all the tuples.</p>
              <CodeHighlighter>
                {codeString19} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, tuple2 and tuple3 are joined together using the + operator to create a new tuple called joined_tuple.</p>
      <p className='text-justify p-2 pt-4'>Additionally, you can use the += operator to append elements of one tuple to another in-place, modifying the original tuple.</p>    

             <CodeHighlighter>
                {codeString20} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the elements of tuple5 are appended to tuple4 using the += operator, modifying tuple4 in place.</p>
      <p className='text-justify p-2 pt-4'>You can also use the extend method to join a tuple with elements of another iterable, such as a list.</p>    


              <CodeHighlighter>
                {codeString21} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the elements of list1 are converted to a tuple using tuple(list1), and then joined with tuple6 using the + operator to create the tuple6 tuple.</p>
      <p className='text-justify p-2 pt-4'>Looping through tuples and joining tuples are fundamental operations in Python for working with tuple data structures. They allow you to iterate over tuple elements and manipulate tuples to create new ones with combined or modified content.</p>    

     
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Tuple Methods</h4>
      <p className='text-justify p-2 pt-4'>In Python, tuples are immutable sequences, which means they cannot be modified once created. Therefore, tuples have a limited number of methods compared to other data structures like lists. In this response, I'll explain the available tuple methods, their functionalities, and provide examples.</p>
      
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Tuple Methods:</h4>
      <p className='text-justify p-2 pt-4'> <b>1.count(value):</b></p>
      <p className='text-justify p-2 pt-4'>Returns the number of occurrences of a specific value in a tuple.</p>
              <CodeHighlighter>
                {codeString22} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the count() method is used to count the number of occurrences of the value 2 in tuple1.</p>
      

      <p className='text-justify p-2 pt-4'> <b>2.index(value[, start[, end]]):</b></p>
      <p className='text-justify p-2 pt-4'>Returns the index of the first occurrence of a value in a tuple.</p>
      <p className='text-justify p-2 pt-4'>Optional start and end parameters can be provided to specify the search range.</p>
              <CodeHighlighter>
                {codeString23} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the index() method is used to find the index of the first occurrence of the value 3 in tuple2.</p>
              <CodeHighlighter>
                {codeString24} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the index() method is used with the optional start parameter to start the search from index 3.</p>    
    
             <CodeHighlighter>
                {codeString25} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the index() method is used with both the optional start and end parameters to search within the specified range.</p>    
      <p className='text-justify p-2 pt-4'>Note: All the tuple methods mentioned above return the desired results without modifying the original tuple since tuples are immutable.</p>    
      <p className='text-justify p-2 pt-4'>These are the main methods available for tuples in Python. Due to the immutable nature of tuples, there are no methods for adding or removing elements. However, the count and index methods provide useful functionalities for working with tuple data.</p>    
   
      
           
            </article>
        </section>
    </div>
  )
}

export default PythonTurples