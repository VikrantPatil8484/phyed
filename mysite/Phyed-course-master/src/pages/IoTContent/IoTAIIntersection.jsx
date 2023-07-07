import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';


const IoTAIIntersection = () => {
  const codeString = ` 
  # Import the necessary libraries
  import random
  
  # Function to simulate temperature data from IoT sensors
  def get_temperature():
      return random.randint(20, 30)  # Generate a random temperature between 20 and 30 degrees Celsius
  
  # Function to control the temperature using AI
  def control_temperature(current_temperature):
      desired_temperature = 25  # We want to maintain the temperature at 25 degrees Celsius
  
      if current_temperature > desired_temperature:
          print("Lowering temperature...")
          # Code to communicate with the IoT thermostat and lower the temperature
      Elif current_temperature < desired_temperature:
          print("Increasing temperature...")
          # Code to communicate with the IoT thermostat and increase the temperature
      else:
          print("Temperature is optimal. No action needed.")
  
  # Main program
  while True:
      current_temperature = get_temperature()  # Get the current temperature from IoT sensors
      print("Current temperature:", current_temperature)
      control_temperature(current_temperature)  # Control the temperature using AI
  `
  return (
    <div>
       <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Intersection of IoT and AI technologies</h4>

           <p className='text-justify p-2 pt-4'><b>What is IoT?</b></p>
           <p className='text-justify p-2 pt-4'>The Internet of Things (IoT) refers to a network of physical objects or "things" that are embedded with sensors, software, and other technologies to connect and exchange data with each other and with the Internet. These objects can be everyday items like household appliances, cars, or even toys.</p>
           
           <p className='text-justify p-2 pt-4'><b>What is AI?</b></p> 
                     <p className='text-justify p-2 pt-4'>Artificial Intelligence (AI) is the field of computer science that focuses on creating machines or computer systems capable of performing tasks that typically require human intelligence. AI enables computers to learn from data, reason, make decisions, and solve problems.</p>

                     <ul className='list-disc px-10'>
           <li className='pt-4'><b>Intersection of IoT and AI:</b> When IoT and AI technologies come together, it opens up a world of possibilities. Here are a few examples:</li>
           <li className='pt-4'><b>Smart Homes: </b>Imagine having a house where your lights, thermostat, and appliances are all connected to the internet and can be controlled through your smartphone. AI algorithms can analyze data from various sensors in your home to learn your preferences and automate tasks. For example, it can adjust the temperature based on your behavior or turn off lights when no one is in the room</li>
           <li className='pt-4'><b>Smart Cars:</b> AI can enhance the capabilities of IoT-enabled cars. For instance, sensors in a self-driving car can collect data about the environment, such as traffic conditions, pedestrians, and other vehicles. AI algorithms can analyze this data to make decisions, such as when to accelerate, brake, or change lanes.</li>
           <li className='pt-4'><b>Personal Assistants:</b> Devices like Amazon's Alexa or Google Assistant are examples of AI-powered personal assistants that can connect to IoT devices in your home. You can ask them to turn on the lights, play music, or order groceries, and they will communicate with the IoT devices to carry out these tasks.</li>
           <li className='pt-4'><b>Health Monitoring:</b> IoT devices like fitness trackers or smartwatches can collect data about your heart rate, sleep patterns, or exercise routines. AI algorithms can analyze this data to provide personalized health recommendations, such as suggesting exercise routines or alerting you if your heart rate is too high.</li>
           <li className='pt-4'><b>Understanding the Code:</b> Writing actual code for IoT and AI applications can be complex, but I can provide you with a simplified example using Python. Let's consider a smart home scenario where we want to automate temperature control using IoT sensors and AI.</li>
          </ul>
          
            <CodeHighlighter>
                {codeString} 
              </CodeHighlighter>


           <p className='text-justify p-2 pt-4'>In this code, we have a function <span className='code-text  text-m'> get_temperature()</span> that simulates the temperature data from IoT sensors. The function <span className='code-text  text-m'>control_temperature()</span> uses an AI algorithm to compare the current temperature with a desired temperature and takes appropriate actions based on the comparison.</p>
           <p className='text-justify p-2 pt-4'>In the main program, we continuously loop to get the current temperature, display it, and control the temperature using the <span className='code-text  text-m'>control_temperature()</span> function.</p>
           


                        

           </article>
       </section>
    </div>
  )
}

export default IoTAIIntersection