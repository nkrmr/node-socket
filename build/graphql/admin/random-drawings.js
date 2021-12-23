"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSERT_RANDOM_DRAWINGS = exports.GET_GAME_RANDOM_DRAWINGS = exports.GET_VOTE_PLAYERS = exports.GET_QUIZZ_PLAYERS = exports.GET_AR_PLAYERS = exports.VERIFY_RANDOM_DRAWINGS_INFOS = exports.RANDOM_DRAWING_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.RANDOM_DRAWING_FRAGMENT = client_1.gql `
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
exports.VERIFY_RANDOM_DRAWINGS_INFOS = client_1.gql `
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
exports.GET_AR_PLAYERS = client_1.gql `
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
exports.GET_QUIZZ_PLAYERS = client_1.gql `
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
exports.GET_VOTE_PLAYERS = client_1.gql `
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
exports.GET_GAME_RANDOM_DRAWINGS = client_1.gql `
  query getGameRandomDrawings($gameId: uuid!) {
    random_drawings(where: { game_id: { _eq: $gameId } }) {
      ...RandomDrawing
    }
  }
`;
exports.INSERT_RANDOM_DRAWINGS = client_1.gql `
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
