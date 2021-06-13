export const storeCharacteristicsInArray = (characteristics) => {
  var result = [];
  for (var key in characteristics) {
    var obj = {};
    obj.characteristic = key;
    obj.details = characteristics[key];
    result.push(obj);
  }
  return result;
};