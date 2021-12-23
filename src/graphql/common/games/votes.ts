import { gql } from '@apollo/client';

export const VOTE_CLIENT_FRAGMENT = gql`
  fragment VoteClient on votes {
    ...Vote
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
`;

export const INFOS_TO_PLAY_VOTE_FRAGMENT = gql`
  fragment InfosToPlayVote on votes {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
`;

export const GET_INFOS_TO_PLAY_VOTE = gql`
  query getInfosToPlayVote($gameId: uuid!) {
    vote: votes_by_pk(id: $gameId) {
      ...InfosToPlayVote
    }
  }
`;

export const VOTE_PLAYED_FRAGMENT = gql`
  fragment VotePlayed on votes_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
`;

export const PLAY_VOTE = gql`
  mutation playVote(
    $gameId: uuid!
    $gainId: uuid
    $userId: uuid!
    $results: jsonb!
  ) {
    votePlayed: insert_votes_played_one(
      object: {
        game_id: $gameId
        gain_id: $gainId
        user_id: $userId
        results: $results
      }
    ) {
      ...VotePlayed
    }
  }
`;

export const GET_VOTE_BY_ID = gql`
  query getVoteById($id: uuid!) {
    votes_by_pk(id: $id) {
      ...VoteClient
    }
  }
`;
