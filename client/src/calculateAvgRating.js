export default function findAvgRating(ratingsObj) {
  let responses = 0;
  let score = 0;
  const ratings = Object.values(ratingsObj);

  ratings.forEach((rating, i) => {
    responses += (Number(rating)); // does it really come through as a string??
    score += (rating * (i + 1));
  });

  const average = score / responses;

  return Math.round(average * 10) / 10; // round to nearest 10th.
}

// let test = { '1': '10', '2': '15', '3': '20', '4': '25', '5': '50' }
// client/src/calculateAvgRating.js
