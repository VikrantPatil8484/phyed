import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';
  //Lecture 10

const IoTStandardsOverview = () => {
  const codeString = `
  import paho.mqtt.client as mqtt
  
  # Define MQTT broker and topic
  broker = "mqtt.example.com"
  topic = "smart_home/lights"
  
  # Callback function when a message is received
  def on_message(client, userdata, message):
      print("Received message:", message.payload.decode())
  
  # Create MQTT client instance
  client = mqtt.Client()
  
  # Set callback function
  client.on_message = on_message
  
  # Connect to MQTT broker
  client.connect(broker, 1883)
  
  # Subscribe to the topic
  client.subscribe(topic)
  
  # Start the MQTT loop
  client.loop_start()
  
  # Publish a message
  client.publish(topic, "Light turned on")
  
  # Disconnect from the MQTT broker
  client.disconnect()
  `

  const codeString1 = `
  import asyncio
  from aiocoap import *
  
  async def main():
      protocol = await Context.create_client_context()
      request = Message(code=GET, uri='coap://example.com/temperature')
      response = await protocol.request(request).response
      print("Temperature:", response.payload.decode())
  
  asyncio.get_event_loop().run_until_complete(main())
    `

    


    return (
    <div>
      <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Overview of IoT standards and protocols (e.g., MQTT, CoAP, OPC UA)</h4>

           <p className='text-justify p-2 pt-4'> IoT (Internet of Things) refers to a network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity capabilities. These devices can communicate with each other and exchange data over the internet. To ensure seamless communication between different IoT devices, there are certain standards and protocols in place.</p>
           <p className='text-justify p-2 pt-4'>Standards provide a set of rules and guidelines that define how devices should communicate and interact with each other. Protocols, on the other hand, are a set of rules that govern the format, timing, sequencing, and error control of data transmission.</p>
           <p className='text-justify p-2 pt-4'>Here are three commonly used IoT standards and protocols:</p>
           <p className='text-justify p-2 pt-4'><b>1. MQTT (Message Queuing Telemetry Transport):</b> MQTT is a lightweight publish-subscribe messaging protocol commonly used in IoT applications. It is designed for resource-constrained devices and low-bandwidth, high-latency networks. MQTT follows a publish-subscribe model, where devices can publish messages to topics, and other devices can subscribe to those topics to receive the messages. This allows for efficient and scalable communication between devices. MQTT messages are organized in a hierarchical topic structure, making it easy to categorize and filter data.</p>
           <p className='text-justify p-2 pt-4'>Here's an example of how MQTT works:</p>
           <p className='text-justify p-2 pt-4'>Imagine you have a smart home system with different devices like lights, temperature sensors, and motion sensors. The lights publish messages to the topic "smart_home/lights" whenever they turn on or off. A mobile app subscribed to the topic "smart_home/lights" receives these messages and updates the user interface accordingly.</p>
           <p className='text-justify p-2 pt-4'>Code Example (Python):</p>
           <p className='text-justify p-2 pt-4'>To use MQTT in Python, you'll need the paho-mqtt library. Here's a simple example of how to publish and subscribe to MQTT topics:</p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>


           <p className='text-justify p-2 pt-4'><b>CoAP (Constrained Application Protocol):</b></p>
           <p className='text-justify p-2 pt-4'> CoAP is another lightweight protocol designed for resource-constrained devices and low-power networks. It is suitable for IoT devices with limited processing power and memory. CoAP follows a similar client-server model to HTTP, where devices can make requests (GET, POST, PUT, DELETE) to resources identified by URIs (Uniform Resource Identifiers). CoAP supports UDP (User Datagram Protocol) as the underlying transport protocol, making it more efficient for constrained environments.</p>
           <p className='text-justify p-2 pt-4'>Here's an example of how CoAP works:</p>
           <p className='text-justify p-2 pt-4'>Let's say you have a temperature sensor in your garden that periodically measures the temperature. Using CoAP, you can make a GET request to the URI "/temperature" of the sensor to retrieve the current temperature value. The sensor responds with the temperature data in the CoAP response.</p>
           <p className='text-justify p-2 pt-4'>Code Example (Python):</p>
           <p className='text-justify p-2 pt-4'>To use CoAP in Python, you'll need the aiocoap library. Here's a simple example of how to make a CoAP GET request:</p>
                     <CodeHighlighter>
                      {codeString1} 
                    </CodeHighlighter>

           <p className='text-justify p-2 pt-4'><b>1. OPC UA (Object Linking and Embedding for Process Control Unified Architecture):</b></p>
           <p className='text-justify p-2 pt-4'> OPC UA is a more comprehensive and complex standard for industrial automation and control systems. It provides a platform-independent framework for secure and reliable communication between devices and applications in industrial environments. OPC UA defines a set of services and protocols for data exchange, event notification, alarms, and historical data access. It supports various transport protocols, including TCP, HTTPS, and MQTT, making it flexible and interoperable.</p>
           <p className='text-justify p-2 pt-4'>OPC UA is widely used in industries such as manufacturing, energy, and transportation to enable interoperability between different devices and systems.</p>
           <p className='text-justify p-2 pt-4'>OPC UA is more suitable for advanced IoT applications and may be less accessible for a kid-friendly tutorial.</p>

  
               

           </article>
       </section>
    </div>
  )
}

export default IoTStandardsOverview