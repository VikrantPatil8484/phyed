import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTEcomputingHybrid = () => {
  const codeString = `
  # Sample Python code for an edge device in a hybrid architecture
  # Data Collection
  temperature = read_temperature_sensor()
  # Local Processing
  if temperature > 25:
      print("It's hot!")
  else:
      print("It's cool.")
  # Selective Data Offloading
  if temperature > 30:
      offload_data_to_cloud(temperature)
  
  `;
  const codeString1 = `
  # Sample Python code for a cloud server in a hybrid architecture
  
  # Data Processing and Analytics
  def process_data_from_edge(temperature):
      if temperature > 30:
          print("Heatwave alert! Take necessary precautions.")
  
  # Receiving Offloaded Data
  def receive_data_from_edge(temperature):
      process_data_from_edge(temperature)
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Hybrid architectures combining cloud and edge computing for IoT
          </h4>
          <p className="font-semibold text-justify p-2 pt-4">
            Hybrid Architectures Combining Cloud and Edge Computing for IoT:
          </p>
          <p className="text-justify p-2 pt-4">
            Hybrid architectures combine the power of both cloud computing and
            edge computing in IoT applications. They leverage the strengths of
            each approach to create a more efficient and effective system. Let's
            explore these concepts using our classroom analogy to make it easier
            for a kid to understand.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Cloud Computing:</span>
            Cloud computing is like having a teacher's desk where all the
            important resources, information, and expertise are stored. When you
            have a complex math problem or need guidance, you can go to the
            teacher's desk and ask for help. In IoT, the cloud represents
            powerful remote servers that can store and process vast amounts of
            data.
          </p>
          <p className="text-justify p-2 pt-4">
            Cloud computing offers advantages such as scalability, extensive
            storage, and advanced analytics capabilities. However, it may suffer
            from latency issues and may not be suitable for real-time
            decision-making.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Edge Computing: </span>
            Edge computing, as we discussed earlier, is like having
            mini-computers at each desk in the classroom. These mini-computers
            can perform computations and make decisions right at the source of
            the data. Edge computing reduces latency and enables real-time
            processing and decision-making.
          </p>
          <p className="text-justify p-2 pt-4">
            Edge devices are closer to the data source, which allows for faster
            response times and local data processing. However, they may have
            limited computational power and storage capacity compared to the
            cloud.
          </p>
          <p className="text-justify p-2 pt-4 font-semibold">
            Now, let's understand how hybrid architectures combine cloud and
            edge computing in IoT:
          </p>
          <p className="text-justify p-2 pt-4">
            In a hybrid architecture, some data processing tasks are performed
            at the edge devices, while others are offloaded to the cloud. The
            division of tasks is based on factors such as the criticality of the
            task, resource constraints, and the need for real-time
            decision-making.
          </p>
          <p className="text-justify p-2 pt-4 font-semibold">
            Here's how the hybrid architecture works:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              <span className="font-semibold">Data Collection:</span>
              Edge devices collect data from sensors or other sources, just like
              students collect information from their desks.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Local Processing:</span>
              The edge devices perform initial data processing and analysis
              locally, similar to solving math problems at your desk. This
              includes tasks like filtering, aggregating, and summarizing the
              data. Local processing helps in reducing latency and enabling
              quick responses.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Selective Data Offloading:</span>
              Some data or processed information is selectively sent to the
              cloud for further analysis or storage. This is like when you
              encounter a challenging math problem that you can't solve at your
              desk. You take it to the teacher's desk for additional assistance.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Cloud Processing and Analytics:</span>
              The cloud receives the offloaded data and performs more complex
              computations, advanced analytics, or long-term storage. The cloud
              has more computational resources and advanced algorithms, making
              it suitable for in-depth analysis and large-scale processing.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Decision-Making and Actions:</span>
              Based on the analysis and insights gained from the cloud,
              decisions and, actions are communicated back to the edge devices.
              This allows the edge devices to take appropriate actions in
              real-time, similar to getting instructions from the teacher's desk
              and acting accordingly.
            </li>
          </ul>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">Code for Hybrid Architectures:</span>{" "}
            The code for hybrid architectures involves programming both the edge
            devices and the cloud server. Here's a simplified example to
            illustrate the process:
          </p>
          <h3 className="p-2 text-lg font-bold">Edge Device Code:</h3>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code snippet, the edge device collects the temperature data
            (data collection) and performs local processing to determine if it's
            hot or cool (local processing). If the temperature exceeds a certain
            threshold, the data is selectively offloaded to the cloud for
            further analysis (selective data offloading).
          </p>
          <h3 className="p-2 text-lg font-bold">Cloud Server Code:</h3>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code snippet, the cloud server receives the offloaded
            temperature data (receiving offloaded data) and performs further
            processing and analytics, such as issuing an alert for a heatwave
            (data processing and analytics).
          </p>
          <p className="text-justify p-2 pt-4">
            It's important to note that these examples provide a simplified
            understanding of the code involved in hybrid architectures. The
            actual implementation can vary based on the specific programming
            language, hardware platform, and IoT framework being used.
          </p>
          <p className="text-justify p-2 pt-4">
            In summary, hybrid architectures combine the strengths of both cloud
            computing and edge computing in IoT. Edge devices perform local
            processing and decision-making, while the cloud handles complex
            analytics and long-term storage. The code on edge devices and the
            cloud server enable data collection, local processing, selective
            data offloading, and cloud processing, leading to efficient and
            effective IoT systems.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTEcomputingHybrid;
