"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteClientFragmentDoc = exports.VoteFragmentDoc = exports.VoteSelectionFragmentDoc = exports.VoteSelectionChoiceFragmentDoc = exports.QuizzClientFragmentDoc = exports.QuizzFragmentDoc = exports.QuizzPlayedFragmentDoc = exports.InfosToPlayQuizzFragmentDoc = exports.QuizzQuestionsFragmentDoc = exports.QuizzQuestionAnswersFragmentDoc = exports.ArPlayedFragmentDoc = exports.InfosToPlayArFragmentDoc = exports.GamesGainsAvailableFragmentDoc = exports.GameWonFragmentDoc = exports.GamePlayedFragmentDoc = exports.GainWonFragmentDoc = exports.AddressFragmentDoc = exports.SurveyFragmentDoc = exports.SurveyQuestionsFragmentDoc = exports.SurveyQuestionAnswersFragmentDoc = exports.RandomDrawingFragmentDoc = exports.PrivateDeckFragmentDoc = exports.PrivateDeckM2mEntitiesFragmentDoc = exports.CommunnicationMinimalInfosFragmentDoc = exports.GameMinimalInfosFragmentDoc = exports.PhotoSpecificsFragmentDoc = exports.PhotoFragmentDoc = exports.InfoSpecificsFragmentDoc = exports.InfoFragmentDoc = exports.GamesPlayedGainsByCurrentDayHoursFragmentDoc = exports.GamesPlayedGainsByDayFragmentDoc = exports.GamesPlayedParticipationsByCurrentDayHoursFragmentDoc = exports.GamesPlayedParticipationsByDayFragmentDoc = exports.GainVirtualFragmentDoc = exports.EstimateFragmentDoc = exports.EstimateM2mEntityFragmentDoc = exports.CommunicationTypeFragmentDoc = exports.ClientDisplayFragmentDoc = exports.AssetResourcesFragmentDoc = exports.AnimationM2MAssetFragmentDoc = exports.ArFragmentDoc = exports.ArSpecificsFragmentDoc = exports.ArM2MAnimationFragmentDoc = exports.AnimationFragmentDoc = exports.TrackerFragmentDoc = exports.GamesGainsFragmentDoc = exports.GainFragmentDoc = exports.TemplateFragmentDoc = exports.AssetFragmentDoc = exports.GameTypeFragmentDoc = void 0;
exports.ArchiveEstimatesM2mEntitiesByPkDocument = exports.GetEstimatesM2mEntitiesDocument = exports.UpdateEstimateM2mEntityDocument = exports.InsertEstimateM2mEntityDocument = exports.ArchiveEstimateDocument = exports.UpdateEstimateDocument = exports.InsertEstimateDocument = exports.GetEstimatesByClientDocument = exports.ArchiveCommunicationDocument = exports.UpdateCommunicationDocument = exports.InsertCommunicationDocument = exports.GetCommunicationsByClientAndCommunicationTypeDocument = exports.GetCommunicationsByClientDocument = exports.GetCommunicationTypeByIdDocument = exports.GetCommunicationsTypesDocument = exports.UpdateClientDocument = exports.UpdateClientIsActiveDocument = exports.GetClientByIdDocument = exports.GetClientsDocument = exports.DeleteResourceFromAssetDocument = exports.AddResourceToAssetDocument = exports.UpdateAssetDocument = exports.InsertAssetDocument = exports.GetAssetsDocument = exports.GetAssetByPathDocument = exports.GetAssetByIdDocument = exports.DeleteAnimationsM2mAssetsDocument = exports.UpdateAnimationsM2mAssetsDocument = exports.InsertAnimationsM2mAssetsDocument = exports.DeleteArM2mAnimationsDocument = exports.InsertArM2mAnimationsDocument = exports.UpdateAnimationDocument = exports.InsertArDocument = exports.GetArSpecificsDocument = exports.GetArDocument = exports.UserDisplayFragmentDoc = exports.RandomDrawingWonFragmentDoc = exports.PrivateDeckM2mUserFragmentDoc = exports.PrivateDeckDisplayFragmentDoc = exports.NearbyGameFragmentDoc = exports.GameFragmentDoc = exports.NearbyCommunicationFragmentDoc = exports.CommunicationFragmentDoc = exports.NearbyCommunicationCardFragmentDoc = exports.NearbyGameCardFragmentDoc = exports.GoodiePlayedFragmentDoc = exports.GoodieM2MAnimationFragmentDoc = exports.GoodieFragmentDoc = exports.VotePlayedFragmentDoc = exports.InfosToPlayVoteFragmentDoc = void 0;
exports.GetGameRandomDrawingsDocument = exports.GetVotePlayersDocument = exports.GetQuizzPlayersDocument = exports.GetArPlayersDocument = exports.VerifyRandomDrawingInfosDocument = exports.DeleteQuizzQuestionDocument = exports.UpdateQuizzQuestionDocument = exports.InsertQuizzQuestionDocument = exports.UpdateQuizzDocument = exports.InsertQuizzDocument = exports.GetQuizzSpecificsDocument = exports.DeletePrivateDeckM2mEntitiesByPkDocument = exports.GetPrivateDeckM2mEntitiesDocument = exports.InsertPrivateDeckM2mEntityDocument = exports.GetGamesCommunicationsMinimalInfosDocument = exports.ArchivePrivateDeckDocument = exports.UpdatePrivateDeckDocument = exports.InsertPrivateDeckDocument = exports.GetPrivatesDecksByClientDocument = exports.UpdatePhotoDocument = exports.GetPhotoSpecificsDocument = exports.InsertPhotoDocument = exports.UpdateInfoDocument = exports.GetInfoSpecificsDocument = exports.InsertInfoDocument = exports.DeleteGoodiesM2mAnimationsDocument = exports.InsertGoodiesM2mAnimationsDocument = exports.ArchiveGoodieDocument = exports.UpdateGoodieDocument = exports.InsertGoodieDocument = exports.GetGoodieDocument = exports.ArchiveGameDocument = exports.UpdateGameDocument = exports.InsertGameDocument = exports.GetGamesByClientAndGameTypeDocument = exports.GetGamesMinimalInfosDocument = exports.GetGameTypeByIdDocument = exports.GetGamesTypesDocument = exports.GetGameWinnersDocument = exports.GetGamesPlayedStatisticByClientDocument = exports.DeleteGameGainDocument = exports.UpdateGameGainDocument = exports.InsertGameGainDocument = exports.ArchiveGainDocument = exports.UpdateGainDocument = exports.InsertGainDocument = exports.GetGainsByClientDocument = exports.InsertGainsVirtualsDocument = exports.GetGainsVirtualsByGainDocument = exports.GetGamesCommunicationsTypesDocument = void 0;
exports.GetTestGamesDocument = exports.GetNearbyGamesDocument = exports.GetNearbyCommunicationsDocument = exports.GetNearbyPrivateDeckCardsDocument = exports.GetNearbyCardsDocument = exports.GetTemplateByIdDocument = exports.PlayGoodieDocument = exports.GetGoodieAnimationsDocument = exports.GetGoodiesDocument = exports.GetVoteByIdDocument = exports.PlayVoteDocument = exports.GetInfosToPlayVoteDocument = exports.GetQuizzByIdDocument = exports.PlayQuizzDocument = exports.GetInfosToPlayQuizzDocument = exports.PlayArDocument = exports.GetInfosToPlayArDocument = exports.GetGamePlayedCountDocument = exports.GetGameFrequencyDocument = exports.GetGainsWonDocument = exports.ValidateGainDocument = exports.UpsertAddressDocument = exports.UpsertUserDocument = exports.InsertUserDocument = exports.GetUsersByAppleIdDocument = exports.GetUsersByEmailDocument = exports.ResetPasswordDocument = exports.InsertClientPasswordForgottenTokenDocument = exports.InsertClientDocument = exports.GetClientsByEmailDocument = exports.DeleteVoteSelectionDocument = exports.UpdateVoteSelectionDocument = exports.InsertVoteSelectionDocument = exports.GetVoteSpecificsDocument = exports.InsertVoteDocument = exports.GetVoteResultsDocument = exports.UpdateTrackerDocument = exports.InsertTrackerDocument = exports.GetTrackersDocument = exports.ArchiveTemplateDocument = exports.UpdateTemplateDocument = exports.InsertTemplateDocument = exports.GetTemplatesByClientDocument = exports.DeleteSurveyQuestionDocument = exports.UpdateSurveyQuestionDocument = exports.InsertSurveyQuestionDocument = exports.UpdateSurveyDocument = exports.GetSurveySpecificsDocument = exports.InsertSurveyDocument = exports.InsertRandomDrawingsDocument = void 0;
exports.getSdk = exports.GetStripeCustomerPaymentMethodsDocument = exports.CreateStripeIntentDocument = exports.CreateStripeCustomerDocument = exports.UpdateUserDocument = exports.GetUserByIdDocument = exports.GetPrivatesDeckByUserDocument = exports.InsertPrivateDeckM2mUserDocument = exports.GetPrivateDeckByCodeDocument = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.GameTypeFragmentDoc = graphql_tag_1.default `
  fragment GameType on games_types {
    id
    name
    description
    price
    color
    acronym
    radius_price_range
    participations_price_range
    trackers_price_range
  }
`;
exports.AssetFragmentDoc = graphql_tag_1.default `
  fragment Asset on assets {
    id
    type
    path
    name
    client_id
    user_id
    scaleX
    scaleY
    scaleZ
    resources
  }
`;
exports.TemplateFragmentDoc = graphql_tag_1.default `
  fragment Template on templates {
    id
    name
    design
    html
    created_at
    updated_at
    client_id
    is_active
  }
`;
exports.GainFragmentDoc = graphql_tag_1.default `
  fragment Gain on gains {
    id
    is_active
    is_virtual
    name
    description
    stock
    image {
      ...Asset
    }
    client_id
    gtc
    instructions
    created_at
    template_id
    template {
      ...Template
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.TemplateFragmentDoc}
`;
exports.GamesGainsFragmentDoc = graphql_tag_1.default `
  fragment GamesGains on games_gains {
    game_id
    gain_id
    stock
    stock_won
    is_active
    probability
    gain {
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
exports.TrackerFragmentDoc = graphql_tag_1.default `
  fragment Tracker on ar_trackers {
    id
    name
    width
    height
    image {
      ...Asset
    }
    qrcode_inside
  }
  ${exports.AssetFragmentDoc}
`;
exports.AnimationFragmentDoc = graphql_tag_1.default `
  fragment Animation on animations {
    id
    name
    assets {
      asset {
        ...Asset
      }
      when_won
    }
    tracker {
      ...Tracker
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.TrackerFragmentDoc}
`;
exports.ArM2MAnimationFragmentDoc = graphql_tag_1.default `
  fragment ArM2MAnimation on ar_m2m_animations {
    ar_id
    animation_id
    animation {
      ...Animation
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.ArSpecificsFragmentDoc = graphql_tag_1.default `
  fragment ARSpecifics on ar {
    animations {
      ...ArM2MAnimation
    }
  }
  ${exports.ArM2MAnimationFragmentDoc}
`;
exports.ArFragmentDoc = graphql_tag_1.default `
  fragment AR on ar {
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
    ...ARSpecifics
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
  ${exports.ArSpecificsFragmentDoc}
`;
exports.AnimationM2MAssetFragmentDoc = graphql_tag_1.default `
  fragment AnimationM2MAsset on animations_m2m_assets {
    animation_id
    asset_id
    when_won
  }
`;
exports.AssetResourcesFragmentDoc = graphql_tag_1.default `
  fragment AssetResources on assets {
    id
    resources
  }
`;
exports.ClientDisplayFragmentDoc = graphql_tag_1.default `
  fragment ClientDisplay on clients {
    id
    created_at
    email
    name
    first_name
    phone
    address_id
    stripe_customer_id
    company
    vat_id
    address {
      address
      city
      zipcode
      country
    }
    discount
    role
    is_active
    reseller_id
    reseller {
      email
      name
      first_name
    }
    picture {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.CommunicationTypeFragmentDoc = graphql_tag_1.default `
  fragment CommunicationType on communications_types {
    id
    name
    color
    acronym
    radius_price_range
    price
  }
`;
exports.EstimateM2mEntityFragmentDoc = graphql_tag_1.default `
  fragment EstimateM2mEntity on estimates_m2m_entities {
    id
    name
    estimate_id
    entity_id
    radius
    trackers
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.EstimateFragmentDoc = graphql_tag_1.default `
  fragment Estimate on estimates {
    id
    name
    date_start
    date_end
    status
    participations_credits
    created_at
    updated_at
    client_id
    is_archive
    estimates_m2m_entities {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
exports.GainVirtualFragmentDoc = graphql_tag_1.default `
  fragment GainVirtual on gains_virtuals {
    id
    format
    value
    gain_id
  }
`;
exports.GamesPlayedParticipationsByDayFragmentDoc = graphql_tag_1.default `
  fragment GamesPlayedParticipationsByDay on games_played_participations_by_day {
    date
    total_count
    game_id
    client_id
    name
  }
`;
exports.GamesPlayedParticipationsByCurrentDayHoursFragmentDoc = graphql_tag_1.default `
  fragment GamesPlayedParticipationsByCurrentDayHours on games_played_participations_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
  }
`;
exports.GamesPlayedGainsByDayFragmentDoc = graphql_tag_1.default `
  fragment GamesPlayedGainsByDay on games_played_gains_by_day {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;
exports.GamesPlayedGainsByCurrentDayHoursFragmentDoc = graphql_tag_1.default `
  fragment GamesPlayedGainsByCurrentDayHours on games_played_gains_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;
exports.InfoFragmentDoc = graphql_tag_1.default `
  fragment Info on infos {
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
    html
    design
    type {
      ...CommunicationType
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.InfoSpecificsFragmentDoc = graphql_tag_1.default `
  fragment InfoSpecifics on infos {
    html
    design
    template_id
    template {
      id
      name
      html
    }
  }
`;
exports.PhotoFragmentDoc = graphql_tag_1.default `
  fragment Photo on photos {
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
    type {
      ...CommunicationType
    }
    foreground {
      ...Asset
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.PhotoSpecificsFragmentDoc = graphql_tag_1.default `
  fragment PhotoSpecifics on photos {
    id
    foreground_id
    foreground {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GameMinimalInfosFragmentDoc = graphql_tag_1.default `
  fragment GameMinimalInfos on games {
    id
    name
    client_id
    is_private
    type {
      name
    }
  }
`;
exports.CommunnicationMinimalInfosFragmentDoc = graphql_tag_1.default `
  fragment CommunnicationMinimalInfos on communications {
    id
    name
    client_id
    is_private
    type {
      name
    }
  }
`;
exports.PrivateDeckM2mEntitiesFragmentDoc = graphql_tag_1.default `
  fragment PrivateDeckM2mEntities on privates_decks_m2m_entities {
    __typename
    private_deck
    entity_id
    game {
      __typename
      ...GameMinimalInfos
    }
    communication {
      __typename
      ...CommunnicationMinimalInfos
    }
  }
  ${exports.GameMinimalInfosFragmentDoc}
  ${exports.CommunnicationMinimalInfosFragmentDoc}
`;
exports.PrivateDeckFragmentDoc = graphql_tag_1.default `
  fragment PrivateDeck on privates_decks {
    id
    name
    description
    code
    date_start
    date_end
    is_active
    is_archive
    client_id
    created_at
    privates_decks_m2m_entities {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
exports.RandomDrawingFragmentDoc = graphql_tag_1.default `
  fragment RandomDrawing on random_drawings {
    __typename
    id
    created_at
    game_id
    gain {
      __typename
      id
      name
      stock
    }
    winner {
      __typename
      id
      name
      first_name
    }
  }
`;
exports.SurveyQuestionAnswersFragmentDoc = graphql_tag_1.default `
  fragment SurveyQuestionAnswers on surveys_questions_answers {
    id
    answer
  }
`;
exports.SurveyQuestionsFragmentDoc = graphql_tag_1.default `
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
  ${exports.AssetFragmentDoc}
  ${exports.SurveyQuestionAnswersFragmentDoc}
`;
exports.SurveyFragmentDoc = graphql_tag_1.default `
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
  ${exports.CommunicationTypeFragmentDoc}
  ${exports.SurveyQuestionsFragmentDoc}
`;
exports.AddressFragmentDoc = graphql_tag_1.default `
  fragment Address on addresses {
    address
    city
    zipcode
    country
  }
`;
exports.GainWonFragmentDoc = graphql_tag_1.default `
  fragment GainWon on gains {
    __typename
    id
    name
    description
    image {
      __typename
      ...Asset
    }
    instructions
    is_virtual
    gains_virtuals {
      __typename
      format
      id
      value
    }
    gtc
    client {
      __typename
      picture {
        __typename
        ...Asset
      }
    }
    template_id
  }
  ${exports.AssetFragmentDoc}
`;
exports.GamePlayedFragmentDoc = graphql_tag_1.default `
  fragment GamePlayed on games_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.GameWonFragmentDoc = graphql_tag_1.default `
  fragment GameWon on games_played {
    id
    played_at
    gain {
      ...GainWon
    }
    gain_validated
    game {
      name
      valorization
    }
  }
  ${exports.GainWonFragmentDoc}
`;
exports.GamesGainsAvailableFragmentDoc = graphql_tag_1.default `
  fragment GamesGainsAvailable on games_gains_available {
    gain_id
    probability
    stock
    stock_won
  }
`;
exports.InfosToPlayArFragmentDoc = graphql_tag_1.default `
  fragment InfosToPlayAr on ar {
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
  ${exports.GamesGainsAvailableFragmentDoc}
`;
exports.ArPlayedFragmentDoc = graphql_tag_1.default `
  fragment ArPlayed on ar_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.QuizzQuestionAnswersFragmentDoc = graphql_tag_1.default `
  fragment QuizzQuestionAnswers on quizz_questions_answers {
    id
    answer
    is_correct
    points
  }
`;
exports.QuizzQuestionsFragmentDoc = graphql_tag_1.default `
  fragment QuizzQuestions on quizz_questions {
    id
    quizz_id
    question
    asset_id
    time
    total_points
    asset {
      ...Asset
    }
    quizz_questions_answers {
      ...QuizzQuestionAnswers
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.QuizzQuestionAnswersFragmentDoc}
`;
exports.InfosToPlayQuizzFragmentDoc = graphql_tag_1.default `
  fragment InfosToPlayQuizz on quizz {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    winning_percentage
    quizz_questions {
      ...QuizzQuestions
    }
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
  ${exports.GamesGainsAvailableFragmentDoc}
`;
exports.QuizzPlayedFragmentDoc = graphql_tag_1.default `
  fragment QuizzPlayed on quizz_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.QuizzFragmentDoc = graphql_tag_1.default `
  fragment Quizz on quizz {
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
    winning_percentage
    ordered_questions
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    quizz_questions {
      ...QuizzQuestions
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
  ${exports.QuizzQuestionsFragmentDoc}
`;
exports.QuizzClientFragmentDoc = graphql_tag_1.default `
  fragment QuizzClient on quizz {
    ...Quizz
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.QuizzFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.VoteSelectionChoiceFragmentDoc = graphql_tag_1.default `
  fragment VoteSelectionChoice on votes_selections_choices {
    id
    label
    vote_selection_id
    asset {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.VoteSelectionFragmentDoc = graphql_tag_1.default `
  fragment VoteSelection on votes_selections {
    id
    vote_id
    selection
    required_choices
    votes_selections_choices {
      ...VoteSelectionChoice
    }
  }
  ${exports.VoteSelectionChoiceFragmentDoc}
`;
exports.VoteFragmentDoc = graphql_tag_1.default `
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
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
  ${exports.VoteSelectionFragmentDoc}
`;
exports.VoteClientFragmentDoc = graphql_tag_1.default `
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
  ${exports.VoteFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.InfosToPlayVoteFragmentDoc = graphql_tag_1.default `
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
  ${exports.GamesGainsAvailableFragmentDoc}
`;
exports.VotePlayedFragmentDoc = graphql_tag_1.default `
  fragment VotePlayed on votes_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.GoodieFragmentDoc = graphql_tag_1.default `
  fragment Goodie on goodies {
    id
    name
    created_at
    client_id
    date_start
    date_end
    is_active
    description
    image {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GoodieM2MAnimationFragmentDoc = graphql_tag_1.default `
  fragment GoodieM2MAnimation on goodies_m2m_animations {
    goodie_id
    animation_id
    animation {
      ...Animation
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.GoodiePlayedFragmentDoc = graphql_tag_1.default `
  fragment GoodiePlayed on goodies_played {
    id
    goodie_id
    user_id
    played_at
    goodie {
      animations {
        animation {
          ...Animation
        }
      }
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.NearbyGameCardFragmentDoc = graphql_tag_1.default `
  fragment NearbyGameCard on nearby_games {
    id
    name
    date_start
    date_end
    is_active
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
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    distance
    is_test
    client {
      id
      name
      company
      picture {
        ...Asset
      }
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
`;
exports.NearbyCommunicationCardFragmentDoc = graphql_tag_1.default `
  fragment NearbyCommunicationCard on nearby_communications {
    id
    name
    date_start
    date_end
    is_active
    client_id
    address
    created_at
    type_id
    location
    city
    description
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...CommunicationType
    }
    distance
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.CommunicationFragmentDoc = graphql_tag_1.default `
  fragment Communication on communications {
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
    description
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...CommunicationType
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.NearbyCommunicationFragmentDoc = graphql_tag_1.default `
  fragment NearbyCommunication on communications {
    ...Communication
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.CommunicationFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.GameFragmentDoc = graphql_tag_1.default `
  fragment Game on games {
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
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    valorization
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
`;
exports.NearbyGameFragmentDoc = graphql_tag_1.default `
  fragment NearbyGame on games {
    ...Game
    is_test
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.GameFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.PrivateDeckDisplayFragmentDoc = graphql_tag_1.default `
  fragment PrivateDeckDisplay on privates_decks {
    id
    name
    description
    code
    date_start
    date_end
    is_active
  }
`;
exports.PrivateDeckM2mUserFragmentDoc = graphql_tag_1.default `
  fragment PrivateDeckM2mUser on privates_decks_m2m_users {
    private_deck_id
    user_id
    private_deck {
      ...PrivateDeckDisplay
    }
  }
  ${exports.PrivateDeckDisplayFragmentDoc}
`;
exports.RandomDrawingWonFragmentDoc = graphql_tag_1.default `
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
  ${exports.GainWonFragmentDoc}
`;
exports.UserDisplayFragmentDoc = graphql_tag_1.default `
  fragment UserDisplay on users {
    id
    created_at
    email
    name
    first_name
    birthdate
    address_id
    address {
      address
      city
      zipcode
      country
    }
    is_active
    is_tester
    picture_id
    picture {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GetArDocument = graphql_tag_1.default `
  query getAr($id: uuid!) {
    ar_by_pk(id: $id) {
      ...AR
    }
  }
  ${exports.ArFragmentDoc}
`;
exports.GetArSpecificsDocument = graphql_tag_1.default `
  query getArSpecifics($id: uuid!) {
    ar_by_pk(id: $id) {
      id
      ...ARSpecifics
    }
  }
  ${exports.ArSpecificsFragmentDoc}
`;
exports.InsertArDocument = graphql_tag_1.default `
  mutation insertAr($ar: ar_insert_input!) {
    insert_ar_one(object: $ar) {
      ...AR
    }
  }
  ${exports.ArFragmentDoc}
`;
exports.UpdateAnimationDocument = graphql_tag_1.default `
  mutation updateAnimation($id: uuid!, $updates: animations_set_input!) {
    update_animations_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Animation
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.InsertArM2mAnimationsDocument = graphql_tag_1.default `
  mutation insertArM2mAnimations(
    $ar_id: uuid!
    $animation: animations_obj_rel_insert_input!
  ) {
    insert_ar_m2m_animations_one(
      object: { ar_id: $ar_id, animation: $animation }
    ) {
      ...ArM2MAnimation
    }
  }
  ${exports.ArM2MAnimationFragmentDoc}
`;
exports.DeleteArM2mAnimationsDocument = graphql_tag_1.default `
  mutation DeleteArM2mAnimations($animation_id: uuid!, $ar_id: uuid!) {
    delete_ar_m2m_animations_by_pk(animation_id: $animation_id, ar_id: $ar_id) {
      ar_id
      animation_id
    }
  }
`;
exports.InsertAnimationsM2mAssetsDocument = graphql_tag_1.default `
  mutation insertAnimationsM2mAssets(
    $objects: [animations_m2m_assets_insert_input!]!
  ) {
    insert_animations_m2m_assets(objects: $objects) {
      returning {
        ...AnimationM2MAsset
      }
    }
  }
  ${exports.AnimationM2MAssetFragmentDoc}
`;
exports.UpdateAnimationsM2mAssetsDocument = graphql_tag_1.default `
  mutation updateAnimationsM2mAssets(
    $animation_id: uuid!
    $asset_id: uuid!
    $when_won: Boolean!
  ) {
    update_animations_m2m_assets_by_pk(
      pk_columns: { animation_id: $animation_id, asset_id: $asset_id }
      _set: { when_won: $when_won }
    ) {
      ...AnimationM2MAsset
    }
  }
  ${exports.AnimationM2MAssetFragmentDoc}
`;
exports.DeleteAnimationsM2mAssetsDocument = graphql_tag_1.default `
  mutation deleteAnimationsM2mAssets($animation_id: uuid!, $asset_id: uuid!) {
    delete_animations_m2m_assets_by_pk(
      animation_id: $animation_id
      asset_id: $asset_id
    ) {
      animation_id
      asset_id
    }
  }
`;
exports.GetAssetByIdDocument = graphql_tag_1.default `
  query getAssetById($id: uuid!) {
    assets_by_pk(id: $id) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GetAssetByPathDocument = graphql_tag_1.default `
  query getAssetByPath($clientId: uuid!, $path: String!) {
    assets(where: { client_id: { _eq: $clientId }, path: { _eq: $path } }) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GetAssetsDocument = graphql_tag_1.default `
  query getAssets($type: assets_types_enum, $clientId: uuid) {
    assets(
      order_by: { name: asc }
      where: {
        type: { _eq: $type }
        _or: [
          { client_id: { _eq: $clientId } }
          { client_id: { _is_null: true }, user_id: { _is_null: true } }
        ]
      }
    ) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.InsertAssetDocument = graphql_tag_1.default `
  mutation insertAsset($object: assets_insert_input!) {
    insert_assets_one(object: $object) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.UpdateAssetDocument = graphql_tag_1.default `
  mutation updateAsset($id: uuid!, $updates: assets_set_input!) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.AddResourceToAssetDocument = graphql_tag_1.default `
  mutation addResourceToAsset($id: uuid!, $resource: jsonb!) {
    update_assets_by_pk(
      pk_columns: { id: $id }
      _append: { resources: $resource }
    ) {
      __typename
      ...AssetResources
    }
  }
  ${exports.AssetResourcesFragmentDoc}
`;
exports.DeleteResourceFromAssetDocument = graphql_tag_1.default `
  mutation deleteResourceFromAsset($id: uuid!, $resource: String!) {
    update_assets_by_pk(
      pk_columns: { id: $id }
      _delete_key: { resources: $resource }
    ) {
      __typename
      ...AssetResources
    }
  }
  ${exports.AssetResourcesFragmentDoc}
`;
exports.GetClientsDocument = graphql_tag_1.default `
  query getClients($withDiscount: Boolean = false) {
    clients(order_by: { is_active: desc, name: asc, first_name: asc }) {
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
exports.GetClientByIdDocument = graphql_tag_1.default `
  query getClientById($id: uuid!) {
    clients_by_pk(id: $id) {
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
exports.UpdateClientIsActiveDocument = graphql_tag_1.default `
  mutation updateClientIsActive($id: uuid!, $isActive: Boolean!) {
    __typename
    update_clients_by_pk(
      pk_columns: { id: $id }
      _set: { is_active: $isActive }
    ) {
      __typename
      id
      is_active
    }
  }
`;
exports.UpdateClientDocument = graphql_tag_1.default `
  mutation updateClient($clientId: uuid!, $client: clients_set_input) {
    update_clients_by_pk(pk_columns: { id: $clientId }, _set: $client) {
      __typename
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
exports.GetCommunicationsTypesDocument = graphql_tag_1.default `
  query getCommunicationsTypes {
    communications_types(order_by: { name: asc }) {
      ...CommunicationType
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.GetCommunicationTypeByIdDocument = graphql_tag_1.default `
  query getCommunicationTypeById($communicationTypeId: uuid!) {
    communications_types_by_pk(id: $communicationTypeId) {
      ...CommunicationType
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.GetCommunicationsByClientDocument = graphql_tag_1.default `
  query getCommunicationsByClient($clientId: uuid!) {
    communications(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
exports.GetCommunicationsByClientAndCommunicationTypeDocument = graphql_tag_1.default `
  query getCommunicationsByClientAndCommunicationType(
    $clientId: uuid!
    $communicationTypeId: uuid!
  ) {
    communications(
      where: {
        client_id: { _eq: $clientId }
        type_id: { _eq: $communicationTypeId }
        is_archive: { _neq: true }
      }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
exports.InsertCommunicationDocument = graphql_tag_1.default `
  mutation insertCommunication($communication: communications_insert_input!) {
    insert_communications_one(object: $communication) {
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
exports.UpdateCommunicationDocument = graphql_tag_1.default `
  mutation updateCommunication(
    $communicationId: uuid!
    $communication: communications_set_input!
  ) {
    __typename
    update_communications_by_pk(
      pk_columns: { id: $communicationId }
      _set: $communication
    ) {
      __typename
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
exports.ArchiveCommunicationDocument = graphql_tag_1.default `
  mutation archiveCommunication($communicationId: uuid!) {
    __typename
    update_communications_by_pk(
      pk_columns: { id: $communicationId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
exports.GetEstimatesByClientDocument = graphql_tag_1.default `
  query getEstimatesByClient($clientId: uuid!) {
    estimates(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
exports.InsertEstimateDocument = graphql_tag_1.default `
  mutation insertEstimate($estimate: estimates_insert_input!) {
    insert_estimates_one(object: $estimate) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
exports.UpdateEstimateDocument = graphql_tag_1.default `
  mutation updateEstimate($estimateId: uuid!, $estimate: estimates_set_input!) {
    update_estimates_by_pk(pk_columns: { id: $estimateId }, _set: $estimate) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
exports.ArchiveEstimateDocument = graphql_tag_1.default `
  mutation archiveEstimate($estimateId: uuid!) {
    update_estimates_by_pk(
      pk_columns: { id: $estimateId }
      _set: { is_archive: true }
    ) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
exports.InsertEstimateM2mEntityDocument = graphql_tag_1.default `
  mutation insertEstimateM2mEntity(
    $estimateM2mEntity: estimates_m2m_entities_insert_input!
  ) {
    insert_estimates_m2m_entities_one(object: $estimateM2mEntity) {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
exports.UpdateEstimateM2mEntityDocument = graphql_tag_1.default `
  mutation updateEstimateM2mEntity(
    $estimateM2mEntityId: uuid!
    $estimateM2mEntity: estimates_m2m_entities_set_input!
  ) {
    update_estimates_m2m_entities_by_pk(
      pk_columns: { id: $estimateM2mEntityId }
      _set: $estimateM2mEntity
    ) {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
exports.GetEstimatesM2mEntitiesDocument = graphql_tag_1.default `
  query getEstimatesM2mEntities($estimateId: uuid!) {
    __typename
    estimates_m2m_entities(where: { estimate_id: { _eq: $estimateId } }) {
      __typename
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
exports.ArchiveEstimatesM2mEntitiesByPkDocument = graphql_tag_1.default `
  mutation archiveEstimatesM2mEntitiesByPk($estimateM2mEntityId: uuid!) {
    delete_estimates_m2m_entities_by_pk(id: $estimateM2mEntityId) {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
exports.GetGamesCommunicationsTypesDocument = graphql_tag_1.default `
  query getGamesCommunicationsTypes {
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.GetGainsVirtualsByGainDocument = graphql_tag_1.default `
  query getGainsVirtualsByGain($gainId: uuid!) {
    gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      ...GainVirtual
    }
  }
  ${exports.GainVirtualFragmentDoc}
`;
exports.InsertGainsVirtualsDocument = graphql_tag_1.default `
  mutation insertGainsVirtuals(
    $gainId: uuid!
    $gainsVirtuals: [gains_virtuals_insert_input!]!
  ) {
    delete_gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      affected_rows
    }
    insert_gains_virtuals(objects: $gainsVirtuals) {
      returning {
        format
        gain_id
        id
        value
      }
    }
  }
`;
exports.GetGainsByClientDocument = graphql_tag_1.default `
  query getGainsByClient($clientId: uuid!) {
    gains(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
exports.InsertGainDocument = graphql_tag_1.default `
  mutation insertGain($gain: gains_insert_input!) {
    insert_gains_one(object: $gain) {
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
exports.UpdateGainDocument = graphql_tag_1.default `
  mutation updateGain($gainId: uuid!, $gain: gains_set_input!) {
    __typename
    update_gains_by_pk(pk_columns: { id: $gainId }, _set: $gain) {
      __typename
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
exports.ArchiveGainDocument = graphql_tag_1.default `
  mutation archiveGain($gainId: uuid!) {
    __typename
    update_gains_by_pk(
      pk_columns: { id: $gainId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
exports.InsertGameGainDocument = graphql_tag_1.default `
  mutation insertGameGain($gameGain: games_gains_insert_input!) {
    insert_games_gains_one(object: $gameGain) {
      ...GamesGains
    }
  }
  ${exports.GamesGainsFragmentDoc}
`;
exports.UpdateGameGainDocument = graphql_tag_1.default `
  mutation updateGameGain(
    $gameId: uuid!
    $gainId: uuid!
    $gameGain: games_gains_set_input!
  ) {
    update_games_gains_by_pk(
      pk_columns: { game_id: $gameId, gain_id: $gainId }
      _set: $gameGain
    ) {
      ...GamesGains
    }
  }
  ${exports.GamesGainsFragmentDoc}
`;
exports.DeleteGameGainDocument = graphql_tag_1.default `
  mutation deleteGameGain($gameId: uuid!, $gainId: uuid!) {
    delete_games_gains_by_pk(game_id: $gameId, gain_id: $gainId) {
      ...GamesGains
    }
  }
  ${exports.GamesGainsFragmentDoc}
`;
exports.GetGamesPlayedStatisticByClientDocument = graphql_tag_1.default `
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
  ${exports.GamesPlayedParticipationsByDayFragmentDoc}
  ${exports.GamesPlayedParticipationsByCurrentDayHoursFragmentDoc}
  ${exports.GamesPlayedGainsByDayFragmentDoc}
  ${exports.GamesPlayedGainsByCurrentDayHoursFragmentDoc}
`;
exports.GetGameWinnersDocument = graphql_tag_1.default `
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
exports.GetGamesTypesDocument = graphql_tag_1.default `
  query getGamesTypes {
    games_types(order_by: { name: asc }) {
      ...GameType
    }
  }
  ${exports.GameTypeFragmentDoc}
`;
exports.GetGameTypeByIdDocument = graphql_tag_1.default `
  query getGameTypeById($gameTypeId: uuid!) {
    games_types_by_pk(id: $gameTypeId) {
      ...GameType
    }
  }
  ${exports.GameTypeFragmentDoc}
`;
exports.GetGamesMinimalInfosDocument = graphql_tag_1.default `
  query getGamesMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
  }
  ${exports.GameMinimalInfosFragmentDoc}
`;
exports.GetGamesByClientAndGameTypeDocument = graphql_tag_1.default `
  query getGamesByClientAndGameType($clientId: uuid!, $gameTypeId: uuid!) {
    games(
      where: {
        client_id: { _eq: $clientId }
        type_id: { _eq: $gameTypeId }
        is_archive: { _neq: true }
      }
      order_by: { created_at: desc }
    ) {
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
exports.InsertGameDocument = graphql_tag_1.default `
  mutation insertGame($game: games_insert_input!) {
    insert_games_one(object: $game) {
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
exports.UpdateGameDocument = graphql_tag_1.default `
  mutation updateGame($gameId: uuid!, $game: games_set_input!) {
    __typename
    update_games_by_pk(pk_columns: { id: $gameId }, _set: $game) {
      __typename
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
exports.ArchiveGameDocument = graphql_tag_1.default `
  mutation archiveGame($gameId: uuid!) {
    __typename
    update_games_by_pk(
      pk_columns: { id: $gameId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
exports.GetGoodieDocument = graphql_tag_1.default `
  query getGoodie($id: uuid!) {
    goodies_by_pk(id: $id) {
      ...Goodie
    }
  }
  ${exports.GoodieFragmentDoc}
`;
exports.InsertGoodieDocument = graphql_tag_1.default `
  mutation insertGoodie($goodie: goodies_insert_input!) {
    insert_goodies_one(object: $goodie) {
      ...Goodie
    }
  }
  ${exports.GoodieFragmentDoc}
`;
exports.UpdateGoodieDocument = graphql_tag_1.default `
  mutation updateGoodie($goodieId: uuid!, $goodie: goodies_set_input!) {
    update_goodies_by_pk(pk_columns: { id: $goodieId }, _set: $goodie) {
      ...Goodie
    }
  }
  ${exports.GoodieFragmentDoc}
`;
exports.ArchiveGoodieDocument = graphql_tag_1.default `
  mutation archiveGoodie($goodieId: uuid!) {
    update_goodies_by_pk(
      pk_columns: { id: $goodieId }
      _set: { is_archive: true }
    ) {
      id
      is_archive
    }
  }
`;
exports.InsertGoodiesM2mAnimationsDocument = graphql_tag_1.default `
  mutation insertGoodiesM2mAnimations(
    $goodie_id: uuid!
    $animation: animations_obj_rel_insert_input!
  ) {
    insert_goodies_m2m_animations_one(
      object: { goodie_id: $goodie_id, animation: $animation }
    ) {
      ...GoodieM2MAnimation
    }
  }
  ${exports.GoodieM2MAnimationFragmentDoc}
`;
exports.DeleteGoodiesM2mAnimationsDocument = graphql_tag_1.default `
  mutation DeleteGoodiesM2mAnimations($goodie_id: uuid!, $animation_id: uuid!) {
    delete_goodies_m2m_animations_by_pk(
      goodie_id: $goodie_id
      animation_id: $animation_id
    ) {
      goodie_id
      animation_id
    }
  }
`;
exports.InsertInfoDocument = graphql_tag_1.default `
  mutation insertInfo($info: infos_insert_input!) {
    insert_infos_one(object: $info) {
      id
      ...Info
    }
  }
  ${exports.InfoFragmentDoc}
`;
exports.GetInfoSpecificsDocument = graphql_tag_1.default `
  query getInfoSpecifics($id: uuid!) {
    infos_by_pk(id: $id) {
      id
      ...InfoSpecifics
    }
  }
  ${exports.InfoSpecificsFragmentDoc}
`;
exports.UpdateInfoDocument = graphql_tag_1.default `
  mutation updateInfo($id: uuid!, $updates: infos_set_input!) {
    update_infos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      id
      ...Info
    }
  }
  ${exports.InfoFragmentDoc}
`;
exports.InsertPhotoDocument = graphql_tag_1.default `
  mutation insertPhoto($photo: photos_insert_input!) {
    insert_photos_one(object: $photo) {
      ...Photo
    }
  }
  ${exports.PhotoFragmentDoc}
`;
exports.GetPhotoSpecificsDocument = graphql_tag_1.default `
  query getPhotoSpecifics($id: uuid!) {
    photos_by_pk(id: $id) {
      ...PhotoSpecifics
    }
  }
  ${exports.PhotoSpecificsFragmentDoc}
`;
exports.UpdatePhotoDocument = graphql_tag_1.default `
  mutation updatePhoto($id: uuid!, $updates: photos_set_input!) {
    update_photos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Photo
    }
  }
  ${exports.PhotoFragmentDoc}
`;
exports.GetPrivatesDecksByClientDocument = graphql_tag_1.default `
  query getPrivatesDecksByClient($clientId: uuid!) {
    privates_decks(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
exports.InsertPrivateDeckDocument = graphql_tag_1.default `
  mutation insertPrivateDeck($privateDeck: privates_decks_insert_input!) {
    insert_privates_decks_one(object: $privateDeck) {
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
exports.UpdatePrivateDeckDocument = graphql_tag_1.default `
  mutation updatePrivateDeck(
    $privateDeckId: uuid!
    $privateDeck: privates_decks_set_input!
  ) {
    __typename
    update_privates_decks_by_pk(
      pk_columns: { id: $privateDeckId }
      _set: $privateDeck
    ) {
      __typename
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
exports.ArchivePrivateDeckDocument = graphql_tag_1.default `
  mutation archivePrivateDeck($privateDeckId: uuid!) {
    __typename
    update_privates_decks_by_pk(
      pk_columns: { id: $privateDeckId }
      _set: { is_archive: true }
    ) {
      __typename
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
exports.GetGamesCommunicationsMinimalInfosDocument = graphql_tag_1.default `
  query getGamesCommunicationsMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
    communications(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...CommunnicationMinimalInfos
    }
  }
  ${exports.GameMinimalInfosFragmentDoc}
  ${exports.CommunnicationMinimalInfosFragmentDoc}
`;
exports.InsertPrivateDeckM2mEntityDocument = graphql_tag_1.default `
  mutation insertPrivateDeckM2mEntity($privateDeckId: uuid!, $entityId: uuid!) {
    insert_privates_decks_m2m_entities_one(
      object: { private_deck: $privateDeckId, entity_id: $entityId }
    ) {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
exports.GetPrivateDeckM2mEntitiesDocument = graphql_tag_1.default `
  query getPrivateDeckM2mEntities($privateDeckId: uuid!) {
    privates_decks_m2m_entities(
      where: { private_deck: { _eq: $privateDeckId } }
    ) {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
exports.DeletePrivateDeckM2mEntitiesByPkDocument = graphql_tag_1.default `
  mutation deletePrivateDeckM2mEntitiesByPk(
    $privateDeckId: uuid!
    $entityId: uuid!
  ) {
    delete_privates_decks_m2m_entities_by_pk(
      entity_id: $entityId
      private_deck: $privateDeckId
    ) {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
exports.GetQuizzSpecificsDocument = graphql_tag_1.default `
  query getQuizzSpecifics($id: uuid!) {
    quizz_by_pk(id: $id) {
      id
      winning_percentage
      ordered_questions
      quizz_questions {
        ...QuizzQuestions
      }
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
`;
exports.InsertQuizzDocument = graphql_tag_1.default `
  mutation insertQuizz($quizz: quizz_insert_input!) {
    insert_quizz_one(object: $quizz) {
      ...Quizz
    }
  }
  ${exports.QuizzFragmentDoc}
`;
exports.UpdateQuizzDocument = graphql_tag_1.default `
  mutation updateQuizz($quizzId: uuid!, $quizz: quizz_set_input!) {
    __typename
    update_quizz_by_pk(pk_columns: { id: $quizzId }, _set: $quizz) {
      __typename
      ...Quizz
    }
  }
  ${exports.QuizzFragmentDoc}
`;
exports.InsertQuizzQuestionDocument = graphql_tag_1.default `
  mutation insertQuizzQuestion($object: quizz_questions_insert_input!) {
    insert_quizz_questions_one(object: $object) {
      ...QuizzQuestions
      quizz_questions_answers {
        ...QuizzQuestionAnswers
      }
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
  ${exports.QuizzQuestionAnswersFragmentDoc}
`;
exports.UpdateQuizzQuestionDocument = graphql_tag_1.default `
  mutation updateQuizzQuestion(
    $id: uuid!
    $updates: quizz_questions_set_input!
    $quizzQuestionsAnswers: [quizz_questions_answers_insert_input!]!
  ) {
    delete_quizz_questions_answers(where: { quizz_question_id: { _eq: $id } }) {
      affected_rows
    }
    insert_quizz_questions_answers(objects: $quizzQuestionsAnswers) {
      affected_rows
    }
    update_quizz_questions_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...QuizzQuestions
      quizz_questions_answers {
        ...QuizzQuestionAnswers
      }
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
  ${exports.QuizzQuestionAnswersFragmentDoc}
`;
exports.DeleteQuizzQuestionDocument = graphql_tag_1.default `
  mutation deleteQuizzQuestion($id: uuid!) {
    delete_quizz_questions_by_pk(id: $id) {
      ...QuizzQuestions
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
`;
exports.VerifyRandomDrawingInfosDocument = graphql_tag_1.default `
  query verifyRandomDrawingInfos($gameId: uuid!, $gainsIds: [uuid!]!) {
    game: games_by_pk(id: $gameId) {
      client_id
    }
    gains(where: { id: { _in: $gainsIds } }) {
      id
      client_id
      name
      stock
    }
  }
`;
exports.GetArPlayersDocument = graphql_tag_1.default `
  query getArPlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
  ) {
    players: ar_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
      }
    ) {
      user_id
    }
  }
`;
exports.GetQuizzPlayersDocument = graphql_tag_1.default `
  query getQuizzPlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
    $minScore: numeric
  ) {
    players: quizz_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
        score: { _gte: $minScore }
      }
    ) {
      user_id
    }
  }
`;
exports.GetVotePlayersDocument = graphql_tag_1.default `
  query getVotePlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
  ) {
    players: votes_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
      }
    ) {
      user_id
    }
  }
`;
exports.GetGameRandomDrawingsDocument = graphql_tag_1.default `
  query getGameRandomDrawings($gameId: uuid!) {
    random_drawings(where: { game_id: { _eq: $gameId } }) {
      ...RandomDrawing
    }
  }
  ${exports.RandomDrawingFragmentDoc}
`;
exports.InsertRandomDrawingsDocument = graphql_tag_1.default `
  mutation insertRandomDrawings(
    $randomDrawingsInput: [random_drawings_insert_input!]!
  ) {
    randomDrawings: insert_random_drawings(objects: $randomDrawingsInput) {
      returning {
        ...RandomDrawing
      }
    }
  }
  ${exports.RandomDrawingFragmentDoc}
`;
exports.InsertSurveyDocument = graphql_tag_1.default `
  mutation insertSurvey($survey: surveys_insert_input!) {
    insert_surveys_one(object: $survey) {
      ...Survey
    }
  }
  ${exports.SurveyFragmentDoc}
`;
exports.GetSurveySpecificsDocument = graphql_tag_1.default `
  query getSurveySpecifics($id: uuid!) {
    surveys_by_pk(id: $id) {
      id
      surveys_questions {
        ...SurveyQuestions
      }
    }
  }
  ${exports.SurveyQuestionsFragmentDoc}
`;
exports.UpdateSurveyDocument = graphql_tag_1.default `
  mutation updateSurvey($id: uuid!, $updates: surveys_set_input!) {
    __typename
    update_surveys_by_pk(pk_columns: { id: $id }, _set: $updates) {
      __typename
      ...Survey
    }
  }
  ${exports.SurveyFragmentDoc}
`;
exports.InsertSurveyQuestionDocument = graphql_tag_1.default `
  mutation insertSurveyQuestion($object: surveys_questions_insert_input!) {
    insert_surveys_questions_one(object: $object) {
      ...SurveyQuestions
      surveys_questions_answers {
        ...SurveyQuestionAnswers
      }
    }
  }
  ${exports.SurveyQuestionsFragmentDoc}
  ${exports.SurveyQuestionAnswersFragmentDoc}
`;
exports.UpdateSurveyQuestionDocument = graphql_tag_1.default `
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
  ${exports.SurveyQuestionsFragmentDoc}
  ${exports.SurveyQuestionAnswersFragmentDoc}
`;
exports.DeleteSurveyQuestionDocument = graphql_tag_1.default `
  mutation deleteSurveyQuestion($id: uuid!) {
    delete_surveys_questions_by_pk(id: $id) {
      id
    }
  }
`;
exports.GetTemplatesByClientDocument = graphql_tag_1.default `
  query getTemplatesByClient($clientId: uuid!) {
    templates(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: asc }
    ) {
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
exports.InsertTemplateDocument = graphql_tag_1.default `
  mutation insertTemplate($template: templates_insert_input!) {
    insert_templates_one(object: $template) {
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
exports.UpdateTemplateDocument = graphql_tag_1.default `
  mutation updateTemplate($templateId: uuid!, $updates: templates_set_input!) {
    __typename
    update_templates_by_pk(pk_columns: { id: $templateId }, _set: $updates) {
      __typename
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
exports.ArchiveTemplateDocument = graphql_tag_1.default `
  mutation archiveTemplate($templateId: uuid!) {
    __typename
    update_templates_by_pk(
      pk_columns: { id: $templateId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
exports.GetTrackersDocument = graphql_tag_1.default `
  query getTrackers($clientId: uuid) {
    ar_trackers(
      order_by: { name: asc }
      where: {
        _or: [
          { client_id: { _eq: $clientId } }
          { client_id: { _is_null: true } }
        ]
      }
    ) {
      ...Tracker
    }
  }
  ${exports.TrackerFragmentDoc}
`;
exports.InsertTrackerDocument = graphql_tag_1.default `
  mutation insertTracker($object: ar_trackers_insert_input!) {
    insert_ar_trackers_one(object: $object) {
      ...Tracker
    }
  }
  ${exports.TrackerFragmentDoc}
`;
exports.UpdateTrackerDocument = graphql_tag_1.default `
  mutation updateTracker($id: uuid!, $updates: ar_trackers_set_input!) {
    update_ar_trackers_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Tracker
    }
  }
  ${exports.TrackerFragmentDoc}
`;
exports.GetVoteResultsDocument = graphql_tag_1.default `
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
exports.InsertVoteDocument = graphql_tag_1.default `
  mutation insertVote($vote: votes_insert_input!) {
    insert_votes_one(object: $vote) {
      ...Vote
    }
  }
  ${exports.VoteFragmentDoc}
`;
exports.GetVoteSpecificsDocument = graphql_tag_1.default `
  query getVoteSpecifics($id: uuid!) {
    votes_by_pk(id: $id) {
      id
      votes_selections {
        ...VoteSelection
      }
    }
  }
  ${exports.VoteSelectionFragmentDoc}
`;
exports.InsertVoteSelectionDocument = graphql_tag_1.default `
  mutation insertVoteSelection($object: votes_selections_insert_input!) {
    insert_votes_selections_one(object: $object) {
      ...VoteSelection
      votes_selections_choices {
        ...VoteSelectionChoice
      }
    }
  }
  ${exports.VoteSelectionFragmentDoc}
  ${exports.VoteSelectionChoiceFragmentDoc}
`;
exports.UpdateVoteSelectionDocument = graphql_tag_1.default `
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
  ${exports.VoteSelectionFragmentDoc}
  ${exports.VoteSelectionChoiceFragmentDoc}
`;
exports.DeleteVoteSelectionDocument = graphql_tag_1.default `
  mutation deleteVoteSelection($id: uuid!) {
    delete_votes_selections_by_pk(id: $id) {
      ...VoteSelection
    }
  }
  ${exports.VoteSelectionFragmentDoc}
`;
exports.GetClientsByEmailDocument = graphql_tag_1.default `
  query getClientsByEmail($email: String!) {
    clients(where: { email: { _eq: $email } }) {
      ...ClientDisplay
      password
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
exports.InsertClientDocument = graphql_tag_1.default `
  mutation insertClient($client: clients_insert_input!) {
    insert_clients_one(object: $client) {
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
exports.InsertClientPasswordForgottenTokenDocument = graphql_tag_1.default `
  mutation insertClientPasswordForgottenToken($client_id: uuid!) {
    insert_clients_password_forgotten_tokens_one(
      object: { client_id: $client_id }
      on_conflict: {
        constraint: clients_password_forgotten_tokens_client_id_key
        update_columns: [id, created_at]
      }
    ) {
      id
    }
  }
`;
exports.ResetPasswordDocument = graphql_tag_1.default `
  mutation resetPassword(
    $resetTokenId: uuid!
    $limitDate: timestamp!
    $newPassword: String!
  ) {
    update_clients(
      where: {
        password_forgotten_token: {
          id: { _eq: $resetTokenId }
          created_at: { _gte: $limitDate }
        }
      }
      _set: { password: $newPassword }
    ) {
      affected_rows
    }
    delete_clients_password_forgotten_tokens_by_pk(id: $resetTokenId) {
      id
    }
  }
`;
exports.GetUsersByEmailDocument = graphql_tag_1.default `
  query getUsersByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      ...UserDisplay
      password
      apple_id
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
exports.GetUsersByAppleIdDocument = graphql_tag_1.default `
  query getUsersByAppleId($appleId: String!) {
    users(where: { apple_id: { _eq: $appleId } }) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
exports.InsertUserDocument = graphql_tag_1.default `
  mutation insertUser($user: users_insert_input!) {
    insert_users_one(object: $user) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
exports.UpsertUserDocument = graphql_tag_1.default `
  mutation upsertUser($user: users_insert_input!) {
    insert_users_one(
      object: $user
      on_conflict: {
        constraint: users_email_key
        update_columns: [apple_id, name, first_name]
      }
    ) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
exports.UpsertAddressDocument = graphql_tag_1.default `
  mutation upsertAddress($address: addresses_insert_input!) {
    insert_addresses_one(
      object: $address
      on_conflict: {
        constraint: addresses_pkey
        update_columns: [address, city, zipcode, country]
      }
    ) {
      id
      ...Address
    }
  }
  ${exports.AddressFragmentDoc}
`;
exports.ValidateGainDocument = graphql_tag_1.default `
  mutation validateGain($id: bigint!, $fromRandomDrawing: Boolean!) {
    update_games_played_by_pk(
      pk_columns: { id: $id }
      _set: { gain_validated: true }
    ) @skip(if: $fromRandomDrawing) {
      id
      gain_validated
    }
    update_random_drawings_by_pk(
      pk_columns: { id: $id }
      _set: { gain_validated: true }
    ) @include(if: $fromRandomDrawing) {
      id
      gain_validated
    }
  }
`;
exports.GetGainsWonDocument = graphql_tag_1.default `
  query getGainsWon {
    games_played(
      where: { gain_id: { _is_null: false }, gain_validated: { _eq: false } }
      order_by: { played_at: desc }
    ) {
      ...GameWon
    }
    random_drawings(
      where: { gain_validated: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      ...RandomDrawingWon
    }
  }
  ${exports.GameWonFragmentDoc}
  ${exports.RandomDrawingWonFragmentDoc}
`;
exports.GetGameFrequencyDocument = graphql_tag_1.default `
  query getGameFrequency($gameId: uuid!) {
    games_by_pk(id: $gameId) {
      is_active
      frequency
      max_participations
      tz
      type {
        name
      }
    }
  }
`;
exports.GetGamePlayedCountDocument = graphql_tag_1.default `
  query getGamePlayedCount(
    $gameId: uuid!
    $userId: uuid!
    $dateFrom: timestamptz
  ) {
    games_played_aggregate(
      where: {
        game_id: { _eq: $gameId }
        user_id: { _eq: $userId }
        played_at: { _gte: $dateFrom }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
exports.GetInfosToPlayArDocument = graphql_tag_1.default `
  query getInfosToPlayAr($gameId: uuid!) {
    ar: ar_by_pk(id: $gameId) {
      ...InfosToPlayAr
    }
  }
  ${exports.InfosToPlayArFragmentDoc}
`;
exports.PlayArDocument = graphql_tag_1.default `
  mutation playAr($gameId: uuid!, $gainId: uuid, $userId: uuid!) {
    arPlayed: insert_ar_played_one(
      object: { game_id: $gameId, gain_id: $gainId, user_id: $userId }
    ) {
      ...ArPlayed
    }
  }
  ${exports.ArPlayedFragmentDoc}
`;
exports.GetInfosToPlayQuizzDocument = graphql_tag_1.default `
  query getInfosToPlayQuizz($gameId: uuid!) {
    quizz: quizz_by_pk(id: $gameId) {
      ...InfosToPlayQuizz
    }
  }
  ${exports.InfosToPlayQuizzFragmentDoc}
`;
exports.PlayQuizzDocument = graphql_tag_1.default `
  mutation playQuizz(
    $gameId: uuid!
    $gainId: uuid
    $userId: uuid!
    $score: numeric!
    $time: numeric!
  ) {
    quizzPlayed: insert_quizz_played_one(
      object: {
        game_id: $gameId
        gain_id: $gainId
        user_id: $userId
        score: $score
        time: $time
      }
    ) {
      ...QuizzPlayed
    }
  }
  ${exports.QuizzPlayedFragmentDoc}
`;
exports.GetQuizzByIdDocument = graphql_tag_1.default `
  query getQuizzById($id: uuid!) {
    quizz_by_pk(id: $id) {
      ...QuizzClient
    }
  }
  ${exports.QuizzClientFragmentDoc}
`;
exports.GetInfosToPlayVoteDocument = graphql_tag_1.default `
  query getInfosToPlayVote($gameId: uuid!) {
    vote: votes_by_pk(id: $gameId) {
      ...InfosToPlayVote
    }
  }
  ${exports.InfosToPlayVoteFragmentDoc}
`;
exports.PlayVoteDocument = graphql_tag_1.default `
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
  ${exports.VotePlayedFragmentDoc}
`;
exports.GetVoteByIdDocument = graphql_tag_1.default `
  query getVoteById($id: uuid!) {
    votes_by_pk(id: $id) {
      ...VoteClient
    }
  }
  ${exports.VoteClientFragmentDoc}
`;
exports.GetGoodiesDocument = graphql_tag_1.default `
  query getGoodies($clientId: uuid) {
    goodies(where: { client_id: { _eq: $clientId } }) {
      ...Goodie
      client {
        picture {
          ...Asset
        }
      }
    }
  }
  ${exports.GoodieFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.GetGoodieAnimationsDocument = graphql_tag_1.default `
  query getGoodieAnimations($id: uuid!) {
    goodies_by_pk(id: $id) {
      id
      animations {
        ...GoodieM2MAnimation
      }
    }
  }
  ${exports.GoodieM2MAnimationFragmentDoc}
`;
exports.PlayGoodieDocument = graphql_tag_1.default `
  mutation playGoodie($goodieId: uuid!, $userId: uuid!) {
    goodiePlayed: insert_goodies_played_one(
      object: { goodie_id: $goodieId, user_id: $userId }
    ) {
      ...GoodiePlayed
    }
  }
  ${exports.GoodiePlayedFragmentDoc}
`;
exports.GetTemplateByIdDocument = graphql_tag_1.default `
  query getTemplateById($templateId: uuid!) {
    templates_by_pk(id: $templateId) {
      id
      name
      html
    }
  }
`;
exports.GetNearbyCardsDocument = graphql_tag_1.default `
  query getNearbyCards($location: geometry!) {
    get_nearby_games(args: { user_location: $location }) {
      ...NearbyGameCard
    }
    get_nearby_communications(args: { user_location: $location }) {
      ...NearbyCommunicationCard
    }
  }
  ${exports.NearbyGameCardFragmentDoc}
  ${exports.NearbyCommunicationCardFragmentDoc}
`;
exports.GetNearbyPrivateDeckCardsDocument = graphql_tag_1.default `
  query getNearbyPrivateDeckCards($location: geometry!, $privateDeckId: uuid!) {
    get_nearby_private_deck_games(
      args: { user_location: $location, private_deck_id: $privateDeckId }
    ) {
      ...NearbyGameCard
    }
    get_nearby_private_deck_communications(
      args: { user_location: $location, private_deck_id: $privateDeckId }
    ) {
      ...NearbyCommunicationCard
    }
  }
  ${exports.NearbyGameCardFragmentDoc}
  ${exports.NearbyCommunicationCardFragmentDoc}
`;
exports.GetNearbyCommunicationsDocument = graphql_tag_1.default `
  query getNearbyCommunications(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    communications(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyCommunication
    }
  }
  ${exports.NearbyCommunicationFragmentDoc}
`;
exports.GetNearbyGamesDocument = graphql_tag_1.default `
  query getNearbyGames(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    games(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_test: { _neq: true }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyGame
    }
  }
  ${exports.NearbyGameFragmentDoc}
`;
exports.GetTestGamesDocument = graphql_tag_1.default `
  query getTestGames {
    games(where: { is_test: { _eq: true } }) {
      ...NearbyGame
    }
  }
  ${exports.NearbyGameFragmentDoc}
`;
exports.GetPrivateDeckByCodeDocument = graphql_tag_1.default `
  query getPrivateDeckByCode($code: String!) {
    privates_decks(
      where: { code: { _eq: $code }, is_archive: { _neq: true } }
    ) {
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
exports.InsertPrivateDeckM2mUserDocument = graphql_tag_1.default `
  mutation insertPrivateDeckM2mUser($privateDeckId: uuid!) {
    insert_privates_decks_m2m_users_one(
      object: { private_deck_id: $privateDeckId }
    ) {
      ...PrivateDeckM2mUser
    }
  }
  ${exports.PrivateDeckM2mUserFragmentDoc}
`;
exports.GetPrivatesDeckByUserDocument = graphql_tag_1.default `
  query getPrivatesDeckByUser($userId: uuid!) {
    privates_decks_m2m_users(where: { user_id: { _eq: $userId } }) {
      ...PrivateDeckM2mUser
    }
  }
  ${exports.PrivateDeckM2mUserFragmentDoc}
`;
exports.GetUserByIdDocument = graphql_tag_1.default `
  query getUserById($id: uuid!) {
    users_by_pk(id: $id) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
exports.UpdateUserDocument = graphql_tag_1.default `
  mutation updateUser($userId: uuid!, $user: users_set_input) {
    update_users_by_pk(pk_columns: { id: $userId }, _set: $user) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
exports.CreateStripeCustomerDocument = graphql_tag_1.default `
  mutation createStripeCustomer($name: String!, $email: String!) {
    create_stripe_customer(name: $name, email: $email) {
      stripe_cust_id
    }
  }
`;
exports.CreateStripeIntentDocument = graphql_tag_1.default `
  mutation createStripeIntent($customerId: String!) {
    create_stripe_intent(customerId: $customerId) {
      client_secret
    }
  }
`;
exports.GetStripeCustomerPaymentMethodsDocument = graphql_tag_1.default `
  query getStripeCustomerPaymentMethods($customer: String!, $type: String!) {
    get_stripe_customer_payment_methods(customer: $customer, type: $type) {
      id
      object
      billing_details {
        address {
          city
          country
          line1
          line2
          postal_code
          state
        }
        email
        name
        phone
      }
      card {
        brand
        country
        exp_month
        exp_year
        fingerprint
        funding
        generated_from
        last4
        wallet
      }
      created
      customer
      livemode
      type
    }
  }
`;
const defaultWrapper = sdkFunction => sdkFunction();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        getAr(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetArDocument, variables, requestHeaders));
        },
        getArSpecifics(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetArSpecificsDocument, variables, requestHeaders));
        },
        insertAr(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertArDocument, variables, requestHeaders));
        },
        updateAnimation(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateAnimationDocument, variables, requestHeaders));
        },
        insertArM2mAnimations(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertArM2mAnimationsDocument, variables, requestHeaders));
        },
        DeleteArM2mAnimations(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteArM2mAnimationsDocument, variables, requestHeaders));
        },
        insertAnimationsM2mAssets(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertAnimationsM2mAssetsDocument, variables, requestHeaders));
        },
        updateAnimationsM2mAssets(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateAnimationsM2mAssetsDocument, variables, requestHeaders));
        },
        deleteAnimationsM2mAssets(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteAnimationsM2mAssetsDocument, variables, requestHeaders));
        },
        getAssetById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetAssetByIdDocument, variables, requestHeaders));
        },
        getAssetByPath(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetAssetByPathDocument, variables, requestHeaders));
        },
        getAssets(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetAssetsDocument, variables, requestHeaders));
        },
        insertAsset(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertAssetDocument, variables, requestHeaders));
        },
        updateAsset(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateAssetDocument, variables, requestHeaders));
        },
        addResourceToAsset(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.AddResourceToAssetDocument, variables, requestHeaders));
        },
        deleteResourceFromAsset(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteResourceFromAssetDocument, variables, requestHeaders));
        },
        getClients(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetClientsDocument, variables, requestHeaders));
        },
        getClientById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetClientByIdDocument, variables, requestHeaders));
        },
        updateClientIsActive(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateClientIsActiveDocument, variables, requestHeaders));
        },
        updateClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateClientDocument, variables, requestHeaders));
        },
        getCommunicationsTypes(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetCommunicationsTypesDocument, variables, requestHeaders));
        },
        getCommunicationTypeById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetCommunicationTypeByIdDocument, variables, requestHeaders));
        },
        getCommunicationsByClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetCommunicationsByClientDocument, variables, requestHeaders));
        },
        getCommunicationsByClientAndCommunicationType(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetCommunicationsByClientAndCommunicationTypeDocument, variables, requestHeaders));
        },
        insertCommunication(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertCommunicationDocument, variables, requestHeaders));
        },
        updateCommunication(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateCommunicationDocument, variables, requestHeaders));
        },
        archiveCommunication(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveCommunicationDocument, variables, requestHeaders));
        },
        getEstimatesByClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetEstimatesByClientDocument, variables, requestHeaders));
        },
        insertEstimate(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertEstimateDocument, variables, requestHeaders));
        },
        updateEstimate(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateEstimateDocument, variables, requestHeaders));
        },
        archiveEstimate(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveEstimateDocument, variables, requestHeaders));
        },
        insertEstimateM2mEntity(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertEstimateM2mEntityDocument, variables, requestHeaders));
        },
        updateEstimateM2mEntity(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateEstimateM2mEntityDocument, variables, requestHeaders));
        },
        getEstimatesM2mEntities(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetEstimatesM2mEntitiesDocument, variables, requestHeaders));
        },
        archiveEstimatesM2mEntitiesByPk(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveEstimatesM2mEntitiesByPkDocument, variables, requestHeaders));
        },
        getGamesCommunicationsTypes(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamesCommunicationsTypesDocument, variables, requestHeaders));
        },
        getGainsVirtualsByGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGainsVirtualsByGainDocument, variables, requestHeaders));
        },
        insertGainsVirtuals(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertGainsVirtualsDocument, variables, requestHeaders));
        },
        getGainsByClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGainsByClientDocument, variables, requestHeaders));
        },
        insertGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertGainDocument, variables, requestHeaders));
        },
        updateGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateGainDocument, variables, requestHeaders));
        },
        archiveGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveGainDocument, variables, requestHeaders));
        },
        insertGameGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertGameGainDocument, variables, requestHeaders));
        },
        updateGameGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateGameGainDocument, variables, requestHeaders));
        },
        deleteGameGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteGameGainDocument, variables, requestHeaders));
        },
        getGamesPlayedStatisticByClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamesPlayedStatisticByClientDocument, variables, requestHeaders));
        },
        getGameWinners(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGameWinnersDocument, variables, requestHeaders));
        },
        getGamesTypes(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamesTypesDocument, variables, requestHeaders));
        },
        getGameTypeById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGameTypeByIdDocument, variables, requestHeaders));
        },
        getGamesMinimalInfos(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamesMinimalInfosDocument, variables, requestHeaders));
        },
        getGamesByClientAndGameType(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamesByClientAndGameTypeDocument, variables, requestHeaders));
        },
        insertGame(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertGameDocument, variables, requestHeaders));
        },
        updateGame(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateGameDocument, variables, requestHeaders));
        },
        archiveGame(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveGameDocument, variables, requestHeaders));
        },
        getGoodie(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGoodieDocument, variables, requestHeaders));
        },
        insertGoodie(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertGoodieDocument, variables, requestHeaders));
        },
        updateGoodie(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateGoodieDocument, variables, requestHeaders));
        },
        archiveGoodie(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveGoodieDocument, variables, requestHeaders));
        },
        insertGoodiesM2mAnimations(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertGoodiesM2mAnimationsDocument, variables, requestHeaders));
        },
        DeleteGoodiesM2mAnimations(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteGoodiesM2mAnimationsDocument, variables, requestHeaders));
        },
        insertInfo(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertInfoDocument, variables, requestHeaders));
        },
        getInfoSpecifics(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetInfoSpecificsDocument, variables, requestHeaders));
        },
        updateInfo(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateInfoDocument, variables, requestHeaders));
        },
        insertPhoto(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertPhotoDocument, variables, requestHeaders));
        },
        getPhotoSpecifics(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetPhotoSpecificsDocument, variables, requestHeaders));
        },
        updatePhoto(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdatePhotoDocument, variables, requestHeaders));
        },
        getPrivatesDecksByClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetPrivatesDecksByClientDocument, variables, requestHeaders));
        },
        insertPrivateDeck(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertPrivateDeckDocument, variables, requestHeaders));
        },
        updatePrivateDeck(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdatePrivateDeckDocument, variables, requestHeaders));
        },
        archivePrivateDeck(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchivePrivateDeckDocument, variables, requestHeaders));
        },
        getGamesCommunicationsMinimalInfos(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamesCommunicationsMinimalInfosDocument, variables, requestHeaders));
        },
        insertPrivateDeckM2mEntity(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertPrivateDeckM2mEntityDocument, variables, requestHeaders));
        },
        getPrivateDeckM2mEntities(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetPrivateDeckM2mEntitiesDocument, variables, requestHeaders));
        },
        deletePrivateDeckM2mEntitiesByPk(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeletePrivateDeckM2mEntitiesByPkDocument, variables, requestHeaders));
        },
        getQuizzSpecifics(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetQuizzSpecificsDocument, variables, requestHeaders));
        },
        insertQuizz(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertQuizzDocument, variables, requestHeaders));
        },
        updateQuizz(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateQuizzDocument, variables, requestHeaders));
        },
        insertQuizzQuestion(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertQuizzQuestionDocument, variables, requestHeaders));
        },
        updateQuizzQuestion(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateQuizzQuestionDocument, variables, requestHeaders));
        },
        deleteQuizzQuestion(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteQuizzQuestionDocument, variables, requestHeaders));
        },
        verifyRandomDrawingInfos(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.VerifyRandomDrawingInfosDocument, variables, requestHeaders));
        },
        getArPlayers(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetArPlayersDocument, variables, requestHeaders));
        },
        getQuizzPlayers(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetQuizzPlayersDocument, variables, requestHeaders));
        },
        getVotePlayers(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetVotePlayersDocument, variables, requestHeaders));
        },
        getGameRandomDrawings(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGameRandomDrawingsDocument, variables, requestHeaders));
        },
        insertRandomDrawings(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertRandomDrawingsDocument, variables, requestHeaders));
        },
        insertSurvey(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertSurveyDocument, variables, requestHeaders));
        },
        getSurveySpecifics(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetSurveySpecificsDocument, variables, requestHeaders));
        },
        updateSurvey(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateSurveyDocument, variables, requestHeaders));
        },
        insertSurveyQuestion(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertSurveyQuestionDocument, variables, requestHeaders));
        },
        updateSurveyQuestion(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateSurveyQuestionDocument, variables, requestHeaders));
        },
        deleteSurveyQuestion(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteSurveyQuestionDocument, variables, requestHeaders));
        },
        getTemplatesByClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetTemplatesByClientDocument, variables, requestHeaders));
        },
        insertTemplate(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertTemplateDocument, variables, requestHeaders));
        },
        updateTemplate(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateTemplateDocument, variables, requestHeaders));
        },
        archiveTemplate(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ArchiveTemplateDocument, variables, requestHeaders));
        },
        getTrackers(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetTrackersDocument, variables, requestHeaders));
        },
        insertTracker(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertTrackerDocument, variables, requestHeaders));
        },
        updateTracker(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateTrackerDocument, variables, requestHeaders));
        },
        getVoteResults(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetVoteResultsDocument, variables, requestHeaders));
        },
        insertVote(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertVoteDocument, variables, requestHeaders));
        },
        getVoteSpecifics(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetVoteSpecificsDocument, variables, requestHeaders));
        },
        insertVoteSelection(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertVoteSelectionDocument, variables, requestHeaders));
        },
        updateVoteSelection(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateVoteSelectionDocument, variables, requestHeaders));
        },
        deleteVoteSelection(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteVoteSelectionDocument, variables, requestHeaders));
        },
        getClientsByEmail(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetClientsByEmailDocument, variables, requestHeaders));
        },
        insertClient(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertClientDocument, variables, requestHeaders));
        },
        insertClientPasswordForgottenToken(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertClientPasswordForgottenTokenDocument, variables, requestHeaders));
        },
        resetPassword(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ResetPasswordDocument, variables, requestHeaders));
        },
        getUsersByEmail(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetUsersByEmailDocument, variables, requestHeaders));
        },
        getUsersByAppleId(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetUsersByAppleIdDocument, variables, requestHeaders));
        },
        insertUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertUserDocument, variables, requestHeaders));
        },
        upsertUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpsertUserDocument, variables, requestHeaders));
        },
        upsertAddress(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpsertAddressDocument, variables, requestHeaders));
        },
        validateGain(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.ValidateGainDocument, variables, requestHeaders));
        },
        getGainsWon(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGainsWonDocument, variables, requestHeaders));
        },
        getGameFrequency(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGameFrequencyDocument, variables, requestHeaders));
        },
        getGamePlayedCount(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGamePlayedCountDocument, variables, requestHeaders));
        },
        getInfosToPlayAr(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetInfosToPlayArDocument, variables, requestHeaders));
        },
        playAr(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.PlayArDocument, variables, requestHeaders));
        },
        getInfosToPlayQuizz(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetInfosToPlayQuizzDocument, variables, requestHeaders));
        },
        playQuizz(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.PlayQuizzDocument, variables, requestHeaders));
        },
        getQuizzById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetQuizzByIdDocument, variables, requestHeaders));
        },
        getInfosToPlayVote(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetInfosToPlayVoteDocument, variables, requestHeaders));
        },
        playVote(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.PlayVoteDocument, variables, requestHeaders));
        },
        getVoteById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetVoteByIdDocument, variables, requestHeaders));
        },
        getGoodies(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGoodiesDocument, variables, requestHeaders));
        },
        getGoodieAnimations(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetGoodieAnimationsDocument, variables, requestHeaders));
        },
        playGoodie(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.PlayGoodieDocument, variables, requestHeaders));
        },
        getTemplateById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetTemplateByIdDocument, variables, requestHeaders));
        },
        getNearbyCards(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetNearbyCardsDocument, variables, requestHeaders));
        },
        getNearbyPrivateDeckCards(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetNearbyPrivateDeckCardsDocument, variables, requestHeaders));
        },
        getNearbyCommunications(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetNearbyCommunicationsDocument, variables, requestHeaders));
        },
        getNearbyGames(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetNearbyGamesDocument, variables, requestHeaders));
        },
        getTestGames(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetTestGamesDocument, variables, requestHeaders));
        },
        getPrivateDeckByCode(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetPrivateDeckByCodeDocument, variables, requestHeaders));
        },
        insertPrivateDeckM2mUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.InsertPrivateDeckM2mUserDocument, variables, requestHeaders));
        },
        getPrivatesDeckByUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetPrivatesDeckByUserDocument, variables, requestHeaders));
        },
        getUserById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetUserByIdDocument, variables, requestHeaders));
        },
        updateUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdateUserDocument, variables, requestHeaders));
        },
        createStripeCustomer(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.CreateStripeCustomerDocument, variables, requestHeaders));
        },
        createStripeIntent(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.CreateStripeIntentDocument, variables, requestHeaders));
        },
        getStripeCustomerPaymentMethods(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.GetStripeCustomerPaymentMethodsDocument, variables, requestHeaders));
        },
    };
}
exports.getSdk = getSdk;
