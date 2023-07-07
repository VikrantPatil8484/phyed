import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTDMDataCollection = () => {
  const codeString = `
  import random
  def get_temperature():
      # Simulating temperature reading
      temperature = random.randint(20, 30)
      return temperature
  temperature = get_temperature()
  print("Temperature:", temperature)
  
  `;
  const codeString1 = `import random
  def get_temperature():
      temperature = random.randint(20, 30)
      return temperature
  def save_temperature(temperature):
      with open('temperature_data.txt', 'a') as file:
          file.write(str(temperature) + '\n')
  temperature = get_temperature()
  save_temperature(temperature)`;
  const codeString2 = `
  def preprocess_data():
      temperatures = []
  
      with open('temperature_data.txt', 'r') as file:
          lines = file.readlines()
          for line in lines:
              temperature = float(line.strip())
              temperatures.append(temperature)
  
      return temperatures
  
  def calculate_average_temperature(temperatures):
      total = sum(temperatures)
      average = total / len(temperatures)
      return average
  
  temperatures = preprocess_data()
  average_temperature = calculate_average_temperature(temperatures)
  print("Average Temperature:", average_temperature)
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Data collection, storage, and preprocessing for IoT
          </h4>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Data Collection:</span> In the
            world of IoT, there are many devices (like sensors, cameras, etc.)
            that collect data from the environment. For example, a temperature
            sensor might measure the temperature of a room, or a motion sensor
            might detect movement in a hallway. These devices are connected to
            the internet and send the data they collect to a central system
            called a server.
          </p>

          <h3 className="p-2 text-lg font-bold">
            Here's a simple Python code snippet to demonstrate data collection
            using a temperature sensor:
          </h3>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we use the random module to generate a random
            temperature between 20 and 30 degrees Celsius. The get_temperature
            function returns this random temperature, simulating a temperature
            sensor. We then print the temperature value.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Data Storage:</span> Once the
            data is collected from different IoT devices, we need to store it
            somewhere so that we can analyze it later. There are different ways
            to store data, but for simplicity, let's use a simple file to store
            our temperature data.
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we introduce a new function called save_temperature
            that takes the temperature value as an argument and appends it to a
            file named temperature_data.txt. Each temperature is written on a
            new line, allowing us to store multiple temperature readings.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">3. Data Preprocessing:</span> Before
            we can analyze the data, it's often necessary to preprocess it.
            Preprocessing involves cleaning, transforming, and organizing the
            data in a way that makes it easier to work with. In our example,
            let's say we want to calculate the average temperature from the data
            we collected.
          </p>
          <CodeHighlighter>{codeString2}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we define the preprocess_data function that reads the
            temperature data from the file we created earlier. Each line in the
            file is converted to a float value (since the data was stored as
            strings) and added to a list called temperatures. Then, we define
            the calculate_average_temperature function that takes the list of
            temperatures, sums them up, and divides the sum by the number of
            temperatures to calculate the average. Finally, we print the average
            temperature.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTDMDataCollection;
