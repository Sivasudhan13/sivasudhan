export interface ProfileSocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface ProfileEducation {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export interface ProfileExperience {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface ProfileData {
  fullName: string;
  preferredName: string;
  headline: string;
  subHeadline: string;
  heroTagline: string;
  bioParagraphs: string[];
  location: string;
  availability: string;
  resumeUrl: string;
  socials: ProfileSocialLinks;
  education: ProfileEducation;
  internship: ProfileExperience;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
