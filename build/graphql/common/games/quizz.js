"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_QUIZZ_BY_ID = exports.QUIZZ_CLIENT_FRAGMENT = exports.PLAY_QUIZZ = exports.QUIZZ_PLAYED_FRAGMENT = exports.GET_INFOS_TO_PLAY_QUIZZ = exports.INFOS_TO_PLAY_QUIZZ_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.INFOS_TO_PLAY_QUIZZ_FRAGMENT = client_1.gql `
  fragment InfosToPlayQuizz on quizz {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    winning_percentage
    quizz_questions {
      ...QuizzQuestions
    }
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
`;
exports.GET_INFOS_TO_PLAY_QUIZZ = client_1.gql `
  query getInfosToPlayQuizz($gameId: uuid!) {
    quizz: quizz_by_pk(id: $gameId) {
      ...InfosToPlayQuizz
    }
  }
`;
exports.QUIZZ_PLAYED_FRAGMENT = client_1.gql `
  fragment QuizzPlayed on quizz_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
`;
exports.PLAY_QUIZZ = client_1.gql `
  mutation playQuizz(
    $gameId: uuid!
    $gainId: uuid
    $userId: uuid!
    $score: numeric!
    $time: numeric!
  ) {
    quizzPlayed: insert_quizz_played_one(
      object: {
        game_id: $gameId
        gain_id: $gainId
        user_id: $userId
        score: $score
        time: $time
      }
    ) {
      ...QuizzPlayed
    }
  }
`;
exports.QUIZZ_CLIENT_FRAGMENT = client_1.gql `
  fragment QuizzClient on quizz {
    ...Quizz
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
`;
exports.GET_QUIZZ_BY_ID = client_1.gql `
  query getQuizzById($id: uuid!) {
    quizz_by_pk(id: $id) {
      ...QuizzClient
    }
  }
`;
