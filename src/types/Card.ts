export type CardType = 'project' | 'skill' | 'award' | 'tool' | 'role';

export interface CardContent {
  id: string;
  type: CardType;
  title: string;
  subtitle?: string;
  metrics?: string[];
  tools?: string[];
  description: string;
  links?: {
    url: string;
    label: string;
  }[];
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
}

export interface CardProps {
  content: CardContent;
  className?: string;
}
