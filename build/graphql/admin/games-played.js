"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GAMES_WINNERS = exports.GET_GAMES_PLAYED_STATISTIC_BY_CLIENT = exports.GAMES_PLAYED_GAINS_BY_CURRENT_DAY_HOURS_FRAGMENT = exports.GAMES_PLAYED_GAINS_FRAGMENT = exports.GAMES_PLAYED_PARTICPATIONS_BY_CURRENT_DAY_HOURS_FRAGMENT = exports.GAMES_PLAYED_PARTICPATIONS_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAMES_PLAYED_PARTICPATIONS_FRAGMENT = client_1.gql `
  fragment GamesPlayedParticipationsByDay on games_played_participations_by_day {
    date
    total_count
    game_id
    client_id
    name
  }
`;
exports.GAMES_PLAYED_PARTICPATIONS_BY_CURRENT_DAY_HOURS_FRAGMENT = client_1.gql `
  fragment GamesPlayedParticipationsByCurrentDayHours on games_played_participations_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
  }
`;
exports.GAMES_PLAYED_GAINS_FRAGMENT = client_1.gql `
  fragment GamesPlayedGainsByDay on games_played_gains_by_day {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;
exports.GAMES_PLAYED_GAINS_BY_CURRENT_DAY_HOURS_FRAGMENT = client_1.gql `
  fragment GamesPlayedGainsByCurrentDayHours on games_played_gains_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;
exports.GET_GAMES_PLAYED_STATISTIC_BY_CLIENT = client_1.gql `
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
exports.GET_GAMES_WINNERS = client_1.gql `
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
