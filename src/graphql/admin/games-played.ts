import { gql } from '@apollo/client';

export const GAMES_PLAYED_PARTICPATIONS_FRAGMENT = gql`
  fragment GamesPlayedParticipationsByDay on games_played_participations_by_day {
    date
    total_count
    game_id
    client_id
    name
  }
`;

export const GAMES_PLAYED_PARTICPATIONS_BY_CURRENT_DAY_HOURS_FRAGMENT = gql`
  fragment GamesPlayedParticipationsByCurrentDayHours on games_played_participations_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
  }
`;

export const GAMES_PLAYED_GAINS_FRAGMENT = gql`
  fragment GamesPlayedGainsByDay on games_played_gains_by_day {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;

export const GAMES_PLAYED_GAINS_BY_CURRENT_DAY_HOURS_FRAGMENT = gql`
  fragment GamesPlayedGainsByCurrentDayHours on games_played_gains_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;

export const GET_GAMES_PLAYED_STATISTIC_BY_CLIENT = gql`
  query getGamesPlayedStatisticByClient($clientId: uuid!) {
    games_played_participations_by_day(
      where: { client_id: { _eq: $clientId } }
    ) {
      ...GamesPlayedParticipationsByDay
    }
    games_played_participations_by_current_day_hours(
      where: { client_id: { _eq: $clientId } }
    ) {
      ...GamesPlayedParticipationsByCurrentDayHours
    }
    games_played_gains_by_day(where: { client_id: { _eq: $clientId } }) {
      ...GamesPlayedGainsByDay
    }
    games_played_gains_by_current_day_hours(
      where: { client_id: { _eq: $clientId } }
    ) {
      ...GamesPlayedGainsByCurrentDayHours
    }
  }
`;

export const GET_GAMES_WINNERS = gql`
  query getGameWinners($game_id: uuid!) {
    games_played(
      where: { gain_id: { _is_null: false }, game_id: { _eq: $game_id } }
    ) {
      id
      played_at
      gain {
        id
        name
      }
      user {
        id
        first_name
        name
      }
    }
  }
`;
