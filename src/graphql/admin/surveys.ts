import { gql } from '@apollo/client';

export const SURVEY_QUESTIONS_FRAGMENT = gql`
  fragment SurveyQuestions on surveys_questions {
    id
    survey_id
    question
    asset_id
    asset {
      ...Asset
    }
    surveys_questions_answers {
      ...SurveyQuestionAnswers
    }
  }
`;

export const SURVEY_ANSWERS_FRAGMENT = gql`
  fragment SurveyQuestionAnswers on surveys_questions_answers {
    id
    answer
  }
`;

export const SURVEY_FRAGMENT = gql`
  fragment Survey on surveys {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    address
    created_at
    type_id
    location
    city
    type {
      ...CommunicationType
    }
    surveys_questions {
      ...SurveyQuestions
    }
  }
`;

export const INSERT_SURVEY = gql`
  mutation insertSurvey($survey: surveys_insert_input!) {
    insert_surveys_one(object: $survey) {
      ...Survey
    }
  }
`;

export const GET_SURVEY_SPECIFICS = gql`
  query getSurveySpecifics($id: uuid!) {
    surveys_by_pk(id: $id) {
      id
      surveys_questions {
        ...SurveyQuestions
      }
    }
  }
`;

export const UPDATE_SURVEY = gql`
  mutation updateSurvey($id: uuid!, $updates: surveys_set_input!) {
    __typename
    update_surveys_by_pk(pk_columns: { id: $id }, _set: $updates) {
      __typename
      ...Survey
    }
  }
`;

export const INSERT_SURVEY_QUESTION = gql`
  mutation insertSurveyQuestion($object: surveys_questions_insert_input!) {
    insert_surveys_questions_one(object: $object) {
      ...SurveyQuestions
      surveys_questions_answers {
        ...SurveyQuestionAnswers
      }
    }
  }
`;

export const UPDATE_SURVEY_QUESTION = gql`
  mutation updateSurveyQuestion(
    $id: uuid!
    $updates: surveys_questions_set_input!
    $surveysQuestionsAnswers: [surveys_questions_answers_insert_input!]!
  ) {
    delete_surveys_questions_answers(
      where: { survey_question_id: { _eq: $id } }
    ) {
      affected_rows
    }
    insert_surveys_questions_answers(objects: $surveysQuestionsAnswers) {
      affected_rows
    }
    update_surveys_questions_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...SurveyQuestions
      surveys_questions_answers {
        ...SurveyQuestionAnswers
      }
    }
  }
`;

export const DELETE_SURVEY_QUESTION = gql`
  mutation deleteSurveyQuestion($id: uuid!) {
    delete_surveys_questions_by_pk(id: $id) {
      id
    }
  }
`;
