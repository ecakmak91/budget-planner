export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

export function dayBefore(dayBefore: number): Date {
  const newDate = new Date();

  // Subtract 7 days (7 * 24 * 60 * 60 * 1000 milliseconds)
  newDate.setTime(newDate.getTime() - dayBefore * 24 * 60 * 60 * 1000);

  return newDate;
}
