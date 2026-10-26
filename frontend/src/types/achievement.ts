export type AchievementResultType =
  | 'Winner / Runner-Up'
  | 'Finalist'
  | 'Participation'
  | 'Certification';

export interface AchievementItem {
  id: string;
  eventName: string;
  organizer: string;
  year: string;
  date?: string;
  competitionCategory: string;
  resultType: AchievementResultType;
  projectOrTeamName: string;
  role: string;
  description: string;
  certificateImage?: string;
  officialUrl?: string;
  skillsDemonstrated: string[];
  isVerified: boolean;
}
