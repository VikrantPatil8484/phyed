import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTIntroImportance = () => {
  const codeString = `
  // Include the necessary libraries
  #include <SoftwareSerial.h>
  // Define Bluetooth module pins
  #define RX_PIN 2
  #define TX_PIN 3
  // Define the pin for controlling the light
  #define LIGHT_PIN 4
  SoftwareSerial bluetooth(RX_PIN, TX_PIN); // Create a Bluetooth object
  void setup() {
  // Set the light pin as an output
    pinMode(LIGHT_PIN, OUTPUT);
    digitalWrite(LIGHT_PIN, LOW); // Turn off the light
  // Set up communication with the Bluetooth module
    bluetooth.begin(9600);
  }
  
  void loop() {
    if (bluetooth.available()) {
      char command = bluetooth.read();
      if (command == '1') {
        digitalWrite(LIGHT_PIN, HIGH); // Turn on the light
      } else if (command == '0') {
        digitalWrite(LIGHT_PIN, LOW); // Turn off the light
      }
    }
  }
  
  `;
  const codeString1 = `
  // Define the pin for the soil moisture sensor
  #define SOIL_PIN A0
  void setup() {
  // Set up serial communication for debugging
    Serial.begin(9600);
  }
  void loop() {
  // Read the moisture level from the soil sensor
    int moistureLevel = analogRead(SOIL_PIN);
  // Map the moisture level to a percentage
    int percentage = map(moistureLevel, 0, 1023, 0, 100);
  // Print the moisture level
    Serial.print("Moisture level: ");
    Serial.print(percentage);
    Serial.println("%");
    delay(1000); // Wait for 1 second before reading again
  }
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Importance and applications of IoT in various industries
          </h4>
          <p className="text-justify p-2 pt-4">
          <span class="font-semibold">Importance of IoT:</span> The Internet of Things (IoT) has become
            increasingly important because it offers numerous benefits and
            opportunities.
          </p>
          <h4 className="p-2 text-lg font-bold">
            {" "}
            Here are some key points to understand its significance:
          </h4>

          <ul className="list-disc px-10">
            <li className="pt-4">
              <span class="font-semibold"> Automation and Efficiency:</span>IoT
              enables automation, where devices can perform tasks without human
              intervention. This leads to increased efficiency, reduced human
              effort, and improved productivity
            </li>
            <li className="pt-4">
              <span class="font-semibold"> Data Collection and Analysis:</span>{" "}
              IoT devices collect vast amounts of data from the environment
              using sensors. This data can be analyzed to gain valuable
              insights, make informed decisions, and improve processes.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Improved Safety and Security:</span>{" "}
              IoT devices can enhance safety and security in various industries.
              For example, in transportation, IoT sensors can monitor vehicle
              conditions to detect faults and prevent accidents.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Remote Monitoring and Control:</span>
              With IoT, devices can be monitored and controlled remotely. This
              allows for real-time monitoring, troubleshooting, and adjustments
              from anywhere, improving convenience and saving time.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Cost Savings:</span>IoT can lead to
              cost savings by optimizing resource usage, reducing waste, and
              automating processes. For example, smart energy meters can monitor
              electricity usage and help save energy costs.
            </li>
          </ul>
          <h4 className="p-2 text-lg font-bold">
            {" "}
            Applications of IoT in Various Industries:
          </h4>

          <ul className="list-disc px-10">
            <li className="pt-4">
              <span class="font-semibold">Smart Home:</span> IoT enables the
              creation of smart homes where devices are connected and can be
              controlled remotely. Examples include smart thermostats to control
              heating and cooling, smart lighting systems, security cameras, and
              voice-controlled assistants like Amazon Alexa or Google Assistant.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Healthcare:</span> IoT has
              revolutionized healthcare with applications such as remote patient
              monitoring, wearable fitness trackers, and smart medical devices.
              For instance, IoT-enabled devices can monitor vital signs, track
              medication schedules, and alert doctors in case of emergencies.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Agriculture:</span> IoT can help
              farmers monitor and optimize agricultural processes. Soil moisture
              sensors can indicate when to water crops, smart weather stations
              can provide accurate weather data for planning, and drones can be
              used for crop monitoring and spraying pesticides.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Transportation:</span> IoT has made
              transportation more efficient and safer. Smart traffic management
              systems can optimize traffic flow, connected vehicles can
              communicate with each other to avoid accidents, and logistics
              companies can track shipments in real-time using IoT-enabled
              sensors.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Manufacturing:</span> IoT is
              transforming manufacturing processes through Industrial IoT
              (IIoT). It enables predictive maintenance of machines, real-time
              monitoring of production lines, and inventory management systems.
              This improves productivity, reduces downtime, and minimizes costs.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Retail:</span> IoT has introduced
              smart retail concepts. For example, smart shelves can track
              inventory and alert store managers when restocking is needed.
              Beacons can send personalized offers to shoppers' smartphones, and
              smart payment systems enable seamless transactions.
            </li>
          </ul>

          <p className="text-justify p-2 pt-4">
            Please note that providing code for every industry application would
            be impractical due to the vastness and complexity of IoT projects in
            those domains. However, I can provide simple code snippets for a few
            examples to give you an idea of how IoT devices can work. Let's
            continue:
          </p>
          <h4 className="p-2 m-2 text-lg font-bold">
            Smart Home - Controlling Lights using Arduino and Bluetooth:
          </h4>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify p-2 pt-4">
            In this example, we use an Arduino board and a Bluetooth module to
            control a light. The code sets up the Bluetooth module for
            communication and defines the pin for controlling the light. In the
            loop() function, the code checks for incoming commands from the
            Bluetooth module. If the command is '1', it turns on the light, and
            if the command is '0', it turns off the light.
            <h4 className="p-2 m-2 text-lg font-bold">
              
              Smart Agriculture - Monitoring Soil Moisture using Arduino and
              Soil Sensor:
            </h4>
            <CodeHighlighter>{codeString1}</CodeHighlighter>
          </p>
          <p className="text-justify p-2 pt-4">
            In this example, we use an Arduino board and a soil moisture sensor
            to monitor the moisture level in the soil. The code reads the analog
            value from the sensor and maps it to a percentage. It then prints
            the moisture level in percentage through the serial communication,
            which can be viewed on a computer.
          </p>
          <p className="text-justify p-2 pt-4">
            These code examples demonstrate simple implementations of IoT
            concepts in specific applications. However, keep in mind that actual
            IoT projects involve more complex code and hardware integration.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTIntroImportance;
