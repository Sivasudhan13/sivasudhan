import type { SkillCategoryGroup } from '../types/skill';

export const skillsData: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern, component-driven user interfaces built with responsive design systems and clean state management.',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', category: 'Frontend', focusArea: 'Hooks, Component Architecture, State Management', associatedProjects: ['mern-notes-app', 'car-marketplace', 'student-management-system'], highlight: true },
      { name: 'React Native', category: 'Frontend', focusArea: 'Cross-platform mobile UI development', associatedProjects: [] },
      { name: 'Tailwind CSS', category: 'Frontend', focusArea: 'Utility-first styling, design tokens, responsive breakpoints', associatedProjects: ['mern-notes-app', 'car-marketplace'], highlight: true },
      { name: 'TypeScript', category: 'Frontend', focusArea: 'Type-safe interfaces, generics, compile-time safety', associatedProjects: ['portfolio-system'], highlight: true },
      { name: 'JavaScript (ES6+)', category: 'Frontend', focusArea: 'Asynchronous patterns, DOM manipulation, functional programming', associatedProjects: ['mern-notes-app', 'car-marketplace'] },
      { name: 'HTML5 & CSS3', category: 'Frontend', focusArea: 'Semantic web standards, CSS Grid, Flexbox, Keyframe animations', associatedProjects: ['mern-notes-app'] }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'High-performance server-side architectures, RESTful API endpoints, and scalable microservices.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', category: 'Backend', focusArea: 'Event-driven runtime, non-blocking I/O, microservices', associatedProjects: ['mern-notes-app', 'car-marketplace'], highlight: true },
      { name: 'Express.js', category: 'Backend', focusArea: 'Middleware pipelines, REST controller design, routing', associatedProjects: ['mern-notes-app', 'car-marketplace'], highlight: true },
      { name: 'FastAPI', category: 'Backend', focusArea: 'Asynchronous Python endpoints, auto OpenAPI docs, Pydantic validation', associatedProjects: ['student-management-system'], highlight: true },
      { name: 'REST APIs', category: 'Backend', focusArea: 'HTTP standards, CRUD architectures, query filtering, status codes', associatedProjects: ['mern-notes-app', 'student-management-system'] },
      { name: 'JWT & Security', category: 'Backend', focusArea: 'Stateless authentication, password hashing, CORS policies', associatedProjects: ['mern-notes-app'] }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages utilized for algorithmic problem solving, web backends, and system automation.',
    iconName: 'Code',
    skills: [
      { name: 'Java', category: 'Languages', focusArea: 'Object-Oriented Programming, Data Structures, Multithreading', associatedProjects: [] },
      { name: 'Python', category: 'Languages', focusArea: 'FastAPI backends, DSP signal processing, automation, OpenCV', associatedProjects: ['student-management-system', 'autonomous-drone-telemetry', 'eeg-signal-visualizer'], highlight: true },
      { name: 'JavaScript', category: 'Languages', focusArea: 'Full-stack application logic, asynchronous runtime', associatedProjects: ['mern-notes-app', 'car-marketplace'] },
      { name: 'SQL', category: 'Languages', focusArea: 'Relational querying, joins, aggregations, indexing', associatedProjects: ['student-management-system'] },
      { name: 'C / C++', category: 'Languages', focusArea: 'Embedded microcontroller routines, firmware development', associatedProjects: ['emg-gesture-interface', 'edge-iot-telemetry-station'] }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Document and relational data stores configured for data consistency and query performance.',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', category: 'Database', focusArea: 'NoSQL collections, schema validation, aggregation pipelines', associatedProjects: ['mern-notes-app', 'car-marketplace'], highlight: true },
      { name: 'PostgreSQL', category: 'Database', focusArea: 'Relational schemas, ACID compliance, foreign keys, indexing', associatedProjects: ['student-management-system'], highlight: true },
      { name: 'SQL Database Design', category: 'Database', focusArea: 'Schema normalization, table constraints, relational modeling', associatedProjects: ['student-management-system'] }
    ]
  },
  {
    id: 'creative-3d',
    title: '3D Web & Interactive Motion',
    description: 'Engaging real-time WebGL graphics, procedural 3D elements, and smooth cinematic choreography.',
    iconName: 'Sparkles',
    skills: [
      { name: 'Three.js', category: '3D', focusArea: 'Procedural geometry, PBR materials, ambient lighting, particle systems', associatedProjects: ['portfolio-system'], highlight: true },
      { name: 'React Three Fiber', category: '3D', focusArea: 'Declarative 3D scene graphs in React, canvas event handling', associatedProjects: ['portfolio-system'], highlight: true },
      { name: 'GSAP & ScrollTrigger', category: 'Motion', focusArea: 'Timeline orchestration, scroll-based scene transforms, entrance reveals', associatedProjects: ['portfolio-system'], highlight: true },
      { name: 'Motion for React', category: 'Motion', focusArea: 'Physics-based layout transitions, interactive hover dynamics, gesture states', associatedProjects: ['portfolio-system'], highlight: true }
    ]
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Developer Tools',
    description: 'Version control, cloud infrastructure, and collaborative development tools.',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS Cloud Fundamentals', category: 'Cloud', focusArea: 'EC2 computing, S3 buckets, IAM security policies', associatedProjects: [], highlight: true },
      { name: 'Git & GitHub', category: 'Tools', focusArea: 'Branching workflows, pull requests, code review collaboration', associatedProjects: ['mern-notes-app', 'car-marketplace'], highlight: true },
      { name: 'Figma', category: 'Design', focusArea: 'UI wireframing, high-fidelity mockups, responsive design components', associatedProjects: [] },
      { name: 'Postman', category: 'Tools', focusArea: 'REST API testing, endpoint benchmarking, request payload verification', associatedProjects: ['student-management-system'] },
      { name: 'VS Code', category: 'Tools', focusArea: 'Advanced linting, extensions, workspace debugging', associatedProjects: [] }
    ]
  },
  {
    id: 'hardware-iot',
    title: 'Hardware, IoT & Embedded Systems',
    description: 'Physical computing, sensor telemetry, telemetry communication protocols, and biomedical signals.',
    iconName: 'Cpu',
    skills: [
      { name: 'ESP32 & Arduino', category: 'Hardware', focusArea: 'GPIO pin interfacing, ADC signal sampling, embedded C++', associatedProjects: ['emg-gesture-interface', 'edge-iot-telemetry-station'], highlight: true },
      { name: 'MQTT Protocol', category: 'IoT', focusArea: 'Publish/subscribe telemetry streams over intermittent networks', associatedProjects: ['edge-iot-telemetry-station'] },
      { name: 'Drone Telemetry & MAVLink', category: 'Robotics', focusArea: 'UAV serial telemetry parsing, flight controller communication', associatedProjects: ['autonomous-drone-telemetry'] },
      { name: 'Biomedical Sensors (EEG/EMG)', category: 'Bio-tech', focusArea: 'Microvoltage amplification, electrode placement, bio-signal filtering', associatedProjects: ['eeg-signal-visualizer', 'emg-gesture-interface'] }
    ]
  }
];
