import { Speaker, CommitteeMember, Topic, DateItem, FeeItem } from './types';
import { Atom, Microscope, Globe, Cpu, Zap, Layers, BarChart, Database, Network, Variable, Binary, Leaf, Sigma, Shield, Brain, Wifi } from 'lucide-react';
import React from 'react';

// --- PATRONS & CHAIRS ---
export const PATRONS: CommitteeMember[] = [
  { id: 'p1', name: 'Prof. Umesh Rai', designation: 'Hon’ble Vice-Chancellor', institution: 'University of Jammu', role: 'Chief Patron' },
  { id: 'p2', name: 'Prof. J. P. Singh Joorel', designation: 'Dean, Academic Affairs', institution: 'University of Jammu', role: 'Patron' },
];

export const ORGANIZERS: CommitteeMember[] = [
  { id: 'o1', name: 'Prof. Romesh Kumar', designation: 'Dean, Faculty of Mathematical Sciences', institution: 'University of Jammu', role: 'Conference Chair' },
  { id: 'o2', name: 'Prof. Vibhakar Mansotra', designation: 'Head, Dept. of CS & IT', institution: 'University of Jammu', role: 'General Chair' },
  { id: 'o3', name: 'Prof. Parmil Kumar', designation: 'Dept. of Statistics', institution: 'University of Jammu', role: 'Organising Chair' },
  { id: 'o4', name: 'Dr. Tirath Ram', designation: 'Dept. of Mathematics', institution: 'University of Jammu', role: 'Organising Co-Chair' }
];

// --- ORGANIZING COMMITTEE ---
// Comprehensive list from the brochure
export const PROGRAM_COMMITTEE: CommitteeMember[] = [
  { id: 'pc0', name: 'Prof. Rahul Gupta', designation: 'Dept. of Statistics' },
  { id: 'pc1', name: 'Prof. Vinod Sharma', designation: 'Dept. of CS & IT' },
  { id: 'pc2', name: 'Prof. K.S Charak', designation: 'Dept. of Mathematics' },
  { id: 'pc3', name: 'Prof. Lalit Sen Sharma', designation: 'Dept. of CS & IT' },
  { id: 'pc4', name: 'Prof. Pawanesh Abrol', designation: 'Dept. of CS & IT' },
  { id: 'pc5', name: 'Prof. Pawan Kumar', designation: 'Dept. of Statistics' },
  { id: 'pc6', name: 'Prof. Parmil Kumar', designation: 'Dept. of Statistics' },
  { id: 'pc7', name: 'Dr. Shubhnandan S. Jamwal', designation: 'Dept. of CS & IT' },
  { id: 'pc8', name: 'Dr. Shallu Sharma', designation: 'Dept. of Mathematics' },
  { id: 'pc9', name: 'Dr. Tirath Ram', designation: 'Dept. of Mathematics' },
  { id: 'pc10', name: 'Dr. V. K. Shivgotra', designation: 'Dept. of Statistics' },
  { id: 'pc11', name: 'Dr. Sarika Verma', designation: 'Dept. of Mathematics' },
  { id: 'pc12', name: 'Sh. Jasbir Singh', designation: 'Dept. of CS & IT' },
  { id: 'pc13', name: 'Dr. Sunil Bhogal', designation: 'Dept. of Statistics' },
  { id: 'pc14', name: 'Dr. Manish Kumar', designation: 'Dept. of Mathematics' },
  { id: 'pc15', name: 'Dr. Tarun Kumar', designation: 'Dept. of Mathematics' },
];

// Strictly ordered hierarchy for the Chairs section
export const RESOURCE_PERSONS: Speaker[] = [
  {
    id: 'chief-patron',
    name: 'Prof. Umesh Rai',
    designation: 'Hon’ble Vice-Chancellor',
    institution: 'University of Jammu',
    role: 'Chief Patron',
    imageUrl: 'vc_sir.jpeg'
  },
  {
    id: 'patron',
    name: 'Prof. J. P. Singh Joorel',
    designation: 'Dean, Academic Affairs',
    institution: 'University of Jammu',
    role: 'Patron',
    imageUrl: 'jp_singh.png'
  },
  {
    id: 'conf-chair',
    name: 'Prof. Romesh Kumar',
    designation: 'Dean, Faculty of Mathematical Sciences',
    institution: 'University of Jammu',
    role: 'Conference Chair',
    imageUrl: 'Romesh_kumar.png'
  },
  {
    id: 'gen-chair',
    name: 'Prof. Vibhakar Mansotra',
    designation: 'Head, Dept. of CS & IT',
    institution: 'University of Jammu',
    role: 'General Chair',
    imageUrl: 'Vibhakar_mansotra.png'
  },
  {
    id: 'org-chair',
    name: 'Prof. Parmil Kumar',
    designation: 'Professor (Statistics)',
    institution: 'University of Jammu',
    role: 'Organising Chair',
    imageUrl: 'Parmil.png'
  },
  {
    id: 'org-co-chair',
    name: 'Dr. Tirath Ram',
    designation: 'Assoc. Prof.(Mathematics)',
    institution: 'University of Jammu',
    role: 'Organising Co-Chair',
    imageUrl: 'Tirath.png'
  }
];

// --- TOPICS ---
export const TOPICS: Topic[] = [
  { id: 't1', title: 'Mathematical Modeling', description: 'Applications in various scientific and engineering fields.', icon: 'atom' },
  { id: 't2', title: 'AI and Data Science', description: 'Intelligent systems, big data analytics, and predictive modeling.', icon: 'brain' },
  { id: 't3', title: 'Algebra and Analysis', description: 'Core foundations including group theory, real & complex analysis.', icon: 'variable' },
  { id: 't4', title: 'Cyber Security', description: 'Network defense, digital safety, and secure protocols.', icon: 'shield' },
  { id: 't5', title: 'Cryptography and Information Security', description: 'Secure communication techniques and data protection.', icon: 'binary' },
  { id: 't6', title: 'Computational Intelligence and Machine Learning', description: 'Advanced algorithms, learning paradigms, and cognitive computing.', icon: 'cpu' },
  { id: 't7', title: 'Climate Modelling and Environmental Mathematics', description: 'Mathematical approaches to environmental issues and climate change.', icon: 'leaf' },
  { id: 't8', title: 'Statistics and Related Topics', description: 'Statistical theory, applied statistics, and methodologies.', icon: 'bar-chart' },
  { id: 't9', title: 'Soft Computing', description: 'Fuzzy, Neural, & Genetic Algorithms, Artificial Intelligence.', icon: 'network' },
  { id: 't10', title: 'Approximation and Operator theory', description: 'Functional analysis, approximation methods, and operator theory.', icon: 'sigma' },
  { id: 't11', title: 'Operations Research', description: 'Optimization, decision making, and process management.', icon: 'layers' },
  { id: 't12', title: 'Statistics and Data Science', description: 'Intersection of statistical methods and data-driven technologies.', icon: 'database' },
  { id: 't13', title: 'Biostatistics', description: 'Statistics applied to biology, health, and medical research.', icon: 'microscope' },
  { id: 't14', title: 'Natural Language Processing', description: 'Interaction between computers and human language.', icon: 'globe' },
  { id: 't15', title: 'IOT', description: 'Internet of Things, smart devices, and connectivity.', icon: 'wifi' },
];

export const TOPIC_ICONS: Record<string, React.ReactNode> = {
  'atom': <Atom className="w-8 h-8 text-brand-primary" />,
  'variable': <Variable className="w-8 h-8 text-brand-primary" />,
  'binary': <Binary className="w-8 h-8 text-brand-primary" />,
  'leaf': <Leaf className="w-8 h-8 text-brand-primary" />,
  'bar-chart': <BarChart className="w-8 h-8 text-brand-primary" />,
  'cpu': <Cpu className="w-8 h-8 text-brand-primary" />,
  'network': <Network className="w-8 h-8 text-brand-primary" />,
  'layers': <Layers className="w-8 h-8 text-brand-primary" />,
  'database': <Database className="w-8 h-8 text-brand-primary" />,
  'microscope': <Microscope className="w-8 h-8 text-brand-primary" />,
  'globe': <Globe className="w-8 h-8 text-brand-primary" />,
  'sigma': <Sigma className="w-8 h-8 text-brand-primary" />,
  'shield': <Shield className="w-8 h-8 text-brand-primary" />,
  'brain': <Brain className="w-8 h-8 text-brand-primary" />,
  'wifi': <Wifi className="w-8 h-8 text-brand-primary" />,
};

// --- DATES ---
export const IMPORTANT_DATES: DateItem[] = [
  { label: 'Abstract Submission Deadline', date: 'January 25, 2026', isHighlight: true },
  { label: 'Notification of Acceptance', date: 'January 30, 2026' },
  { label: 'Last Date for Registration', date: 'February 02, 2026', isHighlight: true },
  { label: 'Conference Dates', date: 'February 09 - 10, 2026', isHighlight: true },
];

// --- FEES ---
export const REGISTRATION_FEES: FeeItem[] = [
  { category: 'Attendee & PG Students', amount: '₹ 500/-' },
  { category: 'Ph.D. Research Scholars', amount: '₹ 1000/-' },
  { category: 'Research Associates, Post-Doctoral, Faculty & Industry', amount: '₹ 2000/-' },
];

// --- CONTACT & GENERAL ---
export const CONFERENCE_NAME = "National Conference on Interdisciplinary Advances in Mathematical, Statistical, and Computational Sciences";
export const CONFERENCE_DATE = "February 09 - 10, 2026";
export const CONFERENCE_LOCATION = "Faculty of Mathematical Sciences, University of Jammu, Jammu-180006";
export const CONTACT_EMAIL = "deanmathscience@jammuuniversity.ac.in";
export const SUBMISSION_EMAIL = "PARMIL@JAMMUUNIVERSITY.AC.IN";
export const CONTACT_PHONE_1 = "+91 9419159608"; // Dr. Parmil Kumar

// Needed for compatibility
export const ADVISORY_COMMITTEE: CommitteeMember[] = PROGRAM_COMMITTEE;
export const LOCAL_COMMITTEE: CommitteeMember[] = PROGRAM_COMMITTEE;