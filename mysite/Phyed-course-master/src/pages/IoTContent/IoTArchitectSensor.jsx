import React from "react";

const IoTArchitectSensor = () => {
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Sensor and Actuator Technologies
          </h4>

          <p className="text-justify p-2 pt-4">
            <span class="font-semibold">Sensors:</span>Sensors are devices that
            can detect and measure things from the environment. They are like
            our senses, but for machines. Here are a few examples of sensors
            commonly used in IoT:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              <span class="font-semibold">Temperature Sensor:</span> A
              temperature sensor measures the temperature of the surroundings.
              It can tell us if it's hot or cold. It can be used in weather
              stations, smart thermostats, or even in a smart garden system to
              monitor the temperature of the soil.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Light Sensor:</span> A light sensor
              detects the amount of light in the environment. It can tell us if
              it's bright or dark. It is used in automatic lights that turn on
              when it gets dark outside or in smart window blinds that adjust
              based on the brightness of the sunlight.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Motion Sensor:</span> A motion sensor
              can detect movement. It can tell if someone is moving or if there
              is any activity in an area. Motion sensors are commonly used in
              security systems to detect intruders and in automatic doors that
              open when someone approaches.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Proximity Sensor:</span> A proximity
              sensor can detect how close an object is to it. It can tell if
              something is near or far away. Proximity sensors are used in
              automatic hand sanitizer dispensers that dispense sanitizer when
              you put your hand close to it without touching.
            </li>
          </ul>

          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">Actuators:</span> Actuators are
            devices that can perform actions based on the instructions they
            receive. They are like the hands and feet of machines. Here are a
            few examples of actuators commonly used in IoT:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              <span class="font-semibold">Motors:</span> Motors are actuators
              that can spin or rotate. They can be used to move things like
              robot arms, wheels on a robot, or even automatic curtains that
              open and close.
            </li>
            <li className="pt-4">
              <span class="font-semibold">LEDs:</span> LEDs (Light-Emitting
              Diodes) are actuators that produce light. They can be used in
              smart bulbs that can change colors or in smart notification lights
              that indicate different things with different colors.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Solenoids:</span> Solenoids are
              actuators that create a pushing or pulling force. They are used in
              door locks, where they can lock or unlock the door when instructed
              to do so.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Speakers:</span> Speakers are
              actuators that produce sound. They are used in smart speakers like
              Amazon Echo or Google Home, which can play music, answer
              questions, or even tell jokes.
            </li>
          </ul>
          <h4 className="p-2 mt-4 text-lg font-bold rounded-md card-bg w-full">
            Now, let's see an example to understand how sensors and actuators
            work together:
          </h4>
          <p className="text-justify p-2 pt-4">
            Imagine you have a smart home system. In your living room, you have
            a motion sensor and smart lights. Here's how they work together:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              <span class="font-semibold">Motion Sensor:</span> The motion
              sensor detects movement in the room. When it senses someone
              entering the room, it sends a signal to the smart home system.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Smart Lights:</span> The smart lights
              are connected to the smart home system. When the system receives a
              signal from the motion sensor indicating that someone has entered
              the room, it instructs the smart lights to turn on.
            </li>
            <li className="pt-4">
              <span class="font-semibold">Action:</span> The smart lights
              receive the instruction from the smart home system and turn on,
              illuminating the room. This way, when you walk into the living
              room, the lights automatically turn on without you having to flip
              a switch.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            So, in summary, sensors are devices that can detect and measure
            things like temperature, light, motion, or proximity. Actuators, on
            the other hand, are devices that can perform actions like moving,
            emitting light or sound, or locking/unlocking. In an IoT system,
            sensors provide input to the system by detecting and measuring the
            environment, while actuators receive instructions from the system
            and perform actions based on those instructions. This allows IoT
            devices to sense and interact with the world around them.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTArchitectSensor;
