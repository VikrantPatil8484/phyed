import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboard, FaCheck} from 'react-icons/fa';

const CodeHighlighter = ({ children }) => {

    const [ copy, setCopy ] = useState(false);

  return (
    <div>
         <section className='bg-gray-400  h-auto mt-6 w-60 md:w-auto md:ml-5 md:mr-5 rounded-lg overflow-hidden text-xs md:text-sm' >
                <article className='flex items-center text-white justify-between p-1 px-4 text-sm'>
                    <div>
                      <p>Example</p>
                    </div>
                    {
                      copy ? (
                        <div className='flex h-auto items-center cursor-pointer'>
                        <FaCheck className=''/> 
                        <p className='pt-1 ml-0.5'>Copied</p> 
                      </div>
                        
                      ) : (
                        <div className='flex h-auto items-center cursor-pointer'
                        onClick={() => {
                          navigator.clipboard.writeText(children)
                          setCopy(true)
                          setTimeout(() => {
                            setCopy(false)
                          }, 3000);
                        }}

                        >
                          <FaClipboard className=''/> 
                          <p className='pt-1 ml-0.5'>Copy</p> 
                        </div>
                      )
                      
                    }
                  </article>
                  <SyntaxHighlighter language="jsx" style={atomOneDark}>
                    {children}
                  </SyntaxHighlighter>
              </section>
    </div>
  )
}

export default CodeHighlighter