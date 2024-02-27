export function persianDate(date: string) {
  return new Date(date).toLocaleDateString('fa-IR');
}
