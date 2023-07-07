import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
//Lecture 25

const PythonDateTime = () => {
  const codeString =`
  import datetime
    `

  const codeString1 =` 
  
  import datetime

  # Define the birthdates
  my_birthday = datetime.date(2000, 5, 15)
  friend_birthday = datetime.date(2001, 8, 10)

  # Calculate the number of days between the birthdays
  days_difference = friend_birthday - my_birthday

  # Print the result
  print(f"There are {days_difference.days} days between our birthdays.")

  `

  const codeString2 =` 
  import datetime

  # Get the current date and time
  current_datetime = datetime.datetime.now()
  print("Current date and time:", current_datetime)

  # Get the current date
  current_date = datetime.date.today()
  print("Current date:", current_date)

  # Format a date as a string
  formatted_date = current_date.strftime("%d-%m-%Y")
  print("Formatted date:", formatted_date)

  # Extract components from a date
  year = current_date.year
  month = current_date.month
  day = current_date.day
  print("Year:", year)
  print("Month:", month)
  print("Day:", day)

  # Compare dates
  other_date = datetime.date(2022, 1, 1)
  is_before = current_date < other_date
  print("Is the current date before the other date?", is_before)

  # Perform arithmetic operations on dates
  future_date = current_date + datetime.timedelta(days=30)
  print("Future date:", future_date)
 `



  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
            <article className='mt-6'>

      <p className='text-justify p-2 pt-4'> 1. The <span className='code-text  text-m'>datetime</span> module in Python provides classes for manipulating dates and times. It allows you to work with dates, times, time intervals, and perform various operations on them.</p>
      <p className='text-justify p-2 pt-4'> 2. To use the <span className='code-text  text-m'>datetime</span> module, you need to import it at the beginning of your Python script or interactive session:</p>
               <CodeHighlighter>
                {codeString} 
              </CodeHighlighter> 
     <p className='text-justify p-2 pt-4'>3. The <span className='code-text  text-m'>datetime</span> module includes several classes, such as <span className='code-text  text-m'>datetime</span>, <span className='code-text  text-m'>date</span>, <span className='code-text  text-m'>time</span>, and <span className='code-text  text-m'>timedelta</span>, each serving different purposes:</p>   
     <ul className='list-disc px-10'>
            <li className='pt-4'><span className='code-text  text-m'>datetime</span>: Represents a specific date and time, including year, month, day, hour, minute, second, and microsecond.</li>
            <li className='pt-2'><span className='code-text  text-m'>date</span>: Represents a date without time information, including year, month, and day.</li>
            <li className='pt-2'><span className='code-text  text-m'>time</span>: Represents a time without date information, including hour, minute, second, and microsecond.</li>
            <li className='pt-2'><span className='code-text  text-m'>timedelta</span>: Represents a duration or difference between two dates or times. </li>
          </ul>

          <p className='text-justify p-2 pt-4'>4. Let's consider a life-related example: calculating the number of days between two significant events, such as birthdays.</p>
               <CodeHighlighter>
                {codeString1} 
              </CodeHighlighter> 
        <p className='text-justify p-2 pt-4'>5. In this example, we import the <span className='code-text  text-m'>datetime</span> module and create <span className='code-text  text-m'>date</span> objects for two birthdays, <span className='code-text  text-m'>my_birthday</span> and <span className='code-text  text-m'>friend_birthday</span>, specifying the year, month, and day.</p>
        <p className='text-justify p-2 pt-4'>6. We calculate the difference between the two dates using the - operator, which results in a <span className='code-text  text-m'>timedelta</span> object representing the duration between the two dates.</p>
        <p className='text-justify p-2 pt-4'>7. The <span className='code-text  text-m'>days</span> attribute of the <span className='code-text  text-m'>timedelta</span> object gives the number of days in the duration. We access it using the dot notation: <span className='code-text  text-m'>days_difference.days</span>.</p>
        <p className='text-justify p-2 pt-4'>8. Finally, we print the number of days between the birthdays using a formatted string.</p>
        <p className='text-justify p-2 pt-4'>9. The <span className='code-text  text-m'>datetime</span> module provides various methods and attributes to work with dates and times, such as extracting specific components (year, month, day) from a date, formatting dates as strings, comparing dates, and performing arithmetic operations.</p>
        <p className='text-justify p-2 pt-4'>10. Here's an example demonstrating some of these operations:</p>
              <CodeHighlighter>
                {codeString2} 
              </CodeHighlighter>

    <p className='text-justify p-2 pt-4'>11. In this example, we use various functions and methods from the datetime module:</p>   
     <ul className='list-disc px-10'>
            <li className='pt-4'><span className='code-text  text-m'>datetime.datetime.now()</span> returns the current date and time.</li>
            <li className='pt-2'><span className='code-text  text-m'>datetime.date.today()</span> returns the current date.</li>
            <li className='pt-2'><span className='code-text  text-m'>strftime()</span> is used to format a date as a string using a specified format.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>year</span>, <span className='code-text  text-m'>month</span>, and <span className='code-text  text-m'>day</span> attributes are used to extract specific components from a date.</li>
            <li className='pt-2'>The <span className='code-text  text-m'>&lt;</span> operator is used to compare dates.</li>
            <li className='pt-2'><span className='code-text  text-m'>timedelta</span> is used to perform arithmetic operations on dates, such as adding or subtracting days.</li>
          </ul>

          <p className='text-justify p-2 pt-4'>12. The <span className='code-text  text-m'>datetime</span> module provides extensive functionality for working with dates and times in Python. It's useful in various applications, such as event scheduling, data analysis, and time-dependent calculations.</p>
            </article>
        </section>
    </div>
  )
}

export default PythonDateTime