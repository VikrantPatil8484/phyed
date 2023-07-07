import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';


const IoTStandardsDataExc = () => {

  const codeString = `
    {
      "temperature": 25,
      "humidity": 65
    }
    `

    const codeString1 = `
    import json
    
    # JSON data
    data = '''
    {
      "temperature": 25,
      "humidity": 65
    }
    '''
    
    # Parse JSON data
    parsed_data = json.loads(data)
    
    # Access temperature value
    temperature = parsed_data["temperature"]
    print("Temperature:", temperature)
    
    # Access humidity value
    humidity = parsed_data["humidity"]
    print("Humidity:", humidity)
    `

    const codeString2 = `
    <car>
      <speed>60</speed>
      <fuelLevel>70</fuelLevel>
      <gps>
        <latitude>37.7749</latitude>
        <longitude>-122.4194</longitude>
      </gps>
    </car>
    
  `

    const codeString3 = `
    import xml.etree.ElementTree as ET
    
    # XML data
    data = '''
    <car>
      <speed>60</speed>
      <fuelLevel>70</fuelLevel>
      <gps>
        <latitude>37.7749</latitude>
        <longitude>-122.4194</longitude>
      </gps>
    </car>
    '''
    
    # Parse XML data
    root = ET.fromstring(data)
    
    # Access speed value
    speed = root.find("speed").text
    print("Speed:", speed)
    
    # Access fuel level value
    fuel_level = root.find("fuelLevel").text
    print("Fuel Level:", fuel_level)
    
    # Access GPS coordinates
    latitude = root.find("gps/latitude").text
    longitude = root.find("gps/longitude").text
    print("GPS Coordinates:", latitude, longitude)
    `

    
  return (
    <div>
       <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>IoT data exchange formats (e.g., JSON, XML)</h4>
           <p className='text-justify p-2 pt-4'>When devices in an IoT system communicate with each other, they need a common way to structure and represent data. This is where data exchange formats come into play. Two common formats used for data exchange in IoT are JSON (JavaScript Object Notation) and XML (eXtensible Markup Language).</p>
           <p className='text-justify p-2 pt-4'><b>1. JSON (JavaScript Object Notation):</b> JSON is a lightweight and human-readable data format. It is widely used in web development and IoT applications because of its simplicity and ease of use. JSON represents data in key-value pairs and supports various data types such as strings, numbers, booleans, arrays, and objects.</p>
           <p className='text-justify p-2 pt-4'>Let's understand JSON with a real-life example:</p>
           <p className='text-justify p-2 pt-4'>Imagine you have a smart garden system with different sensors. The temperature sensor measures the current temperature, and the humidity sensor measures the humidity level. JSON can represent the data from these sensors as follows:</p>
                    <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>Here, "temperature" and "humidity" are the keys, and their corresponding values are 25 and 65, respectively. The JSON structure helps organize and transmit the data in a standardized way.</p>
           <p className='text-justify p-2 pt-4'>Code Example:</p>
           <p className='text-justify p-2 pt-4'>JSON doesn't require any specific code for understanding its structure. However, here's an example in Python that shows how to work with JSON data:</p>
               
                   <CodeHighlighter>
                      {codeString1} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'><b>XML (eXtensible Markup Language):</b> XML is a flexible and widely adopted data format. It uses tags to define the structure of the data, making it suitable for representing complex data hierarchies. XML is more verbose compared to JSON but offers more options for defining custom data structures and metadata.</p>
           <p className='text-justify p-2 pt-4'>Let's understand XML with a real-life example:</p>
           <p className='text-justify p-2 pt-4'>Consider a smart car system that collects various data, such as the car's speed, fuel level, and GPS coordinates. XML can represent this data as follows:</p>
               
               <CodeHighlighter>
                  {codeString2} 
                </CodeHighlighter>

          <p className='text-justify p-2 pt-4'>Here, XML uses tags like <span className='code-text  text-m'>&lt;car&gt;</span>, <span className='code-text  text-m'> &ly;speed&gt;</span>,  <span className='code-text  text-m'>&lt;fuelLevel&gt;</span>,  <span className='code-text  text-m'>&lt;gps&gt;</span>, <span className='code-text  text-m'>&lt;latitude&gt;</span>, and <span className='code-text  text-m'> &lt;longitude&gt;</span> to define the data structure and hierarchy.</p>
           <p className='text-justify p-2 pt-4'>Code Example:</p>
           <p className='text-justify p-2 pt-4'>XML doesn't require any specific code for understanding its structure. However, here's an example in Python that shows how to work with XML data using the ElementTree module:</p>
                <CodeHighlighter>
                  {codeString3} 
                </CodeHighlighter>
                <p className='text-justify p-2 pt-4'>Both JSON and XML are widely used in IoT applications for data exchange. JSON is simpler and more popular due to its lightweight nature, while XML offers more flexibility and is often used in scenarios that require complex data structures.</p>
                </article>
      </section>         
    </div>
  )
}

export default IoTStandardsDataExc