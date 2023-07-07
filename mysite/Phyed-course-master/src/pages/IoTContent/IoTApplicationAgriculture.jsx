import React from "react";

const IoTApplicationAgriculture = () => {
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Agriculture and environmental monitoring with IoT
          </h4>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Agriculture:</span>
            IoT technologies have revolutionized agriculture, helping farmers
            monitor and optimize crop growth, improve productivity, and conserve
            resources. Here are some examples:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              <span className="font-semibold">Soil Moisture Monitoring:</span>
              Sensors are placed in the soil to measure moisture levels. This
              data helps farmers determine when and how much to water their
              crops, ensuring optimal growth and reducing water waste.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Crop Monitoring:</span>
              IoT devices, such as drones or remote sensors, are used to monitor
              crop health. They capture images or collect data about plant
              growth, nutrient levels, and pest infestations. Farmers can then
              take timely action, such as applying fertilizers or pesticides, to
              protect the crops.
            </li>
            <li className="pt-4">
              <span className="font-semibold">
                Automated Irrigation Systems:
              </span>
              IoT-based irrigation systems use sensors and weather data to
              automatically adjust the watering schedule and amount. This
              ensures that crops receive the right amount of water at the right
              time, conserving water resources and reducing manual effort.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Environmental Monitoring: </span>
            IoT technologies are also used to monitor and preserve the
            environment. They help collect data about air quality, water
            quality, and other environmental factors. Here are some examples:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              <span className="font-semibold">Air Quality Monitoring:</span>
              Sensors placed in various locations measure parameters like
              particulate matter, pollutant gases, and humidity. This data helps
              identify areas with poor air quality and implement measures to
              improve it.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Water Quality Monitoring:</span>
              Sensors are deployed in bodies of water, such as rivers or lakes,
              to measure water quality parameters like temperature, pH levels,
              and dissolved oxygen. This information helps assess the health of
              aquatic ecosystems and identify pollution sources.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Wildlife Conservation:</span>
              IoT devices, such as GPS collars or tags, are used to track the
              movement and behavior of wildlife. This data helps researchers
              understand animal habits, migration patterns, and conservation
              needs, contributing to wildlife protection efforts.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4 font-semibold">
            While providing specific code examples for agriculture and
            environmental monitoring IoT applications is challenging, I can give
            you a simplified example using Python for soil moisture monitoring
            in agriculture:
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTApplicationAgriculture;
