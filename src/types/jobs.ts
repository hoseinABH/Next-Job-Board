import type { EducationDegree, MilitaryStatus } from './user';
import type { Company } from './company';

export type PositionStatus = 'Draft' | 'Active' | 'Inactive';

export interface Job {
  id: string;
  title: string;
  description: string;
  salary: number | string;
  requiredEducationLevels: EducationDegree[];
  fieldOfStudy: string[];
  status: PositionStatus;
  militaryServiceStatus: MilitaryStatus[];
  badges: string[];
  company: Company;
}

export type ModalKeys = 'filter' | 'jobApplication';

export type JobsModals = Record<ModalKeys, boolean>;
