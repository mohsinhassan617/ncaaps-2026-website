export interface Speaker {
  id: string;
  name: string;
  designation?: string;
  institution: string;
  role?: string;
  imageUrl?: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role?: string;
  institution?: string;
  designation?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: 'atom' | 'microscope' | 'globe' | 'cpu' | 'zap' | 'layers' | 'variable' | 'binary' | 'leaf' | 'bar-chart' | 'network' | 'database' | 'sigma' | 'shield' | 'brain' | 'wifi';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface DateItem {
  label: string;
  date: string;
  isHighlight?: boolean;
}

export interface FeeItem {
  category: string;
  amount: string;
}

export enum NavSection {
  HOME = 'home',
  ABOUT = 'about',
  TIMELINE = 'timeline',
  SPEAKERS = 'speakers',
  SUBMISSION = 'submission',
  COMMITTEE = 'committee',
  ACCOMMODATION = 'accommodation',
  CONTACT = 'contact'
}