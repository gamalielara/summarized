import {endOfMonth, getTime, startOfMonth} from 'date-fns';

const MONTHS = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export const getMonthTimestamps = (
  month: string,
  year: number,
) => {
  // Create a reference date (month is 1-based, but JS Date expects 0-based)
  const referenceDate = new Date(year, MONTHS[month as keyof typeof MONTHS] - 1, 1);

  const firstDay = startOfMonth(referenceDate);
  const lastDay = endOfMonth(referenceDate);

  return {
    firstDayTimestamp: getTime(firstDay),
    lastDayTimestamp: getTime(lastDay),
  };
};
