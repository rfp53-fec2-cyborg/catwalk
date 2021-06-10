export const sort = (results) => {

  var sortedLists = {
    Helpfulness: [],
    Newest: [],
    Relevant: [],
  };

  const quickSort = (results, criteria) => {
    var pivot = results[0];
    var smallArr = [];
    var bigArr = [];

    if (results.length <= 1) {
      return results;
    }

    for (var i = 1; i < results.length; i++) {
      var options = {
        helpful: [results[i].helpfulness, pivot.helpfulness],
        newest: [Date.parse(results[i].date), Date.parse(pivot.date)]
      };

      if (options[criteria][0] < options[criteria][1]) {
        smallArr.push(results[i]);
      } else {
        bigArr.push(results[i]);
      }
    }

    var sortedSmall = quickSort(smallArr, criteria);
    var sortedBig = quickSort(bigArr, criteria);

    return sortedBig.concat(pivot, sortedSmall);
  };

  (function compareNewestandHelpfulForRelevance() {
    let helpfulArr = quickSort(results, 'helpful');
    let newestArr = quickSort(results, 'newest');
    let relevantArr = [];

    for (var i = 0; i < helpfulArr.length; i++) {
      if (helpfulArr[i].review_id === newestArr[i].review_id) {
        relevantArr.push(helpfulArr[i]);
      } else {
        relevantArr.push(newestArr[i]);
      }
    }
    sortedLists.Helpful = helpfulArr;
    sortedLists.Newest = newestArr;
    sortedLists.Relevant = relevantArr;
  })();

  return sortedLists;
};