import React from "react";

const IoTDevicesHardware = () => {
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            IoT hardware components (microcontrollers, sensors, actuators)
          </h4>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Microcontrollers:</span>{" "}
            Microcontrollers are like tiny computers that can be programmed to
            control various electronic devices. They are the brains of IoT
            devices. Here's a simplified explanation of how microcontrollers
            work:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              Think of a microcontroller as a brain that can receive input, make
              decisions, and produce output.
            </li>
            <li className="pt-4">
              It consists of a small computer chip with a processor (CPU),
              memory, and input/output (I/O) pins.
            </li>
            <li className="pt-4">
              Programmers write code to instruct the microcontroller on what
              actions to take based on the input it receives.
            </li>
            <li className="pt-4">
              The microcontroller can control sensors and actuators, process
              data, and communicate with other devices.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            For example, you can use a microcontroller to program a smart light
            bulb to turn on or off based on certain conditions, like a motion
            sensor detecting movement.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Sensors:</span>
            Sensors are devices that can detect and measure things from the
            environment. They act as the "senses" of an IoT device. Here are a
            few examples of sensors commonly used in IoT:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              Temperature Sensor: Measures the temperature of the surroundings.
            </li>
            <li className="pt-4">
              Light Sensor: Detects the amount of light in the environment.
            </li>
            <li className="pt-4">
              Motion Sensor: Detects movement or activity in an area.
            </li>
            <li className="pt-4">
              Proximity Sensor: Detects how close an object is to it.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            Sensors convert the physical measurements into electrical signals
            that can be understood by the microcontroller. The microcontroller
            can then use this data to make decisions or perform actions.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">3. Actuators: </span>Actuators are devices that can perform actions based on the instructions they receive. They are like the "hands and feet" of an IoT device. Here are a few examples of actuators commonly used in IoT:

            
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
            Motors: Actuators that can spin or rotate. They can be used to move things like robot arms, wheels on a robot, or even automatic curtains that open and close.

            </li>
LEDs: Actuators that produce light. They can be used in smart bulbs that can change colors or in smart notification lights.
            <li className="pt-4">
            Solenoids: Actuators that create a pushing or pulling force. They are used in door locks, where they can lock or unlock the door when instructed to do so.
            </li>
          
            <li className="pt-4">
            Speakers: Actuators that produce sound. They are used in smart speakers that can play music or provide voice instructions.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
          The microcontroller sends signals to the actuators, instructing them to perform specific actions. For example, the microcontroller can turn on an LED when a sensor detects darkness.

          </p>
          <p className="text-justify p-2 pt-4">
Please note that providing actual code examples for each component would be extensive. However, you can find code examples and tutorials online that demonstrate how to program microcontrollers, interface with sensors, and control actuators using various programming languages and development platforms.

          </p>
          <p className="text-justify p-2 pt-4">
          In summary, microcontrollers are the brains of IoT devices that can be programmed to control sensors and actuators. Sensors detect and measure things from the environment, while actuators perform actions based on the instructions received from the microcontroller. Together, these components enable IoT devices to sense and interact with the world around them.

          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTDevicesHardware;
