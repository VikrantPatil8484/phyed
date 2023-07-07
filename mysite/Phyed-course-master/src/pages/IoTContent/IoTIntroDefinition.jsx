import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTIntroDefinition = () => {
  const codeString = `
  // Include the necessary libraries
#include <Wire.h>
// Define the moisture sensor pin
int moisturePin = A0;
// Define the water pump pin
int pumpPin = 2;
void setup() {
// Set the pump pin as an output
  pinMode(pumpPin, OUTPUT);
}
void loop() {
// Read the moisture level from the sensor
  int moistureLevel = analogRead(moisturePin);
// Check if the moisture level is below the threshold
  if (moistureLevel < 500) {
// Activate the water pump
    digitalWrite(pumpPin, HIGH);
    delay(5000); // Water for 5 seconds
    digitalWrite(pumpPin, LOW); // Turn off the pump
  }
delay(1000); // Wait for 1 second before checking again
}
`;

  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Definition and basic concepts of IoT
          </h4>
          <p className="text-justify p-2 pt-4">
            The Internet of Things (IoT) refers to a network of physical objects
            or "things" that are connected to the Internet and can communicate
            with each other and with people. To understand this better, imagine
            you have a toy car that can be controlled using your smartphone.
            When you press the "forward" button on your phone, the car moves
            forward. When you press the "stop" button, the car stops. This is an
            example of a simple IoT device. A car is a physical object, and it
            can communicate with your phone through the Internet.
          </p>
          <h4 className="p-2 text-lg font-bold">
            {" "}
            Now, let's break down the basic concepts of IoT:
          </h4>
          
          <ul className="list-disc px-10">
            <li className="pt-4">
              <span class="font-semibold">Things:</span> "Things" in IoT can be
              any physical objects that have sensors or actuators (things that
              can measure or control something). Examples of things include
              smartwatches, thermostats, lights, and even household appliances
              like refrigerators or washing machines. These objects are embedded
              with special chips or modules that enable them to connect to the
              internet.
            </li>
            <li className="pt-4">
              <span class="font-semibold"> Connectivity:</span> Connectivity is
              what allows these things to communicate with each other and with
              people. Just like you can send a message to your friend using your
              phone, IoT devices can send and receive information over the
              internet. This connectivity can be wired (using cables) or
              wireless (using Wi-Fi, Bluetooth, or other wireless technologies).
            </li>
            <li className="pt-4">
              <span class="font-semibold">Sensors and Actuators:</span>Sensors
              are like the senses of IoT devices. They can detect and measure
              things like temperature, humidity, light, motion, and more.
              Actuators, on the other hand, are like the hands of IoT devices.
              They can control or manipulate things, such as turning on a light
              or opening a door. These sensors and actuators allow IoT devices
              to interact with the physical world.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Data:</span>IoT devices collect data
              from the environment using their sensors. For example, a weather
              station IoT device might collect data about temperature, humidity,
              and wind speed. This data can then be sent to a central server or
              cloud storage for analysis and processing.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Cloud Computing:</span>The cloud
              refers to a network of powerful computers that can store and
              process large amounts of data. IoT devices often send their data
              to the cloud for analysis and storage. This allows for advanced
              processing and enables devices to access data and services from
              anywhere in the world.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Applications:</span>IoT has a wide
              range of applications in various fields, such as smart homes,
              agriculture, healthcare, transportation, and more. For example, in
              a smart home, IoT devices can be used to control lights,
              thermostats, and security systems, making our lives more
              convenient and efficient.
            </li>
          </ul>
          <h4 className="p-2 m-2 text-lg font-bold">
            Now, let's dive into a simple example and code snippet to
            demonstrate how an IoT device can work:
          </h4>
          <p className="text-justify p-2 pt-4">
            Imagine you have a plant that needs to be watered regularly. You can
            create an IoT device using a moisture sensor, a small water pump,
            and a microcontroller like an Arduino. The moisture sensor measures
            the level of moisture in the soil, and if it's below a certain
            threshold, the microcontroller triggers the water pump to start
            watering the plant.
          </p>
          <h4 className="p-2 m-2 text-lg font-bold">
            Here's a simplified version of the code for this IoT device using
            Arduino:
          </h4>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify p-2 pt-4">
            This code sets up the pins for the moisture sensor and water pump.
            In the loop() function, it reads the moisture level from the sensor.
            If the moisture level is below a certain threshold (in this case,
            500), it activates the water pump for 5 seconds and then turns it
            off.
          </p>
          <p className="text-justify p-2 pt-4">
            By connecting this IoT device to the internet and storing the data
            in the cloud, you can monitor the moisture level of your plant
            remotely and even receive notifications on your smartphone when it
            needs to be watered.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTIntroDefinition;
