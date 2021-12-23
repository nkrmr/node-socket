import { gql } from '@apollo/client';

export const GAME_PLAYED_FRAGMENT = gql`
  fragment GamesGainsAvailable on games_gains_available {
    gain_id
    probability
    stock
    stock_won
  }
`;
