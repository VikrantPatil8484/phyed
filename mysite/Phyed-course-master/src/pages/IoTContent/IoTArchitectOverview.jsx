import React from "react";

const IoTArchitectOverview = () => {
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Overview of IoT architecture layers (perception layer, network
            layer, middleware layer, application layer)
          </h4>

        
          <p className="text-justify p-2 pt-4">
            Now, let's see an example to understand how these layers work
            together:
          </p>
          <p className="text-justify p-2 pt-4 font-semibold">
            Imagine you have a smart garden system. In your garden, you have IoT
            devices like soil moisture sensors, temperature sensors, and
            sprinklers. Here's how the layers work in this scenario:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
            <span class="font-semibold">Perception Layer:</span> The soil moisture sensors detect the moisture
              level in the soil, and the temperature sensors measure the
              temperature in the garden. They convert this information into
              electronic signals that can be understood by the other layers.
            </li>
            <li className="pt-4">
            <span class="font-semibold">Network Layer:</span> The sensors are connected to a central hub or a
              gateway device through a wireless network like Wi-Fi. The central
              hub acts as a bridge between the sensors and the internet. It
              collects the data from the sensors and sends it to the middleware
              layer using the internet connection.
            </li>
            <li className="pt-4">
            <span class="font-semibold">Middleware Layer:</span> The middleware layer receives the data from the
              central hub and processes it. It might analyze the data to
              determine if the plants need watering or adjust the sprinklers
              based on the temperature readings. It can also store the data for
              future analysis or send notifications to your smartphone if
              something needs your attention.
            </li>
            <li className="pt-4">
            <span class="font-semibold">Application Layer:</span> In this example, the application layer could be
              a smartphone app that you use to monitor and control your smart
              garden. The app receives the processed data from the middleware
              layer and displays it in an easy-to-understand format. You can
              check the moisture level and temperature of your garden, and even
              remotely control the sprinklers to water the plants.
            </li>
          </ul>

          <p className="text-justify p-2 pt-4">
            So, in summary, the IoT architecture has different layers that work
            together to enable the collection, communication, processing, and
            application of data from IoT devices. The perception layer collects
            data, the network layer connects devices, the middleware layer
            processes and manages the data, and the application layer allows us
            to interact with the system through software applications.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTArchitectOverview;
