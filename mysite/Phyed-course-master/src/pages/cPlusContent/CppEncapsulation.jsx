import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const CppEncapsulation = () => {

  const codeString = `
  class BankAccount {
    private:
        string accountNumber;
        double balance;
    
    public:
        BankAccount(string accNum, double initialBalance) {
            accountNumber = accNum;
            balance = initialBalance;
        }
    
        void deposit(double amount) {
            balance += amount;
        }
    
        void withdraw(double amount) {
            if (balance >= amount) {
                balance -= amount;
            }
        }
    
        double getBalance() {
            return balance;
        }
    };
    
    int main() {
        BankAccount myAccount("123456789", 1000.0);
    
        myAccount.deposit(500.0);
        myAccount.withdraw(200.0);
    
        double currentBalance = myAccount.getBalance();
        cout << "Current Balance: " << currentBalance << endl;
    
        return 0;
    }
  `

  return (

    <div>
    <section className='p-4 text-md text-justify'>
        <article className='mt-6'>
          <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>5. Encapsulation:</h4>
          <br></br>
          <p className='text-justify pt-4'>Encapsulation is one of the fundamental principles of object-oriented programming (OOP) and is supported in C++. It is a concept that combines data and functions (methods) into a single unit called a class. Encapsulation allows the bundling of data and functions together, providing data hiding and abstraction.</p>
          <p className='text-justify pt-4'>Here are some key points about encapsulation in C++:</p>
          <br></br>
          <span className='font-semibold'>1. Data Hiding:</span><p>Encapsulation allows the hiding of the internal details and implementation of a class from the outside world. By default, the data members of a class are declared as private, meaning they can only be accessed and modified by the member functions of the class. This prevents direct access to the internal representation of the class and helps maintain data integrity.</p>
          <br></br>
          <span className='font-semibold'>2. Access Specifiers:</span><p> C++ provides three access specifiers: public, private, and protected. These specifiers determine the visibility and accessibility of the class members. Private members are only accessible within the class itself. Public members are accessible from anywhere in the program. Protected members are accessible within the class and its derived classes.</p>
          <br></br>
          <span className='font-semibold'>3. Getter and Setter Functions:</span><p> Encapsulation encourages the use of getter and setter functions to access and modify the private data members of a class. Getter functions (also known as accessor functions) provide read-only access to the data members, allowing their values to be retrieved. Setter functions (also known as mutator functions) provide a way to modify the values of the data members, often with additional checks or validations.</p>
          <br></br>
          <span className='font-semibold'>4. Abstraction:</span><p>  Encapsulation facilitates abstraction by providing a simplified and logical interface to interact with the class. The internal implementation details are hidden, and only the essential functionalities are exposed through the public member functions. This allows users of the class to focus on the high-level behavior and not worry about the underlying implementation.</p>
          <br></br>
          <span className='font-semibold'>5. Data Integrity and Security:</span><p>  Encapsulation helps maintain data integrity by controlling access to the data members through the member functions. The class can enforce constraints, validations, and business rules when modifying the data, ensuring that the data remains consistent and valid. Additionally, encapsulation provides a level of security by preventing unauthorized access to sensitive data.</p>
          <br></br>
          <span className='font-semibold'>6. Code Organization and Modularity:</span><p>  Encapsulation promotes code organization and modularity by grouping related data and functions into a single unit. This makes the code easier to understand, maintain, and extend. Changes to the internal implementation of the class do not affect the code using the class, as long as the public interface remains the same.</p>
          <p className='text-justify pt-4'>Here's an example that demonstrates encapsulation in C++:</p>
          
          <CodeHighlighter>
            {codeString}
            </CodeHighlighter> 
          <p className='text-justify pt-4'>In the example above, we define a BankAccount class that encapsulates the account number and balance as private data members. Public member functions (deposit, withdraw, getBalance) provide controlled access to the private data members. The class ensures that the balance is not directly modified from outside the class, enforcing data integrity. The user interacts with the class through the public interface, performing actions such as depositing and withdrawing money.</p>
          <p className='text-justify pt-4'>Encapsulation promotes information hiding, improves code organization, and enhances code reusability. It allows for better control over access to data and behavior, leading to more robust and maintainable code.</p>
        
        </article> 
        </section>    
        </div> 


  )
}

export default CppEncapsulation
// Lecture 34.2