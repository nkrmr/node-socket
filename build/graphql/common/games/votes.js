"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_VOTE_BY_ID = exports.PLAY_VOTE = exports.VOTE_PLAYED_FRAGMENT = exports.GET_INFOS_TO_PLAY_VOTE = exports.INFOS_TO_PLAY_VOTE_FRAGMENT = exports.VOTE_CLIENT_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.VOTE_CLIENT_FRAGMENT = client_1.gql `
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
exports.INFOS_TO_PLAY_VOTE_FRAGMENT = client_1.gql `
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
exports.GET_INFOS_TO_PLAY_VOTE = client_1.gql `
  query getInfosToPlayVote($gameId: uuid!) {
    vote: votes_by_pk(id: $gameId) {
      ...InfosToPlayVote
    }
  }
`;
exports.VOTE_PLAYED_FRAGMENT = client_1.gql `
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
exports.PLAY_VOTE = client_1.gql `
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
exports.GET_VOTE_BY_ID = client_1.gql `
  query getVoteById($id: uuid!) {
    votes_by_pk(id: $id) {
      ...VoteClient
    }
  }
`;
