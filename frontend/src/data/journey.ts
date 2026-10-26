import type { JourneyMilestone } from '../types/journey';

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'btech-rvs-cet',
    year: '2023 – 2027',
    period: 'Undergraduate Program',
    title: 'B.Tech in Information Technology',
    organization: 'RVS College of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu',
    type: 'education',
    description: 'Pursuing undergraduate engineering with an active academic record (CGPA 7.9/10). Coursework includes Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Object-Oriented Software Engineering.',
    keyOutcomes: [
      'Maintaining strong 7.9 / 10 CGPA through structured coursework.',
      'Active participant in departmental innovation labs and technical coding challenges.',
      'Representing the institution in external regional hackathons and seminars.'
    ],
    tags: ['B.Tech IT', 'Computer Science', 'Algorithms', 'Software Engineering'],
    verified: true
  },
  {
    id: 'itboomi-internship',
    year: '2024',
    period: '3 Months (Full-Time / Hybrid)',
    title: 'Full Stack MERN Developer Intern',
    organization: 'ITBoomi Innovative Technology',
    location: 'Tirupur, Tamil Nadu',
    type: 'internship',
    description: 'Immersed in full development lifecycles across 3 live commercial client and internal software applications. Collaborated closely with senior software engineers, implementing modular React user interfaces and robust Node/Express RESTful APIs.',
    keyOutcomes: [
      'Contributed to 3 live projects from requirement analysis through deployment.',
      'Engineered scalable MongoDB collections and RESTful CRUD endpoints.',
      'Maintained Git code review discipline and rapid bug-fixing workflows under deadlines.'
    ],
    tags: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'Production APIs'],
    verified: true
  },
  {
    id: 'college-hackathon-win',
    year: '2024',
    period: 'Competitive Event',
    title: 'Second Prize — Annual College Hackathon',
    organization: 'Technical Innovation Council, RVS CET',
    location: 'Coimbatore, Tamil Nadu',
    type: 'hackathon',
    description: 'Formed a rapid prototyping team to engineer a full-stack digital solution in response to an on-spot engineering challenge. Led system architecture and frontend implementation to secure Second Prize.',
    keyOutcomes: [
      'Built a complete functioning prototype within the time constraint.',
      'Presented architecture live to an expert faculty and industry jury panel.',
      'Awarded Second Prize recognition among multi-departmental teams.'
    ],
    tags: ['Hackathon', 'Second Prize', 'Rapid Prototyping', 'Team Leadership'],
    verified: true
  },
  {
    id: 'best-seminar-award',
    year: '2024',
    period: 'Academic Symposium',
    title: 'Best Seminar Presenter Award',
    organization: 'Department of Information Technology',
    location: 'Coimbatore, Tamil Nadu',
    type: 'recognition',
    description: 'Delivered an in-depth technical presentation on emerging computing technologies and engineering architectures, earning top honors for technical clarity, visual design, and audience engagement.',
    keyOutcomes: [
      'Awarded Best Seminar Presenter by academic evaluation panel.',
      'Demonstrated high proficiency in technical storytelling and communication.'
    ],
    tags: ['Public Speaking', 'Technical Presentation', 'Best Presenter'],
    verified: true
  },
  {
    id: 'sih-selection',
    year: '2024',
    period: 'National Innovation Track',
    title: 'Smart India Hackathon (SIH) Internal Finalist',
    organization: 'Ministry of Education Innovation Cell / IIC',
    location: 'Institutional Level',
    type: 'hackathon',
    description: 'Tackled national-scale problem statements in the institutional evaluation round of Smart India Hackathon, delivering technical architecture diagrams and user workflow prototypes.',
    keyOutcomes: [
      'Selected among the top institutional candidate teams for SIH submission.',
      'Developed end-to-end full-stack workflow mockups for national problem statements.'
    ],
    tags: ['SIH', 'Innovation', 'Civic Tech', 'National Challenges'],
    verified: true
  },
  {
    id: 'certifications-milestone',
    year: '2024',
    period: 'Professional Upskilling',
    title: 'MERN, AWS Cloud & UI/UX Certifications',
    organization: 'Accredited Training Programs',
    location: 'Online / Professional',
    type: 'certification',
    description: 'Completed dedicated certifications to cement foundational skills across modern cloud architecture (AWS), user interface design principles (Figma / UI/UX), and full-stack software development.',
    keyOutcomes: [
      'Certified in MERN Stack Development & RESTful web services.',
      'Certified in AWS Cloud Fundamentals (EC2, S3, IAM, Cloud Architecture).',
      'Certified in UI/UX Design (wireframing, user psychology, responsive systems).'
    ],
    tags: ['Certifications', 'AWS', 'MERN', 'UI/UX Design'],
    verified: true
  },
  {
    id: 'engineering-research',
    year: '2024 – 2025',
    period: 'Engineering Exploration',
    title: 'Hardware & Intelligent Systems Prototyping',
    organization: 'Independent Lab & Engineering R&D',
    location: 'Coimbatore, Tamil Nadu',
    type: 'project',
    description: 'Broadened engineering horizons into embedded telemetry, autonomous UAV protocols, and biological electrophysiology, constructing experimental setups for MAVLink drone telemetry and EEG/EMG signal filtering.',
    keyOutcomes: [
      'Built functioning digital signal filters (Notch + Bandpass) for raw bio-signals.',
      'Parsed live MAVLink flight controller packets over serial USB connections.',
      'Integrated Python FastAPI microservices with PostgreSQL relational storage.'
    ],
    tags: ['Drone Telemetry', 'EEG & EMG', 'FastAPI', 'Embedded Systems'],
    verified: true
  }
];
