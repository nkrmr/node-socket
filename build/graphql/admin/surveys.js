"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_SURVEY_QUESTION = exports.UPDATE_SURVEY_QUESTION = exports.INSERT_SURVEY_QUESTION = exports.UPDATE_SURVEY = exports.GET_SURVEY_SPECIFICS = exports.INSERT_SURVEY = exports.SURVEY_FRAGMENT = exports.SURVEY_ANSWERS_FRAGMENT = exports.SURVEY_QUESTIONS_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.SURVEY_QUESTIONS_FRAGMENT = client_1.gql `
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
exports.SURVEY_ANSWERS_FRAGMENT = client_1.gql `
  fragment SurveyQuestionAnswers on surveys_questions_answers {
    id
    answer
  }
`;
exports.SURVEY_FRAGMENT = client_1.gql `
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
exports.INSERT_SURVEY = client_1.gql `
  mutation insertSurvey($survey: surveys_insert_input!) {
    insert_surveys_one(object: $survey) {
      ...Survey
    }
  }
`;
exports.GET_SURVEY_SPECIFICS = client_1.gql `
  query getSurveySpecifics($id: uuid!) {
    surveys_by_pk(id: $id) {
      id
      surveys_questions {
        ...SurveyQuestions
      }
    }
  }
`;
exports.UPDATE_SURVEY = client_1.gql `
  mutation updateSurvey($id: uuid!, $updates: surveys_set_input!) {
    __typename
    update_surveys_by_pk(pk_columns: { id: $id }, _set: $updates) {
      __typename
      ...Survey
    }
  }
`;
exports.INSERT_SURVEY_QUESTION = client_1.gql `
  mutation insertSurveyQuestion($object: surveys_questions_insert_input!) {
    insert_surveys_questions_one(object: $object) {
      ...SurveyQuestions
      surveys_questions_answers {
        ...SurveyQuestionAnswers
      }
    }
  }
`;
exports.UPDATE_SURVEY_QUESTION = client_1.gql `
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
exports.DELETE_SURVEY_QUESTION = client_1.gql `
  mutation deleteSurveyQuestion($id: uuid!) {
    delete_surveys_questions_by_pk(id: $id) {
      id
    }
  }
`;
