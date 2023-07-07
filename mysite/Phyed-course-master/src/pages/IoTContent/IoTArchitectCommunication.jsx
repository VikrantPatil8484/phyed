import React from "react";

const IoTArchitectCommunication = () => {
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Communication protocols for IoT (e.g., MQTT, CoAP, HTTP)
          </h4>
          <p className="text-justify p-2 pt-4">
            <span class="font-semibold">
              MQTT (Message Queuing Telemetry Transport):
            </span>
            MQTT is a lightweight and efficient protocol designed for IoT
            devices to communicate with each other and with servers or
            applications. It works on a publish-subscribe model, where devices
            can publish messages to a central server (broker) and other devices
            can subscribe to receive those messages. Here's a simplified
            explanation of how MQTT works:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Imagine you have a temperature sensor in your room, and you want
              to send the temperature readings to a central server.
            </li>
            <li className="pt-4">
              The temperature sensor would connect to the MQTT broker, which is
              like a central hub that receives and distributes messages.
            </li>
            <li className="pt-4">
              The sensor would publish a message with the temperature data to
              the broker.
            </li>
            <li className="pt-4">
              Any device or application that has subscribed to receive
              temperature data would receive the message from the broker.
            </li>
            <li className="pt-4">
              For example, an application on your smartphone might be subscribed
              to receive temperature updates. It would receive the message and
              display the current temperature on your phone.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            <span class="font-semibold">
              CoAP (Constrained Application Protocol):
            </span>{" "}
            CoAP is another lightweight protocol designed for IoT devices,
            particularly for those with limited resources such as low-power
            devices or devices with constrained network connectivity. It is
            built on top of the UDP (User Datagram Protocol) for efficient
            communication. Here's a simplified explanation of how CoAP works:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Let's say you have a smart thermostat that can be controlled
              remotely.
            </li>
            <li className="pt-4">
              The thermostat would send a CoAP request to a server to change the
              temperature setting.
            </li>
            <li className="pt-4">
              The server would receive the request and send a CoAP response back
              to the thermostat confirming the change.
            </li>
            <li className="pt-4">
              The thermostat would then adjust the temperature accordingly.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            <span class="font-semibold">
              HTTP (Hypertext Transfer Protocol):
            </span>
            HTTP is a well-known protocol used for communication between web
            browsers and servers. It is not specifically designed for IoT but
            can be used in IoT applications as well. Here's a simplified
            explanation of how HTTP works:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Imagine you have a smart camera that captures images and you want
              to view those images on your computer.
            </li>
            <li className="pt-4">
              The server would receive the request, store the image, and send an
              HTTP response back to the camera indicating that the image has
              been successfully received.
            </li>
            <li className="pt-4">
              The server would receive the request and send a CoAP response back
              to the thermostat confirming the change.
            </li>
            <li className="pt-4">
              On your computer, you would open a web browser and send an HTTP
              GET request to the server to retrieve the stored image.
            </li>
            <li className="pt-4">
              The server would respond with the image, and your browser would
              display it on your computer screen.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
          Please note that providing actual code examples for each protocol would be extensive. However, you can find code examples and tutorials online that demonstrate how to implement these protocols in various programming languages.

          </p>
          <p className="text-justify p-2 pt-4">
          In summary, MQTT, CoAP, and HTTP are communication protocols that allow IoT devices to send and receive data. MQTT and CoAP are designed specifically for IoT and are lightweight, efficient, and suitable for constrained devices. HTTP is a more general-purpose protocol widely used in web communication that can also be utilized in IoT applications.

          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTArchitectCommunication;
