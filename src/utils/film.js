const film = {
  'Bad': [0, 3],
  'Normal': [3, 6],
  'Good': [6, 8],
  'Very good': [8, 10]
};

export const getRatingString = (ratingFilm) => {
  for (let prop in film) {
    if ((ratingFilm >= film[prop][0]) && (ratingFilm < film[prop][1])) {
      return prop;
    }
  }
  return `Awesome`;
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + `h ` + minutes + `m`;
};

export const splitReviewsCol = (array) => {
  return {
    first: array.filter((v, i) => !(i % 2)),
    second: array.filter((v, i) => i % 2),
  };
};
