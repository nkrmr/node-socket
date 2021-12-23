"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_VOTE_SELECTION = exports.UPDATE_VOTE_SELECTION = exports.INSERT_VOTE_SELECTION = exports.GET_VOTE_SPECIFICS = exports.INSERT_VOTE = exports.VOTE_FRAGMENT = exports.VOTE_SELECTION_CHOICES_FRAGMENT = exports.VOTE_SELECTIONS_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.VOTE_SELECTIONS_FRAGMENT = client_1.gql `
  fragment VoteSelection on votes_selections {
    id
    vote_id
    selection
    required_choices
    votes_selections_choices {
      ...VoteSelectionChoice
    }
  }
`;
exports.VOTE_SELECTION_CHOICES_FRAGMENT = client_1.gql `
  fragment VoteSelectionChoice on votes_selections_choices {
    id
    label
    vote_selection_id
    asset {
      ...Asset
    }
  }
`;
exports.VOTE_FRAGMENT = client_1.gql `
  fragment Vote on votes {
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
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    votes_selections {
      ...VoteSelection
    }
  }
`;
exports.INSERT_VOTE = client_1.gql `
  mutation insertVote($vote: votes_insert_input!) {
    insert_votes_one(object: $vote) {
      ...Vote
    }
  }
`;
exports.GET_VOTE_SPECIFICS = client_1.gql `
  query getVoteSpecifics($id: uuid!) {
    votes_by_pk(id: $id) {
      id
      votes_selections {
        ...VoteSelection
      }
    }
  }
`;
exports.INSERT_VOTE_SELECTION = client_1.gql `
  mutation insertVoteSelection($object: votes_selections_insert_input!) {
    insert_votes_selections_one(object: $object) {
      ...VoteSelection
      votes_selections_choices {
        ...VoteSelectionChoice
      }
    }
  }
`;
exports.UPDATE_VOTE_SELECTION = client_1.gql `
  mutation updateVoteSelection(
    $id: uuid!
    $updates: votes_selections_set_input!
    $voteSelectionsChoices: [votes_selections_choices_insert_input!]!
  ) {
    delete_votes_selections_choices(
      where: { vote_selection_id: { _eq: $id } }
    ) {
      affected_rows
    }
    insert_votes_selections_choices(objects: $voteSelectionsChoices) {
      affected_rows
    }
    update_votes_selections_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...VoteSelection
      votes_selections_choices {
        ...VoteSelectionChoice
      }
    }
  }
`;
exports.DELETE_VOTE_SELECTION = client_1.gql `
  mutation deleteVoteSelection($id: uuid!) {
    delete_votes_selections_by_pk(id: $id) {
      ...VoteSelection
    }
  }
`;
