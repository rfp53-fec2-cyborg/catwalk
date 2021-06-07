const checkStringLength = (string, maxLength) => {
  if (string.length > maxLength) {
    return string.substring(0, maxLength).concat('...');
  } else {
    return string;
  }
};

module.exports = {
  checkStringLength
};