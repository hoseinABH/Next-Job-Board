import type { MilitaryStatus } from './resume';
import type { Company } from './company';

export type PositionStatus = 'Draft' | 'Active' | 'Inactive';
export type RequiredEducationLevel =
  | 'None'
  | 'HighSchool'
  | 'Diploma'
  | 'Bachelor'
  | 'Master'
  | 'PhD'
  | 'PostDoctoral';

export interface Job {
  id: string;
  companyId: string;
  title: string;
  description: string;
  salary: number;
  requiredEducationLevels: RequiredEducationLevel[];
  fieldOfStudy: string;
  applicationDeadline: Date;
  status: PositionStatus;
  militaryServiceStatus: MilitaryStatus[];
  badges: string[];
  company: Company;
}

export type ModalKeys = 'filter' | 'jobApplication';

export type JobsModals = Record<ModalKeys, boolean>;
