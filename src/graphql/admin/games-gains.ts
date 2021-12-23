import { gql } from '@apollo/client';

export const GAMES_GAINS_FRAGMENT = gql`
  fragment GamesGains on games_gains {
    game_id
    gain_id
    stock
    stock_won
    is_active
    probability
    gain {
      ...Gain
    }
  }
`;

export const INSERT_GAME_GAIN = gql`
  mutation insertGameGain($gameGain: games_gains_insert_input!) {
    insert_games_gains_one(object: $gameGain) {
      ...GamesGains
    }
  }
`;

export const UPDATE_GAME_GAIN = gql`
  mutation updateGameGain(
    $gameId: uuid!
    $gainId: uuid!
    $gameGain: games_gains_set_input!
  ) {
    update_games_gains_by_pk(
      pk_columns: { game_id: $gameId, gain_id: $gainId }
      _set: $gameGain
    ) {
      ...GamesGains
    }
  }
`;

export const DELETE_GAME_GAIN = gql`
  mutation deleteGameGain($gameId: uuid!, $gainId: uuid!) {
    delete_games_gains_by_pk(game_id: $gameId, gain_id: $gainId) {
      ...GamesGains
    }
  }
`;
