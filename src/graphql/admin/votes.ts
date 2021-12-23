import { gql } from '@apollo/client';

export const VOTE_SELECTIONS_FRAGMENT = gql`
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

export const VOTE_SELECTION_CHOICES_FRAGMENT = gql`
  fragment VoteSelectionChoice on votes_selections_choices {
    id
    label
    vote_selection_id
    asset {
      ...Asset
    }
  }
`;

export const VOTE_FRAGMENT = gql`
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

export const INSERT_VOTE = gql`
  mutation insertVote($vote: votes_insert_input!) {
    insert_votes_one(object: $vote) {
      ...Vote
    }
  }
`;

export const GET_VOTE_SPECIFICS = gql`
  query getVoteSpecifics($id: uuid!) {
    votes_by_pk(id: $id) {
      id
      votes_selections {
        ...VoteSelection
      }
    }
  }
`;

export const INSERT_VOTE_SELECTION = gql`
  mutation insertVoteSelection($object: votes_selections_insert_input!) {
    insert_votes_selections_one(object: $object) {
      ...VoteSelection
      votes_selections_choices {
        ...VoteSelectionChoice
      }
    }
  }
`;

export const UPDATE_VOTE_SELECTION = gql`
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

export const DELETE_VOTE_SELECTION = gql`
  mutation deleteVoteSelection($id: uuid!) {
    delete_votes_selections_by_pk(id: $id) {
      ...VoteSelection
    }
  }
`;
