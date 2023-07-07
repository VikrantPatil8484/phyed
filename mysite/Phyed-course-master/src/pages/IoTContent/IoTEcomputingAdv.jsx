import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTEcomputingAdv = () => {
  const codeString = `# Sample Python code for an edge device in IoT
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
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            {" "}
            Advantages of processing data at the edge of the network
          </h4>
          <p className="font-semibold">
            Advantages of Processing Data at the Edge of the Network in IoT:
          </p>
          <p className="text-justify p-2 pt-4">
            Processing data at the edge of the network, also known as edge
            computing, offers several advantages in IoT applications. Let's
            explore these advantages using our classroom analogy to make it
            easier for a kid to understand.
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              <span className="font-semibold">Reduced Latency:</span>
              Imagine you have a question for the teacher, but instead of asking
              directly, you need to pass a note to your friend sitting in the
              back row, who then passes it to another friend, and finally, it
              reaches the teacher. This process takes time, and you have to wait
              for the answer. This is similar to sending data to a remote server
              or the cloud for processing. However, with edge computing, the
              mini-computer at your desk can instantly solve the problem without
              the need for passing notes. This reduces the time it takes to get
              an answer, which is called latency. In IoT, reduced latency
              enables real-time responses and faster decision-making. Sometimes,
              you may need to work on your math problems even if the teacher is
              not in the classroom. With the mini-computer at your desk, you can
              continue solving problems offline. Similarly, edge devices in IoT
              can continue collecting and processing data even when there is no
              network connectivity. This allows the system to operate
              autonomously and provides resilience against network outages.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Improved Reliability:</span>
            </li>
            <li className="pt-4">
              <span className="font-semibold">Bandwidth Optimization: </span>
              Sending large amounts of data to a remote server or the cloud
              consumes network bandwidth, similar to passing many notes around
              the classroom. This can cause congestion and slow down the overall
              process. In edge computing, the mini-computer at your desk can
              filter and summarize the data before sending it to the cloud. It's
              like condensing multiple notes into one and sending only the
              essential information. This optimizes the bandwidth usage and
              reduces the network traffic, making the system more efficient.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Enhanced Privacy and Security: </span>
              Data privacy and security are important considerations in IoT.
              When data is processed at the edge, it stays within the local
              network environment. This means that sensitive information, like
              your math problem, doesn't leave your desk. It doesn't need to be
              transmitted over the network, reducing the risk of unauthorized
              access or data breaches. By keeping data local, edge computing
              enhances privacy and security.
            </li>
            <li className="pt-4">
              <span className="font-semibold">Offline Operations:</span>
              Sometimes, the network connection to a remote server or the cloud
              may not be reliable. It's like when your friend passes the note to
              the teacher, but someone accidentally drops it on the way. With
              edge computing, the mini-computer at your desk doesn't rely on
              external connections. It can process data locally, ensuring that
              the analysis and decision-making happen even if the network
              connection is intermittent or unavailable. This improves the
              overall reliability of the system.
            </li>
            </ul>
            <p className="font-semibold pt-4 p-2 text-justify">
              Now, let's take a closer look at the code involved in edge
              computing. While providing a complete code example might be
              challenging, here's a simplified illustration:
            </p>
            <CodeHighlighter>{codeString}</CodeHighlighter>
          
          <p className="text-justify p-2 pt-4">
            In this code snippet, we assume that the edge device is equipped
            with a temperature sensor. The code reads the temperature value from
            the sensor (data collection), processes it to determine if it's hot
            or cool (data processing), and makes a decision based on the
            temperature value (decision-making).
          </p>
          <p className="text-justify p-2 pt-4">
            It's important to note that the actual code implementation depends
            on the specific programming language, the hardware platform, and the
            IoT framework being used. This example is a simplified
            representation to provide an understanding of how code can be
            involved in edge computing.
          </p>
          <p className="text-justify p-2 pt-4">
            In summary, processing data at the edge of the network in IoT offers
            advantages such as reduced latency, improved reliability, bandwidth
            optimization, enhanced privacy and security, and the ability to
            operate offline. Code plays a crucial role in enabling data
            collection, processing, and decision-making on edge devices,
            allowing for faster and more efficient IoT applications.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTEcomputingAdv;
