import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import CodeHighlighter from '../../components/CodeHighlighter';

const CplusBreakContinue = () => {

  const codeString = `
    int level = 1;
    while (level <= 10) {
        std::cout << "Playing level " << level << std::endl;
        if (level == 5) {
            std::cout << "You won the game!" << std::endl;
            break;
        }
        level++;
    }
    `;
  const codeString1 = `
      Playing level 1
      Playing level 2
      Playing level 3
      Playing level 4
      Playing level 5
      You won the game!
    `;
  const codeString2 = `
    for (int i = 1; i <= 5; i++) {
      if (i == 3) {
          std::cout << "Skipping shape 3" << std::endl;
          continue;
      }
      std::cout << "Drawing shape " << i << std::endl;
    }
    `;
  const codeString3 = `
    Drawing shape 1
    Drawing shape 2
    Skipping shape 3
    Drawing shape 4
    Drawing shape 5
    `;
  const codeString4 = `
    int roll;
    do {
        roll = rand() % 6 + 1;
        std::cout << "You rolled a " << roll << std::endl;
    } while (roll != 6);
    `;

  return (
    // lecture 12
    <div>
      <section className='p-4 md:text-base text-justify text-sm '>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>1. Break Statement</h4>
            <p className='text-justify pt-4'>Imagine you are playing a game and you want to stop playing as soon as you win a certain level.</p>
            <p className='text-justify pt-4'>In C++, the break statement helps us break out of a loop or switch-case statement and stop executing further code.</p>
            <p className='text-justify pt-4'>Here's an example of using the break statement in a while loop:</p>
            <CodeHighlighter>
              {codeString}
            </CodeHighlighter>
            <ul className='list-disc px-5 md:px-10'>
                <li className='pt-4'>In this example, we have a while loop that simulates playing different levels of a game.</li>
                <li className='pt-4'>Inside the loop, we print the current level we are playing. If the level reaches 5, we print "You won the game!" and use the <span className='code-text italic text-sm'>break</span> statement to exit the loop.</li>
                <li className='pt-4'>The loop stops executing as soon as we win the game at level 5, and the output will be:</li>
                  <CodeHighlighter>
                    {codeString1}
                  </CodeHighlighter>
            </ul>
          </article>
          <article className='mt-6'>
            <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>2. Continue Statement</h4>
            <p className='text-justify pt-4'>Imagine you are drawing a picture and you want to skip drawing a specific shape.</p>
            <p className='text-justify pt-4'>In C++, the continue statement helps us skip the remaining code inside a loop for a particular iteration and move to the next iteration.</p>
            <p className='text-justify pt-4'>Here's an example of using the continue statement in a for loop:</p>
            <CodeHighlighter>
              {codeString2}
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>In this example, we have a for loop that simulates drawing different shapes.</p>
            <p className='text-justify pt-4 px-5'>Inside the loop, we check if the current shape is number 3. If it is, we print "Skipping shape 3" and use the continue statement to skip the remaining code for that iteration.</p>
            <p className='text-justify pt-4 px-5'>The loop continues with the next iteration and executes the remaining code for other shapes.</p>
            <p className='text-justify pt-4 px-5'>The output will be:</p>
            <CodeHighlighter>
              {codeString3}
            </CodeHighlighter>
            <p className='text-justify pt-4 px-5'>As you can see, shape 3 is skipped, and the loop continues drawing the remaining shapes.</p>
          </article>
          <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'>
                  <FaLightbulb className='text-4xl mr-4 bulb'/>
                  <p>
                  The <span className='code-text italic text-sm'>break</span> statement allows us to exit a loop or switch-case statement, while the <span className='code-text italic text-sm'>continue</span> statement allows us to skip the remaining code for a particular iteration and move to the next one. These statements help us control the flow of our program and make decisions based on specific conditions, just like stopping a game or skipping a step in a drawing
                  </p>
          </div>
      </section>
    </div>
  )
}

export default CplusBreakContinue