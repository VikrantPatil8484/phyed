
import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 1

const IntroPython = () => {
  const codeString = `
  from flask import Flask
  app = Flask(__name__)
  
  @app.route('/')
  def hello_world():
      return 'Hello, World!'
  
  if __name__ == '__main__':
      app.run()  
  `
const codeString1 =`
  import pandas as pd

  # Create a DataFrame
  data = {'Name': ['Alice', 'Bob', 'Charlie'],
          'Age': [25, 30, 35],
          'City': ['New York', 'London', 'Paris']}
  df = pd.DataFrame(data)

  # Display the DataFrame
  print(df)
`

const codeString2 = `
import pygame
pygame.init()

# Create a game window
screen = pygame.display.set_mode((800, 600))

# Game loop

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.fill((255, 255, 255))
    pygame.display.update()

pygame.quit()
`


  return (
    <div >
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'> Creation of Python:</h4>
              <p className='text-justify p-2 pt-4'>1. Python was created by Guido van Rossum in the late 1980s. Guido wanted to make a programming language that was easy to read and write. He named it Python after the British comedy group Monty Python, as he was a fan of their shows.</p>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'> Python's Philosophy:</h4>
             <p className='text-justify p-2 pt-4'>2. Python was designed with a philosophy of simplicity, readability, and a focus on code maintainability. It emphasises clean and straightforward syntax, making it easy to understand and write code quickly.</p>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'> Versatility of Python:</h4>
              <p className='text-justify p-2 pt-4'> Python is a versatile language used for various purposes, including:</p>
          <ul className='list-disc px-10'>
               <li className='pt-4'>Web Development: Python can be used to create websites and web applications using frameworks like Django and Flask.</li>
                <li className='pt-2'>Data Analysis and Machine Learning: Python has powerful libraries such as NumPy, Pandas, and scikit-learn, which are widely used for data analysis, scientific computing, and machine learning.</li>
                <li className='pt-2'>Automation and Scripting: Python is commonly used for automating repetitive tasks, such as file management, system administration, and network automation.</li>
                <li className='pt-4'>Game Development: Python can be used to create games with libraries like Pygame.</li>
                <li className='pt-2'>Robotics: Python is used in robotics for programming and controlling robots.</li>
                <li className='pt-2'>Internet of Things (IoT): Python is utilised in IoT projects for connecting and controlling devices.</li>
          </ul>
            <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python Examples:</h4>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Web Development Example:</li>
            </ul>
          <CodeHighlighter>
              {codeString} 
          </CodeHighlighter>
          <p className='text-justify p-2 pt-4'>This code creates a simple web application using the Flask framework. When you access the website's homepage, it displays "Hello, World!".</p>
            <ul className='list-disc px-10'>
              <li className='pt-4'>Data Analysis Example:</li>
            </ul>
            <CodeHighlighter>
              {codeString1} 
          </CodeHighlighter>
          <p className='text-justify p-2 pt-4'>This code uses the Pandas library to create and display a DataFrame, which is a tabular data structure. It represents information about people's names, ages, and cities.</p>
          <ul className='list-disc px-10'>
              <li className='pt-4'>Game Development Example:</li>
            </ul>
            <CodeHighlighter>
              {codeString2} 
          </CodeHighlighter>
          <p className='text-justify p-2 pt-4'>This code utilises the Pygame library to create a game window and a basic game loop that keeps the window open until the user closes it.</p>
          <p className='text-justify p-2 pt-4'>These examples demonstrate how Python can be used for different purposes, and they showcase the simplicity and readability of the language. Python's flexibility and extensive libraries make it suitable for a wide range of projects, from web development to data analysis and game development.</p>
                      
        </article>
      </section>
       </div>
  )
}

export default IntroPython


