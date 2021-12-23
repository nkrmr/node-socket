import { GamesGainsAvailable } from '../routers/games/commonTypes';
/**
 * This function produces a random number, check if this number is between the gains' probabilities and
 * return the gain won or undefined.
 * @param gains Array of gains' informations (id and probability) ordered by probability asc (a big probability could hide lower probabilities if ordered before)
 */
export declare const getRandomGain: (gains: GamesGainsAvailable, keepCumulatedProbability: boolean) => string | undefined;
export declare const spliceRandomElement: (elements: string[]) => string | undefined;
