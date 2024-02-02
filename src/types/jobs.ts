import type { Company } from './company';

export interface Job {
  title: string;
  salary: string;
  company: Partial<Company>;
  isUrgent: boolean;
}

export type ModalKeys = 'filter';

export type JobsModals = Record<ModalKeys, boolean>;
