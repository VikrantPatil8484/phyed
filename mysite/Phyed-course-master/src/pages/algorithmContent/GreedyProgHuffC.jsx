import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const GreedyProgHuffC = () => {

  const codeString = `
#include <iostream>
#include <queue>
#include <unordered_map>

// Structure to represent a node in the Huffman tree
struct HuffmanNode {
    char data;
    int frequency;
    HuffmanNode* left;
    HuffmanNode* right;

    HuffmanNode(char data, int frequency) : data(data), frequency(frequency), left(nullptr), right(nullptr) {}
};

// Function to compare Huffman nodes based on frequency
struct CompareNodes {
    bool operator()(HuffmanNode* a, HuffmanNode* b) {
        return a->frequency > b->frequency;
    }
};

// Function to build the Huffman tree
HuffmanNode* buildHuffmanTree(std::unordered_map<char, int>& frequencyMap) {
    std::priority_queue<HuffmanNode*, std::vector<HuffmanNode*>, CompareNodes> pq;

    // Create a leaf node for each symbol and add it to the priority queue
    for (auto& pair : frequencyMap) {
        char symbol = pair.first;
        int frequency = pair.second;
        HuffmanNode* node = new HuffmanNode(symbol, frequency);
        pq.push(node);
    }

    // Combine nodes until only one node is left in the priority queue
    while (pq.size() > 1) {
        HuffmanNode* left = pq.top();
        pq.pop();

        HuffmanNode* right = pq.top();
        pq.pop();

        // Create a new internal node with combined frequency
        int combinedFrequency = left->frequency + right->frequency;
        HuffmanNode* newNode = new HuffmanNode('\0', combinedFrequency);
        newNode->left = left;
        newNode->right = right;

        // Add the new node back to the priority queue
        pq.push(newNode);
    }

    // Return the root of the Huffman tree
    return pq.top();
}

// Function to generate Huffman codes for each symbol
void generateHuffmanCodes(HuffmanNode* root, std::string currentCode, std::unordered_map<char, std::string>& huffmanCodes) {
    if (root == nullptr) {
        return;
    }

    // Leaf node: store the Huffman code
    if (root->left == nullptr && root->right == nullptr) {
        huffmanCodes[root->data] = currentCode;
    }

    // Recursively traverse left and right subtrees
    generateHuffmanCodes(root->left, currentCode + "0", huffmanCodes);
    generateHuffmanCodes(root->right, currentCode + "1", huffmanCodes);
}

// Function to encode the input text using Huffman codes
std::string encodeText(const std::string& text, std::unordered_map<char, std::string>& huffmanCodes) {
    std::string encodedText;
    for (char c : text) {
        encodedText += huffmanCodes[c];
    }
    return encodedText;
}

// Function to decode the encoded text using the Huffman tree
std::string decodeText(const std::string& encodedText, HuffmanNode* root) {
    std::string decodedText;
    HuffmanNode* current = root;
    for (char bit : encodedText) {
        if (bit == '0') {
            current = current->left;
        } else {
            current = current->right;
        }

        // Leaf node: append the symbol to the decoded text
        if (current->left == nullptr && current->right == nullptr) {
            decodedText += current->data;
            current = root;
        }
    }
    return decodedText;
}

int main() {
    std::string text = "HELLO, HUFFMAN!";
    
    // Step 1: Perform frequency analysis
    std::unordered_map<char, int> frequencyMap;
    for (char c : text) {
        frequencyMap[c]++;
    }

    // Step 2: Build the Huffman tree
    HuffmanNode* root = buildHuffmanTree(frequencyMap);

    // Step 3: Generate Huffman codes
    std::unordered_map<char, std::string> huffmanCodes;
    generateHuffmanCodes(root, "", huffmanCodes);

    // Step 4: Encode the input text
    std::string encodedText = encodeText(text, huffmanCodes);
    std::cout << "Encoded text: " << encodedText << std::endl;

    // Step 5: Decode the encoded text
    std::string decodedText = decodeText(encodedText, root);
    std::cout << "Decoded text: " << decodedText << std::endl;

    return 0;
}
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Huffman Coding</h4>
        <p className='text-justify pt-4'>Huffman coding is a lossless data compression algorithm used to encode data more efficiently by assigning variable-length codes to characters. It was developed by David A. Huffman in the 1950s and is widely used in various applications, including file compression, image compression, and data transmission.</p>
        <p className='text-justify pt-4'>The basic idea behind Huffman coding is to assign shorter codes to frequently occurring characters or symbols and longer codes to less frequently occurring ones. This way, the more common symbols are represented with fewer bits, resulting in overall compression of the data.</p>
        <p className='text-justify pt-4'>Here's a step-by-step explanation of how Huffman coding works:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Frequency Analysis: </strong> The first step in Huffman coding is to perform a frequency analysis of the input data. The frequency analysis determines the frequency of occurrence of each symbol or character in the data. This information is used to build a frequency table.</li>
          <li className='pt-2'><strong>Building the Huffman Tree: </strong> Based on the frequency table, a Huffman tree is constructed. The Huffman tree is a binary tree where each leaf node represents a symbol and each internal node represents the combination of two symbols. The frequency of each symbol determines the weight of the corresponding node.</li>
          <ul className='list-disc px-10'>
            <li className='pt-2'>Start by creating a leaf node for each symbol, with the frequency as the weight.</li>
            <li className='pt-2'>Combine the two nodes with the lowest frequency to create a new internal node. The frequency of the new node is the sum of the frequencies of its child nodes.</li>
            <li className='pt-2'>Repeat the previous step until all nodes are combined into a single tree.</li>
          </ul>
          <li className='pt-2'>At the end of this process, the Huffman tree is constructed, and the root of the tree represents the combined frequency of all symbols.</li>
          <li className='pt-2'><strong>Assigning Codes: </strong>Once the Huffman tree is built, each symbol is assigned a unique binary code by traversing the tree. The binary codes are assigned based on the path taken from the root to the corresponding leaf node.</li>
          <ul className='list-disc px-10'>
            <li className='pt-2'>Start at the root of the Huffman tree.</li>
            <li className='pt-2'>Traverse left for a '0' and right for a '1' until reaching a leaf node.</li>
            <li className='pt-2'>Assign the binary code accumulated during the traversal to the corresponding symbol.</li>
            <li className='pt-2'>Repeat this process for all symbols in the Huffman tree.</li>
          </ul>
          <li className='pt-2'>The assigned codes are such that no code is a prefix of another code, ensuring that the codes are uniquely decodable.</li>
          <li className='pt-2'><strong>Encoding: </strong>With the Huffman codes assigned to each symbol, the original data can be encoded using the generated Huffman tree and codes. Each symbol is replaced with its corresponding Huffman code.<br></br>For example, if the original data is "ABRACADABRA" and the corresponding Huffman codes are: A: 0 B: 10 C: 110 D: 111 R: 11 . The encoded data would be: "0101100100110100111011"</li>
          <li className='pt-2'><strong>Decoding: </strong>To decode the encoded data, the Huffman tree is used. Starting from the root, each bit of the encoded data is read sequentially. When a leaf node is reached, the corresponding symbol is output, and the process continues until the entire encoded data is decoded.Using the previous example, if we have the encoded data "0101100100110100111011" and the Huffman tree, we can decode it as: "010" -> A "110" -> C "10" -> B "011" -> R "010" -> A .  The decoded data is "ABRACADABRA".</li>
        </ul>
        <p className='text-justify pt-4'>Huffman coding provides efficient compression because frequently occurring symbols are represented with shorter codes, reducing the overall size of the encoded data. However, it is important to note that the compression achieved by Huffman coding may vary depending on the frequency distribution of symbols in the input data.</p>
        <p className='text-justify pt-4'>Overall, Huffman coding is a widely used and effective compression technique that has made significant contributions to data compression and transmission.</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this code, we first define a structure <span className='text-green-500'>HuffmanNode</span> to represent a node in the Huffman tree. We also define the <span className='text-green-500'>CompareNodes</span> functor to compare Huffman nodes based on their frequencies for the priority queue.</p>
        <p className='text-justify pt-4'>The <span className='text-green-500'>buildHuffmanTree</span> function takes a frequency map as input and builds the Huffman tree using a priority queue. It combines nodes with the lowest frequencies until only one node is left, which becomes the root of the Huffman tree.</p>
        <p className='text-justify pt-4'>The <span className='text-green-500'>generateHuffmanCodes</span> function recursively traverses the Huffman tree to generate Huffman codes for each symbol. It stores the codes in the <span className='text-green-500'>huffmanCodes</span> map.</p>
        <p className='text-justify pt-4'>The <span className='text-green-500'>encodeText</span> function encodes the input text using the generated Huffman codes.</p>
        <p className='text-justify pt-4'>The <span className='text-green-500'>decodeText</span> function decodes the encoded text using the Huffman tree. It traverses the tree based on the bits in the encoded text and appends the corresponding symbols to the decoded text.</p>
        <p className='text-justify pt-4'>In the <span className='text-green-500'>main</span> function, we provide a sample input text, perform frequency analysis, build the Huffman tree, generate Huffman codes, encode the text, and decode the encoded text. Finally, we print the encoded and decoded texts.</p>
      </article>
    </section>
    </div>
  )
}

export default GreedyProgHuffC