import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTDevicesDevelopment = () => {
  const codeString = `
  // Define pin numbers
  const int buttonPin = 2;
  const int ledPin = 13;
  // Setup function
  void setup() {
  // Set the button pin as input
    pinMode(buttonPin, INPUT);
  // Set the LED pin as output
    pinMode(ledPin, OUTPUT);
  }
  // Loop function
  void loop() {
  // Read the state of the button
    int buttonState = digitalRead(buttonPin);
  // If the button is pressed, turn on the LED
    if (buttonState == HIGH) {
      digitalWrite(ledPin, HIGH);
    } else {
      digitalWrite(ledPin, LOW);
    }
  }
  
  `;
  const codeString1 = `import picamera
  # Create a camera object
  camera = picamera.PiCamera()
  # Set the resolution
  camera.resolution = (640, 480)
  # Capture an image
  camera.capture('image.jpg')
  # Close the camera
  camera.close()`;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            IoT development boards (Arduino, Raspberry Pi)
          </h4>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Arduino:</span> Arduino is a
            popular IoT development board that is widely used by beginners and
            professionals alike. It is designed to be easy to use and is a great
            platform for learning about electronics and programming. Here's a
            simplified explanation of Arduino:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              Arduino boards consist of a microcontroller, a small computer chip
              that can be programmed to control various electronic devices.
            </li>
            <li className="pt-4">
              Arduino boards have input/output (I/O) pins that allow you to
              connect sensors and actuators easily.
            </li>
            <li className="pt-4">
              You can write code (known as sketches) using the Arduino
              programming language, which is based on C/C++.
            </li>
            <li className="pt-4">
              The Arduino software provides a user-friendly interface for
              writing and uploading code to the board.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            For example, you can program an Arduino board to control an LED
            (actuator) based on the input from a button (sensor).
          </p>
          <h4 className="p-2 text-lg font-bold">
            Here's a simple Arduino code example that turns an LED on when a
            button is pressed:
          </h4>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Raspberry Pi:</span> Raspberry Pi
            is another popular IoT development board that is more like a
            miniature computer. It is capable of running a full operating system
            and supports various programming languages. Here's a simplified
            explanation of Raspberry Pi:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              Raspberry Pi boards have a more powerful processor, memory, and
              storage compared to Arduino boards.
            </li>
            <li className="pt-4">
              They have multiple USB ports, HDMI ports, and network connectivity
              options.
            </li>
            <li className="pt-4">
              Raspberry Pi boards can run operating systems like Linux, which
              allows you to use a wide range of programming languages and
              software.
            </li>
            <li className="pt-4">
              You can connect sensors and actuators to the Raspberry Pi's GPIO
              (General Purpose Input/Output) pins.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            For example, you can program a Raspberry Pi board to control a
            robotic arm (actuator) based on the input from a camera (sensor).
          </p>
          <h4 className="p-2 text-lg font-bold">
            Here's a simple Python code example that captures an image from a
            camera connected to a Raspberry Pi:
          </h4>
          <CodeHighlighter>{codeString1}</CodeHighlighter>

          <p className="text-justify p-2 pt-4">
            Please note that providing a comprehensive tutorial with complete
            code examples for each development board would be extensive.
            However, you can find many online resources, tutorials, and
            beginner-friendly projects for both Arduino and Raspberry Pi,
            including step-by-step instructions and sample code.
          </p>
          <p className="text-justify p-2 pt-4">
            In summary, Arduino and Raspberry Pi are popular IoT development
            boards that allow you to program and control electronic devices.
            Arduino is simpler and suitable for beginners, while Raspberry Pi
            offers more advanced capabilities with its computer-like features.
            Both boards provide a great platform for learning about electronics
            and programming in the context of IoT.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTDevicesDevelopment;
