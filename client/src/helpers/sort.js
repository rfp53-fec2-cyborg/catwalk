export const sort = (data) => {

  var results = {
    Relevance: [],
    Helpful: [],
    Newest: []
  };
  // Relevance will be determined by a combination of both the date that the review was submitted
  // as well as ‘helpfulness’ feedback received.
  // This combination should weigh the two characteristics such that recent
  // reviews appear near the top, but do not outweigh reviews that have been found helpful.
  // Similarly, reviews that have been helpful should appear near the top,
  // but should yield to more recent reviews if they are older.

  // This sort order will prioritize reviews that have been found helpful.
  // The order can be found by subtracting “No” responses from “Yes” responses and sorting
  // such that the highest score appears at the top.

  // sort based on the date the review was submitted.
  // The most recent reviews should appear first.

  return results;
};