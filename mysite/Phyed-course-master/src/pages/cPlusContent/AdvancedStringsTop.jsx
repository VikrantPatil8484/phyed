import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const AdvancedStringsTop = () => {
  const codeString = `
#include <iostream>
#include <string>
#include <cwchar>

int main() {
    std::wstring unicodeString = L"こんにちは"; // Japanese greeting "Konnichiwa"
    std::wcout << unicodeString << std::endl;

    // Length of the string
    std::wcout << "Length: " << unicodeString.length() << std::endl;

    // Accessing individual characters
    wchar_t firstChar = unicodeString[0];
    std::wcout << "First character: " << firstChar << std::endl;

    return 0;
}
`;
  const codeString1 = `
"こんにちは"
"Length: 5"
"First character: こ"
`;
  const codeString2 = `
#include <iostream>
#include <functional>
#include <string>

int main() {
    std::string myString = "Hello, World!";
    std::hash<std::string> hasher;
    size_t hashValue = hasher(myString);

    std::cout << "Hash value: " << hashValue << std::endl;

    return 0;
}
`;
  const codeString3 = `
#include <iostream>
#include <codecvt>
#include <locale>
#include <string>

int main() {
    std::wstring_convert<std::codecvt_utf8<wchar_t>> converter;
    std::wstring wideString = L"こんにちは"; // Japanese greeting "Konnichiwa"
    std::string utf8String = converter.to_bytes(wideString);

    std::cout << "UTF-8 encoded string: " << utf8String << std::endl;

    return 0;
}
`;
  const codeString4 = `
"UTF-8 encoded string: こんにちは"
`;

  return (
    // Lecture 25.3]
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Advanced String Topics:
          </h4>
          <p className="text-justify pt-4 font-bold">
            Working with Unicode characters and Unicode-aware string operations:
          </p>
          <br></br>
          <p>
            Unicode is a standard that represents characters from different
            writing systems and languages. In C++, you can work with Unicode
            characters using the wchar_t data type and the [cwchar] library. The
            wstring class can be used to handle wide strings that support
            Unicode characters.{" "}
          </p>
          <p>
            Here's an example that demonstrates basic Unicode-aware string
            operations:
          </p>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <br></br>
          <p>The output will be:</p>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <br></br>
          <p className="text-justify pt-4">
            In this example, the wstring type is used to store a wide string
            with Unicode characters. The length() function returns the number of
            characters in the string, and individual characters can be accessed
            using indexing.
          </p>
          <p className="text-justify pt-4">
            Note that working with Unicode characters and handling different
            encodings can be complex. For advanced Unicode support and more
            comprehensive functionality, external libraries like ICU
            (International Components for Unicode) can be used.
          </p>
          <br></br>
          <p className="text-justify pt-4 font-bold">
            String hashing and checksums:
          </p>
          <br></br>
          <p className="text-justify pt-4">
            String hashing involves converting a string into a fixed-size hash
            value. Hash functions are used to generate unique hash codes for
            strings, which are commonly used for indexing and data retrieval.
            C++ provides hash functions in the [functional] library, such as
            std::hash.
            <br></br>Here's an example that demonstrates string hashing using
            std::hash:
          </p>
          <br></br>
          <CodeHighlighter>{codeString2}</CodeHighlighter>
          <br></br>
          <p className="text-justify pt-4">
            The output will be a hash value based on the input string.
          </p>
          <p className="text-justify pt-4">
            In this example, the std::hash function is used to generate a hash
            value for the string myString. The hasher object is called with
            myString as an argument to compute the hash value.
          </p>
          <p className="text-justify pt-4">
            Checksums, on the other hand, are used to verify data integrity and
            detect errors in strings. Common checksum algorithms include CRC32
            and MD5. To calculate checksums, you can use external libraries like
            OpenSSL or Boost.
          </p>
          <p className="text-justify pt-4 font-bold">
            String compression and encoding techniques:
          </p>
          <br></br>
          <p className="text-justify pt-4">
            String compression involves reducing the size of a string to save
            storage space or transmit it efficiently. Common compression
            algorithms include gzip, zlib, and LZ77. In C++, you can use
            external libraries like zlib or Boost to compress and decompress
            strings.
          </p>
          <br></br>
          <p className="text-justify pt-4">
            String encoding refers to representing a string using a specific
            character encoding scheme, such as ASCII, UTF-8, or UTF-16. C++
            supports various encoding conversions through the [codecvt] library
            and the std::wstring_convert class.<br></br>Here's an example that
            demonstrates string encoding conversion:
          </p>
          <CodeHighlighter>{codeString3}</CodeHighlighter>
          <br></br>
          <p className="text-justify pt-4">The output will be:</p>
          <CodeHighlighter>{codeString4}</CodeHighlighter>
          <br></br>
          <p className="text-justify pt-4">
            In this example, the std::wstring_convert class is used to convert a
            wide string (wideString) to a UTF-8 encoded string (utf8String)
            using the to_bytes() function.
          </p>
          <p className="text-justify pt-4">
            Note that string compression and encoding techniques can have
            different trade-offs in terms of speed, space efficiency, and
            compatibility. Choosing the right algorithm and library depends on
            your specific requirements.
          </p>
          <p className="text-justify pt-4">
            These are some advanced topics related to strings in C++. They
            provide additional functionality and techniques for handling Unicode
            characters, performing hash operations, and working with string
            compression and encoding.
          </p>
        </article>
      </section>
    </div>
  );
};

export default AdvancedStringsTop;
