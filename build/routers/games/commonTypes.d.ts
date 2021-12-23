import { GamesGains, RandomDrawingFragment } from '../../types/common';
export declare type RandomDrawingResponse = RandomDrawingFragment[];
export declare type GamesGainsAvailable = Array<Pick<GamesGains, 'gain_id' | 'probability' | 'stock' | 'stock_won'>>;
