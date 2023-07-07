import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTApplicationSmartHomes = () => {
  const codeString = `import requests
  def turn_on_light():
      requests.get("http://192.168.1.100/api/lights/1/on")  # Send request to turn on light
  def turn_off_light():
      requests.get("http://192.168.1.100/api/lights/1/off")  # Send request to turn off light
  turn_on_light()  # Turn on the light`;
  const codeString1 = `
  import requests
  
  def set_temperature(temperature):
      requests.put("http://192.168.1.200/api/thermostat", json={"temperature": temperature})  # Send request to set temperature
  
  set_temperature(22)  # Set the temperature to 22 degrees Celsius
  
  `;
  const codeString2 = `
  import cv2
  def monitor_security_camera():
      camera = cv2.VideoCapture(0)  # Access the camera with ID 0 (typically the built-in webcam)
  
      while True:
          ret, frame = camera.read()  # Read a frame from the camera
          cv2.imshow("Security Camera", frame)  # Display the frame
  
          if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to quit
              break
  
      camera.release()
      cv2.destroyAllWindows()
  
  monitor_security_camera()
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Smart homes and home automation systems
          </h4>
          <p className="text-justify p-2 pt-4">
            A smart home is a house equipped with technology that allows you to
            control and automate various devices and systems. The goal of a
            smart home is to make your life easier, more convenient, and more
            efficient by automating tasks and providing remote control
            capabilities.
          </p>
          <h3 className="p-2 text-lg font-bold">
            Let's discuss a few examples of smart home applications and explain
            how they work:
          </h3>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Smart Lighting:</span>
            In a smart lighting system, you can control the lights in your home
            using a smartphone or voice commands. You can turn the lights on or
            off, adjust the brightness, and even change the color of the lights.
            This is made possible by using smart light bulbs or smart switches
            that can connect to your home Wi-Fi network.
          </p>
          <h3 className="p-2 text-lg font-bold">
            Here's an example code snippet to control smart lights using Python:
          </h3>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we use the requests library to send HTTP requests to a
            smart lighting system. By calling the turn_on_light function, we
            send a request to turn on the light with the specified IP address
            (e.g., "192.168.1.100"). Similarly, the turn_off_light function
            sends a request to turn off the light. The smart lighting system
            interprets these requests and performs the corresponding action.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Smart Thermostat:</span>A smart
            thermostat allows you to control the temperature of your home
            remotely. You can set the desired temperature, schedule temperature
            changes throughout the day, and even let the thermostat learn your
            preferences over time. Smart thermostats can help save energy and
            make your home more comfortable.
          </p>
          <h3 className="p-2 text-lg font-bold">
            Here's a simplified example of controlling a smart thermostat using
            Python:
          </h3>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we use the requests library to send a PUT request to a
            smart thermostat system. The request includes a JSON payload that
            specifies the desired temperature. The thermostat system receives
            this request and adjusts the temperature accordingly.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">3. Smart Security:</span>A smart
            security system helps protect your home by providing features such
            as remote monitoring, motion detection, and alarm systems. You can
            receive notifications on your phone when someone enters your home or
            when there's a security breach. You can also monitor your home
            through security cameras from anywhere in the world.
          </p>
          <h3 className="p-2 text-lg font-bold">
            Here's a simplified example of accessing a security camera feed
            using Python:
          </h3>
          <CodeHighlighter>{codeString2}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we use the cv2 (OpenCV) library to access the camera
            feed. The VideoCapture function is used to open the camera with ID
            0, which usually corresponds to the built-in webcam. We then
            continuously read frames from the camera and display them using
            cv2.imshow. Pressing 'q' will break the loop and stop displaying the
            camera feed.
          </p>
          <p className="text-justify p-2 pt-4">
            These are simplified examples of smart home applications and how
            they can be controlled or accessed using programming. In real-world
            scenarios, smart home systems involve more complexity and use
            specialized protocols and technologies.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTApplicationSmartHomes;
