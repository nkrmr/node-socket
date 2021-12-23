import { GamesGains, RandomDrawingFragment } from '../../types/common';

export type RandomDrawingResponse = RandomDrawingFragment[];

export type GamesGainsAvailable = Array<
  Pick<GamesGains, 'gain_id' | 'probability' | 'stock' | 'stock_won'>
>;
