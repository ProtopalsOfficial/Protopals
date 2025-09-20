
export interface TutorialStep {
  title: string;
  description: string;
  image?: string;
}

export interface Tutorial {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: 'Mechanical Builds' | 'Science Experiments' | 'Robotics Basics' | 'DIY Crafts';
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: string;
  thumbnail: string;
  videoUrl?: string;
  materials: string[];
  steps: TutorialStep[];
}

export interface Category {
  name: 'Mechanical Builds' | 'Science Experiments' | 'Robotics Basics' | 'DIY Crafts';
  slug: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
  bgColor: string;
}
