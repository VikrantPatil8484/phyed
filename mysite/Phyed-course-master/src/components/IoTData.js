const iotlist = [
    {
        'id': 1,
        path:'/IoT/IoT-Introduction-To-IoT',
        name: 'Introduction To IoT ',

        subRoutes:[
            {
                path:'/IoT/IoT-Intro-Definition',
                name:'Definition and basic concepts of IoT',
            },
            {
                path:'/IoT/IoT-Intro-Historical',
                name:'Historical background and evolution of IoT',
            },
            {
                path:'/IoT/IoT-Intro-Importance',
                name:'Importance and applications of IoT in various industries',
            },
        ]
    },
    
    {
        'id': 2,
        path:'/IoT/Architecture',
        name: 'IoT Architecture ',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Architect-Overview',
                name:'Overview of IoT architecture layers ',
            },
            {
                path:'/IoT/IoT-Architect-Sensor',
                name:'Sensor and actuator technologies',
            },
            {
                path:'/IoT/IoT-Architect-Communication',
                name:'Communication protocols for IoT ',
            },
            {
                path:'/IoT/IoT-Architect-Gateway',
                name:'IoT gateway and edge computing',
            },
        ]
        
    },
    {
        'id': 3,
        path:'/IoT/Devices-and-Platforms',
        name: 'IoT Devices and Platforms',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Devices-Hardware',
                name:'IoT hardware components ',
            },
            {
                path:'/IoT/IoT-Devices-Development',
                name:'IoT development boards ',
            },
            {
                path:'/IoT/IoT-Devices-Platforms',
                name:'IoT platforms for device management and data processing ',
            },
        ]
    },
    
    {
        'id': 4,
        path:'/IoT/Networking',
        name: 'IoT Networking',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Networking-Wireless',
                name:'Wireless communication technologies for IoT ',
            },
            {
                path:'/IoT/IoT-Networking-Topology',
                name:'IoT network topologies ',
            },
            {
                path:'/IoT/IoT-Networking-Security',
                name:'IoT security considerations and protocols',
            },

        ]
    },
    {
        'id': 5,
        path:'/IoT/Data-Management-and-Analytics',
        name: 'IoT Data Management and Analytics',
        
        subRoutes:[
            {
                path:'/IoT/IoT-DM-Data-Collection',
                name:'Data collection, storage, and preprocessing for IoT',
            },
            {
                path:'/IoT/IoT-DM-Dat-Analytics',
                name:'Data analytics techniques for extracting insights from IoT data',
            },
            {
                path:'/IoT/IoT-DM-Real-Time',
                name:'Real-time processing and stream analytics for IoT applications',
            },
        ]

    },
    {
        'id': 6,
        path:'/IoT/Applications',
        name: 'IoT Applications',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Application-SmartHomes',
                name:'Smart homes and home automation systems',
            },
            {
                path:'/IoT/IoT-Application-Industrial',
                name:'Industrial IoT (IIoT) and Industry 4.0',
            },
            {
                path:'/IoT/IoT-Application-Smartcities',
                name:'Smart cities and infrastructure',
            },
            {
                path:'/IoT/IoT-Application-Healthcare',
                name:'Healthcare applications of IoT',
            },
            {
                path:'/IoT/IoT-Application-Agriculture',
                name:'Agriculture and environmental monitoring with IoT',
            },
        ]
    },
    {
        'id': 7,
        path:'/IoT/Challenge-and-Future-Trends',
        name: 'Challenge and Future Trends',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Challenge-Privacy',
                name:'Privacy and security concerns in IoT',
            },
            {
                path:'/IoT/IoT-Challenge-Scalability',
                name:'Scalability and interoperability challenges',
            },
            {
                path:'/IoT/IoT-Challenge-Edge-Computing',
                name:'Edge computing and fog computing in IoT',
            },
            {
                path:'/IoT/IoT-Challenge-Artificial',
                name:'Artificial Intelligence and machine learning in IoT',
            },
            {
                path:'/IoT/IoT-Challenge-Emerge',
                name:'Emerging trends and future directions in IoT',
            },
            
        ]
    },
    {
        'id': 8,
        path:'/IoT/Security',
        name: 'IoT Security',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Security-Importance',
                name:'Importance of IoT security to protect devices and data',
            },
            {
                path:'/IoT/IoT-Security-Common',
                name:'Common security risks and vulnerabilities in IoT systems',
            },
            {
                path:'/IoT/IoT-Security-Secure',
                name:'Secure communication protocols and encryption techniques',
            },
            {
                path:'/IoT/IoT-Security-Authentic',
                name:'Authentication and access control mechanisms for IoT devices',
            },
            {
                path:'/IoT/IoT-Security-Best',
                name:'Best practices for securing IoT deployments',
            },
        ]
    },
    {
        'id': 9,
        path:'/IoT/Edge-Computing-In-IoT',
        name: 'Edge Computing in IoT',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Ecomputing-Intro',
                name:'Introduction to edge computing ',
            },
            {
                path:'/IoT/IoT-Ecomputing-Adv',
                name:'Advantages of processing data at the edge of the network',
            },
            {
                path:'/IoT/IoT-Ecomputing-Edge-Dev',
                name:'Edge devices and gateways for local data processing',
            },
            {
                path:'/IoT/IoT-Ecomputing-Edge-Analytics',
                name:'Edge analytics and decision-making in real-time IoT applications',
            },
            {
                path:'/IoT/IoT-Ecomputing-Hybrid',
                name:'Hybrid architectures combining cloud and edge computing for IoT',
            },
        ]

    },
    {
        'id': 10,
        path:'/IoT/IoT-Standards-and-Interoperability',
        name: 'IoT Standards and Interoperability',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Standards-Overview',
                name:'Overview of IoT standards and protocols ',
            },
            {
                path:'/IoT/IoT-Standards-Importance',
                name:'Importance of interoperability for seamless communication between devices',
            },
            {
                path:'/IoT/IoT-Standards-Data-Exc',
                name:'IoT data exchange formats ',
            },
            {
                path:'/IoT/IoT-Standards-Industry',
                name:'Industry initiatives and organisations promoting IoT standards',
            },
            {
                path:'/IoT/IoT-Standards-Challenges',
                name:'Challenges and efforts to achieve greater interoperability in IoT ecosystems',
            },
        ]
    },
    {
        'id': 11,
        path:'/IoT/IoT-And-Artificial-Intelligence',
        name: 'IoT and Artificial Intelligence (AI)',
        
        subRoutes:[
            {
                path:'/IoT/IoT-AI-Intersection',
                name:'Intersection of IoT and AI technologies',
            },
            {
                path:'/IoT/IoT-AI-Machine',
                name:'Machine learning and deep learning for IoT data analytics',
            },
            {
                path:'/IoT/IoT-AI-Predictive',
                name:'Predictive maintenance and anomaly detection in IoT systems',
            },
            {
                path:'/IoT/IoT-AI-Intelligent',
                name:'Intelligent decision-making and automation using AI in IoT applications',
            },
            {
                path:'/IoT/IoT-AI-Edge',
                name:'Edge AI and distributed intelligence in IoT environments',
            },
        ]
    },
    {
        'id': 12,
        path:'/IoT/IoT-and-Sustainability',
        name: 'IoT and Sustainability',
        
        subRoutes:[
            {
                path:'/IoT/IoT-Substain-Role',
                name:'Role of IoT in creating sustainable and smart cities',
            },
            {
                path:'/IoT/IoT-Substain-Energy',
                name:'Energy efficiency and resource optimization through IoT applications',
            },
            {
                path:'/IoT/IoT-Substain-Environmental',
                name:'Environmental monitoring and conservation using IoT sensors',
            },
            {
                path:'/IoT/IoT-Substain-Smart',
                name:'Smart grids and energy management systems in IoT',
            },
            {
                path:'/IoT/IoT-Substain-IoT-Enabled',
                name:'IoT-enabled waste management and recycling solutions',
            },
        ]
    },
    
    
]

export default iotlist;