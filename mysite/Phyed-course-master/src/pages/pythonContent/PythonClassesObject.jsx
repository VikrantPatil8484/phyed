import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 23

const PythonClassesObject = () => {
  const codeString = `
  class Person:
  def __init__(self, name, age):
      self.name = name
      self.age = age

  def greet(self):
      print(f"Hello, my name is {self.name}.")

  def introduce(self):
      print(f"I am {self.name} and I am {self.age} years old.")
`

  const codeString1 = `
  person1 = Person("Alice", 25)
  person2 = Person("Bob", 30)
`

  const codeString2 = `
  print(person1.name)       # Accessing attribute
  person2.greet()           # Invoking method
  person1.introduce()       # Invoking method

  #Output:
  Alice
  Hello, my name is Bob.
  I am Alice and I am 25 years old.

 `

  const codeString3 = `
  class Person:
  def __init__(self, name, age):
      self.name = name
      self.age = age

  def greet(self):
      print(f"Hello, my name is {self.name}.")

  person1 = Person("Alice", 25)
  person2 = Person("Bob", 30)

  person1.greet()
  person2.greet()


  #Output:
  Hello, my name is Alice.
  Hello, my name is Bob.

`

  const codeString4 = `
  class Person:
  def __init__(self, name, age):
      self.name = name
      self.age = age

  def __str__(self):
      return f"Person: {self.name}, {self.age} years old."

  person1 = Person("Alice", 25)
  person2 = Person("Bob", 30)

  print(person1)
  print(person2)


  #Output:
  Person: Alice, 25 years old.
  Person: Bob, 30 years old.

  `

  const codeString5 = `class Circle:
  def __init__(self, radius):
      self.radius = radius

  def calculate_area(self):
      area = 3.14 * (self.radius ** 2)
      return area

  def calculate_circumference(self):
      circumference = 2 * 3.14 * self.radius
      return circumference

  # Creating a Circle object
  circle = Circle(5)

  # Calling object methods
  area = circle.calculate_area()
  circumference = circle.calculate_circumference()

  print("Area:", area)
  print("Circumference:", circumference)


  #Output:
  Area: 78.5
  Circumference: 31.400000000000002

`


  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python create a class & object:</h4>
      <p className='text-justify p-2 pt-4'><b>1. Creating a Class:</b></p>
      <p className='text-justify p-2 pt-4'>To create a class in Python, you use the `class` keyword followed by the name of the class. The class can have attributes (variables) and methods (functions) defined within it.</p>
      <p className='text-justify p-2 pt-4'>Here's an example of a class called `Person`:</p>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 
       <p className='text-justify p-2 pt-4'> In this example, the `Person` class has attributes `name` and `age`, and methods `greet()` and `introduce()`. The `__init__()` method is a special method called the constructor, used to initialize the attributes when creating objects.</p>

       <p className='text-justify p-2 pt-4'><b>2. Creating an Object:</b></p>
      <p className='text-justify p-2 pt-4'>To create an object of a class, you call the class name as if it were a function, and assign the resulting object to a variable. You can then access the attributes and invoke the methods of the object.</p>
      <p className='text-justify p-2 pt-4'>Here's an example of creating an object of the `Person` class:</p>
              <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter> 
       <p className='text-justify p-2 pt-4'>In this example, `person1` and `person2` are objects created from the `Person` class. The constructor is called with the specified arguments to initialize the attributes `name` and `age` of each object.</p>

      
      <p className='text-justify p-2 pt-4'><b>3. Accessing Object Attributes and Invoking Methods:</b></p>
      <p className='text-justify p-2 pt-4'>Once you have created an object, you can access its attributes using dot notation (`object.attribute`) and invoke its methods using dot notation (`object.method()`).</p>
      <p className='text-justify p-2 pt-4'>Here's an example of accessing attributes and invoking methods on the objects:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter> 
       <p className='text-justify p-2 pt-4'>In this example, we access the `name` attribute of `person1`, invoke the `greet()` method on `person2`, and invoke the `introduce()` method on `person1`.</p>
       <p className='text-justify p-2 pt-4'>Creating classes and objects allows you to model real-life entities, encapsulate data and behavior, and organize your code in a structured manner. For example, you can create a `Car` class with attributes like `brand` and `color`, and methods like `start_engine()` and `stop_engine`, to represent cars and their actions.</p>
       <p className='text-justify p-2 pt-4'>By utilizing classes and objects, you can create reusable and modular code, represent real-life scenarios, and interact with objects to perform specific actions or operations.</p>


      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>The __init__() Function & The __str__() Function:</h4>
      <p className='text-justify p-2 pt-4'><b>1. The `__init__()` Function:</b></p>
      <p className='text-justify p-2 pt-4'>The `__init__()` function is a special method in Python classes that is automatically called when an object is created from the class. It is used to initialize the attributes of the object. The `self` parameter refers to the object being created and allows you to access its attributes and methods.</p>
      <p className='text-justify p-2 pt-4'> Here's an example that demonstrates the use of the `__init__()` function:</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter> 
       <p className='text-justify p-2 pt-4'>  In this example, the `__init__()` function is defined in the `Person` class. It takes the `name` and `age` parameters and initializes the `name` and `age` attributes of the object. When creating `person1` and `person2`, the `__init__()` function is automatically called with the specified arguments to initialize the attributes.</p>

      <p className='text-justify p-2 pt-4'><b>2. The `__str__()` Function:</b></p>
      <p className='text-justify p-2 pt-4'>The `__str__()` function is another special method in Python classes that returns a string representation of the object. It is commonly used to provide a human-readable string that represents the object's state or information.</p>
      <p className='text-justify p-2 pt-4'>Here's an example that demonstrates the use of the `__str__()` function:</p>
              <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>In this example, the `__str__()` function is defined in the `Person` class. It returns a formatted string representation of the object's `name` and `age` attributes. When the `print()` function is called on the objects, it automatically invokes the `__str__()` function to obtain the string representation.</p>
      <p className='text-justify p-2 pt-4'>The `__init__()` function allows you to initialize the attributes of an object when it is created, providing a way to set the initial state of the object. The `__str__()` function allows you to define a string representation of the object, making it easier to display or print information about the object.</p>
      <p className='text-justify p-2 pt-4'>By utilizing these special functions, you can create more meaningful and informative classes, enhance the functionality of your objects, and provide better interactions with the objects in your program.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>OBJECT METHOD:</h4>
      <p className='text-justify p-2 pt-4'>In Python, object methods are functions defined within a class that are associated with objects of that class. These methods are used to perform actions or operations specific to the objects of the class. They have access to the object's attributes and can manipulate them as needed.</p>
      <p className='text-justify p-2 pt-4'>Here's an example that demonstrates the use of object methods:</p>
              <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'> In this example, we define a class called `Circle` with an `__init__()` method to initialize the `radius` attribute. The class has two object methods: `calculate_area()` and `calculate_circumference()`. </p>
      <p className='text-justify p-2 pt-4'> The `calculate_area()` method calculates the area of the circle using the formula `pi * r^2`, where `r` is the radius. It accesses the `radius` attribute of the object using the `self` keyword.</p>
      <p className='text-justify p-2 pt-4'> The `calculate_circumference()` method calculates the circumference of the circle using the formula `2 * pi * r`. Again, it accesses the `radius` attribute of the object using `self`.</p>
      <p className='text-justify p-2 pt-4'> We create a `Circle` object with a radius of 5 and then call the object methods `calculate_area()` and `calculate_circumference()` on the `circle` object. The calculated values are stored in variables `area` and `circumference`, respectively.</p>
      <p className='text-justify p-2 pt-4'> Object methods allow you to encapsulate functionality specific to the objects of a class. They promote code reusability, as you can create multiple objects and call the same methods on each of them to perform the desired actions or computations.</p>
      <p className='text-justify p-2 pt-4'> In real-life scenarios, object methods can be used to represent behaviors or operations related to specific entities. For example, a `BankAccount` class may have object methods like `deposit()`, `withdraw()`, and `check_balance()`, which perform banking operations on individual accounts.</p>
      <p className='text-justify p-2 pt-4'> By utilizing object methods, you can define the behavior and actions of your objects, manipulate their attributes, and perform operations that are specific to the objects of your class.</p>


            </article>
        </section>
    </div>
  )
}

export default PythonClassesObject