import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const BitManinOpsShiftMask = () => {
  const codeString = `
  #include <iostream>
  int main() {
    int a = 5; // 101 in binary
    int b = 3; // 011 in binary
    int bitwiseAnd = a & b;
    int bitwiseOr = a | b;
    int bitwiseXor = a ^ b;
    int bitwiseNotA = ~a;
    std::cout << "Bitwise AND: " << bitwiseAnd << std::endl;
    std::cout << "Bitwise OR: " << bitwiseOr << std::endl;
    std::cout << "Bitwise XOR: " << bitwiseXor << std::endl;
    std::cout << "Bitwise NOT of a: " << bitwiseNotA << std::endl;
    return 0;
  }
  
  `;
  const codeString1 = `
  #include <iostream>
  int main() {
    unsigned int num = 45; // Binary: 00101101
    // Bitwise AND
    unsigned int resultAnd = num & 12; // Binary: 00001100
    std::cout << "Bitwise AND: " << resultAnd << std::endl;
    // Bitwise OR
    unsigned int resultOr = num | 12; // Binary: 00101101
    std::cout << "Bitwise OR: " << resultOr << std::endl;
    // Bitwise XOR
    unsigned int resultXor = num ^ 12; // Binary: 00100001
    std::cout << "Bitwise XOR: " << resultXor << std::endl;
    // Bitwise NOT
    unsigned int resultNot = ~num; // Binary: 11010010
    std::cout << "Bitwise NOT: " << resultNot << std::endl;
    // Left Shift
    unsigned int resultLeftShift = num << 2; // Binary: 10110100
  
    std::cout << "Left Shift: " << resultLeftShift << std::endl;
    // Right Shift
    unsigned int resultRightShift = num >> 2; // Binary: 00001011
    std::cout << "Right Shift: " << resultRightShift << std::endl;
    // Masking
    unsigned int mask = 0b00001111; // Binary: 00001111
    unsigned int resultMask = num & mask; // Binary: 00001101
    std::cout << "Masking: " << resultMask << std::endl;
    // Counting Set Bits
    unsigned int count = 0;
    unsigned int temp = num;
    while (temp > 0) {
      temp = temp & (temp - 1);
      count++;
    }
    std::cout << "Set Bit Count: " << count << std::endl;
    return 0;
  }
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Bitwise Operations,Shift,Mask,Counting :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Bit manipulation involves performing operations on individual bits
            of binary numbers. It is a powerful technique used in computer
            programming to optimize code, perform low-level operations, and
            solve various problems efficiently. Understanding bit manipulation
            can help students gain insights into how computers represent and
            manipulate data at the lowest level.
          </p>

          <p className="text-justify pt-4">
            In C++, bitwise operators are used to perform bit manipulation. The
            common bitwise operators are:
          </p>

          <ul className="list-decimal px-10">
            <li className="pt-4">
              AND <span className="code-text italic text-sm">&</span> : Performs
              a bitwise AND operation on two numbers, producing a result where
              each bit is set if and only if the corresponding bits of both
              numbers are set.
            </li>
            <li className="pt-2">
              OR <span className="code-text italic text-sm">|</span> : Performs
              a bitwise OR operation on two numbers, producing a result where
              each bit is set if either of the corresponding bits of the two
              numbers is set.
            </li>
            <li className="pt-2">
              XOR <span className="code-text italic text-sm">^</span> : Performs
              a bitwise XOR (exclusive OR) operation on two numbers, producing a
              result where each bit is set if and only if the corresponding bits
              of the two numbers are different.
            </li>
            <li className="pt-2">
              NOT <span className="code-text italic text-sm">~</span> : Performs
              a bitwise NOT operation on a number, flipping all its bits.
            </li>
          </ul>

          <p className="text-justify pt-4">
            Bitwise operators are applied to the binary representation of
            numbers at the bit level. For example, the number{" "}
            <span className="code-text italic text-sm">5</span> in binary is
            <span className="code-text italic text-sm">101</span>, and the
            number 3 in binary is{" "}
            <span className="code-text italic text-sm">011</span>. Here's an
            example that demonstrates bit manipulation using bitwise operators
            in C++:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we perform various bitwise operations on the
            numbers <span className="code-text italic text-sm">a</span> and{" "}
            <span className="code-text italic text-sm">b</span>. We use the{" "}
            <span className="code-text italic text-sm">&</span> operator for
            bitwise AND, <span className="code-text italic text-sm">|</span>{" "}
            operator for bitwise OR,{" "}
            <span className="code-text italic text-sm">^</span> operator for
            bitwise XOR, and <span className="code-text italic text-sm">~</span>{" "}
            operator for bitwise NOT. The results of the operations are stored
            in separate variables and printed.
          </p>
          <p className="text-justify pt-4">
            Students can find daily life applications of bit manipulation in
            various scenarios, such as:
          </p>

          <ul className="list-decimal px-10">
            <li className="pt-4">
              Bitwise operations are used in low-level programming to
              efficiently manipulate device registers, memory-mapped I/O, and
              perform data compression.
            </li>
            <li className="pt-2">
              Bit manipulation is employed in network protocols to pack and
              unpack flags, options, and fields within headers.
            </li>
            <li className="pt-2">
              Bitwise operations are used in cryptography algorithms, such as
              encryption and hashing, to perform bitwise permutations,
              substitutions, and transformations.
            </li>
          </ul>
          <p className="text-justify pt-4">
            By understanding bit manipulation, students can gain insights into
            the internal working of computers, optimize code for performance,
            and solve problems more efficiently, especially in areas like
            embedded systems, cryptography, and networking.
          </p>
          <br></br>
          <br></br>

          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Bitwise Operations,Shift,Mask,Counting :
          </h4>

          <br></br>

          <p className="text-justify pt-4">
            Bitwise operations, shift operations, masking, and counting are
            fundamental techniques used in computer programming for manipulating
            individual bits or groups of bits in binary numbers. These
            operations are efficient and provide a way to perform low-level
            operations on binary data, such as setting or clearing specific
            bits, extracting or modifying certain bit patterns, and counting the
            number of set bits.
          </p>

          <p className="text-justify pt-4">1. Bitwise Operations:</p>
          <ul className="list-decimal px-10">
            <li className="pt-4">
              Bitwise AND <span className="code-text italic text-sm">&</span> :
              Performs a bitwise AND operation on two numbers, producing a
              result where each bit is set if and only if the corresponding bits
              of both numbers are set.
            </li>
            <li className="pt-2">
              Bitwise OR <span className="code-text italic text-sm">|</span> :
              Performs a bitwise OR operation on two numbers, producing a result
              where each bit is set if either of the corresponding bits of the
              two numbers is set.
            </li>
            <li className="pt-2">
              Bitwise XOR <span className="code-text italic text-sm">^</span> :
              Performs a bitwise XOR (exclusive OR) operation on two numbers,
              producing a result where each bit is set if and only if the
              corresponding bits of the two numbers are different.
            </li>
            <li className="pt-2">
              Bitwise NOT <span className="code-text italic text-sm">~</span> :
              Performs a bitwise NOT operation on a number, flipping all its
              bits.
            </li>
          </ul>

          <p className="text-justify pt-4">2. Shift Operations:</p>
          <ul className="list-decimal px-10">
            <li className="pt-4">
              Left Shift{" "}
              <span className="code-text italic text-sm">{"<<"}</span> : Shifts
              the bits of a number to the left by a specified number of
              positions. This effectively multiplies the number by 2 raised to
              the power of the shift amount.
            </li>
            <li className="pt-2">
              Right Shift{" "}
              <span className="code-text italic text-sm">{">>"}</span> : Shifts
              the bits of a number to the right by a specified number of
              positions. For unsigned numbers, this is equivalent to division by
              2 raised to the power of the shift amount. For signed numbers, the
              sign bit is preserved.
            </li>
          </ul>

          <p className="text-justify pt-4">3. Masking:</p>
          <ul className="list-decimal px-10">
            <li className="pt-4">
              Masking involves using bitwise AND (
              <span className="code-text italic text-sm">&</span>) operations
              with a binary pattern to selectively manipulate specific bits in a
              number. By applying a mask, certain bits can be set to 0 or 1
              while leaving the rest unchanged.
            </li>
          </ul>

          <p className="text-justify pt-4">4. Counting:</p>
          <ul className="list-decimal px-10">
            <li className="pt-4">
              Counting the number of set bits (bits with a value of 1) in a
              binary number is a common task in programming. Efficient
              algorithms, such as the Brian Kernighan's algorithm, use bitwise
              operations to count the set bits in a number.
            </li>
          </ul>

          <p className="text-justify pt-4">
            Here's a simple example in C++ that demonstrates these bitwise
            operations:
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify pt-4">
            In this example, we perform various bitwise operations on the number
            <span className="code-text italic text-sm"> num</span> and print the
            results. We demonstrate bitwise AND, OR, XOR, NOT, left shift, right
            shift, masking, and counting set bits using the Brian Kernighan's
            algorithm.
          </p>
          <p className="text-justify pt-4">
            Bitwise operations and techniques like shifting, masking, and
            counting find applications in various areas, including:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Low-level programming, such as device drivers and embedded
              systems.
            </li>
            <li className="pt-4">
              Networking and network protocols for packing and unpacking data.
            </li>
            <li className="pt-4">
              Data compression and encryption algorithms.
            </li>
            <li className="pt-4">Graphics and image processing.</li>
            <li className="pt-4">
              Bit-level optimizations for performance improvements.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Understanding these techniques can enhance a student's programming
            skills and enable them to solve problems more efficiently,
            particularly when working with binary data, optimization, or
            low-level operations.
          </p>
        </article>
      </section>
    </div>
  );
};

export default BitManinOpsShiftMask;
