const month = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

const stringToDate = (dateString) => {
  var stringWithoutTime = dateString.substring(0, 10);
  var splitDate = stringWithoutTime.split('-'); // e.g. YYYY / MM / DD ["2021", "06", "05"]
  var dateStr = `${month[splitDate[1]]} ${splitDate[2].replace(/^0+/, '')}, ${splitDate[0]}`;
  return dateStr;
};

module.exports = {
  stringToDate
};