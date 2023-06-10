export function ageCalculate(birthDay, birthMonth, birthYear) {
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const thisDay = today.getDate();

  let ageYears = thisYear - birthYear;
  let ageMonths = thisMonth - birthMonth;
  let ageDays = thisDay - birthDay;

  if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
    ageYears -= 1;
    ageMonths = 12 + ageMonths;
    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays = 31 + ageDays;
    }
  }

  if (ageDays < 0) {
    const lastMonth = new Date(thisYear, thisMonth - 1, 0).getDate();
    ageDays = lastMonth - birthDay + thisDay;
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays
  };
}