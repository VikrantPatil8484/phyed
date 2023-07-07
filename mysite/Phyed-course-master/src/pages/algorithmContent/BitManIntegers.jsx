import CodeHighlighter from "../../components/CodeHighlighter";
const BitManIntegers = () => {
  const codeString = `
  #include <iostream>
  int main() {
    int num1 = 5;
    int num2 = 3;
    int bitwiseAnd = num1 & num2;
    int bitwiseOr = num1 | num2;
    int bitwiseXor = num1 ^ num2;
    int bitwiseNot = ~num1;
    int leftShift = num1 << 2;
    int rightShift = num1 >> 2;
    std::cout << "Bitwise AND: " << bitwiseAnd << std::endl;
    std::cout << "Bitwise OR: " << bitwiseOr << std::endl;
    std::cout << "Bitwise XOR: " << bitwiseXor << std::endl;
    std::cout << "Bitwise NOT: " << bitwiseNot << std::endl;
    std::cout << "Left Shift: " << leftShift << std::endl;
    std::cout << "Right Shift: " << rightShift << std::endl;
    return 0;
}
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Bitwise Manipulation of Integers :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Bitwise manipulation of integers involves performing operations on
            the individual bits of the binary representation of the integers.
            This technique allows for efficient manipulation and extraction of
            specific bits or patterns within the binary representation. Bitwise
            operations in C++ are performed using the bitwise operators{" "}
            <span className="code-text italic text-sm">& </span>,{" "}
            <span className="code-text italic text-sm">|</span>,{" "}
            <span className="code-text italic text-sm">^ </span>,
            <span className="code-text italic text-sm">~ </span>, and the shift
            operators <span className="code-text italic text-sm">{"<<"}</span>
            and <span className="code-text italic text-sm">{">>"}</span>.
          </p>

          <p className="text-justify pt-4">
            Here are some common bitwise operations on integers:
          </p>

          <p className="text-justify pt-4">
            1. Bitwise AND{" "}
            <span className="code-text italic text-sm">(&) </span>:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Performs a bitwise AND operation on corresponding bits of two
              integers.
            </li>
            <li className="pt-2">
              The result is 1 if both bits are 1; otherwise, it is 0.
            </li>
            <li className="pt-2">
              Example: <span className="code-text italic text-sm">5 & 3</span>{" "}
              performs a bitwise AND on binary representations
              <span className="code-text italic text-sm">101 </span>and{" "}
              <span className="code-text italic text-sm">011</span>, resulting
              in <span className="code-text italic text-sm">001</span> (decimal
              1).
            </li>
          </ul>

          <p className="text-justify pt-4">
            2. Bitwise OR <span className="code-text italic text-sm">(|)</span>:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Performs a bitwise OR operation on corresponding bits of two
              integers.
            </li>
            <li className="pt-2">
              The result is 1 if either of the bits is 1; otherwise, it is 0.
            </li>
            <li className="pt-2">
              Example: <span className="code-text italic text-sm">5 | 3 </span>{" "}
              performs a bitwise OR on binary representations{" "}
              <span className="code-text italic text-sm">101 </span>and{" "}
              <span className="code-text italic text-sm">011 </span>, resulting
              in <span className="code-text italic text-sm">111</span> (decimal
              7).
            </li>
          </ul>

          <p className="text-justify pt-4">
            3. Bitwise XOR{" "}
            <span className="code-text italic text-sm">(^) </span>:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Performs a bitwise XOR (exclusive OR) operation on corresponding
              bits of two integers.
            </li>
            <li className="pt-2">
              The result is 1 if the bits are different; otherwise, it is 0.
            </li>
            <li className="pt-2">
              Example: <span className="code-text italic text-sm">5 ^ 3</span>{" "}
              performs a bitwise XOR on binary representations
              <span className="code-text italic text-sm">101 </span>and{" "}
              <span className="code-text italic text-sm">011</span>, resulting
              in <span className="code-text italic text-sm">110 </span>(decimal
              6).
            </li>
          </ul>

          <p className="text-justify pt-4">
            4. Bitwise NOT <span className="code-text italic text-sm">(~)</span>
            :
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Performs a bitwise NOT operation on an integer, flipping all the
              bits.
            </li>
            <li className="pt-2">
              Example: <span className="code-text italic text-sm">~5 </span>
              performs a bitwise NOT on binary representation{" "}
              <span className="code-text italic text-sm">101 </span>, resulting
              in <span className="code-text italic text-sm">11111110 </span>
              (decimal -6).
            </li>
          </ul>

          <p className="text-justify pt-4">
            5. Left Shift{" "}
            <span className="code-text italic text-sm">{"<<"} </span>:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Shifts the bits of an integer to the left by a specified number of
              positions.
            </li>
            <li className="pt-2">
              The vacant bits on the right are filled with zeros.
            </li>
            <li className="pt-2">
              Example:{" "}
              <span className="code-text italic text-sm">5 {"<<"} 2</span>{" "}
              shifts the bits of binary representation{" "}
              <span className="code-text italic text-sm">101 </span>
              two positions to the left, resulting in{" "}
              <span className="code-text italic text-sm">10100 </span>(decimal
              20).
            </li>
          </ul>

          <p className="text-justify pt-4">
            6. Right Shift{" "}
            <span className="code-text italic text-sm">101 </span>
            {">>"}:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Shifts the bits of an integer to the right by a specified number
              of positions.
            </li>
            <li className="pt-2">
              The vacant bits on the left are filled based on the sign bit for
              signed integers.
            </li>

            <li className="pt-2">
              Example:{" "}
              <span className="code-text italic text-sm">5 {">>"} 2</span>{" "}
              shifts the bits of binary representation{" "}
              <span className="code-text italic text-sm">101 </span>
              two positions to the right, resulting in{" "}
              <span className="code-text italic text-sm">1</span> (decimal 1).
            </li>
          </ul>
          <p className="text-justify pt-4">
            Here's an example that demonstrates bitwise manipulation of integers
            in C++:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we perform various bitwise operations on the
            integers <span className="code-text italic text-sm">num1 </span> and{" "}
            <span className="code-text italic text-sm">num2 </span>. We use the
            bitwise operators{" "}
            <span className="code-text italic text-sm">&</span>,{" "}
            <span className="code-text italic text-sm">|</span>,{" "}
            <span className="code-text italic text-sm">^</span>, and{" "}
            <span className="code-text italic text-sm">~</span>
            for bitwise AND, OR, XOR, and NOT operations, respectively. We also
            use the shift operators{" "}
            <span className="code-text italic text-sm">{"<<"}</span> and{" "}
            <span className="code-text italic text-sm">{">>"} </span> for left
            shift and right shift operations.
          </p>

          <p className="text-justify pt-4">
            Bitwise manipulation of integers is commonly used in areas such as:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Low-level programming, including embedded systems and device
              drivers.
            </li>
            <li className="pt-2">
              Network programming for handling network protocols and bitwise
              flags.
            </li>

            <li className="pt-2">
              Data compression algorithms, such as Huffman coding and run-length
              encoding.
            </li>
            <li className="pt-2">
              Cryptography for bitwise operations on encryption and decryption
              algorithms.
            </li>
          </ul>
          <p className="text-justify pt-4">
            By understanding bitwise manipulation, students can gain insights
            into the binary representation of integers and optimize code for
            performance-critical operations. It is a useful skill when dealing
            with low-level programming, optimization, and algorithmic problems.
          </p>
        </article>
      </section>
    </div>
  );
};

export default BitManIntegers;
