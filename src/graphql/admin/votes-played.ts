import { gql } from '@apollo/client';

export const GET_VOTE_RESULTS = gql`
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
