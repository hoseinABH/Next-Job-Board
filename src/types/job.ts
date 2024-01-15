import type { Company } from './company';

export type JobType = 'full-time' | 'part-time' | 'temporary' | 'freelance';

export interface Job {
  title: string;
  jobType: JobType;
  salary: string;
  company: Partial<Company>;
  isUrgent: boolean;
}
