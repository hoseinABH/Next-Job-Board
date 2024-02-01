import type { Company } from './company';

export interface Job {
  title: string;
  salary: string;
  company: Partial<Company>;
  isUrgent: boolean;
}
