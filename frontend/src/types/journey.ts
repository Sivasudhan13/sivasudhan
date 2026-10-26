export type JourneyItemType =
  | 'education'
  | 'internship'
  | 'project'
  | 'hackathon'
  | 'certification'
  | 'recognition';

export interface JourneyMilestone {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: JourneyItemType;
  description: string;
  keyOutcomes: string[];
  tags: string[];
  verified: boolean;
}
