import type { SelectOption } from '@/components/select-field';
import type {
  Gender,
  Grade,
  MaritalStatus,
  MilitaryService,
  ResumeEntity,
  SeniorityLevel,
} from '@/types/user';

export const mapEducationGrade: Record<Grade, string> = {
  0: 'دانشجو',
  1: 'دیپلم',
  2: 'کارشناسی',
  3: 'کارشناسی ارشد',
  4: 'دکترا',
  5: 'پرفسورا',
};
export const educationGradeOptions: SelectOption[] = [
  { title: 'دانشجو', value: 0 },
  { title: 'دیپلم', value: 1 },
  { title: 'کارشناسی', value: 2 },
  { title: 'کارشناسی ارشد', value: 3 },
  { title: 'دکترا', value: 4 },
  { title: 'پرفسورا', value: 5 },
];

export const mapMaritalStatus: Record<MaritalStatus, string> = {
  0: 'مجرد',
  1: 'متاهل',
};
export const martialOptions: SelectOption[] = [
  {
    value: 0,
    title: 'مجرد',
  },
  {
    value: 1,
    title: 'متاهل',
  },
];

export const mapGender: Record<Gender, string> = {
  0: 'آقا',
  1: 'خانم',
};

export const genderOptions: SelectOption[] = [
  {
    value: 0,
    title: 'مرد',
  },
  {
    value: 1,
    title: 'زن',
  },
];

export const mapMilitaryService: Record<MilitaryService, string> = {
  0: 'مشمول',
  1: 'درحال خدمت',
  2: 'معافیت',
  3: 'معافیت تحصیلی',
  4: 'معافیت غیرپزشکی',
  5: 'معافیت پزشکی',
};

export const militaryServiceOptions: SelectOption[] = [
  {
    value: 0,
    title: 'مشمول',
  },
  {
    value: 1,
    title: 'درحال انجام',
  },
  {
    value: 2,
    title: 'معافیت',
  },
  {
    value: 3,
    title: 'معافیت تحصیلی',
  },
  {
    value: 4,
    title: 'معافیت غیرپزشکی',
  },
  {
    value: 5,
    title: 'معافیت پزشکی',
  },
];

export const seniorityLevelOptions: SelectOption[] = [
  {
    value: 0,
    title: 'مبتدی',
  },
  {
    value: 1,
    title: 'کارشناس',
  },
  {
    value: 2,
    title: 'کارشناس ارشد',
  },
  {
    value: 3,
    title: 'متخصص',
  },
  {
    value: 4,
    title: 'مدیر',
  },
  {
    value: 5,
    title: 'مدیر ارشد',
  },
];
export const mapSeniorityLevel: Record<SeniorityLevel, string> = {
  0: 'مبتدی',
  1: 'کارشناس',
  2: 'کارشناس ارشد',
  3: 'متخصص',
  4: 'مدیر',
  5: 'مدیر ارشد',
};

export const mapEntityToEndpoint: Record<ResumeEntity, string> = {
  education: 'delete-education?expId',
  workExperience: 'delete-work-experience?expId',
  language: 'delete-language?langId',
  skill: 'delete-skill?skillId',
};
