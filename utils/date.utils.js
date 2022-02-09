const WEEKDAYS_EN = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const WEEKDAYS_FR = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

/**
 * Function used to get a clean date from the date passed in argument to use as a boundary for search on dates in Db
 * @param {Date} date - a date, set at any time of the day
 * @returns {Date} date - the same date, but set at the very beginning of the day
 */
function getCleanDateFromDate(date) {
  console.log('--- getCleanDateFromDate - date', date);

  // get the string "yyyy-mm-dd" from date
  const strDate = date.toISOString().slice(0, 10);
  console.log('strDate', strDate);

  // return the date set to the beginning of the day
  return new Date(strDate);
}

/**
 * Function used to get a clean date from the date passed in argument to use as a boundary for search on dates in Db
 * @param {string} stringDate - a date as string, set at any time of the day
 * @returns {Date} date - the same date, but set at the very beginning of the day
 */
function getCleanDateFromStringDate(stringDate) {
  console.log('--- getCleanDateFromStringDate - stringDate', stringDate);

  // get the string "yyyy-mm-dd" from date
  const strDate = stringDate.slice(0, 10);
  console.log('strDate', strDate);

  // return the date set to the beginning of the day
  return new Date(strDate);
}

function getMondayBeforeOrEqual(date) {
  console.log('--- getMondayBeforeOrEqual - date', date);

  let givenDate;
  if (typeof date === 'string') givenDate = getCleanDateFromStringDate(date);
  else if (date instanceof Date) givenDate = getCleanDateFromDate(date);
  else return -1;
  console.log('givenDate', givenDate);

  const givenDateWeekday = givenDate.getDay();
  console.log('givenDateWeekday', givenDateWeekday);
  const offset =
    (WEEKDAYS_EN.indexOf('Monday') - givenDateWeekday - WEEKDAYS_EN.length) %
    WEEKDAYS_EN.length;
  console.log('offset', offset);

  let mondayDate = new Date(givenDate);
  mondayDate.setDate(givenDate.getDate() + offset);
  mondayDate.setUTCHours(00, 00, 00, 000);

  console.log('mondayDate', mondayDate);
  return mondayDate;
}

function getSundayAfterOrEqual(date) {
  // console.log('--- getSundayAfterOrEqual - date', date);

  let givenDate;
  if (typeof date === 'string') givenDate = getCleanDateFromStringDate(date);
  else if (date instanceof Date) givenDate = getCleanDateFromDate(date);
  else return -1;

  const givenDateWeekday = givenDate.getDay();
  const offset =
    (WEEKDAYS_EN.indexOf('Sunday') - givenDateWeekday + WEEKDAYS_EN.length) %
    WEEKDAYS_EN.length;
  // console.log('offset', offset);

  let sundayDate = new Date(givenDate);
  sundayDate.setDate(givenDate.getDate() + offset);
  // finally, set it just 1ms before the day after
  sundayDate.setUTCHours(23, 59, 59, 999);

  // console.log('sundayDate', sundayDate);
  return sundayDate;
}

function getWeekDates(date) {
  console.log('--- getWeekDates');
  const weekDates = [];
  const mondayStart = getMondayBeforeOrEqual(date);
  let mondayEnd = new Date(mondayStart);
  mondayEnd.setDate(mondayStart.getDate());
  mondayEnd.setUTCHours(23, 59, 59, 999);
  weekDates.push({ start: mondayStart, end: mondayEnd });
  console.log('monday', mondayStart, mondayEnd);

  for (let i = 1; i < 7; i++) {
    let nextStart = new Date(mondayStart);
    nextStart.setDate(mondayStart.getDate() + i);
    // console.log('i, nextStart', i, nextStart);
    let nextEnd = new Date(mondayEnd);
    nextEnd.setDate(mondayEnd.getDate() + i);
    // console.log('i, nextEnd', i, nextEnd);
    weekDates.push({ start: nextStart, end: nextEnd });
  }
  console.log('weekDates', weekDates);

  return weekDates;
}

function getDayFiltersFromMonToSun(date) {
  console.log('--- getDayFiltersFromMonToSun - date', date);

  const weekDates = getWeekDates(date);
  const dayFilters = [];

  weekDates.forEach((weekDate) => {
    let dateFilter = null;
    dateFilter = {
      date: {
        $gte: weekDate.start.toISOString(),
        $lte: weekDate.end.toISOString(),
      },
    };
    dayFilters.push(dateFilter);
  });
  console.log('dayFilters', dayFilters);
  return dayFilters;
}

function getWeekFilterFromMonToSun(date) {
  console.log('--- getWeekFilterFromMonToSun - date', date);

  const mondayDate = getMondayBeforeOrEqual(date);
  const sundayDate = getSundayAfterOrEqual(date);

  let dateFilter = null;
  if (mondayDate !== -1 && sundayDate !== -1)
    dateFilter = {
      date: { $gte: mondayDate.toISOString(), $lte: sundayDate.toISOString() },
    };
  return dateFilter;
}

const datesAreOnSameDay = (first, second) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

function whichDay(date) {
  const day = new Array(
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
  );

  return day[date.getDay() - 1];
}

module.exports = {
  getDayFiltersFromMonToSun,
  getWeekFilterFromMonToSun,
  getWeekDates,
  datesAreOnSameDay,
};
