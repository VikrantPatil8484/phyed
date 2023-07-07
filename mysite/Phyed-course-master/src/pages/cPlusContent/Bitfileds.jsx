import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const Bitfileds = () => {

  const codeString = `
  #include <iostream>

// Define a structure with bitfields
struct Flags {
    unsigned int flag1 : 1;
    unsigned int flag2 : 2;
    unsigned int flag3 : 3;
};

int main() {
    // Create an instance of the structure
    Flags flags;

    // Set values for the bitfields
    flags.flag1 = 1;
    flags.flag2 = 2;
    flags.flag3 = 3;

    // Print the values of the bitfields
    std::cout << "Flag 1: " << flags.flag1 << std::endl;
    std::cout << "Flag 2: " << flags.flag2 << std::endl;
    std::cout << "Flag 3: " << flags.flag3 << std::endl;

    // Print the size of the structure
    std::cout << "Size of Flags structure: " << sizeof(flags) << " bytes" << std::endl;

    return 0;
}
  `
  const codeString1 = `
Flag 1: 1
Flag 2: 2
Flag 3: 3
Size of Flags structure: 4 bytes
  `

  return (
  <>
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
      <article className='mt-6'>
      <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Bitfields:</h4>
      <br></br>
      <p className='text-justify pt-4 font-bold'> Bit Fields in structures:</p>
      <br></br>
      <p className='text-justify pt-4'>Bitfields in structures allow you to efficiently use memory by specifying the number of bits each member of the structure should occupy. This enables you to pack multiple members within a single memory location, conserving memory space.</p>
      <p className='text-justify pt-4'>Here's an example that demonstrates the usage of bitfields in structures:</p>
      <br></br>
      <CodeHighlighter>
        {codeString}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>The output will be:</p>
      <br></br>
      <CodeHighlighter>
        {codeString1}
      </CodeHighlighter>
      <br></br>
      <p className='text-justify pt-4'>In this example, we define a structure Flags with three bitfields: flag1, flag2, and flag3. The number after the colon represents the number of bits each bitfield should occupy.</p>
      <br></br>
      <p className='text-justify pt-4'>We create an instance of the structure and set values for the bitfields. The bitfields can store values within the specified number of bits.</p>
      <br></br>
      <p className='text-justify pt-4'>We then print the values of the bitfields. Note that the values may be truncated if they exceed the specified number of bits.</p>
      <br></br>
      <p className='text-justify pt-4'>Finally, we print the size of the structure using the sizeof() operator to demonstrate the memory savings achieved by using bitfields. In this case, the structure occupies 4 bytes (32 bits) because the bitfields are packed together.</p>
      <br></br>
      <p className='text-justify pt-4'>Bitfields in structures provide efficient memory usage when you need to store multiple values with varying bit sizes. However, it's important to be cautious when working with bitfields, as the behavior may depend on the specific implementation and endianness of the system.</p>
      



      </article>
      </section>
      </div>

    </>
  )
}


export default Bitfileds
    // Lecture 28.2