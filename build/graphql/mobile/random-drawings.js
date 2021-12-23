"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RANDOM_DRAWING_WON_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.RANDOM_DRAWING_WON_FRAGMENT = client_1.gql `
  fragment RandomDrawingWon on random_drawings {
    __typename
    id
    created_at
    game_id
    gain {
      ...GainWon
    }
    gain_validated
  }
`;
