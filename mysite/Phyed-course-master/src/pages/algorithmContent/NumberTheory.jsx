import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const NumberTheory = () => {
  const codeString = `
  #include <iostream>
  #include <random>
  #include <cmath>
  using namespace std;
  // Primality testing using the Miller-Rabin algorithm
  bool isPrime(long long n, int k) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0) return false;
    long long d = n - 1;
    while (d % 2 == 0) {
      d /= 2;
    }
  for (int i = 0; i < k; i++) {
    long long a = 2 + rand() % (n - 3);
    long long x = pow(a, d);
    x %= n;
    if (x == 1 || x == n - 1) continue;
      while (d != n - 1) {
        x *= x;
        x %= n;
        d *= 2;
        if (x == 1) return false;
          if (x == n - 1) break;
      }
    if (x != n - 1) return false;
  }
  return true;
}
  // Generate a random prime number
  long long generatePrime(int bitLength) {
    random_device rd;
    mt19937_64 gen(rd());
    uniform_int_distribution<long long> dist(1ULL << (bitLength - 1),
    (1ULL << bitLength) - 1);
    long long prime = dist(gen);
    while (!isPrime(prime, 20)) {
      prime++;
    }
  return prime;
}
  int main() {
  int bitLength = 1024; // Desired bit length of the prime number
  long long prime = generatePrime(bitLength);
  cout << "Generated Prime Number: " << prime << endl;
  return 0;
}
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Number Theory :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Number Theory is a branch of mathematics that deals with the
            properties and relationships of numbers. It has applications in
            various fields, including computer science, cryptography, and
            algorithms. Understanding Number Theory can help students develop
            problem-solving skills and gain insights into the fundamental
            properties of numbers. Here, I'll provide an explanation of Number
            Theory concepts and provide a C++ example with a daily-life related
            problem to make it more interesting and relatable.
          </p>

          <p className="text-justify pt-4">Number Theory Concepts:</p>
          <ul className="list-decimal px-10">
            <li className="pt-4">
              Prime Numbers: Prime numbers are positive integers greater than 1
              that have no divisors other than 1 and themselves. They play a
              crucial role in various Number Theory algorithms and applications,
              such as cryptography and prime factorization.
            </li>
            <li className="pt-4">
              GCD and LCM: The Greatest Common Divisor (GCD) of two integers is
              the largest positive integer that divides both numbers without
              leaving a remainder. The Least Common Multiple (LCM) of two
              integers is the smallest positive integer that is divisible by
              both numbers. GCD and LCM are useful for various tasks, such as
              simplifying fractions and solving linear Diophantine equations.
            </li>
            <li className="pt-4">
              Modular Arithmetic: Modular arithmetic deals with the remainders
              obtained when dividing one number by another. It is often used in
              cryptography, hashing algorithms, and finding patterns in
              sequences. Modular arithmetic operations include addition,
              subtraction, multiplication, and exponentiation.
            </li>
            <li className="pt-4">
              Primality Testing: Primality testing algorithms determine whether
              a given number is prime or composite. These algorithms are
              important in cryptography, random number generation, and number
              factorization.
            </li>
          </ul>

          <p className="text-justify pt-4">
            Daily-Life Related Example: Let's consider a daily-life related
            example to illustrate Number Theory concepts. Imagine you are
            designing a secure messaging application that requires generating a
            unique identification number (ID) for each user. The ID should be a
            large prime number to ensure uniqueness and security.
          </p>

          <p className="text-justify pt-4">
            To generate such an ID, you can utilize Number Theory algorithms.
            One approach is to use a primality testing algorithm, such as the
            Miller-Rabin primality test, to check if a randomly generated number
            is prime. If the number is not prime, you increment it until a prime
            number is found. Additionally, you can use modular arithmetic
            operations to handle large numbers efficiently and securely.
          </p>

          <p className="text-justify pt-4">
            C++ Implementation: Here's an example of generating a large prime
            number for the user ID in C++:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, the{" "}
            <span className="code-text italic text-sm">isPrime</span> function
            implements the Miller-Rabin primality testing algorithm to check if
            a number is prime. The{" "}
            <span className="code-text italic text-sm">generatePrime</span>{" "}
            function uses a random number generator to generate a large random
            number within the desired bit length. It then increments the number
            until a prime number is found using the{" "}
            <span className="code-text italic text-sm">isPrime</span>
            function.
          </p>
          <p className="text-justify pt-4">
            The <span className="code-text italic text-sm">main</span> function
            demonstrates the usage of the functions by generating a large prime
            number and printing it as the user ID for the messaging application.
          </p>
          {/* <br></br> */}
        </article>
      </section>
    </div>
  );
};

export default NumberTheory;
