import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const InstallVsCode = () => {
  return (
    <div className='p-4 text-md text-sm'>
        <section>
          <h4 className='p-2 text-lg font-bold rounded-md bg-blue-400 w-full'>1. Installing Visual Studio Code (VS Code):</h4>
          <div>
            <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>Visual Studio Code is a special program that helps us write and manage our code easily. It's like a digital notebook for writing code.</li>
              <li className='pt-4'>To install VS Code, you can visit the official website of <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className='text-green-600'>Visual Studio Code</a> and look for the download button.</li>
              <li className='pt-4'>Click on the download button, and it will start downloading the installer file. Once the download is complete, open the installer.</li>
              <li className='pt-4'>The installer will guide you through the installation process. Just follow the instructions and click on the buttons that say "Next" or "Install."</li>
              <li className='pt-4'>After the installation is finished, you can find the VS Code icon on your computer's desktop or in the list of installed programs.</li>
              <li className='pt-4'>Double-click on the VS Code icon, and it will open up the program for you to start coding!</li>
            </ul>
          </div>
        </section>
        <section>
          <h4 className='p-2 text-lg font-bold mt-6 rounded-md bg-blue-400 w-full'>2. Installing the g++ compiler</h4>
          <div>
            <ul className='list-disc px-10 py-4 text-justify'>
              <li className='pt-4'>The g++ compiler is a special program that helps us convert our C++ code into a language that the computer can understand and run.</li>
              <li className='pt-4'>To install the g++ compiler, we need to use a software called MinGW. MinGW is a development environment for C++ programming.</li>
              <li className='pt-4'>You can visit the <a href="http://mingw.org" target="_blank" rel="noopener noreferrer" className='text-green-600'>MinGW website</a> and look for the download section.</li>
              <li className='pt-4'>Find the download link for the latest version of MinGW and click on it to start the download.</li>
              <li className='pt-4'>Once the download is complete, open the installer.</li>
              <li className='pt-4'>The installer will guide you through the installation process. Just follow the instructions and click on the buttons that say "Next" or "Install."</li>
              <li className='pt-4'>During the installation, make sure to select the option to install the g++ compiler.</li>
              <li className='pt-4'>After the installation is finished, you will have the g++ compiler installed on your computer. It's now ready to compile your C++ code!</li>
            </ul>
          </div>
        </section>
        <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>
            Remember, installing these programs may require the help of an adult or someone who knows how to install software on your computer. Always ask for assistance and permission when installing new programs.
          </p>
        </div>
        <div className='p-4 mt-6 bg-blue-400 text-white rounded-lg text-base flex'> 
          <FaLightbulb className='text-4xl mr-4 bulb'/>
          <p>
            Once you have VS Code and the g++ compiler installed, you can open VS Code, write your C++ code, and use the g++ compiler to compile and run your programs. Have fun coding!
          </p>
        </div>
    </div>
  )
}

export default InstallVsCode