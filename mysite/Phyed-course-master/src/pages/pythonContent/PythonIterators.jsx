import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 32

const PythonIterators = () => {
  const codeString =` 
  numbers = [1, 2, 3, 4, 5]  # List is an iterable object
  
  for num in numbers:
      print(num)
  
  `

  const codeString1 =` 
  numbers = [1, 2, 3, 4, 5]
  numbers_iterator = iter(numbers)  # Creating an iterator object
  
  print(next(numbers_iterator))  # Output: 1
  print(next(numbers_iterator))  # Output: 2
  print(next(numbers_iterator))  # Output: 3
  
  `

  const codeString2 =` class GroceryStore:
  def __init__(self, items):
      self.items = items

  def __iter__(self):
      self.index = 0
      return self

  def __next__(self):
      if self.index < len(self.items):
          item = self.items[self.index]
          self.index += 1
          return item
      else:
          raise StopIteration

  store = GroceryStore(["Apple", "Banana", "Orange"])

  for item in store:
    print("Scanning:", item)

`

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'> In Python, an iterator is an object that represents a stream of data, allowing you to iterate or loop over its elements. Iterators provide a way to access and process elements sequentially, without needing to load all the data into memory at once. This is particularly useful when dealing with large datasets or infinite sequences.</p>
      <p className='text-justify p-2 pt-4'> To work with iterators, Python provides two main components: iterable objects and iterator objects.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Iterable Objects:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-4'>An iterable object is any object that can be looped over using the for loop or the <span className='code-text  text-m'>iter()</span> function.</li>
            <li className='pt-2'>It must implement the <span className='code-text  text-m'>__iter__()</span> method, which returns an iterator object.</li>
            <li className='pt-2'>Common examples of iterable objects in Python include lists, strings, tuples, dictionaries, and sets.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 

              <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>numbers</span> list is an iterable object. The <span className='code-text  text-m'>for</span> loop iterates over each element in the list and prints it.</p>


     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Iterator Objects:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-4'>An iterator object represents a stream of data and implements the<span className='code-text  text-m'> __iter__()</span> and <span className='code-text  text-m'>__next__()</span> methods.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>__iter__()</span> method returns the iterator object itself.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>__next__()</span> method retrieves the next element in the sequence. When there are no more elements, it raises a <span className='code-text  text-m'>StopIteration</span> exception.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>iter()</span> function is used to create an iterator object <span className='code-text  text-m'>numbers_iterator</span> from the <span className='code-text  text-m'>numbers</span> list. The <span className='code-text  text-m'>next()</span> function is then called to retrieve the next element from the iterator.</p>     
     
      <p className='text-justify p-2 pt-4'> By using iterators, you can efficiently process large datasets or work with sequences that are generated on the fly, without needing to load everything into memory at once.</p>         
      <p className='text-justify p-2 pt-4'> Now, let's consider a relatable real-life example to understand iterators better.</p>         
      <p className='text-justify p-2 pt-4'> Imagine you are a cashier at a grocery store, and you need to scan and process items for each customer. You can represent the items as an iterator, allowing you to process them one by one.</p>         
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>GroceryStore</span> class represents the iterator object. It implements the <span className='code-text  text-m'>__iter__()</span> and <span className='code-text  text-m'>__next__()</span> methods. The <span className='code-text  text-m'>__iter__()</span> method initializes the index to keep track of the current item, and the <span className='code-text  text-m'>__next__()</span> method retrieves the next item from the list. When there are no more items, it raises a <span className='code-text  text-m'>StopIteration</span> exception. The <span className='code-text  text-m'>store</span> instance of the <span className='code-text  text-m'>GroceryStore</span> class is then iterated using a for loop, simulating the scanning process for each item.</p>     
      <p className='text-justify p-2 pt-4'>By using iterators in Python, you can process data sequentially, handle large datasets efficiently, and work with dynamically generated sequences, just like scanning and processing items at a grocery store one by one.</p>     

            
      
            </article>
        </section>
    </div>
  )
}

export default PythonIterators