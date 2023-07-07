import React from "react";
import CodeHighlighter from '../../components/CodeHighlighter';

const NumPyGettingStarted = () => {
  const codeString = `pip install numpy`
  const codeString1 = `import numpy as np`
  const codeString2 = `import numpy as np

  print(np.__version__)`
  const codeString3 = `1.21.0`

  return <>
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
        <article className='mt-6'>
        <p className='pt-4'><span className="font-bold">1. Installing NumPy: </span>NumPy provides efficient tools for handling and manipulating large datasets, making it a popular choice for data analysis tasks.</p>
       
        <p className="px-4 mt-4 ml-2">To install NumPy, you can use the following command:</p>
            <CodeHighlighter>
              {codeString} 
            </CodeHighlighter>
            <p className='pt-4 mt-3'><span className="font-bold">2. Importing NumPy: </span>To use NumPy in your Python program, you need to import it. You can import NumPy using the following line of code.</p>
            <CodeHighlighter>
              {codeString1} 
            </CodeHighlighter>
            <p className='px-4 mt-3'>The <span className='code-text italic text-sm'>import</span> statement allows you to access all the functionalities of NumPy under the alias <span className='code-text italic text-sm'>np.</span> This is a common convention used by the Python community.</p>
            <p className='pt-4 mt-3'><span className="font-bold">3. Checking NumPy Version: </span>You can check the version of NumPy installed on your system using the following code:</p>
            <CodeHighlighter>
              {codeString2} 
            </CodeHighlighter>
            <p className='px-4 mt-3'>Result</p>
            <CodeHighlighter>
              {codeString3} 
            </CodeHighlighter>
            <p className='px-4 mt-3'>In this example, we import NumPy and then use the <span className='code-text italic text-sm'>__version__ </span>attribute to access the version information. The version number will be printed to the console.</p>
            <p className='px-4 mt-3'>It's important to note that the version number may vary depending on the specific version of NumPy you have installed.</p>
            <p className='px-4 mt-3'>By following these steps, you can install NumPy, import it into your Python program, and check its version. Once you have NumPy installed and imported, you can start using its powerful array manipulation and mathematical functionalities.</p>

        </article>
      </section>
    </div>

  </>

;
};

export default NumPyGettingStarted;
