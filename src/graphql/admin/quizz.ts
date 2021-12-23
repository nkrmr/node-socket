import { gql } from '@apollo/client';

export const QUIZZ_QUESTIONS_FRAGMENT = gql`
  fragment QuizzQuestions on quizz_questions {
    id
    quizz_id
    question
    asset_id
    time
    total_points
    asset {
      ...Asset
    }
    quizz_questions_answers {
      ...QuizzQuestionAnswers
    }
  }
`;

export const QUIZZ_ANSWERS_FRAGMENT = gql`
  fragment QuizzQuestionAnswers on quizz_questions_answers {
    id
    answer
    is_correct
    points
  }
`;

export const QUIZZ_FRAGMENT = gql`
  fragment Quizz on quizz {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    description
    gtc
    instructions
    address
    radius
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    winning_percentage
    ordered_questions
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    quizz_questions {
      ...QuizzQuestions
    }
  }
`;

export const GET_QUIZZ_SPECIFIC = gql`
  query getQuizzSpecifics($id: uuid!) {
    quizz_by_pk(id: $id) {
      id
      winning_percentage
      ordered_questions
      quizz_questions {
        ...QuizzQuestions
      }
    }
  }
`;

export const INSERT_QUIZZ = gql`
  mutation insertQuizz($quizz: quizz_insert_input!) {
    insert_quizz_one(object: $quizz) {
      ...Quizz
    }
  }
`;

export const UPDATE_QUIZZ = gql`
  mutation updateQuizz($quizzId: uuid!, $quizz: quizz_set_input!) {
    __typename
    update_quizz_by_pk(pk_columns: { id: $quizzId }, _set: $quizz) {
      __typename
      ...Quizz
    }
  }
`;

export const INSERT_QUIZZ_QUESTION = gql`
  mutation insertQuizzQuestion($object: quizz_questions_insert_input!) {
    insert_quizz_questions_one(object: $object) {
      ...QuizzQuestions
      quizz_questions_answers {
        ...QuizzQuestionAnswers
      }
    }
  }
`;

export const UPDATE_QUIZZ_QUESTION = gql`
  mutation updateQuizzQuestion(
    $id: uuid!
    $updates: quizz_questions_set_input!
    $quizzQuestionsAnswers: [quizz_questions_answers_insert_input!]!
  ) {
    delete_quizz_questions_answers(where: { quizz_question_id: { _eq: $id } }) {
      affected_rows
    }
    insert_quizz_questions_answers(objects: $quizzQuestionsAnswers) {
      affected_rows
    }
    update_quizz_questions_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...QuizzQuestions
      quizz_questions_answers {
        ...QuizzQuestionAnswers
      }
    }
  }
`;

export const DELETE_QUIZZ_QUESTION = gql`
  mutation deleteQuizzQuestion($id: uuid!) {
    delete_quizz_questions_by_pk(id: $id) {
      ...QuizzQuestions
    }
  }
`;
