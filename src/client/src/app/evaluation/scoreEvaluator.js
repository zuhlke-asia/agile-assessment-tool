function convertToArray(score) {
    const res = Object.keys(score)
        .filter(key => key !== 'text')
        .map(key => ({
            name: key,
            total: score[key].total,
            max: score[key].max
        }));

    if (score.text.length > 0) {
        res.push(...score.text);
    }

    return res;
}

export const evaluateScore = result => {

    const score = {
        text: []
    };

    for (const key of Object.keys(result)) {
        const value = result[key];
        const category = key.split('__')[0];

        if (isNaN(value)) {
            continue;
        }

        if (!score.hasOwnProperty(category)) {
            score[category] = {
                total: 0,
                max: 0
            };
        }

        score[category].total += parseInt(value);
        score[category].max += MAX_POINTS_PER_ANSWER;
    }

    return convertToArray(score);
};

export const MAX_POINTS_PER_ANSWER = 5;