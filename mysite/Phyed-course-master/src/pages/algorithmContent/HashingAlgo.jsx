import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const HashingAlgo = () => {
  const codeString = `
  #include <iostream>
  #include <iostream>
  #include <openssl/sha.h>
  
  std::string sha256(const std::string& data) {
    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256_CTX sha256Context;
    SHA256_Init(&sha256Context);
    SHA256_Update(&sha256Context, data.c_str(), data.length());
    SHA256_Final(hash, &sha256Context);
    std::string hashString;
    for (int i = 0; i < SHA256_DIGEST_LENGTH; i++) {
      hashString += hash[i];
    }
    return hashString;
  }
    int main() {
    std::string data = "Hello, World!";
    std::string hashValue = sha256(data);
    std::cout << "Original Data: " << data << std::endl;
    std::cout << "SHA-256 Hash Value: ";
    for (char ch : hashValue) {
      std::cout << std::hex << (int)(unsigned char)ch;
    }
    std::cout << std::endl;
    return 0;
  }
  `;
  const codeString1 = `
  
  #include <iostream>
  #include <list>
  #include <vector>
  class HashTable {
    private:
    int numSlots; // Number of slots in the hash table
    std::vector<std::list<int>> table; // Hash table as a vector of linked lists
    int hashFunction(int key) {
    // Simple hash function: key mod numSlots
      return key % numSlots;
  }
  public:
  HashTable(int size) {
    numSlots = size;
    table.resize(numSlots);
  }
  void insert(int key) {
  int slot = hashFunction(key);
  table[slot].push_back(key);
}
  void search(int key) {
  int slot = hashFunction(key);
  std::list<int>& slotList = table[slot];
  // Linear search within the slot's linked list
  for (int value : slotList) {
    if (value == key) {
    std::cout << "Key " << key << " found!" << std::endl;
    return;
  }
}
  std::cout << "Key " << key << " not found!" << std::endl;
}
  void remove(int key) {
  int slot = hashFunction(key);
  std::list<int>& slotList = table[slot];
  // Linear search within the slot's linked list
  for (auto it = slotList.begin(); it != slotList.end(); ++it) {
    if (*it == key) {
    slotList.erase(it);
    std::cout << "Key " << key << " removed!" << std::endl;
    return;
  }
}
  std::cout << "Key " << key << " not found!" << std::endl;
  }
};
  int main() {
  // Create a hash table with 10 slots

  HashTable hashTable(10);
  // Insert some keys
  hashTable.insert(5);
  hashTable.insert(15);
  hashTable.insert(25);
  // Search for a key
  hashTable.search(15);
  // Remove a key
  hashTable.remove(15);
  // Search for the removed key
  hashTable.search(15);
  return 0;
}`;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Hashing Algorithms :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Hashing algorithms are an essential part of computer science and
            cryptography. They are used to transform data of arbitrary size into
            fixed-size values, known as hash values or hash codes. Hashing
            algorithms have various applications, including data integrity
            verification, password storage, data indexing, and digital
            signatures.
          </p>

          <p className="text-justify pt-4">
            The primary goal of a hashing algorithm is to generate a unique hash
            value for each unique input. It should be computationally efficient,
            producing a fixed-size output regardless of the input size.
            Additionally, a good hashing algorithm should have the following
            properties:
          </p>

          <ul className="list-decimal px-10">
            <li className="pt-4">
              Deterministic: Given the same input, the hashing algorithm should
              always produce the same hash value.
            </li>
            <li className="pt-2">
              Fast Computation: The hashing algorithm should be computationally
              efficient and provide a constant-time operation, regardless of the
              input size.
            </li>
            <li className="pt-2">
              Uniform Distribution: The hash values should be uniformly
              distributed across the entire range of possible values to minimize
              collisions.
            </li>
            <li className="pt-2">
              Non-invertible: It should be computationally infeasible to
              determine the original input data from the hash value alone. This
              property ensures the security and integrity of sensitive
              information.
            </li>
          </ul>
          <p className="text-justify pt-4">Common Hashing Algorithms:</p>

          <ul className="list-decimal px-10">
            <li className="pt-4">
              MD5 (Message Digest Algorithm 5): MD5 is a widely used hash
              function that produces a 128-bit hash value. However, MD5 is
              considered weak for cryptographic purposes due to vulnerabilities
              and collision attacks.
            </li>
            <li className="pt-2">
              SHA-1 (Secure Hash Algorithm 1): SHA-1 produces a 160-bit hash
              value and was widely used in the past. However, it has been
              deprecated for cryptographic applications due to vulnerabilities.
            </li>
            <li className="pt-2">
              SHA-256 (Secure Hash Algorithm 256-bit): SHA-256 is a member of
              the SHA-2 family and produces a 256-bit hash value. It is widely
              used in cryptographic applications, including digital signatures
              and password storage.
            </li>
            <li className="pt-2">
              SHA-3 (Secure Hash Algorithm 3): SHA-3 is the latest member of the
              Secure Hash Algorithm family, standardized in 2015. It provides
              hash functions with different output sizes, including SHA-3-256,
              SHA-3-384, and SHA-3-512.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Here's a C++ example using the SHA-256 hashing algorithm from the
            OpenSSL library:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we define the{" "}
            <span className="code-text italic text-sm">sha256</span> function
            that takes a string as input and returns its SHA-256 hash value. It
            uses the SHA-256 functions from the OpenSSL library to perform the
            hash computation. The resulting hash value is stored in a string of
            characters.
          </p>
          <p className="text-justify pt-4">
            The <span className="code-text italic text-sm">main</span> function
            demonstrates the usage of the{" "}
            <span className="code-text italic text-sm">sha256</span> function by
            hashing the string "Hello, World!" using the SHA-256 algorithm and
            printing the resulting hash value.
          </p>

          <p className="text-justify pt-4">
            It's important to note that this example uses the OpenSSL library
            for simplicity. In real-world applications, you should use
            well-established and tested libraries that provide secure and
            efficient implementations of hashing algorithms.
          </p>
          <p className="text-justify pt-4">
            Hashing algorithms have numerous applications, such as ensuring data
            integrity, storing passwords securely, and creating unique
            identifiers. By understanding hashing algorithms and their
            properties, students can appreciate their importance in various
            fields, including cybersecurity and database management.
          </p>

          <br></br>
          <br></br>

          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Collision Resolution:
          </h4>
          <br></br>

          <p className="text-justify pt-4">
            Collision resolution is a fundamental concept in computer science
            and hash table data structures. When using hash functions to map
            keys to values, collisions occur when two or more keys are mapped to
            the same hash value. Collision resolution techniques are used to
            handle these collisions and ensure the correct retrieval and storage
            of values.
          </p>
          <p className="text-justify pt-4">
            There are several collision resolution strategies that can be
            employed, and one common approach is called chaining. Chaining
            involves creating a linked list or any other appropriate data
            structure at each hash table slot. When a collision occurs, the new
            key-value pair is appended to the list associated with that slot.
          </p>
          <p className="text-justify pt-4">
            In this example, we define a HashTable class that implements a hash
            table using chaining as the collision resolution strategy. The class
            maintains a vector of linked lists, where each slot in the vector
            represents a potential hash table entry. The insert, search, and
            remove methods demonstrate the basic operations of the hash table.
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>

          <br></br>
          <p className="text-justify pt-4">
            The hashFunction method is a simple hash function that calculates
            the slot index by taking the key modulo the number of slots in the
            hash table. This is a basic example, and in practice, more advanced
            hash functions are used to distribute the keys evenly across the
            hash table.
          </p>
          <p className="text-justify pt-4">
            The insert method calculates the hash slot for the key, and the key
            is appended to the linked list at that slot. The search method
            performs a linear search within the linked list to find the key. If
            the key is found, a corresponding message is printed. Otherwise, a
            "not found" message is printed. The remove method also performs a
            linear search to find and remove the key from the linked list.
          </p>
          <p className="text-justify pt-4">
            By understanding collision resolution techniques like chaining,
            students can appreciate the importance of handling collisions in
            hash table implementations and ensure efficient retrieval and
            storage of dataere's a detailed explanation of collision resolution
            using chaining in C++:
          </p>
        </article>
      </section>
    </div>
  );
};

export default HashingAlgo;
