import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTEcomputingEdgeAnalytics = () => {
  const codeString = `
  # Sample Python code for edge analytics in IoT
  # Data Collection
  temperature = read_temperature_sensor()
  humidity = read_humidity_sensor()
  # Edge Analytics
  if temperature > 25 and humidity > 60:
      print("It's hot and humid!")
  elif temperature < 20 and humidity < 40:
      print("It's cool and dry.")
  else:
      print("Weather conditions are moderate.")
  
  `;
  const codeString1 = `
  # Sample Python code for decision-making in IoT
  
  # Data Analysis
  temperature = read_temperature_sensor()
  
  # Decision-making
  if temperature > 30:
      turn_on_fan()
  else:
      maintain_current_state()
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Edge analytics and decision-making in real-time IoT applications
          </h4>
          <p className="font-semibold text-justify p-2 pt-4">
            Edge Analytics and Decision-Making in Real-Time IoT Applications:
          </p>
          <p className="text-justify p-2 pt-4">
            Edge analytics and decision-making are key components of edge
            computing in IoT. They involve processing and analyzing data at the
            edge devices in real-time, allowing for faster insights and
            immediate actions. Let's explore these concepts using our classroom
            analogy to make it easier for a kid to understand.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Edge Analytics:</span>
            Edge analytics refers to the process of analyzing data locally at
            the edge devices in real-time. It's like solving a math problem
            right at your desk without waiting for the teacher to come and solve
            it. Edge devices are equipped with computational power and
            algorithms to perform various analytics tasks on the data they
            collect.
          </p>
          <p className="text-justify p-2 pt-4">
            For example, imagine you have a smart weather station as an edge
            device in our classroom analogy. It collects data on temperature,
            humidity, and air pressure. With edge analytics, the smart weather
            station can analyze this data locally and provide real-time
            insights, such as predicting weather conditions or identifying
            trends.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Decision-Making:</span>
            In real-time IoT applications, edge devices make decisions based on
            the analyzed data. Just as you would make decisions based on the
            solutions to math problems you solve at your desk. These decisions
            can trigger actions or control other devices connected to the IoT
            network.
          </p>
          <p className="text-justify p-2 pt-4">
            For instance, let's consider a smart irrigation system in a garden.
            The edge device, which is a soil moisture sensor, analyzes the
            moisture level in the soil. If the moisture level is low, indicating
            that the plants need water, the edge device can trigger the
            irrigation system to water the plants.
          </p>

          <p className="text-justify p-2 pt-4 font-semibold">
            For instance, let's consider a smart irrigation system in a garden.
            The edge device, which is a soil moisture sensor, analyzes the
            moisture level in the soil. If the moisture level is low, indicating
            that the plants need water, the edge device can trigger the
            irrigation system to water the plants.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">Code for Edge Analytics:</span>
            The code on edge devices enables data analysis and generates
            meaningful insights. Here's a simplified example using Python:
          </p>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code snippet, the edge device collects data from temperature
            and humidity sensors (data collection). It then performs analytics
            by evaluating conditions based on temperature and humidity values
            (edge analytics). Finally, it generates insights or notifications
            about the weather conditions.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">Code for Decision-Making:</span>
            The code for decision-making involves taking actions based on the
            analyzed data. Here's a simplified example using Python:
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code snippet, the edge device analyzes the temperature value
            (data analysis) and makes a decision based on the threshold
            condition. If the temperature is above 30 degrees, it triggers the
            fan to turn on (decision-making). Otherwise, it maintains the
            current state.
          </p>
          <p className="text-justify p-2 pt-4">
            It's important to note that these examples provide a simplified
            understanding of the code involved in edge analytics and
            decision-making. The actual implementation can vary based on the
            specific programming language, hardware platform, and the IoT
            framework being used.
          </p>
          <p className="text-justify p-2 pt-4">
            In summary, edge analytics and decision-making in real-time IoT
            applications involve processing and analyzing data locally at the
            edge devices. Code on the edge devices enables data analysis and
            decision-making based on specific conditions or thresholds. This
            allows for faster insights and immediate actions, enhancing the
            efficiency and responsiveness of IoT systems.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTEcomputingEdgeAnalytics;
