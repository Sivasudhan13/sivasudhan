export interface SkillItem {
  name: string;
  category: string;
  focusArea: string;
  associatedProjects?: string[];
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}
