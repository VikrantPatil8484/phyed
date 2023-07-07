import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';


const IoTAIEdge = () => {
  const codeString = ` 
  # Import the necessary libraries
  
  # Function for object detection using AI on a security camera
  def object_detection(camera_image):
      # Code for object detection using AI
      detected_objects = ["person", "cat"]  # Assume the AI detects a person and a cat
      return detected_objects
  
  # Function for temperature control using AI on temperature sensors
  def temperature_control(temperature):
      # Code for temperature control using AI
      if temperature > 25:
          print("Lowering the thermostat.")
          # Code to lower the thermostat temperature
      elif temperature < 20:
          print("Raising the thermostat.")
          # Code to raise the thermostat temperature
      else:
          print("Maintaining the current temperature.")
  
  # Main program
  while True:
      camera_image = capture_camera_image()  # Capture the current image from the security camera
      detected_objects = object_detection(camera_image)  # Detect objects using AI
      print("Detected objects:", detected_objects)
  
      temperature = read_temperature()  # Read the current temperature from the sensors
      print("Current temperature:", temperature)
      temperature_control(temperature)  # Control the temperature using AI
  
      time.sleep(1)  # Pause for 1 second before repeating the loop
  `

  return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Edge AI and distributed intelligence in IoT environments</h4>
           <p className='text-justify p-2 pt-4'><b>1.Edge AI:</b> Edge AI refers to the deployment of artificial intelligence algorithms and models on edge devices, such as IoT devices, instead of relying on a centralized cloud or server for processing. This allows for real-time data analysis and decision-making at the edge of the network, closer to where the data is generated.</p>
           <p className='text-justify p-2 pt-4'><b>2.Distributed Intelligence: </b>Distributed intelligence refers to the concept of distributing computational power and decision-making across multiple devices or nodes in a network. Instead of relying on a single central system, intelligence is shared among multiple devices, enabling collaborative decision-making and efficient resource utilization.</p>
           <p className='text-justify p-2 pt-4'><b>3.Edge AI and Distributed Intelligence in IoT: </b>By combining edge AI and distributed intelligence in IoT environments, we can achieve smarter, faster, and more efficient systems. Here's a simplified example to demonstrate how it works:</p>
           <p className='text-justify p-2 pt-4'>Imagine we have a smart home with various IoT devices, including smart speakers, security cameras, and temperature sensors.</p>
           
           <ul className='list-disc px-10'>
           <li className='pt-4'>With edge AI, each IoT device has its own AI capabilities, allowing it to process data and make decisions locally.</li>
           <li className='pt-4'>For example, a security camera can analyze video footage in real-time to detect and identify people or objects of interest. It can then trigger actions like sending an alert to the homeowner or recording the video for later use.</li>
           <li className='pt-4'>Meanwhile, the temperature sensors can analyze temperature patterns and adjust the thermostat accordingly, without needing to rely on a central system or cloud.</li>
          </ul>
          <p className='text-justify p-2 pt-4'>Here's a simplified code example using Python to demonstrate this:</p>

                  <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this code, we have functions <span className='code-text  text-m'>object_detection()</span> and <span className='code-text  text-m'>temperature_control()</span> that simulate AI capabilities on the security camera and temperature sensors, respectively. The main program continuously loops to capture the camera image, detect objects using AI, read the temperature from the sensors, and control the temperature using AI.</p>


           

           </article>
       </section>
    </div>
  )
}

export default IoTAIEdge