"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spliceRandomElement = exports.getRandomGain = void 0;
/**
 * This function produces a random number, check if this number is between the gains' probabilities and
 * return the gain won or undefined.
 * @param gains Array of gains' informations (id and probability) ordered by probability asc (a big probability could hide lower probabilities if ordered before)
 */
const getRandomGain = (gains, keepCumulatedProbability) => {
    if (!gains.length)
        return undefined;
    let availableGains = [];
    let availableGainsProbability = 0;
    let totalGainsProbability = 0;
    gains.forEach(g => {
        if (g.stock === -9999 || g.stock > g.stock_won) {
            availableGains.push(g);
            availableGainsProbability += g.probability;
        }
        totalGainsProbability += g.probability;
    });
    if (keepCumulatedProbability) {
        availableGains = availableGains.map(g => ({
            ...g,
            probability: (g.probability * totalGainsProbability) / availableGainsProbability,
        }));
    }
    const random = Math.random();
    let gainId;
    let i = 0;
    let prevGainProb = 0;
    while (i < availableGains.length && !gainId) {
        const gainProb = prevGainProb + availableGains[i].probability;
        if (random >= prevGainProb && random < gainProb)
            gainId = availableGains[i].gain_id;
        prevGainProb = gainProb;
        ++i;
    }
    return gainId;
};
exports.getRandomGain = getRandomGain;
const spliceRandomElement = (elements) => {
    if (!elements.length)
        return undefined;
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements.splice(randomIndex, 1)[0];
};
exports.spliceRandomElement = spliceRandomElement;
