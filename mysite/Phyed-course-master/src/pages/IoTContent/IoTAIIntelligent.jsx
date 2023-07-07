import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';


const IoTAIIntelligent = () => {
  const codeString = ` 
  # Import the necessary libraries
  
  # Function to detect natural light level
  def detect_light_level():
      # Code to detect light level using sensors
      light_level = 50  # Assume the light level is 50 (scale of 0-100)
      return light_level
  
  # Function to control lights based on AI decision-making
  def control_lights(light_level):
      if light_level < 30:
          print("Turning on the lights.")
          # Code to control the lights and turn them on
      elif light_level > 70:
          print("Turning off the lights.")
          # Code to control the lights and turn them off
      else:
          print("Maintaining the current lighting.")
  
  # Main program
  while True:
      current_light_level = detect_light_level()  # Get the current light level from sensors
      print("Current light level:", current_light_level)
      control_lights(current_light_level)  # Control the lights based on AI decision-making
  `
  
  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Intelligent decision-making and automation using AI in IoT applications</h4>
           <p className='text-justify p-2 pt-4'><b>1.Intelligent Decision-Making: </b>Intelligent decision-making refers to the ability of IoT systems to analyze data and make informed choices or take actions based on that analysis. By using AI techniques, IoT devices can learn from data, reason, and make decisions similar to how humans do.</p>
           <p className='text-justify p-2 pt-4'><b>2.Automation:</b> Automation involves the automatic execution of tasks or actions without human intervention. In IoT applications, AI can enable automation by analyzing data and triggering actions based on predefined rules or algorithms.</p>
           <p className='text-justify p-2 pt-4'><b>3.Intelligent Decision-Making and Automation in IoT: </b>Combining intelligent decision-making with automation in IoT applications can lead to more efficient and smarter systems. Here's a simplified example to demonstrate how it works:</p>
           <p className='text-justify p-2 pt-4'>Imagine we have a smart lighting system in a house that uses AI for intelligent decision-making and automation.</p>
           
           <ul className='list-disc px-10'>
           <li className='pt-4'>The lighting system has sensors that detect the amount of natural light in a room.</li>
           <li className='pt-4'>The AI algorithm analyzes the sensor data and decides whether to turn on or off the lights based on the lighting conditions.</li>
           <li className='pt-4'>Additionally, the system can learn from user preferences and adjust the lighting based on their habits. For example, it may dim the lights in the evening to create a cozy atmosphere.</li>
          </ul>
          <p className='text-justify p-2 pt-4'>Here's a simplified code example using Python to demonstrate this:</p>

                  <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this code, we have a function <span className='code-text  text-m'>detect_light_level()</span> that simulates detecting the light level using sensors. The function <span className='code-text  text-m'>control_lights()</span> uses AI decision-making to analyze the light level and decide whether to turn on, turn off, or maintain the current lighting. In the main program, we continuously loop to get the current light level, display it, and control the lights using the <span className='code-text  text-m'>control_lights()</span> function.</p>


           

           </article>
       </section>
    </div>
  )
}

export default IoTAIIntelligent