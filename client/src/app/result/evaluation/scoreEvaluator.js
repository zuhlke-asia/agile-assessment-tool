function convertToArray(score) {
  return Object.keys(score)
    .filter((key) => key !== 'text')
    .map((key) => ({
      name: key,
      total: score[key].total,
      max: score[key].max,
    }));
}

export const evaluateScore = (result) => {
  const score = {};

  for (const key of Object.keys(result)) {
    const value = result[key];
    const category = key.split('__')[0];

    if (isNaN(value) || category === 'additional') {
      continue;
    }

    const valueAsInt = parseInt(value);

    if (valueAsInt < 0) {
      continue;
    }

    if (!score.hasOwnProperty(category)) {
      score[category] = {
        total: 0,
        max: 0,
      };
    }

    score[category].total += valueAsInt;
    score[category].max += MAX_POINTS_PER_ANSWER;
  }

  return convertToArray(score);
};

export const MAX_POINTS_PER_ANSWER = 5;
