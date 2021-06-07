var validImgTypes = ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp'];

const checkValidPhoto = (stringUrl) => {
  const cleanStringUrl = stringUrl.substring(stringUrl.length - 5);
  const fileType = cleanStringUrl.substring(cleanStringUrl.indexOf('.') + 1);
  if (validImgTypes.indexOf(fileType) > -1) {
    return stringUrl;
  } else {
    return 'https://i.imgur.com/R7mqXKL.png';
  }
};

module.exports = {
  checkValidPhoto
};