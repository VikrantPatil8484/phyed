const algorithmlist = [
    {
        'id': 1,
        path:'/algorithm/sorting',
        name: 'Sorting Algorithms ',

        subRoutes: [
            {
                path:'/algorithm/sorting-intro',
                name: 'Sorting Intro',  
            },
            {
                path:'/algorithm/sorting-bubble',
                name: 'Bubble Sort',  
            },
            {
                path:'/algorithm/sorting-selection',
                name: 'Selection Sort',  
            },
            {
                path:'/algorithm/sorting-insertion',
                name: 'Insertion Sort',  
            },
            {
                path:'/algorithm/sorting-merge',
                name: 'Merge Sort',  
            },
            {
                path:'/algorithm/sorting-quick',
                name: 'Quick Sort',  
            },            
            {
                path:'/algorithm/sorting-radix',
                name: 'Radix Sort',  
            },            
            {
                path:'/algorithm/sorting-heap',
                name: 'Heap Sort',  
            },            
        ]
    },
    
    {
        'id': 2,
        path:'/algorithm/searching',
        name: 'Searching Algorithms',

        subRoutes: [
            {
                path:'/algorithm/searching-intro',
                name: 'Searching Algorithm Intro',  
            },
            {
                path:'/algorithm/searching-linear',
                name: 'Linear Search',  
            },
            {
                path:'/algorithm/searching-binary',
                name: 'Binary Search',  
            },
            {
                path:'/algorithm/searching-interpolation',
                name: 'Interpolation Search',  
            },            
        ]
    },
    {
        'id': 3,
        path:'/algorithm/graph',
        name: 'Graph Algorithms',

        subRoutes: [
            {
                path:'/algorithm/graph-intro',
                name: 'Graph algorithm Intro',  
            },
            {
                path:'/algorithm/graph-breath',
                name: 'Breadth First Search',  
            },
            {
                path:'/algorithm/graph-depth',
                name: 'Depth First Search',  
            },
            {
                path:'/algorithm/graph-topological',
                name: 'Topological searching',  
            },            
        ]
    },
    
    {
        'id': 4,
        path:'/algorithm/dynamic',
        name: 'Dynamic Programming',

        subRoutes: [
            {
                path:'/algorithm/dynamic-optimal-structure',
                name: 'Optimal Substructure',  
            },
            {
                path:'/algorithm/dynamic-memoization',
                name: 'Memoization & Tabulation',  
            },
            {
                path:'/algorithm/dynamic-topdown-recursive',
                name: 'Top-Down Approach (Recursive Approach)',  
            },
            {
                path:'/algorithm/dynamic-topdown-iterative',
                name: 'Bottom-Up Approach (Iterative Approach)',  
            },            
            {
                path:'/algorithm/dynamic-longest-sebsequence',
                name: 'Longest Common Subsequence (LCS)',  
            },            
            {
                path:'/algorithm/dynamic-knapsackproblems',
                name: 'Knapsack Problems',  
            },            
            {
                path:'/algorithm/dynamic-coin-change',
                name: 'Coin Change Problem',  
            },            
            {
                path:'/algorithm/dynamic-edit-distance',
                name: 'Edit Distance ',  
            },            
        ]
    },
    {
        'id': 5,
        path:'/algorithm/greedy',
        name: 'Greedy Algorithms',

        subRoutes: [
            {
                path:'/algorithm/greedy-choice-property',
                name: 'Greedy Choice Property',  
            },
            {
                path:'/algorithm/greedy-activity-selection',
                name: 'Activity Selection Problem',  
            },
            {
                path:'/algorithm/greedy-huffman-coding',
                name: 'Huffman Coding',  
            },
            {
                path:'/algorithm/greedy-job-sceduling',
                name: 'Job Scheduling Problem',  
            },            
        ]
    },
    {
        'id': 6,
        path:'/algorithm/divide-conquer',
        name: 'Divide and Conquer Algorithms',
    },
    {
        'id': 7,
        path:'/algorithm/backtracking',
        name: 'Backtracking Algorithms (1 questions)',
    },
    {
        'id': 8,
        path:'/algorithm/string',
        name: 'String Algorithms',
    },
    {
        'id': 9,
        path:'/algorithm/techniques',
        name: 'Algorithmic Techniques',

        subRoutes: [
            {
                path:'/algorithm/technques-two-pointers',
                name: 'Two Pointers',  
            },
            {
                path:'/algorithm/technques-sliding-window',
                name: 'Sliding Window',  
            },
        ] 
    },
    {
        'id': 10,
        path:'/algorithm/np-complete',
        name: 'NP-completeness Algorithms',
    },
    {
        'id': 11,
        path:'/algorithm/approximation',
        name: ' Approximation Algorithms',
    },
    {
        'id': 12,
        path:'/algorithm/computational-geo',
        name: 'Computational Geometry Algorithms',
    },
    {
        'id': 13,
        path:'/algorithm/number-theory',
        name: 'Number Theory',

        subRoutes: [
            {
                path:'/algorithm/number-thoery',
                name: 'Number Theory',  
            },
            {
                path:'/algorithm/number-eclidean-arithmetic',
                name: 'Euclidean Algorithm & Modular Arithmetic',  
            },
        ] 
    },
    {
        'id': 14,
        path:'/algorithm/hashing',
        name: 'Hashing Algorithms',
    },
    {
        'id': 15,
        path:'/algorithm/recursion',
        name: 'Recursion',
    },
    {
        'id': 16,
        path:'/algorithm/bit-manipulation',
        name: 'Bit Manipulation',

        subRoutes: [
            {
                path:'/algorithm/bit-ops-shift',
                name: 'Bitwise Operations,Shift,Mask,Counting',  
            },
            {
                path:'/algorithm/bit-mans-integer',
                name: 'Bitwise Manipulation of Integers',  
            },
            {
                path:'/algorithm/bit-tricks-ops',
                name: 'Bitwise Tricks , Optimization & Bitboards',  
            },
        ] 
    },
    {
        'id': 17,
        path:'/algorithm/time-complexity',
        name: 'Time complexity & Space complexity',
    },
]

export default algorithmlist;