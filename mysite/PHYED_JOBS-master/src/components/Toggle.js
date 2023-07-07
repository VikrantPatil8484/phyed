import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa"

const Toggle = () => {

  

  const [theme, setTheme] = useState('light');

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  // handle switch theme
  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else { 
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };
  

  return (
    <>
      <button onClick={changeTheme}> {theme === 'light' ?  < FaMoon className='text-gray-900'/> : < FaSun className='text-yellow-300' />}</button>
    </>
  )
}

export default Toggle