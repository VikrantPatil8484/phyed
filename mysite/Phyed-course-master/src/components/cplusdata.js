const lectureList = [
    {
        'id': 1,
        path:'/cpluspage/cpp-intro',
        name: 'Intro to C++'
    },
    {
        'id': 2,
        path:'/cpluspage/vs-code-guide',
        name: 'Vs-code Installation Guide'
    },
    {
        'id': 3,
        path:'/cpluspage/cpp-basic-struc',
        name: 'C++ Basic Structure'
    },
    {
        'id': 4,
        path:'/cpluspage/var-comments-in-cpp',
        name: 'Variables & Comment in C++'
    },
    {
        'id': 5,
        path:'/cpluspage/cpp-var-scope-data',
        name: 'Variables Scope & Data' 
    },
    {
        'id': 6,
        path:'/cpluspage/basic-input-output',
        name: 'Basic Input/Output'
    },
    {
        'id': 7,
        path:'/cpluspage/header-files-ops',
        name: 'Header and Files'
    },
    {
        'id': 8,
        path:'/cpluspage/cpp-variables-type',
        name: 'C++ Reference Variables'
    },       
    {
        'id': 9,
        path:'/cpluspage/cpp-constants-manipulators',
        name: 'Constants and Manipulators'
    },       
    {
        'id': 10,
        path:'/cpluspage/cpp-controls-if-statement',
        name: 'C++ Controls, IF Else'
    },       
    {
        'id': 11,
        path:'/cpluspage/cpp-for-while-do-loop',
        name: 'C++ For While, Do While Loop'
    },       
    {
        'id': 12,
        path:'/cpluspage/cpp-break-cont-statement',
        name: 'C++ Break & Continue Statement'
    },       
    {
        'id': 13,
        path:'/cpluspage/cpp-functions',
        name: 'C++ Functions'
    },       
    {
        'id': 14,
        path:'/cpluspage/cpp-funtions-params',
        name: 'Function Parameters and Arguments'
    },       
    {
        'id': 15,
        path:'/cpluspage/cpp-return-values',
        name: 'Return Values'
    },       
    {
        'id': 16,
        path:'/cpluspage/cpp-function-scope-lifetime',
        name: 'Function Scope and Lifetime'
    },       
    {
        'id': 17,
        path:'/cpluspage/cpp-inline-functions',
        name: 'Inline Functions'
    },       
    {
        'id': 18,
        path:'/cpluspage/cpp-error-handling',
        name: 'Function Error Handling'
    },       
    {
        'id': 19,
        path:'/cpluspage/cpp-function-libraries',
        name: 'Function Libraries'
    },       
    {
        'id': 20,
        path:'/cpluspage/cpp-array',
        name: 'C++ Array'
    },       
    {
        'id': 21,
        path:'/cpluspage/cpp-multidimension-array',
        name: 'Multidimensional Arrays'
    },       
    {
        'id': 22,
        path:'/cpluspage/cpp-passing-arrays',
        name: 'Passing Arrays to Functions'
    },       
    {
        'id': 23,
        path:'/cpluspage/cpp-dynamic-arrays',
        name: 'Dynamic Array'
    },       
    {
        'id': 24,
        path:'/cpluspage/cpp-array-of-pointers',
        name: 'Array of Pointers'
    },       
    {
        'id': 25,
        path:'/cpluspage/cpp-array-libraries',
        name: 'Array Libraries in c++'
    },       
    {
        'id': 26,
        path:'/cpluspage/cpp-strings-intro',
        name: 'Introduction to Strings'
    },       
    {
        'id': 27,
        path:'/cpluspage/cpp-string-operations',
        name: 'String Operations'
    },       
    {
        'id': 28,
        path:'/cpluspage/cpp-string-manipulation',
        name: 'String Manipulation'
    },       
    {
        'id': 29,
        path:'/cpluspage/cpp-string-conversion',
        name: 'String Conversion' 
    },       
    {
        'id': 30,
        path:'/cpluspage/cpp-string-parsing',
        name: 'String Parsing and Tokenization'
    },       
    {
        'id': 31,
        path:'/cpluspage/cpp-format-whitespaces',
        name: 'String Formatting and Manipulating Whitespaces'
    },       
    {
        'id': 32,
        path:'/cpluspage/cpp-advance-strings',
        name: 'Advanced String Topics'
    },       
    {
        'id': 32,
        path:'/cpluspage/cpp-intro-structures',
        name: 'Introduction to Structures'
    },
    {
        'id': 33,
        path:'/cpluspage/cpp-array-structures',
        name: 'Array of Structures'
    },
    {
        'id': 34,
        path:'/cpluspage/cpp-structures-and-pointers',
        name: 'Structure and Pointers'
    },
    {
        'id': 35,
        path:'/cpluspage/cpp-structure-manipulation',
        name: 'Structure Manipulation'
    },
    {
        'id': 36,
        path:'/cpluspage/cpp-bitfields',
        name: 'Bitfields'
    },
    {
        'id': 37,
        path:'/cpluspage/cpp-unions',
        name: 'Unions'
    },
    {
        'id': 38,
        path:'/cpluspage/cpp-structure-file-io',
        name: 'Structure and File I/O'
    },
    {
        'id': 39,
        path:'/cpluspage/cpp-intro-to-pointers',
        name: 'Introduction to Pointers'
    },
    {
        'id': 40,
        path:'/cpluspage/cpp-pointers-operations',
        name: 'Pointer Operations'
    },
    {
        'id': 41,
        path:'/cpluspage/cpp-pointers-and-array',
        name: 'Pointers and Arrays'
    },
    {
        'id': 42,
        path:'/cpluspage/cpp-dynamic-memory-allocation',
        name: 'Dynamic Memory Allocation'
    },
    {
        'id': 43,
        path:'/cpluspage/cpp-pointers-and-functions',
        name: 'Pointers and Functions'
    },
    {
        'id': 44,
        path:'/cpluspage/cpp-pointers-and-structures',
        name: 'Pointers and Structures'
    },
    {
        'id': 45,
        path:'/cpluspage/cpp-pointers-to-pointers',
        name: 'Pointers to Pointers'
    },
    {
        'id': 46,
        path:'/cpluspage/cpp-pointers-to-strings',
        name: 'Pointers and Strings'
    },
    {
        'id': 46,
        path:'/cpluspage/cpp-pointers-and-const',
        name: 'Pointers and Const'
    },
    {
        'id': 47,
        path:'/cpluspage/cpp-pointers-and-oop',
        name: 'Pointers and OOP'
    },
    {
        'id': 48,
        path:'/cpluspage/cpp-pointers-and-except',
        name: 'Pointers and Exception Handling'
    },
    {
        'id': 49,
        path:'/cpluspage/cpp-pointers-advanced',
        name: 'Advanced Pointer Topics'
    },
    {
        'id': 49,
        path:'/cpluspage/cpp-objects',
        name: 'Objects'
    },
    {
        'id': 50,
        path:'/cpluspage/cpp-classes',
        name: 'Classes'
    },
    {
        'id': 51,
        path:'/cpluspage/cpp-data-members',
        name: 'Data Members'
    },
    {
        'id': 52,
        path:'/cpluspage/cpp-member-functions',
        name: 'Member Functions'
    },
    {
        'id': 53,
        path:'/cpluspage/cpp-encapsulation',
        name: 'Encapsulation'
    },
    {
        'id': 54,
        path:'/cpluspage/cpp-access-specifiers',
        name: 'Access Specifiers'
    },
    {
        'id': 55,
        path:'/cpluspage/cpp-constructors',
        name: 'Constructors'
    },
    {
        'id': 56,
        path:'/cpluspage/cpp-destructors',
        name: 'Destructors'
    },
    {
        'id': 57,
        path:'/cpluspage/cpp-inheritance',
        name: 'Inheritance'
    },
    {
        'id': 58,
        path:'/cpluspage/cpp-polymorphism',
        name: 'Polymorphism'
    },
    {
        'id': 59,
        path:'/cpluspage/cpp-overloading',
        name: 'Overloading'
    },
    {
        'id': 60,
        path:'/cpluspage/cpp-operator-overloading',
        name: 'Operator Overloading'
    },
    {
        'id': 61,
        path:'/cpluspage/cpp-static-members',
        name: 'Static Members'
    },
    {
        'id': 62,
        path:'/cpluspage/cpp-friend-functions',
        name: 'Friend Functions'
    },
    {
        'id': 62,
        path:'/cpluspage/cpp-templates',
        name: 'Templates'
    },
]

export default lectureList;

