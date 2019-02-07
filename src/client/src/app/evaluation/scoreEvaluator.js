
export const evaluate = result => {

    const score = {};

    for (const key of Object.keys(result)) {
        const value = result[key];
        const category = key.split('__')[0];

        if (isNaN(value)) {
            score[category] = value;
            continue;
        }

        if (!score.hasOwnProperty(category)) {
            score[category] = 0;
        }

        score[category] += parseInt(value);
    }

    return score;
};