/**
 * Function used to get a clean date from the date passed in argument to use as a boundary for serach on dates in Db
 *
 * @param {*} date
 * @returns the same date set to the beginning of the day
 */
function getCleanDate(date) {
  // get the string "yyyy-mm-dd" from date
  const strDate = date.toISOString().slice(0, 10);

  // return the date set to the beginning of the day
  return new Date(strDate);
}

module.exports = { getCleanDate };
