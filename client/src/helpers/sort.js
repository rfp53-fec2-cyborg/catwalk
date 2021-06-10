// for testing
const { reviews } = require ('../../mock-data/reviews.js');

const sort = (results) => {

  // This sort order will prioritize reviews that have been found helpful.
  // The order can be found by subtracting “No” responses from “Yes” responses and sorting
  // such that the highest score appears at the top.
  const quickSortByHelpfulness = (results) => {
    var pivot = results[0];
    var smallArr = [];
    var bigArr = [];

    if (results.length <= 1) {
      return results;
    }

    for (var i = 1; i < results.length; i++) {
      let currentHelpfulness = results[i].helpfulness;
      if (currentHelpfulness < pivot.helpfulness) {
        smallArr.push(results[i]);
      } else {
        bigArr.push(results[i]);
      }
    }
    debugger;

    var sortedSmall = quickSortByHelpfulness(smallArr);
    var sortedBig = quickSortByHelpfulness(bigArr);

    return sortedBig.concat(pivot, sortedSmall);
  };

  // sort based on the date the review was submitted.
  // The most recent reviews should appear first.'
  const quickSortByNewest = (results) => {
    var pivot = results[0];
    var smallArr = [];
    var bigArr = [];

    if (results.length <= 1) {
      return results;
    }

    for (var i = 1; i < results.length; i++) {
      let currentParsedDate = Date.parse(results[i].date);
      if (currentParsedDate < Date.parse(pivot.date)) {
        smallArr.push(results[i]);
      } else {
        bigArr.push(results[i]);
      }
    }

    var sortedSmall = quickSortByNewest(smallArr);
    var sortedBig = quickSortByNewest(bigArr);

    return sortedBig.concat(pivot, sortedSmall);
  };

  const compareNewestandHelpfulForRelevance = () => {
    let helpfulArr = quickSortByHelpfulness(results);
    let newestArr = quickSortByNewest(results);
    let relevantArr = [];

    for (var i = 0; i < helpfulArr.length; i++) {
      if (helpfulArr[i].review_id === newestArr[i].review_id) {
        relevantArr.push(helpfulArr[i]);
      } else {
        relevantArr.push(newestArr[i]);
      }
    }
    return relevantArr;
  };

  var sortedLists = {
    Helpfulness: quickSortByHelpfulness(results),
    Newest: quickSortByNewest(results),
    Relevance: compareNewestandHelpfulForRelevance(),
  };

  return sortedLists;
};

console.log(sort(reviews.results));