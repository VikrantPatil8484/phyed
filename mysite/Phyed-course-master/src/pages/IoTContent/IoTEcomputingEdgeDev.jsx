import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTEcomputingEdgeDev = () => {
  const codeString = `
  # Sample Python code for an edge device in IoT
  
  # Data Collection
  temperature = read_temperature_sensor()
  
  # Data Processing
  if temperature > 25:
      print("It's hot!")
  else:
      print("It's cool.")
  
  # Decision-making
  if temperature > 30:
      turn_on_air_conditioner()
  elif temperature < 15:
      turn_on_heater()
  else:
      maintain_current_state()
  
  `;
  const codeString1 = `
  # Sample Python code for a gateway in IoT
  
  # Data Aggregation
  data = []
  
  def collect_data_from_edge_device(device_id):
      device_data = read_data_from_device(device_id)
      data.append(device_data)
  
  # Protocol Conversion
  def convert_data_to_another_format(data):
      # Convert data to another format (e.g., JSON)
      converted_data = convert_to_json(data)
      return converted_data
  
  # Secure Communication
  def transmit_data_to_cloud(converted_data):
      encrypted_data = encrypt(converted_data)
      send_data_to_cloud(encrypted_data)
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Edge devices and gateways for local data processing
          </h4>
          <p className="font-semibold text-justify p-2 pt-4">
            Edge Devices and Gateways for Local Data Processing in IoT:
          </p>
          <p className="text-justify p-2 pt-4">
            In IoT, edge devices and gateways play a crucial role in enabling
            local data processing at the edge of the network. Let's dive into
            these concepts using our classroom analogy to make it easier for a
            kid to understand.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Edge Devices:</span>
            Edge devices are small computing devices or sensors that are located
            closer to the data source in an IoT network. They can be compared to
            mini-computers at each desk in our classroom analogy. Edge devices
            have the capability to collect, process, and analyze data locally,
            without relying on a remote server or the cloud.
          </p>
          <p className="text-justify p-2 pt-4">
            For example, in a smart home scenario, edge devices could include
            smart thermostats, motion sensors, or smart locks. Each of these
            devices can collect data, such as temperature readings or motion
            detection, and perform local data processing to make real-time
            decisions or trigger actions.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Gateways:</span>
            Gateways act as intermediaries between edge devices and the central
            server or the cloud. They are responsible for aggregating data from
            multiple edge devices and forwarding it to the appropriate
            destination. Think of a gateway as a student who collects all the
            notes from different desks and hands them to the teacher.
          </p>
          <p className="text-justify p-2 pt-4">
            Gateways can perform various tasks such as data filtering, protocol
            translation, and secure communication. They ensure that the data
            collected by edge devices is efficiently transmitted to the desired
            destination while maintaining reliability and security.
          </p>
          <p className="text-justify p-2 pt-4">
            For example, in a smart building system, gateways can collect data
            from multiple sensors and devices spread across different floors or
            areas. They can aggregate this data and transmit it to the central
            server or cloud for further processing or analysis.
          </p>
          <p className="text-justify p-2 pt-4 font-semibold">
            Now, let's take a closer look at how code can be involved in edge
            devices and gateways in IoT:
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">Code for Edge Devices: </span>
            The code on edge devices allows them to collect, process, and
            analyze data locally. Here's a simplified example using Python:
          </p>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code snippet, the edge device reads the temperature value
            from a temperature sensor (data collection), processes it to
            determine if it's hot or cool (data processing), and makes a
            decision based on the temperature value (decision-making).
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">Code for Gateways:</span>
            The code on gateways focuses on tasks like data aggregation,
            protocol conversion, and secure communication. Here's a simplified
            example using Python:
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code snippet, the gateway collects data from different edge
            devices and stores it in the data list (data aggregation). It then
            converts the collected data to another format, such as JSON
            (protocol conversion). Finally, the data is encrypted and
            transmitted securely to the cloud (secure communication).
          </p>
          <p className="text-justify p-2 pt-4">
            It's important to note that these examples provide a simplified
            understanding of the code involved in edge devices and gateways. The
            actual implementation can vary based on the specific programming
            language, hardware platform, and IoT framework being used.
          </p>
          <p className="text-justify p-2 pt-4">
            In summary, edge devices are small computing devices or sensors
            located closer to the data source, capable of local data processing.
            Gateways act as intermediaries, aggregating and transmitting data
            from edge devices to the central server or cloud. Code on edge
            devices and gateways enable data collection, processing, and
            communication, allowing for efficient and localized data processing
            in IoT applications.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTEcomputingEdgeDev;
