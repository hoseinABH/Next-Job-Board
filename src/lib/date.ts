export function persianDate(date: Date) {
  return new Date(date).toLocaleDateString('fa-IR');
}
