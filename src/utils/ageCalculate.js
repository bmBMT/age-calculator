function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const ageCalculate = (currentDate, day, month, year) => {
  const currentYear = currentDate.year;
  const currentMonth = currentDate.month;
  const currentDay = currentDate.day;
  const dayInMonth = daysInMonth(month, year);
  if (day > dayInMonth || month > 12 || year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDay)) {
    return {
      years: '--',
      months: '--',
      days: '--'
    }
  }

  let years = currentDate.year - year;
  let months = currentDate.month - month - (currentDate.day < day ? 1 : 0);
  let days = currentDate.day - day + 1;

  if (months < 0) {
    months += 12;
    years--;
  }

  if (days < 0) {
    while (days < 0) {
      days += daysInMonth(currentDate.month, currentDate.year);
    }
  }

  const age = {
    years,
    months,
    days
  }
  return age;
}