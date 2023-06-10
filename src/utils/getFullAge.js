export function getFullAge(day, month, year) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  const dayInMonth = new Date(year, month, 0).getDate();
  if (day > dayInMonth || month > 12 || year > yyyy || (year === yyyy && month > mm) || (year === yyyy && month === mm && day > dd)) {
    return {
      years: '--',
      months: '--',
      days: '--'
    }
  }

  let ageYears = yyyy - year;
  let ageMonths = mm - month;
  let ageDays = dd - day;

  if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
    ageYears -= 1;
    ageMonths = 12 + ageMonths;
    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays = 31 + ageDays;
    }
  }

  if (ageDays < 0) {
    const lastMonth = new Date(yyyy, mm - 1, 0).getDate();
    ageDays = lastMonth - day + dd;
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays
  };
}