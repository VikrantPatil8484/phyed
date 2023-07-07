import React from "react";

const IoTNetworkingTopology = () => {
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            IoT network topologies (star, mesh, hybrid)
          </h4>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Star Topology:</span>
            Imagine a star with many points connected to a central point. That's
            how a star network looks. In an IoT star network, the central point
            is called the "hub" or "gateway," and all the other devices connect
            directly to it.
          </p>
          <p className="text-justify p-2 pt-4">
            Think of the hub as the boss or leader of the network. It's like a
            superhero that can communicate with all the devices connected to it.
            Whenever a device wants to send or receive information, it talks to
            the hub first, and the hub makes sure the information gets to the
            right place.
          </p>
          <p className="text-justify p-2 pt-4">
            The advantage of a star network is that it's simple and easy to
            understand. If one device has a problem, it doesn't affect the other
            devices. However, if the hub stops working, then all the devices
            connected to it might lose their connection.
          </p>

          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Mesh Topology: </span> Imagine a
            spider's web with many threads connecting different points. That's
            how a mesh network looks. In an IoT mesh network, devices are like
            the threads in the web, and they can connect to multiple other
            devices around them.
          </p>
          <p className="text-justify p-2 pt-4">
            In a mesh network, devices can talk directly to each other without
            always needing to go through a central hub. It's like passing
            messages from one friend to another until it reaches the right
            destination. This makes the network very flexible and resilient.
          </p>
          <p className="text-justify p-2 pt-4">
            If one device stops working or if there's an obstacle, the other
            devices can find different paths to send information. It's like
            finding a new route if one road is blocked. This way, the network
            can keep working even if some devices are not functioning.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">3. Hybrid Topology:</span>A hybrid
            network is a combination of different network topologies. It's like
            having multiple superheroes with different powers working together
            to create a strong network.
          </p>
          <p className="text-justify p-2 pt-4">
            In an IoT hybrid network, some devices might be connected in a star
            topology, where they communicate through a central hub. Meanwhile,
            other devices might be connected in a mesh topology, where they can
            talk directly to each other.
          </p>
          <p className="text-justify p-2 pt-4">
            The advantage of a hybrid network is that it combines the strengths
            of different topologies. It can provide the simplicity and
            centralized control of a star network while also offering the
            flexibility and resilience of a mesh network.
          </p>
          <p className="text-justify p-2 pt-4">
            Different IoT applications might require different network
            topologies based on their needs. Some applications work well with a
            star network, while others benefit from the flexibility of a mesh
            network. A hybrid network allows us to choose the best topology for
            each situation.
          </p>
          <p className="text-justify p-2 pt-4">
            Remember, these topologies are like different ways of arranging
            devices to communicate with each other. Just like how you can build
            different structures with LEGO blocks, IoT networks can be built
            using different topologies depending on what we want to achieve.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTNetworkingTopology;
