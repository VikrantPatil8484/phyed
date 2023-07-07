import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 33

const PythonFileHandling = () => {
  const codeString = ` 
  file = open("data.txt", "r")  # Open file in read mode
  # Perform operations on the file
  file.close()  # Close the file
    `

  const codeString1 = ` 
  file = open("data.txt", "r")
  content = file.read()
  print(content)
  file.close()
  `

  const codeString2 = ` 
  file = open("data.txt", "w")
  file.write("Hello, World!")
  file.close()
  `
  const codeString3 = ` 
    def save_grades(grades):
        file = open("grades.txt", "w")
    
        for student, grade in grades.items():
            file.write(f"{student}: {grade}")
    
        file.close()
    
    grades = {
        "Alice": 90,
        "Bob": 85,
        "Charlie": 95,
        "Diana": 80
    }
    
    save_grades(grades)
      `

  const codeString4 = ` 
  file = open("data.txt", "r")  # Open file in read mode
  `

  const codeString5 = ` 
  file = open("data.txt", "r")
  content = file.read()
  print(content)
  file.close()
    `

  const codeString6 = ` 
  file = open("data.txt", "r")
  line = file.readline()
  
  while line != "":
      print(line)
      line = file.readline()
  
  file.close()`

  const codeString7 = ` 
  file = open("diary.txt", "r")
  content = file.read()
  
  # Perform analysis on the diary content
  word_count = len(content.split())
  line_count = len(content.split(" "))
  
  print("Word Count:", word_count)
  print("Line Count:", line_count)
  
  file.close()
  `

  const codeString8 = ` 
  file = open("data.txt", "w")  # Open file in write mode
    `

  const codeString9 = ` 
  file = open("data.txt", "w")
  file.write("Hello, World!")
  file.close()
    `

  const codeString10 = ` 
  file = open("data.txt", "a")
  file.write("Appending new data!")
  file.close()
    `

  const codeString11 = ` 
  def write_novel(content):
      file = open("novel.txt", "w")
      file.write(content)
      file.close()
  
  novel_content = """
  Chapter 1: The Beginning
  Once upon a time, in a faraway land...
  """
  
  write_novel(novel_content)
    `

  const codeString12 = ` 
  import os
  
  file_path = "data.txt"
  os.remove(file_path)
    `

  const codeString13 = `
   import os
  file_path = "data.txt"
  if os.path.exists(file_path):
      os.remove(file_path)
  else:
      print("File does not exist.")
      `
      
      
const codeString14 = `
 import os

def delete_old_files(folder_path):
    files = os.listdir(folder_path)

    for file in files:
        file_path = os.path.join(folder_path, file)
        if os.path.isfile(file_path):
            os.remove(file_path)

    print("Old files deleted.")

folder_path = "old_documents"
delete_old_files(folder_path)
`

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> File Handling</h4>
      <p className='text-justify p-2 pt-4'> In Python, file handling refers to the process of working with files, including reading from files, writing to files, and modifying file contents. Python provides built-in functions and methods that allow you to interact with files in a convenient manner.</p>
      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Opening and Closing Files:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-4'>To work with a file, you need to open it first using the <span className='code-text  text-m'>open()</span> function, which returns a file object.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>open()</span> function takes two parameters: the file path and the mode in which the file should be opened (read, write, append, etc.).</li>
            <li className='pt-2'>Once you are done working with a file, it is important to close it using the <span className='code-text  text-m'>close()</span> method of the file object to free up system resources.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
              <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 
      <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>open()</span> function is used to open the file named "data.txt" in read mode. The file object is stored in the file variable. After performing operations on the file, the <span className='code-text  text-m'>close()</span> method is called to close it.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Reading from Files:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-4'>Python provides several methods to read from files, including <span className='code-text  text-m'>read()</span>, The <span className='code-text  text-m'>readline()</span>, and The <span className='code-text  text-m'><span className='code-text  text-m'>readlines()</span></span>.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>read()</span> method reads the entire contents of a file as a single string.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>readline()</span> method reads one line at a time from a file.</li>
            <li className='pt-2'> The <span className='code-text  text-m'><span className='code-text  text-m'>readlines()</span></span> method reads all lines of a file and returns them as a list of strings.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>read()</span> method is used to read the entire <span className='code-text  text-m'>contents</span> of the file as a string. The content variable stores the contents, which are then printed.</p>

      <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Writing to Files:</h4>
      <ul className='list-disc px-10'>
            <li className='pt-2'>To write to a file, you need to open it in write mode ("w") or append mode ("a") using the <span className='code-text  text-m'>open()</span> function.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>write()</span> method is used to write data to the file. It takes a string as an argument.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>   
      <p className='text-justify p-2 pt-4'>In this example, the file is opened in write mode, and the <span className='code-text  text-m'>write()</span> method is used to write the string "Hello, World!" to the file.</p>
      <p className='text-justify p-2 pt-4'>Now, let's consider a relatable real-life example to understand file handling better.</p>
      <p className='text-justify p-2 pt-4'>Imagine you are a teacher who needs to keep track of your students' grades. You can use file handling to store the grades in a text file.</p>
              <CodeHighlighter>
                {codeString3} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>save_grades()</span> function takes a dictionary of student grades as input. The function opens the "grades.txt" file in write mode, iterates over the dictionary items, and writes each student's name and grade to the file. The <span className='code-text  text-m'> file.write()</span> method is used to write the data, and the file is closed using <span className='code-text  text-m'>file.close()</span>.</p>     
     <p className='text-justify p-2 pt-4'>By using file handling in Python, you can read and write data to files, store and retrieve information, and manage data persistence, just like keeping track of students' grades by storing them in a file.</p>     

     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'> Python read files</h4>
     <p className='text-justify p-2 pt-4'>Reading files in Python involves opening a file and extracting its contents for further processing. Python provides various methods and techniques to read files efficiently.</p>     
     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Opening Files:</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>To read a file, you need to open it using the <span className='code-text  text-m'>open()</span> function, which returns a file object.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>open()</span> function takes two parameters: the file path and the mode in which the file should be opened (read, write, append, etc.).</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString4} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>open()</span> function is used to open the file named "data.txt" in read mode. The file object is stored in the file variable.</p>     
     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Reading Entire File Contents:</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>To read the entire contents of a file, you can use the <span className='code-text  text-m'>read()</span> method of the file object.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>read()</span> method reads the entire file as a single string.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString5} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>read()</span> method is used to read the entire contents of the file as a string. The <span className='code-text  text-m'>content</span> variable stores the contents, which are then printed.</p>     
     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Reading Line by Line:</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>If you want to read a file line by line, you can use the <span className='code-text  text-m'>readline()</span> method of the file object.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>readline()</span> method reads one line at a time from the file.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString6} 
              </CodeHighlighter> 

     <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>readlines()</span> method is used to read all lines of the file and store them in the <span className='code-text  text-m'>lines</span> variable. The <span className='code-text  text-m'>for</span> loop is then used to iterate over the lines and print them.</p> 
     <p className='text-justify p-2 pt-4'>Now, let's consider a relatable real-life example to understand reading files better.</p>     
     <p className='text-justify p-2 pt-4'>Imagine you have a diary file where you write your thoughts and reflections each day. You can use file reading techniques to read and analyze the contents of your diary.</p>     
              <CodeHighlighter>
                {codeString7} 
              </CodeHighlighter>

     <p className='text-justify p-2 pt-4'>In this example, the "diary.txt" file is opened in read mode, and the <span className='code-text  text-m'>read()</span> method is used to read the entire contents of the file. The <span className='code-text  text-m'>content</span> variable stores the diary content, which can be further analyzed. Here, we calculate the word count and line count by splitting the content based on whitespace and newline characters.</p> 
     <p className='text-justify p-2 pt-4'>By using file reading techniques in Python, you can extract and process data from files, analyze text, and gain insights, just like analyzing the contents of a personal diary.</p>     

     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python create/write files</h4>
     <p className='text-justify p-2 pt-4'>Creating and writing files in Python involves opening a file in write mode, writing data to it, and saving the changes. Python provides built-in functions and methods to perform these operations efficiently.</p>     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Opening Files:</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>To create a new file or open an existing file for writing, you need to use the <span className='code-text  text-m'>open()</span> function with the appropriate mode parameter.</li>
            <li className='pt-2'>The mode parameter for write mode is "w".</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString8} 
              </CodeHighlighter>

      <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>open()</span> function is used to open the file named "data.txt" in write mode. The file object is stored in the file variable.</p>     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>2. Writing to Files:</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>To write data to a file, you can use the <span className='code-text  text-m'>write()</span> method of the file object.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>write()</span> method takes a string as an argument and writes it to the file.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString9} 
              </CodeHighlighter> 

       <p className='text-justify p-2 pt-4'>1. In this example, the <span className='code-text  text-m'>write()</span> method is used to write the string "Hello, World!" to the file. The changes are saved by closing the file using <span className='code-text  text-m'>file.close()</span>.</p>     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>3. Appending to Files:</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>If you want to add new content to an existing file without overwriting the existing content, you can use the append mode ("a").</li>
            <li className='pt-2'>The append mode allows you to append data to the end of the file.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString10} 
              </CodeHighlighter> 

     <p className='text-justify p-2 pt-4'>In this example, the file is opened in append mode, and the <span className='code-text  text-m'>write()</span> method is used to append the string "Appending new data!" to the file.</p>     
     <p className='text-justify p-2 pt-4'>Now, let's consider a relatable real-life example to understand creating and writing files better.</p>     
     <p className='text-justify p-2 pt-4'>Imagine you are a writer working on a novel. You can use file handling to create and write your novel to a file.</p>     

              <CodeHighlighter>
                {codeString11} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>write_novel()</span> function takes the content of the novel as input. The function opens the "novel.txt" file in write mode, writes the content using the <span className='code-text  text-m'>write()</span> method, and then closes the file.</p>     
     <p className='text-justify p-2 pt-4'>By using file creation and writing techniques in Python, you can create new files, write data to them, and save your work, just like writing and saving a novel as a file.</p>     


     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>Python delete files</h4>
     <p className='text-justify p-2 pt-4'>Deleting files in Python involves removing a file from the file system. Python provides built-in functions and modules to perform file deletion operations.</p>     
     <h4 className='p-2 m-2 text-lg font-bold rounded-md card-bg w-full'>1. Deleting Files using os.remove():</h4>
     <ul className='list-disc px-10'>
            <li className='pt-2'>The <span className='code-text  text-m'>os.remove()</span> function is used to delete a file from the file system.</li>
            <li className='pt-2'>It takes the file path as a parameter and deletes the file if it exists.</li>
            <li className='pt-2'>Here's an example:</li>
          </ul>
             <CodeHighlighter>
                {codeString12} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>os.remove()</span> function is used to delete the file named "data.txt" from the file system.</p>     
     
     <p className='text-justify p-2 pt-4'>Checking File Existence before Deletion:</p>     
     <p className='text-justify p-2 pt-4'>It is recommended to check if a file exists before attempting to delete it.</p>
     <p className='text-justify p-2 pt-4'>You can use the <span className='code-text  text-m'>os.path.exists()</span> function to check if a file exists at a given path.</p>
     <p className='text-justify p-2 pt-4'>Here's an example</p>     
              <CodeHighlighter>
                {codeString13} 
              </CodeHighlighter>


     <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>os.path.exists()</span> function is used to check if the file exists before deleting it. If the file exists, it is deleted using <span className='code-text  text-m'>os.remove()</span>. Otherwise, a message indicating that the file does not exist is printed.</p>     
     <p className='text-justify p-2 pt-4'>Now, let's consider a relatable real-life example to understand file deletion better.</p>     
     <p className='text-justify p-2 pt-4'>Imagine you have a folder on your computer where you keep old documents and files that you no longer need. Periodically, you want to delete these files to free up storage space.</p>
              <CodeHighlighter>
                {codeString14} 
              </CodeHighlighter>
     <p className='text-justify p-2 pt-4'>In this example, the <span className='code-text  text-m'>delete_old_files()</span> function takes the path of the folder containing old documents as input. It uses the <span className='code-text  text-m'>os.listdir()</span> function to get a list of files in the folder. For each file, it checks if it is a regular file using <span className='code-text  text-m'>os.path.isfile()</span>. If it is a file, it deletes it using <span className='code-text  text-m'>os.remove()</span>. Finally, a message indicating that the old files have been deleted is printed.</p>
     <p className='text-justify p-2 pt-4'>By using file deletion techniques in Python, you can remove unwanted files from the file system, manage disk space, and organize your data, just like deleting old documents from a folder to declutter your physical or digital space.</p>     
     
            </article>
        </section>
    </div>
  )
}

export default PythonFileHandling