import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const BitManTricksOpti = () => {
  const codeString = `
  #include <iostream>
  #include <bitset>
  // Define a chess board bitboard
  typedef std::bitset<64> Bitboard;
  int main() {
    // Initialize an empty chess board
    Bitboard board(0);
    // Set a piece at square e4
    board.set(28);
    // Print the bitboard representation
    std::cout << board << std::endl;
    // Check if square d4 is occupied
    bool isOccupied = board.test(27);
    std::cout << "Is square d4 occupied? " << std::boolalpha <<
    isOccupied << std::endl;
    // Shift the bitboard one rank up
    Bitboard shiftedBoard = board << 8;
    std::cout << "Shifted board: " << shiftedBoard << std::endl;
    return 0;
  }
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Bitwise Tricks, Optimization, and Bitboards :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Bitwise tricks, optimization, and bitboards are advanced techniques
            used in computer programming to optimize performance, minimize
            memory usage, and efficiently manipulate large sets of bits. These
            techniques leverage bitwise operations and the binary representation
            of data to achieve significant speed and memory improvements in
            various applications.
          </p>

          <p className="text-justify pt-4">1. Bitwise Tricks:</p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Counting Set Bits: Brian Kernighan's algorithm and other bitwise
              techniques can efficiently count the number of set bits (bits with
              a value of 1) in an integer. This is useful in tasks such as
              population count or finding parity.
            </li>
            <li className="pt-2">
              Finding the Most Significant Bit (MSB): Bit shifting and bitwise
              operations can be used to determine the position of the leftmost
              set bit in an integer, known as the most significant bit.
            </li>
            <li className="pt-2">
              Swapping Values: XOR bitwise operation can be used to swap the
              values of two variables without using a temporary variable. This
              trick exploits the property that a XOR a results in 0.
            </li>
            <li className="pt-2">
              Checking Power of Two: By using bitwise operations, it is possible
              to determine whether an integer is a power of two. This is useful
              in various algorithms and optimizations.
            </li>
          </ul>

          <p className="text-justify pt-4">
            2. Optimization with Bitwise Operations:
          </p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Bitwise operations can be used to perform arithmetic operations,
              such as addition, subtraction, and multiplication, on binary
              numbers efficiently.
            </li>
            <li className="pt-4">
              Bit masking techniques can extract specific bits or groups of bits
              from an integer by applying bitwise AND operations with
              appropriate masks.
            </li>
            <li className="pt-4">
              Bit manipulation can be used to optimise code by avoiding costly
              conditional statements or loops, replacing them with bitwise
              operations.
            </li>
          </ul>

          <p className="text-justify pt-4">3. Bitboards:</p>
          <ul className="list-disc px-10">
            <li className="pt-4">
              Bitboards are a technique used in board game programming,
              especially chess and other board games played on grids. A bitboard
              represents the game state using a binary representation, where
              each bit represents a specific position or attribute on the board.
            </li>
            <li className="pt-4">
              Bitboards allow for efficient and compact storage of game states,
              enabling fast move generation, legal move checking, and evaluation
              functions.
            </li>
            <li className="pt-4">
              Bitwise operations, such as bitwise AND, OR, XOR, and shifts, are
              used extensively in bitboard-based algorithms for move generation,
              evaluation, and game search.
            </li>
          </ul>

          <p className="text-justify pt-4">
            Here's an example of using bitboards in chess programming:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, a bitboard is represented using a{" "}
            <span className="code-text italic text-sm">std::bitset</span> with a
            size of 64, corresponding to a standard chessboard. Operations such
            as setting a piece, testing if a square is occupied, and shifting
            the board are performed using bitwise operations.
          </p>

          <p className="text-justify pt-4">
            Bitwise tricks, optimization, and bitboards are frequently used in
            performance-critical applications, such as game programming,
            graphics, network protocols, and cryptography. Understanding these
            techniques can greatly enhance a student's programming skills and
            enable them to optimise code and tackle complex problems more
            efficiently.
          </p>
        </article>
      </section>
    </div>
  );
};

export default BitManTricksOpti;
