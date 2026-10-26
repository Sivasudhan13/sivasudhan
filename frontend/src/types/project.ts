export type ProjectCategory =
  | 'Web Development'
  | 'Artificial Intelligence and Machine Learning'
  | 'Drone and Robotics'
  | 'EEG and EMG'
  | 'IoT and Embedded Systems'
  | 'Hackathon Projects'
  | 'Other Engineering Projects';

export type DevelopmentStatus =
  | 'Completed'
  | 'Production / Live'
  | 'Active Prototype'
  | 'Research & Lab Demo';

export interface ProjectItem {
  id: string; // URL slug
  title: string;
  category: ProjectCategory;
  shortSummary: string;
  problemStatement: string;
  solution: string;
  individualContribution: string;
  technologies: string[];
  developmentStatus: DevelopmentStatus;
  featured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string;
  resultsOrOutcomes?: string[];
  hardwareSpecs?: string[];
  architectureHighlights?: string[];
  year: string;
}
