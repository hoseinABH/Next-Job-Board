export const mapLanguageLevel: Record<number, string> = {
  1: 'مبتدی',
  2: 'متوسط',
  3: 'کارشناس',
  4: 'متخصص',
  5: 'حرفه ای',
};
interface LanguageLevelOption {
  value: number;
  title: string;
}
export const levelOptions: LanguageLevelOption[] = [
  {
    value: 1,
    title: 'مبتدی',
  },
  {
    value: 2,
    title: 'متوسط',
  },
  {
    value: 3,
    title: 'پیشرفته',
  },
  {
    value: 4,
    title: 'حرفه ای',
  },
];

export const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
