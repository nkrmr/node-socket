import { gql } from '@apollo/client';

export const INFOS_TO_PLAY_QUIZZ_FRAGMENT = gql`
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

export const GET_INFOS_TO_PLAY_QUIZZ = gql`
  query getInfosToPlayQuizz($gameId: uuid!) {
    quizz: quizz_by_pk(id: $gameId) {
      ...InfosToPlayQuizz
    }
  }
`;

export const QUIZZ_PLAYED_FRAGMENT = gql`
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

export const PLAY_QUIZZ = gql`
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

export const QUIZZ_CLIENT_FRAGMENT = gql`
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

export const GET_QUIZZ_BY_ID = gql`
  query getQuizzById($id: uuid!) {
    quizz_by_pk(id: $id) {
      ...QuizzClient
    }
  }
`;
