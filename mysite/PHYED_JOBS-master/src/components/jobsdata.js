import Sailor from '../assests/sailor.png';
import Yahoo from '../assests/yahoo.png';
import Youtube from '../assests/youtube.png';
import Sas from '../assests/sas.png'
import Philips from '../assests/philips.png'
import Sanmina from '../assests/sanmina.png'
import Sophos from '../assests/sophos.png'
import Jabil from '../assests/jabil.png'
import Cadence from '../assests/cadence.png'
const listOfJobs = [
    {
        id: 1,
        name: 'Marketing Intern',
        company: 'SAS',
        location: 'Mumbai',
        date: 'ASAP',
        image: Sas,
        link: "https://global-sas.icims.com/jobs/32901/job",
        impressions: '126',
        requirement: [
            "If you are curious, passionate, authentic, and accountable. These are our values and influence everything we do.",
            "Enrolment in a reputed university and studying marketing & communications.",
            "Knowledge of marketing & communication concepts including press relations, content creation, events, social and email strategies.",
            "Excellent verbal and written communication skills (English).",
            "Familiarity with social media strategies and platforms.",
            "Ability to multitask, take initiative, and learn quickly.",
            "Experience with content creation and events is a plus, even if not professionally.",
            "Ability to work independently and as part of a team."
        ],
        respnsibilities: [
            "Part of marketing team to deliver marketing or communication campaigns designed to accelerate revenue and build awareness through an integrated go-to-market plan.",
            "Help organize marketing events by working closely with Go-to-Market leads and other allied stakeholders in other departments.",
            "Support the Communication function's objectives by working closely with the Comms lead and PR agencies (internal and external).",
            "Liaise with multiple organizations across SAS, including the product line, business units, and potentially other countries or regions, to drive the planning process.",
            "Support the marketing team in daily administrative tasks.",
            "Manage and update company databases, systems, and customer relationship management systems (CRM) as needed."
        ],
        eligibility: "Engineering Student",
        category: [ "#Engineering", "#MBA Students", "#Experienced Professionals"], 
        salary: "Not Stipulated",
        timing: "Full Time",
        jobtype: "In Office"
    },
    {
        id: 2,
        name: 'Internship',
        company: 'Philips',
        location: 'Pune',
        date: 'ASAP',
        image: Philips,
        link: {},
        impressions: '357',
        requirement: [
            "MTECH (Electrical, Electronics, Mechanical, telecommunication, etc.).",
            "Technical experience, knowledge, and/or certification in Electrical, Electronics, Mechanical, IC Chips, PCB testing, etc.",
            "Technical skills: Problem solving, 7 QC Tools.",
            "Personal skills: Good communication skills, fast learning ability.",
            "Language: English, Marathi, Hindi. Optional: Basic German."
            
        ],
        respnsibilities: [
            "Monitoring supplier performance.",
            "Ensuring containment actions for quality issues.",
            "Driving corrective and preventive actions.",
            "Monitoring supplier DPPM (Defective Parts Per Million) and aging of QNs (Quality Notifications).",
            "Driving small improvement projects.",
            "Weekly/monthly top management report preparation.",
            "Playing a key role and acting as a communicator between production and suppliers.",
            "Being a key participant in various quality forums."
        ],
        eligibility: "Foreign Expertriate",
        category: [ "#Graduate", "#Customer Service"], 
        salary: "Not Stipulated",
        timing: "Full Time",
        jobtype: "In Office"
    },
    {
        id: 3,
        name: 'Graduate Intern-42Q MES Solution',
        company: 'Sanmina',
        location: 'Chennai',
        date: 'ASAP',
        image: Sanmina,
        impressions: '140',
        requirement: [
              "Bachelor's Degree from 0-3 years of experience. ",
              "preferably in the manufacturing industry.",
              "Strong knowledge of Information Technology and Information Systems.",
              " Ability to identify issues and propose solutions that contribute to the resolution of technical challenges.",
              " Must be ready and willing to travel to customer locations as needed.",
              "Willingness to work non-standard hours as needed.",
              "Ambition and drive, a self-starter with a \"can do\" attitude."


        ],
        respnsibilities: [
           " Conduct requirement gathering and translate the same to the development teams.",

           " Responsible for the product backlog, internal priorities definition, requirements and/or specification, change management, final product validation and global releases, including implementation, post-implementation, and training.",

            "Has cost and schedule responsibility of the MES application development efforts; preparing and maintaining the work breakdown structure (WBS) for the effort; and who leads the effort – assigning tasks and ensuring timely completion of product/deliverables.",

            "Work with internal teams to identify and suggest changes and/or improvements to the manufacturing process."
        ],
        eligibility: "Graduate Trainee",
        category: [ "#Engineering", "#MBA Students", "#Experienced Professionals"], 
        salary: "Not Stipulated",
        timing: "Full Time",
        jobtype: "In Office"
    },
    {
        id: 4,
        name: 'Technical Support Engineer',
        company: 'Sophos',
        location: 'Ahmedabad',
        date: 'ASAP',
        image: Sophos,
        impressions: '200',
        requirement: [
            "Excellent verbal and written communication skills, inspiring confidence while leading customers through the steps to resolve issues via phone and email.",

            "Ability to handle escalated calls while using good judgment to make sound recommendations.",

            "Advanced computer skills and 4 plus years (Level 1) or 7 plus years (Level 2) including but not limited to: Linux, Unix, Postfix, DNS, BIND, Networking, Network security, Proxies, Email security, http protocol, shell scripting, bash, web proxy, web security, spam filtering, Active Directory.",

            "Understanding of network protocols like HTTP, SMTP, FTP, SMB, DNS, and DHCP.",

            "Thorough knowledge and understanding of the following concepts: Security, Cloud, Firewalls, VPN, Malware, Spyware, Cyber Security.",

            "Experience of installation and configuration of Mac OS, UNIX, or Netware."
        ],
        respnsibilities: [
            "Strong customer service focus with a commitment to excellence and a desire to delight customers.",

            "Customer ambassador who is passionate about creating a positive customer experience.",

            "Proficient in solving technical problems and delivering profound user experiences.",

            "Handle customer complaints and escalations through direct communication (phone, email, remote desktop).",

            "Dedicated to ensuring customer satisfaction and actively promoting products/services to others."
        ],
        eligibility: "Experienced Professionals",
        category: [ "#Engineering", "#MBA Students", "#Experienced Professionals"], 
        salary: "Not Stipulated",
        timing: "Full Time",
        jobtype: "In Office"
    },
    {
        id: 5,
        name: 'Apprentice',
        company: 'Jabil',
        location: 'Pune',
        date: 'ASAP',
        image: Jabil,
        impressions: '112',
        requirement: [
            "Ability to read and comprehend simple instructions, short correspondence, and memos.",
           " Ability to write, read, and understand visual aids.",
           " Ability to apply common sense understanding to carry out simple one- or two-step instructions.",
            "Ability to deal with standardized situations with only occasional or no variables.",
            "Ability to add, subtract, multiply, and divide in all units of measure, using whole numbers, common fractions, and decimals. Ability to compute rate, ratio, and percent and to interpret diagrams and graphs"
        ],
        respnsibilities: [
              "Primary objective is to learn and complete on-the-job training for successful transition into support level manufacturing staff.",
              "May be required to perform basic to moderately complex manufacturing tasks as learned and directed in the training program.",
              "May be required to successfully complete testing or certification requirements as necessary in the area of assignment.",
              "Adhere to all safety and health rules and regulations associated with this position and as directed by the supervisor.",
              "Comply and follow all procedures within the company's security policy.",
              "May perform other duties and responsibilities as assigned."
        ],
        eligibility: "Engineering Student",
        category: [ "#Engineering", "#MBA Students", "#Experienced Professionals"], 
        salary: "Not Stipulated",
        timing: "Full Time",
        jobtype: "In Office"
    },
    {
        id: 6,
        name: 'Intern - Design Engineering',
        company: 'Cadence',
        location: 'Pune',
        date: 'ASAP',
        image: Cadence,
        impressions: '233',
        requirement: [
            "Fresh Engineering graduate in electronics or Comp Science with very good digital/analog skills.",
            "Strong analysis and problem-solving skills, along with excellent algorithmic skills.",
            "A team player with a strong ability and passion for learning.",
            "Excellent verbal and written communication skills."
        ],
        respnsibilities: [
            "Interns at Cadence bring new creative ideas and help solve cutting-edge technical challenges.",
            "Interns are part of project teams and learn tools, flow, and associated technologies on the job.",
           " Assigned a mentor/manager for guidance during the learning process.",
            "Work on multiple live assignments to understand the workings of the actual tool.",
            "Learn teamwork and corporate dynamics.",
            "Expected to develop high-performance capabilities and take charge of their learning.",
            "Encouraged to make an impact and raise the bar for Cadence."
        ],
        eligibility: "Engineering Student",
        category: [ "#Engineering", "#MBA Students", "#Experienced Professionals"], 
        salary: "Not Stipulated",
        timing: "Full Time",
        jobtype: "In Office"
    },
]

export default listOfJobs;