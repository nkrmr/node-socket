"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_VOTE_RESULTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_VOTE_RESULTS = client_1.gql `
  query getVoteResults($gameId: uuid!) {
    votes_selections(where: { vote_id: { _eq: $gameId } }) {
      id
      selection
      votes_selections_choices {
        id
        label
      }
    }
    votes_played(where: { game_id: { _eq: $gameId } }) {
      id
      game_id
      played_at
      results
      user_id
    }
  }
`;
