import { gql } from '@apollo/client';

export const RANDOM_DRAWING_FRAGMENT = gql`
  fragment RandomDrawing on random_drawings {
    __typename
    id
    created_at
    game_id
    gain {
      __typename
      id
      name
      stock
    }
    winner {
      __typename
      id
      name
      first_name
    }
  }
`;

export const VERIFY_RANDOM_DRAWINGS_INFOS = gql`
  query verifyRandomDrawingInfos($gameId: uuid!, $gainsIds: [uuid!]!) {
    game: games_by_pk(id: $gameId) {
      client_id
    }
    gains(where: { id: { _in: $gainsIds } }) {
      id
      client_id
      name
      stock
    }
  }
`;

export const GET_AR_PLAYERS = gql`
  query getArPlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
  ) {
    players: ar_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
      }
    ) {
      user_id
    }
  }
`;

export const GET_QUIZZ_PLAYERS = gql`
  query getQuizzPlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
    $minScore: numeric
  ) {
    players: quizz_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
        score: { _gte: $minScore }
      }
    ) {
      user_id
    }
  }
`;

export const GET_VOTE_PLAYERS = gql`
  query getVotePlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
  ) {
    players: votes_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
      }
    ) {
      user_id
    }
  }
`;

export const GET_GAME_RANDOM_DRAWINGS = gql`
  query getGameRandomDrawings($gameId: uuid!) {
    random_drawings(where: { game_id: { _eq: $gameId } }) {
      ...RandomDrawing
    }
  }
`;

export const INSERT_RANDOM_DRAWINGS = gql`
  mutation insertRandomDrawings(
    $randomDrawingsInput: [random_drawings_insert_input!]!
  ) {
    randomDrawings: insert_random_drawings(objects: $randomDrawingsInput) {
      returning {
        ...RandomDrawing
      }
    }
  }
`;
