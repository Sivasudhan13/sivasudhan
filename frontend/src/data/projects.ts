import type { ProjectItem } from '../types/project';

export const projectsData: ProjectItem[] = [
  {
    id: 'mern-notes-app',
    title: 'MERN Notes Application',
    category: 'Web Development',
    shortSummary: 'A full-stack, secure note-taking web application featuring RESTful CRUD APIs, rich note organization, and responsive design.',
    problemStatement: 'Modern productivity users require instantaneous note capture with seamless tag organization, instant search, and reliable database persistence without latency.',
    solution: 'Architected a modular full-stack application leveraging React on the client, Express and Node.js on the backend, and MongoDB for flexible document storage. Integrated token-based authentication and intuitive categorization.',
    individualContribution: 'Developed the entire frontend state architecture in React, wrote secure Express controllers for CRUD endpoints, modeled MongoDB collections, and styled a dark-mode responsive interface.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3 / Tailwind', 'JWT'],
    developmentStatus: 'Completed',
    featured: true,
    githubUrl: 'https://github.com/Sivasudhan13',
    year: '2024',
    resultsOrOutcomes: [
      'Engineered sub-80ms API response times for standard note retrieval operations.',
      'Implemented full CRUD operations with optimistic UI updates in React.',
      'Verified clean MongoDB schema validation preventing invalid payload insertion.'
    ],
    architectureHighlights: [
      'Client-side state management with immediate optimistic UI updates',
      'RESTful routing architecture with Express middleware error handling',
      'Indexed MongoDB queries for fast text searching across title and content'
    ]
  },
  {
    id: 'car-marketplace',
    title: 'Car Marketplace Platform',
    category: 'Web Development',
    shortSummary: 'A full-stack automotive listing and discovery marketplace enabling users to browse, filter, search, and manage vehicle inventories.',
    problemStatement: 'Automotive buyers and dealerships often struggle with cluttered interfaces, slow multi-parameter filtering, and unorganized vehicle specifications.',
    solution: 'Constructed an end-to-end marketplace platform with parametric search (filter by make, model, price range, and year), rich image galleries, and an administrative dashboard for listing management.',
    individualContribution: 'Engineered the backend RESTful services in Node.js and Express, designed MongoDB listing schemas with indexed search attributes, and built dynamic React filtering components.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    developmentStatus: 'Completed',
    featured: true,
    githubUrl: 'https://github.com/Sivasudhan13',
    year: '2024',
    resultsOrOutcomes: [
      'Handled multi-criteria query filtering (price range, brand, year, transmission).',
      'Created modular React card components with responsive image lazy-loading.',
      'Designed scalable database schema capable of tracking vehicle specifications and seller details.'
    ],
    architectureHighlights: [
      'Parametric query builder on the backend supporting compound MongoDB filters',
      'Responsive image grid layout with fallback handlers for broken asset links',
      'Clean separation of concerns across controllers, services, and route definitions'
    ]
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'Web Development',
    shortSummary: 'A modern academic records management portal powered by FastAPI, PostgreSQL, and React for attendance, performance, and student tracking.',
    problemStatement: 'Educational institutions require strict type validation, fast concurrent API throughput, and relational data integrity for academic records, GPA computation, and attendance.',
    solution: 'Built an enterprise-ready management system combining the high concurrency of Python FastAPI with PostgreSQL relational tables, providing an interactive React administration interface.',
    individualContribution: 'Developed backend API endpoints with FastAPI and Pydantic schemas, authored relational database schemas with foreign key constraints, and connected frontend tables with sorting and pagination.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'React.js', 'REST APIs', 'Pydantic'],
    developmentStatus: 'Completed',
    featured: true,
    githubUrl: 'https://github.com/Sivasudhan13',
    year: '2024',
    resultsOrOutcomes: [
      'Leveraged FastAPI asynchronous handlers for sub-40ms request latency.',
      'Enforced strict Pydantic payload validation preventing relational corruption.',
      'Integrated dynamic attendance analytics and semester performance dashboards.'
    ],
    architectureHighlights: [
      'Asynchronous database connection pooling using SQLAlchemy ORM',
      'Automated OpenAPI / Swagger interactive documentation generated by FastAPI',
      'React frontend with paginated tables, search debounce, and export utilities'
    ]
  },
  {
    id: 'autonomous-drone-telemetry',
    title: 'Autonomous Drone Telemetry & Mission Tracking',
    category: 'Drone and Robotics',
    shortSummary: 'Engineering prototype for UAV telemetry acquisition, MAVLink packet parsing, and real-time flight path visual tracking.',
    problemStatement: 'Unmanned aerial vehicles operating in complex environments need resilient ground-station telemetry processing and sensor verification to ensure mission stability.',
    solution: 'Designed a telemetry receiver and visualization application that parses flight controller data packets (GPS coordinates, altitude, pitch, roll, yaw, battery levels) and plots flight corridors.',
    individualContribution: 'Wrote Python telemetry parsers, integrated MAVLink communication protocols, configured sensor reading validation, and built a live telemetry stream dashboard.',
    technologies: ['Python', 'MAVLink Protocol', 'OpenCV', 'ArduPilot / PX4', 'Serial Telemetry', 'NumPy'],
    developmentStatus: 'Active Prototype',
    featured: true,
    year: '2024 – 2025',
    hardwareSpecs: [
      'Flight Controller: Pixhawk / PX4 compatible telemetry stream',
      'Radio Link: 433MHz / 915MHz Bi-directional Telemetry Transceiver',
      'Sensors: Barometric altimeter, 3-axis Gyroscope, Magnetometer, GPS module'
    ],
    resultsOrOutcomes: [
      'Decoded real-time flight packets at 10Hz sample rate over serial USB interface.',
      'Plotted live attitude horizon indicators (pitch & roll) and GPS position markers.',
      'Benchmarked telemetry error handling during signal dropouts and reconnect sequences.'
    ]
  },
  {
    id: 'eeg-signal-visualizer',
    title: 'EEG Signal Acquisition & Neural Visualizer',
    category: 'EEG and EMG',
    shortSummary: 'Biomedical engineering prototype for capturing electroencephalographic microvolt potentials, digital signal filtering, and frequency band decomposition.',
    problemStatement: 'Scalp-recorded EEG signals are microvolt-level and severely contaminated by 50Hz mains power interference, muscle artifacts, and electromagnetic environmental noise.',
    solution: 'Engineered a signal processing pipeline that receives raw analog-to-digital EEG streams, executes digital bandpass (0.5–50 Hz) and notch filtering, and runs Fast Fourier Transforms (FFT) to isolate Alpha (8–12Hz), Beta (13–30Hz), and Theta (4–8Hz) waves.',
    individualContribution: 'Programmed digital signal processing filters using Python SciPy/NumPy, built real-time waveform visualizers, and documented signal-to-noise ratio optimization.',
    technologies: ['Python', 'SciPy', 'NumPy', 'Matplotlib', 'Digital Signal Processing (DSP)', 'FFT Analysis', 'Serial Data'],
    developmentStatus: 'Research & Lab Demo',
    featured: true,
    year: '2024 – 2025',
    hardwareSpecs: [
      'Electrodes: Ag/AgCl wet / dry conductive electrodes',
      'Instrumentation Amplifier: Low-noise differential bio-potential preamplifier',
      'ADC Resolution: 16-bit / 24-bit sampling at 250 SPS'
    ],
    resultsOrOutcomes: [
      'Successfully isolated 50Hz electrical hum using a digital Butterworth notch filter.',
      'Demonstrated real-time spectral power shifting during relaxed eye-closed Alpha wave dominance.',
      'Created modular signal export routines for further machine learning feature extraction.'
    ]
  },
  {
    id: 'emg-gesture-interface',
    title: 'EMG Myoelectric Muscle Gesture Interface',
    category: 'EEG and EMG',
    shortSummary: 'Surface electromyography (sEMG) biosignal interface translating muscle contractions into digital control triggers.',
    problemStatement: 'Assistive robotics and prosthetic controllers require reliable, non-invasive physiological control inputs derived from skeletal muscle activity without high hardware latency.',
    solution: 'Constructed an sEMG acquisition unit that samples microvoltage bursts across forearm flexor muscles, extracts signal envelope features through moving-average rectification, and maps distinct contraction thresholds to digital control signals.',
    individualContribution: 'Built signal conditioning circuitry, wrote embedded analog sampling routines on microcontroller with debouncing, and mapped threshold triggers to hardware outputs.',
    technologies: ['Embedded C++', 'Arduino / ESP32', 'Surface EMG Sensors', 'Analog Signal Conditioning', 'Python'],
    developmentStatus: 'Research & Lab Demo',
    featured: false,
    year: '2024 – 2025',
    hardwareSpecs: [
      'Sensors: Surface myoelectric electrode sensors with differential ground reference',
      'Microcontroller: ESP32 32-bit dual-core MCU with high-speed ADC sampling',
      'Filtering: Onboard envelope detection with rectification and low-pass integration'
    ],
    resultsOrOutcomes: [
      'Achieved reliable binary gesture trigger classification (relaxed vs. flexed) under 60ms latency.',
      'Implemented dynamic threshold calibration to adjust for user fatigue and sensor repositioning.'
    ]
  },
  {
    id: 'sih-innovation-prototype',
    title: 'Smart India Hackathon Innovation Platform',
    category: 'Hackathon Projects',
    shortSummary: 'High-intensity hackathon prototype engineered under 36-hour sprint constraints to address civic and industrial software workflows.',
    problemStatement: 'Hackathon challenges require transforming complex government or enterprise problem statements into an intuitive, functional software prototype within 36 hours.',
    solution: 'Designed and implemented a full-stack platform featuring role-based dashboards, collaborative workflow pipelines, and data reporting with an aesthetic, user-first interface.',
    individualContribution: 'Led the frontend development and REST API integration, built responsive UI views in React, and presented the technical architecture to the evaluation panel.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    developmentStatus: 'Completed',
    featured: true,
    year: '2024',
    resultsOrOutcomes: [
      'Shipped an end-to-end working prototype within the 36-hour continuous hackathon limit.',
      'Demonstrated live data flow between role-based users and administrative dashboard views.'
    ]
  },
  {
    id: 'edge-iot-telemetry-station',
    title: 'Edge IoT Environmental Telemetry Node',
    category: 'IoT and Embedded Systems',
    shortSummary: 'Connected embedded telemetry node with ESP32, environmental sensors, and MQTT cloud reporting with offline resilience.',
    problemStatement: 'Distributed sensor installations in remote environments suffer from connectivity blackouts, risking critical metric telemetry data loss.',
    solution: 'Engineered an edge sensor station that captures ambient temperature, humidity, and atmospheric readings, logs telemetry packets to non-volatile flash during disconnects, and syncs over MQTT upon reconnecting.',
    individualContribution: 'Programmed ESP32 firmware in C++, implemented non-blocking WiFi/MQTT state machines, and built a real-time web monitoring dashboard.',
    technologies: ['ESP32', 'C++', 'MQTT Protocol', 'FreeRTOS', 'DHT22 Sensor', 'Node.js', 'WebSockets'],
    developmentStatus: 'Completed',
    featured: false,
    year: '2024',
    hardwareSpecs: [
      'MCU: ESP32 Dual-Core Tensilica Xtensa 240MHz',
      'Communication: 2.4GHz 802.11 b/g/n Wi-Fi, MQTT over TLS',
      'Sensors: Digital humidity & temperature sensor, analog gas detection probe'
    ],
    resultsOrOutcomes: [
      'Verified zero data loss during simulated 15-minute network outages using ring-buffer flash logging.',
      'Streamed live telemetry updates to web dashboard via lightweight MQTT topics.'
    ]
  }
];
