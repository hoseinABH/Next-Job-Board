import type { Company } from './company';
import type { EducationDegree } from './resume';

interface Content {
  id: string;
  title: string;
  items: string[];
}

export interface Job {
  id: string;
  title: string;
  salary: string;
  company: Partial<Company>;
  isUrgent: boolean;
  level: EducationDegree;
  content: Content[];
  major: string[];
}

export type ModalKeys = 'filter';

export type JobsModals = Record<ModalKeys, boolean>;
