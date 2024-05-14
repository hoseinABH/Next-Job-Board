import type { UserRole } from './user';

export interface Position {}

export type ModalKeys = 'filter' | 'internshipApplication';

export type InternshipsModal = Record<ModalKeys, boolean>;

export interface CreatePositionDto {
  title: string;
  grade: number;
  submissionDeadline: Date;
  salary: string;
  description: string;
  userRole: UserRole;
  immediateRecruitment: true;
}
export interface CreatePositionResponse {}

export interface ApplicationDto {
  positionId: number;
  description: string;
}

export interface ApplicationResponse {}

export interface UpdatePositionStatusDto {
  reqId: number;
  requestStatus: number;
}
export interface UpdatePositionStatusResponse {}
