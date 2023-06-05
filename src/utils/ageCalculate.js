function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const ageCalculate = (day, month, year) => {
  const today = new Date();
  const dd = +String(today.getDate()).padStart(2, '0');
  const mm = +String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = +today.getFullYear();

  const dayInMonth = daysInMonth(month, year);
  if (day > dayInMonth || month > 12 || year > yyyy || (year === yyyy && month > mm) || (year === yyyy && month === mm && day > dd)) {
    return {
      years: '--',
      months: '--',
      days: '--'
    }
  }

  let years = yyyy - year;
  let months = mm - month - (dd < day ? 1 : 0);
  let days = dd - day + 1;

  if (months < 0) {
    months += 12;
    years--;
  }

  if (days < 0) {
    while (days < 0) {
      days += daysInMonth(mm, yyyy);
    }
  }

  const age = {
    years,
    months,
    days
  }
  return age;
}