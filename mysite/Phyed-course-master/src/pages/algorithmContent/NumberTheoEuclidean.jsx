import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const NumberTheoEuclidean = () => {
  const codeString = `
  #include <iostream>
  // Euclidean Algorithm to find the GCD of two numbers
  int gcd(int a, int b) {
    if (b == 0) {
      return a;
    }
  return gcd(b, a % b);
}
  int main() {
  int a = 48;
  int b = 36;
  int result = gcd(a, b);
  std::cout << "GCD of " << a << " and " << b << " is: " << result <<
  std::endl;
  return 0;
}
  `;

  const codeString1 = `
  #include <iostream>
  // Addition modulo m
  int addMod(int a, int b, int m) {
    return (a + b) % m;
  }
  // Subtraction modulo m
  int subtractMod(int a, int b, int m) {
    return (a - b + m) % m;
  }
  // Multiplication modulo m
  int multiplyMod(int a, int b, int m) {
    return (a * b) % m;
  }
  // Exponentiation modulo m
  int powerMod(int a, int b, int m) {
    int result = 1;
    a %= m;
    while (b > 0) {
      if (b % 2 == 1) {
        result = (result * a) % m;
    }
  a = (a * a) % m;

  b /= 2;
  }
  return result;
}
  int main() {
  int a = 5;
  int b = 7;
  int m = 3;
  std::cout << "Addition: " << addMod(a, b, m) << std::endl;
  std::cout << "Subtraction: " << subtractMod(a, b, m) << std::endl;
  std::cout << "Multiplication: " << multiplyMod(a, b, m) <<std::endl;
  std::cout << "Exponentiation: " << powerMod(a, b, m) << std::endl;
  return 0;
}
  `;
  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Euclidean Algorithm :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            The Euclidean Algorithm is a fundamental algorithm in Number Theory
            that allows us to find the greatest common divisor (GCD) of two
            integers efficiently. It is named after the ancient Greek
            mathematician Euclid. The GCD of two numbers is the largest positive
            integer that divides both numbers without leaving a remainder.
          </p>

          <p className="text-justify pt-4">
            The Euclidean Algorithm is based on the following key observation:
            if we have two integers, a and b, with a {">"} b, then the GCD of a
            and b is the same as the GCD of b and the remainder of a divided by
            b. In other words, GCD(a, b) = GCD(b, a % b).
          </p>

          <p className="text-justify pt-4">
            Using this observation, we can iteratively apply the Euclidean
            Algorithm to reduce the problem of finding the GCD of two numbers to
            finding the GCD of smaller and smaller pairs of numbers until the
            remainder becomes zero. At that point, the GCD is the non-zero value
            from the previous step.
          </p>

          <p className="text-justify pt-4">
            Here's a C++ implementation of the Euclidean Algorithm:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we define the{" "}
            <span className="code-text italic text-sm">gcd</span> function that
            takes two integers,
            <span className="code-text italic text-sm">a</span> and{" "}
            <span className="code-text italic text-sm">b</span>, and returns
            their GCD using the Euclidean Algorithm. The base case is when{" "}
            <span className="code-text italic text-sm">b</span> becomes zero, in
            which case we return{" "}
            <span className="code-text italic text-sm">a</span>. Otherwise, we
            recursively call{" "}
            <span className="code-text italic text-sm">gcd</span> with{" "}
            <span className="code-text italic text-sm">b</span> and the
            remainder of <span className="code-text italic text-sm">a</span>
            divided by <span className="code-text italic text-sm">b</span>.
          </p>

          <p className="text-justify pt-4">
            The <span className="code-text italic text-sm">main</span> function
            demonstrates the usage of the{" "}
            <span className="code-text italic text-sm">gcd </span>function by
            finding the GCD of two numbers, 48 and 36, and printing the result.
          </p>

          <p className="text-justify pt-4">
            A daily-life related example of the Euclidean Algorithm is finding
            the GCD of two numbers to simplify fractions. For instance, consider
            a recipe that requires mixing 3/4 cup of flour and 1/2 cup of sugar.
            To scale up the recipe, you may want to find the largest measuring
            cup size that evenly divides both quantities. In this case, the GCD
            of 3 and 2 is 1, indicating that there are no common factors. Hence,
            the recipe cannot be scaled up using whole numbers of cups.
          </p>
          <br></br>
          <br></br>

          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Modular Arithmetic :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Modular arithmetic is a branch of number theory that deals with the
            arithmetic operations performed on remainders obtained when dividing
            one number by another. It involves the study of numbers within a
            fixed range, often referred to as a modulus or modulo. Modular
            arithmetic has various applications in cryptography, computer
            science, and algorithms.
          </p>
          <p className="text-justify pt-4">
            In modular arithmetic, two numbers are said to be congruent modulo m
            if they have the same remainder when divided by m. We denote this as
            a ≡ b (mod m), which reads "a is congruent to b modulo m". The
            modulus m defines the range within which all calculations are
            performed.
          </p>

          <p className="text-justify pt-4">
            Here are some key concepts and operations in modular arithmetic:
          </p>
          <ul className="list-decimal px-10">
            <li className="pt-4">
              Addition and Subtraction: In modular arithmetic, addition and
              subtraction are performed on the remainders of the numbers. To add
              or subtract two numbers modulo m, you add or subtract them as
              usual and take the remainder when divided by m. For example, (5 +
              7) % 3 = 2, which means that 5 + 7 is congruent to 2 modulo 3.
            </li>
            <li className="pt-4">
              Multiplication: Multiplication in modular arithmetic involves
              taking the remainder of the product when divided by m. To multiply
              two numbers modulo m, you multiply them as usual and take the
              remainder when divided by m. For example, (5 * 7) % 3 = 1, which
              means that 5 * 7 is congruent to 1 modulo 3.
            </li>
            <li className="pt-4">
              Exponentiation: Exponentiation in modular arithmetic involves
              taking the remainder of the power when divided by m. To find a^b
              modulo m, you calculate a^b as usual and take the remainder when
              divided by m. This operation is especially useful in cryptography
              and number theory algorithms.
            </li>
            <li className="pt-4">
              Inverses: In modular arithmetic, the inverse of a number a modulo
              m is another number b such that a * b ≡ 1 (mod m). Not all numbers
              have inverses modulo m. If a number has an inverse, it is said to
              be invertible or relatively prime to m. The Extended Euclidean
              Algorithm is commonly used to find the inverse of a number modulo
              m.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Modular arithmetic finds applications in various areas, including:
          </p>

          <ul className="list-disc px-10">
            <li className="pt-4">
              Cryptography: Modular arithmetic is the foundation for many
              cryptographic algorithms, such as the RSA encryption algorithm and
              the Diffie-Hellman key exchange protocol.
            </li>
            <li>
              Hash Functions: Modular arithmetic is used in the computation of
              hash functions, which are used to map data of arbitrary size to
              fixed-size values.
            </li>
            <li>
              Congruence Testing: Modular arithmetic is used in testing
              congruences and finding solutions to linear congruences.
            </li>
            <li>
              Calendar Calculations: Modular arithmetic is used to calculate the
              day of the week, date calculations, and handling recurring
              patterns in calendars.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Here's an example of performing modular arithmetic in C++:
          </p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we define functions to perform addition,
            subtraction, multiplication, and exponentiation modulo m. The
            functions take three parameters: the two numbers to operate on (a
            and b) and the modulus m. The functions return the result of the
            operation performed modulo m.
          </p>

          <p className="text-justify pt-4">
            The <span className="code-text italic text-sm">main </span>function
            demonstrates the usage of the modular arithmetic functions by
            performing addition, subtraction, multiplication, and exponentiation
            modulo 3 on the numbers 5 and 7.
          </p>
          <p className="text-justify pt-4">
            By relating modular arithmetic to practical applications, such as
            cryptography and calendar calculations, students can appreciate its
            importance and understand how it is used in various fields of study
            and everyday life.
          </p>

          {/* <br></br> */}
        </article>
      </section>
    </div>
  );
};

export default NumberTheoEuclidean;
