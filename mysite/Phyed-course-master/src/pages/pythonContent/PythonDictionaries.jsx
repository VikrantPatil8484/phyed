import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 15

const PythonDictionaries = () => {

  const codeString = `
   person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "occupation": "Engineer"
  }
`

const codeString1 = `
 print(person["name"])  # Output: John Doe
print(person["age"])   # Output: 30
`
const codeString2 = `
 person["age"] = 31
print(person["age"])   # Output: 31
`

const codeString3 = `
 print(person.get("address", "Unknown"))  # Output: Unknown
`

const codeString4 = `
person["address"] = "123 Main St"
print(person)  # Output: {'name': 'John Doe', 'age': 31, 'city': 'New York', 'occupation': 'Engineer', 'address': '123 Main St'}
`
const codeString5 = `
 del person["occupation"]
print(person)  # Output: {'name': 'John Doe', 'age': 31, 'city': 'New York', 'address': '123 Main St'}
`

const codeString6 = `
 student = {
  "name": "Alice",
  "age": 18,
  "grade": "12th",
  "subjects": ["Math", "Science", "English"],
  "address": {
      "street": "123 Elm St",
      "city": "New York",
      "zip": "10001"
  }
}
`

const codeString7 = `
 contacts = {
  "John Doe": "john@example.com",
  "Jane Smith": "jane@example.com",
  "Mike Johnson": "mike@example.com"
}
`

const codeString8 = `
 print(contacts["John Doe"])  # Output: john@example.com
`

const codeString9 = ` 
email = contacts["Jane Smith"]
print(email)  # Output: jane@example.com
`

const codeString10 = `
email = contacts.get("Mike Smith", "No email found")
print(email)  # Output: No email found
`

const codeString11 = `
keys = contacts.keys()
print(keys)  # Output: dict_keys(['John Doe', 'Jane Smith', 'Mike Johnson'])
`

const codeString12 = `
values = contacts.values()
print(values)  # Output: dict_values(['john@example.com', 'jane@example.com', 'mike@example.com'])
`

const codeString13 = `
for key in contacts:
print(key)  # Output: John Doe, Jane Smith, Mike Johnson

for value in contacts.values():
print(value)  # Output: john@example.com, jane@example.com, mike@example.com
`

const codeString14 = `
for key, value in contacts.items():
print(key, ":", value)
`

const codeString15 = `#output -
John Doe : john@example.com
Jane Smith : jane@example.com
Mike Johnson : mike@example.com

`

const codeString16 = `
person = {
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "occupation": "Engineer"
}
`

const codeString17 = `
person["age"] = 31
print(person)  # Output: {'name': 'John Doe', 'age': 31, 'city': 'New York', 'occupation': 'Engineer'}
`

const codeString18 = `
person["city"] = "San Francisco"
person["occupation"] = "Software Developer"
print(person)  # Output: {'name': 'John Doe', 'age': 31, 'city': 'San Francisco', 'occupation': 'Software Developer'}
`

const codeString19 = `
person["address"] = "123 Main St"
print(person)  # Output: {'name': 'John Doe', 'age': 31, 'city': 'San Francisco', 'occupation': 'Software Developer', 'address': '123 Main St'}
`

const codeString20 = `
 student = {
  "name": "Alice",
  "age": 18,
  "grade": "12th",
  "subjects": ["Math", "Science", "English"]
}
`

const codeString21 = `
student["address"] = "123 Elm St"
print(student)
`

const codeString22 = `
{
  "name": "Alice",
  "age": 18,
  "grade": "12th",
  "subjects": ["Math", "Science", "English"],
  "address": "123 Elm St"
}
`

const codeString23 = `
student["grade"] = "11th"
print(student)
`

const codeString24 = `
{
  "name": "Alice",
  "age": 18,
  "grade": "11th",
  "subjects": ["Math", "Science", "English"],
  "address": "123 Elm St"
}
`

const codeString25 = `
student["phone"] = "123-456-7890"
student["email"] = "alice@example.com"
print(student)
`

const codeString26 = `
{
  "name": "Alice",
  "age": 18,
  "grade": "11th",
  "subjects": ["Math", "Science", "English"],
  "address": "123 Elm St",
  "phone": "123-456-7890",
  "email": "alice@example.com"
}
`

const codeString27 = `
cart = {
  "item1": 10,
   "item2": 5,
  "item3": 3
}
`

const codeString28 = `
del cart["item2"]
print(cart)
`

const codeString29 = `
{
  "item1": 10,
  "item3": 3
}
`

const codeString30 = `
removed_quantity = cart.pop("item3")
print(cart)
print(removed_quantity)
`

const codeString31 = `
{
  "item1": 10
}
3
`

const codeString32 = `
removed_quantity = cart.pop("item4", 0)
print(cart)
print(removed_quantity)
`

const codeString33 = `
{
  "item1": 10
}
0
`

const codeString34 = `
items_to_remove = []
for item, quantity in cart.items():
    if quantity <= 5:
        items_to_remove.append(item)

for item in items_to_remove:
    del cart[item]

print(cart)
`

const codeString35 = `
{
  "item1": 10
}
`

const codeString36 = `
grades = {
  "Math": 90,
  "Science": 85,
  "English": 92,
  "History": 88
}
`

const codeString37 = `
for subject in grades:
print(subject)
`

const codeString38 = `
Math
Science
English
History
`

const codeString39 = `
for grade in grades.values():
    print(grade)
`

const codeString40 = `
90
85
92
88
`

const codeString41 = `
for subject, grade in grades.items():
print(subject, "-", grade)
`

const codeString42= `
Math - 90
Science - 85
English - 92
History - 88
`

const codeString43 = `
total_grade = 0
count = 0

for grade in grades.values():
    total_grade += grade
    count += 1

average_grade = total_grade / count
print("Average grade:", average_grade)
`

const codeString44 = `
person = {
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "occupation": "Engineer"
}
`

const codeString45 = `
person_copy = person.copy()
`

const codeString46 = `
person_copy = dict(person)
`

const codeString47 = `
cart = {
  "item1": {
      "name": "Shirt",
      "price": 20
  },
  "item2": {
      "name": "Jeans",
      "price": 30
  }
}
`

const codeString48 = `
cart_copy_shallow = cart.copy()
`

const codeString49 = `
cart_copy_shallow["item1"]["price"] = 25
print(cart)  # Output: {'item1': {'name': 'Shirt', 'price': 25}, 'item2': {'name': 'Jeans', 'price': 30}}
`

const codeString50 = `
import copy

cart_copy_deep = copy.deepcopy(cart)
`

const codeString51 = `
cart_copy_deep["item2"]["price"] = 35
print(cart)  # Output: {'item1': {'name': 'Shirt', 'price': 25}, 'item2': {'name': 'Jeans', 'price': 30}}
`

const codeString52 = `
bookstore = {
  "fiction": {
      "novel": ["Harry Potter", "To Kill a Mockingbird"],
      "science fiction": ["Dune", "1984"]
  },
  "non-fiction": {
      "biography": ["The Diary of a Young Girl", "Steve Jobs"],
      "history": ["Sapiens", "The Guns of August"]
  }
}
`

const codeString53 = `
book = bookstore["fiction"]["novel"][1]
print(book)
`

const codeString54 = `
To Kill a Mockingbird
`

const codeString55 = `
for category, subcategories in bookstore.items():
    print(category + ":")
    for subcategory, books in subcategories.items():
        print("- " + subcategory + ":")
        for book in books:
            print("  - " + book)
`

const codeString56 = `
fiction:
- novel:
  - Harry Potter
  - To Kill a Mockingbird
- science fiction:
  - Dune
  - 1984
non-fiction:
- biography:
  - The Diary of a Young Girl
  - Steve Jobs
- history:
  - Sapiens
  - The Guns of August
`

const codeString57 = `
my_dict = {"name": "John", "age": 30, "city": "New York"}
my_dict.clear()
print(my_dict)  # Output: {}
`

const codeString58 = `
my_dict = {"name": "John", "age": 30, "city": "New York"}
age = my_dict.get("age")
profession = my_dict.get("profession", "Unknown")
print(age)  # Output: 30
print(profession)  # Output: Unknown
`

const codeString59 = `
my_dict = {"name": "John", "age": 30, "city": "New York"}
keys = my_dict.keys()
print(keys)  # Output: dict_keys(['name', 'age', 'city'])
`

const codeString60 = `
my_dict = {"name": "John", "age": 30, "city": "New York"}
values = my_dict.values()
print(values)  # Output: dict_values(['John', 30, 'New York'])
`

const codeString61 = `
my_dict = {"name": "John", "age": 30, "city": "New York"}
items = my_dict.items()
print(items)  # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])
`




  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Dictionaries</h4>
      <p className='text-justify p-2 pt-4'>In Python, a dictionary is a mutable and unordered collection of key-value pairs, enclosed in curly braces `{}`. It provides a way to store and retrieve data based on unique keys. Each key-value pair in a dictionary is separated by a colon `:`. The keys within a dictionary must be unique, while the values can be of any data type, such as numbers, strings, lists, or even other dictionaries.</p>
      
      <p className='text-justify p-2 pt-4'> Here's an example of a dictionary that represents personal information:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>

            <p className='text-justify p-2 pt-4'> In this example, `person` is a dictionary with four key-value pairs. The keys are `"name"`, `"age"`, `"city"`, and `"occupation"`, and their corresponding values are `"John Doe"`, `30`, `"New York"`, and `"Engineer"`, respectively</p>
            <p className='text-justify p-2 pt-4'>You can access the values in a dictionary by referring to their respective keys. For example:</p>
            <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>You can also modify the values associated with keys:</p>

              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>If you try to access a key that doesn't exist in the dictionary, a `KeyError` will be raised. However, you can avoid this by using the `get()` method, which allows you to provide a default value if the key is not found:</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>To add new key-value pairs to a dictionary, you can simply assign a value to a new key:</p>
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>

              <p className='text-justify p-2 pt-4'>You can also use the `del` keyword to remove a key-value pair:</p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>Dictionaries are often used to represent real-life scenarios. For instance, consider a student database where you want to store information about students:</p>
              <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter>

              <p className='text-justify p-2 pt-4'>In this example, the `student` dictionary contains various details about a student, such as their name, age, grade, subjects, and address. The `subjects` key holds a list of the student's subjects, and the `address` key contains another nested dictionary with details about their address.</p>
              <p className='text-justify p-2 pt-4'>Dictionaries provide a flexible and powerful way to organize and access data in Python, making them suitable for a wide range of applications.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Access Dictionary Items</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can access dictionary items by referring to their respective keys. Dictionaries use keys to store and retrieve associated values. To access a value in a dictionary, you can use square brackets `[]` and provide the key inside them.</p>
      
      <p className='text-justify p-2 pt-4'> Let's consider an example where we have a dictionary representing a contact list:</p>
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the dictionary `contacts` contains three key-value pairs, where the keys are names and the values are email addresses.</p>
      <p className='text-justify p-2 pt-4'>To access a specific value in the dictionary, you can use the key within square brackets:</p>
              <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'>You can also store the value in a variable for later use:</p>
              <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter>
      <p className='text-justify p-2 pt-4'>If you try to access a key that doesn't exist in the dictionary, a `KeyError` will be raised. However, you can use the `get()` method to provide a default value if the key is not found:</p>
              <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter>


     <p className='text-justify p-2 pt-4'>In addition to accessing individual values, you can retrieve all the keys or values present in a dictionary. To get a list of all keys, you can use the `keys()` method:</p>
              <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>To get a list of all values, you can use the `values()` method:</p>
              <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>You can also iterate over the keys or values of a dictionary using a `for` loop:</p>
              <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>If you want to access both keys and values together, you can use the `items()` method, which returns a list of key-value tuples:</p>
              <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>This will output:</p>
              <CodeHighlighter>
                {codeString15} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'> Accessing dictionary items allows you to retrieve and work with specific data stored within the dictionary, providing flexibility and control over your program's logic.</p>
             
             
             
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Change Dictionary Items:</h4>
      <p className='text-justify p-2 pt-4'>In Python, dictionaries are mutable, which means you can modify their contents after they are created. You can change dictionary items by accessing them using their keys and assigning a new value.</p>
      
      <p className='text-justify p-2 pt-4'> Let's consider an example where we have a dictionary representing a person's information:</p>
              <CodeHighlighter>
                {codeString16} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the `person` dictionary contains various key-value pairs representing a person's name, age, city, and occupation.</p>
      <p className='text-justify p-2 pt-4'> To change a specific value in the dictionary, you can access it using the key and assign a new value:</p>
              <CodeHighlighter>
                {codeString17} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'>In the above code, we assessed the value associated with the key `"age"` and updated it to `31`. Now the `age` key in the dictionary `person` has the updated value.</p>
      <p className='text-justify p-2 pt-4'>You can also change multiple items simultaneously by assigning new values to their respective keys:</p>
              <CodeHighlighter>
                {codeString18} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, we changed the values associated with the `"city"` and `"occupation"` keys.</p>
      <p className='text-justify p-2 pt-4'>If the key you are trying to change doesn't exist in the dictionary, Python will automatically create a new key-value pair with the assigned value:</p>
              <CodeHighlighter>
                {codeString19} 
              </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>In this case, the key `"address"` was not present in the original `person` dictionary, but by assigning a value to it, a new key-value pair was added.</p>
      <p className='text-justify p-2 pt-4'>Changing dictionary items allows you to update specific values based on their keys. This flexibility can be beneficial when you need to modify or update data stored in a dictionary, just like updating personal information for a person.</p>
              
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Add Dictionary Items:</h4>
      <p className='text-justify p-2 pt-4'>In Python, dictionaries are mutable, which means you can add new items to them even after they are created. To add an item to a dictionary, you can assign a new value to a new or existing key.</p>
      
      <p className='text-justify p-2 pt-4'> Let's consider an example where we have a dictionary representing a student's information:</p>
              <CodeHighlighter>
                {codeString20} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the `student` dictionary contains various key-value pairs representing a student's name, age, grade, and subjects.</p>
      
      <p className='text-justify p-2 pt-4'>To add a new item to the dictionary, you can assign a value to a new key:</p>
              <CodeHighlighter>
                {codeString21} 
              </CodeHighlighter>    

      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString22} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this case, we added a new key-value pair, `"address": "123 Elm St"`, to the `student` dictionary. Now the dictionary contains the student's address as well.</p>
     <p className='text-justify p-2 pt-4'>If the key you are adding already exists in the dictionary, assigning a new value to that key will update the existing value:</p>
        
              <CodeHighlighter>
                {codeString23} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString24} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this case, we changed the value associated with the `"grade"` key from `"12th"` to `"11th"`.</p>
     <p className='text-justify p-2 pt-4'>You can also add multiple items simultaneously by assigning values to their respective keys:</p>
        
              <CodeHighlighter>
                {codeString25} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString26} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, we added two new key-value pairs, `"phone": "123-456-7890"` and `"email": "alice@example.com"`, to the `student` dictionary.</p>
     <p className='text-justify p-2 pt-4'>Adding dictionary items allows you to expand the information stored in a dictionary by introducing new keys and values. This flexibility can be useful when you need to include additional data or attributes for a specific entity, just like adding new contact details for a student.</p>
        
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Remove Dictionary Items:</h4>
      <p className='text-justify p-2 pt-4'>In Python, dictionaries are mutable, which means you can modify their contents after they are created. To remove items from a dictionary, you can use the `del` keyword or the `pop()` method.</p>
      
      <p className='text-justify p-2 pt-4'>Let's consider an example where we have a dictionary representing a shopping cart:</p>
              <CodeHighlighter>
                {codeString27} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'>In this example, the `cart` dictionary contains key-value pairs representing items and their quantities.</p>
      <p className='text-justify p-2 pt-4'>To remove a specific item from the dictionary, you can use the `del` keyword followed by the key:</p>
              <CodeHighlighter>
                {codeString28} 
              </CodeHighlighter>

    <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString29} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this case, we removed the item with the key `"item2"` from the `cart` dictionary.</p>
      <p className='text-justify p-2 pt-4'>Alternatively, you can use the `pop()` method to remove an item from the dictionary and retrieve its value at the same time:</p>
              <CodeHighlighter>
                {codeString30} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString31} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, we used `pop("item3")` to remove the item with the key `"item3"`. The method returns the value associated with the key, which we stored in the `removed_quantity` variable. As a result, the `cart` dictionary no longer contains the item with the key `"item3"`.</p>
      <p className='text-justify p-2 pt-4'>If you try to remove a key that doesn't exist in the dictionary, a `KeyError` will be raised. However, you can provide a default value to `pop()` to avoid the error:</p>
              <CodeHighlighter>
                {codeString32} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString33} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this case, since the key `"item4"` doesn't exist in the dictionary, the default value `0` is returned, and the `cart` dictionary remains unchanged.</p>
      <p className='text-justify p-2 pt-4'>You can also remove items from a dictionary using a loop or other control structures based on certain conditions. For example, to remove all items with quantities less than or equal to 5:</p>
              <CodeHighlighter>
                {codeString34} 
              </CodeHighlighter>     


      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString35} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, we iterated over the dictionary using `cart.items()` to access both the keys and values. If an item's quantity is less than or equal to 5, we appended its key to the `items_to_remove` list. Finally, we removed all the items stored in the `items_to_remove` list from the `cart` dictionary.</p>
    <p className='text-justify p-2 pt-4'>Removing dictionary items allows you to selectively eliminate specific data from a dictionary based on your requirements. This flexibility can be beneficial when you need to update or filter out information, just like removing items from a shopping cart based on certain conditions.</p>
               
             
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Loop Dictionaries:</h4>
      <p className='text-justify p-2 pt-4'>In Python, you can use various techniques to loop over the items in a dictionary. These techniques allow you to access and process the keys and values stored in the dictionary.</p>
      
      <p className='text-justify p-2 pt-4'>Let's consider an example where we have a dictionary representing a student's grades:</p>
              <CodeHighlighter>
                {codeString36} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'>In this example, the `grades` dictionary contains key-value pairs representing different subjects and their corresponding grades.</p>
      
      <p className='text-justify p-2 pt-4'>To loop over the dictionary's keys, you can use a `for` loop:</p>
              <CodeHighlighter>
                {codeString37} 
              </CodeHighlighter>


      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString38} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this case, the loop iterates over the keys in the `grades` dictionary, and at each iteration, the `subject` variable contains the current key.</p>
      <p className='text-justify p-2 pt-4'> To loop over the dictionary's values, you can use the `values()` method:</p>
              <CodeHighlighter>
                {codeString39} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString40} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, the loop iterates over the values in the `grades` dictionary, and at each iteration, the `grade` variable contains the current value.</p>
      <p className='text-justify p-2 pt-4'>To loop over both the keys and values of a dictionary simultaneously, you can use the `items()` method, which returns a list of key-value tuples:</p>
              <CodeHighlighter>
                {codeString41} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString42} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this case, the loop iterates over the key-value pairs in the `grades` dictionary, and at each iteration, the `subject` variable contains the current key, and the `grade` variable contains the current value.</p>
      <p className='text-justify p-2 pt-4'>You can also perform various operations within the loop, such as conditional checks or calculations, based on the keys or values. For example, let's calculate the average grade:</p>
              <CodeHighlighter>
                {codeString43} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this example, we use a loop to iterate over the values in the `grades` dictionary, accumulating the total grade and counting the number of grades. Then, we calculate the average grade by dividing the total grade by the count.</p>
              <p className='text-justify p-2 pt-4'>Looping over dictionaries allows you to iterate through the data stored in a dictionary and perform operations on its keys and values. This flexibility can be useful when you need to process or analyze information, just like calculating and analyzing a student's grades.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Copy Dictionaries:</h4>
      <p className='text-justify p-2 pt-4'>In Python, there are multiple ways to create a copy of a dictionary. It's important to understand that when you assign a dictionary to a new variable, you are creating a reference to the original dictionary, not a separate copy. Therefore, any modifications made to one dictionary will affect the other. To create an independent copy of a dictionary, you can use the `copy()` method or the dictionary constructor `dict()`.</p>
      <p className='text-justify p-2 pt-4'>Let's consider an example where we have a dictionary representing a person's information:</p>
              <CodeHighlighter>
                {codeString44} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the `person` dictionary contains various key-value pairs representing a person's name, age, city, and occupation.</p>
      <p className='text-justify p-2 pt-4'>To create a copy of the dictionary, you can use the `copy()` method:</p>
              <CodeHighlighter>
                {codeString45} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this case, the `person_copy` dictionary is an independent copy of the `person` dictionary. Any modifications made to one dictionary will not affect the other.</p>
      <p className='text-justify p-2 pt-4'>You can also create a copy of a dictionary using the dictionary constructor `dict()`:</p>
              <CodeHighlighter>
                {codeString46} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>This method achieves the same result, where `person_copy` is a separate dictionary with the same key-value pairs as `person`.</p>
      <p className='text-justify p-2 pt-4'>Let's demonstrate the difference between a shallow copy and a deep copy with a real-life example. Consider a dictionary representing a shopping cart with nested dictionaries:</p>
              <CodeHighlighter>
                {codeString47} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>Now, let's create a shallow copy of the `cart` dictionary:</p>
              <CodeHighlighter>
                {codeString48} 
              </CodeHighlighter>    

      <p className='text-justify p-2 pt-4'>Both `cart` and `cart_copy_shallow` refer to the same objects, including the nested dictionaries. Therefore, modifying the nested dictionaries in one dictionary will affect the other:</p>
              <CodeHighlighter>
                {codeString49} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this case, modifying the price of "item1" in `cart_copy_shallow` also changes the price in the original `cart` dictionary.</p>
      <p className='text-justify p-2 pt-4'>To create a deep copy that is independent of the original dictionary and its nested objects, you can use the `copy.deepcopy()` function from the `copy` module:</p>
              <CodeHighlighter>
                {codeString50} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>With a deep copy, modifying the nested dictionaries in one dictionary will not affect the other:</p>
              <CodeHighlighter>
                {codeString51} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>In this case, modifying the price of "item2" in `cart_copy_deep` does not change the price in the original `cart` dictionary.</p>
              <p className='text-justify p-2 pt-4'>Creating copies of dictionaries allows you to work with independent versions of the data, ensuring that modifications to one dictionary do not affect the other. This flexibility can be useful when you need to manipulate or modify data without altering the original dictionary, just like creating copies of important documents for different purposes.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python - Nested Dictionaries:</h4>
      <p className='text-justify p-2 pt-4'>In Python, a nested dictionary is a dictionary that contains other dictionaries as values. This allows you to organize and represent hierarchical or structured data.</p>
      <p className='text-justify p-2 pt-4'>Let's consider an example where we have a nested dictionary representing a bookstore:</p>
              <CodeHighlighter>
                {codeString52} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the `bookstore` dictionary is organized into two main categories: "fiction" and "non-fiction". Each category is represented by a nested dictionary containing subcategories as keys and lists of books as values.</p>
      <p className='text-justify p-2 pt-4'>To access the values in a nested dictionary, you can use multiple indexing. For example, to access the novel "To Kill a Mockingbird", you would use:</p>
              <CodeHighlighter>
                {codeString53} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString54} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this case, `bookstore["fiction"]` returns the nested dictionary representing the "fiction" category. Then, `["novel"][1]` accesses the list of novels and retrieves the second item in the list.</p>
      <p className='text-justify p-2 pt-4'>You can also loop over the keys and values of a nested dictionary using nested loops. For example, let's print all the books in the `bookstore` dictionary:</p>
              
             <CodeHighlighter>
                {codeString55} 
              </CodeHighlighter>

       <p className='text-justify p-2 pt-4'>The output will be:</p>
              <CodeHighlighter>
                {codeString56} 
              </CodeHighlighter>

              <p className='text-justify p-2 pt-4'>In this example, the outer loop iterates over the main categories ("fiction" and "non-fiction"), the second loop iterates over the subcategories within each category, and the innermost loop iterates over the books within each subcategory.</p>
              <p className='text-justify p-2 pt-4'>Nested dictionaries allow you to represent complex and structured data where relationships and hierarchies exist. They can be used to model various real-life scenarios, such as organizing data in a hierarchical manner, like a bookstore with different categories and subcategories of books.</p>


       <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python Dictionary Methods:</h4>
      <p className='text-justify p-2 pt-4'><b>1. `clear()`:</b> This method removes all key-value pairs from a dictionary, making it empty.</p>
              <CodeHighlighter>
                {codeString57} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>  In this example, the `clear()` method is used to remove all the key-value pairs from the `my_dict` dictionary, resulting in an empty dictionary.</p>


              <p className='text-justify p-2 pt-4'><b>2. `get(key, default)`:</b>  This method returns the value associated with a given key. If the key is not found in the dictionary, it returns the specified default value (or `None` if not provided).</p>
              <CodeHighlighter>
                {codeString58} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> In this example, `get("age")` retrieves the value associated with the key `"age"` from the `my_dict` dictionary. The `get("profession", "Unknown")` returns the value associated with the key `"profession"`, which is not found in the dictionary, so it returns the default value `"Unknown"`.</p>


              <p className='text-justify p-2 pt-4'><b>3. `keys()`:</b> This method returns a view object containing all the keys in the dictionary.</p>
              <CodeHighlighter>
                {codeString59} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>   In this example, `keys()` returns a view object containing all the keys in the `my_dict` dictionary.</p>

              <p className='text-justify p-2 pt-4'><b>4. `values()`:</b>  This method returns a view object containing all the values in the dictionary.</p>
              <CodeHighlighter>
                {codeString60} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'>  In this example, `values()` returns a view object containing all the values in the `my_dict` dictionary.</p>



            <p className='text-justify p-2 pt-4'><b>5. `items()`:</b>This method returns a view object containing all the key-value pairs in the dictionary as tuples.</p>
              <CodeHighlighter>
                {codeString61} 
              </CodeHighlighter>
              <p className='text-justify p-2 pt-4'> In this example, `items()` returns a view object containing all the key-value pairs in the `my_dict` dictionary as tuples.</p>
              <p className='text-justify p-2 pt-4'>These are just a few examples of commonly used dictionary methods in Python. There are more methods available that allow you to perform operations such as adding or updating elements, removing items, and merging dictionaries. Understanding and utilizing these methods effectively can help you manipulate and extract information from dictionaries in your Python programs.</p>

            </article>
        </section>
    </div>
  )
}

export default PythonDictionaries