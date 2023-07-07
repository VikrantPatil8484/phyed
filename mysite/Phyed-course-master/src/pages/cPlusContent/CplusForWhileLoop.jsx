import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusForWhileLoop = () => {

  const codeString = `
      for (int count = 1; count <= 10; count++) {
        std::cout << "Count: " << count << std::endl;
      }
    `;
  const codeString1 = `
      Count: 1
      Count: 2
      Count: 3
      ...
      Count: 10
    `;
  const codeString2 = `
    int count = 1;
    while (count <= 10) {
        std::cout << "Jump " << count << std::endl;
        count++;
    }
    `;
  const codeString3 = `
    int count = 1;
    while (count <= 10) {
        std::cout << "Jump " << count << std::endl;
        count++;
    }
    `;
  const codeString4 = `
    int roll;
    do {
        roll = rand() % 6 + 1;
        std::cout << "You rolled a " << roll << std::endl;
    } while (roll != 6);
    `;

  return (
    // lecture 11
    <div>
      <section className='p-4 md:text-base text-justify text-sm '>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. For Loops</h4>
            <p className='text-justify pt-4'>Imagine you have a bag of marbles, and you want to count how many marbles are in the bag. You take out each marble and count them one by one.</p>
            <p className='text-justify pt-4'>In C++, a for loop can help us count the marbles by repeating the counting process for a specific number of times.</p>
            <p className='text-justify pt-4'>Here's an example of a for loop in C++:</p>
            <CodeHighlighter>
              {codeString}
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>In this example, the for loop starts with an initial value of count as 1. It continues as long as the count is less than or equal to 10. After each iteration, it increments count by 1.</p>
            <p className='text-justify pt-4 px-5'>The code inside the loop, <span className='code-text italic text-sm'>std::cout &lt;&lt;  "Count: " &lt;&lt; std::endl;</span> will be executed repeatedly, printing the value of count each time.</p>
            <p className='text-justify pt-4 px-5'>So, the loop will count from 1 to 10, and the output will be:</p>
            <CodeHighlighter>
              {codeString1}
            </CodeHighlighter>
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. While Loops</h4>
            <p className='text-justify pt-4'>Imagine you are jumping on a trampoline, and you keep jumping until you get tired and decide to stop.</p>
            <p className='text-justify pt-4'>In C++, a while loop can help us keep jumping on the trampoline as long as we're not tired.</p>
            <p className='text-justify pt-4'>Here's an example of a while loop in C++:</p>
            <CodeHighlighter>
              {codeString2}
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>In this example, we start with count equal to 1. The while loop continues as long as count is less than or equal to 10.</p>
            <p className='text-justify pt-4 px-5'>Inside the loop, we jump and print the current <span className='code-text italic text-sm'>count: std::cout &lt;&lt;  "Jump " &lt;&lt; count std::endl;</span> Then, we increment count by 1.</p>
            <p className='text-justify pt-4 px-5'>So, the loop will make us jump from 1 to 10, and the output will be:</p>
            <CodeHighlighter>
              {codeString3}
            </CodeHighlighter>
          </article>
          <article className='mt-6'>
              <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>3. Do-While Loops</h4>
              <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>Imagine you are playing a game where you need to roll a dice at least once, and then you decide if you want to roll it again based on the outcome.</li>
                <li className='pt-4'>In C++, a do-while loop can help us play the game by rolling the dice at least once and then deciding if we want to continue.</li>
                <li className='pt-4'>Here's an example of a do-while loop in C++:</li>
                  <CodeHighlighter>
                    {codeString4}
                  </CodeHighlighter>
                <li className='pt-4'>In this example, we start by declaring the variable <span className='code-text italic text-sm'>roll</span>. to store the result of each dice roll.</li>
                <li className='pt-4'>Inside the loop, we roll the dice and assign the result to <span className='code-text italic text-sm'>roll</span> using <span className='code-text italic text-sm'>roll = rand() % 6 + 1;</span>. Then, we print the result.</li>
                <li className='pt-4'>The loop continues as long as roll is not equal to 6 <span className='code-text italic text-sm'>(while (roll != 6))</span>. If we roll a 6, the loop stops.</li>
                <li className='pt-4'>So, the loop will keep rolling the dice until we roll a 6, and the output will show the results of each roll until we get a 6.</li>
              </ul>            
            </article>
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'>
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                    Remember, for loops repeat a specific number of times, while loops repeat as long as a condition is true, and do-while loops repeat at least once and then continue as long as a condition is true. They help us perform tasks repeatedly in our programs, just like counting marbles, jumping on a trampoline, or playing a game.
                  </p>
          </div>
      </section>
    </div>
  )
}

export default CplusForWhileLoop