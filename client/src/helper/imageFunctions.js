var validImgTypes = ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp'];

const checkValidPhoto = (stringUrl) => {
  const cleanStringUrl = stringUrl.substring(stringUrl.length - 5);
  const fileType = cleanStringUrl.substring(cleanStringUrl.indexOf('.') + 1);
  if (validImgTypes.indexOf(fileType) > -1) {
    return stringUrl;
  } else {
    // return "image not found" instead of a broken image file on the front-end
    return 'https://i.imgur.com/R7mqXKL.png';
  }
};

module.exports = {
  checkValidPhoto
};